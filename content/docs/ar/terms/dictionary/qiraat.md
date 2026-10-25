---
title: "القراءات"
description: "qiraat"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### المقرئ — Muqri [#muqri]

<!-- source: standards/terminology/concepts/muqri.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`muqri`</span> |
| `plural` | <span dir="ltr">`muqris`</span> |
| `kind` | <span dir="ltr">`role`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المُقْرِئ |
| تهجئات أخرى | <span dir="ltr">`muqree`</span> |

**التعريف:** المقرئ من تلقى القراءة وأتقنها وينقلها إلى المتعلمين.

**الغرض:** نستخدمه لتمثيل دور التعليم والتلقي والإقراء، ويتميز عن مجرد `reciter`.

**مرتبط به:** <span dir="ltr">[`reciter`](/ar/docs/terms/dictionary/recitation#reciter)، [`rawi`](/ar/docs/terms/dictionary/qiraat#rawi)، [`qiraah`](/ar/docs/terms/dictionary/qiraat#qiraah)</span>

**المصادر:**

- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/268`

### القراءة — Qiraah [#qiraah]

<!-- source: standards/terminology/concepts/qiraah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`qiraah`</span> |
| `plural` | <span dir="ltr">`qiraahs`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | القِرَاءَة |
| السجل | <span dir="ltr">[`qiraat`](/ar/docs/terms/registries#qiraat)</span> |
| تهجئات أخرى | <span dir="ltr">`qira'ah`، `qiraa`، `qiraat`، `qira'at`</span> |
| مقابل إنجليزي | <span dir="ltr">`Reading`</span> |

**التعريف:** القراءة هي وجه من وجوه قراءة القرآن ينسب إلى إمام من أئمة القراءات، وتتفرع عنه الروايات والطرق.

**الغرض:** تمثل القراءة المستوى الأعلى في نموذج القراءات، وتربط الروايات والطرق والنصوص المرتبطة بها.

**مرتبط به:** <span dir="ltr">[`riwayah`](/ar/docs/terms/dictionary/qiraat#riwayah)، [`rawi`](/ar/docs/terms/dictionary/qiraat#rawi)، [`tariq`](/ar/docs/terms/dictionary/qiraat#tariq)، [`muqri`](/ar/docs/terms/dictionary/qiraat#muqri)، [`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/171`

### الراوي — Rawi [#rawi]

<!-- source: standards/terminology/concepts/rawi.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`rawi`</span> |
| `plural` | <span dir="ltr">`rawis`</span> |
| `kind` | <span dir="ltr">`role`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الرَّاوِي |
| السجل | <span dir="ltr">[`qiraat`](/ar/docs/terms/registries#qiraat)</span> |
| مقابل إنجليزي | <span dir="ltr">`Transmitter`</span> |

**التعريف:** الراوي هو من نسبت إليه الرواية عن إمام القراءة.

**الغرض:** نستخدم الراوي لتمثيل الشخص المرتبط بـ`riwayah`.

- الراوي هو من نسبت إليه الرواية عن إمام القراءة، والقارئ هو مؤدي التسجيل. لذلك لا يسمى مؤدي التسجيل راويًا لمجرد أنه يقرأ برواية.

**مرتبط به:** <span dir="ltr">[`riwayah`](/ar/docs/terms/dictionary/qiraat#riwayah)، [`qiraah`](/ar/docs/terms/dictionary/qiraat#qiraah)، [`reciter`](/ar/docs/terms/dictionary/recitation#reciter)، [`muqri`](/ar/docs/terms/dictionary/qiraat#muqri)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/171`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/115`

### الرواية — Riwayah [#riwayah]

<!-- source: standards/terminology/concepts/riwayah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`riwayah`</span> |
| `plural` | <span dir="ltr">`riwayahs`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| جزء من | <span dir="ltr">[`qiraah`](/ar/docs/terms/dictionary/qiraat#qiraah)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الرِّوَايَة |
| السجل | <span dir="ltr">[`qiraat`](/ar/docs/terms/registries#qiraat)</span> |
| تهجئات أخرى | <span dir="ltr">`riwaya`، `rewaya`، `riwayat`</span> |

**التعريف:** الرواية هي ما ينسب إلى راو عن إمام القراءة، مثل رواية حفص عن عاصم.

**الغرض:** نستخدم الرواية لتحديد الرواية التي يتبعها نص أو مصحف أو تسجيل أو `dataset`.

**مرتبط به:** <span dir="ltr">[`qiraah`](/ar/docs/terms/dictionary/qiraat#qiraah)، [`rawi`](/ar/docs/terms/dictionary/qiraat#rawi)، [`tariq`](/ar/docs/terms/dictionary/qiraat#tariq)، [`recitation`](/ar/docs/terms/dictionary/recitation#recitation)، [`mushaf_edition`](/ar/docs/terms/dictionary/core#mushaf_edition)، [`wajh`](/ar/docs/terms/dictionary/qiraat#wajh)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/171`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/115`

### الطريق — Tariq [#tariq]

<!-- source: standards/terminology/concepts/tariq.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tariq`</span> |
| `plural` | <span dir="ltr">`tariqs`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| جزء من | <span dir="ltr">[`riwayah`](/ar/docs/terms/dictionary/qiraat#riwayah)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الطَّرِيق |
| السجل | <span dir="ltr">[`tariq`](/ar/docs/terms/registries#tariq)</span> |
| تهجئات أخرى | <span dir="ltr">`tareeq`</span> |

**التعريف:** الطريق هو وجه النقل المأخوذ عن الراوي بواسطة من دونه في سلسلة نقل القراءة.

**الغرض:** نستخدم الطريق عندما تحتاج البيانات إلى مستوى أدق من الرواية لتمييز طرق الأداء والنقل.

> الطرق الـ4 التي تخزنها التطبيقات، وهي الشاطبية وطيبة النشر والدرة والتيسير، مسجلة في `registries/tariq.tsv`. أما حصر طرق النشر كلها، وعددها نحو 980 طريقًا، فلا يزال مفتوحًا.

**مرتبط به:** <span dir="ltr">[`riwayah`](/ar/docs/terms/dictionary/qiraat#riwayah)، [`qiraah`](/ar/docs/terms/dictionary/qiraat#qiraah)، [`wajh`](/ar/docs/terms/dictionary/qiraat#wajh)</span>

**المصادر:**

- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/115`
- [النشر في القراءات العشر](https://files.turath.io/books-v3/22642.json) — `1/146`

### الوجه — Wajh [#wajh]

<!-- source: standards/terminology/concepts/wajh.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`wajh`</span> |
| `plural` | <span dir="ltr">`wajhs`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`extended`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الوَجْه |
| الجمع | أَوْجُه |
| تهجئات أخرى | <span dir="ltr">`wajh_al_ada`، `awjuh`، `wujuh`، `wajh_qiraah`</span> |
| مقابل إنجليزي | <span dir="ltr">`permitted variant`</span> |

**التعريف:** الوجه هو كيفية من كيفيات الأداء يجوز الأخذ بأي منها في الرواية الواحدة أو الطريق الواحد، مثل أوجه المد العارض للسكون.

**الغرض:** نستخدم الوجه حين يحتاج التسجيل أو التعليم إلى تعيين الوجه المأخوذ به من أوجه جائزة، من غير أن ينسب الاختلاف إلى رواية أو طريق.

- الوجه لا يغير نسبة القراءة، والطريق يغيرها.

**مرتبط به:** <span dir="ltr">[`tariq`](/ar/docs/terms/dictionary/qiraat#tariq)، [`riwayah`](/ar/docs/terms/dictionary/qiraat#riwayah)، [`madd_arid_li_al_sukun`](/ar/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun)</span>

