---
title: "Linguistics"
description: "linguistics"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Irab — الإعراب [#irab]

<!-- source: standards/terminology/concepts/irab.yml -->

| field | value |
| --- | --- |
| `code` | `irab` |
| `kind` | `analysis` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الإِعْرَاب |
| Other spellings | `i'rab` |
| English gloss | `Grammatical Analysis` |

**Definition:** The statement of the syntactic function of words, their case markers, and their relations within the construction.

**Purpose:** Used to attach syntactic analysis and grammatical functions to the words of an ayah.

**Related:** [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech), [`morphology`](/docs/terms/dictionary/linguistics#morphology), [`word`](/docs/terms/dictionary/text#word)

### Lemma [#lemma]

<!-- source: standards/terminology/concepts/lemma.yml -->

| field | value |
| --- | --- |
| `code` | `lemma` |
| `plural` | `lemmas` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |

**Definition:** The base dictionary form that an inflected word form is referred back to.

**Purpose:** Used to gather the different inflected forms under one dictionary entry.

**Related:** [`root`](/docs/terms/dictionary/linguistics#root), [`stem`](/docs/terms/dictionary/linguistics#stem), [`morphology`](/docs/terms/dictionary/linguistics#morphology)

### Morpheme — الوحدة الصرفية [#morpheme]

<!-- source: standards/terminology/concepts/morpheme.yml -->

| field | value |
| --- | --- |
| `code` | `morpheme` |
| `plural` | `morphemes` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَحْدَة الصَّرْفِيَّة |
| Other spellings | `word_segment` |

**Definition:** The smallest unit within a word carrying a meaning or a morphological function, such as a prefix, a suffix or a stem.

**Purpose:** Used to represent the division of a Quranic word into its morphological parts, which is the level that morphological features and tags are attached to in analysis corpora.

- A morpheme is a part of a word; a token is a unit of segmentation that may equal a word or span more than one.

> In Quranic morphology corpora `segment` means the morpheme; in audio APIs it means a word timing. The bare name resolves to nothing, `word_segment` resolves here, and the audio sense is `word_timing`.

**Related:** [`word`](/docs/terms/dictionary/text#word), [`token`](/docs/terms/dictionary/text#token), [`stem`](/docs/terms/dictionary/linguistics#stem), [`morphology`](/docs/terms/dictionary/linguistics#morphology), [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech)

### Morphology — الصرف [#morphology]

<!-- source: standards/terminology/concepts/morphology.yml -->

| field | value |
| --- | --- |
| `code` | `morphology` |
| `kind` | `analysis` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الصَّرْف |

**Definition:** The analysis of a word's structure and form and the morphological properties it carries.

**Purpose:** Used to represent the morphological features of words or tokens.

**Related:** [`morpheme`](/docs/terms/dictionary/linguistics#morpheme), [`root`](/docs/terms/dictionary/linguistics#root), [`lemma`](/docs/terms/dictionary/linguistics#lemma), [`stem`](/docs/terms/dictionary/linguistics#stem), [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech), [`irab`](/docs/terms/dictionary/linguistics#irab), [`verb`](/docs/terms/dictionary/linguistics#verb)

### Noun — الاسم [#noun]

<!-- source: standards/terminology/concepts/noun.yml -->

| field | value |
| --- | --- |
| `code` | `noun` |
| `kind` | `classification_value` |
| Parent | [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech) |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الاِسْم |

**Definition:** A noun in the Arabic sense: a word whose meaning is not tied to a time. Nouns, adjectives, pronouns, demonstratives and relatives are all nouns.

**Purpose:** Used as a value of part of speech, and the detailed tags that Quranic morphology corpora use fall under it.

**Related:** [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech)

### Part of Speech — قسم الكلمة [#part_of_speech]

<!-- source: standards/terminology/concepts/part_of_speech.yml -->

| field | value |
| --- | --- |
| `code` | `part_of_speech` |
| `kind` | `classification` |
| Values | [`noun`](/docs/terms/dictionary/linguistics#noun), [`particle`](/docs/terms/dictionary/linguistics#particle), [`verb`](/docs/terms/dictionary/linguistics#verb) |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | قِسْم الكَلِمَة |
| Other spellings | `pos` |

**Definition:** The classification of a word or a morpheme by its grammatical class: noun, verb, particle and what branches from them.

**Purpose:** Used as the basic tag in morphological and syntactic analysis; searching by tag, filtering, and building the syntactic analysis all rest on it.

> The threefold division is the level this standard fixes. The detailed tags used by Quranic morphology corpora — dozens of them — are data falling under these three values, and are not given entries of their own in the dictionary.

**Related:** [`morphology`](/docs/terms/dictionary/linguistics#morphology), [`irab`](/docs/terms/dictionary/linguistics#irab), [`morpheme`](/docs/terms/dictionary/linguistics#morpheme), [`noun`](/docs/terms/dictionary/linguistics#noun), [`particle`](/docs/terms/dictionary/linguistics#particle), [`verb`](/docs/terms/dictionary/linguistics#verb)

### Particle — حرف المعنى [#particle]

<!-- source: standards/terminology/concepts/particle.yml -->

| field | value |
| --- | --- |
| `code` | `particle` |
| `kind` | `classification_value` |
| Parent | [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech) |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | حَرْف المَعْنَى |

**Definition:** A particle: a word with no meaning of its own that gives meaning to the words around it, such as prepositions and the particles of conjunction, negation and interrogation.

**Purpose:** Used as a value of part of speech, and the detailed particle tags of Quranic morphology corpora fall under it.

- A particle is a part of speech; the written letter, `letter`, is a unit of the written text.

**Related:** [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech), [`letter`](/docs/terms/dictionary/text#letter)

### Root — الجذر [#root]

<!-- source: standards/terminology/concepts/root.yml -->

| field | value |
| --- | --- |
| `code` | `root` |
| `plural` | `roots` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الجَذْر |

**Definition:** The morphological origin a word is referred back to, showing its derivation and its relation to other words.

**Purpose:** Used for morphological search, linguistic analysis, and gathering words that share an origin.

**Related:** [`lemma`](/docs/terms/dictionary/linguistics#lemma), [`stem`](/docs/terms/dictionary/linguistics#stem), [`morphology`](/docs/terms/dictionary/linguistics#morphology)

### Stem — الجذع [#stem]

<!-- source: standards/terminology/concepts/stem.yml -->

| field | value |
| --- | --- |
| `code` | `stem` |
| `plural` | `stems` |
| `kind` | `unit` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الجِذْع |

**Definition:** What remains of a word once its prefixes and suffixes are removed, and what the morphological additions attach to.

**Purpose:** Used in morphological analysis as a level between the word form and its root: some corpora record the stem and not the root, and some record both.

- A root is an abstract derivational origin; a stem is a form that stands in the word once the additions are removed.

**Related:** [`root`](/docs/terms/dictionary/linguistics#root), [`lemma`](/docs/terms/dictionary/linguistics#lemma), [`morpheme`](/docs/terms/dictionary/linguistics#morpheme), [`morphology`](/docs/terms/dictionary/linguistics#morphology)

### Verb — الفعل [#verb]

<!-- source: standards/terminology/concepts/verb.yml -->

| field | value |
| --- | --- |
| `code` | `verb` |
| `kind` | `classification_value` |
| Parent | [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech) |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الفِعْل |

**Definition:** A verb: a word whose meaning is tied to a time, with past, present and imperative forms.

**Purpose:** Used as a value of part of speech, and the morphological features specific to verbs — tense, voice and pattern — hang off it.

**Related:** [`part_of_speech`](/docs/terms/dictionary/linguistics#part_of_speech), [`morphology`](/docs/terms/dictionary/linguistics#morphology)

