---
title: "Quranic sciences"
description: "quranic_sciences"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Abrogation — النسخ [#abrogation]

<!-- source: standards/terminology/concepts/abrogation.yml -->

| field | value |
| --- | --- |
| `code` | `abrogation` |
| `kind` | `concept` |
| Origin | `borrowed` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | النَّسْخ |
| Other spellings | `nasikh_mansukh`, `nasikh_wa_mansukh`, `nasekh_mansokh` |

**Definition:** The lifting of a legal ruling by a later legal proof. In the Quran it is studied by relating an abrogating ayah to an abrogated one.

**Purpose:** Used to represent the relation between two ayahs, one abrogating and one abrogated: a relation between two places in the text, not a property of a single ayah.

- Abrogation bears on the ruling, not on the text: an ayah whose ruling is abrogated stands in the mushaf as it is.
- The relation is disputed in many places, so it is bound to its source and never presented as agreed upon.

**Related:** [`ayah`](/docs/terms/dictionary/structure#ayah), [`asbab_al_nuzul`](/docs/terms/dictionary/revelation#asbab_al_nuzul)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/237`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `3/66`

### Mutashabihat — المتشابهات [#mutashabihat]

<!-- source: standards/terminology/concepts/mutashabihat.yml -->

| field | value |
| --- | --- |
| `code` | `mutashabihat` |
| `kind` | `analysis` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المُتَشَابِهَات |
| Other spellings | `mutashabih`, `mutashabihat_lafziyyah`, `similar_ayahs` |
| English gloss | `Similar Passages` |

**Definition:** The places in the Quran where the wording of ayahs, or of parts of them, resembles one another, whether exactly or with a slight difference in a word or in order.

**Purpose:** Used above all for memorisation, revision and search tools, since a memoriser needs to know which places are confused with one another and where they differ.

- The resemblance of wording meant here is not the mutashabih that stands opposite the muhkam in the Quranic sciences.
- A resemblance is a relation between two places or more, not a property of a single ayah.

**Related:** [`ayah`](/docs/terms/dictionary/structure#ayah), [`word`](/docs/terms/dictionary/text#word), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `3/390`

### Quran Merits — فضائل القرآن [#quran_merits]

<!-- source: standards/terminology/concepts/quran_merits.yml -->

| field | value |
| --- | --- |
| `code` | `quran_merits` |
| `kind` | `content` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | فَضَائِل القُرْآن |
| Other spellings | `fadail`, `fadail_al_surah` |

**Definition:** What has been transmitted about the merit of the Quran, or of one of its surahs or ayahs, and the reward or effect that follows from reciting it.

**Purpose:** Used as content attached to the whole Quran, to a surah or to an ayah. It is kept apart from tafsir because it does not explain meaning, and from hadith because it is organised by place in the text rather than by narrator.

- The merit is attached to a place in the Quran; the hadith it comes from is a source it cites, not its location.
- Much of what is transmitted about the merits of surahs is weak or fabricated, so it is bound to its source and its grading.

**Related:** [`quran`](/docs/terms/dictionary/core#quran), [`surah`](/docs/terms/dictionary/structure#surah), [`ayah`](/docs/terms/dictionary/structure#ayah)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `4/136`

### Reflection — التدبر [#reflection]

<!-- source: standards/terminology/concepts/reflection.yml -->

| field | value |
| --- | --- |
| `code` | `reflection` |
| `plural` | `reflections` |
| `kind` | `content` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّدَبُّر |
| Other spellings | `tadabur`, `waqfat_tadabburiyyah` |

**Definition:** Reflecting on the meanings of the Quran and what they call for in action, and what a reader records of a pause at an ayah or a word.

**Purpose:** Used as content attached to an ayah or to a place within it. It is kept apart from tafsir because it does not undertake to state the apparent meaning, and the one who says it is not necessarily a mufassir.

- Tafsir states the meaning of an ayah by a method; reflection is the effect of that meaning on the one reflecting.

**Related:** [`ayah`](/docs/terms/dictionary/structure#ayah), [`tafsir`](/docs/terms/dictionary/tafsir#tafsir)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/29) — `29`

### Surah Name Reason — سبب التسمية [#surah_name_reason]

<!-- source: standards/terminology/concepts/surah_name_reason.yml -->

| field | value |
| --- | --- |
| `code` | `surah_name_reason` |
| `kind` | `content` |
| Origin | `standard` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | سَبَب التَّسْمِيَة |
| Other spellings | `sabab_al_tasmiya` |

**Definition:** The statement of why a surah was given its name, and what has been transmitted about it by narration or on linguistic grounds.

**Purpose:** Used as content attached to a surah. It is kept apart from the occasion of revelation because it concerns the name and not the revelation, and because many surahs have more than one name and so more than one reason.

- The reason for the name concerns the surah's name; the occasion of revelation concerns the revelation of an ayah.

**Related:** [`surah`](/docs/terms/dictionary/structure#surah), [`asbab_al_nuzul`](/docs/terms/dictionary/revelation#asbab_al_nuzul), [`surah_names`](/docs/terms/dictionary/quranic_sciences#surah_names)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/178`

### Surah Names — أسماء السورة [#surah_names]

<!-- source: standards/terminology/concepts/surah_names.yml -->

| field | value |
| --- | --- |
| `code` | `surah_names` |
| `kind` | `content` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | أَسْمَاء السُّورَة |
| Other spellings | `asmaa_al_surah` |
| English gloss | `Surah Names` |

**Definition:** The names a surah is known by. Most surahs carry more than one: some established by narration, others settled by usage.

**Purpose:** Used to hold every name a surah is known by, because mushafs differ over the name they print and search must find a surah by any of them.

- The name of a surah is one thing; the reason it was given that name (sabab al-tasmiyah) is another.
- The names of a surah are not the names of the Quran itself.

**Related:** [`surah`](/docs/terms/dictionary/structure#surah), [`surah_name_reason`](/docs/terms/dictionary/quranic_sciences#surah_name_reason)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/178`

### Surah Objectives — مقاصد السورة [#surah_objectives]

<!-- source: standards/terminology/concepts/surah_objectives.yml -->

| field | value |
| --- | --- |
| `code` | `surah_objectives` |
| `kind` | `content` |
| Origin | `borrowed` |
| Tier | `extended` |
| Version | `v0.1` |
| Vocalized | مَقَاصِد السُّورَة |
| Other spellings | `maqasid` |

**Definition:** The overarching meanings a surah turns on, held together by its subject, and the single aim its ayahs are ordered around.

**Purpose:** Used as content attached to a whole surah rather than to one of its ayahs, which sets it apart from tafsir, which proceeds ayah by ayah, and from a topic index, which lists what the surah contains.

- A maqsad is an aim that gathers the surah; a topic is one of the things it contains.

**Related:** [`surah`](/docs/terms/dictionary/structure#surah), [`tafsir`](/docs/terms/dictionary/tafsir#tafsir)

### Word Meanings — غريب القرآن [#word_meanings]

<!-- source: standards/terminology/concepts/word_meanings.yml -->

| field | value |
| --- | --- |
| `code` | `word_meanings` |
| `kind` | `content` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | غَرِيب القُرْآن |
| Other spellings | `gharib`, `word_meaning` |

**Definition:** The explanation of Quranic words whose meaning is obscure to most readers, whether because they are rare in use or because their sense has shifted.

**Purpose:** Used as content attached to a particular word of an ayah rather than to the whole ayah, which is what sets it apart from tafsir and its explanation of the ayah's overall meaning.

- Gharib al-Quran explains a word; tafsir explains the meaning of an ayah.
- The meaning is attributed to a particular book, so it may differ between sources.

**Related:** [`word`](/docs/terms/dictionary/text#word), [`tafsir`](/docs/terms/dictionary/tafsir#tafsir), [`ayah`](/docs/terms/dictionary/structure#ayah)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `2/3`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/8`
