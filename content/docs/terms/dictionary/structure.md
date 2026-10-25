---
title: "Structure"
description: "structure"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Ayah — الآية [#ayah]

<!-- source: standards/terminology/concepts/ayah.yml -->

| field | value |
| --- | --- |
| `code` | `ayah` |
| `plural` | `ayahs` |
| `kind` | `entity` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الآيَة |
| Arabic plural | آيات |
| Transliteration | āyah |
| Other spellings | `aya`, `ayat`, `ayaat` |
| English gloss | `Verse` |

**Definition:** A unit of the Quranic text falling within a surah and having determined boundaries. Its number, and some of its boundaries, may differ from one ayah numbering system to another.

**Purpose:** Used as the basic unit for referring to the Quranic text, and for attaching translations, tafsir, recitations, analyses and other data to a specific place in the Quran.

- Its position on a page or a line belongs to the mushaf and its layout, not to the identity of the ayah.
- The ayah ending is the close of the ayah, not the ayah.

**Related:** [`surah`](/docs/terms/dictionary/structure#surah), [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`ayah_ending`](/docs/terms/dictionary/structure#ayah_ending), [`ayah_mark`](/docs/terms/dictionary/dabt#ayah_mark), [`ayah_key`](/docs/terms/dictionary/structure#ayah_key), [`word`](/docs/terms/dictionary/text#word), [`abrogation`](/docs/terms/dictionary/quranic_sciences#abrogation), [`asbab_al_nuzul`](/docs/terms/dictionary/revelation#asbab_al_nuzul), [`ayah_count`](/docs/terms/dictionary/ayah_numbering#ayah_count), [`ayah_fragment`](/docs/terms/dictionary/mushaf#ayah_fragment), [`ayah_numbering_basri`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri), [`ayah_numbering_dimashqi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi), [`ayah_numbering_kufi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi), [`ayah_numbering_madani_first`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first), [`ayah_numbering_madani_last`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last), [`ayah_numbering_makki`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki), [`ayah_timing`](/docs/terms/dictionary/recitation#ayah_timing), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah), [`mutashabihat`](/docs/terms/dictionary/quranic_sciences#mutashabihat), [`quran`](/docs/terms/dictionary/core#quran), [`quran_merits`](/docs/terms/dictionary/quranic_sciences#quran_merits), [`reflection`](/docs/terms/dictionary/quranic_sciences#reflection), [`sajdah`](/docs/terms/dictionary/structure#sajdah), [`tafsir`](/docs/terms/dictionary/tafsir#tafsir), [`tafsir_mathur`](/docs/terms/dictionary/tafsir#tafsir_mathur), [`word_meanings`](/docs/terms/dictionary/quranic_sciences#word_meanings)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/140`

### Ayah Ending — الفاصلة [#ayah_ending]

<!-- source: standards/terminology/concepts/ayah_ending.yml -->

| field | value |
| --- | --- |
| `code` | `ayah_ending` |
| `plural` | `ayah_endings` |
| `kind` | `concept` |
| Origin | `borrowed` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الفَاصِلَة |
| Other spellings | `fasila` |
| English gloss | `Verse Ending` |

**Definition:** The close of an ayah or a passage as a matter of its composition; some scholars define it as the ayah's last word.

**Purpose:** Used in studies and datasets concerned with ayah endings and Quranic composition. It is never used as a synonym for `ayah`.

- The fasilah is the ayah's ending as a matter of the text; the ayah mark is the sign drawn in the mushaf for it.

**Related:** [`ayah`](/docs/terms/dictionary/structure#ayah), [`ayah_mark`](/docs/terms/dictionary/dabt#ayah_mark)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/153`

### Ayah Key [#ayah_key]

<!-- source: standards/terminology/concepts/ayah_key.yml -->

| field | value |
| --- | --- |
| `code` | `ayah_key` |
| `plural` | `ayah_keys` |
| `kind` | `property` |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Other spellings | `ayah_ref`, `ayah_reference`, `aya_key` |
| English gloss | `verse key` |

**Definition:** A textual identifier of an ayah joining its surah number and its number within it with a colon, in the form `2:255`; it is read only in the light of the ayah numbering system it rests on.

**Purpose:** Used as the key that joins data sources and carries a reference to an ayah between APIs and files; binding it to a numbering system stops one key from pointing at two places.

- The key is a reference, not an identity: changing the numbering system changes the key and not the ayah.
- The key is not the running number of the ayah across the whole mushaf.

**Related:** [`ayah`](/docs/terms/dictionary/structure#ayah), [`surah`](/docs/terms/dictionary/structure#surah), [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`word_key`](/docs/terms/dictionary/structure#word_key)

### Basmalah — البسملة [#basmalah]

<!-- source: standards/terminology/concepts/basmalah.yml -->

| field | value |
| --- | --- |
| `code` | `basmalah` |
| `plural` | `basmalahs` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | البَسْمَلَة |
| Other spellings | `basmala`, `bismillah` |

**Definition:** The formula «بسم الله الرحمن الرحيم» with which the surahs open, except surah al-Tawbah. It carries rulings and differences bound up with ayah counting.

**Purpose:** Used to identify the basmalah and to represent its position and its relation to the surah and to the ayah numbering system.

**Related:** [`surah`](/docs/terms/dictionary/structure#surah), [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`istiadhah`](/docs/terms/dictionary/recitation#istiadhah)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/30) — `30`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/145`

### Muqatta Letter — الحرف المقطع [#muqatta_letter]

<!-- source: standards/terminology/concepts/muqatta_letter.yml -->

| field | value |
| --- | --- |
| `code` | `muqatta_letter` |
| `plural` | `muqatta_letters` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الحَرْف المُقَطَّع |
| English gloss | `Disjointed Letters` |

**Definition:** Alphabetic letters that open certain surahs, such as Alif Laam Meem, Alif Laam Raa, Haa Meem and Kaaf Haa Yaa Ayn Saad.

**Purpose:** Used to identify these openings, keep them distinct, and tie them to their surahs and their positions in the text.

**Related:** [`surah`](/docs/terms/dictionary/structure#surah)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/113) — `113`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `3/361`

### Sajdah — السجدة [#sajdah]

<!-- source: standards/terminology/concepts/sajdah.yml -->

| field | value |
| --- | --- |
| `code` | `sajdah` |
| `plural` | `sajdahs` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | السَّجْدَة |
| Registry | [`sajdah`](/docs/terms/registries#sajdah) |
| Other spellings | `sajda`, `sajdah_place`, `mawdi_al_sajdah`, `sujud_al_tilawah`, `sajdat_al_tilawah` |
| English gloss | `Prostration`, `Prostration of Recitation` |

**Definition:** A place in the Quran at which the reader and the listener prostrate, ending at a particular ayah. The sajdahs are countable, fifteen by the common count, and some of them are disputed.

**Purpose:** Used to count the sajdahs, to tie each one to its surah, ayah and page, to attach the rulings and manner of the prostration to it, and to keep it apart from the mark drawn at it.

- The sajdah is the place in the text and the prostration at it, one thing; the sajdah mark is the sign drawn in the mushaf for it.

> Merged from `sajdah_place` and `sujud_al_tilawah`. The dictionary used to keep the place apart from the act; no software stores an act apart from its place, and the common name, "the fifteen sajdahs", names both at once. The reasoning is in the decision record.

**Related:** [`sajdah_mark`](/docs/terms/dictionary/dabt#sajdah_mark), [`sajdah_line`](/docs/terms/dictionary/dabt#sajdah_line), [`ayah`](/docs/terms/dictionary/structure#ayah), [`tilawah`](/docs/terms/dictionary/recitation#tilawah)

**Sources:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/381`

### Surah — السورة [#surah]

<!-- source: standards/terminology/concepts/surah.yml -->

| field | value |
| --- | --- |
| `code` | `surah` |
| `plural` | `surahs` |
| `kind` | `entity` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | السُّورَة |
| Registry | [`surahs`](/docs/terms/registries#surahs) |
| Other spellings | `sura`, `surat`, `soorah`, `suwar` |
| English gloss | `Chapter` |

**Definition:** A principal unit of the structure of the Quran, made up of ordered ayahs, with a name and a known place in the order of the mushaf.

**Purpose:** Used as the principal unit for organising the text and for attaching ayahs and surah-level data.

**Related:** [`ayah`](/docs/terms/dictionary/structure#ayah), [`surah_names`](/docs/terms/dictionary/quranic_sciences#surah_names), [`surah_group`](/docs/terms/dictionary/surah_classification#surah_group), [`revelation_classification`](/docs/terms/dictionary/revelation#revelation_classification), [`basmalah`](/docs/terms/dictionary/structure#basmalah), [`ayah_count`](/docs/terms/dictionary/ayah_numbering#ayah_count), [`ayah_key`](/docs/terms/dictionary/structure#ayah_key), [`mathani`](/docs/terms/dictionary/surah_classification#mathani), [`miun`](/docs/terms/dictionary/surah_classification#miun), [`mufassal`](/docs/terms/dictionary/surah_classification#mufassal), [`muqatta_letter`](/docs/terms/dictionary/structure#muqatta_letter), [`quran`](/docs/terms/dictionary/core#quran), [`quran_merits`](/docs/terms/dictionary/quranic_sciences#quran_merits), [`revelation_order`](/docs/terms/dictionary/revelation#revelation_order), [`saba_tiwal`](/docs/terms/dictionary/surah_classification#saba_tiwal), [`surah_name_reason`](/docs/terms/dictionary/quranic_sciences#surah_name_reason), [`surah_objectives`](/docs/terms/dictionary/quranic_sciences#surah_objectives)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/140`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/178`

### Word Key [#word_key]

<!-- source: standards/terminology/concepts/word_key.yml -->

| field | value |
| --- | --- |
| `code` | `word_key` |
| `plural` | `word_keys` |
| `kind` | `property` |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Other spellings | `wid`, `data_wid`, `word_ref`, `word_position_key` |

**Definition:** A textual identifier of a word that adds the word's position within the ayah to the ayah key, in the form `2:255:5`; the position is counted from the start of the ayah by a declared segmentation method.

**Purpose:** Used as the key for data attached to the word: timing, word-by-word translation, morphological analysis and images.

- The position in the key is the word's, not the token's; changing the segmentation method that counts the words changes the key.

**Related:** [`ayah_key`](/docs/terms/dictionary/structure#ayah_key), [`word`](/docs/terms/dictionary/text#word), [`word_timing`](/docs/terms/dictionary/recitation#word_timing), [`word_by_word_translation`](/docs/terms/dictionary/translation#word_by_word_translation)

**Sources:**

- مصحف حفص — كلمة كلمة — `word_attributes!data-wid`

