---
title: "Revelation"
description: "revelation"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Asbab al-Nuzul — أسباب النزول [#asbab_al_nuzul]

<!-- source: standards/terminology/concepts/asbab_al_nuzul.yml -->

| field | value |
| --- | --- |
| `code` | `asbab_al_nuzul` |
| `kind` | `content` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | أَسْبَاب النُّزُول |
| Other spellings | `asbab_al-nozool`, `asbab_un-nuzul` |

**Definition:** The events or questions that an ayah, or several ayahs, was revealed to address or to rule on.

**Purpose:** Used to attach the narrations and the material about an ayah's occasion of revelation to the ayah itself.

**Related:** [`revelation`](/docs/terms/dictionary/revelation#revelation), [`ayah`](/docs/terms/dictionary/structure#ayah), [`surah_name_reason`](/docs/terms/dictionary/quranic_sciences#surah_name_reason), [`abrogation`](/docs/terms/dictionary/quranic_sciences#abrogation)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/75`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/107`

### Disputed — مختلف فيه [#disputed]

<!-- source: standards/terminology/concepts/disputed.yml -->

| field | value |
| --- | --- |
| `code` | `disputed` |
| `kind` | `classification_value` |
| Parent | [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مُخْتَلَف فِيه |
| Other spellings | `mukhtalaf_fih`, `revelation_disputed` |

**Definition:** A surah or ayah that the accepted sources do not agree to classify as makki or madani.

**Purpose:** Keeps disputed data from being forced into `makki` or `madani` without recording the disagreement.

**Related:** [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification), [`makki`](/docs/terms/dictionary/revelation#makki), [`madani`](/docs/terms/dictionary/revelation#madani)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/60`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/37`

### Madani — مدني [#madani]

<!-- source: standards/terminology/concepts/madani.yml -->

| field | value |
| --- | --- |
| `code` | `madani` |
| `kind` | `classification_value` |
| Parent | [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مَدَنِيّ |
| Other spellings | `madaniyy`, `madinan` |
| English gloss | `Medinan` |

**Definition:** The part of the Quran revealed after the Hijrah, even where it was revealed outside Madinah.

**Purpose:** Used as a value of revelation classification, tagging a surah or an ayah with it.

- Madani describes the time of revelation, after the Hijrah, not the place of revelation.

**Related:** [`makki`](/docs/terms/dictionary/revelation#makki), [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification), [`revelation`](/docs/terms/dictionary/revelation#revelation), [`disputed`](/docs/terms/dictionary/revelation#disputed)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/60`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/37`

### Makki — مكي [#makki]

<!-- source: standards/terminology/concepts/makki.yml -->

| field | value |
| --- | --- |
| `code` | `makki` |
| `kind` | `classification_value` |
| Parent | [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مَكِّيّ |
| Transliteration | makkī |
| Other spellings | `makkiyy`, `makkan` |
| English gloss | `Meccan` |

**Definition:** The part of the Quran revealed before the Hijrah, even where it was revealed outside Makkah.

**Purpose:** Used as a value of revelation classification, tagging a surah or an ayah with it.

- Makki describes the time of revelation, before the Hijrah, not the place of revelation.

**Related:** [`madani`](/docs/terms/dictionary/revelation#madani), [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification), [`revelation`](/docs/terms/dictionary/revelation#revelation), [`disputed`](/docs/terms/dictionary/revelation#disputed)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/60`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/37`

### Revelation — النزول [#revelation]

<!-- source: standards/terminology/concepts/revelation.yml -->

| field | value |
| --- | --- |
| `code` | `revelation` |
| `kind` | `concept` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | النُّزُول |

**Definition:** The revelation of the Quran to the Prophet, peace be upon him, in stages over the years of his mission, as events and needs arose.

**Purpose:** Used as the root that the order of revelation, its classification and its occasions branch from: all three are properties of the event of revelation and are known only through it.

- Revelation is an event; its order, its classification and its occasion are properties of it, not synonyms for it.

**Related:** [`revelation_order`](/docs/terms/dictionary/revelation#revelation_order), [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification), [`asbab_al_nuzul`](/docs/terms/dictionary/revelation#asbab_al_nuzul), [`madani`](/docs/terms/dictionary/revelation#madani), [`makki`](/docs/terms/dictionary/revelation#makki)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/100`

### Revelation Classification — تصنيف النزول [#revelation_classification]

<!-- source: standards/terminology/concepts/revelation_classification.yml -->

| field | value |
| --- | --- |
| `code` | `revelation_classification` |
| `kind` | `classification` |
| Values | [`disputed`](/docs/terms/dictionary/revelation#disputed), [`madani`](/docs/terms/dictionary/revelation#madani), [`makki`](/docs/terms/dictionary/revelation#makki) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | تَصْنِيف النُّزُول |

**Definition:** A classification of the Quranic text by whether its revelation fell before or after the Hijrah, in the accepted usage.

**Purpose:** Used to classify surahs or ayahs by their relation to the Hijrah, without implying that the classification is only geographical.

**Related:** [`makki`](/docs/terms/dictionary/revelation#makki), [`madani`](/docs/terms/dictionary/revelation#madani), [`disputed`](/docs/terms/dictionary/revelation#disputed), [`revelation`](/docs/terms/dictionary/revelation#revelation), [`surah`](/docs/terms/dictionary/structure#surah)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/60`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/37`

### Revelation Order — ترتيب النزول [#revelation_order]

<!-- source: standards/terminology/concepts/revelation_order.yml -->

| field | value |
| --- | --- |
| `code` | `revelation_order` |
| `kind` | `property` |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | تَرْتِيب النُّزُول |

**Definition:** The order of the surahs or the ayahs by the time of their revelation, which may differ from one accepted source to another.

**Purpose:** Used to store the order of revelation independently of the order of the mushaf.

- Revelation order is not mushaf order: `surah_number` is the mushaf order.

**Related:** [`revelation`](/docs/terms/dictionary/revelation#revelation), [`surah`](/docs/terms/dictionary/structure#surah)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/140`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/93`

