---
title: "الترجمة"
description: "translation"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### الترجمة المنطوقة — Spoken Translation [#spoken_translation]

<!-- source: standards/terminology/concepts/spoken_translation.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`spoken_translation`</span> |
| `plural` | <span dir="ltr">`spoken_translations`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأب | <span dir="ltr">[`translation`](/ar/docs/terms/dictionary/translation#translation)</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّرْجَمَة المَنْطُوقَة |
| تهجئات أخرى | <span dir="ltr">`audio_translation`</span> |

**التعريف:** الترجمة المنطوقة هي نقل معاني القرآن إلى لغة أخرى في مادة صوتية أو منطوقة.

**الغرض:** نستخدم الترجمة المنطوقة لتمييز المحتوى الصوتي لترجمة المعاني عن الترجمة النصية وعن التلاوة القرآنية.

**مرتبط به:** <span dir="ltr">[`translation`](/ar/docs/terms/dictionary/translation#translation)، [`recitation`](/ar/docs/terms/dictionary/recitation#recitation)</span>

### الترجمة — Translation [#translation]

<!-- source: standards/terminology/concepts/translation.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`translation`</span> |
| `plural` | <span dir="ltr">`translations`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأبناء | <span dir="ltr">[`spoken_translation`](/ar/docs/terms/dictionary/translation#spoken_translation)، [`word_by_word_translation`](/ar/docs/terms/dictionary/translation#word_by_word_translation)</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّرْجَمَة |

**التعريف:** الترجمة هي نقل معاني القرآن إلى لغة أخرى، وهي ليست قرآنًا بلفظه.

**الغرض:** نستخدم الترجمة لربط نصوص ترجمة المعاني بالآيات واللغات والمترجمين والمصادر.

**مرتبط به:** <span dir="ltr">[`transliteration`](/ar/docs/terms/dictionary/translation#transliteration)، [`spoken_translation`](/ar/docs/terms/dictionary/translation#spoken_translation)، [`translator`](/ar/docs/terms/dictionary/translation#translator)، [`word_by_word_translation`](/ar/docs/terms/dictionary/translation#word_by_word_translation)، [`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/324`

### المترجم — Translator [#translator]

<!-- source: standards/terminology/concepts/translator.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`translator`</span> |
| `plural` | <span dir="ltr">`translators`</span> |
| `kind` | <span dir="ltr">`role`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المُتَرْجِم |
| تهجئات أخرى | <span dir="ltr">`mutarjim`</span> |

**التعريف:** المترجم هو من نسبت إليه ترجمة لمعاني القرآن إلى لغة أخرى، سواء كان فردًا أو هيئة.

**الغرض:** نستخدم المترجم لنسبة الترجمة إلى صاحبها، ولتمييزه عن الناشر والمراجع ومصدر النص.

- المترجم غير المفسر حتى لو استند في ترجمته إلى تفسير.

**مرتبط به:** <span dir="ltr">[`translation`](/ar/docs/terms/dictionary/translation#translation)، [`mufassir`](/ar/docs/terms/dictionary/tafsir#mufassir)</span>

### النقل الحرفي — Transliteration [#transliteration]

<!-- source: standards/terminology/concepts/transliteration.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`transliteration`</span> |
| `plural` | <span dir="ltr">`transliterations`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | النَّقْل الحَرْفِيّ |

**التعريف:** النقل الحرفي هو تمثيل حروف نظام كتابي بحروف نظام آخر وفق قواعد محددة، دون ترجمة المعنى.

**الغرض:** نستخدم النقل الحرفي لتوفير تمثيل قابل للقراءة بنظام كتابي آخر أو للتحويل المنهجي بين أنظمة الكتابة.

**مرتبط به:** <span dir="ltr">[`translation`](/ar/docs/terms/dictionary/translation#translation)</span>

### Word by Word Translation [#word_by_word_translation]

<!-- source: standards/terminology/concepts/word_by_word_translation.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`word_by_word_translation`</span> |
| `plural` | <span dir="ltr">`word_by_word_translations`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأب | <span dir="ltr">[`translation`](/ar/docs/terms/dictionary/translation#translation)</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| تهجئات أخرى | <span dir="ltr">`wbw`، `word_by_word`، `wbw_translation`، `word_translation`، `wordbyword`</span> |

**التعريف:** الترجمة كلمة بكلمة هي ترجمة تعطي كل كلمة من كلمات الآية معناها في لغة أخرى على حدة، بترتيب كلمات الأصل.

**الغرض:** نستخدم الترجمة كلمة بكلمة في العرض التعليمي والتعلم، ونربطها بالكلمة بمفتاحها وليس بالآية.

- ترجمة الكلمة على حدة ليست ترجمة للآية، ولا تُعرض مكانها.

**مرتبط به:** <span dir="ltr">[`translation`](/ar/docs/terms/dictionary/translation#translation)، [`word`](/ar/docs/terms/dictionary/text#word)، [`word_key`](/ar/docs/terms/dictionary/structure#word_key)</span>

