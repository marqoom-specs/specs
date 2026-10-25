---
title: "Surah classification"
description: "surah_classification"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Mathani — المثاني [#mathani]

<!-- source: standards/terminology/concepts/mathani.yml -->

| field | value |
| --- | --- |
| `code` | `mathani` |
| `kind` | `classification_value` |
| Parent | [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group) |
| Origin | `quranic` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | المَثَانِي |

**Definition:** The surahs shorter than the miun, coming after them in the traditional division; called mathani because they are recited more often.

**Purpose:** Used as a value of surah group, so that reading plans and the tafsir works that treat the group as a unit can refer to it.

> The standard does not list the group's members surah by surah: the sources differ over the seventh of the tiwal and the start of the mufassal, and no registry yet enumerates each group's members with its source.

**Related:** [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group), [`surah`](/docs/terms/dictionary/structure#surah)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/201`

### Miun — المئون [#miun]

<!-- source: standards/terminology/concepts/miun.yml -->

| field | value |
| --- | --- |
| `code` | `miun` |
| `kind` | `classification_value` |
| Parent | [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group) |
| Origin | `quranic` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | المِئُون |
| English gloss | `Hundred-Verse Surahs` |

**Definition:** The surahs whose ayahs come to about 100, a little more or a little less.

**Purpose:** Used as a value of surah group, so that reading plans and the tafsir works that treat the group as a unit can refer to it.

> The standard does not list the group's members surah by surah: the sources differ over the seventh of the tiwal and the start of the mufassal, and no registry yet enumerates each group's members with its source.

**Related:** [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group), [`surah`](/docs/terms/dictionary/structure#surah)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/201`

### Mufassal — المفصل [#mufassal]

<!-- source: standards/terminology/concepts/mufassal.yml -->

| field | value |
| --- | --- |
| `code` | `mufassal` |
| `kind` | `classification_value` |
| Parent | [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group) |
| Origin | `quranic` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | المُفَصَّل |

**Definition:** A group of the short surahs following the mathani; scholars differ over where it begins.

**Purpose:** Used as a value of surah group, so that reading plans and the tafsir works that treat the group as a unit can refer to it.

> The standard does not list the group's members surah by surah: the sources differ over the seventh of the tiwal and the start of the mufassal, and no registry yet enumerates each group's members with its source.

**Related:** [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group), [`surah`](/docs/terms/dictionary/structure#surah)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/201`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/221`

### Saba Tiwal — السبع الطوال [#saba_tiwal]

<!-- source: standards/terminology/concepts/saba_tiwal.yml -->

| field | value |
| --- | --- |
| `code` | `saba_tiwal` |
| `kind` | `classification_value` |
| Parent | [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group) |
| Origin | `quranic` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | السَّبْع الطِّوَال |
| Other spellings | `sab_tiwal` |
| English gloss | `Seven Long Surahs` |

**Definition:** A group of the longest surahs of the Quran, at its beginning, with a known disagreement over which surah is the seventh.

**Purpose:** Used as a value of surah group, so that reading plans and the tafsir works that treat the group as a unit can refer to it.

> The standard does not list the group's members surah by surah: the sources differ over the seventh of the tiwal and the start of the mufassal, and no registry yet enumerates each group's members with its source.

**Related:** [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group), [`surah`](/docs/terms/dictionary/structure#surah)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/201`

### Surah Group — تصنيف السور [#surah_group]

<!-- source: standards/terminology/concepts/surah_group.yml -->

| field | value |
| --- | --- |
| `code` | `surah_group` |
| `kind` | `classification` |
| Values | [`mathani`](/docs/terms/dictionary/surah_classification#mathani), [`miun`](/docs/terms/dictionary/surah_classification#miun), [`mufassal`](/docs/terms/dictionary/surah_classification#mufassal), [`saba_tiwal`](/docs/terms/dictionary/surah_classification#saba_tiwal) |
| Origin | `standard` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | تَصْنِيف السُّوَر |

**Definition:** A classification gathering surahs by inherited conventional divisions that rest on length or on their place among the groups of surahs.

**Purpose:** Gives classifications such as the tiwal, the miun, the mathani and the mufassal one parent.

**Related:** [`saba_tiwal`](/docs/terms/dictionary/surah_classification#saba_tiwal), [`miun`](/docs/terms/dictionary/surah_classification#miun), [`mathani`](/docs/terms/dictionary/surah_classification#mathani), [`mufassal`](/docs/terms/dictionary/surah_classification#mufassal), [`surah`](/docs/terms/dictionary/structure#surah)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/201`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/221`

