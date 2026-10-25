---
title: "مراتب القراءة"
description: "recitation_pace"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### الحدر — Hadr [#hadr]

<!-- source: standards/terminology/concepts/hadr.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`hadr`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الحَدْر |
| تهجئات أخرى | <span dir="ltr">`hadar`</span> |

**التعريف:** الحدر هو الإسراع في القراءة مع المحافظة على الحروف والحركات وأحكام الأداء دون إخلال.

**الغرض:** نستخدمه قيمة من قيم مراتب القراءة، فنوسم به التسجيل أو جلسة التعليم ونصفي به.

**مرتبط به:** <span dir="ltr">[`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/24) — `24`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/205`

### مراتب القراءة — Recitation Pace [#recitation_pace]

<!-- source: standards/terminology/concepts/recitation_pace.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`recitation_pace`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| القيم | <span dir="ltr">[`hadr`](/ar/docs/terms/dictionary/recitation_pace#hadr)، [`tadwir`](/ar/docs/terms/dictionary/recitation_pace#tadwir)، [`tahqiq`](/ar/docs/terms/dictionary/recitation_pace#tahqiq)</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مَرَاتِب القِرَاءَة |

**التعريف:** مراتب القراءة هي تصنيف لسرعة أداء القراءة مع المحافظة على أحكامها.

**الغرض:** نستخدم مراتب القراءة لفصل مراتب السرعة التقليدية عن أنماط التسجيل مثل `murattal` و`mujawwad`.

**مرتبط به:** <span dir="ltr">[`tahqiq`](/ar/docs/terms/dictionary/recitation_pace#tahqiq)، [`tadwir`](/ar/docs/terms/dictionary/recitation_pace#tadwir)، [`hadr`](/ar/docs/terms/dictionary/recitation_pace#hadr)، [`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)، [`tartil`](/ar/docs/terms/dictionary/recitation#tartil)، [`recitation`](/ar/docs/terms/dictionary/recitation#recitation)</span>

**المصادر:**

- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/205`

### التدوير — Tadwir [#tadwir]

<!-- source: standards/terminology/concepts/tadwir.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tadwir`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّدْوِير |
| تهجئات أخرى | <span dir="ltr">`tadweer`</span> |

**التعريف:** التدوير هو القراءة بسرعة متوسطة بين التحقيق والحدر مع المحافظة على الأحكام.

**الغرض:** نستخدم التدوير قيمة من قيم مراتب القراءة، نوسم بها التسجيل أو جلسة التعليم ونصفي بها.

**مرتبط به:** <span dir="ltr">[`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/25) — `25`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/207`

### التحقيق — Tahqiq [#tahqiq]

<!-- source: standards/terminology/concepts/tahqiq.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tahqiq`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّحْقِيق |
| تهجئات أخرى | <span dir="ltr">`tahqeeq`</span> |

**التعريف:** التحقيق هو القراءة ببطء وتؤدة مع استيفاء الحروف وأحكامها، ويستخدم كثيرًا في مقام التعليم.

**الغرض:** نستخدم التحقيق قيمة من قيم مراتب القراءة، نوسم بها التسجيل أو جلسة التعليم ونصفي بها.

**مرتبط به:** <span dir="ltr">[`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/26) — `26`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/205`

