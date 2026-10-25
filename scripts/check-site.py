"""Check the running production site: routes, anchors, locales, redirects and search."""
import concurrent.futures
import json
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import urlopen

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3000').rstrip('/')
ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids, self.headings, self.links = set(), [], set()
        self.lang = self.direction = None
        self.in_article = False
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'article':
            self.in_article = True
        if tag == 'html':
            self.lang, self.direction = attrs.get('lang'), attrs.get('dir')
        if 'id' in attrs:
            self.ids.add(attrs['id'])
            if self.in_article and tag in ('h2', 'h3'):
                self.headings.append(attrs['id'])
        if tag == 'a' and attrs.get('href'):
            self.links.add(attrs['href'])

    def handle_endtag(self, tag):
        if tag == 'article':
            self.in_article = False


def get(path):
    with urlopen(BASE + path, timeout=30) as response:
        assert response.status == 200, path
        return response.read().decode()


routes = []
for path in (ROOT / 'content/docs').rglob('*'):
    if path.suffix not in ('.md', '.mdx'):
        continue
    parts = list(path.relative_to(ROOT / 'content/docs').with_suffix('').parts)
    ar = parts[0] == 'ar'
    if ar:
        parts.pop(0)
    if parts[-1] == 'index':
        parts.pop()
    routes.append(('/ar' if ar else '') + '/docs' + ('/' + '/'.join(parts) if parts else ''))

with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    pages = dict(zip(routes, (Page(text) for text in pool.map(get, routes))))
errors, checked_links, downloads = [], 0, set()
for route, page in pages.items():
    ar = route.startswith('/ar/')
    if (page.lang, page.direction) != (('ar', 'rtl') if ar else ('en', 'ltr')):
        errors.append(f'Wrong language/direction: {route}')
    for href in page.links:
        link = urlsplit(urljoin(BASE + route, href))
        if link.netloc != urlsplit(BASE).netloc:
            continue
        target = link.path.rstrip('/') or '/'
        if target.startswith('/sources/'):
            downloads.add(target)
            continue
        if target not in pages:
            errors.append(f'Missing page: {route} -> {href}')
        elif link.fragment and unquote(link.fragment) not in pages[target].ids:
            errors.append(f'Missing anchor: {route} -> {href}')
        checked_links += 1
    if not ar:
        translated = pages.get('/ar' + route)
        if not translated:
            errors.append(f'Missing Arabic page: {route}')
        elif set(page.headings) != set(translated.headings):
            errors.append(f'Heading mismatch: {route}: {set(page.headings) ^ set(translated.headings)}')

for prefix in ['', '/ar']:
    rules = {h for h in pages[prefix + '/docs/terms/standard'].headings if h.startswith('rule-')}
    assert rules == {f'rule-{n:03}' for n in range(1, 74)}, f'Missing rules: {prefix}'
    categories = [page for route, page in pages.items() if route.startswith(prefix + '/docs/terms/dictionary/')]
    assert len(categories) == 19, f'Missing categories: {prefix}'
    assert sum(len(page.headings) for page in categories) == 180, f'Missing concepts: {prefix}'
    assert len(pages[prefix + '/docs/terms/registries'].headings) == 7
    for old, new in [('vocabulary', 'terms/dictionary'), ('quranic-vocabulary-standard', 'terms/standard'), ('quranic-vocab-skill', 'terms'), ('terms/sources', 'terms'), ('terms/decisions', 'terms/standard'), ('terms/naming', 'terms/standard')]:
        with urlopen(BASE + prefix + '/docs/' + old) as response:
            assert response.url == BASE + prefix + '/docs/' + new, response.url

for locale, query in [('en', 'hamzah'), ('ar', '%D8%A7%D9%84%D9%87%D9%85%D8%B2%D8%A9')]:
    results = json.loads(get(f'/api/search?query={query}&locale={locale}'))
    assert results, f'Empty search results: {locale}'
    assert all(item['url'].startswith('/ar/docs' if locale == 'ar' else '/docs') for item in results), f'Wrong search locale: {locale}'
    assert any('/terms/dictionary/' in item['url'] for item in results), f'Dictionary missing from search: {locale}'

for download in downloads:
    with urlopen(BASE + download) as response:
        assert response.status == 200 and response.read(1), download
if errors:
    raise SystemExit('\n'.join(sorted(set(errors))))
print(f'Verified {len(pages)} bilingual pages, {checked_links} internal links, {len(downloads)} source downloads, redirects and search. Each language: 73 rules, 180 concepts, 19 categories, 7 registries.')
