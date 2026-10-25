---
title: "Quran divisions"
description: "divisions"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Hizb — الحزب [#hizb]

<!-- source: standards/terminology/concepts/hizb.yml -->

| field | value |
| --- | --- |
| `code` | `hizb` |
| `plural` | `hizbs` |
| `kind` | `entity` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الحِزْب |
| Other spellings | `hezb` |

**Definition:** In the current division, half a juz, so that the Quran is 60 hizbs.

**Purpose:** Used to represent the conventional divisions, navigation, and reading plans.

**Related:** [`juz`](/docs/terms/dictionary/divisions#juz), [`rubu_al_hizb`](/docs/terms/dictionary/divisions#rubu_al_hizb), [`thumn`](/docs/terms/dictionary/divisions#thumn), [`division_mark`](/docs/terms/dictionary/dabt#division_mark)

### Juz — الجزء [#juz]

<!-- source: standards/terminology/concepts/juz.yml -->

| field | value |
| --- | --- |
| `code` | `juz` |
| `plural` | `juzs` |
| `kind` | `entity` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الجُزْء |
| Other spellings | `juzu`, `juz'`, `juzz`, `para` |
| English gloss | `Part` |

**Definition:** One of the 30 parts of the well-known division of the mushaf, made to ease reading and completing it.

**Purpose:** Used for navigation, for organising reading, and for the schedules and plans built on the parts of the Quran.

**Related:** [`hizb`](/docs/terms/dictionary/divisions#hizb), [`manzil`](/docs/terms/dictionary/divisions#manzil), [`khatmah`](/docs/terms/dictionary/recitation#khatmah), [`division_mark`](/docs/terms/dictionary/dabt#division_mark), [`ruku`](/docs/terms/dictionary/divisions#ruku)

### Manzil — المنزل [#manzil]

<!-- source: standards/terminology/concepts/manzil.yml -->

| field | value |
| --- | --- |
| `code` | `manzil` |
| `plural` | `manzils` |
| `kind` | `entity` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المَنْزِل |

**Definition:** One of 7 traditional parts of the Quran, made to ease completing it in a week.

**Purpose:** Used in applications that support the manzil system and the reading plans built on it.

**Related:** [`juz`](/docs/terms/dictionary/divisions#juz), [`khatmah`](/docs/terms/dictionary/recitation#khatmah)

### Rubu al-Hizb — ربع الحزب [#rubu_al_hizb]

<!-- source: standards/terminology/concepts/rubu_al_hizb.yml -->

| field | value |
| --- | --- |
| `code` | `rubu_al_hizb` |
| `plural` | `rubu_al_hizbs` |
| `kind` | `entity` |
| Part of | [`hizb`](/docs/terms/dictionary/divisions#hizb) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | رُبْع الحِزْب |
| Other spellings | `rub_al_hizb`, `rub'_al-hizb`, `rub_el_hizb`, `rub`, `rubu`, `rub_hizb`, `hizb_quarter`, `quarter_hizb` |

**Definition:** A quarter of a hizb in the well-known division of the mushaf.

**Purpose:** Used to represent the finer division of the hizb and where its marks fall in the mushaf.

**Related:** [`hizb`](/docs/terms/dictionary/divisions#hizb), [`thumn`](/docs/terms/dictionary/divisions#thumn), [`division_mark`](/docs/terms/dictionary/dabt#division_mark)

### Ruku — الركوع [#ruku]

<!-- source: standards/terminology/concepts/ruku.yml -->

| field | value |
| --- | --- |
| `code` | `ruku` |
| `plural` | `rukus` |
| `kind` | `entity` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الرُّكُوع |
| Other spellings | `ruku'`, `rukūʿ` |

**Definition:** A conventional section of the Quran used to organise reading, printed in some mushafs.

**Purpose:** Used in the applications and mushafs that follow the ruku division.

**Related:** [`juz`](/docs/terms/dictionary/divisions#juz), [`mushaf_edition`](/docs/terms/dictionary/core#mushaf_edition)

### Thumn — الثمن [#thumn]

<!-- source: standards/terminology/concepts/thumn.yml -->

| field | value |
| --- | --- |
| `code` | `thumn` |
| `plural` | `thumns` |
| `kind` | `entity` |
| Part of | [`hizb`](/docs/terms/dictionary/divisions#hizb) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الثُّمْن |
| Other spellings | `thumun` |

**Definition:** An eighth of a hizb, a division used in some mushafs and schools.

**Purpose:** Used when supporting sources or mushafs that divide the hizb into eighths.

**Related:** [`hizb`](/docs/terms/dictionary/divisions#hizb), [`rubu_al_hizb`](/docs/terms/dictionary/divisions#rubu_al_hizb)

