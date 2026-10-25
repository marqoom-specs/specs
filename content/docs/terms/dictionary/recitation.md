---
title: "Recitation"
description: "recitation"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Ayah Timing [#ayah_timing]

<!-- source: standards/terminology/concepts/ayah_timing.yml -->

| field | value |
| --- | --- |
| `code` | `ayah_timing` |
| `plural` | `ayah_timings` |
| `kind` | `concept` |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Other spellings | `ayah_timestamp`, `recitation_timing`, `timing`, `verse_timing` |

**Definition:** A span of time in a recitation recording, given by a start and an end, corresponding to one ayah.

**Purpose:** Used to bind text to audio; following along while listening, jumping to an ayah, repeating it and clipping it all rest on it.

- A timing is a property of the recording, not of the ayah, so it differs from one recitation to another.
- Ayah-level timing is not word-level alignment.

**Related:** [`recitation`](/docs/terms/dictionary/recitation#recitation), [`ayah`](/docs/terms/dictionary/structure#ayah), [`reciter`](/docs/terms/dictionary/recitation#reciter), [`word_timing`](/docs/terms/dictionary/recitation#word_timing)

### Istiadhah — الاستعاذة [#istiadhah]

<!-- source: standards/terminology/concepts/istiadhah.yml -->

| field | value |
| --- | --- |
| `code` | `istiadhah` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الاِسْتِعَاذَة |
| Other spellings | `isti'adhah`, `istiʿādhah`, `ta'awwudh`, `istiadha`, `istiaadhah`, `taawwudh` |

**Definition:** Seeking refuge with Allah from the Shaytan before reciting the Quran.

**Purpose:** Used to represent the istiadhah, its wordings, and its position relative to the start of a recitation.

**Related:** [`basmalah`](/docs/terms/dictionary/structure#basmalah), [`recitation`](/docs/terms/dictionary/recitation#recitation)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/27) — `27`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/243`

### Khatmah — الختمة [#khatmah]

<!-- source: standards/terminology/concepts/khatmah.yml -->

| field | value |
| --- | --- |
| `code` | `khatmah` |
| `plural` | `khatmahs` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الخَتْمَة |
| Other spellings | `khatma` |

**Definition:** Reading the Quran in full, from its beginning to its end.

**Purpose:** Used to track completion plans, to record that a reading was finished, and to tie sessions to the course of one khatmah.

**Related:** [`juz`](/docs/terms/dictionary/divisions#juz), [`manzil`](/docs/terms/dictionary/divisions#manzil), [`recitation`](/docs/terms/dictionary/recitation#recitation)

### Recitation — تسجيل التلاوة [#recitation]

<!-- source: standards/terminology/concepts/recitation.yml -->

| field | value |
| --- | --- |
| `code` | `recitation` |
| `plural` | `recitations` |
| `kind` | `entity` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | تَسْجِيل التِّلَاوَة |

**Definition:** A published recording of a recitation of the Quran, attributed to a reciter, a riwayah and a style of delivery.

**Purpose:** Used to represent the recording that timings, style and pace are attached to; it is attributed to a reciter and a riwayah and kept apart from the act of tilawah.

- A recitation is the published recording attributed to a reciter, a riwayah and a style; tilawah is the act.

**Related:** [`reciter`](/docs/terms/dictionary/recitation#reciter), [`riwayah`](/docs/terms/dictionary/qiraat#riwayah), [`recitation_style`](/docs/terms/dictionary/recitation_style#recitation_style), [`recitation_pace`](/docs/terms/dictionary/recitation_pace#recitation_pace), [`ayah_timing`](/docs/terms/dictionary/recitation#ayah_timing), [`word_timing`](/docs/terms/dictionary/recitation#word_timing), [`tilawah`](/docs/terms/dictionary/recitation#tilawah), [`istiadhah`](/docs/terms/dictionary/recitation#istiadhah), [`khatmah`](/docs/terms/dictionary/recitation#khatmah), [`spoken_translation`](/docs/terms/dictionary/translation#spoken_translation), [`tajwid`](/docs/terms/dictionary/tajwid#tajwid), [`tartil`](/docs/terms/dictionary/recitation#tartil)

### Reciter — القارئ [#reciter]

<!-- source: standards/terminology/concepts/reciter.yml -->

| field | value |
| --- | --- |
| `code` | `reciter` |
| `plural` | `reciters` |
| `kind` | `role` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | القَارِئ |
| Other spellings | `qari`, `qaari` |

**Definition:** The person who performs a recitation of the Quran.

**Purpose:** Used to tie audio recordings to their performer.

- A reciter performs the recitation in a recording; they are neither an imam of a qiraah nor a rawi.

**Related:** [`recitation`](/docs/terms/dictionary/recitation#recitation), [`rawi`](/docs/terms/dictionary/qiraat#rawi), [`muqri`](/docs/terms/dictionary/qiraat#muqri), [`ayah_timing`](/docs/terms/dictionary/recitation#ayah_timing), [`tilawah`](/docs/terms/dictionary/recitation#tilawah)

### Tartil — الترتيل [#tartil]

<!-- source: standards/terminology/concepts/tartil.yml -->

| field | value |
| --- | --- |
| `code` | `tartil` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّرْتِيل |
| Other spellings | `tarteel` |

**Definition:** Reciting the Quran deliberately, making the letters and words distinct, observing the stops and the meaning.

**Purpose:** Used as a quality of delivery in describing a recording or a lesson, not as the name of the style a recording is published under.

- Tartil is a quality of the delivery itself; murattal is a recording style. Neither name stands for the other.

**Related:** [`murattal`](/docs/terms/dictionary/recitation_style#murattal), [`recitation`](/docs/terms/dictionary/recitation#recitation), [`recitation_pace`](/docs/terms/dictionary/recitation_pace#recitation_pace), [`tilawah`](/docs/terms/dictionary/recitation#tilawah)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/21) — `21`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/205`

### Tilawah — التلاوة [#tilawah]

<!-- source: standards/terminology/concepts/tilawah.yml -->

| field | value |
| --- | --- |
| `code` | `tilawah` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التِّلَاوَة |
| Other spellings | `tilaawah`, `tilawa`, `tilawat` |

**Definition:** Reading the Quran in its wording, delivered aloud as the reader received it, whether in prayer, in a lesson or in a recording.

**Purpose:** Used for the act of reading itself where that is what is meant, as in the rulings of tilawah, its etiquette, its prostration and its teaching; the published recording of it stays `recitation`.

- Tilawah is the act; `recitation` is the published recording attributed to a reciter, a riwayah and a style of delivery.
- Tartil is an attribute of tilawah, not tilawah.

**Related:** [`recitation`](/docs/terms/dictionary/recitation#recitation), [`tartil`](/docs/terms/dictionary/recitation#tartil), [`sajdah`](/docs/terms/dictionary/structure#sajdah), [`reciter`](/docs/terms/dictionary/recitation#reciter)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/16) — `16`

### Word Timing [#word_timing]

<!-- source: standards/terminology/concepts/word_timing.yml -->

| field | value |
| --- | --- |
| `code` | `word_timing` |
| `plural` | `word_timings` |
| `kind` | `concept` |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Other spellings | `word_timestamp`, `word_alignment`, `word_segment_timing`, `timing_segment`, `audio_segment`, `word_timings` |

**Definition:** A span of time in a recitation recording, given by a start and an end, corresponding to one word of an ayah.

**Purpose:** Used to highlight the word being recited while listening, to align text with audio at a level finer than the ayah, and to cut a recording at a word.

- A word timing falls inside the timing of its ayah and does not cross it.
- Audio APIs call this concept `segment`; the name in this standard is `word_timing`, because in linguistic corpora `segment` names the morpheme.

**Related:** [`ayah_timing`](/docs/terms/dictionary/recitation#ayah_timing), [`word`](/docs/terms/dictionary/text#word), [`word_key`](/docs/terms/dictionary/structure#word_key), [`recitation`](/docs/terms/dictionary/recitation#recitation)

