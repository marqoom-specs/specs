---
title: "Translation"
description: "translation"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Spoken Translation — الترجمة المنطوقة [#spoken_translation]

<!-- source: standards/terminology/concepts/spoken_translation.yml -->

| field | value |
| --- | --- |
| `code` | `spoken_translation` |
| `plural` | `spoken_translations` |
| `kind` | `content` |
| Parent | [`translation`](/docs/terms/dictionary/translation#translation) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّرْجَمَة المَنْطُوقَة |
| Other spellings | `audio_translation` |

**Definition:** Rendering the meanings of the Quran into another language in audio or spoken material.

**Purpose:** Used to distinguish audio renderings of the meanings from written translation and from Quranic recitation.

**Related:** [`translation`](/docs/terms/dictionary/translation#translation), [`recitation`](/docs/terms/dictionary/recitation#recitation)

### Translation — الترجمة [#translation]

<!-- source: standards/terminology/concepts/translation.yml -->

| field | value |
| --- | --- |
| `code` | `translation` |
| `plural` | `translations` |
| `kind` | `content` |
| Children | [`spoken_translation`](/docs/terms/dictionary/translation#spoken_translation), [`word_by_word_translation`](/docs/terms/dictionary/translation#word_by_word_translation) |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّرْجَمَة |

**Definition:** Rendering the meanings of the Quran into another language. A translation is not the Quran in its wording.

**Purpose:** Used to tie translated-meaning texts to ayahs, languages, translators and sources.

**Related:** [`transliteration`](/docs/terms/dictionary/translation#transliteration), [`spoken_translation`](/docs/terms/dictionary/translation#spoken_translation), [`translator`](/docs/terms/dictionary/translation#translator), [`word_by_word_translation`](/docs/terms/dictionary/translation#word_by_word_translation), [`tafsir`](/docs/terms/dictionary/tafsir#tafsir)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/324`

### Translator — المترجم [#translator]

<!-- source: standards/terminology/concepts/translator.yml -->

| field | value |
| --- | --- |
| `code` | `translator` |
| `plural` | `translators` |
| `kind` | `role` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المُتَرْجِم |
| Other spellings | `mutarjim` |

**Definition:** One to whom a translation of the meanings of the Quran into another language is attributed, whether a person or a body.

**Purpose:** Used to attribute a translation to its author, keeping the author apart from the publisher, the reviewer and the source of the text.

- The translator is not the mufassir, though the translation may rest on a tafsir.

**Related:** [`translation`](/docs/terms/dictionary/translation#translation), [`mufassir`](/docs/terms/dictionary/tafsir#mufassir)

### Transliteration — النقل الحرفي [#transliteration]

<!-- source: standards/terminology/concepts/transliteration.yml -->

| field | value |
| --- | --- |
| `code` | `transliteration` |
| `plural` | `transliterations` |
| `kind` | `content` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | النَّقْل الحَرْفِيّ |

**Definition:** Representing the letters of one writing system with those of another by fixed rules, without translating the meaning.

**Purpose:** Used to give a readable representation in another writing system, or for systematic conversion between writing systems.

**Related:** [`translation`](/docs/terms/dictionary/translation#translation)

### Word by Word Translation [#word_by_word_translation]

<!-- source: standards/terminology/concepts/word_by_word_translation.yml -->

| field | value |
| --- | --- |
| `code` | `word_by_word_translation` |
| `plural` | `word_by_word_translations` |
| `kind` | `content` |
| Parent | [`translation`](/docs/terms/dictionary/translation#translation) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Other spellings | `wbw`, `word_by_word`, `wbw_translation`, `word_translation`, `wordbyword` |

**Definition:** A translation giving each word of the ayah its meaning in another language on its own, in the order of the original words.

**Purpose:** Used in instructional display and in learning, and attached to the word by its key rather than to the ayah.

- The translation of a word on its own is not a translation of the ayah, and is not shown in its place.

**Related:** [`translation`](/docs/terms/dictionary/translation#translation), [`word`](/docs/terms/dictionary/text#word), [`word_key`](/docs/terms/dictionary/structure#word_key)

