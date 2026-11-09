---
title: "Mushaf and layout"
description: "mushaf"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Ayah Fragment — مقطع الآية [#ayah_fragment]

<!-- source: standards/terminology/concepts/ayah_fragment.yml -->

| field | value |
| --- | --- |
| `code` | `ayah_fragment` |
| `plural` | `ayah_fragments` |
| `kind` | `unit` |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مَقْطَع الآيَة |
| Arabic plural | مقاطع الآيات |
| Other spellings | `ayah_segment`, `ayah_part`, `line_ayah`, `g_ayah` |
| English gloss | `ayah fragment` |

**Definition:** What appears of one ayah on one line of a page of a given mushaf; an ayah that runs over two lines is two maqtas.

**Purpose:** Used as the unit of display and tagging in the page layout, because an ayah does not keep to a line nor a line to an ayah; alignment and highlighting in a drawn mushaf are built on it.

- A maqta belongs to the layout of one mushaf and is no part of the identity of the ayah.
- A maqta is not a word: it may be a word, several words, or part of a word where the break falls inside one.

**Related:** [`ayah`](/docs/terms/dictionary/structure#ayah), [`line`](/docs/terms/dictionary/mushaf#line), [`page`](/docs/terms/dictionary/mushaf#page), [`layout`](/docs/terms/dictionary/mushaf#layout)

**Sources:**

- مصحف حفص — كلمة كلمة — `glossary!g.ayah`

### Font — الخط [#font]

<!-- source: standards/terminology/concepts/font.yml -->

| field | value |
| --- | --- |
| `code` | `font` |
| `plural` | `fonts` |
| `kind` | `concept` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الخَطّ |

**Definition:** A file carrying a set of glyphs and the rules for laying them out, used to render the text of a mushaf.

**Purpose:** Used to record which font a digital mushaf depends on, since in many of them the text renders correctly in one font only, so letter codes, their shapes and line positions are tied to it.

- A font is a means of display; the rasm is a property of the written text itself.
- A glyph is a shape inside a font; a letter is a unit of the text.

**Related:** [`glyph`](/docs/terms/dictionary/text#glyph), [`rasm`](/docs/terms/dictionary/mushaf#rasm), [`layout`](/docs/terms/dictionary/mushaf#layout), [`line`](/docs/terms/dictionary/mushaf#line), [`mushaf_edition`](/docs/terms/dictionary/core#mushaf_edition)

### Layout — التخطيط [#layout]

<!-- source: standards/terminology/concepts/layout.yml -->

| field | value |
| --- | --- |
| `code` | `layout` |
| `plural` | `layouts` |
| `kind` | `concept` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّخْطِيط |

**Definition:** The visual arrangement of the text and its elements into pages, lines and positions within a given mushaf or view.

**Purpose:** Keeps visual data apart from the fixed textual structure of the Quran.

**Related:** [`mushaf_edition`](/docs/terms/dictionary/core#mushaf_edition), [`page`](/docs/terms/dictionary/mushaf#page), [`line`](/docs/terms/dictionary/mushaf#line), [`font`](/docs/terms/dictionary/mushaf#font), [`ayah_fragment`](/docs/terms/dictionary/mushaf#ayah_fragment), [`mushaf`](/docs/terms/dictionary/core#mushaf)

### Line — السطر [#line]

<!-- source: standards/terminology/concepts/line.yml -->

| field | value |
| --- | --- |
| `code` | `line` |
| `plural` | `lines` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | السَّطْر |

**Definition:** A typeset line within a page of a mushaf or of a given layout.

**Purpose:** Used to represent where text and shapes sit within the typeset layout.

**Related:** [`page`](/docs/terms/dictionary/mushaf#page), [`layout`](/docs/terms/dictionary/mushaf#layout), [`ayah_fragment`](/docs/terms/dictionary/mushaf#ayah_fragment), [`font`](/docs/terms/dictionary/mushaf#font)

### Page — الصفحة [#page]

<!-- source: standards/terminology/concepts/page.yml -->

| field | value |
| --- | --- |
| `code` | `page` |
| `plural` | `pages` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الصَّفْحَة |
| Other spellings | `safhah` |

**Definition:** A typographic unit of a given mushaf's layout; its content and its boundaries may differ from one mushaf or edition to another.

**Purpose:** Used for rendering, navigation and visual alignment according to the pages of a particular mushaf.

**Related:** [`mushaf_edition`](/docs/terms/dictionary/core#mushaf_edition), [`layout`](/docs/terms/dictionary/mushaf#layout), [`line`](/docs/terms/dictionary/mushaf#line), [`ayah_fragment`](/docs/terms/dictionary/mushaf#ayah_fragment), [`mushaf`](/docs/terms/dictionary/core#mushaf)

### Rasm — الرسم [#rasm]

<!-- source: standards/terminology/concepts/rasm.yml -->

| field | value |
| --- | --- |
| `code` | `rasm` |
| `kind` | `classification` |
| Values | [`rasm_imlai`](/docs/terms/dictionary/mushaf#rasm_imlai), [`rasm_uthmani`](/docs/terms/dictionary/mushaf#rasm_uthmani) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الرَّسْم |
| Other spellings | `rasm_type` |
| English gloss | `orthography` |

**Definition:** The way the words of the Quran are written: which letters are written and which omitted or added, and where words are joined or kept apart.

**Purpose:** Used as a classification stating which rasm a text, a mushaf or a dataset is written in, so that search, comparison and rendering branch on it; and it keeps the layer of the rasm distinct from the font, the layout and the drawn glyphs.

- The rasm is which letters are written, omitted, joined or kept apart; the dabt is the marks of pronunciation placed on the letters.
- The script is the shape of the letters in one mushaf; the rasm is what holds in every mushaf written in it.

**Related:** [`rasm_uthmani`](/docs/terms/dictionary/mushaf#rasm_uthmani), [`rasm_imlai`](/docs/terms/dictionary/mushaf#rasm_imlai), [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark), [`font`](/docs/terms/dictionary/mushaf#font), [`mushaf`](/docs/terms/dictionary/core#mushaf), [`mushaf_edition`](/docs/terms/dictionary/core#mushaf_edition), [`dagger_alif`](/docs/terms/dictionary/dabt#dagger_alif), [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark), [`tashkil`](/docs/terms/dictionary/dabt#tashkil)

### Rasm Imlai — الرسم الإملائي [#rasm_imlai]

<!-- source: standards/terminology/concepts/rasm_imlai.yml -->

| field | value |
| --- | --- |
| `code` | `rasm_imlai` |
| `kind` | `classification_value` |
| Parent | [`rasm`](/docs/terms/dictionary/mushaf#rasm) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الرَّسْم الإِمْلَائِيّ |
| Other spellings | `imlaei`, `imlai`, `imla'i`, `imlaai`, `simple`, `text_simple`, `text_imlaei`, `rasm_imlaei` |
| English gloss | `modern orthography`, `standard orthography` |

**Definition:** Writing the words of the Quran by the rules of modern orthography, writing what the Uthmani rasm omits and omitting what it adds, so that they read in their familiar form.

**Purpose:** Used to state that a text follows modern orthography, which is the text that search, quotation and display outside the mushaf are built on, as against the Uthmani text the mushaf is displayed in.

- The imlai rasm is a writing and not a reading: the wording is one, and what differs is the form of the word.
- The imlai text is not the search text stripped of dabt, though the second is derived from the first.

> Deriving the name with the tool gives `orthographic_rasm`, because the general-words table translates «إملائي» to `orthographic` for the sake of «العلامة الإملائية»; the recorded name is `rasm_imlai`, which is what databases and APIs use, and the decision is in the decision record.

**Related:** [`rasm`](/docs/terms/dictionary/mushaf#rasm), [`rasm_uthmani`](/docs/terms/dictionary/mushaf#rasm_uthmani)

### Rasm Uthmani — الرسم العثماني [#rasm_uthmani]

<!-- source: standards/terminology/concepts/rasm_uthmani.yml -->

| field | value |
| --- | --- |
| `code` | `rasm_uthmani` |
| `kind` | `classification_value` |
| Parent | [`rasm`](/docs/terms/dictionary/mushaf#rasm) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الرَّسْم العُثْمَانِيّ |
| Other spellings | `uthmani`, `uthmanic`, `othmani`, `rasm_othmani` |
| English gloss | `Uthmanic Orthography` |
| Display evidence | GitHub phrase search: rasm uthmani 100 vs uthmani rasm 65. The Arabic word order wins in English writing, and it matches the code. |

**Definition:** The way the words of the Uthmani mushafs are written, with the omission, addition, substitution, separation and joining that go with it.

**Purpose:** Used to state that a text follows the rules of the Uthmani rasm rather than another orthography.

**Related:** [`rasm`](/docs/terms/dictionary/mushaf#rasm), [`rasm_imlai`](/docs/terms/dictionary/mushaf#rasm_imlai), [`mushaf`](/docs/terms/dictionary/core#mushaf)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/146`

