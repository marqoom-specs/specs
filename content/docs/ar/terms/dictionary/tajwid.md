---
title: "التجويد"
description: "tajwid"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### الغنة — Ghunnah [#ghunnah]

<!-- source: standards/terminology/concepts/ghunnah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ghunnah`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الغُنَّة |
| تهجئات أخرى | <span dir="ltr">`ghunna`، `gunnah`، `ghunnah_sound`</span> |
| مقابل إنجليزي | <span dir="ltr">`nasalisation`</span> |

**التعريف:** الغنة صوت يخرج من الخيشوم مركب في جسم النون والميم، ولا عمل للسان فيه. ويختلف مقدارها بحسب الحكم، فهي أكمل ما تكون في المشدد والمدغم، ثم في المخفى، ثم في الساكن المظهر.

**الغرض:** نستخدمها صفة نوسم بها مواضع النص التي تُمد فيها الغنة، مثل النون والميم المشددتين والإدغام بغنة والإخفاء والإقلاب، حتى تُتبع في التلوين والتعليم، ولأن مقدارها يختلف باختلاف الطريق.

- الغنة صفة صوت وليست حكمًا في نفسها، فهي تلحق الإدغام والإخفاء والإقلاب ولا تقابلها.

**مرتبط به:** <span dir="ltr">[`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`ikhfa`](/ar/docs/terms/dictionary/tajwid#ikhfa)، [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`meem_sakinah`](/ar/docs/terms/dictionary/tajwid#meem_sakinah)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/85) — `85`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `noon-mushaddadah`

### الإدغام — Idgham [#idgham]

<!-- source: standards/terminology/concepts/idgham.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`idgham`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الإِدْغَام |
| تهجئات أخرى | <span dir="ltr">`idghaam`، `idgam`، `edgham`، `idgham_bighunnah`، `idgham_bila_ghunnah`، `idgham_shafawi`</span> |
| مقابل إنجليزي | <span dir="ltr">`assimilation`، `merging`</span> |

**التعريف:** الإدغام إدخال حرف ساكن في حرف متحرك بعده بحيث يصيران حرفًا واحدًا مشددًا. ويكون الإدغام كاملًا أو ناقصًا، وبغنة أو بغير غنة.

**الغرض:** نستخدمه قيمة من قيم حكم التجويد، فنوسم به موضع النص في التحليل والتلوين والتعليم، وتتفرع تحته أنواعه في سجل الأحكام.

- الإدغام حكم، أما التماثل والتجانس والتقارب فعلاقة بين الحرفين يقع الإدغام بسببها.

**مرتبط به:** <span dir="ltr">[`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)، [`ikhfa`](/ar/docs/terms/dictionary/tajwid#ikhfa)، [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab)، [`ghunnah`](/ar/docs/terms/dictionary/tajwid#ghunnah)، [`letter_relation`](/ar/docs/terms/dictionary/tajwid#letter_relation)، [`mutamathilan`](/ar/docs/terms/dictionary/tajwid#mutamathilan)، [`mutajanisan`](/ar/docs/terms/dictionary/tajwid#mutajanisan)، [`meem_sakinah`](/ar/docs/terms/dictionary/tajwid#meem_sakinah)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`shaddah`](/ar/docs/terms/dictionary/dabt#shaddah)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/57) — `57`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/60) — `60`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/61) — `61`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/63) — `63`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `idgham-bi-ghunnah-noon`

### الإخفاء — Ikhfa [#ikhfa]

<!-- source: standards/terminology/concepts/ikhfa.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`ikhfa`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الإِخْفَاء |
| تهجئات أخرى | <span dir="ltr">`ikhfaa`، `ikhfa'`، `ekhfa`، `ikhfa_haqiqi`، `ikhfa_shafawi`</span> |
| مقابل إنجليزي | <span dir="ltr">`concealment`</span> |

**التعريف:** الإخفاء هو النطق بالحرف الساكن على صفة بين الإظهار والإدغام، دون تشديد ومع بقاء الغنة. ويكون حقيقيًّا في النون الساكنة والتنوين عند حروفه الـ15، وشفويًّا في الميم الساكنة عند الباء.

**الغرض:** نستخدمه قيمة من قيم حكم التجويد، فنوسم به موضع النص في التحليل والتلوين والتعليم، وتتفرع تحته أنواعه في سجل الأحكام.

**مرتبط به:** <span dir="ltr">[`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)، [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`ghunnah`](/ar/docs/terms/dictionary/tajwid#ghunnah)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`meem_sakinah`](/ar/docs/terms/dictionary/tajwid#meem_sakinah)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/67) — `67`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/68) — `68`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `ikhfa-haqiqi-noon`

### الإقلاب — Iqlab [#iqlab]

<!-- source: standards/terminology/concepts/iqlab.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`iqlab`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الإِقْلَاب |
| تهجئات أخرى | <span dir="ltr">`iqlaab`، `qalb`، `iqlab_qalb`، `eqlab`</span> |
| مقابل إنجليزي | <span dir="ltr">`conversion`</span> |

**التعريف:** الإقلاب قلب النون الساكنة أو التنوين ميمًا مخفاة بغنة عند الباء.

**الغرض:** نستخدمه قيمة من قيم حكم التجويد، فنوسم به موضع النص في التحليل والتلوين والتعليم، وتتفرع تحته أنواعه في سجل الأحكام.

- الإقلاب حكم في النطق، والميم الصغيرة هي العلامة التي يُرسم بها في المصحف.

**مرتبط به:** <span dir="ltr">[`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)، [`ghunnah`](/ar/docs/terms/dictionary/tajwid#ghunnah)، [`small_meem`](/ar/docs/terms/dictionary/dabt#small_meem)، [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/86) — `86`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `iqlab-noon`

### الإظهار — Izhar [#izhar]

<!-- source: standards/terminology/concepts/izhar.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`izhar`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | الإِظْهَار |
| تهجئات أخرى | <span dir="ltr">`izhaar`، `idhhar`، `idhar`، `ithhar`، `izhar_halqi`، `izhar_shafawi`</span> |
| مقابل إنجليزي | <span dir="ltr">`clear pronunciation`</span> |

**التعريف:** الإظهار إخراج الحرف الساكن من مخرجه من غير غنة زائدة فيه، مثل إظهار النون الساكنة والتنوين عند حروف الحلق، وإظهار الميم الساكنة عند غير الباء والميم.

**الغرض:** نستخدمه قيمة من قيم حكم التجويد، فنوسم به موضع النص في التحليل والتلوين والتعليم، وتتفرع تحته أنواعه في سجل الأحكام.

- الإظهار حكم يقابل الإدغام والإخفاء، وليس غياب الحكم. فالموضع الموسوم به موضع تحقق فيه سبب الحكم ثم لم يقع فيه إدغام ولا إخفاء.

**مرتبط به:** <span dir="ltr">[`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`ikhfa`](/ar/docs/terms/dictionary/tajwid#ikhfa)، [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`meem_sakinah`](/ar/docs/terms/dictionary/tajwid#meem_sakinah)، [`letter_relation`](/ar/docs/terms/dictionary/tajwid#letter_relation)، [`mutajanisan`](/ar/docs/terms/dictionary/tajwid#mutajanisan)، [`mutamathilan`](/ar/docs/terms/dictionary/tajwid#mutamathilan)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/64) — `64`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/65) — `65`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/66) — `66`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `izhar-halqi-noon`

### التجاور — Letter Relation [#letter_relation]

<!-- source: standards/terminology/concepts/letter_relation.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`letter_relation`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| القيم | <span dir="ltr">[`mutajanisan`](/ar/docs/terms/dictionary/tajwid#mutajanisan)، [`mutamathilan`](/ar/docs/terms/dictionary/tajwid#mutamathilan)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`extended`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّجَاوُر |
| تهجئات أخرى | <span dir="ltr">`letter_relations`، `alaqat_al_huruf`، `ilaqat_al_harfayn`</span> |
| مقابل إنجليزي | <span dir="ltr">`relation of two letters`</span> |

**التعريف:** التجاور هو نسبة الحرفين المتجاورين أحدهما إلى الآخر في المخرج والصفة، وهي تماثل أو تجانس أو تقارب أو تباعد. وعليها يُبنى إدغام الأول في الثاني أو إظهاره.

**الغرض:** نستخدمها تصنيفًا نوسم به الموضع الذي يقع فيه إدغام الحرفين أو إظهارهما، حتى يُعرف سبب الحكم وليس الحكم وحده.

- العلاقة سبب، والإدغام والإظهار حكم يترتب عليها.

> كان «علاقة الحرفين» اسم هذا التصنيف بالعربية حتى نوفمبر 2026، ثم غُيِّر بعد مراجعة لغوية، فأُهمل. ويبقى اسمه البرمجي `letter_relation` ([القاعدة 037](/ar/docs/terms/standard#rule-037)).

**مرتبط به:** <span dir="ltr">[`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)، [`mutamathilan`](/ar/docs/terms/dictionary/tajwid#mutamathilan)، [`mutajanisan`](/ar/docs/terms/dictionary/tajwid#mutajanisan)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/58) — `58`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/59) — `59`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/62) — `62`

### المد — Madd [#madd]

<!-- source: standards/terminology/concepts/madd.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| القيم | <span dir="ltr">[`madd_al_badal`](/ar/docs/terms/dictionary/tajwid#madd_al_badal)، [`madd_al_iwad`](/ar/docs/terms/dictionary/tajwid#madd_al_iwad)، [`madd_al_lin`](/ar/docs/terms/dictionary/tajwid#madd_al_lin)، [`madd_al_silah`](/ar/docs/terms/dictionary/tajwid#madd_al_silah)، [`madd_arid_li_al_sukun`](/ar/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun)، [`madd_lazim`](/ar/docs/terms/dictionary/tajwid#madd_lazim)، [`madd_munfasil`](/ar/docs/terms/dictionary/tajwid#madd_munfasil)، [`madd_muttasil`](/ar/docs/terms/dictionary/tajwid#madd_muttasil)، [`madd_tabii`](/ar/docs/terms/dictionary/tajwid#madd_tabii)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المَدّ |
| الجمع | مدود |
| تهجئات أخرى | <span dir="ltr">`mad`، `madd_rule`، `mudud`، `mudood`، `madd_type`</span> |
| مقابل إنجليزي | <span dir="ltr">`prolongation`، `lengthening`</span> |

**التعريف:** المد إطالة الصوت بحرف من حروف المد الـ3، وهي الألف الساكنة بعد فتح والواو الساكنة بعد ضم والياء الساكنة بعد كسر. ويكون المد أصليًّا لا يقوم الحرف إلا به، أو فرعيًّا بسبب همز أو سكون.

**الغرض:** نستخدمه تصنيفًا تتفرع عليه أنواع المد، فنوسم به موضع النص مع نوعه ومقداره. ولأن مقادير المدود تختلف باختلاف الطريق، فإنها تُبين في وصف التسجيل والمصحف.

- حروف المد غير حروف اللين وإن اشتركتا في الواو والياء، فحرف المد ساكن بعد حركة تجانسه، وحرف اللين ساكن بعد فتح.
- المد هو الحكم، والمدة هي العلامة التي تدل عليه في المصحف.

**مرتبط به:** <span dir="ltr">[`maddah`](/ar/docs/terms/dictionary/dabt#maddah)، [`madd_tabii`](/ar/docs/terms/dictionary/tajwid#madd_tabii)، [`madd_muttasil`](/ar/docs/terms/dictionary/tajwid#madd_muttasil)، [`madd_munfasil`](/ar/docs/terms/dictionary/tajwid#madd_munfasil)، [`madd_lazim`](/ar/docs/terms/dictionary/tajwid#madd_lazim)، [`madd_al_badal`](/ar/docs/terms/dictionary/tajwid#madd_al_badal)، [`madd_al_iwad`](/ar/docs/terms/dictionary/tajwid#madd_al_iwad)، [`madd_al_silah`](/ar/docs/terms/dictionary/tajwid#madd_al_silah)، [`madd_al_lin`](/ar/docs/terms/dictionary/tajwid#madd_al_lin)، [`madd_arid_li_al_sukun`](/ar/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/90) — `90`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/92) — `92`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/99) — `99`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/107) — `107`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/108) — `108`

### مد البدل — Madd al-Badal [#madd_al_badal]

<!-- source: standards/terminology/concepts/madd_al_badal.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd_al_badal`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مَدّ البَدَل |
| تهجئات أخرى | <span dir="ltr">`madd_badal`، `badal`، `mad_badal`</span> |
| مقابل إنجليزي | <span dir="ltr">`substitution madd`</span> |

**التعريف:** مد البدل مد سببه همزة قبل حرف المد، وأُبدل فيه حرف المد من همزة ساكنة، مثل «آمن» و«أوتوا» و«إيمان». ومقداره حركتان عند حفص، ويزيد عند ورش.

**الغرض:** نستخدمه قيمة من قيم المد، فنوسم به موضع النص مع مقداره، ونقرأ منه ما يختلف باختلاف الطريق في وصف التسجيل والمصحف.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`hamzah`](/ar/docs/terms/dictionary/dabt#hamzah)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/98) — `98`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-badal`

### مد العوض — Madd al-Iwad [#madd_al_iwad]

<!-- source: standards/terminology/concepts/madd_al_iwad.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd_al_iwad`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مَدّ العِوَض |
| تهجئات أخرى | <span dir="ltr">`madd_iwad`، `madd_al_ewad`، `madd_ewad`، `iwad`، `mad_iwad`</span> |
| مقابل إنجليزي | <span dir="ltr">`compensation madd`</span> |

**التعريف:** مد العوض هو مد الألف عوضًا عن تنوين الفتح عند الوقف على الكلمة، ومقداره حركتان.

**الغرض:** نستخدمه قيمة من قيم المد، فنوسم به موضع النص مع مقداره، ونقرأ منه ما يختلف باختلاف الطريق في وصف التسجيل والمصحف.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`tanwin_al_fath`](/ar/docs/terms/dictionary/dabt#tanwin_al_fath)، [`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`madd_tabii`](/ar/docs/terms/dictionary/tajwid#madd_tabii)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/105) — `105`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-iwad`

### مد اللين — Madd al-Lin [#madd_al_lin]

<!-- source: standards/terminology/concepts/madd_al_lin.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd_al_lin`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مَدّ اللِّين |
| تهجئات أخرى | <span dir="ltr">`madd_lin`، `madd_leen`، `madd_al_leen`، `lin`، `leen`، `mad_leen`</span> |
| مقابل إنجليزي | <span dir="ltr">`soft madd`</span> |

**التعريف:** مد اللين هو مد الواو أو الياء الساكنة المفتوح ما قبلها عند الوقف على الكلمة بسكون عارض، مثل «خوف» و«بيت».

**الغرض:** نستخدمه قيمة من قيم المد، فنوسم به موضع النص مع مقداره، ونقرأ منه ما يختلف باختلاف الطريق في وصف التسجيل والمصحف.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`madd_arid_li_al_sukun`](/ar/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun)، [`waqf`](/ar/docs/terms/dictionary/waqf#waqf)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/106) — `106`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/93) — `93`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `leen-waw`

### مد الصلة — Madd al-Silah [#madd_al_silah]

<!-- source: standards/terminology/concepts/madd_al_silah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd_al_silah`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | مَدّ الصِّلَة |
| تهجئات أخرى | <span dir="ltr">`madd_silah`، `silah`، `madd_al_sila`، `madd_silah_sughra`، `madd_silah_kubra`، `mad_silah`</span> |
| مقابل إنجليزي | <span dir="ltr">`pronoun madd`</span> |

**التعريف:** مد الصلة مد ينشأ عن صلة هاء الضمير بواو أو ياء إذا وقعت بين متحركين. ويكون صغرى إذا لم يقع بعدها همز، وكبرى إذا وقع.

**الغرض:** نستخدمه قيمة من قيم المد، فنوسم به موضع النص مع مقداره، ونقرأ منه ما يختلف باختلاف الطريق في وصف التسجيل والمصحف.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`small_waw`](/ar/docs/terms/dictionary/dabt#small_waw)، [`small_yaa`](/ar/docs/terms/dictionary/dabt#small_yaa)، [`madd_tabii`](/ar/docs/terms/dictionary/tajwid#madd_tabii)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/97) — `97`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/96) — `96`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/95) — `95`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-silah-sughra`

### المد العارض للسكون — Madd Arid lil-Sukun [#madd_arid_li_al_sukun]

<!-- source: standards/terminology/concepts/madd_arid_li_al_sukun.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd_arid_li_al_sukun`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المَدّ العَارِض لِلسُّكُون |
| تهجئات أخرى | <span dir="ltr">`madd_arid_lilsukun`، `madd_arid_lil_sukun`، `madd_arid`، `arid_lil_sukun`، `madd_aarid`، `madd_arid_lissukun`</span> |
| مقابل إنجليزي | <span dir="ltr">`incidental madd`</span> |
| دليل اسم العرض | <span dir="ltr">No dominant English form; «lil-Sukun» is how the phrase is written in English tajwid teaching, and the hyphenated preposition follows the display rule for the article.</span> |

**التعريف:** المد العارض للسكون مد سببه سكون عارض في الوقف بعد حرف المد، ويجوز فيه القصر والتوسط والطول.

**الغرض:** نستخدمه قيمة من قيم المد، فنوسم به موضع النص مع مقداره، ونقرأ منه ما يختلف باختلاف الطريق في وصف التسجيل والمصحف.

> الاشتقاق يعطي `madd_arid_li_al_sukun` بفصل لام الجر عن أداة التعريف، كما يقرره القسم 8. والصورة الملحومة `lilsukun` تُحال في `alternative_spellings`.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`madd_al_lin`](/ar/docs/terms/dictionary/tajwid#madd_al_lin)، [`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`wajh`](/ar/docs/terms/dictionary/qiraat#wajh)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/109) — `109`

### المد اللازم — Madd Lazim [#madd_lazim]

<!-- source: standards/terminology/concepts/madd_lazim.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd_lazim`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المَدّ اللَّازِم |
| تهجئات أخرى | <span dir="ltr">`madd_laazim`، `lazim`، `madd_lazim_kalimi`، `madd_lazim_harfi`، `mad_lazim`</span> |
| مقابل إنجليزي | <span dir="ltr">`necessary madd`</span> |

**التعريف:** المد اللازم مد فرعي سببه سكون أصلي ثابت في الوصل والوقف بعد حرف المد، ويقع في كلمة أو في حرف من فواتح السور. ويكون مثقلًا بالإدغام أو مخففًا، ومقداره 6 حركات.

**الغرض:** نستخدمه قيمة من قيم المد، فنوسم به موضع النص مع مقداره، ونقرأ منه ما يختلف باختلاف الطريق في وصف التسجيل والمصحف.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`sukun`](/ar/docs/terms/dictionary/dabt#sukun)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/103) — `103`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/110) — `110`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/111) — `111`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/112) — `112`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-lazim-harfi`

### المد المنفصل — Madd Munfasil [#madd_munfasil]

<!-- source: standards/terminology/concepts/madd_munfasil.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd_munfasil`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المَدّ المُنْفَصِل |
| تهجئات أخرى | <span dir="ltr">`madd_jaiz_munfasil`، `munfasil`، `madd_munfasil_jaiz`، `mad_munfasil`</span> |
| مقابل إنجليزي | <span dir="ltr">`separated madd`</span> |

**التعريف:** المد المنفصل مد فرعي سببه همزة في أول الكلمة التالية لحرف المد، وهو جائز، فيُقصر ويُمد بحسب الرواية والطريق.

**الغرض:** نستخدمه قيمة من قيم المد، فنوسم به موضع النص مع مقداره، ونقرأ منه ما يختلف باختلاف الطريق في وصف التسجيل والمصحف.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`madd_muttasil`](/ar/docs/terms/dictionary/tajwid#madd_muttasil)، [`hamzah`](/ar/docs/terms/dictionary/dabt#hamzah)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/102) — `102`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-munfasil`

### المد المتصل — Madd Muttasil [#madd_muttasil]

<!-- source: standards/terminology/concepts/madd_muttasil.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd_muttasil`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المَدّ المُتَّصِل |
| تهجئات أخرى | <span dir="ltr">`madd_wajib_muttasil`، `muttasil`، `madd_muttasil_wajib`، `mad_muttasil`، `madd_mutasil`</span> |
| مقابل إنجليزي | <span dir="ltr">`connected madd`</span> |

**التعريف:** المد المتصل مد فرعي سببه همزة بعد حرف المد في كلمة واحدة، وهو واجب عند القراء جميعًا، وتختلف مقاديره بحسب الرواية والطريق.

**الغرض:** نستخدمه قيمة من قيم المد، فنوسم به موضع النص مع مقداره، ونقرأ منه ما يختلف باختلاف الطريق في وصف التسجيل والمصحف.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`madd_munfasil`](/ar/docs/terms/dictionary/tajwid#madd_munfasil)، [`hamzah`](/ar/docs/terms/dictionary/dabt#hamzah)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/101) — `101`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-muttasil`

### المد الطبيعي — Madd Tabee [#madd_tabii]

<!-- source: standards/terminology/concepts/madd_tabii.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`madd_tabii`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المَدّ الطَّبِيعِيّ |
| تهجئات أخرى | <span dir="ltr">`madd_tabee`، `madd_tabi'i`، `madd_tabiee`، `madd_asli`</span> |
| مقابل إنجليزي | <span dir="ltr">`natural madd`</span> |
| دليل اسم العرض | <span dir="ltr">GitHub phrase search: madd tabee 111 vs madd tabii 63. The display follows the dominant English form; the code stays derived.</span> |

**التعريف:** المد الطبيعي هو المد الذي لا تقوم ذات حرف المد إلا به، ولا يتوقف على سبب من همز أو سكون، ومقداره حركتان.

**الغرض:** نستخدمه قيمة من قيم المد، فنوسم به موضع النص مع مقداره، ونقرأ منه ما يختلف باختلاف الطريق في وصف التسجيل والمصحف.

**مرتبط به:** <span dir="ltr">[`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`madd_al_iwad`](/ar/docs/terms/dictionary/tajwid#madd_al_iwad)، [`madd_al_silah`](/ar/docs/terms/dictionary/tajwid#madd_al_silah)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/100) — `100`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `madd-tabee-kalimi`

### الميم الساكنة — Meem Sakinah [#meem_sakinah]

<!-- source: standards/terminology/concepts/meem_sakinah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`meem_sakinah`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المِيم السَّاكِنَة |
| تهجئات أخرى | <span dir="ltr">`mim_sakinah`، `meem_saakinah`، `meem_sakina`</span> |
| مقابل إنجليزي | <span dir="ltr">`unvowelled meem`</span> |
| دليل اسم العرض | <span dir="ltr">tools/display_measurements.json: meem sakinah 308 vs mim sakinah 57. Letter names are written as they are said, so the derivation gives meem.</span> |

**التعريف:** الميم الساكنة ميم خالية من الحركة، ثابتة في اللفظ والخط، وتقع في وسط الكلمة أو آخرها.

**الغرض:** نستخدمها موضعًا تتفرع عليه الأحكام الشفوية الـ3 في محركات التجويد، وهي الإدغام والإخفاء والإظهار.

- الميم الساكنة غير الميم المقلوبة عن النون في الإقلاب وإن اتحد صوتهما.

**مرتبط به:** <span dir="ltr">[`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)، [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`ikhfa`](/ar/docs/terms/dictionary/tajwid#ikhfa)، [`ghunnah`](/ar/docs/terms/dictionary/tajwid#ghunnah)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/63) — `63`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/66) — `66`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/68) — `68`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `izhar-shafawi-meem`

### المتجانسان — Mutajanisan [#mutajanisan]

<!-- source: standards/terminology/concepts/mutajanisan.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`mutajanisan`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`letter_relation`](/ar/docs/terms/dictionary/tajwid#letter_relation)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`extended`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المُتَجَانِسَان |
| تهجئات أخرى | <span dir="ltr">`mutajanisain`، `mutajanisayn`، `mutajanisan_saghir`</span> |

**التعريف:** المتجانسان حرفان اتحدا في المخرج واختلفا في الصفة، مثل الدال والتاء في «قد تبين».

**الغرض:** نستخدمه قيمة من قيم التجاور، فنقرأ منه سبب الإدغام أو الإظهار في الموضع بدلًا من استنباطه من الحرفين في كل مرة.

**مرتبط به:** <span dir="ltr">[`letter_relation`](/ar/docs/terms/dictionary/tajwid#letter_relation)، [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/59) — `59`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `mutajanisain-idgham-naqis`

### المتماثلان — Mutamathilan [#mutamathilan]

<!-- source: standards/terminology/concepts/mutamathilan.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`mutamathilan`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`letter_relation`](/ar/docs/terms/dictionary/tajwid#letter_relation)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`extended`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المُتَمَاثِلَان |
| تهجئات أخرى | <span dir="ltr">`mutamathilain`، `mutamathilayn`، `mithlayn`، `mutamathilan_saghir`</span> |

**التعريف:** المتماثلان حرفان اتحدا في المخرج والصفة، مثل الباء في «اضرب بعصاك».

**الغرض:** نستخدمه قيمة من قيم التجاور، فنقرأ منه سبب الإدغام أو الإظهار في الموضع بدلًا من استنباطه من الحرفين في كل مرة.

**مرتبط به:** <span dir="ltr">[`letter_relation`](/ar/docs/terms/dictionary/tajwid#letter_relation)، [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/58) — `58`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `mutamathilain-idgham-kamil`

### النون الساكنة — Noon Sakinah [#noon_sakinah]

<!-- source: standards/terminology/concepts/noon_sakinah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`noon_sakinah`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | النُّون السَّاكِنَة |
| النقحرة | <span dir="ltr">nūn sākinah</span> |
| تهجئات أخرى | <span dir="ltr">`nun_sakinah`، `noon_saakinah`</span> |
| مقابل إنجليزي | <span dir="ltr">`Unvowelled Noon`</span> |
| دليل اسم العرض | <span dir="ltr">GitHub phrase search: noon sakinah 478 vs nun sakinah 118. Letter names are written as they are said, so the derivation gives noon rather than nun.</span> |

**التعريف:** النون الساكنة هي نون خالية من الحركة، تثبت في اللفظ والخط وفي حالي الوصل والوقف.

**الغرض:** نستخدم النون الساكنة موضعًا تبنى عليه أحكام الإظهار والإدغام والإقلاب والإخفاء في محركات التجويد.

**مرتبط به:** <span dir="ltr">[`tajwid`](/ar/docs/terms/dictionary/tajwid#tajwid)، [`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)، [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)، [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab)، [`ikhfa`](/ar/docs/terms/dictionary/tajwid#ikhfa)، [`meem_sakinah`](/ar/docs/terms/dictionary/tajwid#meem_sakinah)، [`ghunnah`](/ar/docs/terms/dictionary/tajwid#ghunnah)، [`small_meem`](/ar/docs/terms/dictionary/dabt#small_meem)، [`sukun`](/ar/docs/terms/dictionary/dabt#sukun)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)، [`tanwin_al_damm`](/ar/docs/terms/dictionary/dabt#tanwin_al_damm)، [`tanwin_al_fath`](/ar/docs/terms/dictionary/dabt#tanwin_al_fath)، [`tanwin_al_kasr`](/ar/docs/terms/dictionary/dabt#tanwin_al_kasr)</span>

**المصادر:**

- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `noon-tanween`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/64) — `64`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/57) — `57`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/86) — `86`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/67) — `67`

### القلقلة — Qalqalah [#qalqalah]

<!-- source: standards/terminology/concepts/qalqalah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`qalqalah`</span> |
| `kind` | <span dir="ltr">`classification_value`</span> |
| الأب | <span dir="ltr">[`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | القَلْقَلَة |
| تهجئات أخرى | <span dir="ltr">`qalqala`، `qalqalah_sughra`، `qalqalah_kubra`، `qalqalh`</span> |
| مقابل إنجليزي | <span dir="ltr">`echoing`</span> |

**التعريف:** القلقلة هي اضطراب في صوت الحرف الساكن عند النطق به حتى تسمع له نبرة قوية. وتقع في حروف «قطب جد»، وتقوى بحسب موضع الحرف من الكلمة والوقف عليه.

**الغرض:** نستخدم القلقلة قيمة من قيم حكم التجويد. نوسم بها موضع النص في التحليل والتلوين والتعليم، وتندرج تحتها أنواعها في سجل الأحكام.

- القلقلة صفة من صفات الحروف التي لا ضد لها، وتعد حكمًا حين نوسم بها الموضع الذي تظهر فيه.

**مرتبط به:** <span dir="ltr">[`sukun`](/ar/docs/terms/dictionary/dabt#sukun)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/78) — `78`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `qalqalah-sughra`

### السكتة — Saktah [#saktah]

<!-- source: standards/terminology/concepts/saktah.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`saktah`</span> |
| `plural` | <span dir="ltr">`saktahs`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | السَّكْتَة |
| تهجئات أخرى | <span dir="ltr">`sakta`، `sakt`</span> |

**التعريف:** السكتة هي قطع الصوت زمنًا يسيرًا من غير تنفس ثم متابعة القراءة.

**الغرض:** نستخدم السكتة لتمثيل مواضع السكت وخصائصها في النص أو التلاوة.

- السكتة هي الوقفة نفسها، وعلامة السكتة رسم في المصحف يدل عليها.

**مرتبط به:** <span dir="ltr">[`saktah_mark`](/ar/docs/terms/dictionary/dabt#saktah_mark)، [`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`tajwid`](/ar/docs/terms/dictionary/tajwid#tajwid)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/126) — `126`

### التفخيم — Tafkhim [#tafkhim]

<!-- source: standards/terminology/concepts/tafkhim.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tafkhim`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّفْخِيم |
| تهجئات أخرى | <span dir="ltr">`tafkheem`، `tafkhem`، `tafkhim_rule`</span> |
| مقابل إنجليزي | <span dir="ltr">`heavy pronunciation`، `velarisation`</span> |
| دليل اسم العرض | <span dir="ltr">tools/display_measurements.json: tafkhim 900 vs tafkheem 539; the derived form is also the dominant one.</span> |

**التعريف:** التفخيم هو سمن يدخل على صوت الحرف فيمتلئ الفم بصداه. وهو لازم في حروف الاستعلاء، وعارض في الراء ولام لفظ الجلالة والألف تبعًا لما قبلها.

**الغرض:** نستخدم التفخيم لوسم مواضع الحروف المفخمة تفخيمًا عارضًا في التلوين والتعليم، وإليه تنسب مراتب التفخيم في سجل الأحكام.

- التفخيم صفة في صوت الحرف، أما الاستعلاء فهو صفة المخرج التي ينتج عنها التفخيم.

**مرتبط به:** <span dir="ltr">[`tarqiq`](/ar/docs/terms/dictionary/tajwid#tarqiq)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/87) — `87`
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/89) — `89`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `tafkheem-rank-1-jazari`

### التجويد — Tajweed [#tajwid]

<!-- source: standards/terminology/concepts/tajwid.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tajwid`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّجْوِيد |
| النقحرة | <span dir="ltr">tajwīd</span> |
| السجل | <span dir="ltr">[`tajwid_rules`](/ar/docs/terms/registries#tajwid_rules)</span> |
| تهجئات أخرى | <span dir="ltr">`tajweed`، `tajwīd`</span> |
| دليل اسم العرض | <span dir="ltr">GitHub phrase search: tajweed 45,440 vs tajwid 25,280. The doubled form is dominant in English writing, so it is what readers see; the code name stays derived, because the doubling in general use is lexical and not a rule.</span> |

**التعريف:** التجويد هو علم أداء حروف القرآن من مخارجها وإعطائها حقوقها ومستحقاتها من الصفات والأحكام.

**الغرض:** نستخدم التجويد لتمثيل العلم الذي تنتمي إليه قواعد التجويد وأحكامه وتلوينات العرض في التطبيقات، وتنسب إليه القاعدة في المحرك أو القاموس.

- التجويد علم، والمجود نمط تسجيل، ولا يستعمل أحد الاسمين مكان الآخر.

**مرتبط به:** <span dir="ltr">[`recitation`](/ar/docs/terms/dictionary/recitation#recitation)، [`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`mujawwad`](/ar/docs/terms/dictionary/recitation_style#mujawwad)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)، [`saktah`](/ar/docs/terms/dictionary/tajwid#saktah)</span>

**المصادر:**

- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine)
- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/4) — `4`
- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/190`

### حكم التجويد — Tajwid Ruling [#tajwid_ruling]

<!-- source: standards/terminology/concepts/tajwid_ruling.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tajwid_ruling`</span> |
| `plural` | <span dir="ltr">`tajwid_rulings`</span> |
| `kind` | <span dir="ltr">`classification`</span> |
| القيم | <span dir="ltr">[`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`ikhfa`](/ar/docs/terms/dictionary/tajwid#ikhfa)، [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab)، [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)، [`qalqalah`](/ar/docs/terms/dictionary/tajwid#qalqalah)</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | حُكْم التَّجْوِيد |
| الجمع | أَحْكَام التَّجْوِيد |
| السجل | <span dir="ltr">[`tajwid_rules`](/ar/docs/terms/registries#tajwid_rules)</span> |
| تهجئات أخرى | <span dir="ltr">`hukm`، `hukum`، `ahkam_al_tajwid`، `ahkam_al_tajweed`، `tajwid_rule`، `tajweed_rule`، `tajweed_ruling`</span> |
| مقابل إنجليزي | <span dir="ltr">`tajwid ruling`</span> |

**التعريف:** حكم التجويد هو ما تقرره قواعد التجويد في أداء الحرف في موضع بعينه من النص، عند حرف يليه أو عند سكون أو همز، مثل الإظهار والإدغام والإقلاب والإخفاء والمد والقلقلة والتفخيم والترقيق.

**الغرض:** نستخدم حكم التجويد أبًا لأحكام التجويد ووعاء لسجلها. وتنسب إليه مواضع النص التي يقع فيها حكم، ويشار إلى الحكم بعينه بصف من السجل بدل اسم حر يختلف من محرك إلى محرك.

- الحكم هو ما يقع في الموضع، والتجويد هو العلم الذي يقرره.
- الحكم غير القاعدة، فالقاعدة هي شرط الحكم، والحكم هو أثر القاعدة في الموضع.

**مرتبط به:** <span dir="ltr">[`tajwid`](/ar/docs/terms/dictionary/tajwid#tajwid)، [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)، [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab)، [`ikhfa`](/ar/docs/terms/dictionary/tajwid#ikhfa)، [`qalqalah`](/ar/docs/terms/dictionary/tajwid#qalqalah)، [`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`ghunnah`](/ar/docs/terms/dictionary/tajwid#ghunnah)، [`tafkhim`](/ar/docs/terms/dictionary/tajwid#tafkhim)، [`tarqiq`](/ar/docs/terms/dictionary/tajwid#tarqiq)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`meem_sakinah`](/ar/docs/terms/dictionary/tajwid#meem_sakinah)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/4) — `4`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine)

### الترقيق — Tarqiq [#tarqiq]

<!-- source: standards/terminology/concepts/tarqiq.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`tarqiq`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | التَّرْقِيق |
| تهجئات أخرى | <span dir="ltr">`tarqeeq`، `tarqiq_rule`</span> |
| مقابل إنجليزي | <span dir="ltr">`light pronunciation`</span> |
| دليل اسم العرض | <span dir="ltr">tools/display_measurements.json: tarqiq 1156 vs tarqeeq 286; the derived form is also the dominant one.</span> |

**التعريف:** الترقيق هو نحول يدخل على صوت الحرف فلا يمتلئ الفم بصداه. وهو لازم في حروف الاستفال، وعارض في الراء ولام لفظ الجلالة.

**الغرض:** نستخدم الترقيق لوسم مواضع الحروف المرققة ترقيقًا عارضًا في التلوين والتعليم، وهو مقابل التفخيم.

**مرتبط به:** <span dir="ltr">[`tafkhim`](/ar/docs/terms/dictionary/tajwid#tafkhim)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)</span>

**المصادر:**

- [معجم مصطلحات التجويد](https://tajweed.quranpedia.net/term/show/88) — `88`
- [Rule-driven tajweed engine — rule corpus](https://github.com/quranpedia/tajweed-engine) — `raa-tarqeeq`

