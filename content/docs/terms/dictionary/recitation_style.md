---
title: "Recitation style"
description: "recitation_style"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Instructional Ayah Repetition — تكرار الآيات [#instructional_ayah_repetition]

<!-- source: standards/terminology/concepts/instructional_ayah_repetition.yml -->

| field | value |
| --- | --- |
| `code` | `instructional_ayah_repetition` |
| `kind` | `concept` |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | تَكْرَار الآيَات |

**Definition:** Repeating an ayah, or part of one, once or several times in a teaching pattern that helps the learner take it in and memorise it.

**Purpose:** Used to describe a feature of a teaching recording in its own right, rather than leaving it implied inside `muallim`.

**Related:** [`muallim`](/docs/terms/dictionary/recitation_style#muallim), [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style)

### Muallim — معلم [#muallim]

<!-- source: standards/terminology/concepts/muallim.yml -->

| field | value |
| --- | --- |
| `code` | `muallim` |
| `kind` | `classification_value` |
| Parent | [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مُعَلِّم |

**Definition:** A recitation style meant for teaching, which may repeat ayahs or leave the learner time to repeat after the reciter.

**Purpose:** Used to classify a recording by its style.

**Related:** [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style), [`instructional_ayah_repetition`](/docs/terms/dictionary/recitation_style#instructional_ayah_repetition)

### Mujawwad — مجود [#mujawwad]

<!-- source: standards/terminology/concepts/mujawwad.yml -->

| field | value |
| --- | --- |
| `code` | `mujawwad` |
| `kind` | `classification_value` |
| Parent | [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مُجَوَّد |

**Definition:** A recitation style that is slow and melodic, with the tajwid rules drawn out; the label given to recordings delivered that way.

**Purpose:** Used to classify a recording by its style.

- Mujawwad is a recording style; tajwid is the discipline every style is delivered by. Neither name stands for the other.

**Related:** [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style), [`murattal`](/docs/terms/dictionary/recitation_style#murattal), [`tajwid`](/docs/terms/dictionary/tajwid#tajwid)

### Murattal — مرتل [#murattal]

<!-- source: standards/terminology/concepts/murattal.yml -->

| field | value |
| --- | --- |
| `code` | `murattal` |
| `kind` | `classification_value` |
| Parent | [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مُرَتَّل |

**Definition:** A recitation style that is measured and unadorned, at a reading pace; the label given to recordings delivered that way.

**Purpose:** Used to classify a recording by its style.

- Murattal is a recording style; tartil is a quality of the delivery itself. Neither name stands for the other.

**Related:** [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style), [`mujawwad`](/docs/terms/dictionary/recitation_style#mujawwad), [`tartil`](/docs/terms/dictionary/recitation#tartil)

### Recitation Style — نمط الأداء [#recitation_style]

<!-- source: standards/terminology/concepts/recitation_style.yml -->

| field | value |
| --- | --- |
| `code` | `recitation_style` |
| `kind` | `classification` |
| Values | [`muallim`](/docs/terms/dictionary/recitation_style#muallim), [`mujawwad`](/docs/terms/dictionary/recitation_style#mujawwad), [`murattal`](/docs/terms/dictionary/recitation_style#murattal) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | نَمَط الأَدَاء |

**Definition:** A classification of recordings and recitations by how they are delivered, murattal, mujawwad or muallim, independent of the qiraah and the riwayah.

**Purpose:** Used to classify audio recordings by their manner of delivery or by their purpose.

**Related:** [`murattal`](/docs/terms/dictionary/recitation_style#murattal), [`mujawwad`](/docs/terms/dictionary/recitation_style#mujawwad), [`muallim`](/docs/terms/dictionary/recitation_style#muallim), [`recitation`](/docs/terms/dictionary/recitation#recitation), [`recitation_pace`](/docs/terms/dictionary/recitation_pace#recitation_pace), [`instructional_ayah_repetition`](/docs/terms/dictionary/recitation_style#instructional_ayah_repetition)

