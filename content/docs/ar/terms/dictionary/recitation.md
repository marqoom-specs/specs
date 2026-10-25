---
title: "التلاوة"
description: "recitation"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Ayah Timing [#ayah_timing]

<!-- source: standards/terminology/concepts/ayah_timing.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ayah_timing`</span> |
| `plural` | <span dir="ltr">`ayah_timings`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| تهجئات أخرى | <span dir="ltr">`ayah_timestamp`، `recitation_timing`، `timing`، `verse_timing`</span> |

**التعريف:** توقيت الآية مدى زمني في تسجيل تلاوة، له بداية ونهاية، ويقابل آية بعينها.

**الغرض:** نستخدمه لربط النص بالصوت. وعليه يقوم تتبع النص في أثناء الاستماع والانتقال إلى آية وتكرارها واقتطاعها.

- التوقيت صفة للتسجيل وليس للآية، فيختلف باختلاف التلاوة.
- التوقيت على مستوى الآية يختلف عن المحاذاة على مستوى الكلمة.

**مرتبط به:** <span dir="ltr">[`recitation`](/ar/docs/terms/dictionary/recitation#recitation)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`reciter`](/ar/docs/terms/dictionary/recitation#reciter)، [`word_timing`](/ar/docs/terms/dictionary/recitation#word_timing)</span>

### الاستعاذة — Istiadhah [#istiadhah]

<!-- source: standards/terminology/concepts/istiadhah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`istiadhah`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الاِسْتِعَاذَة |
| تهجئات أخرى | <span dir="ltr">`isti'adhah`، `istiʿādhah`، `ta'awwudh`، `istiadha`، `istiaadhah`، `taawwudh`</span> |

**التعريف:** الاستعاذة طلب العوذ بالله من الشيطان عند إرادة تلاوة القرآن.

**الغرض:** نستخدمها لتمثيل الاستعاذة وصيغها وموضعها بالنسبة إلى بداية التلاوة.

**مرتبط به:** <span dir="ltr">[`basmalah`](/ar/docs/terms/dictionary/structure#basmalah)، [`recitation`](/ar/docs/terms/dictionary/recitation#recitation)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/27) — `27`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/243`

### الختمة — Khatmah [#khatmah]

<!-- source: standards/terminology/concepts/khatmah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`khatmah`</span> |
| `plural` | <span dir="ltr">`khatmahs`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الخَتْمَة |
| تهجئات أخرى | <span dir="ltr">`khatma`</span> |

**التعريف:** الختمة قراءة القرآن كاملًا من أوله إلى آخره.

**الغرض:** نستخدمها لتتبع خطط الختم وإتمام القراءة وربط الجلسات بمسار ختمة.

**مرتبط به:** <span dir="ltr">[`juz`](/ar/docs/terms/dictionary/divisions#juz)، [`manzil`](/ar/docs/terms/dictionary/divisions#manzil)، [`recitation`](/ar/docs/terms/dictionary/recitation#recitation)</span>

### تسجيل التلاوة — Recitation [#recitation]

<!-- source: standards/terminology/concepts/recitation.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`recitation`</span> |
| `plural` | <span dir="ltr">`recitations`</span> |
| `kind` | <span dir="ltr">`entity`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | تَسْجِيل التِّلَاوَة |

**التعريف:** تسجيل التلاوة هو تسجيل منشور لتلاوة القرآن، منسوب إلى قارئ ورواية ونمط أداء.

**الغرض:** نستخدم تسجيل التلاوة لتمثيل التسجيل الذي تربط به التوقيتات ونمط الأداء ومرتبة السرعة. وينسب التسجيل إلى قارئ ورواية، ويبقى مستقلًا عن فعل التلاوة.

- تسجيل التلاوة هو التسجيل المنشور المنسوب إلى قارئ ورواية ونمط أداء، أما التلاوة فهي الفعل نفسه.

**مرتبط به:** <span dir="ltr">[`reciter`](/ar/docs/terms/dictionary/recitation#reciter)، [`riwayah`](/ar/docs/terms/dictionary/qiraat#riwayah)، [`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)، [`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)، [`ayah_timing`](/ar/docs/terms/dictionary/recitation#ayah_timing)، [`word_timing`](/ar/docs/terms/dictionary/recitation#word_timing)، [`tilawah`](/ar/docs/terms/dictionary/recitation#tilawah)، [`istiadhah`](/ar/docs/terms/dictionary/recitation#istiadhah)، [`khatmah`](/ar/docs/terms/dictionary/recitation#khatmah)، [`spoken_translation`](/ar/docs/terms/dictionary/translation#spoken_translation)، [`tajwid`](/ar/docs/terms/dictionary/tajwid#tajwid)، [`tartil`](/ar/docs/terms/dictionary/recitation#tartil)</span>

### القارئ — Reciter [#reciter]

<!-- source: standards/terminology/concepts/reciter.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`reciter`</span> |
| `plural` | <span dir="ltr">`reciters`</span> |
| `kind` | <span dir="ltr">`role`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | القَارِئ |
| تهجئات أخرى | <span dir="ltr">`qari`، `qaari`</span> |

**التعريف:** القارئ هو الشخص الذي يؤدي تلاوة القرآن.

**الغرض:** نستخدم القارئ لربط التسجيلات الصوتية بمؤديها.

- القارئ هو مؤدي التلاوة في التسجيل، وليس إمام قراءة ولا راويًا.

**مرتبط به:** <span dir="ltr">[`recitation`](/ar/docs/terms/dictionary/recitation#recitation)، [`rawi`](/ar/docs/terms/dictionary/qiraat#rawi)، [`muqri`](/ar/docs/terms/dictionary/qiraat#muqri)، [`ayah_timing`](/ar/docs/terms/dictionary/recitation#ayah_timing)، [`tilawah`](/ar/docs/terms/dictionary/recitation#tilawah)</span>

### الترتيل — Tartil [#tartil]

<!-- source: standards/terminology/concepts/tartil.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tartil`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّرْتِيل |
| تهجئات أخرى | <span dir="ltr">`tarteel`</span> |

**التعريف:** الترتيل هو قراءة القرآن بتؤدة وبيان للحروف والكلمات ومراعاة الوقف والمعنى.

**الغرض:** نستخدم الترتيل صفة للأداء في وصف التسجيل والتعليم، وليس اسمًا للنمط الذي ينشر به التسجيل.

- الترتيل صفة الأداء نفسه، والمرتل نمط تسجيل، ولا يستعمل أحد الاسمين مكان الآخر.

**مرتبط به:** <span dir="ltr">[`murattal`](/ar/docs/terms/dictionary/recitation_style#murattal)، [`recitation`](/ar/docs/terms/dictionary/recitation#recitation)، [`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)، [`tilawah`](/ar/docs/terms/dictionary/recitation#tilawah)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/21) — `21`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/205`

### التلاوة — Tilawah [#tilawah]

<!-- source: standards/terminology/concepts/tilawah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tilawah`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التِّلَاوَة |
| تهجئات أخرى | <span dir="ltr">`tilaawah`، `tilawa`، `tilawat`</span> |

**التعريف:** التلاوة هي قراءة القرآن بلفظه أداء بالصوت على ما تلقاه القارئ، سواء كانت في صلاة أو درس أو تسجيل.

**الغرض:** نستخدم التلاوة للدلالة على فعل القراءة نفسه حيث يقصد، مثل أحكام التلاوة وآدابها وسجدتها وتعلمها. ويبقى التسجيل المنشور لها `recitation`.

- التلاوة هي الفعل، و`recitation` هو التسجيل المنشور المنسوب إلى قارئ ورواية ونمط أداء.
- الترتيل صفة في التلاوة وليس التلاوة نفسها.

**مرتبط به:** <span dir="ltr">[`recitation`](/ar/docs/terms/dictionary/recitation#recitation)، [`tartil`](/ar/docs/terms/dictionary/recitation#tartil)، [`sajdah`](/ar/docs/terms/dictionary/structure#sajdah)، [`reciter`](/ar/docs/terms/dictionary/recitation#reciter)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/16) — `16`

### Word Timing [#word_timing]

<!-- source: standards/terminology/concepts/word_timing.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`word_timing`</span> |
| `plural` | <span dir="ltr">`word_timings`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| تهجئات أخرى | <span dir="ltr">`word_timestamp`، `word_alignment`، `word_segment_timing`، `timing_segment`، `audio_segment`، `word_timings`</span> |

**التعريف:** توقيت الكلمة هو مدى زمني في تسجيل تلاوة، محدد ببداية ونهاية، يقابل كلمة بعينها من آية.

**الغرض:** نستخدم توقيت الكلمة لإبراز الكلمة المتلوة في أثناء الاستماع، ولمحاذاة النص مع الصوت على مستوى أدق من الآية، ولتقطيع التسجيل عند كلمة.

- توقيت الكلمة يقع داخل توقيت آيتها ولا يتجاوزه.
- تسمي واجهات الصوت هذا المفهوم `segment`، أما الاسم في هذا المعيار فهو `word_timing`، لأن `segment` في مدونات التحليل اللغوي اسم للوحدة الصرفية.

**مرتبط به:** <span dir="ltr">[`ayah_timing`](/ar/docs/terms/dictionary/recitation#ayah_timing)، [`word`](/ar/docs/terms/dictionary/text#word)، [`word_key`](/ar/docs/terms/dictionary/structure#word_key)، [`recitation`](/ar/docs/terms/dictionary/recitation#recitation)</span>

