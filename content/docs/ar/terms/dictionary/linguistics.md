---
title: "اللغة"
description: "linguistics"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### الإعراب — Irab [#irab]

<!-- source: standards/terminology/concepts/irab.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`irab`</span> |
| `kind` | <span dir="ltr">`analysis`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الإِعْرَاب |
| تهجئات أخرى | <span dir="ltr">`i'rab`</span> |
| مقابل إنجليزي | <span dir="ltr">`Grammatical Analysis`</span> |

**التعريف:** الإعراب بيان الوظائف النحوية للكلمات وعلاماتها وعلاقاتها في التركيب.

**الغرض:** نستخدمه لربط كلمات الآيات بالتحليل النحوي والوظائف الإعرابية.

**مرتبط به:** <span dir="ltr">[`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)، [`morphology`](/ar/docs/terms/dictionary/linguistics#morphology)، [`word`](/ar/docs/terms/dictionary/text#word)</span>

### Lemma [#lemma]

<!-- source: standards/terminology/concepts/lemma.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`lemma`</span> |
| `plural` | <span dir="ltr">`lemmas`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |

**التعريف:** الصيغة المعجمية هي الصيغة الأساسية التي تُرد إليها صورة الكلمة المصرفة.

**الغرض:** نستخدمها لتجميع الصور التصريفية المختلفة تحت مدخل معجمي واحد.

**مرتبط به:** <span dir="ltr">[`root`](/ar/docs/terms/dictionary/linguistics#root)، [`stem`](/ar/docs/terms/dictionary/linguistics#stem)، [`morphology`](/ar/docs/terms/dictionary/linguistics#morphology)</span>

### الوحدة الصرفية — Morpheme [#morpheme]

<!-- source: standards/terminology/concepts/morpheme.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`morpheme`</span> |
| `plural` | <span dir="ltr">`morphemes`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الوَحْدَة الصَّرْفِيَّة |
| تهجئات أخرى | <span dir="ltr">`word_segment`</span> |

**التعريف:** الوحدة الصرفية أصغر وحدة في الكلمة تحمل معنى أو وظيفة صرفية، مثل السابقة واللاحقة والجذع.

**الغرض:** نستخدمها لتمثيل تقسيم الكلمة القرآنية إلى أجزائها الصرفية، وهو المستوى الذي تُنسب إليه السمات الصرفية والوسوم في مدونات التحليل.

- الوحدة الصرفية جزء من الكلمة، أما `token` فوحدة تقسيم قد تساوي الكلمة أو تزيد عليها.

> الاسم `segment` يعني في مدونات الصرف القرآني الوحدة الصرفية، ويعني في واجهات الصوت توقيت الكلمة. لذلك لا يكفي الاسم وحده لتعيين المفهوم، ويُقصد بـ`word_segment` هذا المدخل، ويُقصد بالمعنى الصوتي `word_timing`.

**مرتبط به:** <span dir="ltr">[`word`](/ar/docs/terms/dictionary/text#word)، [`token`](/ar/docs/terms/dictionary/text#token)، [`stem`](/ar/docs/terms/dictionary/linguistics#stem)، [`morphology`](/ar/docs/terms/dictionary/linguistics#morphology)، [`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)</span>

### الصرف — Morphology [#morphology]

<!-- source: standards/terminology/concepts/morphology.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`morphology`</span> |
| `kind` | <span dir="ltr">`analysis`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الصَّرْف |

**التعريف:** الصرف تحليل بنية الكلمة وصيغتها وما تحمله من خصائص صرفية.

**الغرض:** نستخدمه لتمثيل السمات الصرفية للكلمات أو `tokens`.

**مرتبط به:** <span dir="ltr">[`morpheme`](/ar/docs/terms/dictionary/linguistics#morpheme)، [`root`](/ar/docs/terms/dictionary/linguistics#root)، [`lemma`](/ar/docs/terms/dictionary/linguistics#lemma)، [`stem`](/ar/docs/terms/dictionary/linguistics#stem)، [`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)، [`irab`](/ar/docs/terms/dictionary/linguistics#irab)، [`verb`](/ar/docs/terms/dictionary/linguistics#verb)</span>

### الاسم — Noun [#noun]

<!-- source: standards/terminology/concepts/noun.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`noun`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الاِسْم |

**التعريف:** الاسم هو ما دل على معنى في نفسه غير مقترن بزمان، وتدخل فيه الأسماء والصفات والضمائر وأسماء الإشارة والموصولات.

**الغرض:** نستخدمه قيمة من قيم قسم الكلمة، وتندرج تحته الوسوم التفصيلية التي تستعملها مدونات الصرف القرآني.

**مرتبط به:** <span dir="ltr">[`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)</span>

### قسم الكلمة — Part of Speech [#part_of_speech]

<!-- source: standards/terminology/concepts/part_of_speech.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`part_of_speech`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| القيم | <span dir="ltr">[`noun`](/ar/docs/terms/dictionary/linguistics#noun)، [`particle`](/ar/docs/terms/dictionary/linguistics#particle)، [`verb`](/ar/docs/terms/dictionary/linguistics#verb)</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | قِسْم الكَلِمَة |
| تهجئات أخرى | <span dir="ltr">`pos`</span> |

**التعريف:** قسم الكلمة هو تصنيف الكلمة أو الوحدة الصرفية بحسب بابها النحوي، مثل الاسم والفعل والحرف وما يتفرع عنها.

**الغرض:** نستخدم قسم الكلمة وسمًا أساسيًا في التحليل الصرفي والنحوي، ويقوم عليه البحث بالوسم والتصفية وبناء التحليل الإعرابي.

> المعيار يثبت القسمة الثلاثية فقط. أما الوسوم التفصيلية التي تستعملها مدونات الصرف القرآني، وعددها عشرات، فهي بيانات تندرج تحت هذه القيم الثلاث ولا تفرد لها مداخل في القاموس.

**مرتبط به:** <span dir="ltr">[`morphology`](/ar/docs/terms/dictionary/linguistics#morphology)، [`irab`](/ar/docs/terms/dictionary/linguistics#irab)، [`morpheme`](/ar/docs/terms/dictionary/linguistics#morpheme)، [`noun`](/ar/docs/terms/dictionary/linguistics#noun)، [`particle`](/ar/docs/terms/dictionary/linguistics#particle)، [`verb`](/ar/docs/terms/dictionary/linguistics#verb)</span>

### حرف المعنى — Particle [#particle]

<!-- source: standards/terminology/concepts/particle.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`particle`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | حَرْف المَعْنَى |

**التعريف:** حرف المعنى هو ما دل على معنى في غيره، مثل حروف الجر والعطف والنفي والاستفهام.

**الغرض:** نستخدمه قيمة من قيم قسم الكلمة، وتندرج تحته وسوم الحروف التفصيلية في مدونات الصرف القرآني.

- حرف المعنى قسم من أقسام الكلمة، وحرف المبنى (`letter`) وحدة من النص المكتوب.

**مرتبط به:** <span dir="ltr">[`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)، [`letter`](/ar/docs/terms/dictionary/text#letter)</span>

### الجذر — Root [#root]

<!-- source: standards/terminology/concepts/root.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`root`</span> |
| `plural` | <span dir="ltr">`roots`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الجَذْر |

**التعريف:** الجذر هو الأصل الصرفي الذي ترد إليه الكلمة لبيان اشتقاقها وصلتها بالكلمات الأخرى.

**الغرض:** نستخدم الجذر في البحث الصرفي والتحليل اللغوي وتجميع الكلمات ذات الأصل المشترك.

**مرتبط به:** <span dir="ltr">[`lemma`](/ar/docs/terms/dictionary/linguistics#lemma)، [`stem`](/ar/docs/terms/dictionary/linguistics#stem)، [`morphology`](/ar/docs/terms/dictionary/linguistics#morphology)</span>

### الجذع — Stem [#stem]

<!-- source: standards/terminology/concepts/stem.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`stem`</span> |
| `plural` | <span dir="ltr">`stems`</span> |
| `kind` | <span dir="ltr">`unit`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الجِذْع |

**التعريف:** الجذع هو ما يبقى من الكلمة بعد نزع السوابق واللواحق، وتلحق به الزوائد الصرفية.

**الغرض:** نستخدم الجذع في التحليل الصرفي مستوى وسطًا بين صورة الكلمة وجذرها. بعض المدونات تسجل الجذع ولا تسجل الجذر، وبعضها تسجلهما معًا.

- الجذر أصل اشتقاقي مجرد، أما الجذع فهو صورة قائمة في الكلمة بعد نزع الزوائد.

**مرتبط به:** <span dir="ltr">[`root`](/ar/docs/terms/dictionary/linguistics#root)، [`lemma`](/ar/docs/terms/dictionary/linguistics#lemma)، [`morpheme`](/ar/docs/terms/dictionary/linguistics#morpheme)، [`morphology`](/ar/docs/terms/dictionary/linguistics#morphology)</span>

### الفعل — Verb [#verb]

<!-- source: standards/terminology/concepts/verb.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`verb`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الفِعْل |

**التعريف:** الفعل هو ما دل على معنى في نفسه مقترن بزمان، ويتصرف إلى الماضي والمضارع والأمر.

**الغرض:** نستخدمه قيمة من قيم قسم الكلمة، ونعلق عليه السمات الصرفية الخاصة بالفعل، مثل الزمن والبناء للمعلوم أو المجهول والوزن.

**مرتبط به:** <span dir="ltr">[`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)، [`morphology`](/ar/docs/terms/dictionary/linguistics#morphology)</span>

