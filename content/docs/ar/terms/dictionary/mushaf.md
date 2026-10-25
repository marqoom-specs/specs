---
title: "المصحف والتخطيط"
description: "mushaf"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### مقطع الآية — Ayah Fragment [#ayah_fragment]

<!-- source: standards/terminology/concepts/ayah_fragment.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ayah_fragment`</span> |
| `plural` | <span dir="ltr">`ayah_fragments`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مَقْطَع الآيَة |
| الجمع | مقاطع الآيات |
| تهجئات أخرى | <span dir="ltr">`ayah_segment`، `ayah_part`، `line_ayah`، `g_ayah`</span> |
| مقابل إنجليزي | <span dir="ltr">`ayah fragment`</span> |

**التعريف:** مقطع الآية هو ما يظهر من آية واحدة في سطر واحد من صفحة مصحف بعينه. والآية التي تمتد على سطرين تتكون من مقطعين.

**الغرض:** نستخدمه وحدة للعرض والوسم في تخطيط الصفحة، لأن الآية قد لا تنتهي مع نهاية السطر والسطر قد لا ينتهي مع نهاية الآية. وعليه نبني المحاذاة والإبراز في المصحف المرسوم.

- المقطع صفة في تخطيط مصحف بعينه، وليس جزءًا من هوية الآية.
- المقطع ليس الكلمة، فقد يكون كلمة أو كلمات أو جزءًا من كلمة إذا وقع القطع داخلها.

**مرتبط به:** <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`line`](/ar/docs/terms/dictionary/mushaf#line)، [`page`](/ar/docs/terms/dictionary/mushaf#page)، [`layout`](/ar/docs/terms/dictionary/mushaf#layout)</span>

**المصادر:**

- مصحف حفص — كلمة كلمة — `glossary!g.ayah`

### الخط — Font [#font]

<!-- source: standards/terminology/concepts/font.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`font`</span> |
| `plural` | <span dir="ltr">`fonts`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الخَطّ |

**التعريف:** الخط ملف يحمل مجموعة من الأشكال المرسومة (`glyphs`) وقواعد إخراجها، ويُعرض به نص المصحف.

**الغرض:** نستخدمه لتسجيل الخط الذي يعتمد عليه المصحف الرقمي، لأن كثيرًا من المصاحف لا يُعرض نصها عرضًا صحيحًا إلا بخط بعينه. وترتبط بالخط ترميز الحروف وأشكالها ومواضع الأسطر.

- الخط وسيلة عرض، والرسم صفة للنص المكتوب نفسه.
- الشكل المرسوم (`glyph`) شكل داخل الخط، والحرف وحدة من النص.

**مرتبط به:** <span dir="ltr">[`glyph`](/ar/docs/terms/dictionary/text#glyph)، [`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)، [`layout`](/ar/docs/terms/dictionary/mushaf#layout)، [`line`](/ar/docs/terms/dictionary/mushaf#line)، [`mushaf_edition`](/ar/docs/terms/dictionary/core#mushaf_edition)</span>

### التخطيط — Layout [#layout]

<!-- source: standards/terminology/concepts/layout.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`layout`</span> |
| `plural` | <span dir="ltr">`layouts`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّخْطِيط |

**التعريف:** التخطيط تنظيم النص والعناصر بصريًا في صفحات وأسطر ومواضع داخل مصحف أو عرض معين.

**الغرض:** نستخدمه لفصل البيانات البصرية عن بنية القرآن النصية الثابتة.

**مرتبط به:** <span dir="ltr">[`mushaf_edition`](/ar/docs/terms/dictionary/core#mushaf_edition)، [`page`](/ar/docs/terms/dictionary/mushaf#page)، [`line`](/ar/docs/terms/dictionary/mushaf#line)، [`font`](/ar/docs/terms/dictionary/mushaf#font)، [`ayah_fragment`](/ar/docs/terms/dictionary/mushaf#ayah_fragment)، [`mushaf`](/ar/docs/terms/dictionary/core#mushaf)</span>

### السطر — Line [#line]

<!-- source: standards/terminology/concepts/line.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`line`</span> |
| `plural` | <span dir="ltr">`lines`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | السَّطْر |

**التعريف:** السطر هو السطر الطباعي داخل صفحة مصحف أو تخطيط معين.

**الغرض:** نستخدمه لتمثيل مواقع النص والأشكال داخل التخطيط الطباعي.

**مرتبط به:** <span dir="ltr">[`page`](/ar/docs/terms/dictionary/mushaf#page)، [`layout`](/ar/docs/terms/dictionary/mushaf#layout)، [`ayah_fragment`](/ar/docs/terms/dictionary/mushaf#ayah_fragment)، [`font`](/ar/docs/terms/dictionary/mushaf#font)</span>

### الصفحة — Page [#page]

<!-- source: standards/terminology/concepts/page.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`page`</span> |
| `plural` | <span dir="ltr">`pages`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الصَّفْحَة |
| تهجئات أخرى | <span dir="ltr">`safhah`</span> |

**التعريف:** الصفحة هي وحدة طباعية من تخطيط مصحف معين، وقد يختلف محتواها وحدودها باختلاف المصحف أو الطبعة.

**الغرض:** نستخدم الصفحة في العرض والتنقل والمحاذاة البصرية بحسب صفحات مصحف معين.

**مرتبط به:** <span dir="ltr">[`mushaf_edition`](/ar/docs/terms/dictionary/core#mushaf_edition)، [`layout`](/ar/docs/terms/dictionary/mushaf#layout)، [`line`](/ar/docs/terms/dictionary/mushaf#line)، [`ayah_fragment`](/ar/docs/terms/dictionary/mushaf#ayah_fragment)، [`mushaf`](/ar/docs/terms/dictionary/core#mushaf)</span>

### الرسم — Rasm [#rasm]

<!-- source: standards/terminology/concepts/rasm.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`rasm`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| القيم | <span dir="ltr">[`rasm_imlai`](/ar/docs/terms/dictionary/mushaf#rasm_imlai)، [`rasm_uthmani`](/ar/docs/terms/dictionary/mushaf#rasm_uthmani)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الرَّسْم |
| تهجئات أخرى | <span dir="ltr">`rasm_type`</span> |
| مقابل إنجليزي | <span dir="ltr">`orthography`</span> |

**التعريف:** الرسم هو طريقة كتابة ألفاظ القرآن من حيث إثبات الحروف وحذفها وزيادتها وفصلها ووصلها وما يشبه ذلك.

**الغرض:** نستخدم الرسم تصنيفًا يبين على أي رسم كتب النص أو المصحف أو `dataset`. ويبنى عليه البحث والمقارنة والعرض، ويميز طبقة الرسم عن الخط والتخطيط والمحارف المرسومة.

- الرسم هو إثبات الحروف وحذفها وفصلها ووصلها، أما الضبط فهو علامات النطق التي توضع على الحروف.
- الخط هو صورة الحروف في مصحف بعينه، أما الرسم فهو ما يثبت في كل مصحف كتب به.

**مرتبط به:** <span dir="ltr">[`rasm_uthmani`](/ar/docs/terms/dictionary/mushaf#rasm_uthmani)، [`rasm_imlai`](/ar/docs/terms/dictionary/mushaf#rasm_imlai)، [`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)، [`font`](/ar/docs/terms/dictionary/mushaf#font)، [`mushaf`](/ar/docs/terms/dictionary/core#mushaf)، [`mushaf_edition`](/ar/docs/terms/dictionary/core#mushaf_edition)، [`omitted_alif`](/ar/docs/terms/dictionary/dabt#omitted_alif)، [`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)، [`tashkil`](/ar/docs/terms/dictionary/dabt#tashkil)</span>

### الرسم الإملائي — Rasm Imlai [#rasm_imlai]

<!-- source: standards/terminology/concepts/rasm_imlai.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`rasm_imlai`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الرَّسْم الإِمْلَائِيّ |
| تهجئات أخرى | <span dir="ltr">`imlaei`، `imlai`، `imla'i`، `imlaai`، `simple`، `text_simple`، `text_imlaei`، `rasm_imlaei`</span> |
| مقابل إنجليزي | <span dir="ltr">`modern orthography`، `standard orthography`</span> |

**التعريف:** الرسم الإملائي هو كتابة ألفاظ القرآن على قواعد الإملاء المعاصرة، بإثبات ما يحذف في الرسم العثماني وحذف ما يزاد فيه، حتى تقرأ الكلمة على صورتها المألوفة.

**الغرض:** نستخدم الرسم الإملائي لتحديد أن النص يتبع الإملاء المعاصر. وهذا هو النص الذي تبنى عليه صيغة البحث والاقتباس والعرض خارج المصحف، مقابل النص العثماني الذي يعرض به المصحف.

- الرسم الإملائي يخص الكتابة وليس القراءة، فاللفظ واحد والذي يختلف هو صورة الكلمة.
- النص الإملائي غير نص البحث المجرد من الضبط، حتى لو اشتق الثاني من الأول.

> اشتقاق الاسم بالأداة يعطي `orthographic_rasm`، لأن جدول الكلمات العامة يترجم «إملائي» إلى `orthographic` من أجل «العلامة الإملائية». والاسم المثبت هو `rasm_imlai` لأنه الاسم الذي تستعمله قواعد البيانات والواجهات، والقرار مسجل في سجل القرارات.

**مرتبط به:** <span dir="ltr">[`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)، [`rasm_uthmani`](/ar/docs/terms/dictionary/mushaf#rasm_uthmani)</span>

### الرسم العثماني — Rasm Uthmani [#rasm_uthmani]

<!-- source: standards/terminology/concepts/rasm_uthmani.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`rasm_uthmani`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الرَّسْم العُثْمَانِيّ |
| تهجئات أخرى | <span dir="ltr">`uthmani`، `uthmanic`، `othmani`، `rasm_othmani`</span> |
| مقابل إنجليزي | <span dir="ltr">`Uthmanic Orthography`</span> |
| دليل اسم العرض | <span dir="ltr">GitHub phrase search: rasm uthmani 100 vs uthmani rasm 65. The Arabic word order wins in English writing, and it matches the code.</span> |

**التعريف:** الرسم العثماني هو طريقة كتابة كلمات المصاحف العثمانية وما يتعلق بها من حذف وزيادة وبدل وفصل ووصل.

**الغرض:** نستخدم الرسم العثماني لتحديد أن النص يتبع قواعد الرسم العثماني وليس نظامًا إملائيًا آخر.

**مرتبط به:** <span dir="ltr">[`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)، [`rasm_imlai`](/ar/docs/terms/dictionary/mushaf#rasm_imlai)، [`mushaf`](/ar/docs/terms/dictionary/core#mushaf)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/146`

