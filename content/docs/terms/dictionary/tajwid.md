---
title: "Tajwid"
description: "tajwid"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Ghunnah — الغنة [#ghunnah]

<!-- source: standards/terminology/concepts/ghunnah.yml -->

| field | value |
| --- | --- |
| `code` | `ghunnah` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الغُنَّة |
| Other spellings | `ghunna`, `gunnah`, `ghunnah_sound` |
| English gloss | `nasalisation` |

**Definition:** A sound from the nasal cavity built into the body of noon and meem, in which the tongue plays no part; its length differs by ruling, fullest in the doubled and the merged letter, then in the concealed, then in the vowelless letter sounded clearly.

**Purpose:** Used as an attribute tagging the places in the text where the ghunnah is held, such as the two doubled letters, idgham with ghunnah, ikhfa and iqlab, so that it is followed in colouring and instruction, and because its length is among what differs by tariq.

- Ghunnah is an attribute of sound and not a ruling in itself: it accompanies idgham, ikhfa and iqlab and does not stand opposite them.

**Related:** [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`ikhfa`](/docs/terms/dictionary/tajwid#ikhfa), [`iqlab`](/docs/terms/dictionary/tajwid#iqlab), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`meem_sakinah`](/docs/terms/dictionary/tajwid#meem_sakinah), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/85) — `85`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `noon-mushaddadah`

### Idgham — الإدغام [#idgham]

<!-- source: standards/terminology/concepts/idgham.yml -->

| field | value |
| --- | --- |
| `code` | `idgham` |
| `kind` | `classification_value` |
| Parent | [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الإِدْغَام |
| Other spellings | `idghaam`, `idgam`, `edgham`, `idgham_bighunnah`, `idgham_bila_ghunnah`, `idgham_shafawi` |
| English gloss | `assimilation`, `merging` |

**Definition:** Merging a vowelless letter into a vowelled letter after it so that the two become one doubled letter, whether the merging is complete or partial, with ghunnah or without it.

**Purpose:** Used as a value of the tajwid ruling, so that a place in the text is tagged with it in analysis, colouring and instruction, and its kinds branch under it in the registry of rulings.

- Idgham is a ruling; mutamathilan, mutajanisan and mutaqariban are the relation between the two letters because of which it falls.

**Related:** [`izhar`](/docs/terms/dictionary/tajwid#izhar), [`ikhfa`](/docs/terms/dictionary/tajwid#ikhfa), [`iqlab`](/docs/terms/dictionary/tajwid#iqlab), [`ghunnah`](/docs/terms/dictionary/tajwid#ghunnah), [`letter_relation`](/docs/terms/dictionary/tajwid#letter_relation), [`mutamathilan`](/docs/terms/dictionary/tajwid#mutamathilan), [`mutajanisan`](/docs/terms/dictionary/tajwid#mutajanisan), [`meem_sakinah`](/docs/terms/dictionary/tajwid#meem_sakinah), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`shaddah`](/docs/terms/dictionary/dabt#shaddah), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/57) — `57`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/60) — `60`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/61) — `61`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/63) — `63`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `idgham-bi-ghunnah-noon`

### Ikhfa — الإخفاء [#ikhfa]

<!-- source: standards/terminology/concepts/ikhfa.yml -->

| field | value |
| --- | --- |
| `code` | `ikhfa` |
| `kind` | `classification_value` |
| Parent | [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الإِخْفَاء |
| Other spellings | `ikhfaa`, `ikhfa'`, `ekhfa`, `ikhfa_haqiqi`, `ikhfa_shafawi` |
| English gloss | `concealment` |

**Definition:** Pronouncing a vowelless letter in a manner between izhar and idgham, without doubling and with the ghunnah kept: haqiqi in noon sakinah and tanwin before its 15 letters, and shafawi in meem sakinah before a baa.

**Purpose:** Used as a value of the tajwid ruling, so that a place in the text is tagged with it in analysis, colouring and instruction, and its kinds branch under it in the registry of rulings.

**Related:** [`izhar`](/docs/terms/dictionary/tajwid#izhar), [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`ghunnah`](/docs/terms/dictionary/tajwid#ghunnah), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`meem_sakinah`](/docs/terms/dictionary/tajwid#meem_sakinah), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/67) — `67`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/68) — `68`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `ikhfa-haqiqi-noon`

### Iqlab — الإقلاب [#iqlab]

<!-- source: standards/terminology/concepts/iqlab.yml -->

| field | value |
| --- | --- |
| `code` | `iqlab` |
| `kind` | `classification_value` |
| Parent | [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الإِقْلَاب |
| Other spellings | `iqlaab`, `qalb`, `iqlab_qalb`, `eqlab` |
| English gloss | `conversion` |

**Definition:** Turning noon sakinah or tanwin into a meem, concealed with ghunnah, before a baa.

**Purpose:** Used as a value of the tajwid ruling, so that a place in the text is tagged with it in analysis, colouring and instruction, and its kinds branch under it in the registry of rulings.

- Iqlab is a ruling of pronunciation; the small meem is the mark the mushaf draws it with.

**Related:** [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`tanwin`](/docs/terms/dictionary/dabt#tanwin), [`ghunnah`](/docs/terms/dictionary/tajwid#ghunnah), [`small_meem`](/docs/terms/dictionary/dabt#small_meem), [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`izhar`](/docs/terms/dictionary/tajwid#izhar), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/86) — `86`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `iqlab-noon`

### Izhar — الإظهار [#izhar]

<!-- source: standards/terminology/concepts/izhar.yml -->

| field | value |
| --- | --- |
| `code` | `izhar` |
| `kind` | `classification_value` |
| Parent | [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الإِظْهَار |
| Other spellings | `izhaar`, `idhhar`, `idhar`, `ithhar`, `izhar_halqi`, `izhar_shafawi` |
| English gloss | `clear pronunciation` |

**Definition:** Sounding a vowelless letter from its point of articulation with no added ghunnah, as noon sakinah and tanwin are sounded before the throat letters, and meem sakinah before any letter other than baa and meem.

**Purpose:** Used as a value of the tajwid ruling, so that a place in the text is tagged with it in analysis, colouring and instruction, and its kinds branch under it in the registry of rulings.

- Izhar is a ruling standing opposite idgham and ikhfa, not the absence of a ruling: a place tagged with it is one where a cause was present and neither idgham nor ikhfa fell.

**Related:** [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`ikhfa`](/docs/terms/dictionary/tajwid#ikhfa), [`iqlab`](/docs/terms/dictionary/tajwid#iqlab), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`meem_sakinah`](/docs/terms/dictionary/tajwid#meem_sakinah), [`letter_relation`](/docs/terms/dictionary/tajwid#letter_relation), [`mutajanisan`](/docs/terms/dictionary/tajwid#mutajanisan), [`mutamathilan`](/docs/terms/dictionary/tajwid#mutamathilan), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/64) — `64`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/65) — `65`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/66) — `66`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `izhar-halqi-noon`

### Letter Relation — علاقة الحرفين [#letter_relation]

<!-- source: standards/terminology/concepts/letter_relation.yml -->

| field | value |
| --- | --- |
| `code` | `letter_relation` |
| `kind` | `classification` |
| Values | [`mutajanisan`](/docs/terms/dictionary/tajwid#mutajanisan), [`mutamathilan`](/docs/terms/dictionary/tajwid#mutamathilan) |
| Origin | `quranic` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | عَلَاقَة الحَرْفَيْن |
| Other spellings | `letter_relations`, `alaqat_al_huruf`, `ilaqat_al_harfayn` |
| English gloss | `relation of two letters` |

**Definition:** The relation of two adjacent letters to each other in point of articulation and attribute: identical, of one kind, close, or distant; the merging of the first into the second, or its clear sounding, is built on it.

**Purpose:** Used as a classification tagging the place where two letters are merged or sounded apart, so that the cause of the ruling is known and not only the ruling.

- The relation is a cause; idgham and izhar are the ruling that follows from it.

**Related:** [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`izhar`](/docs/terms/dictionary/tajwid#izhar), [`mutamathilan`](/docs/terms/dictionary/tajwid#mutamathilan), [`mutajanisan`](/docs/terms/dictionary/tajwid#mutajanisan)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/58) — `58`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/59) — `59`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/62) — `62`

### Madd — المد [#madd]

<!-- source: standards/terminology/concepts/madd.yml -->

| field | value |
| --- | --- |
| `code` | `madd` |
| `kind` | `classification` |
| Values | [`madd_al_badal`](/docs/terms/dictionary/tajwid#madd_al_badal), [`madd_al_iwad`](/docs/terms/dictionary/tajwid#madd_al_iwad), [`madd_al_lin`](/docs/terms/dictionary/tajwid#madd_al_lin), [`madd_al_silah`](/docs/terms/dictionary/tajwid#madd_al_silah), [`madd_arid_li_al_sukun`](/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun), [`madd_lazim`](/docs/terms/dictionary/tajwid#madd_lazim), [`madd_munfasil`](/docs/terms/dictionary/tajwid#madd_munfasil), [`madd_muttasil`](/docs/terms/dictionary/tajwid#madd_muttasil), [`madd_tabii`](/docs/terms/dictionary/tajwid#madd_tabii) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المَدّ |
| Arabic plural | مدود |
| Other spellings | `mad`, `madd_rule`, `mudud`, `mudood`, `madd_type` |
| English gloss | `prolongation`, `lengthening` |

**Definition:** Prolonging the sound on one of the three letters of madd: a vowelless alif after a fathah, a vowelless waw after a dammah, a vowelless yaa after a kasrah; whether the madd is original, without which the letter does not stand, or secondary, caused by a hamzah or a sukun.

**Purpose:** Used as a classification that the kinds of madd branch from, so that a place in the text is tagged with its kind and its length; and because the lengths of the madds are among what differs by tariq, they are part of describing a recording or a mushaf.

- The letters of madd are not the letters of lin, though waw and yaa belong to both: a letter of madd is vowelless after the vowel of its own kind, a letter of lin is vowelless after a fathah.
- Madd is the ruling; the maddah is the mark that points to it in the mushaf.

**Related:** [`maddah`](/docs/terms/dictionary/dabt#maddah), [`madd_tabii`](/docs/terms/dictionary/tajwid#madd_tabii), [`madd_muttasil`](/docs/terms/dictionary/tajwid#madd_muttasil), [`madd_munfasil`](/docs/terms/dictionary/tajwid#madd_munfasil), [`madd_lazim`](/docs/terms/dictionary/tajwid#madd_lazim), [`madd_al_badal`](/docs/terms/dictionary/tajwid#madd_al_badal), [`madd_al_iwad`](/docs/terms/dictionary/tajwid#madd_al_iwad), [`madd_al_silah`](/docs/terms/dictionary/tajwid#madd_al_silah), [`madd_al_lin`](/docs/terms/dictionary/tajwid#madd_al_lin), [`madd_arid_li_al_sukun`](/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/90) — `90`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/92) — `92`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/99) — `99`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/107) — `107`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/108) — `108`

### Madd al-Badal — مد البدل [#madd_al_badal]

<!-- source: standards/terminology/concepts/madd_al_badal.yml -->

| field | value |
| --- | --- |
| `code` | `madd_al_badal` |
| `kind` | `classification_value` |
| Parent | [`madd`](/docs/terms/dictionary/tajwid#madd) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مَدّ البَدَل |
| Other spellings | `madd_badal`, `badal`, `mad_badal` |
| English gloss | `substitution madd` |

**Definition:** A madd caused by a hamzah before the letter of madd, where the letter of madd was substituted for a vowelless hamzah, as in «آمن», «أوتوا» and «إيمان»; its length is 2 counts for Hafs, more for Warsh.

**Purpose:** Used as a value of madd, so that a place in the text is tagged with it and with its length, and what differs by tariq is read from it in describing a recording or a mushaf.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd), [`hamzah`](/docs/terms/dictionary/dabt#hamzah)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/98) — `98`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-badal`

### Madd al-Iwad — مد العوض [#madd_al_iwad]

<!-- source: standards/terminology/concepts/madd_al_iwad.yml -->

| field | value |
| --- | --- |
| `code` | `madd_al_iwad` |
| `kind` | `classification_value` |
| Parent | [`madd`](/docs/terms/dictionary/tajwid#madd) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مَدّ العِوَض |
| Other spellings | `madd_iwad`, `madd_al_ewad`, `madd_ewad`, `iwad`, `mad_iwad` |
| English gloss | `compensation madd` |

**Definition:** Lengthening an alif in place of tanwin al-fath when stopping on the word; its length is 2 counts.

**Purpose:** Used as a value of madd, so that a place in the text is tagged with it and with its length, and what differs by tariq is read from it in describing a recording or a mushaf.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd), [`tanwin_al_fath`](/docs/terms/dictionary/dabt#tanwin_al_fath), [`waqf`](/docs/terms/dictionary/waqf#waqf), [`madd_tabii`](/docs/terms/dictionary/tajwid#madd_tabii)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/105) — `105`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-iwad`

### Madd al-Lin — مد اللين [#madd_al_lin]

<!-- source: standards/terminology/concepts/madd_al_lin.yml -->

| field | value |
| --- | --- |
| `code` | `madd_al_lin` |
| `kind` | `classification_value` |
| Parent | [`madd`](/docs/terms/dictionary/tajwid#madd) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مَدّ اللِّين |
| Other spellings | `madd_lin`, `madd_leen`, `madd_al_leen`, `lin`, `leen`, `mad_leen` |
| English gloss | `soft madd` |

**Definition:** Lengthening a vowelless waw or yaa preceded by a fathah when stopping on the word with an incidental sukun, as in «خوف» and «بيت».

**Purpose:** Used as a value of madd, so that a place in the text is tagged with it and with its length, and what differs by tariq is read from it in describing a recording or a mushaf.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd), [`madd_arid_li_al_sukun`](/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun), [`waqf`](/docs/terms/dictionary/waqf#waqf)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/106) — `106`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/93) — `93`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `leen-waw`

### Madd al-Silah — مد الصلة [#madd_al_silah]

<!-- source: standards/terminology/concepts/madd_al_silah.yml -->

| field | value |
| --- | --- |
| `code` | `madd_al_silah` |
| `kind` | `classification_value` |
| Parent | [`madd`](/docs/terms/dictionary/tajwid#madd) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | مَدّ الصِّلَة |
| Other spellings | `madd_silah`, `silah`, `madd_al_sila`, `madd_silah_sughra`, `madd_silah_kubra`, `mad_silah` |
| English gloss | `pronoun madd` |

**Definition:** A madd arising from joining the pronoun haa to a waw or a yaa when it falls between two vowelled letters; sughra when no hamzah follows, kubra when one does.

**Purpose:** Used as a value of madd, so that a place in the text is tagged with it and with its length, and what differs by tariq is read from it in describing a recording or a mushaf.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd), [`small_waw`](/docs/terms/dictionary/dabt#small_waw), [`small_yaa`](/docs/terms/dictionary/dabt#small_yaa), [`madd_tabii`](/docs/terms/dictionary/tajwid#madd_tabii)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/97) — `97`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/96) — `96`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/95) — `95`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-silah-sughra`

### Madd Arid lil-Sukun — المد العارض للسكون [#madd_arid_li_al_sukun]

<!-- source: standards/terminology/concepts/madd_arid_li_al_sukun.yml -->

| field | value |
| --- | --- |
| `code` | `madd_arid_li_al_sukun` |
| `kind` | `classification_value` |
| Parent | [`madd`](/docs/terms/dictionary/tajwid#madd) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المَدّ العَارِض لِلسُّكُون |
| Other spellings | `madd_arid_lilsukun`, `madd_arid_lil_sukun`, `madd_arid`, `arid_lil_sukun`, `madd_aarid`, `madd_arid_lissukun` |
| English gloss | `incidental madd` |
| Display evidence | No dominant English form; «lil-Sukun» is how the phrase is written in English tajwid teaching, and the hyphenated preposition follows the display rule for the article. |

**Definition:** A madd caused by an incidental sukun in stopping after the letter of madd; shortening, middle length and full length are all permitted in it.

**Purpose:** Used as a value of madd, so that a place in the text is tagged with it and with its length, and what differs by tariq is read from it in describing a recording or a mushaf.

> The derivation gives `madd_arid_li_al_sukun`, separating the preposition from the article as section 8 requires; the fused form `lilsukun` resolves through `alternative_spellings`.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd), [`madd_al_lin`](/docs/terms/dictionary/tajwid#madd_al_lin), [`waqf`](/docs/terms/dictionary/waqf#waqf), [`wajh`](/docs/terms/dictionary/qiraat#wajh)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/109) — `109`

### Madd Lazim — المد اللازم [#madd_lazim]

<!-- source: standards/terminology/concepts/madd_lazim.yml -->

| field | value |
| --- | --- |
| `code` | `madd_lazim` |
| `kind` | `classification_value` |
| Parent | [`madd`](/docs/terms/dictionary/tajwid#madd) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المَدّ اللَّازِم |
| Other spellings | `madd_laazim`, `lazim`, `madd_lazim_kalimi`, `madd_lazim_harfi`, `mad_lazim` |
| English gloss | `necessary madd` |

**Definition:** A secondary madd caused by an original sukun, fixed in continuing and in stopping, after the letter of madd, in a word or in a letter of the surah openings, whether heavy with idgham or light; its length is 6 counts.

**Purpose:** Used as a value of madd, so that a place in the text is tagged with it and with its length, and what differs by tariq is read from it in describing a recording or a mushaf.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd), [`sukun`](/docs/terms/dictionary/dabt#sukun)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/103) — `103`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/110) — `110`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/111) — `111`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/112) — `112`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-lazim-harfi`

### Madd Munfasil — المد المنفصل [#madd_munfasil]

<!-- source: standards/terminology/concepts/madd_munfasil.yml -->

| field | value |
| --- | --- |
| `code` | `madd_munfasil` |
| `kind` | `classification_value` |
| Parent | [`madd`](/docs/terms/dictionary/tajwid#madd) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المَدّ المُنْفَصِل |
| Other spellings | `madd_jaiz_munfasil`, `munfasil`, `madd_munfasil_jaiz`, `mad_munfasil` |
| English gloss | `separated madd` |

**Definition:** A secondary madd caused by a hamzah at the start of the word following the letter of madd; it is permissible, shortened or lengthened by riwayah and tariq.

**Purpose:** Used as a value of madd, so that a place in the text is tagged with it and with its length, and what differs by tariq is read from it in describing a recording or a mushaf.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd), [`madd_muttasil`](/docs/terms/dictionary/tajwid#madd_muttasil), [`hamzah`](/docs/terms/dictionary/dabt#hamzah)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/102) — `102`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-munfasil`

### Madd Muttasil — المد المتصل [#madd_muttasil]

<!-- source: standards/terminology/concepts/madd_muttasil.yml -->

| field | value |
| --- | --- |
| `code` | `madd_muttasil` |
| `kind` | `classification_value` |
| Parent | [`madd`](/docs/terms/dictionary/tajwid#madd) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المَدّ المُتَّصِل |
| Other spellings | `madd_wajib_muttasil`, `muttasil`, `madd_muttasil_wajib`, `mad_muttasil`, `madd_mutasil` |
| English gloss | `connected madd` |

**Definition:** A secondary madd caused by a hamzah after the letter of madd within one word; it is obligatory for all the readers, and its lengths differ by riwayah and tariq.

**Purpose:** Used as a value of madd, so that a place in the text is tagged with it and with its length, and what differs by tariq is read from it in describing a recording or a mushaf.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd), [`madd_munfasil`](/docs/terms/dictionary/tajwid#madd_munfasil), [`hamzah`](/docs/terms/dictionary/dabt#hamzah)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/101) — `101`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-muttasil`

### Madd Tabee — المد الطبيعي [#madd_tabii]

<!-- source: standards/terminology/concepts/madd_tabii.yml -->

| field | value |
| --- | --- |
| `code` | `madd_tabii` |
| `kind` | `classification_value` |
| Parent | [`madd`](/docs/terms/dictionary/tajwid#madd) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المَدّ الطَّبِيعِيّ |
| Other spellings | `madd_tabee`, `madd_tabi'i`, `madd_tabiee`, `madd_asli` |
| English gloss | `natural madd` |
| Display evidence | GitHub phrase search: madd tabee 111 vs madd tabii 63. The display follows the dominant English form; the code stays derived. |

**Definition:** The madd without which the letter of madd itself does not stand, depending on no cause of hamzah or sukun; its length is 2 counts.

**Purpose:** Used as a value of madd, so that a place in the text is tagged with it and with its length, and what differs by tariq is read from it in describing a recording or a mushaf.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd), [`madd_al_iwad`](/docs/terms/dictionary/tajwid#madd_al_iwad), [`madd_al_silah`](/docs/terms/dictionary/tajwid#madd_al_silah)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/100) — `100`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-tabee-kalimi`

### Meem Sakinah — الميم الساكنة [#meem_sakinah]

<!-- source: standards/terminology/concepts/meem_sakinah.yml -->

| field | value |
| --- | --- |
| `code` | `meem_sakinah` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المِيم السَّاكِنَة |
| Other spellings | `mim_sakinah`, `meem_saakinah`, `meem_sakina` |
| English gloss | `unvowelled meem` |
| Display evidence | tools/display_measurements.json: meem sakinah 308 vs mim sakinah 57. Letter names are written as they are said, so the derivation gives meem. |

**Definition:** A meem carrying no vowel, fixed in pronunciation and in writing, falling in the middle of a word or at its end.

**Purpose:** Used as the trigger of the three labial rulings, idgham, ikhfa and izhar, in tajwid engines.

- Meem sakinah is not the meem that noon turns into in iqlab, though the two sound the same.

**Related:** [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`izhar`](/docs/terms/dictionary/tajwid#izhar), [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`ikhfa`](/docs/terms/dictionary/tajwid#ikhfa), [`ghunnah`](/docs/terms/dictionary/tajwid#ghunnah), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/63) — `63`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/66) — `66`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/68) — `68`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `izhar-shafawi-meem`

### Mutajanisan — المتجانسان [#mutajanisan]

<!-- source: standards/terminology/concepts/mutajanisan.yml -->

| field | value |
| --- | --- |
| `code` | `mutajanisan` |
| `kind` | `classification_value` |
| Parent | [`letter_relation`](/docs/terms/dictionary/tajwid#letter_relation) |
| Origin | `quranic` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | المُتَجَانِسَان |
| Other spellings | `mutajanisain`, `mutajanisayn`, `mutajanisan_saghir` |

**Definition:** Two letters of one point of articulation differing in attribute, like the dal and the taa in «قد تبين».

**Purpose:** Used as a value of the relation of two letters, so that the cause of idgham or izhar at the place is read from it rather than worked out from the two letters every time.

**Related:** [`letter_relation`](/docs/terms/dictionary/tajwid#letter_relation), [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`izhar`](/docs/terms/dictionary/tajwid#izhar)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/59) — `59`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `mutajanisain-idgham-naqis`

### Mutamathilan — المتماثلان [#mutamathilan]

<!-- source: standards/terminology/concepts/mutamathilan.yml -->

| field | value |
| --- | --- |
| `code` | `mutamathilan` |
| `kind` | `classification_value` |
| Parent | [`letter_relation`](/docs/terms/dictionary/tajwid#letter_relation) |
| Origin | `quranic` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | المُتَمَاثِلَان |
| Other spellings | `mutamathilain`, `mutamathilayn`, `mithlayn`, `mutamathilan_saghir` |

**Definition:** Two letters identical in point of articulation and in attribute, like the two baas in «اضرب بعصاك».

**Purpose:** Used as a value of the relation of two letters, so that the cause of idgham or izhar at the place is read from it rather than worked out from the two letters every time.

**Related:** [`letter_relation`](/docs/terms/dictionary/tajwid#letter_relation), [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`izhar`](/docs/terms/dictionary/tajwid#izhar)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/58) — `58`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `mutamathilain-idgham-kamil`

### Noon Sakinah — النون الساكنة [#noon_sakinah]

<!-- source: standards/terminology/concepts/noon_sakinah.yml -->

| field | value |
| --- | --- |
| `code` | `noon_sakinah` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | النُّون السَّاكِنَة |
| Transliteration | nūn sākinah |
| Other spellings | `nun_sakinah`, `noon_saakinah` |
| English gloss | `Unvowelled Noon` |
| Display evidence | GitHub phrase search: noon sakinah 478 vs nun sakinah 118. Letter names are written as they are said, so the derivation gives noon rather than nun. |

**Definition:** A noon carrying no vowel, fixed in pronunciation and in writing, in continuing and in stopping.

**Purpose:** Used as the trigger of the four rulings, izhar, idgham, iqlab and ikhfa, in tajwid engines.

**Related:** [`tajwid`](/docs/terms/dictionary/tajwid#tajwid), [`tanwin`](/docs/terms/dictionary/dabt#tanwin), [`izhar`](/docs/terms/dictionary/tajwid#izhar), [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`iqlab`](/docs/terms/dictionary/tajwid#iqlab), [`ikhfa`](/docs/terms/dictionary/tajwid#ikhfa), [`meem_sakinah`](/docs/terms/dictionary/tajwid#meem_sakinah), [`ghunnah`](/docs/terms/dictionary/tajwid#ghunnah), [`small_meem`](/docs/terms/dictionary/dabt#small_meem), [`sukun`](/docs/terms/dictionary/dabt#sukun), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling), [`tanwin_al_damm`](/docs/terms/dictionary/dabt#tanwin_al_damm), [`tanwin_al_fath`](/docs/terms/dictionary/dabt#tanwin_al_fath), [`tanwin_al_kasr`](/docs/terms/dictionary/dabt#tanwin_al_kasr)

**Sources:**

- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `noon-tanween`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/64) — `64`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/57) — `57`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/86) — `86`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/67) — `67`

### Qalqalah — القلقلة [#qalqalah]

<!-- source: standards/terminology/concepts/qalqalah.yml -->

| field | value |
| --- | --- |
| `code` | `qalqalah` |
| `kind` | `classification_value` |
| Parent | [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | القَلْقَلَة |
| Other spellings | `qalqala`, `qalqalah_sughra`, `qalqalah_kubra`, `qalqalh` |
| English gloss | `echoing` |

**Definition:** A disturbance in the sound of a vowelless letter as it is pronounced, so that a strong beat is heard, in the letters of «قطب جد»; it grows stronger by the letter's place in the word and by stopping on it.

**Purpose:** Used as a value of the tajwid ruling, so that a place in the text is tagged with it in analysis, colouring and instruction, and its kinds branch under it in the registry of rulings.

- Qalqalah is one of the attributes of the letters that have no opposite; it counts as a ruling when the place where it appears is tagged with it.

**Related:** [`sukun`](/docs/terms/dictionary/dabt#sukun), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/78) — `78`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `qalqalah-sughra`

### Saktah — السكتة [#saktah]

<!-- source: standards/terminology/concepts/saktah.yml -->

| field | value |
| --- | --- |
| `code` | `saktah` |
| `plural` | `saktahs` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | السَّكْتَة |
| Other spellings | `sakta`, `sakt` |

**Definition:** Cutting off the voice for a short moment without breathing, then continuing the recitation.

**Purpose:** Used to represent where a saktah falls and what its properties are in the text or in a recitation.

- The saktah is the pause itself; the saktah mark is the sign drawn in the mushaf for it.

**Related:** [`saktah_mark`](/docs/terms/dictionary/dabt#saktah_mark), [`waqf`](/docs/terms/dictionary/waqf#waqf), [`tajwid`](/docs/terms/dictionary/tajwid#tajwid)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/126) — `126`

### Tafkhim — التفخيم [#tafkhim]

<!-- source: standards/terminology/concepts/tafkhim.yml -->

| field | value |
| --- | --- |
| `code` | `tafkhim` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّفْخِيم |
| Other spellings | `tafkheem`, `tafkhem`, `tafkhim_rule` |
| English gloss | `heavy pronunciation`, `velarisation` |
| Display evidence | tools/display_measurements.json: tafkhim 900 vs tafkheem 539; the derived form is also the dominant one. |

**Definition:** A fullness entering the sound of a letter so that the mouth fills with its echo; inherent in the letters of istila, and incidental in the raa, the lam of the name of Allah and the alif, following what precedes them.

**Purpose:** Used to tag the places of letters carrying incidental tafkhim in colouring and instruction, and the ranks of tafkhim in the registry of rulings are attributed to it.

- Tafkhim is an attribute of the letter's sound; istila is the attribute of articulation from which tafkhim follows.

**Related:** [`tarqiq`](/docs/terms/dictionary/tajwid#tarqiq), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/87) — `87`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/89) — `89`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `tafkheem-rank-1-jazari`

### Tajweed — التجويد [#tajwid]

<!-- source: standards/terminology/concepts/tajwid.yml -->

| field | value |
| --- | --- |
| `code` | `tajwid` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّجْوِيد |
| Transliteration | tajwīd |
| Registry | [`tajwid_rules`](/docs/terms/registries#tajwid_rules) |
| Other spellings | `tajweed`, `tajwīd` |
| Display evidence | GitHub phrase search: tajweed 45,440 vs tajwid 25,280. The doubled form is dominant in English writing, so it is what readers see; the code name stays derived, because the doubling in general use is lexical and not a rule. |

**Definition:** The discipline of delivering the letters of the Quran from their points of articulation and giving them their due properties and rulings.

**Purpose:** Used as the discipline that tajwid rules, rulings and colour annotations belong to, so that a rule in an engine or a dictionary is attributed to it.

- Tajwid is a discipline; mujawwad is a recording style. Neither name stands for the other.

**Related:** [`recitation`](/docs/terms/dictionary/recitation#recitation), [`waqf`](/docs/terms/dictionary/waqf#waqf), [`mujawwad`](/docs/terms/dictionary/recitation_style#mujawwad), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling), [`saktah`](/docs/terms/dictionary/tajwid#saktah)

**Sources:**

- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine)
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/4) — `4`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/190`

### Tajwid Ruling — حكم التجويد [#tajwid_ruling]

<!-- source: standards/terminology/concepts/tajwid_ruling.yml -->

| field | value |
| --- | --- |
| `code` | `tajwid_ruling` |
| `plural` | `tajwid_rulings` |
| `kind` | `classification` |
| Values | [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`ikhfa`](/docs/terms/dictionary/tajwid#ikhfa), [`iqlab`](/docs/terms/dictionary/tajwid#iqlab), [`izhar`](/docs/terms/dictionary/tajwid#izhar), [`qalqalah`](/docs/terms/dictionary/tajwid#qalqalah) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | حُكْم التَّجْوِيد |
| Arabic plural | أَحْكَام التَّجْوِيد |
| Registry | [`tajwid_rules`](/docs/terms/registries#tajwid_rules) |
| Other spellings | `hukm`, `hukum`, `ahkam_al_tajwid`, `ahkam_al_tajweed`, `tajwid_rule`, `tajweed_rule`, `tajweed_ruling` |
| English gloss | `tajwid ruling` |

**Definition:** What is due in delivering a letter before the letter that follows it, or at a sukun or a hamzah: izhar, idgham, iqlab, ikhfa, madd, qalqalah, tafkhim or tarqiq, as the rules of tajwid settle it at a given place in the text.

**Purpose:** Used as the parent of the rulings of tajwid and the holder of their registry, so that the places in the text where a ruling falls are attributed to it, and a particular ruling is named by a row of the registry rather than by a free name that differs from one engine to another.

- The ruling is what falls at the place; tajwid is the discipline that settles it.
- A ruling is not a rule: the rule is the condition, and the ruling is its effect at the place.

**Related:** [`tajwid`](/docs/terms/dictionary/tajwid#tajwid), [`izhar`](/docs/terms/dictionary/tajwid#izhar), [`idgham`](/docs/terms/dictionary/tajwid#idgham), [`iqlab`](/docs/terms/dictionary/tajwid#iqlab), [`ikhfa`](/docs/terms/dictionary/tajwid#ikhfa), [`qalqalah`](/docs/terms/dictionary/tajwid#qalqalah), [`madd`](/docs/terms/dictionary/tajwid#madd), [`ghunnah`](/docs/terms/dictionary/tajwid#ghunnah), [`tafkhim`](/docs/terms/dictionary/tajwid#tafkhim), [`tarqiq`](/docs/terms/dictionary/tajwid#tarqiq), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`meem_sakinah`](/docs/terms/dictionary/tajwid#meem_sakinah)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/4) — `4`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine)

### Tarqiq — الترقيق [#tarqiq]

<!-- source: standards/terminology/concepts/tarqiq.yml -->

| field | value |
| --- | --- |
| `code` | `tarqiq` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّرْقِيق |
| Other spellings | `tarqeeq`, `tarqiq_rule` |
| English gloss | `light pronunciation` |
| Display evidence | tools/display_measurements.json: tarqiq 1156 vs tarqeeq 286; the derived form is also the dominant one. |

**Definition:** A thinness entering the sound of a letter so that the mouth does not fill with its echo; inherent in the letters of istifal, and incidental in the raa and the lam of the name of Allah.

**Purpose:** Used to tag the places of letters carrying incidental tarqiq in colouring and instruction, as the counterpart of tafkhim.

**Related:** [`tafkhim`](/docs/terms/dictionary/tajwid#tafkhim), [`tajwid_ruling`](/docs/terms/dictionary/tajwid#tajwid_ruling)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/88) — `88`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `raa-tarqeeq`

