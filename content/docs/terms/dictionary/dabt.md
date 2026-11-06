---
title: "Dabt and Mushaf marks"
description: "dabt"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Ayah Mark — علامة الآية [#ayah_mark]

<!-- source: standards/terminology/concepts/ayah_mark.yml -->

| field | value |
| --- | --- |
| `code` | `ayah_mark` |
| `kind` | `mark` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | عَلَامَة الآيَة |
| Dabt name | عَلَامَة رَأْس الآيَة |
| Name by shape | دَارَة |
| Mushaf introduction name | عَلَامَة رَأْس الآيَة |
| Symbol | ۝ |
| Characters | `U+06DD` ARABIC END OF AYAH |
| Mark family | `mustaqill` |
| Other spellings | `end_of_ayah`, `ayah_marker`, `ayah_separator` |

**Definition:** The circle separating one ayah from the next. It is placed at the ayah's end and, in most mushafs, carries its number.

**Purpose:** Used to mark an ayah's boundary in the written text; it is the sign from which a renderer or an analyser reads where an ayah ends and what its number is.

- The mark is something drawn in the mushaf; the ayah ending is the close of the ayah as a matter of the text itself.
- The number inside the circle follows an ayah numbering system and is not part of the mark.

**Related:** [`ayah`](/docs/terms/dictionary/structure#ayah), [`ayah_ending`](/docs/terms/dictionary/structure#ayah_ending), [`ayah_numbering_system`](/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)

### Dagger Alif — الألف الخنجرية [#dagger_alif]

<!-- source: standards/terminology/concepts/omitted_alif.yml -->

| field | value |
| --- | --- |
| `code` | `dagger_alif` |
| `kind` | `mark` |
| Parent | [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الأَلِف الخَنْجَرِيَّة |
| Dabt name | الأَلِف المَحْذُوفَة — أَلِف صَغِيرَة قَائِمَة |
| Name by shape | أَلِف صَغِيرَة قَائِمَة فَوْق الحَرْف |
| Mushaf introduction name | مِنَ الحُرُوف الصَّغِيرَة الدَّالَّة على المَتْرُوك مِنَ الرَّسْم |
| Symbol | ا صَغِيرَة قَائِمَة |
| Characters | `U+0670` ARABIC LETTER SUPERSCRIPT ALEF |
| Mark family | `imlaiyyah` |
| Other spellings | `alif_mahdhufah`, `small-alef`, `small_alef`, `small_alif`, `superscript_alif` |
| Deprecated names | `omitted_alif` |

**Definition:** Restores an alif omitted from the Uthmani skeleton but obligatory in pronunciation.

**Purpose:** Used as a value of the orthographic marks, so that software can tell where the rasm departs from the pronunciation.

> `omitted_alif` («الألف المحذوفة») was this mark's name until November 2026; it was renamed to the name in common use, the one [rule 015](/docs/terms/standard#rule-015) uses, so it is deprecated.

**Related:** [`rasm`](/docs/terms/dictionary/mushaf#rasm), [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!small-alef`

### Dammah — الضمة [#dammah]

<!-- source: standards/terminology/concepts/dammah.yml -->

| field | value |
| --- | --- |
| `code` | `dammah` |
| `kind` | `mark` |
| Parent | [`harakah`](/docs/terms/dictionary/dabt#harakah) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الضَّمَّة |
| Dabt name | الضَّمَّة (وتُسمَّى قديمًا الرَّفْعَة) |
| Name by shape | وَاو صَغِيرَة فَوْق الحَرْف |
| Symbol | ـُ |
| Characters | `U+064F` ARABIC DAMMA |
| Mark family | `harakah` |
| Other spellings | `damma` |

**Definition:** The mark for the short vowel u on the letter.

**Purpose:** Used as a value of harakah, so that a letter's pronunciation is read from it in analysis, rendering and teaching rather than from the shape of the mark.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!damma`

### Division Mark — علامة التقسيم [#division_mark]

<!-- source: standards/terminology/concepts/division_mark.yml -->

| field | value |
| --- | --- |
| `code` | `division_mark` |
| `kind` | `mark` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | عَلَامَة التَّقْسِيم |
| Dabt name | عَلَامَة التَّحْزِيب |
| Name by shape | نَجْمَة مُثَمَّنَة |
| Mushaf introduction name | عَلَامَة بِدَايَة الأَجْزَاء والأَحْزَاب وأَنْصَافِها وأَرْبَاعِها |
| Symbol | نَجْمَة |
| Characters | `U+06DE` ARABIC START OF RUB EL HIZB |
| Mark family | `mustaqill` |
| Other spellings | `hizb_mark`, `juz_mark`, `rub_el_hizb_mark`, `rub_mark` |
| Deprecated names | `alamat_al_tahzib` |

**Definition:** Marks the start of a juz, a hizb, or a half or quarter of one.

**Purpose:** Used as a mark of the mushaf, so that rendering and analysis know where it sits and what it points to.

- The division mark is a sign in the mushaf; the juz, the hizb and its quarters are divisions of the text it points to.

> `alamat_al_tahzib` was a separate entry defining the same thing; it was merged into this one.

**Related:** [`hizb`](/docs/terms/dictionary/divisions#hizb), [`rubu_al_hizb`](/docs/terms/dictionary/divisions#rubu_al_hizb), [`juz`](/docs/terms/dictionary/divisions#juz)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!hizb`

### Dot — النقطة [#dot]

<!-- source: standards/terminology/concepts/dot.yml -->

| field | value |
| --- | --- |
| `code` | `dot` |
| `kind` | `mark` |
| Parent | [`ijam`](/docs/terms/dictionary/dabt#ijam) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | النُّقْطَة |
| Dabt name | نَقْط الإِعْجَام — النُّقْطَة |
| Name by shape | نُقْطَة وَاحِدَة |
| Symbol | نُقْطَة وَاحِدَة |
| Mark family | `ijam` |
| Other spellings | `nuqtah` |

**Definition:** One dot, above or below, distinguishing a letter from the others that share its skeleton (ijam): baa, noon, jeem, khaa, dhaal.

**Purpose:** Used as a value of ijam, so that a letter is told apart from those sharing its skeleton in analysis and in search.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!dot`

### Fathah — الفتحة [#fathah]

<!-- source: standards/terminology/concepts/fathah.yml -->

| field | value |
| --- | --- |
| `code` | `fathah` |
| `kind` | `mark` |
| Parent | [`harakah`](/docs/terms/dictionary/dabt#harakah) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الفَتْحَة |
| Dabt name | الفَتْحَة (وتُسمَّى قديمًا النَّصْبَة) |
| Name by shape | أَلِف مُضْجَعَة فَوْق الحَرْف |
| Symbol | ـَ |
| Characters | `U+064E` ARABIC FATHA |
| Mark family | `harakah` |
| Other spellings | `fatha` |

**Definition:** The mark for the short vowel a on the letter.

**Purpose:** Used as a value of harakah, so that a letter's pronunciation is read from it in analysis, rendering and teaching rather than from the shape of the mark.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!fatha`

### Hamzah — الهمزة [#hamzah]

<!-- source: standards/terminology/concepts/hamzah.yml -->

| field | value |
| --- | --- |
| `code` | `hamzah` |
| `kind` | `mark` |
| Parent | [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الهَمْزَة |
| Dabt name | الهَمْزَة — رَأْس العَيْن |
| Name by shape | رَأْس عَيْن |
| Symbol | ء |
| Characters | `U+0621` ARABIC LETTER HAMZA, `U+0654` ARABIC HAMZA ABOVE, `U+0655` ARABIC HAMZA BELOW |
| Mark family | `imlaiyyah` |
| Other spellings | `hamza` |

**Definition:** Marks a fully realised hamzah (hamzat al-qat).

**Purpose:** Used as a value of the orthographic marks, so that software can tell where the rasm departs from the pronunciation.

**Related:** [`hamzat_al_wasl`](/docs/terms/dictionary/dabt#hamzat_al_wasl), [`madd_al_badal`](/docs/terms/dictionary/tajwid#madd_al_badal), [`madd_munfasil`](/docs/terms/dictionary/tajwid#madd_munfasil), [`madd_muttasil`](/docs/terms/dictionary/tajwid#madd_muttasil)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!hamza`

### Hamzat al-Wasl — همزة الوصل [#hamzat_al_wasl]

<!-- source: standards/terminology/concepts/hamzat_al_wasl.yml -->

| field | value |
| --- | --- |
| `code` | `hamzat_al_wasl` |
| `kind` | `mark` |
| Parent | [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | هَمْزَة الوَصْل |
| Dabt name | رَأْس الصَّاد (من «صِلَة») — عَلَامَة هَمْزَة الوَصْل |
| Name by shape | رَأْس صَاد فَوْق الأَلِف |
| Mushaf introduction name | رَأْس صَاد صَغِيرَة فَوْق أَلِف الوَصْل |
| Symbol | ص صَغِيرَة فَوْق الأَلِف |
| Characters | `U+0671` ARABIC LETTER ALEF WASLA |
| Mark family | `imlaiyyah` |
| Other spellings | `alif_wasl`, `hamzat_wasl`, `wasl`, `wasla` |

**Definition:** Marks a connecting hamzah, dropped whenever the word is reached in continuation.

**Purpose:** Used as a value of the orthographic marks, so that software can tell where the rasm departs from the pronunciation.

**Related:** [`hamzah`](/docs/terms/dictionary/dabt#hamzah)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!wasla`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/127) — `127`

### Harakah — الحركة [#harakah]

<!-- source: standards/terminology/concepts/harakah.yml -->

| field | value |
| --- | --- |
| `code` | `harakah` |
| `kind` | `classification` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Values | [`dammah`](/docs/terms/dictionary/dabt#dammah), [`fathah`](/docs/terms/dictionary/dabt#fathah), [`kasrah`](/docs/terms/dictionary/dabt#kasrah), [`shaddah`](/docs/terms/dictionary/dabt#shaddah), [`sukun`](/docs/terms/dictionary/dabt#sukun) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الحَرَكَة |
| Other spellings | `haraka`, `harakat` |
| English gloss | `Vowel Mark`, `diacritics` |

**Definition:** A mark fixing a letter's vowel, its absence or its doubling: fathah, dammah, kasrah, sukun and shaddah.

**Purpose:** Used as the parent of the dabt marks that determine how the letter itself is pronounced.

**Related:** [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark), [`tanwin`](/docs/terms/dictionary/dabt#tanwin), [`tashkil`](/docs/terms/dictionary/dabt#tashkil), [`shaddah`](/docs/terms/dictionary/dabt#shaddah), [`sukun`](/docs/terms/dictionary/dabt#sukun)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/151`

### Ijam — الإعجام [#ijam]

<!-- source: standards/terminology/concepts/ijam.yml -->

| field | value |
| --- | --- |
| `code` | `ijam` |
| `kind` | `classification` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Values | [`dot`](/docs/terms/dictionary/dabt#dot), [`three_dots`](/docs/terms/dictionary/dabt#three_dots), [`two_dots`](/docs/terms/dictionary/dabt#two_dots) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الإِعْجَام |

**Definition:** The dotting that distinguishes a letter from the letters that share its written shape.

**Purpose:** Used as the parent of the dot shapes, which are told apart by their number and position rather than by their function.

**Related:** [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark), [`letter`](/docs/terms/dictionary/text#letter), [`tashkil`](/docs/terms/dictionary/dabt#tashkil)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/151`

### Imalah — الإمالة [#imalah]

<!-- source: standards/terminology/concepts/imalah.yml -->

| field | value |
| --- | --- |
| `code` | `imalah` |
| `kind` | `mark` |
| Parent | [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الإِمَالَة |
| Dabt name | الإِمَالَة — النُّقْطَة تَحْت الحَرْف |
| Name by shape | نُقْطَة كَبِيرَة مَطْمُوسَة تَحْت الحَرْف |
| Mushaf introduction name | نُقْطَة كَبِيرَة مَطْمُوسَة الوَسَط تَحْت الحَرْف |
| Symbol | نُقْطَة تَحْت الحَرْف |
| Characters | `U+06EA` ARABIC EMPTY CENTRE LOW STOP |
| Mark family | `alamat_qiraah` |

**Definition:** Marks the major imalah: a fathah pronounced leaning toward kasrah. In the riwayah of Hafs it occurs at one place only (11:41).

**Purpose:** Used as a value of the qiraah marks, so that the reader is alerted to a particular delivery at its place.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!imalah`

### Ishmam — الإشمام [#ishmam]

<!-- source: standards/terminology/concepts/ishmam.yml -->

| field | value |
| --- | --- |
| `code` | `ishmam` |
| `kind` | `mark` |
| Parent | [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الإِشْمَام |
| Dabt name | الإِشْمَام |
| Name by shape | نُقْطَة كَبِيرَة مَطْمُوسَة فَوْق الحَرْف |
| Mushaf introduction name | النُّقْطَة المَذْكُورَة فَوْق آخِر المِيم |
| Symbol | نُقْطَة فَوْق الحَرْف |
| Characters | `U+06EC` ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE |
| Mark family | `alamat_qiraah` |

**Definition:** Marks ishmam: the lips are rounded to hint at a dropped dammah, without any sound.

**Purpose:** Used as a value of the qiraah marks, so that the reader is alerted to a particular delivery at its place.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!ishmam`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/131) — `131`

### Kasrah — الكسرة [#kasrah]

<!-- source: standards/terminology/concepts/kasrah.yml -->

| field | value |
| --- | --- |
| `code` | `kasrah` |
| `kind` | `mark` |
| Parent | [`harakah`](/docs/terms/dictionary/dabt#harakah) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الكَسْرَة |
| Dabt name | الكَسْرَة (وتُسمَّى قديمًا الخَفْضَة) |
| Name by shape | أَلِف مُضْجَعَة تَحْت الحَرْف |
| Symbol | ـِ |
| Characters | `U+0650` ARABIC KASRA |
| Mark family | `harakah` |
| Other spellings | `kasra` |

**Definition:** The mark for the short vowel i on the letter.

**Purpose:** Used as a value of harakah, so that a letter's pronunciation is read from it in analysis, rendering and teaching rather than from the shape of the mark.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!kasra`

### Maddah — المدة [#maddah]

<!-- source: standards/terminology/concepts/maddah.yml -->

| field | value |
| --- | --- |
| `code` | `maddah` |
| `kind` | `mark` |
| Parent | [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المَدَّة |
| Dabt name | عَلَامَة المَدّ — المَدَّة |
| Name by shape | خَطّ مُتَمَوِّج مَمْدُود فَوْق الحَرْف |
| Mushaf introduction name | عَلَامَة المَدّ |
| Symbol | خَطّ المَدّ |
| Characters | `U+0653` ARABIC MADDAH ABOVE, `U+06E4` ARABIC SMALL HIGH MADDA |
| Mark family | `imlaiyyah` |
| Other spellings | `madda` |

**Definition:** Marks that the letter is lengthened beyond the natural madd.

**Purpose:** Used as a value of the orthographic marks, so that software can tell where the rasm departs from the pronunciation.

**Related:** [`madd`](/docs/terms/dictionary/tajwid#madd)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!maddah`

### Mushaf Mark — علامة المصحف [#mushaf_mark]

<!-- source: standards/terminology/concepts/mushaf_mark.yml -->

| field | value |
| --- | --- |
| `code` | `mushaf_mark` |
| `kind` | `classification` |
| Values | [`ayah_mark`](/docs/terms/dictionary/dabt#ayah_mark), [`division_mark`](/docs/terms/dictionary/dabt#division_mark), [`harakah`](/docs/terms/dictionary/dabt#harakah), [`ijam`](/docs/terms/dictionary/dabt#ijam), [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark), [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark), [`rectangular_zero`](/docs/terms/dictionary/dabt#rectangular_zero), [`rounded_zero`](/docs/terms/dictionary/dabt#rounded_zero), [`sajdah_line`](/docs/terms/dictionary/dabt#sajdah_line), [`sajdah_mark`](/docs/terms/dictionary/dabt#sajdah_mark), [`small_meem`](/docs/terms/dictionary/dabt#small_meem), [`tanwin`](/docs/terms/dictionary/dabt#tanwin), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark) |
| Origin | `standard` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | عَلَامَة المُصْحَف |

**Definition:** A sign or mark that is not one of a word's original letters, used in the mushaf for reading, organisation or guidance.

**Purpose:** Gives the different marks one parent, instead of treating them as unrelated kinds.

**Related:** [`harakah`](/docs/terms/dictionary/dabt#harakah), [`tanwin`](/docs/terms/dictionary/dabt#tanwin), [`ijam`](/docs/terms/dictionary/dabt#ijam), [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark), [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark), [`rasm`](/docs/terms/dictionary/mushaf#rasm), [`tashkil`](/docs/terms/dictionary/dabt#tashkil)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### Orthographic Mark — العلامة الإملائية [#orthographic_mark]

<!-- source: standards/terminology/concepts/orthographic_mark.yml -->

| field | value |
| --- | --- |
| `code` | `orthographic_mark` |
| `kind` | `classification` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Values | [`dagger_alif`](/docs/terms/dictionary/dabt#dagger_alif), [`hamzah`](/docs/terms/dictionary/dabt#hamzah), [`hamzat_al_wasl`](/docs/terms/dictionary/dabt#hamzat_al_wasl), [`maddah`](/docs/terms/dictionary/dabt#maddah), [`small_noon`](/docs/terms/dictionary/dabt#small_noon), [`small_waw`](/docs/terms/dictionary/dabt#small_waw), [`small_yaa`](/docs/terms/dictionary/dabt#small_yaa) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | العَلَامَة الإِمْلَائِيَّة |

**Definition:** A mark fixing how a word is written, such as the hamzah, the maddah and the small letters.

**Purpose:** Used as the parent of the marks that concern how a word is written, rather than its vowel or how it is stopped on.

**Related:** [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark), [`rasm`](/docs/terms/dictionary/mushaf#rasm), [`dagger_alif`](/docs/terms/dictionary/dabt#dagger_alif)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/134) — `134`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`

### Qiraah Mark — علامة القراءة [#qiraah_mark]

<!-- source: standards/terminology/concepts/qiraah_mark.yml -->

| field | value |
| --- | --- |
| `code` | `qiraah_mark` |
| `kind` | `classification` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Values | [`imalah`](/docs/terms/dictionary/dabt#imalah), [`ishmam`](/docs/terms/dictionary/dabt#ishmam), [`saktah_mark`](/docs/terms/dictionary/dabt#saktah_mark), [`seen_al_qiraah`](/docs/terms/dictionary/dabt#seen_al_qiraah), [`tashil`](/docs/terms/dictionary/dabt#tashil) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | عَلَامَة القِرَاءَة |

**Definition:** A mark pointing to a particular manner of delivery at its place, such as saktah, ishmam and tashil.

**Purpose:** Used as the parent of the marks that alert the reader to a particular delivery rather than to the pointing of a letter.

**Related:** [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark), [`qiraah`](/docs/terms/dictionary/qiraat#qiraah), [`saktah_mark`](/docs/terms/dictionary/dabt#saktah_mark)

### Rectangular Zero — الصفر المستطيل [#rectangular_zero]

<!-- source: standards/terminology/concepts/rectangular_zero.yml -->

| field | value |
| --- | --- |
| `code` | `rectangular_zero` |
| `kind` | `mark` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الصِّفْر المُسْتَطِيل |
| Dabt name | الصِّفْر المُسْتَطِيل القَائِم |
| Name by shape | مُسْتَطِيل صَغِير قَائِم خَالِي الوَسَط |
| Mushaf introduction name | دَائِرَة قَائِمَة مُسْتَطِيلَة خَالِيَة الوَسَط |
| Symbol | مُسْتَطِيل قَائِم صَغِير |
| Characters | `U+06E0` ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO |
| Mark family | `dabt` |
| Other spellings | `sifr-mustatil`, `sifr_mustatil` |

**Definition:** Marks an alif dropped in continuation but pronounced when stopping on it.

**Purpose:** Used as a mark of the mushaf, so that rendering and analysis know where it sits and what it points to.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!sifr-mustatil`

### Rounded Zero — الصفر المستدير [#rounded_zero]

<!-- source: standards/terminology/concepts/rounded_zero.yml -->

| field | value |
| --- | --- |
| `code` | `rounded_zero` |
| `kind` | `mark` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الصِّفْر المُسْتَدِير |
| Dabt name | الصِّفْر المُسْتَدِير |
| Name by shape | دَائِرَة صَغِيرَة خَالِيَة الوَسَط |
| Mushaf introduction name | دَائِرَة صَغِيرَة خَالِيَة الوَسَط |
| Symbol | دَائِرَة صَغِيرَة |
| Characters | `U+06DF` ARABIC SMALL HIGH ROUNDED ZERO |
| Mark family | `dabt` |
| Other spellings | `sifr-mustadir`, `sifr_mustadir` |

**Definition:** Marks a letter present in the skeleton but never pronounced — neither in continuation nor when stopping.

**Purpose:** Used as a mark of the mushaf, so that rendering and analysis know where it sits and what it points to.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!sifr-mustadir`

### Sajdah Line — خط السجدة [#sajdah_line]

<!-- source: standards/terminology/concepts/sajdah_line.yml -->

| field | value |
| --- | --- |
| `code` | `sajdah_line` |
| `kind` | `mark` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | خَطّ السَّجْدَة |
| Dabt name | خَطّ مُوجِب السَّجْدَة |
| Name by shape | خَطّ أُفُقِيّ فَوْق الكَلِمَة |
| Mushaf introduction name | خَطّ أُفُقِيّ فَوْق الكَلِمَة الدَّالّ على مُوجِب السَّجْدَة |
| Symbol | خَطّ أُفُقِيّ |
| Mark family | `mustaqill` |
| Other spellings | `khatt_mujib_al_sajdah`, `sajdah-line` |

**Definition:** Marks the word that makes prostration due.

**Purpose:** Used as a mark of the mushaf, so that rendering and analysis know where it sits and what it points to.

**Related:** [`sajdah_mark`](/docs/terms/dictionary/dabt#sajdah_mark), [`sajdah`](/docs/terms/dictionary/structure#sajdah)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!sajdah-line`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/381`

### Sajdah Mark — علامة السجدة [#sajdah_mark]

<!-- source: standards/terminology/concepts/sajdah_mark.yml -->

| field | value |
| --- | --- |
| `code` | `sajdah_mark` |
| `kind` | `mark` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | عَلَامَة السَّجْدَة |
| Dabt name | عَلَامَة مَوْضِع السَّجْدَة — المِحْرَاب |
| Name by shape | مِحْرَاب صَغِير |
| Mushaf introduction name | عَلَامَة مَوْضِع السَّجْدَة |
| Symbol | مِحْرَاب |
| Mark family | `mustaqill` |
| Other spellings | `sajda_mark`, `sajda_sign`, `sajdah-sign`, `sajdah_sign` |
| Deprecated names | `alamat_mawdi_al_sajdah` |

**Definition:** Marks the point at which the reader prostrates.

**Purpose:** Used as a mark of the mushaf, so that rendering and analysis know where it sits and what it points to.

- The sajdah mark is a sign in the mushaf; the sajdah is the place in the text at which one prostrates.

> `alamat_mawdi_al_sajdah` was a separate entry defining the same thing; it was merged into this one.

**Related:** [`sajdah`](/docs/terms/dictionary/structure#sajdah), [`sajdah_line`](/docs/terms/dictionary/dabt#sajdah_line)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!sajdah-sign`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/381`

### Saktah Mark — علامة السكتة [#saktah_mark]

<!-- source: standards/terminology/concepts/saktah_mark.yml -->

| field | value |
| --- | --- |
| `code` | `saktah_mark` |
| `kind` | `mark` |
| Parent | [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | عَلَامَة السَّكْتَة |
| Dabt name | السِّين — عَلَامَة السَّكْت |
| Name by shape | سِين |
| Mushaf introduction name | السِّين فَوْق الحَرْف الأَخِير الدَّالَّة على السَّكْت |
| Symbol | س |
| Characters | `U+06DC` ARABIC SMALL HIGH SEEN |
| Mark family | `alamat_qiraah` |
| Other spellings | `alamat_al_sakt` |

**Definition:** Marks a saktah: a brief pause without taking a breath, then continuing.

**Purpose:** Used as a value of the qiraah marks, so that the reader is alerted to a particular delivery at its place.

- The saktah mark is a sign in the mushaf; the saktah is the pause itself.

**Related:** [`saktah`](/docs/terms/dictionary/tajwid#saktah), [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!saktah`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/126) — `126`

### Seen al-Qiraah — سين القراءة [#seen_al_qiraah]

<!-- source: standards/terminology/concepts/seen_al_qiraah.yml -->

| field | value |
| --- | --- |
| `code` | `seen_al_qiraah` |
| `kind` | `mark` |
| Parent | [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | سِين القِرَاءَة |
| Dabt name | السِّين الدَّالَّة على وَجْه القِرَاءَة |
| Name by shape | سِين فَوْق الصَّاد أو تَحْتَهَا |
| Mushaf introduction name | السِّين فَوْق الصَّاد أو تَحْتَهَا |
| Symbol | س |
| Characters | `U+06DC` ARABIC SMALL HIGH SEEN, `U+06E3` ARABIC SMALL LOW SEEN |
| Mark family | `alamat_qiraah` |
| Other spellings | `seen-reading`, `seen_reading`, `sin_qiraah` |
| Display evidence | letter name; unmeasurable directly, both forms are English words |

**Definition:** A small seen above a saad marks reading it as seen; below it, reading it as saad.

**Purpose:** Used as a value of the qiraah marks, so that the reader is alerted to a particular delivery at its place.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!seen-reading`

### Shaddah — الشدة [#shaddah]

<!-- source: standards/terminology/concepts/shaddah.yml -->

| field | value |
| --- | --- |
| `code` | `shaddah` |
| `kind` | `mark` |
| Parent | [`harakah`](/docs/terms/dictionary/dabt#harakah) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الشَّدَّة |
| Dabt name | الشَّدَّة — رَأْس الشِّين (من «شَدِيد») |
| Name by shape | رَأْس شِين بِلَا نُقَط |
| Mushaf introduction name | الشَّدَّة الدَّالَّة على الإِدْغَام |
| Symbol | ـّ |
| Characters | `U+0651` ARABIC SHADDA |
| Mark family | `harakah` |
| Other spellings | `shadda`, `tashdeed`, `tashdid` |

**Definition:** Marks a doubled letter: the first, vowelless, is merged into the second and the two are pronounced as one stressed letter.

**Purpose:** Used as a value of harakah, so that a letter's pronunciation is read from it in analysis, rendering and teaching rather than from the shape of the mark.

**Related:** [`harakah`](/docs/terms/dictionary/dabt#harakah), [`idgham`](/docs/terms/dictionary/tajwid#idgham)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!shadda`

### Small Meem — الميم الصغيرة [#small_meem]

<!-- source: standards/terminology/concepts/small_meem.yml -->

| field | value |
| --- | --- |
| `code` | `small_meem` |
| `kind` | `mark` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | المِيم الصَّغِيرَة |
| Dabt name | المِيم الصَّغِيرَة — عَلَامَة القَلْب |
| Name by shape | مِيم صَغِيرَة، عُلْيَا أو سُفْلَى |
| Mushaf introduction name | المِيم الصَّغِيرَة |
| Symbol | م صَغِيرَة |
| Characters | `U+06E2` ARABIC SMALL HIGH MEEM ISOLATED FORM, `U+06ED` ARABIC SMALL LOW MEEM |
| Mark family | `dabt` |
| Other spellings | `iqlab_meem`, `meem-iqlab`, `meem_iqlab`, `meem_saghirah`, `mim_saghirah` |
| Display evidence | GitHub phrase search: meem sakinah 308 vs mim sakinah 57 |

**Definition:** Marks iqlab: a vowelless noon or tanwin pronounced as meem before baa.

**Purpose:** Used as a mark of the mushaf, so that rendering and analysis know where it sits and what it points to.

**Related:** [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`iqlab`](/docs/terms/dictionary/tajwid#iqlab)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!meem-iqlab`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/86) — `86`

### Small Noon — النون الصغيرة [#small_noon]

<!-- source: standards/terminology/concepts/small_noon.yml -->

| field | value |
| --- | --- |
| `code` | `small_noon` |
| `kind` | `mark` |
| Parent | [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | النُّون الصَّغِيرَة |
| Dabt name | النُّون الصَّغِيرَة — الحَرْف المُلْحَق بالرَّسْم |
| Name by shape | نُون صَغِيرَة فَوْق السَّطْر |
| Mushaf introduction name | مِنَ الحُرُوف الصَّغِيرَة الدَّالَّة على المَتْرُوك مِنَ الرَّسْم |
| Symbol | ن صَغِيرَة |
| Characters | `U+06E8` ARABIC SMALL HIGH NOON |
| Mark family | `imlaiyyah` |
| Other spellings | `noon_saghirah`, `nun_saghirah`, `small-noon` |
| Display evidence | GitHub phrase search: noon sakinah 478 vs nun sakinah 118 |

**Definition:** Restores a noon omitted from the skeleton but obligatory in pronunciation, at one place only (21:88).

**Purpose:** Used as a value of the orthographic marks, so that software can tell where the rasm departs from the pronunciation.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!small-noon`

### Small Waw — الواو الصغيرة [#small_waw]

<!-- source: standards/terminology/concepts/small_waw.yml -->

| field | value |
| --- | --- |
| `code` | `small_waw` |
| `kind` | `mark` |
| Parent | [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَاو الصَّغِيرَة |
| Dabt name | الوَاو الصَّغِيرَة — عَلَامَة صِلَة هَاء الضَّمِير |
| Name by shape | وَاو صَغِيرَة بَعْد الهَاء |
| Mushaf introduction name | الوَاو الصَّغِيرَة |
| Symbol | و صَغِيرَة |
| Characters | `U+06E5` ARABIC SMALL WAW |
| Mark family | `imlaiyyah` |
| Other spellings | `small-waw`, `waw_saghirah` |

**Definition:** Marks the silah of the pronoun haa with dammah, pronounced as a waw in continuation.

**Purpose:** Used as a value of the orthographic marks, so that software can tell where the rasm departs from the pronunciation.

**Related:** [`madd_al_silah`](/docs/terms/dictionary/tajwid#madd_al_silah)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!small-waw`

### Small Yaa — الياء الصغيرة [#small_yaa]

<!-- source: standards/terminology/concepts/small_yaa.yml -->

| field | value |
| --- | --- |
| `code` | `small_yaa` |
| `kind` | `mark` |
| Parent | [`orthographic_mark`](/docs/terms/dictionary/dabt#orthographic_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | اليَاء الصَّغِيرَة |
| Dabt name | اليَاء الصَّغِيرَة — عَلَامَة صِلَة هَاء الضَّمِير |
| Name by shape | يَاء صَغِيرَة مَرْدُودَة بَعْد الهَاء |
| Mushaf introduction name | اليَاء الصَّغِيرَة المَرْدُودَة إِلى خَلْف |
| Symbol | ي صَغِيرَة |
| Characters | `U+06E6` ARABIC SMALL YEH, `U+06E7` ARABIC SMALL HIGH YEH |
| Mark family | `imlaiyyah` |
| Other spellings | `small-ya`, `small_ya`, `ya_saghirah`, `yaa_saghirah` |

**Definition:** Marks the silah of the pronoun haa with kasrah, pronounced as a yaa in continuation.

**Purpose:** Used as a value of the orthographic marks, so that software can tell where the rasm departs from the pronunciation.

**Related:** [`madd_al_silah`](/docs/terms/dictionary/tajwid#madd_al_silah)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!small-ya`

### Sukun — السكون [#sukun]

<!-- source: standards/terminology/concepts/sukun.yml -->

| field | value |
| --- | --- |
| `code` | `sukun` |
| `kind` | `mark` |
| Parent | [`harakah`](/docs/terms/dictionary/dabt#harakah) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | السُّكُون |
| Dabt name | السُّكُون — رَأْس الخَاء المُهْمَلَة |
| Name by shape | رَأْس خَاء بِلَا نُقْطَة |
| Mushaf introduction name | رَأْس خَاء صَغِيرَة دُون نُقْطَة |
| Symbol | ـْ |
| Characters | `U+0652` ARABIC SUKUN, `U+06E1` ARABIC SMALL HIGH DOTLESS HEAD OF KHAH |
| Mark family | `harakah` |
| Other spellings | `sukoon` |

**Definition:** Marks a letter that carries no vowel and is articulated clearly.

**Purpose:** Used as a value of harakah, so that a letter's pronunciation is read from it in analysis, rendering and teaching rather than from the shape of the mark.

**Related:** [`harakah`](/docs/terms/dictionary/dabt#harakah), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`madd_lazim`](/docs/terms/dictionary/tajwid#madd_lazim), [`qalqalah`](/docs/terms/dictionary/tajwid#qalqalah)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!sukun`

### Tanwin — التنوين [#tanwin]

<!-- source: standards/terminology/concepts/tanwin.yml -->

| field | value |
| --- | --- |
| `code` | `tanwin` |
| `kind` | `classification` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Values | [`tanwin_al_damm`](/docs/terms/dictionary/dabt#tanwin_al_damm), [`tanwin_al_fath`](/docs/terms/dictionary/dabt#tanwin_al_fath), [`tanwin_al_kasr`](/docs/terms/dictionary/dabt#tanwin_al_kasr) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّنْوِين |
| Other spellings | `tanween` |

**Definition:** An added vowelless noon at the end of a noun, written by doubling the shape of the vowel.

**Purpose:** Used as the parent of the three tanwin marks, gathering them instead of scattering them through one list.

**Related:** [`harakah`](/docs/terms/dictionary/dabt#harakah), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`iqlab`](/docs/terms/dictionary/tajwid#iqlab), [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark), [`tanwin_al_damm`](/docs/terms/dictionary/dabt#tanwin_al_damm), [`tanwin_al_fath`](/docs/terms/dictionary/dabt#tanwin_al_fath), [`tanwin_al_kasr`](/docs/terms/dictionary/dabt#tanwin_al_kasr)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`

### Tanwin al-Damm — تنوين الضم [#tanwin_al_damm]

<!-- source: standards/terminology/concepts/tanwin_al_damm.yml -->

| field | value |
| --- | --- |
| `code` | `tanwin_al_damm` |
| `kind` | `mark` |
| Parent | [`tanwin`](/docs/terms/dictionary/dabt#tanwin) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | تَنْوِين الضَّمّ |
| Dabt name | تَنْوِين الرَّفْع — الضَّمَّتَان |
| Name by shape | وَاوَان صَغِيرَتَان فَوْق الحَرْف |
| Mushaf introduction name | الحَرَكَتَان: تَرْكِيبًا أو تَتَابُعًا |
| Symbol | ـٌ |
| Characters | `U+064C` ARABIC DAMMATAN, `U+08F1` ARABIC OPEN DAMMATAN |
| Mark family | `tanwin` |
| Other spellings | `dammatan`, `tanween_damm`, `tanwin_al_rafa`, `tanwin_damm` |

**Definition:** Marks the un tanwin. Stacked marks signal izhar; staggered marks with a shaddah on the next letter signal complete idgham, and without one, incomplete idgham or ikhfa.

**Purpose:** Used as a value of tanwin, so that the pronunciation of the noun's ending and its ruling are read from it rather than from the shape of the mark.

**Related:** [`tanwin`](/docs/terms/dictionary/dabt#tanwin), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!dammatan`

### Tanwin al-Fath — تنوين الفتح [#tanwin_al_fath]

<!-- source: standards/terminology/concepts/tanwin_al_fath.yml -->

| field | value |
| --- | --- |
| `code` | `tanwin_al_fath` |
| `kind` | `mark` |
| Parent | [`tanwin`](/docs/terms/dictionary/dabt#tanwin) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | تَنْوِين الفَتْح |
| Dabt name | تَنْوِين النَّصْب — الفَتْحَتَان |
| Name by shape | أَلِفَان مُضْجَعَتَان فَوْق الحَرْف |
| Mushaf introduction name | الحَرَكَتَان: تَرْكِيبًا أو تَتَابُعًا |
| Symbol | ـً |
| Characters | `U+064B` ARABIC FATHATAN, `U+08F0` ARABIC OPEN FATHATAN |
| Mark family | `tanwin` |
| Other spellings | `fathatan`, `tanween_fath`, `tanwin_al_nasb`, `tanwin_fath` |

**Definition:** Marks the an tanwin. Stacked marks signal izhar; staggered marks with a shaddah on the next letter signal complete idgham, and without one, incomplete idgham or ikhfa.

**Purpose:** Used as a value of tanwin, so that the pronunciation of the noun's ending and its ruling are read from it rather than from the shape of the mark.

**Related:** [`tanwin`](/docs/terms/dictionary/dabt#tanwin), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah), [`madd_al_iwad`](/docs/terms/dictionary/tajwid#madd_al_iwad)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!fathatan`

### Tanwin al-Kasr — تنوين الكسر [#tanwin_al_kasr]

<!-- source: standards/terminology/concepts/tanwin_al_kasr.yml -->

| field | value |
| --- | --- |
| `code` | `tanwin_al_kasr` |
| `kind` | `mark` |
| Parent | [`tanwin`](/docs/terms/dictionary/dabt#tanwin) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | تَنْوِين الكَسْر |
| Dabt name | تَنْوِين الخَفْض — الكَسْرَتَان |
| Name by shape | أَلِفَان مُضْجَعَتَان تَحْت الحَرْف |
| Mushaf introduction name | الحَرَكَتَان: تَرْكِيبًا أو تَتَابُعًا |
| Symbol | ـٍ |
| Characters | `U+064D` ARABIC KASRATAN, `U+08F2` ARABIC OPEN KASRATAN |
| Mark family | `tanwin` |
| Other spellings | `kasratan`, `tanween_kasr`, `tanwin_al_jarr`, `tanwin_al_khafd`, `tanwin_kasr` |

**Definition:** Marks the in tanwin. Stacked marks signal izhar; staggered marks with a shaddah on the next letter signal complete idgham, and without one, incomplete idgham or ikhfa.

**Purpose:** Used as a value of tanwin, so that the pronunciation of the noun's ending and its ruling are read from it rather than from the shape of the mark.

**Related:** [`tanwin`](/docs/terms/dictionary/dabt#tanwin), [`noon_sakinah`](/docs/terms/dictionary/tajwid#noon_sakinah)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!kasratan`

### Tashil — التسهيل [#tashil]

<!-- source: standards/terminology/concepts/tashil.yml -->

| field | value |
| --- | --- |
| `code` | `tashil` |
| `kind` | `mark` |
| Parent | [`qiraah_mark`](/docs/terms/dictionary/dabt#qiraah_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّسْهِيل |
| Dabt name | التَّسْهِيل — الهَمْزَة بَيْنَ بَيْنَ |
| Name by shape | نُقْطَة كَبِيرَة مَطْمُوسَة مَكَان الهَمْزَة |
| Mushaf introduction name | النُّقْطَة دُون الحَرَكَة مَكَان الهَمْزَة |
| Symbol | نُقْطَة مَكَان الهَمْزَة |
| Characters | `U+06EC` ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE |
| Mark family | `alamat_qiraah` |

**Definition:** Marks tashil: the hamzah softened to a sound between a hamzah and an alif.

**Purpose:** Used as a value of the qiraah marks, so that the reader is alerted to a particular delivery at its place.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!tashil`

### Tashkil — التشكيل [#tashkil]

<!-- source: standards/terminology/concepts/tashkil.yml -->

| field | value |
| --- | --- |
| `code` | `tashkil` |
| `kind` | `concept` |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | التَّشْكِيل |
| Other spellings | `tashkeel` |
| English gloss | `vowel marks`, `vocalization`, `vocalisation` |

**Definition:** The layer of dabt marks attached to the letters of the text, the harakat, tanwin, shaddah, sukun and what goes with them, taken as a whole.

**Purpose:** Used when the whole layer of dabt is handled at once, kept in display or stripped from the text for search, rather than one mark.

- Tashkil is the layer; a harakah is one mark.
- Dabt is the discipline and its rules; tashkil is what it produces on the letters.

**Related:** [`harakah`](/docs/terms/dictionary/dabt#harakah), [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark), [`ijam`](/docs/terms/dictionary/dabt#ijam), [`rasm`](/docs/terms/dictionary/mushaf#rasm)

**Sources:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`

### Three Dots — الثلاث نقط [#three_dots]

<!-- source: standards/terminology/concepts/three_dots.yml -->

| field | value |
| --- | --- |
| `code` | `three_dots` |
| `kind` | `mark` |
| Parent | [`ijam`](/docs/terms/dictionary/dabt#ijam) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الثَّلَاث نُقَط |
| Dabt name | نَقْط الإِعْجَام — الثَّلَاث نُقَط |
| Name by shape | ثَلَاث نُقَط مُثَلَّثَة |
| Symbol | ثَلَاث نُقَط |
| Mark family | `ijam` |
| Other spellings | `thalath_nuqat`, `three-dots` |

**Definition:** Three dots above the letter, distinguishing it from the others that share its skeleton (ijam): thaa, sheen.

**Purpose:** Used as a value of ijam, so that a letter is told apart from those sharing its skeleton in analysis and in search.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!three-dots`

### Two Dots — النقطتان [#two_dots]

<!-- source: standards/terminology/concepts/two_dots.yml -->

| field | value |
| --- | --- |
| `code` | `two_dots` |
| `kind` | `mark` |
| Parent | [`ijam`](/docs/terms/dictionary/dabt#ijam) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | النُّقْطَتَان |
| Dabt name | نَقْط الإِعْجَام — النُّقْطَتَان |
| Name by shape | نُقْطَتَان مُتَّصِلَتَان |
| Symbol | نُقْطَتَان |
| Mark family | `ijam` |
| Other spellings | `nuqtatan`, `two-dots` |

**Definition:** Two dots, above or below, distinguishing a letter from the others that share its skeleton (ijam): taa, yaa, qaaf.

**Purpose:** Used as a value of ijam, so that a letter is told apart from those sharing its skeleton in analysis and in search.

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!two-dots`

### Waqf al-Muanaqah — وقف المعانقة [#waqf_al_muanaqah]

<!-- source: standards/terminology/concepts/waqf_al_muanaqah.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_al_muanaqah` |
| `kind` | `classification_value` |
| Parent | [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | وَقْف المُعَانَقَة |
| Dabt name | وَقْف المُعَانَقَة (ويُسمَّى وَقْف المُرَاقَبَة) |
| Name by shape | ثَلَاث نُقَط تَتَكَرَّر عَلَى كَلِمَتَيْن |
| Mushaf introduction name | عَلَامَة تَعَانُق الوَقْف |
| Symbol | ثَلَاث نُقَط في مَوْضِعَيْن |
| Characters | `U+06DB` ARABIC SMALL HIGH THREE DOTS |
| Mark family | `waqf` |
| Other spellings | `muanaqah`, `muraqabah`, `taanuq_al_waqf`, `waqf_al_muraqabah` |

**Definition:** Two candidate stopping points: stopping at one makes stopping at the other not allowed.

**Purpose:** Used as a value of the waqf mark type, so that rendering, teaching and warnings in applications branch on it rather than on the shape of the sign.

**Related:** [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!muanaqah`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### Waqf Jaiz Mustawi al-Tarafayn — الوقف الجائز مستوي الطرفين [#waqf_jaiz_mustawi_al_tarafayn]

<!-- source: standards/terminology/concepts/waqf_jaiz_mustawi_al_tarafayn.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_jaiz_mustawi_al_tarafayn` |
| `kind` | `classification_value` |
| Parent | [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف الجَائِز مُسْتَوِي الطَّرَفَيْن |
| Dabt name | الجِيم — عَلَامَة الوَقْف الجَائِز |
| Name by shape | جِيم |
| Mushaf introduction name | عَلَامَة الوَقْف الجَائِز جَوَازًا مُسْتَوِيَ الطَّرَفَيْن |
| Symbol | ج |
| Characters | `U+06DA` ARABIC SMALL HIGH JEEM |
| Mark family | `waqf` |
| Deprecated names | `waqf-jaiz`, `waqf_jaiz` |

**Definition:** A permissible stop, with stopping and continuing equally sound.

**Purpose:** Used as a value of the waqf mark type, so that rendering, teaching and warnings in applications branch on it rather than on the shape of the sign.

> `waqf_jaiz` was this mark's id in the mushaf registry; it fits three permissible marks, so it is deprecated.

**Related:** [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!waqf-jaiz`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### Waqf Jaiz Waqf Awla — الوقف الجائز مع كون الوقف أولى [#waqf_jaiz_waqf_awla]

<!-- source: standards/terminology/concepts/waqf_jaiz_waqf_awla.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_jaiz_waqf_awla` |
| `kind` | `classification_value` |
| Parent | [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف الجَائِز مَعَ كَوْنِ الوَقْف أَوْلَى |
| Dabt name | قلى — عَلَامَة الوَقْف أَوْلَى |
| Name by shape | قلى |
| Mushaf introduction name | عَلَامَة الوَقْف الجَائِز مَع كَوْن الوَقْف أَوْلَى |
| Symbol | قلى |
| Characters | `U+06D7` ARABIC SMALL HIGH LIGATURE QAF WITH LAM WITH ALEF MAKSURA |
| Mark family | `waqf` |
| Other spellings | `waqf-awla`, `waqf_awla` |

**Definition:** A permissible stop, and stopping is the better choice.

**Purpose:** Used as a value of the waqf mark type, so that rendering, teaching and warnings in applications branch on it rather than on the shape of the sign.

**Related:** [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!waqf-awla`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### Waqf Jaiz Wasl Awla — الوقف الجائز مع كون الوصل أولى [#waqf_jaiz_wasl_awla]

<!-- source: standards/terminology/concepts/waqf_jaiz_wasl_awla.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_jaiz_wasl_awla` |
| `kind` | `classification_value` |
| Parent | [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف الجَائِز مَعَ كَوْنِ الوَصْل أَوْلَى |
| Dabt name | صلى — عَلَامَة الوَصْل أَوْلَى |
| Name by shape | صلى |
| Mushaf introduction name | عَلَامَة الوَقْف الجَائِز مَع كَوْن الوَصْل أَوْلَى |
| Symbol | صلى |
| Characters | `U+06D6` ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA |
| Mark family | `waqf` |
| Other spellings | `wasl-awla`, `wasl_awla` |

**Definition:** A permissible stop, but continuing is the better choice.

**Purpose:** Used as a value of the waqf mark type, so that rendering, teaching and warnings in applications branch on it rather than on the shape of the sign.

**Related:** [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!wasl-awla`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### Waqf Lazim — الوقف اللازم [#waqf_lazim]

<!-- source: standards/terminology/concepts/waqf_lazim.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_lazim` |
| `kind` | `classification_value` |
| Parent | [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف اللَّازِم |
| Dabt name | المِيم — عَلَامَة الوَقْف اللَّازِم |
| Name by shape | مِيم |
| Mushaf introduction name | عَلَامَة الوَقْف اللَّازِم |
| Symbol | م |
| Characters | `U+06D8` ARABIC SMALL HIGH MEEM INITIAL FORM |
| Mark family | `waqf` |
| Other spellings | `waqf-lazim` |

**Definition:** A compulsory stop: continuing across it would suggest a meaning other than the one intended.

**Purpose:** Used as a value of the waqf mark type, so that rendering, teaching and warnings in applications branch on it rather than on the shape of the sign.

**Related:** [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!waqf-lazim`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/122) — `122`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### Waqf Mamnu — الوقف الممنوع [#waqf_mamnu]

<!-- source: standards/terminology/concepts/waqf_mamnu.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_mamnu` |
| `kind` | `classification_value` |
| Parent | [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | الوَقْف المَمْنُوع |
| Dabt name | لا — عَلَامَة الوَقْف المَمْنُوع |
| Name by shape | لا |
| Symbol | لا |
| Characters | `U+06D9` ARABIC SMALL HIGH LAM ALEF |
| Mark family | `waqf` |
| Other spellings | `waqf-mamnu` |

**Definition:** A forbidden stop: stopping here would break the meaning or attach what follows to the wrong clause.

**Purpose:** Used as a value of the waqf mark type, so that rendering, teaching and warnings in applications branch on it rather than on the shape of the sign.

> Registered in the mushaf registry but never used in this edition: zero occurrences.

**Related:** [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_mark`](/docs/terms/dictionary/dabt#waqf_mark)

**Sources:**

- مصحف حفص — كلمة كلمة — `standard!waqf-mamnu`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### Waqf Mark — علامة الوقف [#waqf_mark]

<!-- source: standards/terminology/concepts/waqf_mark.yml -->

| field | value |
| --- | --- |
| `code` | `waqf_mark` |
| `plural` | `waqf_marks` |
| `kind` | `mark` |
| Parent | [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark) |
| Origin | `quranic` |
| Tier | `core` |
| Version | `v0.1` |
| Vocalized | عَلَامَة الوَقْف |

**Definition:** A mark in the mushaf pointing the reader to the ruling on stopping or continuing at a given place.

**Purpose:** Used to represent the sign, its position and its type in an orderly way.

**Related:** [`waqf`](/docs/terms/dictionary/waqf#waqf), [`waqf_mark_type`](/docs/terms/dictionary/waqf#waqf_mark_type), [`mushaf_mark`](/docs/terms/dictionary/dabt#mushaf_mark), [`waqf_al_muanaqah`](/docs/terms/dictionary/dabt#waqf_al_muanaqah), [`waqf_jaiz_mustawi_al_tarafayn`](/docs/terms/dictionary/dabt#waqf_jaiz_mustawi_al_tarafayn), [`waqf_jaiz_waqf_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_waqf_awla), [`waqf_jaiz_wasl_awla`](/docs/terms/dictionary/dabt#waqf_jaiz_wasl_awla), [`waqf_lazim`](/docs/terms/dictionary/dabt#waqf_lazim), [`waqf_mamnu`](/docs/terms/dictionary/dabt#waqf_mamnu)

**Sources:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

