---
title: "Core"
description: "core"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Mushaf — المصحف [#mushaf]

<!-- source: standards/terminology/concepts/mushaf.yml -->

| field | value |
| --- | --- |
| `code` | `mushaf` |
| `plural` | `mushafs` |
| `kind` | `entity` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المُصْحَف |
| Other spellings | `mus'haf`, `muṣḥaf`, `moshaf` |
| English gloss | `Quran Codex` |

**Definition:** The Quran as a written, bound book, in its established order.

**Purpose:** Used when the properties of the written representation matter: rasm, layout, pages, lines and marks.

- A mushaf is a written vessel for the Quran, not the Quran itself: mushafs differ in rasm, pages and marks while the Quran is one.

**Related:** [`quran`](/docs/terms/dictionary/core#quran), [`mushaf_edition`](/docs/terms/dictionary/core#mushaf_edition), [`rasm`](/docs/terms/dictionary/mushaf#rasm), [`layout`](/docs/terms/dictionary/mushaf#layout), [`page`](/docs/terms/dictionary/mushaf#page), [`rasm_uthmani`](/docs/terms/dictionary/mushaf#rasm_uthmani)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/119`

### Mushaf Edition — طبعة المصحف [#mushaf_edition]

<!-- source: standards/terminology/concepts/mushaf_edition.yml -->

| field | value |
| --- | --- |
| `code` | `mushaf_edition` |
| `plural` | `mushaf_editions` |
| `kind` | `entity` |
| Part of | [`mushaf`](/docs/terms/dictionary/core#mushaf) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | طَبْعَة المُصْحَف |

**Definition:** A specific published edition of the mushaf with its own publisher, rasm, dabt, layout and other properties.

**Purpose:** Used to tell apart editions that may differ in pages, lines, marks or typographic properties.

**Related:** [`mushaf`](/docs/terms/dictionary/core#mushaf), [`layout`](/docs/terms/dictionary/mushaf#layout), [`page`](/docs/terms/dictionary/mushaf#page), [`riwayah`](/docs/terms/dictionary/qiraat#riwayah), [`font`](/docs/terms/dictionary/mushaf#font), [`rasm`](/docs/terms/dictionary/mushaf#rasm), [`ruku`](/docs/terms/dictionary/divisions#ruku)

### Quran — القرآن [#quran]

<!-- source: standards/terminology/concepts/quran.yml -->

| field | value |
| --- | --- |
| `code` | `quran` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | القُرْآن |
| Other spellings | `koran`, `qur'an`, `qur’an`, `quraan`, `al_quran` |

**Definition:** The speech of Allah revealed to Muhammad, peace be upon him, whose recitation is worship. The name covers the whole and, by context, any part of it.

**Purpose:** Represents the Quranic content itself, independent of any particular mushaf, layout, formatting or digital representation.

- The Quran is the speech itself; the mushaf is its written vessel. Pages, rasm and marks belong to the mushaf, not to the Quran.

**Related:** [`mushaf`](/docs/terms/dictionary/core#mushaf), [`surah`](/docs/terms/dictionary/structure#surah), [`ayah`](/docs/terms/dictionary/structure#ayah), [`quran_merits`](/docs/terms/dictionary/quranic_sciences#quran_merits)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/15`

