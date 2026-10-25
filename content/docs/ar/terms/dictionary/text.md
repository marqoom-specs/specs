---
title: "النص"
description: "text"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### Character [#character]

<!-- source: standards/terminology/concepts/character.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`character`</span> |
| `plural` | <span dir="ltr">`characters`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |

**التعريف:** المحرف وحدة نصية مجردة في نظام تمثيل رقمي، ولا يلزم أن يطابق حرفًا لغويًا واحدًا.

**الغرض:** نستخدمه حيث يلزم أن تكون الإزاحة أو الطول أو المقارنة دقيقة، مثل اختبارات مسار النص وفهارس البحث وقائمة المحارف المسموح بها.

- المحرف وحدة ترميز والحرف وحدة لغوية، فقد يُمثل الحرف الواحد بأكثر من محرف.
- المحرف ليس الشكل المرسوم (`glyph`)، فالشكل ينتجه الخط والمحرف يحمله النص.

**مرتبط به:** <span dir="ltr">[`letter`](/ar/docs/terms/dictionary/text#letter)، [`glyph`](/ar/docs/terms/dictionary/text#glyph)، [`codepoint`](/ar/docs/terms/dictionary/text#codepoint)، [`grapheme`](/ar/docs/terms/dictionary/text#grapheme)</span>

### Codepoint [#codepoint]

<!-- source: standards/terminology/concepts/codepoint.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`codepoint`</span> |
| `plural` | <span dir="ltr">`codepoints`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |

**التعريف:** نقطة الترميز قيمة رقمية معرفة في معيار ترميز مثل `Unicode`.

**الغرض:** نستخدمها حين يلزم الترميز الدقيق للمحرف أو العلامة، مثل قواعد التطبيع ومقابلات الخطوط وقائمة النقاط المسموح بها.

**مرتبط به:** <span dir="ltr">[`character`](/ar/docs/terms/dictionary/text#character)، [`grapheme`](/ar/docs/terms/dictionary/text#grapheme)</span>

### Glyph [#glyph]

<!-- source: standards/terminology/concepts/glyph.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`glyph`</span> |
| `plural` | <span dir="ltr">`glyphs`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |

**التعريف:** الشكل المرسوم هو الشكل البصري الذي ينتجه الخط لتمثيل حرف أو محرف أو مجموعة منها.

**الغرض:** نستخدمه في الخطوط والرسم والعرض ومواضع الأشكال البصرية.

- الشكل المرسوم ينتجه الخط، وليس هو الحرف ولا المحرف، فالمحرف الواحد قد يُرسم بأشكال مختلفة.

**مرتبط به:** <span dir="ltr">[`character`](/ar/docs/terms/dictionary/text#character)، [`letter`](/ar/docs/terms/dictionary/text#letter)، [`font`](/ar/docs/terms/dictionary/mushaf#font)</span>

### Grapheme [#grapheme]

<!-- source: standards/terminology/concepts/grapheme.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`grapheme`</span> |
| `plural` | <span dir="ltr">`graphemes`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |

**التعريف:** الوحدة الكتابية وحدة يدركها المستخدم على أنها وحدة واحدة، وقد تتكون من أكثر من `codepoint`.

**الغرض:** نستخدمها في التقسيم البصري والتحرير واختيار النص عندما لا يكون `codepoint` وحدة مناسبة.

**مرتبط به:** <span dir="ltr">[`codepoint`](/ar/docs/terms/dictionary/text#codepoint)، [`character`](/ar/docs/terms/dictionary/text#character)</span>

### الحرف — Letter [#letter]

<!-- source: standards/terminology/concepts/letter.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`letter`</span> |
| `plural` | <span dir="ltr">`letters`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الحَرْف |
| تهجئات أخرى | <span dir="ltr">`harf`</span> |

**التعريف:** الحرف هو الحرف الهجائي بوصفه وحدة لغوية من وحدات الكتابة.

**الغرض:** نستخدمه للبيانات التي تتعامل مع الحروف اللغوية، دون خلط بينها وبين التمثيلات الرقمية أو البصرية.

- الحرف وحدة لغوية والمحرف وحدة ترميز، فالحرف الواحد قد يُكتب بمحرف أو أكثر.
- الحرف وحدة من الكتابة، وحرف المعنى قسم من أقسام الكلمة.

**مرتبط به:** <span dir="ltr">[`character`](/ar/docs/terms/dictionary/text#character)، [`glyph`](/ar/docs/terms/dictionary/text#glyph)، [`particle`](/ar/docs/terms/dictionary/linguistics#particle)، [`ijam`](/ar/docs/terms/dictionary/dabt#ijam)، [`word`](/ar/docs/terms/dictionary/text#word)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/5) — `5`

### Token [#token]

<!-- source: standards/terminology/concepts/token.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`token`</span> |
| `plural` | <span dir="ltr">`tokens`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |

**التعريف:** `token` هو وحدة ينتجها تقسيم النص وفق منهج معلن. وقد تطابق الكلمة، وقد تكون جزءًا منها، وقد تجمع أكثر من كلمة.

**الغرض:** نستخدم `token` لربط التحليل الآلي بالنص حين لا يكون حد الكلمة هو حد التقسيم، وليبقى ما ينتجه المقسم متميزًا عما يعده القارئ كلمة.

- الكلمة وحدة يعرفها القارئ، و`token` وحدة ينتجها منهج تقسيم. لذلك اختلاف المنهج يغير عدد `tokens` ولا يغير عدد الكلمات.

**مرتبط به:** <span dir="ltr">[`word`](/ar/docs/terms/dictionary/text#word)، [`morpheme`](/ar/docs/terms/dictionary/linguistics#morpheme)</span>

### الكلمة — Word [#word]

<!-- source: standards/terminology/concepts/word.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`word`</span> |
| `plural` | <span dir="ltr">`words`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الكَلِمَة |
| تهجئات أخرى | <span dir="ltr">`kalimah`</span> |

**التعريف:** الكلمة هي وحدة من النص يعرفها القارئ كلمة واحدة، ولا يتغير عدها بتغير منهج تقسيم النص.

**الغرض:** نستخدم الكلمة لربط البيانات على مستوى الكلمة، مثل الجذر والصرف والإعراب والتجويد والمحاذاة الصوتية والموضع البصري.

- الكلمة وحدة يعرفها القارئ، و`token` وحدة ينتجها منهج تقسيم. لذلك اختلاف المنهج يغير عدد `tokens` ولا يغير عدد الكلمات.

**مرتبط به:** <span dir="ltr">[`token`](/ar/docs/terms/dictionary/text#token)، [`morpheme`](/ar/docs/terms/dictionary/linguistics#morpheme)، [`letter`](/ar/docs/terms/dictionary/text#letter)، [`word_key`](/ar/docs/terms/dictionary/structure#word_key)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`irab`](/ar/docs/terms/dictionary/linguistics#irab)، [`mutashabihat`](/ar/docs/terms/dictionary/quranic_sciences#mutashabihat)، [`word_by_word_translation`](/ar/docs/terms/dictionary/translation#word_by_word_translation)، [`word_meanings`](/ar/docs/terms/dictionary/quranic_sciences#word_meanings)، [`word_timing`](/ar/docs/terms/dictionary/recitation#word_timing)</span>

