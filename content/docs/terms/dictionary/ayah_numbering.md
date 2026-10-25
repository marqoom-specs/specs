---
title: "Ayah numbering"
description: "ayah_numbering"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Ayah Count — عدد الآيات [#ayah_count]

<!-- source: standards/terminology/concepts/ayah_count.yml -->

| field | value |
| --- | --- |
| `code` | `ayah_count` |
| `plural` | `ayah_counts` |
| `kind` | `property` |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | عَدَد الآيَات |
| Registry | [`ayah_counts`](/docs/terms/registries#ayah_counts) |
| Other spellings | `ayat_count`, `number_of_ayahs`, `adad_al_ayat`, `adad_al_ay` |
| English gloss | `verse count` |

**Definition:** The number of ayahs in a surah under a given numbering system; it may differ from one system to another as the counted fasilahs differ.

**Purpose:** Used to check references and surah boundaries and to build indexes; it is read from the registry of counts, not computed from one text.

- The count belongs to the surah under a numbering system, not to the mushaf.

> The code name follows `ayah_numbering_*` and the registry's name, not a derivation of «عَدَد الآيَات»; the concept is one of modelling, though the count of ayahs has its origin in the science of counting.

**Related:** [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`surah`](/docs/terms/dictionary/structure#surah), [`ayah`](/docs/terms/dictionary/structure#ayah)

**Sources:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`

### Basri Numbering — العد البصري [#ayah_numbering_basri]

<!-- source: standards/terminology/concepts/ayah_numbering_basri.yml -->

| field | value |
| --- | --- |
| `code` | `basri` |
| `kind` | `classification_value` |
| Parent | [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | العَدّ البَصْرِيّ |
| Other spellings | `basri_numbering`, `basran`, `basran_numbering` |

**Definition:** The Basran numbering system, transmitted from Asim al-Jahdari and the Basran authorities before him.

**Purpose:** Used as a value of the ayah numbering system, so that a mushaf or dataset states which numbering its ayah numbers and boundaries follow, and positions can be mapped between systems.

> The code is `basri` alone, because a value's name is unique within its classification, not across the dictionary (§14): a column holds one classification's values, so `makki` here is never confused with `makki` in `revelation_classification`. The entry's id is `ayah_numbering_basri`, the parent's name plus the code, so that two entries sharing a name have different addresses. The code is not derived from «العَدّ» because that gives `add`, an English verb. The reasoning is in the decision record.

**Related:** [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`ayah`](/docs/terms/dictionary/structure#ayah), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah)

**Sources:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/80`

### Dimashqi Numbering — العد الدمشقي [#ayah_numbering_dimashqi]

<!-- source: standards/terminology/concepts/ayah_numbering_dimashqi.yml -->

| field | value |
| --- | --- |
| `code` | `dimashqi` |
| `kind` | `classification_value` |
| Parent | [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | العَدّ الدِّمَشْقِيّ |
| Other spellings | `dimashqi_numbering`, `shami`, `shami_numbering`, `damascene`, `ayah_numbering_shami` |
| Display evidence | GitHub phrase search: dimashqi numbering 0 vs shami numbering 0. No form is established, so the display follows the code; `shami` stays an alias. |

**Definition:** The Damascene numbering system, transmitted from Yahya ibn al-Harith al-Dhimari from Ibn Amir; also called the Shami numbering.

**Purpose:** Used as a value of the ayah numbering system, so that a mushaf or dataset states which numbering its ayah numbers and boundaries follow, and positions can be mapped between systems.

> The code is `dimashqi` alone, because a value's name is unique within its classification, not across the dictionary (§14): a column holds one classification's values, so `makki` here is never confused with `makki` in `revelation_classification`. The entry's id is `ayah_numbering_dimashqi`, the parent's name plus the code, so that two entries sharing a name have different addresses. The code is not derived from «العَدّ» because that gives `add`, an English verb. The reasoning is in the decision record.

**Related:** [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`ayah`](/docs/terms/dictionary/structure#ayah), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah)

**Sources:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/82`

### Kufi Numbering — العد الكوفي [#ayah_numbering_kufi]

<!-- source: standards/terminology/concepts/ayah_numbering_kufi.yml -->

| field | value |
| --- | --- |
| `code` | `kufi` |
| `kind` | `classification_value` |
| Parent | [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | العَدّ الكُوفِيّ |
| Other spellings | `kufi_numbering`, `kufan`, `kufan_numbering` |

**Definition:** The Kufan numbering system, transmitted from Hamzah al-Zayyat from Ibn Abi Layla from Abu Abd al-Rahman al-Sulami from Ali ibn Abi Talib. It is the numbering most printed mushafs follow today.

**Purpose:** Used as a value of the ayah numbering system, so that a mushaf or dataset states which numbering its ayah numbers and boundaries follow, and positions can be mapped between systems.

> The code is `kufi` alone, because a value's name is unique within its classification, not across the dictionary (§14): a column holds one classification's values, so `makki` here is never confused with `makki` in `revelation_classification`. The entry's id is `ayah_numbering_kufi`, the parent's name plus the code, so that two entries sharing a name have different addresses. The code is not derived from «العَدّ» because that gives `add`, an English verb. The reasoning is in the decision record.

**Related:** [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`ayah`](/docs/terms/dictionary/structure#ayah), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah)

**Sources:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/80`

### First Madani Numbering — العد المدني الأول [#ayah_numbering_madani_first]

<!-- source: standards/terminology/concepts/ayah_numbering_madani_first.yml -->

| field | value |
| --- | --- |
| `code` | `madani_first` |
| `kind` | `classification_value` |
| Parent | [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | العَدّ المَدَنِيّ الأَوَّل |
| Other spellings | `ayah_numbering_madani_awwal`, `madani_awwal`, `first_madani`, `first_madinan`, `madani_first_numbering` |

**Definition:** The earlier Madinan numbering system, that of Abu Jafar Yazid ibn al-Qaqa and Shaybah ibn Nassah.

**Purpose:** Used as a value of the ayah numbering system, so that a mushaf or dataset states which numbering its ayah numbers and boundaries follow, and positions can be mapped between systems.

> The code is `madani_first` alone, because a value's name is unique within its classification, not across the dictionary (§14): a column holds one classification's values, so `makki` here is never confused with `makki` in `revelation_classification`. The entry's id is `ayah_numbering_madani_first`, the parent's name plus the code, so that two entries sharing a name have different addresses. The code is not derived from «العَدّ» because that gives `add`, an English verb. The reasoning is in the decision record.

**Related:** [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`ayah`](/docs/terms/dictionary/structure#ayah), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah)

**Sources:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`

### Last Madani Numbering — العد المدني الأخير [#ayah_numbering_madani_last]

<!-- source: standards/terminology/concepts/ayah_numbering_madani_last.yml -->

| field | value |
| --- | --- |
| `code` | `madani_last` |
| `kind` | `classification_value` |
| Parent | [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | العَدّ المَدَنِيّ الأَخِير |
| Other spellings | `ayah_numbering_madani_akhir`, `madani_akhir`, `last_madani`, `last_madinan`, `madani_last_numbering` |

**Definition:** The later Madinan numbering system, that of Ismail ibn Jafar from Sulayman ibn Jammaz.

**Purpose:** Used as a value of the ayah numbering system, so that a mushaf or dataset states which numbering its ayah numbers and boundaries follow, and positions can be mapped between systems.

> The code is `madani_last` alone, because a value's name is unique within its classification, not across the dictionary (§14): a column holds one classification's values, so `makki` here is never confused with `makki` in `revelation_classification`. The entry's id is `ayah_numbering_madani_last`, the parent's name plus the code, so that two entries sharing a name have different addresses. The code is not derived from «العَدّ» because that gives `add`, an English verb. The reasoning is in the decision record.

**Related:** [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`ayah`](/docs/terms/dictionary/structure#ayah), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah)

**Sources:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`

### Makki Numbering — العد المكي [#ayah_numbering_makki]

<!-- source: standards/terminology/concepts/ayah_numbering_makki.yml -->

| field | value |
| --- | --- |
| `code` | `makki` |
| `kind` | `classification_value` |
| Parent | [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | العَدّ المَكِّيّ |
| Other spellings | `makki_numbering`, `makkan`, `meccan_numbering` |

**Definition:** The Makkan numbering system, transmitted from Ibn Kathir from Mujahid from Ibn Abbas from Ubayy ibn Kab.

**Purpose:** Used as a value of the ayah numbering system, so that a mushaf or dataset states which numbering its ayah numbers and boundaries follow, and positions can be mapped between systems.

> The code is `makki` alone, because a value's name is unique within its classification, not across the dictionary (§14): a column holds one classification's values, so `makki` here is never confused with `makki` in `revelation_classification`. The entry's id is `ayah_numbering_makki`, the parent's name plus the code, so that two entries sharing a name have different addresses. The code is not derived from «العَدّ» because that gives `add`, an English verb. The reasoning is in the decision record.

**Related:** [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`ayah`](/docs/terms/dictionary/structure#ayah), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah)

**Sources:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`

### Ayah Numbering System — نظام عد الآي [#ayah_numbering_system]

<!-- source: standards/terminology/concepts/ayah_numbering_system.yml -->

| field | value |
| --- | --- |
| `code` | `ayah_numbering_system` |
| `plural` | `ayah_numbering_systems` |
| `kind` | `classification` |
| Values | [`ayah_numbering_basri`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri), [`ayah_numbering_dimashqi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi), [`ayah_numbering_kufi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi), [`ayah_numbering_madani_first`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first), [`ayah_numbering_madani_last`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last), [`ayah_numbering_makki`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | نِظَام عَدّ الآي |
| Registry | [`ayah_numbering`](/docs/terms/registries#ayah_numbering) |
| Other spellings | `ayah_counting_system` |

**Definition:** A system that fixes the boundaries of the ayahs, their totals and their numbers, and certain questions about the basmalah, as transmitted by one of the schools of ayah counting.

**Purpose:** Used to state which numbering system a mushaf's or a dataset's ayah numbers and boundaries follow.

**Related:** [`ayah`](/docs/terms/dictionary/structure#ayah), [`equivalent_ayah`](/docs/terms/dictionary/ayah_numbering#equivalent_ayah), [`basmalah`](/docs/terms/dictionary/structure#basmalah), [`ayah_count`](/docs/terms/dictionary/ayah_numbering#ayah_count), [`ayah_numbering_kufi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi), [`ayah_numbering_basri`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri), [`ayah_numbering_dimashqi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi), [`ayah_numbering_makki`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki), [`ayah_numbering_madani_first`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first), [`ayah_numbering_madani_last`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last), [`ayah_key`](/docs/terms/dictionary/structure#ayah_key), [`ayah_mark`](/docs/terms/dictionary/dabt#ayah_mark), [`qiraah`](/docs/terms/dictionary/qiraat#qiraah)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/31) — `31`
- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/225`

### Equivalent Ayah — الآية المقابلة [#equivalent_ayah]

<!-- source: standards/terminology/concepts/equivalent_ayah.yml -->

| field | value |
| --- | --- |
| `code` | `equivalent_ayah` |
| `plural` | `equivalent_ayahs` |
| `kind` | `concept` |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الآيَة المُقَابِلَة |

**Definition:** The ayah in one numbering system that corresponds to an ayah in another. Their numbers may differ, because the systems divide the text at different points.

**Purpose:** Used to map ayah numbers across numbering systems, so that data built on one system is never compared with data built on another by number alone.

- This is a correspondence between two numbering systems, not a similarity of wording or a repetition of text.

**Related:** [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system), [`ayah`](/docs/terms/dictionary/structure#ayah), [`mutashabihat`](/docs/terms/dictionary/quranic_sciences#mutashabihat), [`ayah_numbering_basri`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri), [`ayah_numbering_dimashqi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi), [`ayah_numbering_kufi`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi), [`ayah_numbering_madani_first`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first), [`ayah_numbering_madani_last`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last), [`ayah_numbering_makki`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki)

**Sources:**

- [qiraat-ayah-map](https://github.com/quranpedia/qiraat-ayah-map)

