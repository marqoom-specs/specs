"""Build the bilingual examples from the pinned source archive; --check detects drift."""

import argparse
import hashlib
import json
import re
import tarfile
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'public/sources/quran-ws-pr-9.tar.gz'
TERMS = 'standards/terminology'
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--check', action='store_true')
checking = parser.parse_args().check
assert hashlib.sha256(ARCHIVE.read_bytes()).hexdigest() == '9939f5a363a4eb9bdc1cfba05511b21250a24aedb4f69f7bbe09ed377f9105df'

with tarfile.open(ARCHIVE) as archive:
    names = archive.getnames()
    prefix = names[0].split('/')[0]

    def read(path):
        return archive.extractfile(f'{prefix}/{path}').read().decode()

    def rows(name):
        lines = read(f'{TERMS}/registries/{name}.tsv').splitlines()
        return [line.split('\t') for line in lines if line.strip() and not line.startswith('#')]

    entries = [
        yaml.safe_load(read(name[len(prefix) + 1:]))
        for name in sorted(names)
        if name.startswith(f'{prefix}/{TERMS}/concepts/') and name.endswith('.yml')
    ]
    aliases = json.loads(read(f'{TERMS}/aliases.json'))
    counts, numbering, qiraat, surahs = (rows(name) for name in ['ayah_counts', 'ayah_numbering', 'qiraat', 'surahs'])

known = {entry['concept'] for entry in entries}
spellings = {}
for spelling, targets in aliases.items():
    for target in [targets] if isinstance(targets, str) else targets:
        if spelling != target:
            spellings.setdefault(target, []).append(spelling)


def title(category, locale='en'):
    page = (ROOT / f'content/docs/{"ar/" if locale == "ar" else ""}terms/dictionary/{category}.md').read_text()
    return json.loads(re.search(r'^title: (.+)$', page, re.M)[1])


def first_sentence(text):
    return re.split(r'(?<=\.)\s', ' '.join(text.split()), maxsplit=1)[0]


# Terms Marqoom renamed after review, as in import-terminology.py: the entry takes its new
# code and names, links to it follow, and its old code becomes a recorded spelling.
for old, change in json.loads((ROOT / 'scripts/term-changes.json').read_text()).items():
    entry = next(entry for entry in entries if entry['concept'] == old)
    assert entry['names']['arabic']['singular'] == change['formerArabic'], f'{old} no longer has its former name'
    entry['concept'] = entry['names']['code'] = change['code']
    entry['names']['display'] = change['display']
    entry['names']['arabic']['singular'] = change['arabic']
    entry['definition'] = entry['definition'].replace(change['formerArabic'], change['arabic'])
    for other in entries:
        other['related'] = [change['code'] if code == old else code for code in other.get('related') or []]
        if other.get('parent') == old:
            other['parent'] = change['code']
    spellings[change['code']] = [s for s in spellings.pop(old, []) if s not in (change['code'], change['code'].replace('_', '-'))]
    spellings[change['code']] += [old, old.replace('_', '-')]
    known = known - {old} | {change['code']}

categories = sorted({entry['category'] for entry in entries})
data = {
    'spellings': len(aliases),
    'categories': [{'id': category, 'title': title(category), 'titleAr': title(category, 'ar')} for category in categories],
    'concepts': [
        {
            'id': entry['concept'],
            'code': entry['names']['code'],
            'display': entry['names']['display'],
            'arabic': entry['names'].get('arabic', {}).get('singular'),
            'category': entry['category'],
            'kind': entry['kind'],
            'parent': entry.get('parent'),
            'definition': first_sentence(entry['definition_en']),
            'definitionAr': first_sentence(entry['definition']),
            'related': [other for other in entry.get('related') or [] if other in known],
            'spellings': sorted(spellings.get(entry['concept'], [])),
        }
        for entry in entries
    ],
    'counts': {
        # Column order of ayah_counts.tsv.
        'systems': [
            {'code': row[0], 'arabic': row[1], 'display': row[2].removesuffix(' Numbering'), 'total': int(row[3])}
            for code in ['madani_first', 'madani_last', 'makki', 'kufi', 'basri', 'dimashqi']
            for row in numbering
            if row[0] == code
        ],
        'surahs': [
            {'number': int(row[0]), 'display': name[3], 'arabic': name[2], 'counts': [int(cell) for cell in row[1:7]]}
            for row, name in zip(counts, surahs)
        ],
    },
    'qiraat': {
        kind: [
            {'code': row[0], 'qiraah': row[2], 'rawi': row[3], 'arabic': row[4], 'display': row[6], 'numbering': row[8]}
            for row in qiraat
            if row[1] == kind
        ]
        for kind in ['qiraah', 'rawi', 'riwayah']
    },
}
assert [surah['number'] for surah in data['counts']['surahs']] == list(range(1, 115))
assert len(data['concepts']) == 180 and len(data['categories']) == 19
output = json.dumps(data, ensure_ascii=False, separators=(',', ':')) + '\n'
path = ROOT / 'lib/visual-lab-data.json'
if checking:
    assert path.read_text() == output, 'Visual data drifted; run python3 scripts/build-visual-lab-data.py'
else:
    path.write_text(output)
print(f'{"Verified" if checking else "Built"} visual data: 180 concepts, 114 surahs, 20 riwayahs.')
