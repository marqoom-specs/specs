---
title: "Qiraat"
description: "qiraat"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Muqri — المقرئ [#muqri]

<!-- source: standards/terminology/concepts/muqri.yml -->

| field | value |
| --- | --- |
| `code` | `muqri` |
| `plural` | `muqris` |
| `kind` | `role` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المُقْرِئ |
| Other spellings | `muqree` |

**Definition:** One who has received the recitation, mastered it, and transmits it to learners.

**Purpose:** Used to represent the role of teaching, receiving and granting the recitation, which is distinct from being a `reciter`.

**Related:** [`reciter`](/docs/terms/dictionary/recitation#reciter), [`rawi`](/docs/terms/dictionary/qiraat#rawi), [`qiraah`](/docs/terms/dictionary/qiraat#qiraah)

**Sources:**

- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/268`

### Qiraah — القراءة [#qiraah]

<!-- source: standards/terminology/concepts/qiraah.yml -->

| field | value |
| --- | --- |
| `code` | `qiraah` |
| `plural` | `qiraahs` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | القِرَاءَة |
| Registry | [`qiraat`](/docs/terms/registries#qiraat) |
| Other spellings | `qira'ah`, `qiraa`, `qiraat`, `qira'at` |
| English gloss | `Reading` |

**Definition:** One of the ways of reciting the Quran, attributed to one of the imams of the qiraat, from which the riwayahs and tariqs branch.

**Purpose:** Represents the top level of the qiraat model and ties together the riwayahs, the tariqs and the texts bound to them.

**Related:** [`riwayah`](/docs/terms/dictionary/qiraat#riwayah), [`rawi`](/docs/terms/dictionary/qiraat#rawi), [`tariq`](/docs/terms/dictionary/qiraat#tariq), [`muqri`](/docs/terms/dictionary/qiraat#muqri), [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/171`

### Rawi — الراوي [#rawi]

<!-- source: standards/terminology/concepts/rawi.yml -->

| field | value |
| --- | --- |
| `code` | `rawi` |
| `plural` | `rawis` |
| `kind` | `role` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الرَّاوِي |
| Registry | [`qiraat`](/docs/terms/registries#qiraat) |
| English gloss | `Transmitter` |

**Definition:** One to whom a transmission from an imam of a qiraah is attributed.

**Purpose:** Used to represent the person a `riwayah` is bound to.

- A rawi is the transmitter a riwayah is attributed to; a reciter is the performer of a recording. A performer is not a rawi merely because they recite in his riwayah.

**Related:** [`riwayah`](/docs/terms/dictionary/qiraat#riwayah), [`qiraah`](/docs/terms/dictionary/qiraat#qiraah), [`reciter`](/docs/terms/dictionary/recitation#reciter), [`muqri`](/docs/terms/dictionary/qiraat#muqri)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/171`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/115`

### Riwayah — الرواية [#riwayah]

<!-- source: standards/terminology/concepts/riwayah.yml -->

| field | value |
| --- | --- |
| `code` | `riwayah` |
| `plural` | `riwayahs` |
| `kind` | `concept` |
| Part of | [`qiraah`](/docs/terms/dictionary/qiraat#qiraah) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الرِّوَايَة |
| Registry | [`qiraat`](/docs/terms/registries#qiraat) |
| Other spellings | `riwaya`, `rewaya`, `riwayat` |

**Definition:** What is attributed to a transmitter from an imam of a qiraah, such as the riwayah of Hafs from Asim.

**Purpose:** Used to state which riwayah a text, a mushaf, a recording or a dataset follows.

**Related:** [`qiraah`](/docs/terms/dictionary/qiraat#qiraah), [`rawi`](/docs/terms/dictionary/qiraat#rawi), [`tariq`](/docs/terms/dictionary/qiraat#tariq), [`recitation`](/docs/terms/dictionary/recitation#recitation), [`mushaf_edition`](/docs/terms/dictionary/core#mushaf_edition), [`wajh`](/docs/terms/dictionary/qiraat#wajh)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/171`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/115`

### Tariq — الطريق [#tariq]

<!-- source: standards/terminology/concepts/tariq.yml -->

| field | value |
| --- | --- |
| `code` | `tariq` |
| `plural` | `tariqs` |
| `kind` | `concept` |
| Part of | [`riwayah`](/docs/terms/dictionary/qiraat#riwayah) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الطَّرِيق |
| Registry | [`tariq`](/docs/terms/registries#tariq) |
| Other spellings | `tareeq` |

**Definition:** A path of transmission taken from a rawi through those below him in the chain of transmission of a qiraah.

**Purpose:** Used when data needs a finer level than the riwayah to tell paths of delivery and transmission apart.

> The four named routes applications store — shatibiyyah, tayyibat_al_nashr, durrah, taysir — are in `registries/tariq.tsv`; the full enumeration, some 980 turuq of al-Nashr, is still open.

**Related:** [`riwayah`](/docs/terms/dictionary/qiraat#riwayah), [`qiraah`](/docs/terms/dictionary/qiraat#qiraah), [`wajh`](/docs/terms/dictionary/qiraat#wajh)

**Sources:**

- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/115`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/146`

### Wajh — الوجه [#wajh]

<!-- source: standards/terminology/concepts/wajh.yml -->

| field | value |
| --- | --- |
| `code` | `wajh` |
| `plural` | `wajhs` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | الوَجْه |
| Arabic plural | أَوْجُه |
| Other spellings | `wajh_al_ada`, `awjuh`, `wujuh`, `wajh_qiraah` |
| English gloss | `permitted variant` |

**Definition:** One of several manners of delivery, any of which may be taken within one riwayah or one tariq, such as the wajhs of madd arid li al-sukun.

**Purpose:** Used when a recording or a lesson needs to state which of the permitted wajhs was taken, without attributing the difference to a riwayah or a tariq.

- A wajh does not change what the reading is attributed to; a tariq does.

**Related:** [`tariq`](/docs/terms/dictionary/qiraat#tariq), [`riwayah`](/docs/terms/dictionary/qiraat#riwayah), [`madd_arid_li_al_sukun`](/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun)

