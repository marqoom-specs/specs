---
title: "Waqf"
description: "waqf"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Waqf — الوقف [#waqf]

<!-- source: standards/terminology/concepts/waqf.yml -->

| field | value |
| --- | --- |
| `code` | `waqf` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف |
| English gloss | `Stop`, `Pause` |

**Definition:** Stopping the recitation at a place in the text according to the rules of stopping and starting.

**Purpose:** Represents the general concept of stopping, while `waqf_mark` represents the printed signs that point to it.

**Related:** [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark), [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling), [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type), [`tajwid`](/docs/terms/dictionary/tajwid#tajwid), [`saktah`](/docs/terms/dictionary/tajwid#saktah), [`madd_al_iwad`](/docs/terms/dictionary/tajwid#madd_al_iwad), [`madd_al_lin`](/docs/terms/dictionary/tajwid#madd_al_lin), [`madd_arid_li_al_sukun`](/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun), [`waqf_al_muanaqah`](/docs/terms/dictionary/dabt#waqf_al_muanaqah), [`waqf_hasan`](/docs/terms/dictionary/waqf#waqf_hasan), [`waqf_jaiz_mustawi_al_tarafayn`](/docs/terms/dictionary/dabt#waqf_jaiz_mustawi_al_tarafayn), [`waqf_jaiz_waqf_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_waqf_awla), [`waqf_jaiz_wasl_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_wasl_awla), [`waqf_kafi`](/docs/terms/dictionary/waqf#waqf_kafi), [`waqf_lazim`](/docs/terms/dictionary/dabt#waqf_lazim), [`waqf_mamnu`](/docs/terms/dictionary/dabt#waqf_mamnu), [`waqf_qabih`](/docs/terms/dictionary/waqf#waqf_qabih), [`waqf_tamm`](/docs/terms/dictionary/waqf#waqf_tamm)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/115) — `115`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/282`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/226`

### Waqf Hasan — الوقف الحسن [#waqf_hasan]

<!-- source: standards/terminology/concepts/waqf_hasan.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_hasan` |
| `kind` | `classification_value` |
| Parent | [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف الحَسَن |

**Definition:** A stop that yields a meaning but is connected to what follows it in wording and in meaning.

**Purpose:** Used as a value of the waqf ruling, so that a place is tagged with it in teaching and analysis.

**Related:** [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling), [`waqf`](/docs/terms/dictionary/waqf#waqf)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/124) — `124`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/226`

### Waqf Kafi — الوقف الكافي [#waqf_kafi]

<!-- source: standards/terminology/concepts/waqf_kafi.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_kafi` |
| `kind` | `classification_value` |
| Parent | [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف الكَافِي |

**Definition:** A stop whose meaning is complete but which is connected to what follows it in meaning, not in wording.

**Purpose:** Used as a value of the waqf ruling, so that a place is tagged with it in teaching and analysis.

**Related:** [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling), [`waqf`](/docs/terms/dictionary/waqf#waqf)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/123) — `123`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/226`

### Waqf Mark Type — نوع علامة الوقف [#waqf_mark_type]

<!-- source: standards/terminology/concepts/waqf_mark_type.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_mark_type` |
| `kind` | `classification` |
| Values | [`waqf_al_muanaqah`](/docs/terms/dictionary/dabt#waqf_al_muanaqah), [`waqf_jaiz_mustawi_al_tarafayn`](/docs/terms/dictionary/dabt#waqf_jaiz_mustawi_al_tarafayn), [`waqf_jaiz_waqf_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_waqf_awla), [`waqf_jaiz_wasl_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_wasl_awla), [`waqf_lazim`](/docs/terms/dictionary/dabt#waqf_lazim), [`waqf_mamnu`](/docs/terms/dictionary/dabt#waqf_mamnu) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | نَوْع عَلَامَة الوَقْف |

**Definition:** A classification of what a waqf mark drawn in the mushaf points to: that stopping is compulsory, forbidden or permitted.

**Purpose:** Gives applications one set of values to branch on, instead of reading the shape of the sign itself.

- The mark type is what a drawn mark points to; the waqf ruling belongs to the place itself, even where no mark is drawn on it.

**Related:** [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark), [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### Waqf Qabih — الوقف القبيح [#waqf_qabih]

<!-- source: standards/terminology/concepts/waqf_qabih.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_qabih` |
| `kind` | `classification_value` |
| Parent | [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف القَبِيح |

**Definition:** A stop that yields no meaning, or yields a meaning that is not the one intended.

**Purpose:** Used as a value of the waqf ruling, so that a place is tagged with it in teaching and analysis.

**Related:** [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling), [`waqf`](/docs/terms/dictionary/waqf#waqf)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/125) — `125`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/226`

### Waqf Ruling — حكم الوقف [#waqf_ruling]

<!-- source: standards/terminology/concepts/waqf_ruling.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_ruling` |
| `kind` | `classification` |
| Values | [`waqf_hasan`](/docs/terms/dictionary/waqf#waqf_hasan), [`waqf_kafi`](/docs/terms/dictionary/waqf#waqf_kafi), [`waqf_qabih`](/docs/terms/dictionary/waqf#waqf_qabih), [`waqf_tamm`](/docs/terms/dictionary/waqf#waqf_tamm) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | حُكْم الوَقْف |

**Definition:** A classification of the place itself by whether the meaning is complete there, not of the mark drawn at it.

**Purpose:** Used in teaching and in the syntactic and semantic analysis of stopping.

- The waqf ruling belongs to the place; the waqf mark type is what a drawn mark points to, and a place may have a ruling with no mark on it.

**Related:** [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type), [`waqf_tamm`](/docs/terms/dictionary/waqf#waqf_tamm), [`waqf_kafi`](/docs/terms/dictionary/waqf#waqf_kafi), [`waqf_hasan`](/docs/terms/dictionary/waqf#waqf_hasan), [`waqf_qabih`](/docs/terms/dictionary/waqf#waqf_qabih)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/115) — `115`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/226`

### Waqf Tamm — الوقف التام [#waqf_tamm]

<!-- source: standards/terminology/concepts/waqf_tamm.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_tamm` |
| `kind` | `classification_value` |
| Parent | [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف التَّامّ |

**Definition:** A stop whose meaning is complete and which is connected to what follows it neither in wording nor in meaning.

**Purpose:** Used as a value of the waqf ruling, so that a place is tagged with it in teaching and analysis.

**Related:** [`waqf_ruling`](/docs/terms/dictionary/waqf#waqf_ruling), [`waqf`](/docs/terms/dictionary/waqf#waqf)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/121) — `121`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/226`

