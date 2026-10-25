"""Publish the pinned PR without rewriting its prose; --check detects drift."""

import argparse
import hashlib
import json
import re
import tarfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REVISION = '9bf0db1bac9a8186bced687950e0ccf04311d3e3'
REPOSITORY = 'https://github.com/realabdu/quran-ws-docs'
ARCHIVE = ROOT / 'public/sources/quran-ws-pr-9.tar.gz'
ARCHIVE_SHA256 = '9939f5a363a4eb9bdc1cfba05511b21250a24aedb4f69f7bbe09ed377f9105df'
assert hashlib.sha256(ARCHIVE.read_bytes()).hexdigest() == ARCHIVE_SHA256, 'Unexpected source archive'
CHECK = argparse.ArgumentParser(description=__doc__)
CHECK.add_argument('--check', action='store_true')
checking = CHECK.parse_args().check
outputs = {}

# Marqoom's own changes to the imported text. It leaves out pointers to the decision record,
# which it does not publish, instructions for the upstream build, since these pages are edited
# here, and the dictionary's opening note, which only pointed to its contributing section.
# In Arabic a dictionary category is a «موضوع» (topic), not a «مجال».
EDITS = {
    'standard': {
        'en': [
            (' See the [decision record](/docs/terms/decisions) for the reasoning and how letters with shared name spellings are distinguished.', ''),
            (' The [decision record](/docs/terms/decisions) explains the distinction.', ''),
            (', with explanations in the [decision record](/docs/terms/decisions).', '.'),
        ],
        'ar': [
            (' وتفاصيل القرار، ومنها كيفية تمييز الحروف التي تشترك أسماؤها في التهجئة، في [سجل القرارات](/ar/docs/terms/decisions).', ''),
            (' ويوضح [سجل القرارات](/ar/docs/terms/decisions) سبب هذا الفصل.', ''),
            ('، مع شرح قراراتها في [سجل القرارات](/ar/docs/terms/decisions).', '.'),
        ],
    },
    'registries': {
        'en': [('> Generated from `standards/terminology/registries/*.tsv` — edit the registry,\n> not this page, then run `python3 tools/build.py`.\n\n', '')],
        'ar': [('> مولّد من `standards/terminology/registries/*.tsv` — عدّل السجل لا هذه الصفحة،\n> ثم شغّل `python3 tools/build.py`.\n\n', '')],
    },
    'dictionary': {
        'en': [
            ('> This guide explains how to read the dictionary. To correct an entry or add a concept, follow the [contribution instructions](/docs/terms/dictionary#contributing).\n\n', ''),
            ('- The build and tests pass, and generated files are included in the PR.\n', ''),
            ('```bash\npython3 tools/build.py\npython3 -m pytest -q\n```\n\nSee the [maintenance guide](https://github.com/quran-ws/docs/blob/main/tools/README.md) for generation, versioning and checks.\n\n', ''),
        ],
        'ar': [
            ('> يشرح هذا الدليل قراءة القاموس. لتصحيح مدخل أو إضافة مفهوم، اتبع [تعليمات المساهمة](/ar/docs/terms/dictionary#contributing).\n\n', ''),
            ('فهو المجال الذي يظهر تحته المدخل في هذه الصفحة. لكل مدخل نوع واحد ومجال واحد؛', 'فهو الموضوع الذي يظهر تحته المدخل في هذه الصفحة. لكل مدخل نوع واحد وموضوع واحد؛'),
            ('ومجالاته الخاصة', 'ومواضيعه الخاصة'),
            ('من المجالات الموجودة. لا تنشئ نوعًا يجمع الشكل والمجال، مثل `textual_concept`، ولا تضف مجالًا فارغًا.', 'من المواضيع الموجودة. لا تنشئ نوعًا يجمع الشكل والموضوع، مثل `textual_concept`، ولا تضف موضوعًا فارغًا.'),
            ('| النوع | المجال | التعريف |', '| النوع | الموضوع | التعريف |'),
            ('## حسب المجال [#section-18]', '## حسب الموضوع [#section-18]'),
            ('- البناء والاختبارات ناجحان، والملفات المولدة مرفقة في `PR`.\n', ''),
            ('```bash\npython3 tools/build.py\npython3 -m pytest -q\n```\n\nتفاصيل التوليد والإصدارات والفحوص في [دليل الصيانة](https://github.com/quran-ws/docs/blob/main/tools/README.md).\n\n', ''),
        ],
    },
}


# Every entry shows the standard's published version, the one in lib/versions.ts, where the
# source records its review status: all 180 entries are drafts of that version.
VERSION = re.search(r"terminologyVersion = '([^']+)'", (ROOT / 'lib/versions.ts').read_text())[1]
ENTRY_STATUS = {
    'en': ('| Status | `draft` |', f'| Version | `{VERSION}` |'),
    'ar': ('| الحالة | <span dir="ltr">`draft`</span> |', f'| الإصدار | <span dir="ltr">`{VERSION}`</span> |'),
}


def versioned(text, locale):
    before, after = ENTRY_STATUS[locale]
    text = text.replace(before, after)
    # An entry with another status stops the import, so the change is decided rather than hidden.
    assert before.split('`')[0] not in text, f'An entry is not a draft in {locale}; decide how to show it'
    return text


def edit(text, name, locale):
    for before, after in EDITS.get(name, {}).get(locale, []):
        assert text.count(before) == 1, f'Edited text not found in {locale}/{name}: {before}'
        text = text.replace(before, after)
    return text

inputs = {}


def publish(path, content):
    outputs[str(path)] = content


def frontmatter(text):
    match = re.match(r'\A---\n(.*?)\n---\n', text, re.S)
    assert match, 'Expected source frontmatter'
    fields = {}
    for key in ['title', 'description', 'status']:
        value = re.search(rf'^{key}: (.+)$', match[1], re.M)
        if value:
            fields[key] = value[1]
    return fields, text[match.end():]


def page(fields, body, source):
    fields = {
        **fields,
        'sourceUrl': f'{REPOSITORY}/blob/{REVISION}/{source}',
        'sourceRevision': REVISION[:7],
    }
    metadata = '\n'.join(f'{key}: {json.dumps(value, ensure_ascii=False)}' for key, value in fields.items())
    return f'---\n{metadata}\n---\n{body}'


def json_file(path, value):
    publish(path, json.dumps(value, ensure_ascii=False, indent=2) + '\n')


def prose(text):
    """Compare every word, code example and table cell, ignoring navigation only."""
    text = re.sub(r'<a id="[^"]+"></a>', '', text)
    text = re.sub(r'\s*\[#[^]]+\]', '', text)
    text = re.sub(r'\]\([^)]+\)', ']', text)
    return ' '.join(text.split())


with tarfile.open(ARCHIVE) as archive:
    prefix = archive.getmembers()[0].name.split('/')[0]

    def read(path):
        content = archive.extractfile(f'{prefix}/{path}').read()
        inputs[path] = hashlib.sha256(content).hexdigest()
        return content.decode()

    for locale in ['en', 'ar']:
        destination = Path('content/docs') / ('ar' if locale == 'ar' else '') / 'terms'
        url = '/ar/docs/terms' if locale == 'ar' else '/docs/terms'
        dictionary_path = f'content/{locale}/reference/dictionary.md'
        dictionary_fields, dictionary_body = frontmatter(read(dictionary_path))
        categories = list(re.finditer(r'^## (.+) — `([a-z_]+)`\n', dictionary_body, re.M))
        assert len(categories) == 19, 'Unexpected dictionary structure'
        concept_pages = {}
        for i, category in enumerate(categories):
            end = categories[i + 1].start() if i + 1 < len(categories) else len(dictionary_body)
            for concept in re.findall(r'<a id="([^"]+)"></a>', dictionary_body[category.end():end]):
                assert concept not in concept_pages, f'Duplicate concept: {concept}'
                concept_pages[concept] = category[2]
        assert len(concept_pages) == 180, 'Dictionary must retain all 180 concepts'

        def rewrite(body, document):
            def link(match):
                href = match[1]
                path, marker, anchor = href.partition('#')
                target = None
                if path.startswith('/guidelines/'):
                    tail = path.split('/reference/')[-1].strip('/')
                    if tail in ['standard', 'dictionary', 'registries', 'decisions']:
                        target = tail
                elif path in ['../standard/', '../dictionary/', '../registries/', '../decisions/']:
                    target = path.strip('./')
                elif not path and document == 'dictionary':
                    target = 'dictionary'
                if target == 'dictionary' and anchor in concept_pages:
                    return f']({url}/dictionary/{concept_pages[anchor]}#{anchor})'
                if target:
                    return f']({url}/{target}{marker}{anchor})'
                return match[0]

            body = re.sub(r'\]\(([^)]+)\)', link, body)
            body = re.sub(
                r'<a id="([^"]+)"></a>\s*\n(#{2,3} [^\n]+)',
                lambda m: f'{m[2]} [#{m[1]}]', body,
            )
            # Language-independent heading IDs preserve the reading location.
            ordinal = 0
            fenced = False
            lines = []
            for line in body.splitlines(keepends=True):
                if line.startswith('```'):
                    fenced = not fenced
                if not fenced and re.match(r'^#{2,3} ', line):
                    ordinal += 1
                    if not re.search(r'\[#[^]]+\]\s*$', line):
                        line = line.rstrip('\n') + f' [#section-{ordinal:02d}]\n'
                lines.append(line)
            result = ''.join(lines)
            assert prose(body) == prose(result), f'Wording changed in {locale}/{document}'
            return result

        for name, relative in [
            ('standard', 'reference/standard.md'),
            ('registries', 'reference/registries.md'),
        ]:
            source = f'content/{locale}/{relative}'
            fields, body = frontmatter(read(source))
            if name == 'standard':
                anchors = re.findall(r'<a id="(rule-\d{3})"></a>', body)
                assert anchors == [f'rule-{i:03d}' for i in range(1, 74)]
            adapted = rewrite(body, name)
            assert prose(body) == prose(adapted), f'Content lost in {locale}/{name}'
            publish(destination / f'{name}.md', page(fields, edit(adapted, name, locale), source))

        index = rewrite(dictionary_body[:categories[0].start()], 'dictionary')
        publish(destination / 'dictionary/index.md', page(dictionary_fields, edit(index, 'dictionary', locale), dictionary_path))
        reconstructed = index
        for i, category in enumerate(categories):
            end = categories[i + 1].start() if i + 1 < len(categories) else len(dictionary_body)
            fields = {**dictionary_fields, 'title': category[1], 'description': category[2]}
            body = rewrite(dictionary_body[category.end():end], 'dictionary')
            reconstructed += category[0] + body
            publish(destination / f'dictionary/{category[2]}.md', page(fields, versioned(body, locale), dictionary_path))
        assert prose(dictionary_body) == prose(reconstructed), f'Dictionary content lost in {locale}'
        json_file(destination / 'dictionary/meta.json', {
            'title': 'القاموس' if locale == 'ar' else 'Dictionary',
            'pages': ['index'] + [c[2] for c in categories],
        })
        json_file(destination / 'meta.json', {
            'title': 'المصطلحات' if locale == 'ar' else 'Terms',
            'defaultOpen': True,
            'pages': ['index', 'standard', 'dictionary', 'registries'],
        })

    # Keep the source license with the downloadable original revision.
    publish(Path('public/sources/QURAN-WS-LICENSE.txt'), read('LICENSE'))
    publish(Path('public/sources/CC-BY-4.0.txt'), read('LICENSES/CC-BY-4.0.txt'))

json_file(Path('sources/terminology.json'), {
    'pullRequest': 'https://github.com/quran-ws/docs/pull/9',
    'revision': REVISION,
    'archiveSha256': hashlib.sha256(ARCHIVE.read_bytes()).hexdigest(),
    'rulesPerLanguage': 73,
    'conceptsPerLanguage': 180,
    'categoriesPerLanguage': 19,
    'sourceFiles': inputs,
    'publishedFiles': {path: hashlib.sha256(text.encode()).hexdigest() for path, text in outputs.items()},
})

errors = []
for relative, content in outputs.items():
    path = ROOT / relative
    if checking:
        if not path.exists() or path.read_text() != content:
            errors.append(relative)
    else:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content)
if errors:
    raise SystemExit('Source fidelity check failed:\n' + '\n'.join(errors))
print(f'{"Verified" if checking else "Published"} {len(outputs)} files: 73 rules, 180 concepts, 19 categories per language.')
