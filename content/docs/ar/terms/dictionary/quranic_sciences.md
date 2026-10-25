---
title: "علوم القرآن"
description: "quranic_sciences"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### النسخ — Abrogation [#abrogation]

<!-- source: standards/terminology/concepts/abrogation.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`abrogation`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`extended`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | النَّسْخ |
| تهجئات أخرى | <span dir="ltr">`nasikh_mansukh`، `nasikh_wa_mansukh`، `nasekh_mansokh`</span> |

**التعريف:** النسخ هو رفع حكم شرعي بدليل شرعي جاء بعده، ويدرس في القرآن بنسبة الآية الناسخة إلى الآية المنسوخة.

**الغرض:** نستخدم النسخ لتمثيل العلاقة بين آيتين إحداهما ناسخة والأخرى منسوخة. وهذه علاقة بين موضعين من النص وليست صفة في آية واحدة.

- النسخ يقع على الحكم وليس على النص، فالآية التي نسخ حكمها تبقى ثابتة في المصحف.
- العلماء يختلفون في نسبة النسخ في كثير من المواضع، لذلك تقيد كل نسبة بمصدرها ولا تعرض على أنها حكم مجمع عليه.

**مرتبط به:** <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`asbab_al_nuzul`](/ar/docs/terms/dictionary/revelation#asbab_al_nuzul)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/237`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `3/66`

### المتشابهات — Mutashabihat [#mutashabihat]

<!-- source: standards/terminology/concepts/mutashabihat.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`mutashabihat`</span> |
| `kind` | <span dir="ltr">`analysis`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المُتَشَابِهَات |
| تهجئات أخرى | <span dir="ltr">`mutashabih`، `mutashabihat_lafziyyah`، `similar_ayahs`</span> |
| مقابل إنجليزي | <span dir="ltr">`Similar Passages`</span> |

**التعريف:** المتشابهات هي المواضع التي يتشابه فيها لفظ الآيات أو أجزائها في القرآن، تشابهًا تامًّا أو مع اختلاف يسير في كلمة أو ترتيب.

**الغرض:** نستخدمها أساسًا لأدوات الحفظ والمراجعة والبحث، لأن الحافظ يحتاج إلى معرفة المواضع التي يلتبس بعضها ببعض وموضع الفرق بينها.

- التشابه اللفظي المقصود هنا غير المتشابه المقابل للمحكم في علوم القرآن.
- التشابه علاقة بين موضعين أو أكثر، وليس صفة في آية واحدة.

**مرتبط به:** <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`word`](/ar/docs/terms/dictionary/text#word)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)</span>

**المصادر:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `3/390`

### فضائل القرآن — Quran Merits [#quran_merits]

<!-- source: standards/terminology/concepts/quran_merits.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`quran_merits`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | فَضَائِل القُرْآن |
| تهجئات أخرى | <span dir="ltr">`fadail`، `fadail_al_surah`</span> |

**التعريف:** فضائل القرآن هي ما ورد في فضل القرآن أو فضل سورة منه أو آية، وما يترتب على قراءتها من أجر أو أثر.

**الغرض:** نستخدمها محتوى يُربط بالقرآن كله أو بسورة أو آية. ونفصلها عن التفسير لأنها لا تفسر المعنى، وعن الحديث لأنها مرتبة على الموضع من القرآن وليس على الراوي.

- الفضل مرتب على الموضع من القرآن، والحديث الذي ورد فيه مصدر يُنقل عنه وليس موضعًا له.
- كثير مما يُروى في فضائل السور ضعيف أو موضوع، لذلك يُقيد كل فضل بمصدره ودرجته.

**مرتبط به:** <span dir="ltr">[`quran`](/ar/docs/terms/dictionary/core#quran)، [`surah`](/ar/docs/terms/dictionary/structure#surah)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)</span>

**المصادر:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `4/136`

### التدبر — Reflection [#reflection]

<!-- source: standards/terminology/concepts/reflection.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`reflection`</span> |
| `plural` | <span dir="ltr">`reflections`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّدَبُّر |
| تهجئات أخرى | <span dir="ltr">`tadabur`، `waqfat_tadabburiyyah`</span> |

**التعريف:** التدبر هو التأمل في معاني القرآن وما يقتضيه من عمل، وما يقيده القارئ من وقفة عند آية أو لفظة.

**الغرض:** نستخدم التدبر محتوى يربط بآية أو بموضع منها. ونفصله عن التفسير لأنه لا يلتزم بيان المعنى الظاهر، ولأن قائله ليس بالضرورة مفسرًا.

- التفسير بيان لمعنى الآية على منهج، أما التدبر فهو أثر المعنى في المتدبر.

**مرتبط به:** <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/29) — `29`

### سبب التسمية — Surah Name Reason [#surah_name_reason]

<!-- source: standards/terminology/concepts/surah_name_reason.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`surah_name_reason`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`extended`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | سَبَب التَّسْمِيَة |
| تهجئات أخرى | <span dir="ltr">`sabab_al_tasmiya`</span> |

**التعريف:** سبب التسمية هو بيان العلة التي سميت بها السورة اسمها، وما ورد في ذلك من أثر أو وجه لغوي.

**الغرض:** نستخدم سبب التسمية محتوى يربط بالسورة. ونفصله عن سبب النزول لأنه يخص الاسم وليس النزول، ولأن كثيرًا من السور لها أكثر من اسم ولذلك أكثر من سبب تسمية.

- سبب التسمية يخص اسم السورة، وسبب النزول يخص نزول الآية.

**مرتبط به:** <span dir="ltr">[`surah`](/ar/docs/terms/dictionary/structure#surah)، [`asbab_al_nuzul`](/ar/docs/terms/dictionary/revelation#asbab_al_nuzul)، [`surah_names`](/ar/docs/terms/dictionary/quranic_sciences#surah_names)</span>

**المصادر:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/178`

### أسماء السورة — Surah Names [#surah_names]

<!-- source: standards/terminology/concepts/surah_names.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`surah_names`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | أَسْمَاء السُّورَة |
| تهجئات أخرى | <span dir="ltr">`asmaa_al_surah`</span> |
| مقابل إنجليزي | <span dir="ltr">`Surah Names`</span> |

**التعريف:** أسماء السورة هي ما سميت به السورة من أسماء. وأكثر السور لها أكثر من اسم، منها ما ثبت بالأثر ومنها ما جرى به الاصطلاح.

**الغرض:** نستخدم أسماء السورة لحفظ كل ما تعرف به السورة من أسماء، لأن المصاحف تختلف في الاسم المثبت، ولأن البحث يحتاج أن يجد السورة بأي اسم من أسمائها.

- اسم السورة غير سبب تسميتها به.
- أسماء السورة غير أسماء القرآن نفسه.

**مرتبط به:** <span dir="ltr">[`surah`](/ar/docs/terms/dictionary/structure#surah)، [`surah_name_reason`](/ar/docs/terms/dictionary/quranic_sciences#surah_name_reason)</span>

**المصادر:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/178`

### مقاصد السورة — Surah Objectives [#surah_objectives]

<!-- source: standards/terminology/concepts/surah_objectives.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`surah_objectives`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`extended`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مَقَاصِد السُّورَة |
| تهجئات أخرى | <span dir="ltr">`maqasid`</span> |

**التعريف:** مقاصد السورة هي المعاني الكلية التي تدور عليها السورة ويجمع بينها موضوعها، وهي الغرض الواحد الذي تنتظم به آياتها.

**الغرض:** نستخدمها محتوى يُربط بالسورة كلها وليس بآية منها. وبذلك تتميز عن التفسير الذي يسير على الآيات آية آية، وعن الموضوعات التي تعدد ما ورد في السورة.

- المقصد غرض جامع للسورة، والموضوع واحد من الموضوعات التي وردت فيها.

**مرتبط به:** <span dir="ltr">[`surah`](/ar/docs/terms/dictionary/structure#surah)، [`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir)</span>

### غريب القرآن — Word Meanings [#word_meanings]

<!-- source: standards/terminology/concepts/word_meanings.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`word_meanings`</span> |
| `kind` | <span dir="ltr">`content`</span> |
| الأصل | <span dir="ltr">`borrowed`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | غَرِيب القُرْآن |
| تهجئات أخرى | <span dir="ltr">`gharib`، `word_meaning`</span> |

**التعريف:** غريب القرآن هو بيان معاني الألفاظ القرآنية التي خفي معناها على أكثر القراء، لقلة استعمالها أو لتغير دلالتها.

**الغرض:** نستخدمه محتوى يُربط بكلمة بعينها من الآية وليس بالآية كلها، وبذلك يتميز عن التفسير الذي يفسر المعنى الكلي.

- غريب القرآن بيان لمعنى لفظة، والتفسير بيان لمعنى الآية.
- المعنى منسوب إلى كتاب بعينه، وقد يختلف بين المصادر.

**مرتبط به:** <span dir="ltr">[`word`](/ar/docs/terms/dictionary/text#word)، [`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)</span>

**المصادر:**

- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `2/3`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/8`
