---
title: "Tafsir"
description: "tafsir"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Mufassir — المفسر [#mufassir]

<!-- source: standards/terminology/concepts/mufassir.yml -->

| field | value |
| --- | --- |
| `code` | `mufassir` |
| `plural` | `mufassirs` |
| `kind` | `role` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المُفَسِّر |
| English gloss | `Exegete` |

**Definition:** One to whom a tafsir of the Quran is attributed, whether by authorship or by transmission.

**Purpose:** Used to attribute a tafsir to its author, keeping the one who said it apart from the book his words were transmitted in, and from its editor and publisher.

- The mufassir is the one whose statement it is, and his statement may be transmitted in someone else's book.

**Related:** [`tafsir`](/docs/terms/dictionary/tafsir#tafsir), [`translator`](/docs/terms/dictionary/translation#translator), [`tafsir_al_ray`](/docs/terms/dictionary/tafsir#tafsir_al_ray)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `4/200`

### Tafsir — التفسير [#tafsir]

<!-- source: standards/terminology/concepts/tafsir.yml -->

| field | value |
| --- | --- |
| `code` | `tafsir` |
| `plural` | `tafsirs` |
| `kind` | `content` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّفْسِير |
| Other spellings | `tafseer` |
| English gloss | `Exegesis`, `Commentary` |

**Definition:** Stating the meanings of the Quran, explaining its wording, and the rulings and guidance it points to, according to the principles of tafsir.

**Purpose:** Used to represent tafsir works and content and to tie their passages to ayahs, surahs and sources.

**Related:** [`tafsir_mathur`](/docs/terms/dictionary/tafsir#tafsir_mathur), [`tafsir_al_ray`](/docs/terms/dictionary/tafsir#tafsir_al_ray), [`mufassir`](/docs/terms/dictionary/tafsir#mufassir), [`word_meanings`](/docs/terms/dictionary/quranic_sciences#word_meanings), [`ayah`](/docs/terms/dictionary/structure#ayah), [`reflection`](/docs/terms/dictionary/quranic_sciences#reflection), [`surah_objectives`](/docs/terms/dictionary/quranic_sciences#surah_objectives), [`translation`](/docs/terms/dictionary/translation#translation)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/334`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `4/192`

### Tafsir al-Ray — تفسير الرأي [#tafsir_al_ray]

<!-- source: standards/terminology/concepts/tafsir_al_ray.yml -->

| field | value |
| --- | --- |
| `code` | `tafsir_al_ray` |
| `kind` | `content` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | تَفْسِير الرَّأْي |
| Other spellings | `tafsir_bil_ray`, `tafsir_bialray`, `tafsir_al_raay`, `tafsir_bir_ray` |
| English gloss | `reasoned tafsir` |

**Definition:** Explaining the meanings of the Quran by reasoning and reflection, after knowledge of the speech of the Arabs, its styles and the principles of tafsir, whether the reasoning is approved or censured.

**Purpose:** Used as the kind of authored content attributed to its author as his statement, kept apart from what is transmitted with a chain.

- Tafsir al-ray is the statement of its author; tafsir mathur is transmitted with a chain.

**Related:** [`tafsir_mathur`](/docs/terms/dictionary/tafsir#tafsir_mathur), [`tafsir`](/docs/terms/dictionary/tafsir#tafsir), [`mufassir`](/docs/terms/dictionary/tafsir#mufassir)

### Tafsir Mathur — التفسير المأثور [#tafsir_mathur]

<!-- source: standards/terminology/concepts/tafsir_mathur.yml -->

| field | value |
| --- | --- |
| `code` | `tafsir_mathur` |
| `kind` | `content` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّفْسِير المَأْثُور |
| Other spellings | `tafsir_bil_mathur`, `tafsir_bialmathur`, `mathur` |
| English gloss | `Transmitted Tafsir` |

**Definition:** Tafsir transmitted with a chain of narration: explanation of the Quran drawn from the Quran itself, from the Sunnah, or from the sayings of the Companions and Successors.

**Purpose:** Used as content attached to an ayah and carrying its transmitter and the standing of the transmission with it, so it is not treated as authored tafsir text attributed to a single book.

- Tafsir mathur is transmitted with a chain; authored tafsir is the statement of the book's author.
- A single report is not a concept in this standard; the concept is the kind of content organised by ayah.

> The better-known title is «التَّفْسِير بِالمَأْثُور», whose derivation fuses the preposition to the noun and gives `tafsir_bialmathur`. The name recorded here is the descriptive form, which is Arabic and in use, and the better-known form resolves through `alternative_spellings`. This is the same reason `abrogation` was given an entry rather than «الناسخ والمنسوخ».

**Related:** [`tafsir`](/docs/terms/dictionary/tafsir#tafsir), [`ayah`](/docs/terms/dictionary/structure#ayah), [`tafsir_al_ray`](/docs/terms/dictionary/tafsir#tafsir_al_ray)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/358`

