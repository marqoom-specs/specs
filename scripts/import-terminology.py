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

# The one exception to writing a name in full: a short code a registry records.
CLEAR_NAMES = {
    'en': 'Choose a name that identifies the data rather than `data` or `item` when its kind is known.\n',
    'ar': 'واختر الاسم الذي يوضح المقصود بدل `data` أو `item` عندما تعرف نوع البيانات.\n',
}
SHORT_CODE_RULE = {
    'en': (
        '\nA short code recorded in a registry is the one exception. Where a name has to stay short, such as a [file name](/docs/audio/file-names#name), '
        'the `short_code` of an entry may stand for its code: `As-Hf` for `hafs_an_asim`. Both forms are valid there, '
        'and both name the same entry; the code stays the one code name everywhere else ([rule 001](#rule-001)). '
        'A short code is not an alternative spelling ([rule 044](#rule-044)), and it is never made up when a name is written: '
        'an entry with no recorded short code is written in full.\n'
    ),
    'ar': (
        '\nويُستثنى من ذلك الرمز المختصر المسجَّل في أحد السجلات. فحيث يلزم أن يبقى الاسم قصيرًا، [كاسم ملف](/ar/docs/audio/file-names#name)، '
        'يجوز أن يقوم `short_code` المسجَّل للمدخل مقام اسمه البرمجي: `As-Hf` عن `hafs_an_asim`. والصورتان صحيحتان هناك، '
        'وتدلان على المدخل نفسه؛ ويبقى الاسم البرمجي هو الاسم الوحيد في كل موضع آخر ([القاعدة 001](#rule-001)). '
        'وليس الرمز المختصر تهجئة بديلة ([القاعدة 044](#rule-044))، ولا يُرتجل عند كتابة الاسم: '
        'المدخل الذي لم يُسجَّل له رمز مختصر يُكتب اسمه كاملًا.\n'
    ),
}

# Marqoom's own changes to the imported text. It leaves out pointers to the decision record,
# which it does not publish, instructions for the upstream build, since these pages are edited
# here, and the dictionary's opening note, which only pointed to its contributing section.
# In Arabic a dictionary category is a «موضوع» (topic), not a «مجال».
# Rule 005's example uses the dagger alif's current code (see scripts/term-changes.json).
# The standard's "Clear names" section allows a registered short code (see scripts/short-codes.json).
EDITS = {
    'standard': {
        'en': [
            (' See the [decision record](/docs/terms/decisions) for the reasoning and how letters with shared name spellings are distinguished.', ''),
            (' The [decision record](/docs/terms/decisions) explains the distinction.', ''),
            (', with explanations in the [decision record](/docs/terms/decisions).', '.'),
            ('| الأَلِف المَحْذُوفَة | `omitted_alif` |', '| الأَلِف الخَنْجَرِيَّة | `dagger_alif` |'),
            (CLEAR_NAMES['en'], CLEAR_NAMES['en'] + SHORT_CODE_RULE['en']),
        ],
        'ar': [
            (' وتفاصيل القرار، ومنها كيفية تمييز الحروف التي تشترك أسماؤها في التهجئة، في [سجل القرارات](/ar/docs/terms/decisions).', ''),
            (' ويوضح [سجل القرارات](/ar/docs/terms/decisions) سبب هذا الفصل.', ''),
            ('، مع شرح قراراتها في [سجل القرارات](/ar/docs/terms/decisions).', '.'),
            ('| الأَلِف المَحْذُوفَة | `omitted_alif` |', '| الأَلِف الخَنْجَرِيَّة | `dagger_alif` |'),
            (CLEAR_NAMES['ar'], CLEAR_NAMES['ar'] + SHORT_CODE_RULE['ar']),
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


# Terms Marqoom changed after review, in scripts/term-changes.json (shared with
# build-visual-lab-data.py), keyed by the source's code. `rows` rewords a field of the entry
# in place. A new `code` replaces the old one in the entry (heading, code, vocalized row,
# definition), in every link to it, and in the dictionary index; the entry and its index row
# move to their alphabetical place, and sorted lists are sorted again. Without a new `code`,
# `arabic` renames the entry in Arabic only: every use of the old Arabic name follows it,
# after `wording` fixes the Arabic sentences it changes, and the entry gains a dated note.
# `registry` names the registry that lists the term's members (see OWN_REGISTRIES): the entry
# gains its Registry row, where the source puts it, and a dated note.
# The old code is recorded as a deprecated name with a dated note (rules 046, 047), and
# lib/rehype-reading.mjs gives the entry its deprecated names as anchors. Source names such
# as the dabt name and the mushaf introduction's wording are left as they are (rule 040).
CHANGES = json.loads((ROOT / 'scripts/term-changes.json').read_text())
changed_in = {}
LINKS = re.compile(r'\[`[a-z0-9_]+`\]\([^)]+\)(?:(?:, |، )\[`[a-z0-9_]+`\]\([^)]+\))+')


def link_code(item):
    return re.match(r'\[`([a-z0-9_]+)`\]', item)[1]


def entry_bounds(text, code):
    heading = re.search(rf'^### .+ \[#{code}\]$', text, re.M)
    if not heading:
        return None
    following = re.search(r'^#{2,3} ', text[heading.end():], re.M)
    return heading.start(), heading.end() + following.start() if following else len(text)


ROW_LABELS = {'byShape': {'en': 'Name by shape', 'ar': 'اسمه بشكله'}}


def renamed_in_arabic(text, locale, page, code, c):
    # Source names are vocalized, so the plain old name only matches Marqoom's own uses of it.
    if locale == 'ar':
        for before, after in c.get('wording', []):
            text = text.replace(before, after)
    text = text.replace(c['formerArabic'], c['arabic'])
    if any(line.startswith(f'| [`{code}`](') and f"| {c['arabic']} |" in line for line in text.split('\n')):
        changed_in.setdefault((code, locale), []).append(page)
    bounds = entry_bounds(text, code)
    if bounds:
        block = text[bounds[0]:bounds[1]]
        assert c['arabic'] in block.split('\n', 1)[0]
        label = 'بالحركات' if locale == 'ar' else 'Vocalized'
        before = f"| {label} | {c['formerVocalized']} |"
        assert block.count(before) == 1, f'{before} not found in {locale}/{code}'
        block = block.replace(before, f"| {label} | {c['vocalized']} |")
        related = '**مرتبط به:**' if locale == 'ar' else '**Related:**'
        assert block.count(related) == 1
        block = block.replace(related, f"> {c['note'][locale]}\n\n{related}")
        text = text[:bounds[0]] + block + text[bounds[1]:]
        changed_in.setdefault((code, locale), []).append(page)
    return text


def changed(text, locale, page):
    for old, c in CHANGES.items():
        # A field of the entry reworded, in place.
        bounds = entry_bounds(text, old)
        if bounds and 'rows' in c:
            block = text[bounds[0]:bounds[1]]
            for field, row in c['rows'].items():
                label = ROW_LABELS[field][locale]
                before, after = f"| {label} | {row['from']} |", f"| {label} | {row['to']} |"
                assert block.count(before) == 1, f'{before} not found in {locale}/{old}'
                block = block.replace(before, after)
            text = text[:bounds[0]] + block + text[bounds[1]:]
            changed_in.setdefault((old, locale), []).append(page)
        ltr = (lambda s: f'<span dir="ltr">{s}</span>') if locale == 'ar' else (lambda s: s)
        # The registry that lists the term's members: its row sits above the other spellings.
        if bounds and 'registry' in c:
            block = text[bounds[0]:bounds[1]]
            label = 'السجل' if locale == 'ar' else 'Registry'
            link = f"[`{c['registry']}`]({'/ar' if locale == 'ar' else ''}/docs/terms/registries#{c['registry']})"
            spellings = re.search(r'^\| (?:Other spellings|تهجئات أخرى) \|', block, re.M)
            assert spellings and f'| {label} |' not in block, f'{old} cannot take a registry row in {locale}'
            block = block[:spellings.start()] + f'| {label} | {ltr(link)} |\n' + block[spellings.start():]
            related = '**مرتبط به:**' if locale == 'ar' else '**Related:**'
            assert block.count(related) == 1
            block = block.replace(related, f"> {c['note'][locale]}\n\n{related}")
            text = text[:bounds[0]] + block + text[bounds[1]:]
            changed_in.setdefault((old, locale), []).append(page)
        if 'code' not in c:
            if 'formerArabic' in c:
                text = renamed_in_arabic(text, locale, page, old, c)
            continue
        new = c['code']
        bounds = entry_bounds(text, old)
        if bounds:
            block = text[bounds[0]:bounds[1]]
            heading, rest = block.split('\n', 1)
            assert c['formerArabic'] in heading and (locale == 'ar' or c['formerDisplay'] in heading)
            heading = (heading.replace(c['formerArabic'], c['arabic']).replace(c['formerDisplay'], c['display'])
                       .replace(f'[#{old}]', f'[#{new}]'))
            replacements = [
                (f"| `code` | {ltr(f'`{old}`')} |", f"| `code` | {ltr(f'`{new}`')} |"),
                (f"| {'بالحركات' if locale == 'ar' else 'Vocalized'} | {c['formerVocalized']} |",
                 f"| {'بالحركات' if locale == 'ar' else 'Vocalized'} | {c['vocalized']} |"),
                (f"{'**التعريف:**' if locale == 'ar' else '**Definition:**'} {c['formerArabic']}",
                 f"{'**التعريف:**' if locale == 'ar' else '**Definition:**'} {c['arabic']}"),
            ]
            if locale == 'en':
                replacements.pop()  # the English definition does not start with the Arabic name
            for before, after in replacements:
                assert rest.count(before) == 1, f'{before} not found in {locale}/{old}'
                rest = rest.replace(before, after)
            spellings = re.search(r'^\| (?:Other spellings|تهجئات أخرى) \| (.+) \|$', rest, re.M)
            sep = '، ' if locale == 'ar' else ', '
            items = [s for s in re.findall(r'`([^`]+)`', spellings[1]) if s != new]
            label = 'أسماء متروكة' if locale == 'ar' else 'Deprecated names'
            assert f'| {label} |' not in rest, f'{old} already has deprecated names'
            rest = (rest[:spellings.start()] + f"| {spellings[0].split(' | ')[0][2:]} | {ltr(sep.join(f'`{s}`' for s in items))} |\n"
                    + f'| {label} | {ltr(f"`{old}`")} |' + rest[spellings.end():])
            related = '**مرتبط به:**' if locale == 'ar' else '**Related:**'
            assert rest.count(related) == 1
            rest = rest.replace(related, f"> {c['note'][locale]}\n\n{related}")
            block = heading + '\n' + rest
            text = text[:bounds[0]] + text[bounds[1]:]
            codes = re.findall(r'^### .+ \[#([a-z0-9_]+)\]$', text, re.M)
            after = next((code for code in codes if code > new), None)
            at = entry_bounds(text, after)[0] if after else len(text.rstrip('\n')) + 1
            text = text[:at] + block + text[at:]
            changed_in.setdefault((old, locale), []).append(page)
        # Every link to the entry, and the lists that were in alphabetical order.
        def relink(match):
            items = re.split(r', |، ', match[0])
            was_sorted = [link_code(i) for i in items] == sorted(link_code(i) for i in items)
            items = [re.sub(rf'^\[`{old}`\]\(([^)#]*)#{old}\)$', rf'[`{new}`](\1#{new})', i) for i in items]
            if was_sorted:
                items.sort(key=link_code)
            return (', ' if ', ' in match[0] else '، ').join(items)
        text = LINKS.sub(relink, text)
        text = re.sub(rf'\[`{old}`\]\(([^)#]*)#{old}\)', rf'[`{new}`](\1#{new})', text)
        # The index row: its names, and its place in the table.
        lines = text.split('\n')
        rows = [i for i, line in enumerate(lines) if line.startswith(f'| [`{new}`](')]
        for i in rows:
            line = lines.pop(i).replace(f"| {c['formerDisplay']} |", f"| {c['display']} |").replace(c['formerArabic'], c['arabic'])
            j = i
            while j > 0 and lines[j - 1].startswith('| [`') and link_code(lines[j - 1][2:]) > new:
                j -= 1
            lines.insert(j, line)
            changed_in.setdefault((old, locale), []).append(page)
        text = '\n'.join(lines)
        assert f'`{old}`]' not in text and f'#{old})' not in text, f'A link to {old} is left in {locale}/{page}'
    return text


# Registries Marqoom adds, in scripts/registries/*.tsv, written in the source's own shape: lines
# starting with `#` are commentary, the first one the title (its Arabic part titles the Arabic
# page) and the last one the tab-separated header; every other line is a row. A registry is
# rendered the way the source renders its own and takes its alphabetical place on the page. The
# term it lists names it in scripts/term-changes.json (`registry`). Every row cites a source,
# a code is used once, and a column in REFERENCES resolves to a code of the registry it names.
REFERENCES = {('wajh', 'excludes'): 'wajh'}
OWN_REGISTRIES = {}
for path in sorted((ROOT / 'scripts/registries').glob('*.tsv')):
    comments, rows = [], []
    for line in path.read_text().splitlines():
        if line.startswith('#'):
            comments.append(line[1:].strip())
        elif line.strip():
            rows.append(line.split('\t'))
    title = comments[0].rstrip('.').split(' — ')
    assert len(title) == 2 and re.search(r'[\u0600-\u06FF]', title[1]), f'{path.name} needs an English and an Arabic title'
    header = [name.strip() for name in next(c for c in reversed(comments) if '\t' in c).split('\t')]
    assert header[0] == 'code' and header[-1] == 'ref', f'{path.name} must start with code and end with ref'
    assert all(len(row) == len(header) and row[0] and row[-1] for row in rows), f'{path.name} has an incomplete row'
    assert not any('|' in cell for row in rows for cell in row), f'{path.name} has a `|` in a cell'
    assert len({row[0] for row in rows}) == len(rows), f'{path.name} uses a code twice'
    OWN_REGISTRIES[path.stem] = {'title': dict(zip(['en', 'ar'], title)), 'header': header, 'rows': rows}
for (name, column), target in REFERENCES.items():
    codes = {row[0] for row in OWN_REGISTRIES[target]['rows']}
    at = OWN_REGISTRIES[name]['header'].index(column)
    for row in OWN_REGISTRIES[name]['rows']:
        assert set(filter(None, row[at].split(','))) <= codes - {row[0]}, f'{name}: {row[0]} points {column} at an unknown code'


def own_registries(text, locale, concept_link):
    concept, file, count, sep = ('المفهوم', 'الملف', 'الصفوف', '، ') if locale == 'ar' else ('Concept', 'File', 'Rows', ', ')
    for name, registry in OWN_REGISTRIES.items():
        assert not re.search(rf'^## .+ \[#{name}\]$', text, re.M), f'The source already has a registry {name}'
        concepts = sorted(code for code, c in CHANGES.items() if c.get('registry') == name)
        assert concepts, f'No term names the registry {name}'
        source = f'scripts/registries/{name}.tsv'
        section = '\n'.join([
            f"## {registry['title'][locale]} — `{name}` [#{name}]", '',
            f'<!-- source: {source} -->', '',
            f"{concept}: {sep.join(concept_link(code) for code in concepts)} · {file}: `{source}` · {count}: {len(registry['rows'])}", '',
            '| ' + ' | '.join(f'`{column}`' for column in registry['header']) + ' |',
            '|' + ' --- |' * len(registry['header']),
            *('| ' + ' | '.join(row) + ' |' for row in registry['rows']),
        ]) + '\n'
        following = next((h for h in re.finditer(r'^## .+ \[#([a-z_]+)\]$', text, re.M) if h[1] > name), None)
        if following:
            text = text[:following.start()] + section + '\n' + text[following.start():]
        else:
            text = text.rstrip('\n') + '\n\n' + section
    return text


# Short codes Marqoom registers, in scripts/short-codes.json, keyed by registry and then by
# code. The registry's table gains a `short_code` column beside `alternative_spellings`, filled
# for the rows that have one, and a dated note above it. A short code must be new to the
# table: a name belongs to one entry (rule 001).
SHORT_CODES = json.loads((ROOT / 'scripts/short-codes.json').read_text())


def cells(line):
    parts = [cell.strip() for cell in line[1:-1].split('|')]
    assert '| ' + ' | '.join(parts) + ' |' == line, f'Unexpected table row: {line}'
    return parts


def short_coded(text, locale):
    for registry, added in SHORT_CODES.items():
        codes = added['codes']
        heading = re.search(rf'^## .+ \[#{registry}\]$', text, re.M)
        assert heading, f'No registry {registry} in {locale}'
        following = re.search(r'^## ', text[heading.end():], re.M)
        end = heading.end() + following.start() if following else len(text)
        lines = text[heading.end():end].split('\n')
        first = next(i for i, line in enumerate(lines) if line.startswith('| `code` |'))
        column = cells(lines[first]).index('`alternative_spellings`') + 1
        taken, found = set(), set()
        for i in range(first, len(lines)):
            if not lines[i].startswith('|'):
                break
            row = cells(lines[i])
            if i == first:
                value = '`short_code`'
            elif i == first + 1:
                value = '---'
            else:
                value = codes.get(row[0], '')
                found.update({row[0]} & set(codes))
                taken.update(name.lower() for name in [row[0], *row[column - 1].split(',')] if name)
            lines[i] = '| ' + ' | '.join(row[:column] + [value] + row[column:]) + ' |'
        assert found == set(codes), f'Short codes for unknown {registry} entries: {set(codes) - found}'
        short = [code.lower() for code in codes.values()]
        assert len(set(short)) == len(short) and not set(short) & taken, f'A short code in {registry} is already a name'
        lines.insert(first, f"> {added['note'][locale]}\n")
        text = text[:heading.end()] + '\n'.join(lines) + text[end:]
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
            edited = edit(adapted, name, locale)
            if name == 'registries':
                concept_link = lambda code: f'[`{code}`]({url}/dictionary/{concept_pages[code]}#{code})'
                edited = short_coded(own_registries(edited, locale, concept_link), locale)
            publish(destination / f'{name}.md', page(fields, edited, source))

        index = rewrite(dictionary_body[:categories[0].start()], 'dictionary')
        publish(destination / 'dictionary/index.md', page(dictionary_fields, edit(changed(index, locale, 'index'), 'dictionary', locale), dictionary_path))
        reconstructed = index
        for i, category in enumerate(categories):
            end = categories[i + 1].start() if i + 1 < len(categories) else len(dictionary_body)
            fields = {**dictionary_fields, 'title': category[1], 'description': category[2]}
            body = rewrite(dictionary_body[category.end():end], 'dictionary')
            reconstructed += category[0] + body
            publish(destination / f'dictionary/{category[2]}.md', page(fields, versioned(changed(body, locale, category[2]), locale), dictionary_path))
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

        for code, c in CHANGES.items():
            expected = ('rows' in c) + ('registry' in c) + 2 * ('formerArabic' in c)  # the entry, plus the index row for a new name
            assert len(changed_in.get((code, locale), [])) == expected, f'{code} must change in its entry and the index ({locale})'

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
