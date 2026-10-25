---
title: "عد الآي"
description: "ayah_numbering"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### عدد الآيات — Ayah Count [#ayah_count]

<!-- source: standards/terminology/concepts/ayah_count.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ayah_count`</span> |
| `plural` | <span dir="ltr">`ayah_counts`</span> |
| `kind` | <span dir="ltr">`property`</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | عَدَد الآيَات |
| السجل | <span dir="ltr">[`ayah_counts`](/ar/docs/terms/registries#ayah_counts)</span> |
| تهجئات أخرى | <span dir="ltr">`ayat_count`، `number_of_ayahs`، `adad_al_ayat`، `adad_al_ay`</span> |
| مقابل إنجليزي | <span dir="ltr">`verse count`</span> |

**التعريف:** عدد الآيات هو عدد آيات السورة في نظام عد بعينه. وقد يختلف من نظام إلى نظام لأن الفواصل المعدودة تختلف.

**الغرض:** نستخدمه للتحقق من المراجع وحدود السور وبناء الفهارس. ونقرؤه من سجل العد ولا نحسبه من نص بعينه.

- العدد صفة للسورة تحت نظام عد، وليس صفة للمصحف.

> الاسم البرمجي يتبع نسق `ayah_numbering_*` واسم السجل، وليس اشتقاقًا من «عَدَد الآيَات»، لأن المفهوم من مفاهيم التمثيل وإن كان لعدد الآي أصل في علم العد.

**مرتبط به:** <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`surah`](/ar/docs/terms/dictionary/structure#surah)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)</span>

**المصادر:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`

### العد البصري — Basri Numbering [#ayah_numbering_basri]

<!-- source: standards/terminology/concepts/ayah_numbering_basri.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`basri`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | العَدّ البَصْرِيّ |
| تهجئات أخرى | <span dir="ltr">`basri_numbering`، `basran`، `basran_numbering`</span> |

**التعريف:** العد البصري هو نظام عد الآي المروي عن عاصم الجحدري عن أسلافه من أهل البصرة.

**الغرض:** نستخدمه قيمة من قيم نظام عد الآي. وبه يبين المصحف أو `dataset` النظام الذي تستند إليه أرقام آياته وحدودها، وبه نقابل مواضع الآي بين الأنظمة.

> الاسم البرمجي `basri` وحده، لأن اسم القيمة فريد داخل تصنيفها لا في القاموس كله (§14)؛ فالعمود يحمل قيم تصنيف واحد، ولا يلتبس `makki` هنا بـ`makki` في `revelation_classification`. أما معرّف المدخل فهو `ayah_numbering_basri`، اسم الأب مع الاسم البرمجي، حتى يكون للمدخلين المشتركين في الاسم عنوانان مختلفان. ولا يشتق الاسم من «العَدّ» لأن اشتقاقه يعطي `add` وهو فعل إنجليزي. والسبب مسجل في سجل القرارات.

**مرتبط به:** <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)</span>

**المصادر:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/80`

### العد الدمشقي — Dimashqi Numbering [#ayah_numbering_dimashqi]

<!-- source: standards/terminology/concepts/ayah_numbering_dimashqi.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`dimashqi`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | العَدّ الدِّمَشْقِيّ |
| تهجئات أخرى | <span dir="ltr">`dimashqi_numbering`، `shami`، `shami_numbering`، `damascene`، `ayah_numbering_shami`</span> |
| دليل اسم العرض | <span dir="ltr">GitHub phrase search: dimashqi numbering 0 vs shami numbering 0. No form is established, so the display follows the code; `shami` stays an alias.</span> |

**التعريف:** العد الدمشقي هو نظام عد أهل الشام، المروي عن يحيى بن الحارث الذماري عن ابن عامر، ويسمى العد الشامي.

**الغرض:** نستخدمه قيمة من قيم نظام عد الآي. وبه يبين المصحف أو `dataset` النظام الذي تستند إليه أرقام آياته وحدودها، وبه نقابل مواضع الآي بين الأنظمة.

> الاسم البرمجي `dimashqi` وحده، لأن اسم القيمة فريد داخل تصنيفها لا في القاموس كله (§14)؛ فالعمود يحمل قيم تصنيف واحد، ولا يلتبس `makki` هنا بـ`makki` في `revelation_classification`. أما معرّف المدخل فهو `ayah_numbering_dimashqi`، اسم الأب مع الاسم البرمجي، حتى يكون للمدخلين المشتركين في الاسم عنوانان مختلفان. ولا يشتق الاسم من «العَدّ» لأن اشتقاقه يعطي `add` وهو فعل إنجليزي. والسبب مسجل في سجل القرارات.

**مرتبط به:** <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)</span>

**المصادر:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/82`

### العد الكوفي — Kufi Numbering [#ayah_numbering_kufi]

<!-- source: standards/terminology/concepts/ayah_numbering_kufi.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`kufi`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | العَدّ الكُوفِيّ |
| تهجئات أخرى | <span dir="ltr">`kufi_numbering`، `kufan`، `kufan_numbering`</span> |

**التعريف:** العد الكوفي هو نظام عد الآي المروي عن حمزة الزيات عن ابن أبي ليلى عن أبي عبد الرحمن السلمي عن علي بن أبي طالب، وهو العد الذي تتبعه أكثر المصاحف المطبوعة اليوم.

**الغرض:** نستخدمه قيمة من قيم نظام عد الآي. وبه يبين المصحف أو `dataset` النظام الذي تستند إليه أرقام آياته وحدودها، وبه نقابل مواضع الآي بين الأنظمة.

> الاسم البرمجي `kufi` وحده، لأن اسم القيمة فريد داخل تصنيفها لا في القاموس كله (§14)؛ فالعمود يحمل قيم تصنيف واحد، ولا يلتبس `makki` هنا بـ`makki` في `revelation_classification`. أما معرّف المدخل فهو `ayah_numbering_kufi`، اسم الأب مع الاسم البرمجي، حتى يكون للمدخلين المشتركين في الاسم عنوانان مختلفان. ولا يشتق الاسم من «العَدّ» لأن اشتقاقه يعطي `add` وهو فعل إنجليزي. والسبب مسجل في سجل القرارات.

**مرتبط به:** <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)</span>

**المصادر:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/80`

### العد المدني الأول — First Madani Numbering [#ayah_numbering_madani_first]

<!-- source: standards/terminology/concepts/ayah_numbering_madani_first.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madani_first`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | العَدّ المَدَنِيّ الأَوَّل |
| تهجئات أخرى | <span dir="ltr">`ayah_numbering_madani_awwal`، `madani_awwal`، `first_madani`، `first_madinan`، `madani_first_numbering`</span> |

**التعريف:** العد المدني الأول هو نظام عد أهل المدينة في روايته الأولى، وهي رواية أبي جعفر يزيد بن القعقاع وشيبة بن نصاح.

**الغرض:** نستخدمه قيمة من قيم نظام عد الآي. وبه يبين المصحف أو `dataset` النظام الذي تستند إليه أرقام آياته وحدودها، وبه نقابل مواضع الآي بين الأنظمة.

> الاسم البرمجي `madani_first` وحده، لأن اسم القيمة فريد داخل تصنيفها لا في القاموس كله (§14)؛ فالعمود يحمل قيم تصنيف واحد، ولا يلتبس `makki` هنا بـ`makki` في `revelation_classification`. أما معرّف المدخل فهو `ayah_numbering_madani_first`، اسم الأب مع الاسم البرمجي، حتى يكون للمدخلين المشتركين في الاسم عنوانان مختلفان. ولا يشتق الاسم من «العَدّ» لأن اشتقاقه يعطي `add` وهو فعل إنجليزي. والسبب مسجل في سجل القرارات.

**مرتبط به:** <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)</span>

**المصادر:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`

### العد المدني الأخير — Last Madani Numbering [#ayah_numbering_madani_last]

<!-- source: standards/terminology/concepts/ayah_numbering_madani_last.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madani_last`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | العَدّ المَدَنِيّ الأَخِير |
| تهجئات أخرى | <span dir="ltr">`ayah_numbering_madani_akhir`، `madani_akhir`، `last_madani`، `last_madinan`، `madani_last_numbering`</span> |

**التعريف:** العد المدني الأخير هو نظام عد أهل المدينة في روايته الأخيرة، وهي رواية إسماعيل بن جعفر عن سليمان بن جماز.

**الغرض:** نستخدمه قيمة من قيم نظام عد الآي. وبه يبين المصحف أو `dataset` النظام الذي تستند إليه أرقام آياته وحدودها، وبه نقابل مواضع الآي بين الأنظمة.

> الاسم البرمجي `madani_last` وحده، لأن اسم القيمة فريد داخل تصنيفها لا في القاموس كله (§14)؛ فالعمود يحمل قيم تصنيف واحد، ولا يلتبس `makki` هنا بـ`makki` في `revelation_classification`. أما معرّف المدخل فهو `ayah_numbering_madani_last`، اسم الأب مع الاسم البرمجي، حتى يكون للمدخلين المشتركين في الاسم عنوانان مختلفان. ولا يشتق الاسم من «العَدّ» لأن اشتقاقه يعطي `add` وهو فعل إنجليزي. والسبب مسجل في سجل القرارات.

**مرتبط به:** <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)</span>

**المصادر:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`

### العد المكي — Makki Numbering [#ayah_numbering_makki]

<!-- source: standards/terminology/concepts/ayah_numbering_makki.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`makki`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | العَدّ المَكِّيّ |
| تهجئات أخرى | <span dir="ltr">`makki_numbering`، `makkan`، `meccan_numbering`</span> |

**التعريف:** العد المكي هو نظام عد الآي المروي عن ابن كثير عن مجاهد عن ابن عباس عن أبي بن كعب.

**الغرض:** نستخدمه قيمة من قيم نظام عد الآي. وبه يبين المصحف أو `dataset` النظام الذي تستند إليه أرقام آياته وحدودها، وبه نقابل مواضع الآي بين الأنظمة.

> الاسم البرمجي `makki` وحده، لأن اسم القيمة فريد داخل تصنيفها لا في القاموس كله (§14)؛ فالعمود يحمل قيم تصنيف واحد، ولا يلتبس `makki` هنا بـ`makki` في `revelation_classification`. أما معرّف المدخل فهو `ayah_numbering_makki`، اسم الأب مع الاسم البرمجي، حتى يكون للمدخلين المشتركين في الاسم عنوانان مختلفان. ولا يشتق الاسم من «العَدّ» لأن اشتقاقه يعطي `add` وهو فعل إنجليزي. والسبب مسجل في سجل القرارات.

**مرتبط به:** <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)</span>

**المصادر:**

- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`

### نظام عد الآي — Ayah Numbering System [#ayah_numbering_system]

<!-- source: standards/terminology/concepts/ayah_numbering_system.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ayah_numbering_system`</span> |
| `plural` | <span dir="ltr">`ayah_numbering_systems`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| القيم | <span dir="ltr">[`ayah_numbering_basri`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri)، [`ayah_numbering_dimashqi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi)، [`ayah_numbering_kufi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi)، [`ayah_numbering_madani_first`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first)، [`ayah_numbering_madani_last`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last)، [`ayah_numbering_makki`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki)</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | نِظَام عَدّ الآي |
| السجل | <span dir="ltr">[`ayah_numbering`](/ar/docs/terms/registries#ayah_numbering)</span> |
| تهجئات أخرى | <span dir="ltr">`ayah_counting_system`</span> |

**التعريف:** نظام عد الآي هو النظام الذي يحدد حدود الآيات وأعدادها وأرقامها وبعض المسائل المتعلقة بالبسملة، وفق إحدى مدارس عد الآي.

**الغرض:** نستخدمه لتحديد النظام الذي تستند إليه أرقام الآيات وحدودها في مصحف أو `dataset` معين.

**مرتبط به:** <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)، [`basmalah`](/ar/docs/terms/dictionary/structure#basmalah)، [`ayah_count`](/ar/docs/terms/dictionary/ayah_numbering#ayah_count)، [`ayah_numbering_kufi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi)، [`ayah_numbering_basri`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri)، [`ayah_numbering_dimashqi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi)، [`ayah_numbering_makki`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki)، [`ayah_numbering_madani_first`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first)، [`ayah_numbering_madani_last`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last)، [`ayah_key`](/ar/docs/terms/dictionary/structure#ayah_key)، [`ayah_mark`](/ar/docs/terms/dictionary/dabt#ayah_mark)، [`qiraah`](/ar/docs/terms/dictionary/qiraat#qiraah)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/31) — `31`
- [البيان في عد آي القرآن](https://files.turath.io/books-v3/5542.json) — `1/79`
- [الإتقان في علوم القرآن](https://files.turath.io/books-v3/11728.json) — `1/225`

### الآية المقابلة — Equivalent Ayah [#equivalent_ayah]

<!-- source: standards/terminology/concepts/equivalent_ayah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`equivalent_ayah`</span> |
| `plural` | <span dir="ltr">`equivalent_ayahs`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الآيَة المُقَابِلَة |

**التعريف:** الآية المقابلة هي الآية في نظام عد تقابل آية في نظام عد آخر، سواء اتفق رقماهما أو اختلفا لاختلاف مواضع الفصل بين الآي.

**الغرض:** نستخدمها للربط بين أرقام الآيات عبر أنظمة العد، حتى لا تقارَن البيانات المبنية على نظام ببيانات مبنية على نظام آخر بالرقم وحده.

- المقابلة علاقة بين نظامي عد، وليست تشابهًا في اللفظ ولا تكرارًا للنص.

**مرتبط به:** <span dir="ltr">[`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`mutashabihat`](/ar/docs/terms/dictionary/quranic_sciences#mutashabihat)، [`ayah_numbering_basri`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri)، [`ayah_numbering_dimashqi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi)، [`ayah_numbering_kufi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi)، [`ayah_numbering_madani_first`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first)، [`ayah_numbering_madani_last`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last)، [`ayah_numbering_makki`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki)</span>

**المصادر:**

- [qiraat-ayah-map](https://github.com/quranpedia/qiraat-ayah-map)

