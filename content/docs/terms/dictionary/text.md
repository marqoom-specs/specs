---
title: "Text"
description: "text"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Character [#character]

<!-- source: standards/terminology/concepts/character.yml -->

| field | value |
| --- | --- |
| `code` | `character` |
| `plural` | `characters` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |

**Definition:** An abstract unit of text in a digital encoding; it need not correspond to a single linguistic letter.

**Purpose:** Used where an offset, a length or a comparison must be exact: text-path tests, search indexes and the allowlist of permitted characters.

- A character is a unit of encoding; a letter is a linguistic unit, and one letter may be carried by more than one character.
- A character is not a glyph: the glyph is produced by the font, the character is carried by the text.

**Related:** [`letter`](/docs/terms/dictionary/text#letter), [`glyph`](/docs/terms/dictionary/text#glyph), [`codepoint`](/docs/terms/dictionary/text#codepoint), [`grapheme`](/docs/terms/dictionary/text#grapheme)

### Codepoint [#codepoint]

<!-- source: standards/terminology/concepts/codepoint.yml -->

| field | value |
| --- | --- |
| `code` | `codepoint` |
| `plural` | `codepoints` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |

**Definition:** A numeric value defined by an encoding standard such as Unicode.

**Purpose:** Used where the exact encoding of a character or mark matters: normalisation rules, font mappings and the allowlist of permitted codepoints.

**Related:** [`character`](/docs/terms/dictionary/text#character), [`grapheme`](/docs/terms/dictionary/text#grapheme)

### Glyph [#glyph]

<!-- source: standards/terminology/concepts/glyph.yml -->

| field | value |
| --- | --- |
| `code` | `glyph` |
| `plural` | `glyphs` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |

**Definition:** The visual shape a font produces to represent a letter, a character, or a group of them.

**Purpose:** Used for fonts, rasm, rendering and the placement of visual shapes.

- A glyph is produced by the font; it is neither the letter nor the character, and one character may be drawn by many glyphs.

**Related:** [`character`](/docs/terms/dictionary/text#character), [`letter`](/docs/terms/dictionary/text#letter), [`font`](/docs/terms/dictionary/mushaf#font)

### Grapheme [#grapheme]

<!-- source: standards/terminology/concepts/grapheme.yml -->

| field | value |
| --- | --- |
| `code` | `grapheme` |
| `plural` | `graphemes` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |

**Definition:** A written unit that a user perceives as one unit, which may consist of more than one `codepoint`.

**Purpose:** Used for visual segmentation, editing and text selection, where the codepoint is not the right unit.

**Related:** [`codepoint`](/docs/terms/dictionary/text#codepoint), [`character`](/docs/terms/dictionary/text#character)

### Letter — الحرف [#letter]

<!-- source: standards/terminology/concepts/letter.yml -->

| field | value |
| --- | --- |
| `code` | `letter` |
| `plural` | `letters` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الحَرْف |
| Other spellings | `harf` |

**Definition:** A letter of the alphabet as a linguistic unit of writing.

**Purpose:** Used for data that deals with linguistic letters, without confusing them with their digital or visual representations.

- A letter is a linguistic unit; a character is a unit of encoding, and one letter may be written with one character or more.
- A letter is a unit of writing; harf al-mana is a part of speech.

**Related:** [`character`](/docs/terms/dictionary/text#character), [`glyph`](/docs/terms/dictionary/text#glyph), [`particle`](/docs/terms/dictionary/linguistics#particle), [`ijam`](/docs/terms/dictionary/dabt#ijam), [`word`](/docs/terms/dictionary/text#word)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/5) — `5`

### Token [#token]

<!-- source: standards/terminology/concepts/token.yml -->

| field | value |
| --- | --- |
| `code` | `token` |
| `plural` | `tokens` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |

**Definition:** A unit produced by segmenting the text according to a declared method. It may equal a word, be part of one, or span more than one.

**Purpose:** Used to tie automated analysis to the text where the word boundary is not the segmentation boundary, and to keep what a segmenter produces distinct from what a reader counts as a word.

- A word is a unit the reader recognises; a token is a unit a segmentation method produces, so changing the method changes the number of tokens and not the number of words.

**Related:** [`word`](/docs/terms/dictionary/text#word), [`morpheme`](/docs/terms/dictionary/linguistics#morpheme)

### Word — الكلمة [#word]

<!-- source: standards/terminology/concepts/word.yml -->

| field | value |
| --- | --- |
| `code` | `word` |
| `plural` | `words` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الكَلِمَة |
| Other spellings | `kalimah` |

**Definition:** A unit of the text that a reader recognises as one word, independent of how a segmenter splits the text.

**Purpose:** Used to attach word-level data: root, morphology, irab, tajwid, audio alignment and visual position.

- A word is a unit the reader recognises; a token is a unit a segmentation method produces, so changing the method changes the number of tokens and not the number of words.

**Related:** [`token`](/docs/terms/dictionary/text#token), [`morpheme`](/docs/terms/dictionary/linguistics#morpheme), [`letter`](/docs/terms/dictionary/text#letter), [`word_key`](/docs/terms/dictionary/structure#word_key), [`ayah`](/docs/terms/dictionary/structure#ayah), [`irab`](/docs/terms/dictionary/linguistics#irab), [`mutashabihat`](/docs/terms/dictionary/quranic_sciences#mutashabihat), [`word_by_word_translation`](/docs/terms/dictionary/translation#word_by_word_translation), [`word_meanings`](/docs/terms/dictionary/quranic_sciences#word_meanings), [`word_timing`](/docs/terms/dictionary/recitation#word_timing)

