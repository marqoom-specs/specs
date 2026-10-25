---
title: "التفسير"
description: "tafsir"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### المفسر — Mufassir [#mufassir]

<!-- source: standards/terminology/concepts/mufassir.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`mufassir`</span> |
| `plural` | <span dir="ltr">`mufassirs`</span> |
| `kind` | <span dir="ltr">`role`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المُفَسِّر |
| مقابل إنجليزي | <span dir="ltr">`Exegete`</span> |

**التعريف:** المفسر من نُسب إليه تفسير للقرآن، تأليفًا أو رواية.

**الغرض:** نستخدمه لنسبة التفسير إلى صاحبه، فيتميز صاحب القول عن الكتاب الذي نُقل فيه وعن محققه وناشره.

- المفسر صاحب القول، وقد يُنقل قوله في كتاب لغيره.

**مرتبط به:** <span dir="ltr">[`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir)، [`translator`](/ar/docs/terms/dictionary/translation#translator)، [`tafsir_al_ray`](/ar/docs/terms/dictionary/tafsir#tafsir_al_ray)</span>

**المصادر:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `4/200`

### التفسير — Tafsir [#tafsir]

<!-- source: standards/terminology/concepts/tafsir.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tafsir`</span> |
| `plural` | <span dir="ltr">`tafsirs`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّفْسِير |
| تهجئات أخرى | <span dir="ltr">`tafseer`</span> |
| مقابل إنجليزي | <span dir="ltr">`Exegesis`، `Commentary`</span> |

**التعريف:** التفسير هو بيان معاني القرآن وشرح ألفاظه وما يرشد إليه من أحكام وهدايات بحسب أصول التفسير.

**الغرض:** نستخدم التفسير لتمثيل كتب التفسير ومحتواه وربط مقاطعه بالآيات والسور والمصادر.

**مرتبط به:** <span dir="ltr">[`tafsir_mathur`](/ar/docs/terms/dictionary/tafsir#tafsir_mathur)، [`tafsir_al_ray`](/ar/docs/terms/dictionary/tafsir#tafsir_al_ray)، [`mufassir`](/ar/docs/terms/dictionary/tafsir#mufassir)، [`word_meanings`](/ar/docs/terms/dictionary/quranic_sciences#word_meanings)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`reflection`](/ar/docs/terms/dictionary/quranic_sciences#reflection)، [`surah_objectives`](/ar/docs/terms/dictionary/quranic_sciences#surah_objectives)، [`translation`](/ar/docs/terms/dictionary/translation#translation)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/334`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `4/192`

### تفسير الرأي — Tafsir al-Ray [#tafsir_al_ray]

<!-- source: standards/terminology/concepts/tafsir_al_ray.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tafsir_al_ray`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | تَفْسِير الرَّأْي |
| تهجئات أخرى | <span dir="ltr">`tafsir_bil_ray`، `tafsir_bialray`، `tafsir_al_raay`، `tafsir_bir_ray`</span> |
| مقابل إنجليزي | <span dir="ltr">`reasoned tafsir`</span> |

**التعريف:** تفسير الرأي هو بيان معاني القرآن بالاجتهاد والنظر بعد معرفة كلام العرب وأساليبه وأصول التفسير، سواء كان الاجتهاد محمودًا أو مذمومًا.

**الغرض:** نستخدم تفسير الرأي نوعًا للمحتوى المؤلف الذي ينسب إلى صاحبه قولًا، حتى يتميز عما ينقل بإسناد.

- تفسير الرأي قول صاحبه، والتفسير المأثور منقول بإسناد.

**مرتبط به:** <span dir="ltr">[`tafsir_mathur`](/ar/docs/terms/dictionary/tafsir#tafsir_mathur)، [`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir)، [`mufassir`](/ar/docs/terms/dictionary/tafsir#mufassir)</span>

### التفسير المأثور — Tafsir Mathur [#tafsir_mathur]

<!-- source: standards/terminology/concepts/tafsir_mathur.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tafsir_mathur`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّفْسِير المَأْثُور |
| تهجئات أخرى | <span dir="ltr">`tafsir_bil_mathur`، `tafsir_bialmathur`، `mathur`</span> |
| مقابل إنجليزي | <span dir="ltr">`Transmitted Tafsir`</span> |

**التعريف:** التفسير المأثور هو ما فسر به القرآن من القرآن نفسه أو من السنة أو من قول الصحابة والتابعين، منقولًا بإسناده.

**الغرض:** نستخدم التفسير المأثور محتوى يربط بالآية ويحمل معه ناقله ودرجة النقل. ولذلك لا يعامل معاملة نص التفسير المؤلف الذي ينسب إلى كتاب واحد.

- التفسير المأثور منقول بإسناد، والتفسير المؤلف قول صاحب الكتاب.
- الأثر الواحد ليس مفهومًا في هذا المعيار، والمفهوم هو نوع المحتوى المرتب على الآية.

> العنوان الأشهر هو «التَّفْسِير بِالمَأْثُور»، واشتقاقه يلصق حرف الجر بالاسم فيعطي `tafsir_bialmathur`. لذلك الاسم المثبت هو الصورة الوصفية، وهي عربية مستعملة، والصورة الأشهر مسجلة في `alternative_spellings`. وللسبب نفسه أفرد `abrogation` بدل «الناسخ والمنسوخ».

**مرتبط به:** <span dir="ltr">[`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`tafsir_al_ray`](/ar/docs/terms/dictionary/tafsir#tafsir_al_ray)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/358`

