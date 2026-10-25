---
title: "الضبط وعلامات المصحف"
description: "dabt"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### علامة الآية — Ayah Mark [#ayah_mark]

<!-- source: standards/terminology/concepts/ayah_mark.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ayah_mark`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | عَلَامَة الآيَة |
| اسمه في الضبط | عَلَامَة رَأْس الآيَة |
| اسمه بشكله | دَارَة |
| اسمه في تعريف المصحف | عَلَامَة رَأْس الآيَة |
| الرمز | ۝ |
| المحارف | <span dir="ltr">`U+06DD` ARABIC END OF AYAH</span> |
| عائلة العلامة | <span dir="ltr">`mustaqill`</span> |
| تهجئات أخرى | <span dir="ltr">`end_of_ayah`، `ayah_marker`، `ayah_separator`</span> |

**التعريف:** علامة الآية هي الدارة الفاصلة بين الآيتين، وتوضع عند نهاية الآية ويكتب فيها رقمها في أكثر المصاحف.

**الغرض:** نستخدمها لتحديد حدود الآية في النص المكتوب، فيعرف منها المحلل والعارض أين تنتهي الآية وما رقمها.

- العلامة رسم في المصحف، أما الفاصلة فهي خاتمة الآية من جهة النظم.
- رقم الآية داخل الدارة يتبع نظام عد الآي، ولا يعد جزءًا من العلامة.

**مرتبط به:** <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`ayah_ending`](/ar/docs/terms/dictionary/structure#ayah_ending)، [`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)</span>

### الضمة — Dammah [#dammah]

<!-- source: standards/terminology/concepts/dammah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`dammah`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الضَّمَّة |
| اسمه في الضبط | الضَّمَّة (وتُسمَّى قديمًا الرَّفْعَة) |
| اسمه بشكله | وَاو صَغِيرَة فَوْق الحَرْف |
| الرمز | ـُ |
| المحارف | <span dir="ltr">`U+064F` ARABIC DAMMA</span> |
| عائلة العلامة | <span dir="ltr">`harakah`</span> |
| تهجئات أخرى | <span dir="ltr">`damma`</span> |

**التعريف:** الضمة علامة تدل على حركة الحرف بالضم.

**الغرض:** نستخدمها قيمة من قيم الحركة، فنقرأ منها نطق الحرف في التحليل والعرض والتعليم بدلًا من قراءة صورة الشكل.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!damma`

### علامة التقسيم — Division Mark [#division_mark]

<!-- source: standards/terminology/concepts/division_mark.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`division_mark`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | عَلَامَة التَّقْسِيم |
| اسمه في الضبط | عَلَامَة التَّحْزِيب |
| اسمه بشكله | نَجْمَة مُثَمَّنَة |
| اسمه في تعريف المصحف | عَلَامَة بِدَايَة الأَجْزَاء والأَحْزَاب وأَنْصَافِها وأَرْبَاعِها |
| الرمز | نَجْمَة |
| المحارف | <span dir="ltr">`U+06DE` ARABIC START OF RUB EL HIZB</span> |
| عائلة العلامة | <span dir="ltr">`mustaqill`</span> |
| تهجئات أخرى | <span dir="ltr">`hizb_mark`، `juz_mark`، `rub_el_hizb_mark`، `rub_mark`</span> |
| أسماء متروكة | <span dir="ltr">`alamat_al_tahzib`</span> |

**التعريف:** علامة التقسيم علامة تدل على بداية الأجزاء والأحزاب وأنصافها وأرباعها.

**الغرض:** نستخدمها علامة من علامات المصحف، فنعرف بها موضعها ودلالتها في العرض والتحليل.

- علامة التقسيم رسم في المصحف، والجزء والحزب وأرباعه أقسام من النص تدل عليها.

> كان `alamat_al_tahzib` مدخلًا مستقلًا يعرف الشيء نفسه، ثم دُمج في هذا المدخل.

**مرتبط به:** <span dir="ltr">[`hizb`](/ar/docs/terms/dictionary/divisions#hizb)، [`rubu_al_hizb`](/ar/docs/terms/dictionary/divisions#rubu_al_hizb)، [`juz`](/ar/docs/terms/dictionary/divisions#juz)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!hizb`

### النقطة — Dot [#dot]

<!-- source: standards/terminology/concepts/dot.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`dot`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`ijam`](/ar/docs/terms/dictionary/dabt#ijam)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | النُّقْطَة |
| اسمه في الضبط | نَقْط الإِعْجَام — النُّقْطَة |
| اسمه بشكله | نُقْطَة وَاحِدَة |
| الرمز | نُقْطَة وَاحِدَة |
| عائلة العلامة | <span dir="ltr">`ijam`</span> |
| تهجئات أخرى | <span dir="ltr">`nuqtah`</span> |

**التعريف:** النقطة نقطة واحدة فوق الحرف أو تحته تميزه عن الحرف الذي يشاركه في الرسم، مثل الباء والنون والجيم والخاء والذال.

**الغرض:** نستخدمها قيمة من قيم النقط، فنميز بها الحرف عن الحرف الذي يشاركه في الرسم في التحليل والبحث.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!dot`

### الفتحة — Fathah [#fathah]

<!-- source: standards/terminology/concepts/fathah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`fathah`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الفَتْحَة |
| اسمه في الضبط | الفَتْحَة (وتُسمَّى قديمًا النَّصْبَة) |
| اسمه بشكله | أَلِف مُضْجَعَة فَوْق الحَرْف |
| الرمز | ـَ |
| المحارف | <span dir="ltr">`U+064E` ARABIC FATHA</span> |
| عائلة العلامة | <span dir="ltr">`harakah`</span> |
| تهجئات أخرى | <span dir="ltr">`fatha`</span> |

**التعريف:** الفتحة علامة تدل على حركة الحرف بالفتح.

**الغرض:** نستخدمها قيمة من قيم الحركة، فنقرأ منها نطق الحرف في التحليل والعرض والتعليم بدلًا من قراءة صورة الشكل.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!fatha`

### الهمزة — Hamzah [#hamzah]

<!-- source: standards/terminology/concepts/hamzah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`hamzah`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الهَمْزَة |
| اسمه في الضبط | الهَمْزَة — رَأْس العَيْن |
| اسمه بشكله | رَأْس عَيْن |
| الرمز | ء |
| المحارف | <span dir="ltr">`U+0621` ARABIC LETTER HAMZA، `U+0654` ARABIC HAMZA ABOVE، `U+0655` ARABIC HAMZA BELOW</span> |
| عائلة العلامة | <span dir="ltr">`imlaiyyah`</span> |
| تهجئات أخرى | <span dir="ltr">`hamza`</span> |

**التعريف:** الهمزة علامة تدل على همزة القطع المحققة.

**الغرض:** نستخدمها قيمة من علامات الرسم، فنعرف بها المواضع التي يخالف فيها الرسم اللفظ في الكلمة.

**مرتبط به:** <span dir="ltr">[`hamzat_al_wasl`](/ar/docs/terms/dictionary/dabt#hamzat_al_wasl)، [`madd_al_badal`](/ar/docs/terms/dictionary/tajwid#madd_al_badal)، [`madd_munfasil`](/ar/docs/terms/dictionary/tajwid#madd_munfasil)، [`madd_muttasil`](/ar/docs/terms/dictionary/tajwid#madd_muttasil)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!hamza`

### همزة الوصل — Hamzat al-Wasl [#hamzat_al_wasl]

<!-- source: standards/terminology/concepts/hamzat_al_wasl.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`hamzat_al_wasl`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | هَمْزَة الوَصْل |
| اسمه في الضبط | رَأْس الصَّاد (من «صِلَة») — عَلَامَة هَمْزَة الوَصْل |
| اسمه بشكله | رَأْس صَاد فَوْق الأَلِف |
| اسمه في تعريف المصحف | رَأْس صَاد صَغِيرَة فَوْق أَلِف الوَصْل |
| الرمز | ص صَغِيرَة فَوْق الأَلِف |
| المحارف | <span dir="ltr">`U+0671` ARABIC LETTER ALEF WASLA</span> |
| عائلة العلامة | <span dir="ltr">`imlaiyyah`</span> |
| تهجئات أخرى | <span dir="ltr">`alif_wasl`، `hamzat_wasl`، `wasl`، `wasla`</span> |

**التعريف:** همزة الوصل علامة تدل على سقوط الهمزة في الوصل.

**الغرض:** نستخدمها قيمة من علامات الرسم، فنعرف بها المواضع التي يخالف فيها الرسم اللفظ في الكلمة.

**مرتبط به:** <span dir="ltr">[`hamzah`](/ar/docs/terms/dictionary/dabt#hamzah)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!wasla`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/127) — `127`

### الحركة — Harakah [#harakah]

<!-- source: standards/terminology/concepts/harakah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`harakah`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| القيم | <span dir="ltr">[`dammah`](/ar/docs/terms/dictionary/dabt#dammah)، [`fathah`](/ar/docs/terms/dictionary/dabt#fathah)، [`kasrah`](/ar/docs/terms/dictionary/dabt#kasrah)، [`shaddah`](/ar/docs/terms/dictionary/dabt#shaddah)، [`sukun`](/ar/docs/terms/dictionary/dabt#sukun)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الحَرَكَة |
| تهجئات أخرى | <span dir="ltr">`haraka`، `harakat`</span> |
| مقابل إنجليزي | <span dir="ltr">`Vowel Mark`، `diacritics`</span> |

**التعريف:** الحركة علامة تضبط حركة الحرف أو سكونه أو تشديده، وهي الفتحة والضمة والكسرة والسكون والشدة.

**الغرض:** نستخدمها أبًا لعلامات الضبط التي تحدد نطق الحرف نفسه.

**مرتبط به:** <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)، [`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)، [`tashkil`](/ar/docs/terms/dictionary/dabt#tashkil)، [`shaddah`](/ar/docs/terms/dictionary/dabt#shaddah)، [`sukun`](/ar/docs/terms/dictionary/dabt#sukun)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/151`

### الإعجام — Ijam [#ijam]

<!-- source: standards/terminology/concepts/ijam.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ijam`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| القيم | <span dir="ltr">[`dot`](/ar/docs/terms/dictionary/dabt#dot)، [`three_dots`](/ar/docs/terms/dictionary/dabt#three_dots)، [`two_dots`](/ar/docs/terms/dictionary/dabt#two_dots)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الإِعْجَام |

**التعريف:** الإعجام هو النقط الذي يميز الحرف عن الحروف التي تشاركه في صورة الرسم.

**الغرض:** نستخدمه أصلًا تندرج تحته صور النقط، وما يميز هذه الصور هو عدد النقط وموضعها وليس وظيفتها.

**مرتبط به:** <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)، [`letter`](/ar/docs/terms/dictionary/text#letter)، [`tashkil`](/ar/docs/terms/dictionary/dabt#tashkil)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/151`

### الإمالة — Imalah [#imalah]

<!-- source: standards/terminology/concepts/imalah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`imalah`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الإِمَالَة |
| اسمه في الضبط | الإِمَالَة — النُّقْطَة تَحْت الحَرْف |
| اسمه بشكله | نُقْطَة كَبِيرَة مَطْمُوسَة تَحْت الحَرْف |
| اسمه في تعريف المصحف | نُقْطَة كَبِيرَة مَطْمُوسَة الوَسَط تَحْت الحَرْف |
| الرمز | نُقْطَة تَحْت الحَرْف |
| المحارف | <span dir="ltr">`U+06EA` ARABIC EMPTY CENTRE LOW STOP</span> |
| عائلة العلامة | <span dir="ltr">`alamat_qiraah`</span> |

**التعريف:** علامة الإمالة تدل على الإمالة الكبرى، وهي نطق الفتحة مائلة إلى الكسرة، وترد في رواية حفص في موضع واحد (11:41).

**الغرض:** نستخدمها قيمة من علامات القراءة، فننبه بها القارئ إلى أداء خاص في موضعها.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!imalah`

### الإشمام — Ishmam [#ishmam]

<!-- source: standards/terminology/concepts/ishmam.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ishmam`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الإِشْمَام |
| اسمه في الضبط | الإِشْمَام |
| اسمه بشكله | نُقْطَة كَبِيرَة مَطْمُوسَة فَوْق الحَرْف |
| اسمه في تعريف المصحف | النُّقْطَة المَذْكُورَة فَوْق آخِر المِيم |
| الرمز | نُقْطَة فَوْق الحَرْف |
| المحارف | <span dir="ltr">`U+06EC` ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE</span> |
| عائلة العلامة | <span dir="ltr">`alamat_qiraah`</span> |

**التعريف:** علامة الإشمام تدل على الإشمام، وهو ضم الشفتين إشارة إلى الضمة المحذوفة من غير صوت.

**الغرض:** نستخدمها قيمة من علامات القراءة، فننبه بها القارئ إلى أداء خاص في موضعها.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!ishmam`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/131) — `131`

### الكسرة — Kasrah [#kasrah]

<!-- source: standards/terminology/concepts/kasrah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`kasrah`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الكَسْرَة |
| اسمه في الضبط | الكَسْرَة (وتُسمَّى قديمًا الخَفْضَة) |
| اسمه بشكله | أَلِف مُضْجَعَة تَحْت الحَرْف |
| الرمز | ـِ |
| المحارف | <span dir="ltr">`U+0650` ARABIC KASRA</span> |
| عائلة العلامة | <span dir="ltr">`harakah`</span> |
| تهجئات أخرى | <span dir="ltr">`kasra`</span> |

**التعريف:** الكسرة علامة تدل على حركة الحرف بالكسر.

**الغرض:** نستخدمها قيمة من قيم الحركة، فنقرأ منها نطق الحرف في التحليل والعرض والتعليم بدلًا من قراءة صورة الشكل.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!kasra`

### المدة — Maddah [#maddah]

<!-- source: standards/terminology/concepts/maddah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`maddah`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المَدَّة |
| اسمه في الضبط | عَلَامَة المَدّ — المَدَّة |
| اسمه بشكله | خَطّ مُتَمَوِّج مَمْدُود فَوْق الحَرْف |
| اسمه في تعريف المصحف | عَلَامَة المَدّ |
| الرمز | خَطّ المَدّ |
| المحارف | <span dir="ltr">`U+0653` ARABIC MADDAH ABOVE، `U+06E4` ARABIC SMALL HIGH MADDA</span> |
| عائلة العلامة | <span dir="ltr">`imlaiyyah`</span> |
| تهجئات أخرى | <span dir="ltr">`madda`</span> |

**التعريف:** المدة علامة تدل على لزوم مد الحرف مدًّا زائدًا على المد الطبيعي.

**الغرض:** نستخدمها قيمة من علامات الرسم، فنعرف بها المواضع التي يخالف فيها الرسم اللفظ في الكلمة.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!maddah`

### علامة المصحف — Mushaf Mark [#mushaf_mark]

<!-- source: standards/terminology/concepts/mushaf_mark.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`mushaf_mark`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| القيم | <span dir="ltr">[`ayah_mark`](/ar/docs/terms/dictionary/dabt#ayah_mark)، [`division_mark`](/ar/docs/terms/dictionary/dabt#division_mark)، [`harakah`](/ar/docs/terms/dictionary/dabt#harakah)، [`ijam`](/ar/docs/terms/dictionary/dabt#ijam)، [`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)، [`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)، [`rectangular_zero`](/ar/docs/terms/dictionary/dabt#rectangular_zero)، [`rounded_zero`](/ar/docs/terms/dictionary/dabt#rounded_zero)، [`sajdah_line`](/ar/docs/terms/dictionary/dabt#sajdah_line)، [`sajdah_mark`](/ar/docs/terms/dictionary/dabt#sajdah_mark)، [`small_meem`](/ar/docs/terms/dictionary/dabt#small_meem)، [`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)، [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark)</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | عَلَامَة المُصْحَف |

**التعريف:** علامة المصحف رمز أو علامة غير داخلة في الحروف الأصلية للكلمة، وتستخدم في المصحف لأغراض القراءة أو التنظيم أو الإرشاد.

**الغرض:** نستخدمها أبًا موحدًا للعلامات المختلفة بدلًا من معاملتها أنواعًا غير مرتبطة.

**مرتبط به:** <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)، [`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)، [`ijam`](/ar/docs/terms/dictionary/dabt#ijam)، [`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)، [`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)، [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark)، [`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)، [`tashkil`](/ar/docs/terms/dictionary/dabt#tashkil)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### الألف المحذوفة — Omitted Alif [#omitted_alif]

<!-- source: standards/terminology/concepts/omitted_alif.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`omitted_alif`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الأَلِف المَحْذُوفَة |
| اسمه في الضبط | الأَلِف المَحْذُوفَة — أَلِف صَغِيرَة قَائِمَة |
| اسمه بشكله | أَلِف صَغِيرَة قَائِمَة فَوْق الحَرْف |
| اسمه في تعريف المصحف | مِنَ الحُرُوف الصَّغِيرَة الدَّالَّة على المَتْرُوك مِنَ الرَّسْم |
| الرمز | ا صَغِيرَة قَائِمَة |
| المحارف | <span dir="ltr">`U+0670` ARABIC LETTER SUPERSCRIPT ALEF</span> |
| عائلة العلامة | <span dir="ltr">`imlaiyyah`</span> |
| تهجئات أخرى | <span dir="ltr">`alif_mahdhufah`، `dagger_alif`، `small-alef`، `small_alef`، `small_alif`، `superscript_alif`</span> |

**التعريف:** الألف المحذوفة علامة تدل على ألف محذوفة من الرسم واجبة النطق.

**الغرض:** نستخدمها قيمة من علامات الرسم، فنعرف بها المواضع التي يخالف فيها الرسم اللفظ في الكلمة.

**مرتبط به:** <span dir="ltr">[`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)، [`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!small-alef`

### العلامة الإملائية — Orthographic Mark [#orthographic_mark]

<!-- source: standards/terminology/concepts/orthographic_mark.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`orthographic_mark`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| القيم | <span dir="ltr">[`hamzah`](/ar/docs/terms/dictionary/dabt#hamzah)، [`hamzat_al_wasl`](/ar/docs/terms/dictionary/dabt#hamzat_al_wasl)، [`maddah`](/ar/docs/terms/dictionary/dabt#maddah)، [`omitted_alif`](/ar/docs/terms/dictionary/dabt#omitted_alif)، [`small_noon`](/ar/docs/terms/dictionary/dabt#small_noon)، [`small_waw`](/ar/docs/terms/dictionary/dabt#small_waw)، [`small_yaa`](/ar/docs/terms/dictionary/dabt#small_yaa)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | العَلَامَة الإِمْلَائِيَّة |

**التعريف:** العلامة الإملائية هي علامة تضبط رسم الكلمة، مثل الهمزة والمدة والحروف الصغيرة.

**الغرض:** نستخدم العلامة الإملائية أبًا للعلامات التي تتعلق برسم الكلمة وليس بحركتها ولا بالوقف عليها.

**مرتبط به:** <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)، [`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)، [`omitted_alif`](/ar/docs/terms/dictionary/dabt#omitted_alif)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/134) — `134`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`

### علامة القراءة — Qiraah Mark [#qiraah_mark]

<!-- source: standards/terminology/concepts/qiraah_mark.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`qiraah_mark`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| القيم | <span dir="ltr">[`imalah`](/ar/docs/terms/dictionary/dabt#imalah)، [`ishmam`](/ar/docs/terms/dictionary/dabt#ishmam)، [`saktah_mark`](/ar/docs/terms/dictionary/dabt#saktah_mark)، [`seen_al_qiraah`](/ar/docs/terms/dictionary/dabt#seen_al_qiraah)، [`tashil`](/ar/docs/terms/dictionary/dabt#tashil)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | عَلَامَة القِرَاءَة |

**التعريف:** علامة القراءة هي علامة ترشد إلى وجه من وجوه الأداء في موضعها، مثل السكت والإشمام والتسهيل.

**الغرض:** نستخدم علامة القراءة أبًا للعلامات التي تنبه القارئ إلى أداء خاص وليس إلى ضبط الحرف.

**مرتبط به:** <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)، [`qiraah`](/ar/docs/terms/dictionary/qiraat#qiraah)، [`saktah_mark`](/ar/docs/terms/dictionary/dabt#saktah_mark)</span>

### الصفر المستطيل — Rectangular Zero [#rectangular_zero]

<!-- source: standards/terminology/concepts/rectangular_zero.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`rectangular_zero`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الصِّفْر المُسْتَطِيل |
| اسمه في الضبط | الصِّفْر المُسْتَطِيل القَائِم |
| اسمه بشكله | مُسْتَطِيل صَغِير قَائِم خَالِي الوَسَط |
| اسمه في تعريف المصحف | دَائِرَة قَائِمَة مُسْتَطِيلَة خَالِيَة الوَسَط |
| الرمز | مُسْتَطِيل قَائِم صَغِير |
| المحارف | <span dir="ltr">`U+06E0` ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO</span> |
| عائلة العلامة | <span dir="ltr">`dabt`</span> |
| تهجئات أخرى | <span dir="ltr">`sifr-mustatil`، `sifr_mustatil`</span> |

**التعريف:** الصفر المستطيل علامة تدل على زيادة الألف في الوصل دون الوقف، ولذلك تنطق عند الوقف عليها.

**الغرض:** نستخدمها علامة من علامات المصحف، فنعرف بها موضعها ودلالتها في العرض والتحليل.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!sifr-mustatil`

### الصفر المستدير — Rounded Zero [#rounded_zero]

<!-- source: standards/terminology/concepts/rounded_zero.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`rounded_zero`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الصِّفْر المُسْتَدِير |
| اسمه في الضبط | الصِّفْر المُسْتَدِير |
| اسمه بشكله | دَائِرَة صَغِيرَة خَالِيَة الوَسَط |
| اسمه في تعريف المصحف | دَائِرَة صَغِيرَة خَالِيَة الوَسَط |
| الرمز | دَائِرَة صَغِيرَة |
| المحارف | <span dir="ltr">`U+06DF` ARABIC SMALL HIGH ROUNDED ZERO</span> |
| عائلة العلامة | <span dir="ltr">`dabt`</span> |
| تهجئات أخرى | <span dir="ltr">`sifr-mustadir`، `sifr_mustadir`</span> |

**التعريف:** الصفر المستدير علامة تدل على زيادة الحرف في الرسم، ولذلك لا ينطق في الوصل ولا في الوقف.

**الغرض:** نستخدمها علامة من علامات المصحف، فنعرف بها موضعها ودلالتها في العرض والتحليل.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!sifr-mustadir`

### خط السجدة — Sajdah Line [#sajdah_line]

<!-- source: standards/terminology/concepts/sajdah_line.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`sajdah_line`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | خَطّ السَّجْدَة |
| اسمه في الضبط | خَطّ مُوجِب السَّجْدَة |
| اسمه بشكله | خَطّ أُفُقِيّ فَوْق الكَلِمَة |
| اسمه في تعريف المصحف | خَطّ أُفُقِيّ فَوْق الكَلِمَة الدَّالّ على مُوجِب السَّجْدَة |
| الرمز | خَطّ أُفُقِيّ |
| عائلة العلامة | <span dir="ltr">`mustaqill`</span> |
| تهجئات أخرى | <span dir="ltr">`khatt_mujib_al_sajdah`، `sajdah-line`</span> |

**التعريف:** خط السجدة خط فوق الكلمة يدل على أنها الكلمة الموجبة للسجدة.

**الغرض:** نستخدمها علامة من علامات المصحف، فنعرف بها موضعها ودلالتها في العرض والتحليل.

**مرتبط به:** <span dir="ltr">[`sajdah_mark`](/ar/docs/terms/dictionary/dabt#sajdah_mark)، [`sajdah`](/ar/docs/terms/dictionary/structure#sajdah)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!sajdah-line`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/381`

### علامة السجدة — Sajdah Mark [#sajdah_mark]

<!-- source: standards/terminology/concepts/sajdah_mark.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`sajdah_mark`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | عَلَامَة السَّجْدَة |
| اسمه في الضبط | عَلَامَة مَوْضِع السَّجْدَة — المِحْرَاب |
| اسمه بشكله | مِحْرَاب صَغِير |
| اسمه في تعريف المصحف | عَلَامَة مَوْضِع السَّجْدَة |
| الرمز | مِحْرَاب |
| عائلة العلامة | <span dir="ltr">`mustaqill`</span> |
| تهجئات أخرى | <span dir="ltr">`sajda_mark`، `sajda_sign`، `sajdah-sign`، `sajdah_sign`</span> |
| أسماء متروكة | <span dir="ltr">`alamat_mawdi_al_sajdah`</span> |

**التعريف:** علامة السجدة علامة تدل على موضع السجود.

**الغرض:** نستخدمها علامة من علامات المصحف، فنعرف بها موضعها ودلالتها في العرض والتحليل.

- علامة السجدة رسم في المصحف، والسجدة موضع من النص يسجد عنده.

> كان `alamat_mawdi_al_sajdah` مدخلًا مستقلًا يعرف الشيء نفسه، ثم دُمج في هذا المدخل.

**مرتبط به:** <span dir="ltr">[`sajdah`](/ar/docs/terms/dictionary/structure#sajdah)، [`sajdah_line`](/ar/docs/terms/dictionary/dabt#sajdah_line)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!sajdah-sign`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/381`

### علامة السكتة — Saktah Mark [#saktah_mark]

<!-- source: standards/terminology/concepts/saktah_mark.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`saktah_mark`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | عَلَامَة السَّكْتَة |
| اسمه في الضبط | السِّين — عَلَامَة السَّكْت |
| اسمه بشكله | سِين |
| اسمه في تعريف المصحف | السِّين فَوْق الحَرْف الأَخِير الدَّالَّة على السَّكْت |
| الرمز | س |
| المحارف | <span dir="ltr">`U+06DC` ARABIC SMALL HIGH SEEN</span> |
| عائلة العلامة | <span dir="ltr">`alamat_qiraah`</span> |
| تهجئات أخرى | <span dir="ltr">`alamat_al_sakt`</span> |

**التعريف:** علامة السكتة علامة تدل على السكت، وهو وقفة يسيرة من غير تنفس ثم الوصل بما بعده.

**الغرض:** نستخدمها قيمة من علامات القراءة، فننبه بها القارئ إلى أداء خاص في موضعها.

- علامة السكتة رسم في المصحف، والسكتة الوقفة نفسها.

**مرتبط به:** <span dir="ltr">[`saktah`](/ar/docs/terms/dictionary/tajwid#saktah)، [`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!saktah`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/126) — `126`

### سين القراءة — Seen al-Qiraah [#seen_al_qiraah]

<!-- source: standards/terminology/concepts/seen_al_qiraah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`seen_al_qiraah`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | سِين القِرَاءَة |
| اسمه في الضبط | السِّين الدَّالَّة على وَجْه القِرَاءَة |
| اسمه بشكله | سِين فَوْق الصَّاد أو تَحْتَهَا |
| اسمه في تعريف المصحف | السِّين فَوْق الصَّاد أو تَحْتَهَا |
| الرمز | س |
| المحارف | <span dir="ltr">`U+06DC` ARABIC SMALL HIGH SEEN، `U+06E3` ARABIC SMALL LOW SEEN</span> |
| عائلة العلامة | <span dir="ltr">`alamat_qiraah`</span> |
| تهجئات أخرى | <span dir="ltr">`seen-reading`، `seen_reading`، `sin_qiraah`</span> |
| دليل اسم العرض | <span dir="ltr">letter name; unmeasurable directly, both forms are English words</span> |

**التعريف:** سين القراءة سين صغيرة فوق الصاد تدل على القراءة بالسين، وتحتها تدل على القراءة بالصاد.

**الغرض:** نستخدمها قيمة من علامات القراءة، فننبه بها القارئ إلى أداء خاص في موضعها.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!seen-reading`

### الشدة — Shaddah [#shaddah]

<!-- source: standards/terminology/concepts/shaddah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`shaddah`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الشَّدَّة |
| اسمه في الضبط | الشَّدَّة — رَأْس الشِّين (من «شَدِيد») |
| اسمه بشكله | رَأْس شِين بِلَا نُقَط |
| اسمه في تعريف المصحف | الشَّدَّة الدَّالَّة على الإِدْغَام |
| الرمز | ـّ |
| المحارف | <span dir="ltr">`U+0651` ARABIC SHADDA</span> |
| عائلة العلامة | <span dir="ltr">`harakah`</span> |
| تهجئات أخرى | <span dir="ltr">`shadda`، `tashdeed`، `tashdid`</span> |

**التعريف:** الشدة علامة تدل على تشديد الحرف، أي إدغام الأول الساكن في الثاني المتحرك حتى ينطقا حرفًا واحدًا مشددًا.

**الغرض:** نستخدمها قيمة من قيم الحركة، فنقرأ منها نطق الحرف في التحليل والعرض والتعليم بدلًا من قراءة صورة الشكل.

**مرتبط به:** <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)، [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!shadda`

### الميم الصغيرة — Small Meem [#small_meem]

<!-- source: standards/terminology/concepts/small_meem.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`small_meem`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المِيم الصَّغِيرَة |
| اسمه في الضبط | المِيم الصَّغِيرَة — عَلَامَة القَلْب |
| اسمه بشكله | مِيم صَغِيرَة، عُلْيَا أو سُفْلَى |
| اسمه في تعريف المصحف | المِيم الصَّغِيرَة |
| الرمز | م صَغِيرَة |
| المحارف | <span dir="ltr">`U+06E2` ARABIC SMALL HIGH MEEM ISOLATED FORM، `U+06ED` ARABIC SMALL LOW MEEM</span> |
| عائلة العلامة | <span dir="ltr">`dabt`</span> |
| تهجئات أخرى | <span dir="ltr">`iqlab_meem`، `meem-iqlab`، `meem_iqlab`، `meem_saghirah`، `mim_saghirah`</span> |
| دليل اسم العرض | <span dir="ltr">GitHub phrase search: meem sakinah 308 vs mim sakinah 57</span> |

**التعريف:** الميم الصغيرة علامة تدل على قلب النون الساكنة أو التنوين ميمًا عند الباء.

**الغرض:** نستخدمها علامة من علامات المصحف، فنعرف بها موضعها ودلالتها في العرض والتحليل.

**مرتبط به:** <span dir="ltr">[`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!meem-iqlab`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/86) — `86`

### النون الصغيرة — Small Noon [#small_noon]

<!-- source: standards/terminology/concepts/small_noon.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`small_noon`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | النُّون الصَّغِيرَة |
| اسمه في الضبط | النُّون الصَّغِيرَة — الحَرْف المُلْحَق بالرَّسْم |
| اسمه بشكله | نُون صَغِيرَة فَوْق السَّطْر |
| اسمه في تعريف المصحف | مِنَ الحُرُوف الصَّغِيرَة الدَّالَّة على المَتْرُوك مِنَ الرَّسْم |
| الرمز | ن صَغِيرَة |
| المحارف | <span dir="ltr">`U+06E8` ARABIC SMALL HIGH NOON</span> |
| عائلة العلامة | <span dir="ltr">`imlaiyyah`</span> |
| تهجئات أخرى | <span dir="ltr">`noon_saghirah`، `nun_saghirah`، `small-noon`</span> |
| دليل اسم العرض | <span dir="ltr">GitHub phrase search: noon sakinah 478 vs nun sakinah 118</span> |

**التعريف:** النون الصغيرة علامة تدل على نون محذوفة من الرسم واجبة النطق، وترد في موضع واحد (21:88).

**الغرض:** نستخدمها قيمة من علامات الرسم، فنعرف بها المواضع التي يخالف فيها الرسم اللفظ في الكلمة.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!small-noon`

### الواو الصغيرة — Small Waw [#small_waw]

<!-- source: standards/terminology/concepts/small_waw.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`small_waw`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الوَاو الصَّغِيرَة |
| اسمه في الضبط | الوَاو الصَّغِيرَة — عَلَامَة صِلَة هَاء الضَّمِير |
| اسمه بشكله | وَاو صَغِيرَة بَعْد الهَاء |
| اسمه في تعريف المصحف | الوَاو الصَّغِيرَة |
| الرمز | و صَغِيرَة |
| المحارف | <span dir="ltr">`U+06E5` ARABIC SMALL WAW</span> |
| عائلة العلامة | <span dir="ltr">`imlaiyyah`</span> |
| تهجئات أخرى | <span dir="ltr">`small-waw`، `waw_saghirah`</span> |

**التعريف:** الواو الصغيرة علامة تدل على صلة هاء الضمير المضمومة بواو لفظية في حال الوصل.

**الغرض:** نستخدمها قيمة من علامات الرسم، فنعرف بها المواضع التي يخالف فيها الرسم اللفظ في الكلمة.

**مرتبط به:** <span dir="ltr">[`madd_al_silah`](/ar/docs/terms/dictionary/tajwid#madd_al_silah)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!small-waw`

### الياء الصغيرة — Small Yaa [#small_yaa]

<!-- source: standards/terminology/concepts/small_yaa.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`small_yaa`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | اليَاء الصَّغِيرَة |
| اسمه في الضبط | اليَاء الصَّغِيرَة — عَلَامَة صِلَة هَاء الضَّمِير |
| اسمه بشكله | يَاء صَغِيرَة مَرْدُودَة بَعْد الهَاء |
| اسمه في تعريف المصحف | اليَاء الصَّغِيرَة المَرْدُودَة إِلى خَلْف |
| الرمز | ي صَغِيرَة |
| المحارف | <span dir="ltr">`U+06E6` ARABIC SMALL YEH، `U+06E7` ARABIC SMALL HIGH YEH</span> |
| عائلة العلامة | <span dir="ltr">`imlaiyyah`</span> |
| تهجئات أخرى | <span dir="ltr">`small-ya`، `small_ya`، `ya_saghirah`، `yaa_saghirah`</span> |

**التعريف:** الياء الصغيرة علامة تدل على صلة هاء الضمير المكسورة بياء لفظية في حال الوصل.

**الغرض:** نستخدمها قيمة من علامات الرسم، فنعرف بها المواضع التي يخالف فيها الرسم اللفظ في الكلمة.

**مرتبط به:** <span dir="ltr">[`madd_al_silah`](/ar/docs/terms/dictionary/tajwid#madd_al_silah)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!small-ya`

### السكون — Sukun [#sukun]

<!-- source: standards/terminology/concepts/sukun.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`sukun`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | السُّكُون |
| اسمه في الضبط | السُّكُون — رَأْس الخَاء المُهْمَلَة |
| اسمه بشكله | رَأْس خَاء بِلَا نُقْطَة |
| اسمه في تعريف المصحف | رَأْس خَاء صَغِيرَة دُون نُقْطَة |
| الرمز | ـْ |
| المحارف | <span dir="ltr">`U+0652` ARABIC SUKUN، `U+06E1` ARABIC SMALL HIGH DOTLESS HEAD OF KHAH</span> |
| عائلة العلامة | <span dir="ltr">`harakah`</span> |
| تهجئات أخرى | <span dir="ltr">`sukoon`</span> |

**التعريف:** السكون علامة تدل على سكون الحرف وإظهاره.

**الغرض:** نستخدمها قيمة من قيم الحركة، فنقرأ منها نطق الحرف في التحليل والعرض والتعليم بدلًا من قراءة صورة الشكل.

**مرتبط به:** <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`madd_lazim`](/ar/docs/terms/dictionary/tajwid#madd_lazim)، [`qalqalah`](/ar/docs/terms/dictionary/tajwid#qalqalah)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!sukun`

### التنوين — Tanwin [#tanwin]

<!-- source: standards/terminology/concepts/tanwin.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tanwin`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| القيم | <span dir="ltr">[`tanwin_al_damm`](/ar/docs/terms/dictionary/dabt#tanwin_al_damm)، [`tanwin_al_fath`](/ar/docs/terms/dictionary/dabt#tanwin_al_fath)، [`tanwin_al_kasr`](/ar/docs/terms/dictionary/dabt#tanwin_al_kasr)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّنْوِين |
| تهجئات أخرى | <span dir="ltr">`tanween`</span> |

**التعريف:** التنوين هو نون ساكنة زائدة تلحق آخر الاسم، وترسم بتكرار صورة الحركة.

**الغرض:** نستخدم التنوين أبًا لعلامات التنوين الـ3، حتى تجتمع في قائمة واحدة بدل تفريقها.

**مرتبط به:** <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab)، [`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)، [`tanwin_al_damm`](/ar/docs/terms/dictionary/dabt#tanwin_al_damm)، [`tanwin_al_fath`](/ar/docs/terms/dictionary/dabt#tanwin_al_fath)، [`tanwin_al_kasr`](/ar/docs/terms/dictionary/dabt#tanwin_al_kasr)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`

### تنوين الضم — Tanwin al-Damm [#tanwin_al_damm]

<!-- source: standards/terminology/concepts/tanwin_al_damm.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tanwin_al_damm`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | تَنْوِين الضَّمّ |
| اسمه في الضبط | تَنْوِين الرَّفْع — الضَّمَّتَان |
| اسمه بشكله | وَاوَان صَغِيرَتَان فَوْق الحَرْف |
| اسمه في تعريف المصحف | الحَرَكَتَان: تَرْكِيبًا أو تَتَابُعًا |
| الرمز | ـٌ |
| المحارف | <span dir="ltr">`U+064C` ARABIC DAMMATAN، `U+08F1` ARABIC OPEN DAMMATAN</span> |
| عائلة العلامة | <span dir="ltr">`tanwin`</span> |
| تهجئات أخرى | <span dir="ltr">`dammatan`، `tanween_damm`، `tanwin_al_rafa`، `tanwin_damm`</span> |

**التعريف:** تنوين الضم علامة تدل على التنوين المرفوع. وتركيب الحركتين يدل على إظهار التنوين، وتتابعهما مع تشديد الحرف التالي يدل على الإدغام الكامل، وتتابعهما دون تشديد يدل على الإدغام الناقص أو الإخفاء.

**الغرض:** نستخدمها قيمة من قيم التنوين، فنقرأ منها نطق آخر الاسم وحكمه بدلًا من قراءة صورة الشكل.

**مرتبط به:** <span dir="ltr">[`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!dammatan`

### تنوين الفتح — Tanwin al-Fath [#tanwin_al_fath]

<!-- source: standards/terminology/concepts/tanwin_al_fath.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tanwin_al_fath`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | تَنْوِين الفَتْح |
| اسمه في الضبط | تَنْوِين النَّصْب — الفَتْحَتَان |
| اسمه بشكله | أَلِفَان مُضْجَعَتَان فَوْق الحَرْف |
| اسمه في تعريف المصحف | الحَرَكَتَان: تَرْكِيبًا أو تَتَابُعًا |
| الرمز | ـً |
| المحارف | <span dir="ltr">`U+064B` ARABIC FATHATAN، `U+08F0` ARABIC OPEN FATHATAN</span> |
| عائلة العلامة | <span dir="ltr">`tanwin`</span> |
| تهجئات أخرى | <span dir="ltr">`fathatan`، `tanween_fath`، `tanwin_al_nasb`، `tanwin_fath`</span> |

**التعريف:** تنوين الفتح علامة تدل على التنوين المنصوب. وتركيب الحركتين يدل على إظهار التنوين، وتتابعهما مع تشديد الحرف التالي يدل على الإدغام الكامل، وتتابعهما دون تشديد يدل على الإدغام الناقص أو الإخفاء.

**الغرض:** نستخدمها قيمة من قيم التنوين، فنقرأ منها نطق آخر الاسم وحكمه بدلًا من قراءة صورة الشكل.

**مرتبط به:** <span dir="ltr">[`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`madd_al_iwad`](/ar/docs/terms/dictionary/tajwid#madd_al_iwad)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!fathatan`

### تنوين الكسر — Tanwin al-Kasr [#tanwin_al_kasr]

<!-- source: standards/terminology/concepts/tanwin_al_kasr.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tanwin_al_kasr`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | تَنْوِين الكَسْر |
| اسمه في الضبط | تَنْوِين الخَفْض — الكَسْرَتَان |
| اسمه بشكله | أَلِفَان مُضْجَعَتَان تَحْت الحَرْف |
| اسمه في تعريف المصحف | الحَرَكَتَان: تَرْكِيبًا أو تَتَابُعًا |
| الرمز | ـٍ |
| المحارف | <span dir="ltr">`U+064D` ARABIC KASRATAN، `U+08F2` ARABIC OPEN KASRATAN</span> |
| عائلة العلامة | <span dir="ltr">`tanwin`</span> |
| تهجئات أخرى | <span dir="ltr">`kasratan`، `tanween_kasr`، `tanwin_al_jarr`، `tanwin_al_khafd`، `tanwin_kasr`</span> |

**التعريف:** تنوين الكسر علامة تدل على التنوين المخفوض. وتركيب الحركتين يدل على إظهار التنوين، وتتابعهما مع تشديد الحرف التالي يدل على الإدغام الكامل، وتتابعهما دون تشديد يدل على الإدغام الناقص أو الإخفاء.

**الغرض:** نستخدمها قيمة من قيم التنوين، فنقرأ منها نطق آخر الاسم وحكمه بدلًا من قراءة صورة الشكل.

**مرتبط به:** <span dir="ltr">[`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!kasratan`

### التسهيل — Tashil [#tashil]

<!-- source: standards/terminology/concepts/tashil.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tashil`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّسْهِيل |
| اسمه في الضبط | التَّسْهِيل — الهَمْزَة بَيْنَ بَيْنَ |
| اسمه بشكله | نُقْطَة كَبِيرَة مَطْمُوسَة مَكَان الهَمْزَة |
| اسمه في تعريف المصحف | النُّقْطَة دُون الحَرَكَة مَكَان الهَمْزَة |
| الرمز | نُقْطَة مَكَان الهَمْزَة |
| المحارف | <span dir="ltr">`U+06EC` ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE</span> |
| عائلة العلامة | <span dir="ltr">`alamat_qiraah`</span> |

**التعريف:** علامة التسهيل تدل على تسهيل الهمزة بين بين، أي بينها وبين الألف.

**الغرض:** نستخدمها قيمة من علامات القراءة، فننبه بها القارئ إلى أداء خاص في موضعها.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!tashil`

### التشكيل — Tashkil [#tashkil]

<!-- source: standards/terminology/concepts/tashkil.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tashkil`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّشْكِيل |
| تهجئات أخرى | <span dir="ltr">`tashkeel`</span> |
| مقابل إنجليزي | <span dir="ltr">`vowel marks`، `vocalization`، `vocalisation`</span> |

**التعريف:** التشكيل هو طبقة علامات الضبط الملحقة بحروف النص، من الحركات والتنوين والشدة والسكون وما يتبعها، منظورًا إليها جملة واحدة.

**الغرض:** نستخدم التشكيل حين نتعامل مع طبقة الضبط كلها وليس مع علامة بعينها، مثل إثباتها في العرض أو تجريد النص منها للبحث.

- التشكيل هو الطبقة كلها، والحركة هي العلامة الواحدة.
- الضبط هو العلم وقواعده، والتشكيل هو ما ينتج عنه على الحروف.

**مرتبط به:** <span dir="ltr">[`harakah`](/ar/docs/terms/dictionary/dabt#harakah)، [`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)، [`ijam`](/ar/docs/terms/dictionary/dabt#ijam)، [`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/135) — `135`

### الثلاث نقط — Three Dots [#three_dots]

<!-- source: standards/terminology/concepts/three_dots.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`three_dots`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`ijam`](/ar/docs/terms/dictionary/dabt#ijam)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الثَّلَاث نُقَط |
| اسمه في الضبط | نَقْط الإِعْجَام — الثَّلَاث نُقَط |
| اسمه بشكله | ثَلَاث نُقَط مُثَلَّثَة |
| الرمز | ثَلَاث نُقَط |
| عائلة العلامة | <span dir="ltr">`ijam`</span> |
| تهجئات أخرى | <span dir="ltr">`thalath_nuqat`، `three-dots`</span> |

**التعريف:** الثلاث نقط ثلاث نقاط فوق الحرف تميزه عن الحرف الذي يشاركه في الرسم، مثل الثاء والشين.

**الغرض:** نستخدمها قيمة من قيم النقط، فنميز بها الحرف عن الحرف الذي يشاركه في الرسم في التحليل والبحث.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!three-dots`

### النقطتان — Two Dots [#two_dots]

<!-- source: standards/terminology/concepts/two_dots.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`two_dots`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`ijam`](/ar/docs/terms/dictionary/dabt#ijam)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | النُّقْطَتَان |
| اسمه في الضبط | نَقْط الإِعْجَام — النُّقْطَتَان |
| اسمه بشكله | نُقْطَتَان مُتَّصِلَتَان |
| الرمز | نُقْطَتَان |
| عائلة العلامة | <span dir="ltr">`ijam`</span> |
| تهجئات أخرى | <span dir="ltr">`nuqtatan`، `two-dots`</span> |

**التعريف:** النقطتان نقطتان فوق الحرف أو تحته تميزانه عن الحرف الذي يشاركه في الرسم، مثل التاء والياء والقاف.

**الغرض:** نستخدمها قيمة من قيم النقط، فنميز بها الحرف عن الحرف الذي يشاركه في الرسم في التحليل والبحث.

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!two-dots`

### وقف المعانقة — Waqf al-Muanaqah [#waqf_al_muanaqah]

<!-- source: standards/terminology/concepts/waqf_al_muanaqah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`waqf_al_muanaqah`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`waqf_mark_type`](/ar/docs/terms/dictionary/waqf#waqf_mark_type)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | وَقْف المُعَانَقَة |
| اسمه في الضبط | وَقْف المُعَانَقَة (ويُسمَّى وَقْف المُرَاقَبَة) |
| اسمه بشكله | ثَلَاث نُقَط تَتَكَرَّر عَلَى كَلِمَتَيْن |
| اسمه في تعريف المصحف | عَلَامَة تَعَانُق الوَقْف |
| الرمز | ثَلَاث نُقَط في مَوْضِعَيْن |
| المحارف | <span dir="ltr">`U+06DB` ARABIC SMALL HIGH THREE DOTS</span> |
| عائلة العلامة | <span dir="ltr">`waqf`</span> |
| تهجئات أخرى | <span dir="ltr">`muanaqah`، `muraqabah`، `taanuq_al_waqf`، `waqf_al_muraqabah`</span> |

**التعريف:** وقف المعانقة علامة تدل على موضعين للوقف، إذا وقف القارئ على أحدهما لم يصح الوقف على الآخر.

**الغرض:** نستخدمها قيمة من قيم نوع علامة الوقف، فنبني عليها العرض والتلقين والتنبيه في التطبيقات بدلًا من قراءة صورة الرمز.

**مرتبط به:** <span dir="ltr">[`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!muanaqah`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### الوقف الجائز مستوي الطرفين — Waqf Jaiz Mustawi al-Tarafayn [#waqf_jaiz_mustawi_al_tarafayn]

<!-- source: standards/terminology/concepts/waqf_jaiz_mustawi_al_tarafayn.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`waqf_jaiz_mustawi_al_tarafayn`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`waqf_mark_type`](/ar/docs/terms/dictionary/waqf#waqf_mark_type)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الوَقْف الجَائِز مُسْتَوِي الطَّرَفَيْن |
| اسمه في الضبط | الجِيم — عَلَامَة الوَقْف الجَائِز |
| اسمه بشكله | جِيم |
| اسمه في تعريف المصحف | عَلَامَة الوَقْف الجَائِز جَوَازًا مُسْتَوِيَ الطَّرَفَيْن |
| الرمز | ج |
| المحارف | <span dir="ltr">`U+06DA` ARABIC SMALL HIGH JEEM</span> |
| عائلة العلامة | <span dir="ltr">`waqf`</span> |
| أسماء متروكة | <span dir="ltr">`waqf-jaiz`، `waqf_jaiz`</span> |

**التعريف:** الوقف الجائز علامة تدل على أن الوقف جائز جوازًا مستوي الطرفين، فالوقف والوصل فيه سواء.

**الغرض:** نستخدمها قيمة من قيم نوع علامة الوقف، فنبني عليها العرض والتلقين والتنبيه في التطبيقات بدلًا من قراءة صورة الرمز.

> كان `waqf_jaiz` اسم هذه العلامة في سجل المصحف، وهو اسم يصدق على ثلاث علامات جائزة، فأُهمل.

**مرتبط به:** <span dir="ltr">[`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!waqf-jaiz`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### الوقف الجائز مع كون الوقف أولى — Waqf Jaiz Waqf Awla [#waqf_jaiz_waqf_awla]

<!-- source: standards/terminology/concepts/waqf_jaiz_waqf_awla.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`waqf_jaiz_waqf_awla`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`waqf_mark_type`](/ar/docs/terms/dictionary/waqf#waqf_mark_type)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الوَقْف الجَائِز مَعَ كَوْنِ الوَقْف أَوْلَى |
| اسمه في الضبط | قلى — عَلَامَة الوَقْف أَوْلَى |
| اسمه بشكله | قلى |
| اسمه في تعريف المصحف | عَلَامَة الوَقْف الجَائِز مَع كَوْن الوَقْف أَوْلَى |
| الرمز | قلى |
| المحارف | <span dir="ltr">`U+06D7` ARABIC SMALL HIGH LIGATURE QAF WITH LAM WITH ALEF MAKSURA</span> |
| عائلة العلامة | <span dir="ltr">`waqf`</span> |
| تهجئات أخرى | <span dir="ltr">`waqf-awla`، `waqf_awla`</span> |

**التعريف:** علامة الوقف أولى تدل على أن الوقف جائز والوقف أولى.

**الغرض:** نستخدمها قيمة من قيم نوع علامة الوقف، فنبني عليها العرض والتلقين والتنبيه في التطبيقات بدلًا من قراءة صورة الرمز.

**مرتبط به:** <span dir="ltr">[`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!waqf-awla`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### الوقف الجائز مع كون الوصل أولى — Waqf Jaiz Wasl Awla [#waqf_jaiz_wasl_awla]

<!-- source: standards/terminology/concepts/waqf_jaiz_wasl_awla.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`waqf_jaiz_wasl_awla`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`waqf_mark_type`](/ar/docs/terms/dictionary/waqf#waqf_mark_type)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الوَقْف الجَائِز مَعَ كَوْنِ الوَصْل أَوْلَى |
| اسمه في الضبط | صلى — عَلَامَة الوَصْل أَوْلَى |
| اسمه بشكله | صلى |
| اسمه في تعريف المصحف | عَلَامَة الوَقْف الجَائِز مَع كَوْن الوَصْل أَوْلَى |
| الرمز | صلى |
| المحارف | <span dir="ltr">`U+06D6` ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA</span> |
| عائلة العلامة | <span dir="ltr">`waqf`</span> |
| تهجئات أخرى | <span dir="ltr">`wasl-awla`، `wasl_awla`</span> |

**التعريف:** علامة الوصل أولى تدل على أن الوقف جائز والوصل أولى.

**الغرض:** نستخدمها قيمة من قيم نوع علامة الوقف، فنبني عليها العرض والتلقين والتنبيه في التطبيقات بدلًا من قراءة صورة الرمز.

**مرتبط به:** <span dir="ltr">[`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!wasl-awla`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### الوقف اللازم — Waqf Lazim [#waqf_lazim]

<!-- source: standards/terminology/concepts/waqf_lazim.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`waqf_lazim`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`waqf_mark_type`](/ar/docs/terms/dictionary/waqf#waqf_mark_type)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الوَقْف اللَّازِم |
| اسمه في الضبط | المِيم — عَلَامَة الوَقْف اللَّازِم |
| اسمه بشكله | مِيم |
| اسمه في تعريف المصحف | عَلَامَة الوَقْف اللَّازِم |
| الرمز | م |
| المحارف | <span dir="ltr">`U+06D8` ARABIC SMALL HIGH MEEM INITIAL FORM</span> |
| عائلة العلامة | <span dir="ltr">`waqf`</span> |
| تهجئات أخرى | <span dir="ltr">`waqf-lazim`</span> |

**التعريف:** الوقف اللازم علامة تدل على أن الوقف لازم، لأن وصل ما بعده بما قبله يوهم خلاف المعنى المراد.

**الغرض:** نستخدمها قيمة من قيم نوع علامة الوقف، فنبني عليها العرض والتلقين والتنبيه في التطبيقات بدلًا من قراءة صورة الرمز.

**مرتبط به:** <span dir="ltr">[`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!waqf-lazim`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/122) — `122`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### الوقف الممنوع — Waqf Mamnu [#waqf_mamnu]

<!-- source: standards/terminology/concepts/waqf_mamnu.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`waqf_mamnu`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`waqf_mark_type`](/ar/docs/terms/dictionary/waqf#waqf_mark_type)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الوَقْف المَمْنُوع |
| اسمه في الضبط | لا — عَلَامَة الوَقْف المَمْنُوع |
| اسمه بشكله | لا |
| الرمز | لا |
| المحارف | <span dir="ltr">`U+06D9` ARABIC SMALL HIGH LAM ALEF</span> |
| عائلة العلامة | <span dir="ltr">`waqf`</span> |
| تهجئات أخرى | <span dir="ltr">`waqf-mamnu`</span> |

**التعريف:** الوقف الممنوع علامة تدل على أن الوقف ممنوع، لأن الوقف على الموضع يفسد المعنى أو يقطع ما لا ينفصل عما بعده.

**الغرض:** نستخدمها قيمة من قيم نوع علامة الوقف، فنبني عليها العرض والتلقين والتنبيه في التطبيقات بدلًا من قراءة صورة الرمز.

> مثبتة في سجل المصحف ولم ترد في هذه الطبعة البتة.

**مرتبط به:** <span dir="ltr">[`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `standard!waqf-mamnu`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

### علامة الوقف — Waqf Mark [#waqf_mark]

<!-- source: standards/terminology/concepts/waqf_mark.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`waqf_mark`</span> |
| `plural` | <span dir="ltr">`waqf_marks`</span> |
| `kind` | <span dir="ltr">`mark`</span> |
| الأب | <span dir="ltr">[`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | عَلَامَة الوَقْف |

**التعريف:** علامة الوقف علامة في المصحف ترشد القارئ إلى حكم الوقف أو الوصل في موضع معين.

**الغرض:** نستخدمها لتمثيل الرمز وموضعه ونوعه على نحو منظم.

**مرتبط به:** <span dir="ltr">[`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`waqf_mark_type`](/ar/docs/terms/dictionary/waqf#waqf_mark_type)، [`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)، [`waqf_al_muanaqah`](/ar/docs/terms/dictionary/dabt#waqf_al_muanaqah)، [`waqf_jaiz_mustawi_al_tarafayn`](/ar/docs/terms/dictionary/dabt#waqf_jaiz_mustawi_al_tarafayn)، [`waqf_jaiz_waqf_awla`](/ar/docs/terms/dictionary/dabt#waqf_jaiz_waqf_awla)، [`waqf_jaiz_wasl_awla`](/ar/docs/terms/dictionary/dabt#waqf_jaiz_wasl_awla)، [`waqf_lazim`](/ar/docs/terms/dictionary/dabt#waqf_lazim)، [`waqf_mamnu`](/ar/docs/terms/dictionary/dabt#waqf_mamnu)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/152`

