---
title: "البنية"
description: "structure"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### الآية — Ayah [#ayah]

<!-- source: standards/terminology/concepts/ayah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ayah`</span> |
| `plural` | <span dir="ltr">`ayahs`</span> |
| `kind` | <span dir="ltr">`entity`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الآيَة |
| الجمع | آيات |
| النقحرة | <span dir="ltr">āyah</span> |
| تهجئات أخرى | <span dir="ltr">`aya`، `ayat`، `ayaat`</span> |
| مقابل إنجليزي | <span dir="ltr">`Verse`</span> |

**التعريف:** الآية وحدة من النص القرآني تقع داخل سورة ولها حدود محددة. وقد يختلف رقمها أو بعض حدودها باختلاف نظام عد الآي.

**الغرض:** نستخدمها وحدة أساسية للإشارة إلى النص القرآني، ولربط الترجمات والتفاسير والتلاوات والتحليلات والبيانات الأخرى بموضع محدد من القرآن.

- موقع الآية في صفحة أو سطر يخص المصحف أو تخطيطه، وليس جزءًا من هوية الآية نفسها.
- الفاصلة هي نهاية الآية وليست الآية نفسها.

**مرتبط به:** <span dir="ltr">[`surah`](/ar/docs/terms/dictionary/structure#surah)، [`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`ayah_ending`](/ar/docs/terms/dictionary/structure#ayah_ending)، [`ayah_mark`](/ar/docs/terms/dictionary/dabt#ayah_mark)، [`ayah_key`](/ar/docs/terms/dictionary/structure#ayah_key)، [`word`](/ar/docs/terms/dictionary/text#word)، [`abrogation`](/ar/docs/terms/dictionary/quranic_sciences#abrogation)، [`asbab_al_nuzul`](/ar/docs/terms/dictionary/revelation#asbab_al_nuzul)، [`ayah_count`](/ar/docs/terms/dictionary/ayah_numbering#ayah_count)، [`ayah_fragment`](/ar/docs/terms/dictionary/mushaf#ayah_fragment)، [`ayah_numbering_basri`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri)، [`ayah_numbering_dimashqi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi)، [`ayah_numbering_kufi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi)، [`ayah_numbering_madani_first`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first)، [`ayah_numbering_madani_last`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last)، [`ayah_numbering_makki`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki)، [`ayah_timing`](/ar/docs/terms/dictionary/recitation#ayah_timing)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)، [`mutashabihat`](/ar/docs/terms/dictionary/quranic_sciences#mutashabihat)، [`quran`](/ar/docs/terms/dictionary/core#quran)، [`quran_merits`](/ar/docs/terms/dictionary/quranic_sciences#quran_merits)، [`reflection`](/ar/docs/terms/dictionary/quranic_sciences#reflection)، [`sajdah`](/ar/docs/terms/dictionary/structure#sajdah)، [`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir)، [`tafsir_mathur`](/ar/docs/terms/dictionary/tafsir#tafsir_mathur)، [`word_meanings`](/ar/docs/terms/dictionary/quranic_sciences#word_meanings)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/140`

### الفاصلة — Ayah Ending [#ayah_ending]

<!-- source: standards/terminology/concepts/ayah_ending.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ayah_ending`</span> |
| `plural` | <span dir="ltr">`ayah_endings`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الفَاصِلَة |
| تهجئات أخرى | <span dir="ltr">`fasila`</span> |
| مقابل إنجليزي | <span dir="ltr">`Verse Ending`</span> |

**التعريف:** الفاصلة هي خاتمة الآية أو المقطع من جهة النظم، ويعرفها بعض العلماء بأنها الكلمة الأخيرة من الآية.

**الغرض:** نستخدمها في الدراسات والبيانات التي تتناول فواصل الآيات والنظم القرآني، ولا نستخدمها مرادفًا لـ`ayah`.

- الفاصلة خاتمة الآية من جهة النظم، أما علامة الآية فهي رسم في المصحف يدل على الفاصلة.

**مرتبط به:** <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`ayah_mark`](/ar/docs/terms/dictionary/dabt#ayah_mark)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/153`

### Ayah Key [#ayah_key]

<!-- source: standards/terminology/concepts/ayah_key.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ayah_key`</span> |
| `plural` | <span dir="ltr">`ayah_keys`</span> |
| `kind` | <span dir="ltr">`property`</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| تهجئات أخرى | <span dir="ltr">`ayah_ref`، `ayah_reference`، `aya_key`</span> |
| مقابل إنجليزي | <span dir="ltr">`verse key`</span> |

**التعريف:** مفتاح الآية معرف نصي للآية يجمع رقم سورتها ورقمها داخلها مفصولين بنقطتين، على صورة `2:255`. ولا يُفهم المفتاح إلا مع نظام عد الآي الذي يستند إليه.

**الغرض:** نستخدمه مفتاحًا للربط بين مصادر البيانات ولنقل الإشارة إلى الآية بين الواجهات والملفات. وتقييده بنظام العد يمنع أن يشير المفتاح الواحد إلى موضعين.

- المفتاح مرجع وليس هوية، فتغيير نظام العد يغير المفتاح ولا يغير الآية.
- المفتاح ليس الرقم المتسلسل للآية في المصحف كله.

**مرتبط به:** <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`surah`](/ar/docs/terms/dictionary/structure#surah)، [`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`word_key`](/ar/docs/terms/dictionary/structure#word_key)</span>

### البسملة — Basmalah [#basmalah]

<!-- source: standards/terminology/concepts/basmalah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`basmalah`</span> |
| `plural` | <span dir="ltr">`basmalahs`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | البَسْمَلَة |
| تهجئات أخرى | <span dir="ltr">`basmala`، `bismillah`</span> |

**التعريف:** البسملة هي صيغة «بسم الله الرحمن الرحيم» التي تفتتح بها السور عدا سورة التوبة. ولها أحكام واختلافات مرتبطة بعد الآي.

**الغرض:** نستخدمها لتمييز البسملة وتمثيل موضعها وعلاقتها بالسورة ونظام عد الآي.

**مرتبط به:** <span dir="ltr">[`surah`](/ar/docs/terms/dictionary/structure#surah)، [`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`istiadhah`](/ar/docs/terms/dictionary/recitation#istiadhah)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/30) — `30`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/145`

### الحرف المقطع — Muqatta Letter [#muqatta_letter]

<!-- source: standards/terminology/concepts/muqatta_letter.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`muqatta_letter`</span> |
| `plural` | <span dir="ltr">`muqatta_letters`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الحَرْف المُقَطَّع |
| مقابل إنجليزي | <span dir="ltr">`Disjointed Letters`</span> |

**التعريف:** الحروف المقطعة حروف هجائية افتتحت بها بعض السور، مثل «الم» و«الر» و«حم» و«كهيعص».

**الغرض:** نستخدمه لتعريف هذه الفواتح وتمييزها وربطها بالسور ومواضعها النصية.

**مرتبط به:** <span dir="ltr">[`surah`](/ar/docs/terms/dictionary/structure#surah)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/113) — `113`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `3/361`

### السجدة — Sajdah [#sajdah]

<!-- source: standards/terminology/concepts/sajdah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`sajdah`</span> |
| `plural` | <span dir="ltr">`sajdahs`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | السَّجْدَة |
| السجل | <span dir="ltr">[`sajdah`](/ar/docs/terms/registries#sajdah)</span> |
| تهجئات أخرى | <span dir="ltr">`sajda`، `sajdah_place`، `mawdi_al_sajdah`، `sujud_al_tilawah`، `sajdat_al_tilawah`</span> |
| مقابل إنجليزي | <span dir="ltr">`Prostration`، `Prostration of Recitation`</span> |

**التعريف:** السجدة موضع من مواضع سجود التلاوة في القرآن، ينتهي بآية بعينها، يسجد عنده القارئ والسامع. والسجدات معدودة، 15 على المشهور، والعلماء يختلفون في عد بعضها.

**الغرض:** نستخدم السجدة لعد مواضعها وربط كل موضع بسورته وآيته وصفحته، ولربط أحكام السجود وآدابه به، ولتمييز الموضع عن العلامة التي ترسم عنده.

- السجدة موضع من النص والسجود عنده شيء واحد، أما علامة السجدة فرسم في المصحف يدل عليه.

> دُمج من `sajdah_place` و`sujud_al_tilawah`. كان القاموس يفصل الموضع عن الفعل، ولا يخزن برنامج فعلًا بمعزل عن موضعه، والاسم الشائع «السجدات الخمس عشرة» يسمي الاثنين معًا. والسبب في سجل القرارات.

**مرتبط به:** <span dir="ltr">[`sajdah_mark`](/ar/docs/terms/dictionary/dabt#sajdah_mark)، [`sajdah_line`](/ar/docs/terms/dictionary/dabt#sajdah_line)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`tilawah`](/ar/docs/terms/dictionary/recitation#tilawah)</span>

**المصادر:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/381`

### السورة — Surah [#surah]

<!-- source: standards/terminology/concepts/surah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`surah`</span> |
| `plural` | <span dir="ltr">`surahs`</span> |
| `kind` | <span dir="ltr">`entity`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | السُّورَة |
| السجل | <span dir="ltr">[`surahs`](/ar/docs/terms/registries#surahs)</span> |
| تهجئات أخرى | <span dir="ltr">`sura`، `surat`، `soorah`، `suwar`</span> |
| مقابل إنجليزي | <span dir="ltr">`Chapter`</span> |

**التعريف:** السورة هي وحدة رئيسية من بنية القرآن، تتكون من آيات مرتبة ولها اسم وموضع معروف في ترتيب المصحف.

**الغرض:** نستخدم السورة وحدة رئيسية لتنظيم النص وربط الآيات والبيانات المتعلقة بالسورة.

**مرتبط به:** <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`surah_names`](/ar/docs/terms/dictionary/quranic_sciences#surah_names)، [`surah_group`](/ar/docs/terms/dictionary/surah_classification#surah_group)، [`revelation_classification`](/ar/docs/terms/dictionary/revelation#revelation_classification)، [`basmalah`](/ar/docs/terms/dictionary/structure#basmalah)، [`ayah_count`](/ar/docs/terms/dictionary/ayah_numbering#ayah_count)، [`ayah_key`](/ar/docs/terms/dictionary/structure#ayah_key)، [`mathani`](/ar/docs/terms/dictionary/surah_classification#mathani)، [`miun`](/ar/docs/terms/dictionary/surah_classification#miun)، [`mufassal`](/ar/docs/terms/dictionary/surah_classification#mufassal)، [`muqatta_letter`](/ar/docs/terms/dictionary/structure#muqatta_letter)، [`quran`](/ar/docs/terms/dictionary/core#quran)، [`quran_merits`](/ar/docs/terms/dictionary/quranic_sciences#quran_merits)، [`revelation_order`](/ar/docs/terms/dictionary/revelation#revelation_order)، [`saba_tiwal`](/ar/docs/terms/dictionary/surah_classification#saba_tiwal)، [`surah_name_reason`](/ar/docs/terms/dictionary/quranic_sciences#surah_name_reason)، [`surah_objectives`](/ar/docs/terms/dictionary/quranic_sciences#surah_objectives)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/140`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/178`

### Word Key [#word_key]

<!-- source: standards/terminology/concepts/word_key.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`word_key`</span> |
| `plural` | <span dir="ltr">`word_keys`</span> |
| `kind` | <span dir="ltr">`property`</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| تهجئات أخرى | <span dir="ltr">`wid`، `data_wid`، `word_ref`، `word_position_key`</span> |

**التعريف:** مفتاح الكلمة هو معرف نصي للكلمة يضيف إلى مفتاح الآية موضع الكلمة فيها، على صورة `2:255:5`. ويعد موضع الكلمة من أول الآية بحسب منهج تقسيم معلن.

**الغرض:** نستخدم مفتاح الكلمة مفتاحًا للبيانات المرتبطة بالكلمة، مثل التوقيت والترجمة كلمة بكلمة والتحليل الصرفي والصور.

- الموضع في المفتاح هو موضع الكلمة وليس `token`، لذلك تغيير منهج التقسيم الذي يعد الكلمات يغير المفتاح.

**مرتبط به:** <span dir="ltr">[`ayah_key`](/ar/docs/terms/dictionary/structure#ayah_key)، [`word`](/ar/docs/terms/dictionary/text#word)، [`word_timing`](/ar/docs/terms/dictionary/recitation#word_timing)، [`word_by_word_translation`](/ar/docs/terms/dictionary/translation#word_by_word_translation)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `word_attributes!data-wid`

