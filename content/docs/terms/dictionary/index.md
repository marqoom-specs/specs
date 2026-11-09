---
title: "Terminology dictionary"
description: "The concepts used in Quranic software, with their definitions and their adopted names."
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---
## Reading an entry [#reading-entries]

Start with the [lookup table](/docs/terms/dictionary#dictionary-lookup) to find a name or meaning. Each entry brings together a concept's definition, purpose and names. The [naming standard](/docs/terms/standard) explains how those names are chosen.

For example, the hamzah entry records these forms together:

```yaml
names:
  code: hamzah
  display: Hamzah
  arabic:
    vocalized: الهَمْزَة
    singular: الهمزة
  dabt: الهَمْزَة — رَأْس العَيْن
  by_shape: رَأْس عَيْن
  mushaf_introduction: null
  unicode: ARABIC LETTER HAMZA
alternative_spellings:
  - hamza
```

### Naming fields [#section-02]

These fields are inside `names`, except for top-level `alternative_spellings`. Not every field applies to every concept.

| Field | Contents |
| --- | --- |
| `code` | The stable identifier for code, APIs and databases. |
| `display` | The English name readers see in interfaces and documentation. |
| `display_evidence` | Evidence for the display choice, completed before adoption. |
| `transliteration` | Optional scholarly rendering, such as ALA-LC or DIN 31635. |
| `arabic.vocalized` | Vocalised Arabic for derivation and Arabic display. |
| `arabic.singular` and `arabic.plural` | Unvocalised singular and plural for linguistic information and search. |
| `dabt` | The name in the science of mushaf marks, as the source gives it. |
| `by_shape` | The source's description of the mark's shape. |
| `mushaf_introduction` | The name in the mushaf introduction; `null` means the introduction does not name it, not that the entry is incomplete. |
| `unicode` | The official character name, separate from the code identifier. |
| `alternative_spellings` | Other spellings of the same name for search. |

### Meaning and relationships [#section-03]

`definition` explains what the concept is; `purpose` explains why software models it. `boundaries` identifies exclusions where confusion is possible, while `related` points to neighbouring concepts.

`kind` identifies the entry's form: `entity`, `concept`, `classification`, `classification_value`, `property`, `role`, `process`, `content`, `analysis`, `mark` or `unit`. `category` identifies the domain under which the entry appears on this page. Every entry has one kind and one category; `process` is reserved and ordinary operation names do not use it.

`parent` names what the concept is a type of, such as `makki` under `revelation_classification`. `part_of` names what it belongs within, such as `rubu_al_hizb` within `hizb`. A mark with a family records that family in `parent`, while `mark_family` preserves the source's grouping; the groupings may differ.

The entry identifier `concept` is the target of dictionary references. It may differ from `names.code`: `ayah_numbering_makki` has the code value `makki`, which also occurs in another classification. Use the value within its classification's context.

`english_glosses` holds English equivalents for search; `deprecated` holds former names. `Verse` is not an alternative spelling of `ayah`, and a deprecated name is not the recommended name for a new project.

### Concepts and registry members [#section-04]

A concept needs a definition, purpose and boundaries. A member of a closed set gets a row in the [registries](/docs/terms/registries) recording its name, position and source. `makki` is a value with a meaning; Hafs is a named registry member. `registry` identifies the concept's member registry. A row's `verified` states what was checked against a source; `no` is an allowed value.

A member and concept may share a name: `hamzah` for the mark and `qiraah:hamzah` for the reciter. A bare name resolves to the concept; members are looked up within their kind's namespace. Letter names live in the spelling table because derivation reads them directly; see the naming standard's letter-name rules.

Tajwid rulings as concepts have entries; engine application cases have registry rows; occurrences in the text are spans labelled with the ruling's name. These describe different levels of information.

### Origin and status [#section-05]

`origin` records `quranic` for a specialised term, `borrowed` for a general borrowed concept, or `standard` for a modelling concept defined by the standard. `tier` records `core` for concepts applications store today or `extended` for those rarely represented or with varying boundaries.

`status` records the review stage: `draft`, `proposed`, `adopted`, or `deprecated` for a withdrawn entry retained for reference. `sources` supports the concept's meaning; choosing its code spelling is a standard convention. `note` records entry notes and name changes.

To add or correct an entry, follow [Contributing to the dictionary](/docs/terms/dictionary#contributing).

## Contributing to the dictionary [#contributing]

Search the [dictionary](/docs/terms/dictionary#reading-entries) first, then propose the change with a real project case that explains the need. The [naming standard](/docs/terms/standard) explains naming choices; the dictionary guide explains the fields. This page is for entry authors and reviewers.

### Propose the change [#section-07]

Open an [issue](https://github.com/quran-ws/docs/issues/new/choose) for a new term or a rule change. Describe the project, location and problem, and discuss the change before sending a PR. A typo correction can go directly to a PR. The [repository instructions](https://github.com/quran-ws/docs/blob/main/CONTRIBUTING.md) explain setup and checks.

### Check scope and need [#section-08]

A concept belongs here if it cannot be defined without reference to the Quran or mushaf and has a clear software purpose. For example, `ayah_timing` belongs; `user` and `subscription` are general concepts. Search meanings and spellings before creating an entry: the proposal may be another name for an existing concept.

Projects can keep local concepts in a separate directory using the same structure, `origin: standard`, their own categories, and the same tools. Do not redefine a dictionary concept or reuse its name for another meaning. Propose an in-scope local concept here for inclusion after acceptance.

### Choose an entry or a registry row [#section-09]

Create an entry for something needing a definition, purpose and boundaries, such as the classification value `makki`. Put a named member identified by its name, position and source, such as a reciter or surah, in its group's registry. Every meaningful classification value has an entry even when software represents it as an `enum`; a classification must have values.

Registry rows cite sources and use `verified` to state what was checked; `no` is acceptable when verification is incomplete. Letter names belong in the spelling table. Mark entries and the registry of engine rulings have generated sources identified in the repository instructions; edit the source, not the output.

### Write the definition, purpose and boundaries [#section-10]

`definition` answers “What is this concept?” Write a precise, concise definition without circular wording or implementation details. “An ayah is a Quranic ayah” defines nothing.

`purpose` answers “Why does software model this?” Explain what software stores, connects or distinguishes. Do not repeat the definition: linking tafsir and recitation to a location in the text explains an ayah's software purpose.

Where confusion is plausible, state exclusions in `boundaries` and name neighbouring concepts in `related`. Explain whether a column stores a word in the text or a token produced by segmentation; “differs from `word`” is insufficient.

These require human review. Passing automated checks does not establish a good definition or a need for an entry.

### Complete the entry [#section-11]

Each concept has a YAML file in `standards/terminology/concepts/` whose filename matches `concept`. The [schema](https://github.com/quran-ws/docs/blob/main/standards/terminology/schema.json) defines fields and allowed values; the [entry guide](/docs/terms/dictionary#reading-entries) explains their meaning.

The basic fields are `concept`, `kind`, `category`, `origin`, `tier`, `status`, `names.code`, `names.display`, and both languages of the definition and purpose: `definition`, `definition_en`, `purpose`, `purpose_en`.

- Choose one `kind` from the closed list and one existing `category`. Do not mix shape and domain in a kind such as `textual_concept`, or add an empty category.
- Supply `parent` for classification values and marks with a family. Use `part_of` for containment, referring to an entity. Relationships must reference existing entries.
- Supply `plural` when the concept is used as a collection: the complete code name plus `s`, including compound names.
- Vocalised Arabic is required for `origin: quranic`. For a borrowed concept, record an established Arabic name when one exists without inventing one.
- `symbol`, `unicode` and `mark_family` belong to marks and drawn `waqf_mark_type` values. The `unicode` block is generated from Unicode data, never edited by hand.
- Keep `alternative_spellings`, `english_glosses` and `deprecated` separate. A name for a different concept is not an alias; explain the confusion in `boundaries`.

### Cite suitable evidence [#section-12]

Sources establish a concept's meaning and definition; the standard chooses its code name. Register sources in `standards/terminology/sources.yml`, then cite their IDs and locations, such as a page or term number, in `sources`. Registry rows use the same source catalogue.

Entries start as `draft`, become `proposed` after discussion and `adopted` after approval. Adoption requires a source for the definition and display-name evidence in `names.display_evidence`. Drafts may carry a display name before its evidence is complete.

### Document usage evidence [#usage-evidence]

Compare spellings of the same concept within a declared source set relevant to Quranic software or English scholarly writing in its domain. Original repositories, project documentation and interfaces, and relevant scholarly publications are suitable sources; general search totals alone do not establish usage in this domain.

Record the following in display evidence or the exception's decision record:

1. Candidate spellings, the meaning being compared, selected sources, reasons for selecting them and the measurement date.
2. Exact queries, search restrictions and counting unit: project, document or file. Use a contextual phrase when a word has other common meanings.
3. Results and evidence links, including how forks, mirrors and irrelevant matches were excluded. Do not mix file counts with project or document counts.
4. Measurement limitations, the chosen form and reasoning, and the evidence reviewer's name and review date.

For display names, choose the most common form in the source set after checking relevance. If evidence is tied or insufficient, retain a provisional choice in a `draft`; do not claim it is sufficiently measured for adoption.

For a code-spelling exception, one form being more common is insufficient. The decision must explicitly establish the derived form's rarity within the set, explain why this term needs an exception, and assess compatibility. The proposer and reviewers must assess and record that decision before adding the exception. There is no universal numeric threshold: counts support the decision rather than granting automatic approval.

Historical counts in `display_measurements.json` remain preliminary evidence as collected, not complete records under this policy. Do not assume an unrecorded date, filtering process or review. Complete missing evidence before adopting an entry or adding a new exception; this page does not remeasure or rename existing entries.

### Keep both languages aligned [#section-14]

An entry has Arabic and English text. `definition_en`, `purpose_en`, `boundaries_en` and `note_en` translate the Arabic fields without adding or removing conditions. Translate boundaries line by line.

Use canonical terms such as `ayah` in English prose and put identifiers in backticks. Translate repeated Arabic wording consistently. Leave Arabic in English fields only when discussing that name, enclosed in «…». This explains a concept in another language; it is not an authorised translation of scripture.

### Preserve old names [#section-15]

When renaming or merging entries for the same concept, put the former name in `deprecated` on the surviving entry. Record the date and reason in `note` with a decision-record link. Deprecated names remain in that field; `aliases.json` indexes alternative spellings.

When withdrawing an entire entry, retain it with `status: deprecated` so its name is never reused for another meaning. An incorrect name for a different concept is not a former name for this one.

### Before sending [#section-16]

- The real case, purpose, boundaries and sources are explained.
- Names follow the standard and relationships resolve to existing entries.
- Both languages agree and the entry status reflects its review.
- Former names, dates and reasons are preserved where needed.

## Lookup [#dictionary-lookup]

One row per concept, sorted by code. Follow the code to the full entry.

| code | display | Arabic | kind | category | definition |
| --- | --- | --- | --- | --- | --- |
| [`abrogation`](/docs/terms/dictionary/quranic_sciences#abrogation) | Abrogation | النسخ | `concept` | `quranic_sciences` | The lifting of a legal ruling by a later legal proof. |
| [`asbab_al_nuzul`](/docs/terms/dictionary/revelation#asbab_al_nuzul) | Asbab al-Nuzul | أسباب النزول | `content` | `revelation` | The events or questions that an ayah, or several ayahs, was revealed to address or to rule on. |
| [`ayah`](/docs/terms/dictionary/structure#ayah) | Ayah | الآية | `entity` | `structure` | A unit of the Quranic text falling within a surah and having determined boundaries. |
| [`ayah_count`](/docs/terms/dictionary/ayah_numbering#ayah_count) | Ayah Count | عدد الآيات | `property` | `ayah_numbering` | The number of ayahs in a surah under a given numbering system; it may differ from one system to another as the counted fasilahs differ. |
| [`ayah_ending`](/docs/terms/dictionary/structure#ayah_ending) | Ayah Ending | الفاصلة | `concept` | `structure` | The close of an ayah or a passage as a matter of its composition; some scholars define it as the ayah's last word. |
| [`ayah_fragment`](/docs/terms/dictionary/mushaf#ayah_fragment) | Ayah Fragment | مقطع الآية | `unit` | `mushaf` | What appears of one ayah on one line of a page of a given mushaf; an ayah that runs over two lines is two maqtas. |
| [`ayah_key`](/docs/terms/dictionary/structure#ayah_key) | Ayah Key |  | `property` | `structure` | A textual identifier of an ayah joining its surah number and its number within it with a colon, in the form `2:255`; it is read only in the light of the ayah numbering system it rests on. |
| [`ayah_mark`](/docs/terms/dictionary/dabt#ayah_mark) | Ayah Mark | علامة الآية | `mark` | `dabt` | The circle separating one ayah from the next. |
| [`ayah_numbering_basri`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri) | Basri Numbering | العد البصري | `classification_value` | `ayah_numbering` | The Basran numbering system, transmitted from Asim al-Jahdari and the Basran authorities before him. |
| [`ayah_numbering_dimashqi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi) | Dimashqi Numbering | العد الدمشقي | `classification_value` | `ayah_numbering` | The Damascene numbering system, transmitted from Yahya ibn al-Harith al-Dhimari from Ibn Amir; also called the Shami numbering. |
| [`ayah_numbering_kufi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi) | Kufi Numbering | العد الكوفي | `classification_value` | `ayah_numbering` | The Kufan numbering system, transmitted from Hamzah al-Zayyat from Ibn Abi Layla from Abu Abd al-Rahman al-Sulami from Ali ibn Abi Talib. |
| [`ayah_numbering_madani_first`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first) | First Madani Numbering | العد المدني الأول | `classification_value` | `ayah_numbering` | The earlier Madinan numbering system, that of Abu Jafar Yazid ibn al-Qaqa and Shaybah ibn Nassah. |
| [`ayah_numbering_madani_last`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last) | Last Madani Numbering | العد المدني الأخير | `classification_value` | `ayah_numbering` | The later Madinan numbering system, that of Ismail ibn Jafar from Sulayman ibn Jammaz. |
| [`ayah_numbering_makki`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki) | Makki Numbering | العد المكي | `classification_value` | `ayah_numbering` | The Makkan numbering system, transmitted from Ibn Kathir from Mujahid from Ibn Abbas from Ubayy ibn Kab. |
| [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system) | Ayah Numbering System | نظام عد الآي | `classification` | `ayah_numbering` | A system that fixes the boundaries of the ayahs, their totals and their numbers, and certain questions about the basmalah, as transmitted by one of the schools of ayah counting. |
| [`ayah_timing`](/docs/terms/dictionary/recitation#ayah_timing) | Ayah Timing |  | `concept` | `recitation` | A span of time in a recitation recording, given by a start and an end, corresponding to one ayah. |
| [`basmalah`](/docs/terms/dictionary/structure#basmalah) | Basmalah | البسملة | `concept` | `structure` | The formula «بسم الله الرحمن الرحيم» with which the surahs open, except surah al-Tawbah. |
| [`character`](/docs/terms/dictionary/text#character) | Character |  | `unit` | `text` | An abstract unit of text in a digital encoding; it need not correspond to a single linguistic letter. |
| [`codepoint`](/docs/terms/dictionary/text#codepoint) | Codepoint |  | `unit` | `text` | A numeric value defined by an encoding standard such as Unicode. |
| [`dagger_alif`](/docs/terms/dictionary/dabt#dagger_alif) | Dagger Alif | الألف الخنجرية | `mark` | `dabt` | Restores an alif omitted from the Uthmani skeleton but obligatory in pronunciation. |
| [`dammah`](/docs/terms/dictionary/dabt#dammah) | Dammah | الضمة | `mark` | `dabt` | The mark for the short vowel u on the letter. |
| [`disputed`](/docs/terms/dictionary/revelation#disputed) | Disputed | مختلف فيه | `classification_value` | `revelation` | A surah or ayah that the accepted sources do not agree to classify as makki or madani. |
| [`division_mark`](/docs/terms/dictionary/dabt#division_mark) | Division Mark | علامة التقسيم | `mark` | `dabt` | Marks the start of a juz, a hizb, or a half or quarter of one. |
| [`dot`](/docs/terms/dictionary/dabt#dot) | Dot | النقطة | `mark` | `dabt` | One dot, above or below, distinguishing a letter from the others that share its skeleton (ijam): baa, noon, jeem, khaa, dhaal. |
| [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah) | Equivalent Ayah | الآية المقابلة | `concept` | `ayah_numbering` | The ayah in one numbering system that corresponds to an ayah in another. |
| [`fathah`](/docs/terms/dictionary/dabt#fathah) | Fathah | الفتحة | `mark` | `dabt` | The mark for the short vowel a on the letter. |
| [`font`](/docs/terms/dictionary/mushaf#font) | Font | الخط | `concept` | `mushaf` | A file carrying a set of glyphs and the rules for laying them out, used to render the text of a mushaf. |
| [`ghunnah`](/docs/terms/dictionary/tajwid#ghunnah) | Ghunnah | الغنة | `concept` | `tajwid` | A sound from the nasal cavity built into the body of noon and meem, in which the tongue plays no part; its length differs by ruling, fullest in the doubled and the merged letter, then in the concealed, then in the vowelless letter sounded clearly. |
| [`glyph`](/docs/terms/dictionary/text#glyph) | Glyph |  | `unit` | `text` | The visual shape a font produces to represent a letter, a character, or a group of them. |
| [`grapheme`](/docs/terms/dictionary/text#grapheme) | Grapheme |  | `unit` | `text` | A written unit that a user perceives as one unit, which may consist of more than one `codepoint`. |
| [`hadr`](/docs/terms/dictionary/recitation_pace#hadr) | Hadr | الحدر | `classification_value` | `recitation_pace` | Reciting quickly while keeping the letters, the vowels and the rules of delivery intact. |
| [`hamzah`](/docs/terms/dictionary/dabt#hamzah) | Hamzah | الهمزة | `mark` | `dabt` | Marks a fully realised hamzah (hamzat al-qat). |
| [`hamzat_al_wasl`](/docs/terms/dictionary/dabt#hamzat_al_wasl) | Hamzat al-Wasl | همزة الوصل | `mark` | `dabt` | Marks a connecting hamzah, dropped whenever the word is reached in continuation. |
| [`harakah`](/docs/terms/dictionary/dabt#harakah) | Harakah | الحركة | `classification` | `dabt` | A mark fixing a letter's vowel, its absence or its doubling: fathah, dammah, kasrah, sukun and shaddah. |
| [`hizb`](/docs/terms/dictionary/divisions#hizb) | Hizb | الحزب | `entity` | `divisions` | In the current division, half a juz, so that the Quran is 60 hizbs. |
| [`idgham`](/docs/terms/dictionary/tajwid#idgham) | Idgham | الإدغام | `classification_value` | `tajwid` | Merging a vowelless letter into a vowelled letter after it so that the two become one doubled letter, whether the merging is complete or partial, with ghunnah or without it. |
| [`ijam`](/docs/terms/dictionary/dabt#ijam) | Ijam | الإعجام | `classification` | `dabt` | The dotting that distinguishes a letter from the letters that share its written shape. |
| [`ikhfa`](/docs/terms/dictionary/tajwid#ikhfa) | Ikhfa | الإخفاء | `classification_value` | `tajwid` | Pronouncing a vowelless letter in a manner between izhar and idgham, without doubling and with the ghunnah kept: haqiqi in noon sakinah and tanwin before its 15 letters, and shafawi in meem sakinah before a baa. |
| [`imalah`](/docs/terms/dictionary/dabt#imalah) | Imalah | الإمالة | `mark` | `dabt` | Marks the major imalah: a fathah pronounced leaning toward kasrah. |
| [`instructional_ayah_repetition`](/docs/terms/dictionary/recitation_style#instructional_ayah_repetition) | Instructional Ayah Repetition | تكرار الآيات | `concept` | `recitation_style` | Repeating an ayah, or part of one, once or several times in a teaching pattern that helps the learner take it in and memorise it. |
| [`iqlab`](/docs/terms/dictionary/tajwid#iqlab) | Iqlab | الإقلاب | `classification_value` | `tajwid` | Turning noon sakinah or tanwin into a meem, concealed with ghunnah, before a baa. |
| [`irab`](/docs/terms/dictionary/linguistics#irab) | Irab | الإعراب | `analysis` | `linguistics` | The statement of the syntactic function of words, their case markers, and their relations within the construction. |
| [`ishmam`](/docs/terms/dictionary/dabt#ishmam) | Ishmam | الإشمام | `mark` | `dabt` | Marks ishmam: the lips are rounded to hint at a dropped dammah, without any sound. |
| [`istiadhah`](/docs/terms/dictionary/recitation#istiadhah) | Istiadhah | الاستعاذة | `concept` | `recitation` | Seeking refuge with Allah from the Shaytan before reciting the Quran. |
| [`izhar`](/docs/terms/dictionary/tajwid#izhar) | Izhar | الإظهار | `classification_value` | `tajwid` | Sounding a vowelless letter from its point of articulation with no added ghunnah, as noon sakinah and tanwin are sounded before the throat letters, and meem sakinah before any letter other than baa and meem. |
| [`juz`](/docs/terms/dictionary/divisions#juz) | Juz | الجزء | `entity` | `divisions` | One of the 30 parts of the well-known division of the mushaf, made to ease reading and completing it. |
| [`kasrah`](/docs/terms/dictionary/dabt#kasrah) | Kasrah | الكسرة | `mark` | `dabt` | The mark for the short vowel i on the letter. |
| [`khatmah`](/docs/terms/dictionary/recitation#khatmah) | Khatmah | الختمة | `concept` | `recitation` | Reading the Quran in full, from its beginning to its end. |
| [`layout`](/docs/terms/dictionary/mushaf#layout) | Layout | التخطيط | `concept` | `mushaf` | The visual arrangement of the text and its elements into pages, lines and positions within a given mushaf or view. |
| [`lemma`](/docs/terms/dictionary/linguistics#lemma) | Lemma |  | `unit` | `linguistics` | The base dictionary form that an inflected word form is referred back to. |
| [`letter`](/docs/terms/dictionary/text#letter) | Letter | الحرف | `unit` | `text` | A letter of the alphabet as a linguistic unit of writing. |
| [`letter_relation`](/docs/terms/dictionary/tajwid#letter_relation) | Letter Relation | التجاور | `classification` | `tajwid` | The relation of two adjacent letters to each other in point of articulation and attribute: identical, of one kind, close, or distant; the merging of the first into the second, or its clear sounding, is built on it. |
| [`line`](/docs/terms/dictionary/mushaf#line) | Line | السطر | `unit` | `mushaf` | A typeset line within a page of a mushaf or of a given layout. |
| [`madani`](/docs/terms/dictionary/revelation#madani) | Madani | مدني | `classification_value` | `revelation` | The part of the Quran revealed after the Hijrah, even where it was revealed outside Madinah. |
| [`madd`](/docs/terms/dictionary/tajwid#madd) | Madd | المد | `classification` | `tajwid` | Prolonging the sound on one of the three letters of madd: a vowelless alif after a fathah, a vowelless waw after a dammah, a vowelless yaa after a kasrah; whether the madd is original, without which the letter does not stand, or secondary, caused by a hamzah or a sukun. |
| [`madd_al_badal`](/docs/terms/dictionary/tajwid#madd_al_badal) | Madd al-Badal | مد البدل | `classification_value` | `tajwid` | A madd caused by a hamzah before the letter of madd, where the letter of madd was substituted for a vowelless hamzah, as in «آمن», «أوتوا» and «إيمان»; its length is 2 counts for Hafs, more for Warsh. |
| [`madd_al_iwad`](/docs/terms/dictionary/tajwid#madd_al_iwad) | Madd al-Iwad | مد العوض | `classification_value` | `tajwid` | Lengthening an alif in place of tanwin al-fath when stopping on the word; its length is 2 counts. |
| [`madd_al_lin`](/docs/terms/dictionary/tajwid#madd_al_lin) | Madd al-Lin | مد اللين | `classification_value` | `tajwid` | Lengthening a vowelless waw or yaa preceded by a fathah when stopping on the word with an incidental sukun, as in «خوف» and «بيت». |
| [`madd_al_silah`](/docs/terms/dictionary/tajwid#madd_al_silah) | Madd al-Silah | مد الصلة | `classification_value` | `tajwid` | A madd arising from joining the pronoun haa to a waw or a yaa when it falls between two vowelled letters; sughra when no hamzah follows, kubra when one does. |
| [`madd_arid_li_al_sukun`](/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun) | Madd Arid lil-Sukun | المد العارض للسكون | `classification_value` | `tajwid` | A madd caused by an incidental sukun in stopping after the letter of madd; shortening, middle length and full length are all permitted in it. |
| [`madd_lazim`](/docs/terms/dictionary/tajwid#madd_lazim) | Madd Lazim | المد اللازم | `classification_value` | `tajwid` | A secondary madd caused by an original sukun, fixed in continuing and in stopping, after the letter of madd, in a word or in a letter of the surah openings, whether heavy with idgham or light; its length is 6 counts. |
| [`madd_munfasil`](/docs/terms/dictionary/tajwid#madd_munfasil) | Madd Munfasil | المد المنفصل | `classification_value` | `tajwid` | A secondary madd caused by a hamzah at the start of the word following the letter of madd; it is permissible, shortened or lengthened by riwayah and tariq. |
| [`madd_muttasil`](/docs/terms/dictionary/tajwid#madd_muttasil) | Madd Muttasil | المد المتصل | `classification_value` | `tajwid` | A secondary madd caused by a hamzah after the letter of madd within one word; it is obligatory for all the readers, and its lengths differ by riwayah and tariq. |
| [`madd_tabii`](/docs/terms/dictionary/tajwid#madd_tabii) | Madd Tabee | المد الطبيعي | `classification_value` | `tajwid` | The madd without which the letter of madd itself does not stand, depending on no cause of hamzah or sukun; its length is 2 counts. |
| [`maddah`](/docs/terms/dictionary/dabt#maddah) | Maddah | المدة | `mark` | `dabt` | Marks that the letter is lengthened beyond the natural madd. |
| [`makki`](/docs/terms/dictionary/revelation#makki) | Makki | مكي | `classification_value` | `revelation` | The part of the Quran revealed before the Hijrah, even where it was revealed outside Makkah. |
| [`manzil`](/docs/terms/dictionary/divisions#manzil) | Manzil | المنزل | `entity` | `divisions` | One of 7 traditional parts of the Quran, made to ease completing it in a week. |
| [`mathani`](/docs/terms/dictionary/surah_classification#mathani) | Mathani | المثاني | `classification_value` | `surah_classification` | The surahs shorter than the miun, coming after them in the traditional division; called mathani because they are recited more often. |
| [`meem_sakinah`](/docs/terms/dictionary/tajwid#meem_sakinah) | Meem Sakinah | الميم الساكنة | `concept` | `tajwid` | A meem carrying no vowel, fixed in pronunciation and in writing, falling in the middle of a word or at its end. |
| [`miun`](/docs/terms/dictionary/surah_classification#miun) | Miun | المئون | `classification_value` | `surah_classification` | The surahs whose ayahs come to about 100, a little more or a little less. |
| [`morpheme`](/docs/terms/dictionary/linguistics#morpheme) | Morpheme | الوحدة الصرفية | `unit` | `linguistics` | The smallest unit within a word carrying a meaning or a morphological function, such as a prefix, a suffix or a stem. |
| [`morphology`](/docs/terms/dictionary/linguistics#morphology) | Morphology | الصرف | `analysis` | `linguistics` | The analysis of a word's structure and form and the morphological properties it carries. |
| [`muallim`](/docs/terms/dictionary/recitation_style#muallim) | Muallim | معلم | `classification_value` | `recitation_style` | A recitation style meant for teaching, which may repeat ayahs or leave the learner time to repeat after the reciter. |
| [`mufassal`](/docs/terms/dictionary/surah_classification#mufassal) | Mufassal | المفصل | `classification_value` | `surah_classification` | A group of the short surahs following the mathani; scholars differ over where it begins. |
| [`mufassir`](/docs/terms/dictionary/tafsir#mufassir) | Mufassir | المفسر | `role` | `tafsir` | One to whom a tafsir of the Quran is attributed, whether by authorship or by transmission. |
| [`mujawwad`](/docs/terms/dictionary/recitation_style#mujawwad) | Mujawwad | مجود | `classification_value` | `recitation_style` | A recitation style that is slow and melodic, with the tajwid rules drawn out; the label given to recordings delivered that way. |
| [`muqatta_letter`](/docs/terms/dictionary/structure#muqatta_letter) | Muqatta Letter | الحرف المقطع | `concept` | `structure` | Alphabetic letters that open certain surahs, such as Alif Laam Meem, Alif Laam Raa, Haa Meem and Kaaf Haa Yaa Ayn Saad. |
| [`muqri`](/docs/terms/dictionary/qiraat#muqri) | Muqri | المقرئ | `role` | `qiraat` | One who has received the recitation, mastered it, and transmits it to learners. |
| [`murattal`](/docs/terms/dictionary/recitation_style#murattal) | Murattal | مرتل | `classification_value` | `recitation_style` | A recitation style that is measured and unadorned, at a reading pace; the label given to recordings delivered that way. |
| [`mushaf`](/docs/terms/dictionary/core#mushaf) | Mushaf | المصحف | `entity` | `core` | The Quran as a written, bound book, in its established order. |
| [`mushaf_edition`](/docs/terms/dictionary/core#mushaf_edition) | Mushaf Edition | طبعة المصحف | `entity` | `core` | A specific published edition of the mushaf with its own publisher, rasm, dabt, layout and other properties. |
| [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) | Mushaf Mark | علامة المصحف | `classification` | `dabt` | A sign or mark that is not one of a word's original letters, used in the mushaf for reading, organisation or guidance. |
| [`mutajanisan`](/docs/terms/dictionary/tajwid#mutajanisan) | Mutajanisan | المتجانسان | `classification_value` | `tajwid` | Two letters of one point of articulation differing in attribute, like the dal and the taa in «قد تبين». |
| [`mutamathilan`](/docs/terms/dictionary/tajwid#mutamathilan) | Mutamathilan | المتماثلان | `classification_value` | `tajwid` | Two letters identical in point of articulation and in attribute, like the two baas in «اضرب بعصاك». |
| [`mutashabihat`](/docs/terms/dictionary/quranic_sciences#mutashabihat) | Mutashabihat | المتشابهات | `analysis` | `quranic_sciences` | The places in the Quran where the wording of ayahs, or of parts of them, resembles one another, whether exactly or with a slight difference in a word or in order. |
| [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah) | Noon Sakinah | النون الساكنة | `concept` | `tajwid` | A noon carrying no vowel, fixed in pronunciation and in writing, in continuing and in stopping. |
| [`noun`](/docs/terms/dictionary/linguistics#noun) | Noun | الاسم | `classification_value` | `linguistics` | A noun in the Arabic sense: a word whose meaning is not tied to a time. |
| [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark) | Orthographic Mark | العلامة الإملائية | `classification` | `dabt` | A mark fixing how a word is written, such as the hamzah, the maddah and the small letters. |
| [`page`](/docs/terms/dictionary/mushaf#page) | Page | الصفحة | `unit` | `mushaf` | A typographic unit of a given mushaf's layout; its content and its boundaries may differ from one mushaf or edition to another. |
| [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech) | Part of Speech | قسم الكلمة | `classification` | `linguistics` | The classification of a word or a morpheme by its grammatical class: noun, verb, particle and what branches from them. |
| [`particle`](/docs/terms/dictionary/linguistics#particle) | Particle | حرف المعنى | `classification_value` | `linguistics` | A particle: a word with no meaning of its own that gives meaning to the words around it, such as prepositions and the particles of conjunction, negation and interrogation. |
| [`qalqalah`](/docs/terms/dictionary/tajwid#qalqalah) | Qalqalah | القلقلة | `classification_value` | `tajwid` | A disturbance in the sound of a vowelless letter as it is pronounced, so that a strong beat is heard, in the letters of «قطب جد»; it grows stronger by the letter's place in the word and by stopping on it. |
| [`qiraah`](/docs/terms/dictionary/qiraat#qiraah) | Qiraah | القراءة | `concept` | `qiraat` | One of the ways of reciting the Quran, attributed to one of the imams of the qiraat, from which the riwayahs and tariqs branch. |
| [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark) | Qiraah Mark | علامة القراءة | `classification` | `dabt` | A mark pointing to a particular manner of delivery at its place, such as saktah, ishmam and tashil. |
| [`quran`](/docs/terms/dictionary/core#quran) | Quran | القرآن | `concept` | `core` | The speech of Allah revealed to Muhammad, peace be upon him, whose recitation is worship. |
| [`quran_merits`](/docs/terms/dictionary/quranic_sciences#quran_merits) | Quran Merits | فضائل القرآن | `content` | `quranic_sciences` | What has been transmitted about the merit of the Quran, or of one of its surahs or ayahs, and the reward or effect that follows from reciting it. |
| [`rasm`](/docs/terms/dictionary/mushaf#rasm) | Rasm | الرسم | `classification` | `mushaf` | The way the words of the Quran are written: which letters are written and which omitted or added, and where words are joined or kept apart. |
| [`rasm_imlai`](/docs/terms/dictionary/mushaf#rasm_imlai) | Rasm Imlai | الرسم الإملائي | `classification_value` | `mushaf` | Writing the words of the Quran by the rules of modern orthography, writing what the Uthmani rasm omits and omitting what it adds, so that they read in their familiar form. |
| [`rasm_uthmani`](/docs/terms/dictionary/mushaf#rasm_uthmani) | Rasm Uthmani | الرسم العثماني | `classification_value` | `mushaf` | The way the words of the Uthmani mushafs are written, with the omission, addition, substitution, separation and joining that go with it. |
| [`rawi`](/docs/terms/dictionary/qiraat#rawi) | Rawi | الراوي | `role` | `qiraat` | One to whom a transmission from an imam of a qiraah is attributed. |
| [`recitation`](/docs/terms/dictionary/recitation#recitation) | Recitation | تسجيل التلاوة | `entity` | `recitation` | A published recording of a recitation of the Quran, attributed to a reciter, a riwayah and a style of delivery. |
| [`recitation_pace`](/docs/terms/dictionary/recitation_pace#recitation_pace) | Recitation Pace | مراتب القراءة | `classification` | `recitation_pace` | A classification of how fast a recitation is delivered while its rules are kept. |
| [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style) | Recitation Style | نمط الأداء | `classification` | `recitation_style` | A classification of recordings and recitations by how they are delivered, murattal, mujawwad or muallim, independent of the qiraah and the riwayah. |
| [`reciter`](/docs/terms/dictionary/recitation#reciter) | Reciter | القارئ | `role` | `recitation` | The person who performs a recitation of the Quran. |
| [`rectangular_zero`](/docs/terms/dictionary/dabt#rectangular_zero) | Rectangular Zero | الصفر المستطيل | `mark` | `dabt` | Marks an alif dropped in continuation but pronounced when stopping on it. |
| [`reflection`](/docs/terms/dictionary/quranic_sciences#reflection) | Reflection | التدبر | `content` | `quranic_sciences` | Reflecting on the meanings of the Quran and what they call for in action, and what a reader records of a pause at an ayah or a word. |
| [`revelation`](/docs/terms/dictionary/revelation#revelation) | Revelation | النزول | `concept` | `revelation` | The revelation of the Quran to the Prophet, peace be upon him, in stages over the years of his mission, as events and needs arose. |
| [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification) | Revelation Classification | تصنيف النزول | `classification` | `revelation` | A classification of the Quranic text by whether its revelation fell before or after the Hijrah, in the accepted usage. |
| [`revelation_order`](/docs/terms/dictionary/revelation#revelation_order) | Revelation Order | ترتيب النزول | `property` | `revelation` | The order of the surahs or the ayahs by the time of their revelation, which may differ from one accepted source to another. |
| [`riwayah`](/docs/terms/dictionary/qiraat#riwayah) | Riwayah | الرواية | `concept` | `qiraat` | What is attributed to a transmitter from an imam of a qiraah, such as the riwayah of Hafs from Asim. |
| [`root`](/docs/terms/dictionary/linguistics#root) | Root | الجذر | `unit` | `linguistics` | The morphological origin a word is referred back to, showing its derivation and its relation to other words. |
| [`rounded_zero`](/docs/terms/dictionary/dabt#rounded_zero) | Rounded Zero | الصفر المستدير | `mark` | `dabt` | Marks a letter present in the skeleton but never pronounced — neither in continuation nor when stopping. |
| [`rubu_al_hizb`](/docs/terms/dictionary/divisions#rubu_al_hizb) | Rubu al-Hizb | ربع الحزب | `entity` | `divisions` | A quarter of a hizb in the well-known division of the mushaf. |
| [`ruku`](/docs/terms/dictionary/divisions#ruku) | Ruku | الركوع | `entity` | `divisions` | A conventional section of the Quran used to organise reading, printed in some mushafs. |
| [`saba_tiwal`](/docs/terms/dictionary/surah_classification#saba_tiwal) | Saba Tiwal | السبع الطوال | `classification_value` | `surah_classification` | A group of the longest surahs of the Quran, at its beginning, with a known disagreement over which surah is the seventh. |
| [`sajdah`](/docs/terms/dictionary/structure#sajdah) | Sajdah | السجدة | `concept` | `structure` | A place in the Quran at which the reader and the listener prostrate, ending at a particular ayah. |
| [`sajdah_line`](/docs/terms/dictionary/dabt#sajdah_line) | Sajdah Line | خط السجدة | `mark` | `dabt` | Marks the word that makes prostration due. |
| [`sajdah_mark`](/docs/terms/dictionary/dabt#sajdah_mark) | Sajdah Mark | علامة السجدة | `mark` | `dabt` | Marks the point at which the reader prostrates. |
| [`saktah`](/docs/terms/dictionary/tajwid#saktah) | Saktah | السكتة | `concept` | `tajwid` | Cutting off the voice for a short moment without breathing, then continuing the recitation. |
| [`saktah_mark`](/docs/terms/dictionary/dabt#saktah_mark) | Saktah Mark | علامة السكتة | `mark` | `dabt` | Marks a saktah: a brief pause without taking a breath, then continuing. |
| [`seen_al_qiraah`](/docs/terms/dictionary/dabt#seen_al_qiraah) | Seen al-Qiraah | سين القراءة | `mark` | `dabt` | A small seen above a saad marks reading it as seen; below it, reading it as saad. |
| [`shaddah`](/docs/terms/dictionary/dabt#shaddah) | Shaddah | الشدة | `mark` | `dabt` | Marks a doubled letter: the first, vowelless, is merged into the second and the two are pronounced as one stressed letter. |
| [`small_meem`](/docs/terms/dictionary/dabt#small_meem) | Small Meem | الميم الصغيرة | `mark` | `dabt` | Marks iqlab: a vowelless noon or tanwin pronounced as meem before baa. |
| [`small_noon`](/docs/terms/dictionary/dabt#small_noon) | Small Noon | النون الصغيرة | `mark` | `dabt` | Restores a noon omitted from the skeleton but obligatory in pronunciation, at one place only (21:88). |
| [`small_waw`](/docs/terms/dictionary/dabt#small_waw) | Small Waw | الواو الصغيرة | `mark` | `dabt` | Marks the silah of the pronoun haa with dammah, pronounced as a waw in continuation. |
| [`small_yaa`](/docs/terms/dictionary/dabt#small_yaa) | Small Yaa | الياء الفارسية | `mark` | `dabt` | Marks the silah of the pronoun haa with kasrah, pronounced as a yaa in continuation. |
| [`spoken_translation`](/docs/terms/dictionary/translation#spoken_translation) | Spoken Translation | الترجمة المنطوقة | `content` | `translation` | Rendering the meanings of the Quran into another language in audio or spoken material. |
| [`stem`](/docs/terms/dictionary/linguistics#stem) | Stem | الجذع | `unit` | `linguistics` | What remains of a word once its prefixes and suffixes are removed, and what the morphological additions attach to. |
| [`sukun`](/docs/terms/dictionary/dabt#sukun) | Sukun | السكون | `mark` | `dabt` | Marks a letter that carries no vowel and is articulated clearly. |
| [`surah`](/docs/terms/dictionary/structure#surah) | Surah | السورة | `entity` | `structure` | A principal unit of the structure of the Quran, made up of ordered ayahs, with a name and a known place in the order of the mushaf. |
| [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group) | Surah Group | تصنيف السور | `classification` | `surah_classification` | A classification gathering surahs by inherited conventional divisions that rest on length or on their place among the groups of surahs. |
| [`surah_name_reason`](/docs/terms/dictionary/quranic_sciences#surah_name_reason) | Surah Name Reason | سبب التسمية | `content` | `quranic_sciences` | The statement of why a surah was given its name, and what has been transmitted about it by narration or on linguistic grounds. |
| [`surah_names`](/docs/terms/dictionary/quranic_sciences#surah_names) | Surah Names | أسماء السورة | `content` | `quranic_sciences` | The names a surah is known by. |
| [`surah_objectives`](/docs/terms/dictionary/quranic_sciences#surah_objectives) | Surah Objectives | مقاصد السورة | `content` | `quranic_sciences` | The overarching meanings a surah turns on, held together by its subject, and the single aim its ayahs are ordered around. |
| [`tadwir`](/docs/terms/dictionary/recitation_pace#tadwir) | Tadwir | التدوير | `classification_value` | `recitation_pace` | Reciting at a middle speed between tahqiq and hadr, while keeping the rules. |
| [`tafkhim`](/docs/terms/dictionary/tajwid#tafkhim) | Tafkhim | التفخيم | `concept` | `tajwid` | A fullness entering the sound of a letter so that the mouth fills with its echo; inherent in the letters of istila, and incidental in the raa, the lam of the name of Allah and the alif, following what precedes them. |
| [`tafsir`](/docs/terms/dictionary/tafsir#tafsir) | Tafsir | التفسير | `content` | `tafsir` | Stating the meanings of the Quran, explaining its wording, and the rulings and guidance it points to, according to the principles of tafsir. |
| [`tafsir_al_ray`](/docs/terms/dictionary/tafsir#tafsir_al_ray) | Tafsir al-Ray | تفسير الرأي | `content` | `tafsir` | Explaining the meanings of the Quran by reasoning and reflection, after knowledge of the speech of the Arabs, its styles and the principles of tafsir, whether the reasoning is approved or censured. |
| [`tafsir_mathur`](/docs/terms/dictionary/tafsir#tafsir_mathur) | Tafsir Mathur | التفسير المأثور | `content` | `tafsir` | Tafsir transmitted with a chain of narration: explanation of the Quran drawn from the Quran itself, from the Sunnah, or from the sayings of the Companions and Successors. |
| [`tahqiq`](/docs/terms/dictionary/recitation_pace#tahqiq) | Tahqiq | التحقيق | `classification_value` | `recitation_pace` | Reciting slowly and deliberately, giving the letters and their rules their full due; much used in teaching. |
| [`tajwid`](/docs/terms/dictionary/tajwid#tajwid) | Tajweed | التجويد | `concept` | `tajwid` | The discipline of delivering the letters of the Quran from their points of articulation and giving them their due properties and rulings. |
| [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling) | Tajwid Ruling | حكم التجويد | `classification` | `tajwid` | What is due in delivering a letter before the letter that follows it, or at a sukun or a hamzah: izhar, idgham, iqlab, ikhfa, madd, qalqalah, tafkhim or tarqiq, as the rules of tajwid settle it at a given place in the text. |
| [`tanwin`](/docs/terms/dictionary/dabt#tanwin) | Tanwin | التنوين | `classification` | `dabt` | An added vowelless noon at the end of a noun, written by doubling the shape of the vowel. |
| [`tanwin_al_damm`](/docs/terms/dictionary/dabt#tanwin_al_damm) | Tanwin al-Damm | تنوين الضم | `mark` | `dabt` | Marks the un tanwin. |
| [`tanwin_al_fath`](/docs/terms/dictionary/dabt#tanwin_al_fath) | Tanwin al-Fath | تنوين الفتح | `mark` | `dabt` | Marks the an tanwin. |
| [`tanwin_al_kasr`](/docs/terms/dictionary/dabt#tanwin_al_kasr) | Tanwin al-Kasr | تنوين الكسر | `mark` | `dabt` | Marks the in tanwin. |
| [`tariq`](/docs/terms/dictionary/qiraat#tariq) | Tariq | الطريق | `concept` | `qiraat` | A path of transmission taken from a rawi through those below him in the chain of transmission of a qiraah. |
| [`tarqiq`](/docs/terms/dictionary/tajwid#tarqiq) | Tarqiq | الترقيق | `concept` | `tajwid` | A thinness entering the sound of a letter so that the mouth does not fill with its echo; inherent in the letters of istifal, and incidental in the raa and the lam of the name of Allah. |
| [`tartil`](/docs/terms/dictionary/recitation#tartil) | Tartil | الترتيل | `concept` | `recitation` | Reciting the Quran deliberately, making the letters and words distinct, observing the stops and the meaning. |
| [`tashil`](/docs/terms/dictionary/dabt#tashil) | Tashil | التسهيل | `mark` | `dabt` | Marks tashil: the hamzah softened to a sound between a hamzah and an alif. |
| [`tashkil`](/docs/terms/dictionary/dabt#tashkil) | Tashkil | التشكيل | `concept` | `dabt` | The layer of dabt marks attached to the letters of the text, the harakat, tanwin, shaddah, sukun and what goes with them, taken as a whole. |
| [`three_dots`](/docs/terms/dictionary/dabt#three_dots) | Three Dots | الثلاث نقط | `mark` | `dabt` | Three dots above the letter, distinguishing it from the others that share its skeleton (ijam): thaa, sheen. |
| [`thumn`](/docs/terms/dictionary/divisions#thumn) | Thumn | الثمن | `entity` | `divisions` | An eighth of a hizb, a division used in some mushafs and schools. |
| [`tilawah`](/docs/terms/dictionary/recitation#tilawah) | Tilawah | التلاوة | `concept` | `recitation` | Reading the Quran in its wording, delivered aloud as the reader received it, whether in prayer, in a lesson or in a recording. |
| [`token`](/docs/terms/dictionary/text#token) | Token |  | `unit` | `text` | A unit produced by segmenting the text according to a declared method. |
| [`translation`](/docs/terms/dictionary/translation#translation) | Translation | الترجمة | `content` | `translation` | Rendering the meanings of the Quran into another language. |
| [`translator`](/docs/terms/dictionary/translation#translator) | Translator | المترجم | `role` | `translation` | One to whom a translation of the meanings of the Quran into another language is attributed, whether a person or a body. |
| [`transliteration`](/docs/terms/dictionary/translation#transliteration) | Transliteration | النقل الحرفي | `content` | `translation` | Representing the letters of one writing system with those of another by fixed rules, without translating the meaning. |
| [`two_dots`](/docs/terms/dictionary/dabt#two_dots) | Two Dots | النقطتان | `mark` | `dabt` | Two dots, above or below, distinguishing a letter from the others that share its skeleton (ijam): taa, yaa, qaaf. |
| [`verb`](/docs/terms/dictionary/linguistics#verb) | Verb | الفعل | `classification_value` | `linguistics` | A verb: a word whose meaning is tied to a time, with past, present and imperative forms. |
| [`wajh`](/docs/terms/dictionary/qiraat#wajh) | Wajh | الوجه | `concept` | `qiraat` | One of several manners of delivery, any of which may be taken within one riwayah or one tariq, such as the wajhs of madd arid li al-sukun. |
| [`waqf`](/docs/terms/dictionary/waqf#waqf) | Waqf | الوقف | `concept` | `waqf` | Stopping the recitation at a place in the text according to the rules of stopping and starting. |
| [`waqf_al_muanaqah`](/docs/terms/dictionary/dabt#waqf_al_muanaqah) | Waqf al-Muanaqah | وقف المعانقة | `classification_value` | `dabt` | Two candidate stopping points: stopping at one makes stopping at the other not allowed. |
| [`waqf_hasan`](/docs/terms/dictionary/waqf#waqf_hasan) | Waqf Hasan | الوقف الحسن | `classification_value` | `waqf` | A stop that yields a meaning but is connected to what follows it in wording and in meaning. |
| [`waqf_jaiz_mustawi_al_tarafayn`](/docs/terms/dictionary/dabt#waqf_jaiz_mustawi_al_tarafayn) | Waqf Jaiz Mustawi al-Tarafayn | الوقف الجائز مستوي الطرفين | `classification_value` | `dabt` | A permissible stop, with stopping and continuing equally sound. |
| [`waqf_jaiz_waqf_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_waqf_awla) | Waqf Jaiz Waqf Awla | الوقف الجائز مع كون الوقف أولى | `classification_value` | `dabt` | A permissible stop, and stopping is the better choice. |
| [`waqf_jaiz_wasl_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_wasl_awla) | Waqf Jaiz Wasl Awla | الوقف الجائز مع كون الوصل أولى | `classification_value` | `dabt` | A permissible stop, but continuing is the better choice. |
| [`waqf_kafi`](/docs/terms/dictionary/waqf#waqf_kafi) | Waqf Kafi | الوقف الكافي | `classification_value` | `waqf` | A stop whose meaning is complete but which is connected to what follows it in meaning, not in wording. |
| [`waqf_lazim`](/docs/terms/dictionary/dabt#waqf_lazim) | Waqf Lazim | الوقف اللازم | `classification_value` | `dabt` | A compulsory stop: continuing across it would suggest a meaning other than the one intended. |
| [`waqf_mamnu`](/docs/terms/dictionary/dabt#waqf_mamnu) | Waqf Mamnu | الوقف الممنوع | `classification_value` | `dabt` | A forbidden stop: stopping here would break the meaning or attach what follows to the wrong clause. |
| [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark) | Waqf Mark | علامة الوقف | `mark` | `dabt` | A mark in the mushaf pointing the reader to the ruling on stopping or continuing at a given place. |
| [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type) | Waqf Mark Type | نوع علامة الوقف | `classification` | `waqf` | A classification of what a waqf mark drawn in the mushaf points to: that stopping is compulsory, forbidden or permitted. |
| [`waqf_qabih`](/docs/terms/dictionary/waqf#waqf_qabih) | Waqf Qabih | الوقف القبيح | `classification_value` | `waqf` | A stop that yields no meaning, or yields a meaning that is not the one intended. |
| [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling) | Waqf Ruling | حكم الوقف | `classification` | `waqf` | A classification of the place itself by whether the meaning is complete there, not of the mark drawn at it. |
| [`waqf_tamm`](/docs/terms/dictionary/waqf#waqf_tamm) | Waqf Tamm | الوقف التام | `classification_value` | `waqf` | A stop whose meaning is complete and which is connected to what follows it neither in wording nor in meaning. |
| [`word`](/docs/terms/dictionary/text#word) | Word | الكلمة | `unit` | `text` | A unit of the text that a reader recognises as one word, independent of how a segmenter splits the text. |
| [`word_by_word_translation`](/docs/terms/dictionary/translation#word_by_word_translation) | Word by Word Translation |  | `content` | `translation` | A translation giving each word of the ayah its meaning in another language on its own, in the order of the original words. |
| [`word_key`](/docs/terms/dictionary/structure#word_key) | Word Key |  | `property` | `structure` | A textual identifier of a word that adds the word's position within the ayah to the ayah key, in the form `2:255:5`; the position is counted from the start of the ayah by a declared segmentation method. |
| [`word_meanings`](/docs/terms/dictionary/quranic_sciences#word_meanings) | Word Meanings | غريب القرآن | `content` | `quranic_sciences` | The explanation of Quranic words whose meaning is obscure to most readers, whether because they are rare in use or because their sense has shifted. |
| [`word_timing`](/docs/terms/dictionary/recitation#word_timing) | Word Timing |  | `concept` | `recitation` | A span of time in a recitation recording, given by a start and an end, corresponding to one word of an ayah. |

## By category [#section-18]

- **Core** — `core`: [`mushaf`](/docs/terms/dictionary/core#mushaf), [`mushaf_edition`](/docs/terms/dictionary/core#mushaf_edition), [`quran`](/docs/terms/dictionary/core#quran)
- **Structure** — `structure`: [`ayah`](/docs/terms/dictionary/structure#ayah), [`ayah_ending`](/docs/terms/dictionary/structure#ayah_ending), [`ayah_key`](/docs/terms/dictionary/structure#ayah_key), [`basmalah`](/docs/terms/dictionary/structure#basmalah), [`muqatta_letter`](/docs/terms/dictionary/structure#muqatta_letter), [`sajdah`](/docs/terms/dictionary/structure#sajdah), [`surah`](/docs/terms/dictionary/structure#surah), [`word_key`](/docs/terms/dictionary/structure#word_key)
- **Text** — `text`: [`character`](/docs/terms/dictionary/text#character), [`codepoint`](/docs/terms/dictionary/text#codepoint), [`glyph`](/docs/terms/dictionary/text#glyph), [`grapheme`](/docs/terms/dictionary/text#grapheme), [`letter`](/docs/terms/dictionary/text#letter), [`token`](/docs/terms/dictionary/text#token), [`word`](/docs/terms/dictionary/text#word)
- **Quran divisions** — `divisions`: [`hizb`](/docs/terms/dictionary/divisions#hizb), [`juz`](/docs/terms/dictionary/divisions#juz), [`manzil`](/docs/terms/dictionary/divisions#manzil), [`rubu_al_hizb`](/docs/terms/dictionary/divisions#rubu_al_hizb), [`ruku`](/docs/terms/dictionary/divisions#ruku), [`thumn`](/docs/terms/dictionary/divisions#thumn)
- **Surah classification** — `surah_classification`: [`mathani`](/docs/terms/dictionary/surah_classification#mathani), [`miun`](/docs/terms/dictionary/surah_classification#miun), [`mufassal`](/docs/terms/dictionary/surah_classification#mufassal), [`saba_tiwal`](/docs/terms/dictionary/surah_classification#saba_tiwal), [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group)
- **Mushaf and layout** — `mushaf`: [`ayah_fragment`](/docs/terms/dictionary/mushaf#ayah_fragment), [`font`](/docs/terms/dictionary/mushaf#font), [`layout`](/docs/terms/dictionary/mushaf#layout), [`line`](/docs/terms/dictionary/mushaf#line), [`page`](/docs/terms/dictionary/mushaf#page), [`rasm`](/docs/terms/dictionary/mushaf#rasm), [`rasm_imlai`](/docs/terms/dictionary/mushaf#rasm_imlai), [`rasm_uthmani`](/docs/terms/dictionary/mushaf#rasm_uthmani)
- **Dabt and Mushaf marks** — `dabt`: [`ayah_mark`](/docs/terms/dictionary/dabt#ayah_mark), [`dagger_alif`](/docs/terms/dictionary/dabt#dagger_alif), [`dammah`](/docs/terms/dictionary/dabt#dammah), [`division_mark`](/docs/terms/dictionary/dabt#division_mark), [`dot`](/docs/terms/dictionary/dabt#dot), [`fathah`](/docs/terms/dictionary/dabt#fathah), [`hamzah`](/docs/terms/dictionary/dabt#hamzah), [`hamzat_al_wasl`](/docs/terms/dictionary/dabt#hamzat_al_wasl), [`harakah`](/docs/terms/dictionary/dabt#harakah), [`ijam`](/docs/terms/dictionary/dabt#ijam), [`imalah`](/docs/terms/dictionary/dabt#imalah), [`ishmam`](/docs/terms/dictionary/dabt#ishmam), [`kasrah`](/docs/terms/dictionary/dabt#kasrah), [`maddah`](/docs/terms/dictionary/dabt#maddah), [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark), [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark), [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark), [`rectangular_zero`](/docs/terms/dictionary/dabt#rectangular_zero), [`rounded_zero`](/docs/terms/dictionary/dabt#rounded_zero), [`sajdah_line`](/docs/terms/dictionary/dabt#sajdah_line), [`sajdah_mark`](/docs/terms/dictionary/dabt#sajdah_mark), [`saktah_mark`](/docs/terms/dictionary/dabt#saktah_mark), [`seen_al_qiraah`](/docs/terms/dictionary/dabt#seen_al_qiraah), [`shaddah`](/docs/terms/dictionary/dabt#shaddah), [`small_meem`](/docs/terms/dictionary/dabt#small_meem), [`small_noon`](/docs/terms/dictionary/dabt#small_noon), [`small_waw`](/docs/terms/dictionary/dabt#small_waw), [`small_yaa`](/docs/terms/dictionary/dabt#small_yaa), [`sukun`](/docs/terms/dictionary/dabt#sukun), [`tanwin`](/docs/terms/dictionary/dabt#tanwin), [`tanwin_al_damm`](/docs/terms/dictionary/dabt#tanwin_al_damm), [`tanwin_al_fath`](/docs/terms/dictionary/dabt#tanwin_al_fath), [`tanwin_al_kasr`](/docs/terms/dictionary/dabt#tanwin_al_kasr), [`tashil`](/docs/terms/dictionary/dabt#tashil), [`tashkil`](/docs/terms/dictionary/dabt#tashkil), [`three_dots`](/docs/terms/dictionary/dabt#three_dots), [`two_dots`](/docs/terms/dictionary/dabt#two_dots), [`waqf_al_muanaqah`](/docs/terms/dictionary/dabt#waqf_al_muanaqah), [`waqf_jaiz_mustawi_al_tarafayn`](/docs/terms/dictionary/dabt#waqf_jaiz_mustawi_al_tarafayn), [`waqf_jaiz_waqf_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_waqf_awla), [`waqf_jaiz_wasl_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_wasl_awla), [`waqf_lazim`](/docs/terms/dictionary/dabt#waqf_lazim), [`waqf_mamnu`](/docs/terms/dictionary/dabt#waqf_mamnu), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark)
- **Ayah numbering** — `ayah_numbering`: [`ayah_count`](/docs/terms/dictionary/ayah_numbering#ayah_count), [`ayah_numbering_basri`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri), [`ayah_numbering_dimashqi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi), [`ayah_numbering_kufi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi), [`ayah_numbering_madani_first`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first), [`ayah_numbering_madani_last`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last), [`ayah_numbering_makki`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki), [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah)
- **Revelation** — `revelation`: [`asbab_al_nuzul`](/docs/terms/dictionary/revelation#asbab_al_nuzul), [`disputed`](/docs/terms/dictionary/revelation#disputed), [`madani`](/docs/terms/dictionary/revelation#madani), [`makki`](/docs/terms/dictionary/revelation#makki), [`revelation`](/docs/terms/dictionary/revelation#revelation), [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification), [`revelation_order`](/docs/terms/dictionary/revelation#revelation_order)
- **Qiraat** — `qiraat`: [`muqri`](/docs/terms/dictionary/qiraat#muqri), [`qiraah`](/docs/terms/dictionary/qiraat#qiraah), [`rawi`](/docs/terms/dictionary/qiraat#rawi), [`riwayah`](/docs/terms/dictionary/qiraat#riwayah), [`tariq`](/docs/terms/dictionary/qiraat#tariq), [`wajh`](/docs/terms/dictionary/qiraat#wajh)
- **Recitation** — `recitation`: [`ayah_timing`](/docs/terms/dictionary/recitation#ayah_timing), [`istiadhah`](/docs/terms/dictionary/recitation#istiadhah), [`khatmah`](/docs/terms/dictionary/recitation#khatmah), [`recitation`](/docs/terms/dictionary/recitation#recitation), [`reciter`](/docs/terms/dictionary/recitation#reciter), [`tartil`](/docs/terms/dictionary/recitation#tartil), [`tilawah`](/docs/terms/dictionary/recitation#tilawah), [`word_timing`](/docs/terms/dictionary/recitation#word_timing)
- **Recitation pace** — `recitation_pace`: [`hadr`](/docs/terms/dictionary/recitation_pace#hadr), [`recitation_pace`](/docs/terms/dictionary/recitation_pace#recitation_pace), [`tadwir`](/docs/terms/dictionary/recitation_pace#tadwir), [`tahqiq`](/docs/terms/dictionary/recitation_pace#tahqiq)
- **Recitation style** — `recitation_style`: [`instructional_ayah_repetition`](/docs/terms/dictionary/recitation_style#instructional_ayah_repetition), [`muallim`](/docs/terms/dictionary/recitation_style#muallim), [`mujawwad`](/docs/terms/dictionary/recitation_style#mujawwad), [`murattal`](/docs/terms/dictionary/recitation_style#murattal), [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style)
- **Tajwid** — `tajwid`: [`ghunnah`](/docs/terms/dictionary/tajwid#ghunnah), [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`ikhfa`](/docs/terms/dictionary/tajwid#ikhfa), [`iqlab`](/docs/terms/dictionary/tajwid#iqlab), [`izhar`](/docs/terms/dictionary/tajwid#izhar), [`letter_relation`](/docs/terms/dictionary/tajwid#letter_relation), [`madd`](/docs/terms/dictionary/tajwid#madd), [`madd_al_badal`](/docs/terms/dictionary/tajwid#madd_al_badal), [`madd_al_iwad`](/docs/terms/dictionary/tajwid#madd_al_iwad), [`madd_al_lin`](/docs/terms/dictionary/tajwid#madd_al_lin), [`madd_al_silah`](/docs/terms/dictionary/tajwid#madd_al_silah), [`madd_arid_li_al_sukun`](/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun), [`madd_lazim`](/docs/terms/dictionary/tajwid#madd_lazim), [`madd_munfasil`](/docs/terms/dictionary/tajwid#madd_munfasil), [`madd_muttasil`](/docs/terms/dictionary/tajwid#madd_muttasil), [`madd_tabii`](/docs/terms/dictionary/tajwid#madd_tabii), [`meem_sakinah`](/docs/terms/dictionary/tajwid#meem_sakinah), [`mutajanisan`](/docs/terms/dictionary/tajwid#mutajanisan), [`mutamathilan`](/docs/terms/dictionary/tajwid#mutamathilan), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`qalqalah`](/docs/terms/dictionary/tajwid#qalqalah), [`saktah`](/docs/terms/dictionary/tajwid#saktah), [`tafkhim`](/docs/terms/dictionary/tajwid#tafkhim), [`tajwid`](/docs/terms/dictionary/tajwid#tajwid), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling), [`tarqiq`](/docs/terms/dictionary/tajwid#tarqiq)
- **Waqf** — `waqf`: [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_hasan`](/docs/terms/dictionary/waqf#waqf_hasan), [`waqf_kafi`](/docs/terms/dictionary/waqf#waqf_kafi), [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type), [`waqf_qabih`](/docs/terms/dictionary/waqf#waqf_qabih), [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling), [`waqf_tamm`](/docs/terms/dictionary/waqf#waqf_tamm)
- **Linguistics** — `linguistics`: [`irab`](/docs/terms/dictionary/linguistics#irab), [`lemma`](/docs/terms/dictionary/linguistics#lemma), [`morpheme`](/docs/terms/dictionary/linguistics#morpheme), [`morphology`](/docs/terms/dictionary/linguistics#morphology), [`noun`](/docs/terms/dictionary/linguistics#noun), [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech), [`particle`](/docs/terms/dictionary/linguistics#particle), [`root`](/docs/terms/dictionary/linguistics#root), [`stem`](/docs/terms/dictionary/linguistics#stem), [`verb`](/docs/terms/dictionary/linguistics#verb)
- **Translation** — `translation`: [`spoken_translation`](/docs/terms/dictionary/translation#spoken_translation), [`translation`](/docs/terms/dictionary/translation#translation), [`translator`](/docs/terms/dictionary/translation#translator), [`transliteration`](/docs/terms/dictionary/translation#transliteration), [`word_by_word_translation`](/docs/terms/dictionary/translation#word_by_word_translation)
- **Tafsir** — `tafsir`: [`mufassir`](/docs/terms/dictionary/tafsir#mufassir), [`tafsir`](/docs/terms/dictionary/tafsir#tafsir), [`tafsir_al_ray`](/docs/terms/dictionary/tafsir#tafsir_al_ray), [`tafsir_mathur`](/docs/terms/dictionary/tafsir#tafsir_mathur)
- **Quranic sciences** — `quranic_sciences`: [`abrogation`](/docs/terms/dictionary/quranic_sciences#abrogation), [`mutashabihat`](/docs/terms/dictionary/quranic_sciences#mutashabihat), [`quran_merits`](/docs/terms/dictionary/quranic_sciences#quran_merits), [`reflection`](/docs/terms/dictionary/quranic_sciences#reflection), [`surah_name_reason`](/docs/terms/dictionary/quranic_sciences#surah_name_reason), [`surah_names`](/docs/terms/dictionary/quranic_sciences#surah_names), [`surah_objectives`](/docs/terms/dictionary/quranic_sciences#surah_objectives), [`word_meanings`](/docs/terms/dictionary/quranic_sciences#word_meanings)

