"""Build what the audio standard's pages share with data; --check detects drift.

The pages under content/docs/{,ar/}audio/ are written by hand. This script does three things:

1. It writes the reciter registry (scripts/audio/reciters.tsv) between the `reciters:start` and
   `reciters:end` markers of the registries page, in both languages.
2. It reads the content models back from the pages (each model's table, its JSON example and
   its question) and writes lib/audio-data.json, which the figures draw. A figure therefore
   says nothing the page does not.
3. It checks what the pages share with data kept elsewhere: the file name codes
   (scripts/short-codes.json and the registries they name), the reciters the examples cite,
   the number of reciters the home page quotes, and the headings of the two languages.
"""
import argparse
import json
import re
import tarfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARGS = argparse.ArgumentParser()
ARGS.add_argument('--check', action='store_true')
checking = ARGS.parse_args().check

LOCALES = ['en', 'ar']
PAGES = ['index', 'models', 'file-names', 'registries']
HEADERS = {
    'en': ['Code', 'Arabic name', 'English name'],
    'ar': ['الرمز', 'الاسم بالعربية', 'الاسم بالإنجليزية'],
}
LEVELS = {
    'Required': 'required', 'Expected': 'expected', 'Optional': 'optional',
    'مطلوب': 'required', 'متوقع': 'expected', 'اختياري': 'optional',
}
# The four models, by the anchor of their section, and for each piece of information, in the
# order of the model's table, the keys of the JSON example that say it. A piece that names
# several things is known only when all of them are known.
MODELS = {
    'reciter': [['name.ar'], ['name.en'], ['sources'], ['country'], ['birth_year']],
    'recitation': [
        ['reciter'], ['qiraah', 'riwayahs'], ['style'], ['sources'],
        ['recorded.year', 'recorded.place', 'recorded.occasion'], ['producer'], ['owner', 'license'],
        ['tariq', 'wajh'], ['pace'],
    ],
    'audio-file': [
        ['recitation'], ['scope'], ['surah_number'], ['format'], ['bitrate_kbps'], ['sha256'], ['urls'],
        ['duration_ms'], ['size_bytes'], ['sample_rate_hz', 'channels'], ['effects'], ['made_from'],
    ],
    'timing': [['audio_file'], ['unit'], ['ayah_numbering_system'], ['entries'], ['made_by', 'method']],
}
START = re.compile(r'^\{/\* reciters:start[^\n]*\*/\}\n', re.M)
END = '{/* reciters:end */}'
ARABIC_INDIC = str.maketrans('0123456789', '٠١٢٣٤٥٦٧٨٩')

errors = []
outputs = {}


def page(locale, name):
    return ROOT / 'content/docs' / ('ar' if locale == 'ar' else '') / 'audio' / f'{name}.mdx'


def cells(line):
    return [cell.strip() for cell in line.strip()[1:-1].split('|')]


def plain(cell):
    """A table cell without its link or its code marks."""
    return re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', cell).replace('`', '')


def tables(text):
    """Every Markdown table of a text, as a list of rows of cells."""
    found, current = [], []
    for line in text.splitlines() + ['']:
        if line.startswith('|'):
            current.append(cells(line))
        elif current:
            found.append([current[0], *current[2:]])
            current = []
    return found


def sections(text):
    """The text under each second-level heading, by its anchor."""
    parts = re.split(r'^## .+ \[#([a-z-]+)\]$', text, flags=re.M)
    return dict(zip(parts[1::2], parts[2::2]))


def value(example, key):
    for part in key.split('.'):
        example = example[part]
    return example


# 1. The reciter registry: one reciter per row, with a code of two lowercase words, an Arabic
# name, and an English name when it is known.
rows = [line.split('\t') for line in (ROOT / 'scripts/audio/reciters.tsv').read_text().splitlines() if line and not line.startswith('#')]
codes = [row[0] for row in rows]
assert all(len(row) == 3 for row in rows), 'reciters.tsv: every row has a code, an Arabic name and an English name'
assert all(re.fullmatch(r'[a-z]+-[a-z]+', code) for code in codes), 'reciters.tsv: a code is two lowercase words joined by a hyphen'
assert len(set(codes)) == len(codes), 'reciters.tsv: a code is used twice'
assert codes == sorted(codes), 'reciters.tsv: the rows are sorted by code'
assert all(re.search(r'[ء-ي]', row[1]) and row[1] == row[1].strip() for row in rows), 'reciters.tsv: every reciter has an Arabic name'
assert not any('|' in cell for row in rows for cell in row), 'reciters.tsv: a cell has a `|`'

for locale in LOCALES:
    path = page(locale, 'registries')
    text = path.read_text()
    start, end = START.search(text), text.find(END)
    assert start and end >= start.end(), f'{path}: the reciters markers are missing'
    table = '\n'.join([
        '| ' + ' | '.join(HEADERS[locale]) + ' |',
        '| --- | --- | --- |',
        *(f'| `{code}` | {arabic} | {english} |' for code, arabic, english in rows),
    ])
    outputs[path] = text[:start.end()] + '\n' + table + '\n\n' + text[end:]

# 2. The figures' data, read back from the pages.
models = []
for locale in LOCALES:
    overview = sections(page(locale, 'index').read_text())['models']
    questions = {re.search(r'#([a-z-]+)\)', row[0])[1]: (plain(row[0]), row[2]) for row in tables(overview)[0][1:]}
    body = sections(page(locale, 'models').read_text())
    assert list(body) == list(MODELS) == list(questions), f'{locale}: the four models are not the sections of the models page'
    for at, (anchor, keys) in enumerate(MODELS.items()):
        table = next(t for t in tables(body[anchor]) if t[1][-1] in LEVELS)
        example = json.loads(re.search(r'```json[^\n]*\n(.*?)\n```', body[anchor], re.S)[1])
        assert len(table) - 1 == len(keys), f'{locale}/{anchor}: {len(table) - 1} pieces of information, {len(keys)} expected'
        pieces = [
            {'label': plain(row[0]), 'level': LEVELS[row[-1]], 'known': all(value(example, key) is not None for key in piece)}
            for row, piece in zip(table[1:], keys)
        ]
        if locale == 'en':
            models.append({'id': anchor, 'name': {}, 'question': {}, 'pieces': [{'level': p['level'], 'known': p['known'], 'label': {}} for p in pieces], 'example': example})
        model = models[at]
        assert [(p['level'], p['known']) for p in pieces] == [(p['level'], p['known']) for p in model['pieces']], f'{anchor}: the levels differ between the languages'
        assert example == model['example'], f'{anchor}: the JSON example differs between the languages'
        model['name'][locale], model['question'][locale] = questions[anchor]
        for piece, target in zip(pieces, model['pieces']):
            target['label'][locale] = piece['label']

by_id = {model['id']: model.pop('example') for model in models}
assert by_id['timing']['audio_file'] == by_id['audio-file']['sha256'], 'the timing example is not for the audio file example'
assert by_id['audio-file']['recitation'] == by_id['recitation']['id'] and by_id['recitation']['reciter'] == by_id['reciter']['code'], 'the examples do not follow one another'
entries = by_id['timing']['entries']
duration = by_id['audio-file']['duration_ms']
assert all(a['start_ms'] < a['end_ms'] for a in entries) and all(a['end_ms'] <= b['start_ms'] for a, b in zip(entries, entries[1:])) and entries[-1]['end_ms'] <= duration, 'the timing entries do not fit the file'
data = {'models': models, 'file': {'duration_ms': duration, 'surah_number': by_id['audio-file']['surah_number']}, 'entries': entries, 'reciters': len(rows)}
outputs[ROOT / 'lib/audio-data.json'] = json.dumps(data, ensure_ascii=False, indent=2) + '\n'

# 3. What the pages share with data kept elsewhere.
short_codes = json.loads((ROOT / 'scripts/short-codes.json').read_text())
expected = {short: code.replace('_', '-') for registry in short_codes.values() for code, short in registry['codes'].items()}
for locale in LOCALES:
    # A file name's short code and its full code name the same entry of the terminology registries.
    text = outputs[page(locale, 'registries')]
    listed = dict(re.findall(r'^\| `([A-Za-z-]+)` \|.*\| `([a-z-]+)` \|$', text[text.find(END):], re.M))
    if listed != expected:
        errors.append(f'{locale}: the file name codes differ from scripts/short-codes.json: {sorted(set(listed.items()) ^ set(expected.items()))}')

    # The examples name reciters by their registry code.
    cited = {'ibrahim-dosari'}  # the file name every page and the file name figure use
    for name in PAGES:
        body = page(locale, name).read_text()
        cited.update(re.findall(r'"(?:code|reciter)": "([a-z-]+)"', body))
        cited.update(re.findall(r'"recitation": "([a-z-]+)/', body))
    if cited - set(codes):
        errors.append(f'{locale}: reciters cited but not in the registry: {sorted(cited - set(codes))}')

    # The home page quotes the number of reciters.
    count = str(len(rows)).translate(ARABIC_INDIC) if locale == 'ar' else str(len(rows))
    home = ROOT / 'content/docs' / ('ar' if locale == 'ar' else '') / 'index.mdx'
    if count not in home.read_text():
        errors.append(f'{home.relative_to(ROOT)}: does not say {count} reciters')

# The qiraat registry holds every riwayah a short code names, and the wajh registry every wajh.
with tarfile.open(ROOT / 'public/sources/quran-ws-pr-9.tar.gz') as archive:
    member = next(m for m in archive.getmembers() if m.name.endswith('standards/terminology/registries/qiraat.tsv'))
    qiraat = {line.split('\t')[0] for line in archive.extractfile(member).read().decode().splitlines() if line and not line.startswith('#')}
wajh = {line.split('\t')[0] for line in (ROOT / 'scripts/registries/wajh.tsv').read_text().splitlines() if line and not line.startswith('#')}
for registry, known in [('qiraat', qiraat), ('wajh', wajh)]:
    if set(short_codes[registry]['codes']) - known:
        errors.append(f'short codes for unknown {registry} entries: {sorted(set(short_codes[registry]["codes"]) - known)}')

# Both languages carry the same pages with the same heading anchors, in the same order.
for name in PAGES:
    anchors = {locale: re.findall(r'^#{2,3} .+ \[#([a-z-]+)\]$', page(locale, name).read_text(), re.M) for locale in LOCALES}
    if anchors['en'] != anchors['ar']:
        errors.append(f'audio/{name}.mdx: the headings differ between the languages: {anchors}')

for path, content in outputs.items():
    if checking:
        if not path.exists() or path.read_text() != content:
            errors.append(f'{path.relative_to(ROOT)} is out of date: run python3 scripts/build-audio.py')
    else:
        path.write_text(content)
if errors:
    raise SystemExit('Audio standard check failed:\n' + '\n'.join(errors))
known = sum(piece['known'] for model in models for piece in model['pieces'])
total = sum(len(model['pieces']) for model in models)
print(f'{"Verified" if checking else "Published"} the audio standard: {len(rows)} reciters, {len(short_codes["qiraat"]["codes"])} riwayah codes and {len(short_codes["wajh"]["codes"])} wajh codes per language; {len(models)} models with {total} pieces of information, {known} known in the example.')
