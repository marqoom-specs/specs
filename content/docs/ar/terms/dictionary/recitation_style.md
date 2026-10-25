---
title: "أنماط الأداء"
description: "recitation_style"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### تكرار الآيات — Instructional Ayah Repetition [#instructional_ayah_repetition]

<!-- source: standards/terminology/concepts/instructional_ayah_repetition.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`instructional_ayah_repetition`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | تَكْرَار الآيَات |

**التعريف:** تكرار الآيات هو إعادة آية أو جزء منها مرة أو مرات وفق نمط تعليمي يساعد على التلقي والحفظ.

**الغرض:** نستخدمه لوصف ميزة مستقلة في التسجيل التعليمي ولا نجعله جزءًا ضمنيًا من `muallim`.

**مرتبط به:** <span dir="ltr">[`muallim`](/ar/docs/terms/dictionary/recitation_style#muallim)، [`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)</span>

### معلم — Muallim [#muallim]

<!-- source: standards/terminology/concepts/muallim.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`muallim`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مُعَلِّم |

**التعريف:** المعلم نمط تلاوة معد للتعليم، وقد يتضمن تكرار الآيات أو إتاحة وقت للمتعلم للترديد.

**الغرض:** نستخدمه لتصنيف التسجيل بحسب نمطه.

**مرتبط به:** <span dir="ltr">[`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)، [`instructional_ayah_repetition`](/ar/docs/terms/dictionary/recitation_style#instructional_ayah_repetition)</span>

### مجود — Mujawwad [#mujawwad]

<!-- source: standards/terminology/concepts/mujawwad.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`mujawwad`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مُجَوَّد |

**التعريف:** المجود نمط أداء بطيء يُمد فيه الصوت وتُستوفى أحكام التجويد بتطريب، وهو الوصف الذي تُنشر به التسجيلات المؤداة على هذا النحو.

**الغرض:** نستخدمه لتصنيف التسجيل بحسب نمطه.

- المجود نمط تسجيل، والتجويد علم يؤدى به كل نمط، لذلك لا يستعمل أحد الاسمين مكان الآخر.

**مرتبط به:** <span dir="ltr">[`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)، [`murattal`](/ar/docs/terms/dictionary/recitation_style#murattal)، [`tajwid`](/ar/docs/terms/dictionary/tajwid#tajwid)</span>

### مرتل — Murattal [#murattal]

<!-- source: standards/terminology/concepts/murattal.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`murattal`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مُرَتَّل |

**التعريف:** المرتل نمط أداء متزن دون تطريب، على مرتبة الترتيل، وهو الوصف الذي تُنشر به التسجيلات المؤداة على هذا النحو.

**الغرض:** نستخدمه لتصنيف التسجيل بحسب نمطه.

- المرتل نمط تسجيل، والترتيل صفة الأداء نفسه، لذلك لا يستعمل أحد الاسمين مكان الآخر.

**مرتبط به:** <span dir="ltr">[`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)، [`mujawwad`](/ar/docs/terms/dictionary/recitation_style#mujawwad)، [`tartil`](/ar/docs/terms/dictionary/recitation#tartil)</span>

### نمط الأداء — Recitation Style [#recitation_style]

<!-- source: standards/terminology/concepts/recitation_style.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`recitation_style`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| القيم | <span dir="ltr">[`muallim`](/ar/docs/terms/dictionary/recitation_style#muallim)، [`mujawwad`](/ar/docs/terms/dictionary/recitation_style#mujawwad)، [`murattal`](/ar/docs/terms/dictionary/recitation_style#murattal)</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | نَمَط الأَدَاء |

**التعريف:** نمط الأداء هو تصنيف للتسجيلات والتلاوات بحسب طريقة أدائها، وهي مرتل أو مجود أو معلم، وهو مستقل عن القراءة والرواية.

**الغرض:** نستخدم نمط الأداء لتصنيف التسجيلات الصوتية بحسب طريقة الأداء أو الغرض منها.

**مرتبط به:** <span dir="ltr">[`murattal`](/ar/docs/terms/dictionary/recitation_style#murattal)، [`mujawwad`](/ar/docs/terms/dictionary/recitation_style#mujawwad)، [`muallim`](/ar/docs/terms/dictionary/recitation_style#muallim)، [`recitation`](/ar/docs/terms/dictionary/recitation#recitation)، [`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)، [`instructional_ayah_repetition`](/ar/docs/terms/dictionary/recitation_style#instructional_ayah_repetition)</span>

