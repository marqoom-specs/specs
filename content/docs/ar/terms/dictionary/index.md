---
title: "قاموس المصطلحات"
description: "المفاهيم المستخدمة في البرمجيات القرآنية، بتعريفاتها وأسمائها المعتمدة."
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---
## كيف تقرأ المدخل [#reading-entries]

ابدأ بالبحث عن الاسم أو المعنى في [البحث السريع](/ar/docs/terms/dictionary#dictionary-lookup). ولكل مفهوم مدخل يجمع تعريفه وغرضه وأسماءه؛ وتشرح [قواعد التسمية](/ar/docs/terms/standard) كيف تُختار هذه الأسماء.

مثلًا، يجمع مدخل الهمزة هذه الصور في سجل واحد:

```yaml
names:
  code: hamzah
  display: Hamzah
  arabic:
    vocalized: الهَمْزَة
    singular: الهمزة
  dabt: الهَمْزَة — رَأْس العَيْن
  by_shape: رَأْس عَيْن
  mushaf_introduction: null
  unicode: ARABIC LETTER HAMZA
alternative_spellings:
  - hamza
```

### حقول التسمية [#section-02]

الحقول الآتية داخل `names`، باستثناء `alternative_spellings` الذي يوجد في المستوى الأعلى. ولا تنطبق جميع الحقول على كل مفهوم.

| الحقل | ما يحتويه |
| --- | --- |
| `code` | الاسم الثابت للكود وواجهات `API` وقواعد البيانات. |
| `display` | الاسم الإنجليزي للقارئ في الواجهات والتوثيق. |
| `display_evidence` | دليل اختيار اسم العرض، ويكتمل قبل اعتماد المدخل. |
| `transliteration` | النقل العلمي الدقيق الاختياري، مثل `ALA-LC` أو `DIN 31635`. |
| `arabic.vocalized` | الاسم المشكول للاشتقاق والعرض العربي. |
| `arabic.singular` و`arabic.plural` | المفرد والجمع دون حركات، للمعلومة اللغوية والبحث. |
| `dabt` | اسم العلامة في علم الضبط كما ورد في مصدره. |
| `by_shape` | وصف شكل العلامة كما ورد في مصدره. |
| `mushaf_introduction` | اسم العلامة في مقدمة المصحف؛ وتعني `null` أن المقدمة لم تسمها، لا أن المدخل ناقص. |
| `unicode` | اسم المحرف الرسمي، منفصلًا عن الاسم البرمجي. |
| `alternative_spellings` | تهجئات أخرى للاسم نفسه للبحث. |


### المعنى والعلاقات [#section-03]

يشرح `definition` ما المفهوم، ويشرح `purpose` لماذا تمثله البرمجيات. وتبين `boundaries` ما لا يشمله عند احتمال الالتباس، بينما تشير `related` إلى المفاهيم المجاورة.

يحمل `kind` نوع المدخل: `entity` للكيان، و`concept` للمفهوم، و`classification` للتصنيف، و`classification_value` لقيمته، و`property` للخاصية، و`role` للدور، و`process` للعملية، و`content` للمحتوى، و`analysis` للتحليل، و`mark` للعلامة، و`unit` للوحدة. أما `category` فهو الموضوع الذي يظهر تحته المدخل في هذه الصفحة. لكل مدخل نوع واحد وموضوع واحد؛ و`process` نوع محجوز لا تستخدمه أسماء العمليات المعتادة.

يذكر `parent` ما يكون المفهوم نوعًا منه، مثل انتماء `makki` إلى `revelation_classification`. ويذكر `part_of` ما يكون جزءًا منه، مثل كون `rubu_al_hizb` جزءًا من `hizb`. وتحمل العلامة ذات العائلة اسم عائلتها في `parent`، بينما يحتفظ `mark_family` بتجميع المصدر؛ وقد يختلف التجميعان.

معرّف المدخل `concept` هو ما تشير إليه روابط القاموس. وقد يختلف عن `names.code`: فمدخل `ayah_numbering_makki` يحمل القيمة البرمجية `makki`، التي قد ترد في تصنيف آخر. استخدم القيمة داخل سياق تصنيفها.

يحتوي `english_glosses` على المقابلات الإنجليزية للبحث، ويحتوي `deprecated` على أسماء سابقة للمفهوم. فالمقابل `Verse` ليس تهجئة بديلة لـ`ayah`، والاسم المتروك لا يصبح الاسم الموصى به لمشروع جديد.

### المفاهيم وأفراد السجلات [#section-04]

المفهوم يحتاج إلى تعريف وغرض وحدود، أما الفرد من مجموعة مغلقة فيكفيه سطر في [السجلات](/ar/docs/terms/registries) باسمه وموقعه ومصدره. فـ`makki` قيمة لها معنى وتعريف، بينما حفص فرد مسمى في سجل. ويسمي حقل `registry` سجل أفراد المفهوم. ويبين `verified` في السجل ما تحقق منه المصدر؛ وقد تكون قيمته `no`.

قد يشترك فرد ومفهوم في الاسم: `hamzah` للعلامة و`qiraah:hamzah` للمقرئ. يشير الاسم المجرد إلى المفهوم، ويُبحث عن الفرد في نطاق نوعه. وأسماء الحروف مسجلة في جدول التهجئة الذي تحيل إليه القاعدة 023، لأن الاشتقاق يحتاج إليها مباشرة.

أحكام التجويد بوصفها مفاهيم لها مداخل، وحالات تطبيق المحرك لها سطور في سجل الأحكام، وموضع وقوع الحكم في النص مدى موسوم باسمه. هذه مستويات مختلفة للمعلومة.

### الأصل والحالة [#section-05]

يبين `origin` أصل المفهوم: `quranic` للمصطلح المتخصص، و`borrowed` للمصطلح العام المستعار، و`standard` لمفهوم نمذجة حدده المعيار. ويبين `tier` أهميته العملية: `core` لما تخزنه التطبيقات، و`extended` لما يندر تمثيله أو تختلف حدوده.

يبين `status` مرحلة المدخل: `draft` مسودة، و`proposed` مقترح بعد النقاش، و`adopted` معتمد، و`deprecated` مسحوب محفوظ للإحالة. وتوثق `sources` معنى المفهوم؛ اختيار التهجئة البرمجية قرار للمعيار. وتوضح `note` ملاحظات المدخل وتغييرات اسمه.

لإضافة مفهوم أو تصحيح مدخل، اتبع [المساهمة في القاموس](/ar/docs/terms/dictionary#contributing).

## المساهمة في القاموس [#contributing]

ابدأ بالبحث في [القاموس](/ar/docs/terms/dictionary#reading-entries)، ثم اقترح التغيير مع حالة من مشروع تبين الحاجة إليه. يشرح [معيار التسمية](/ar/docs/terms/standard) اختيار الاسم، ويشرح دليل القاموس معنى الحقول. وهذه الصفحة لمن يكتب المدخل أو يراجعه.

### اقترح التغيير قبل تنفيذه [#section-07]

افتح مسألة في [مستودع التوثيق](https://github.com/quran-ws/docs/issues/new/choose) عند اقتراح مصطلح أو تغيير قاعدة. اذكر المشروع والموضع والمشكلة، ثم ناقش التغيير قبل إرسال `PR`. أما تصحيح خطأ كتابي فيمكن إرساله مباشرة. وتوضح [تعليمات المستودع](https://github.com/quran-ws/docs/blob/main/CONTRIBUTING.md) إعداد بيئة العمل وتشغيل الفحوص.

### تحقق من النطاق والحاجة [#section-08]

يدخل المفهوم في القاموس إذا لم يمكن تعريفه دون الرجوع إلى القرآن أو المصحف، وكان له غرض برمجي واضح. مثلًا، يدخل `ayah_timing`، أما `user` و`subscription` فهما مفهومان عامان. ابحث عن المعنى والتهجئات قبل إنشاء مدخل؛ فقد يكون المقترح اسمًا آخر لمفهوم موجود.

يمكن للمشروع حفظ مفاهيمه المحلية بالطريقة نفسها في مجلد مستقل، بقيمة `origin: standard` ومواضيعه الخاصة، وتشغيل الأدوات عليها. ولا يعيد تعريف مفهوم موجود في القاموس ولا يستخدم اسمه لمعنى آخر. وإذا كان المفهوم المحلي داخل النطاق، يُقترح هنا لينتقل إلى القاموس بعد قبوله.

### اختر مدخلًا أو سطر سجل [#section-09]

أنشئ مدخلًا لما يحتاج إلى تعريف وغرض وحدود، مثل قيمة التصنيف `makki`. وسجل الفرد الذي يحدد باسمه وموقعه ومصدره، مثل قارئ أو سورة، في سجل المجموعة. لكل قيمة تصنيف ذات معنى مدخل مستقل حتى إن مثلها البرنامج بقيمة `enum`؛ ولا يقبل تصنيف بلا قيم.

يحمل سطر السجل مصدره وبيان `verified` لما تحقق منه، وتبقى `no` قيمة مقبولة إذا لم يكتمل التحقق. وتُكتب أسماء الحروف في جدول التهجئة الخاص بها. أما بيانات العلامات وسجل تطبيقات أحكام التجويد فلهما مصادر مولدة موضحة في تعليمات المستودع؛ عدّل المصدر لا الناتج.

### اكتب التعريف والغرض والحدود [#section-10]

يجيب `definition` عن «ما هذا المفهوم؟». اكتب تعريفًا دقيقًا مختصرًا، وتجنب التعريف الدائري وتفاصيل التنفيذ. فقول «الآية هي آية قرآنية» لا يعرّف شيئًا.

يجيب `purpose` عن «لماذا نمثله في البرمجيات؟». اذكر ما يربطه أو يخزنه البرنامج وما الذي يحتاج إلى تمييزه. لا تكرر التعريف في هذا الحقل؛ فبيان استخدام الآية لربط التفسير والتلاوة بموضع من النص يوضح غرضها البرمجي.

عند احتمال الالتباس، اكتب في `boundaries` ما لا يشمله المفهوم، وأشر إلى المفاهيم المجاورة في `related`. بيّن مثلًا هل يخزن العمود كلمة من النص أم وحدة ينتجها التقسيم؛ لا تكتف بعبارة «يختلف عن `word`».

هذه أمور يراجعها القارئ؛ نجاح الفحص الآلي لا يثبت جودة التعريف أو الحاجة إلى المدخل.

### أكمل بنية المدخل [#section-11]

لكل مفهوم ملف `YAML` في `standards/terminology/concepts/` يطابق اسمه قيمة `concept`. يحدد [المخطط](https://github.com/quran-ws/docs/blob/main/standards/terminology/schema.json) الحقول وقيمها، ويشرح [دليل قراءة المدخل](/ar/docs/terms/dictionary#reading-entries) معناها.

الحقول الأساسية هي `concept` و`kind` و`category` و`origin` و`tier` و`status`، وحقلا `names.code` و`names.display`، والتعريف والغرض بلغتيهما: `definition` و`definition_en` و`purpose` و`purpose_en`.

- اختر `kind` واحدًا من القائمة المغلقة، و`category` واحدًا من المواضيع الموجودة. لا تنشئ نوعًا يجمع الشكل والموضوع، مثل `textual_concept`، ولا تضف موضوعًا فارغًا.
- حدد `parent` لكل قيمة تصنيف ولكل علامة ذات عائلة. واستخدم `part_of` للاحتواء مع إحالة إلى كيان. يجب أن تشير العلاقات إلى مداخل موجودة.
- أضف `plural` إذا كان المفهوم يمثل مجموعة في الاستخدام؛ وهو الاسم البرمجي مع `s`، بما في ذلك الأسماء المركبة.
- الاسم العربي المشكول لازم عند `origin: quranic`. وللمصطلح المستعار يُكتب الاسم العربي إذا كان مستقرًا، دون اختراع مقابل جديد.
- حقول `symbol` و`unicode` و`mark_family` للعلامات وقيم `waqf_mark_type` المرسومة. وكتلة `unicode` مولدة من قاعدة يونيكود ولا تعدل باليد.
- افصل `alternative_spellings` عن `english_glosses` وعن `deprecated`. الاسم الذي يخص مفهومًا آخر لا يُضاف مرادفًا؛ يُشرح الالتباس في `boundaries`.

### استند إلى مصدر مناسب [#section-12]

يوثق المصدر معنى المفهوم وتعريفه؛ أما اختيار اسمه البرمجي فقرار للمعيار. سجل المصدر في `standards/terminology/sources.yml`، ثم أحل إليه من `sources` بمعرّفه وموضع الاستشهاد، مثل الصفحة أو رقم المصطلح. وتستخدم صفوف السجلات المصادر نفسها.

يبدأ المدخل بـ`draft`، ثم ينتقل إلى `proposed` بعد النقاش وإلى `adopted` بعد الاعتماد. لا يُعتمد مدخل دون مصدر لتعريفه ودليل لاختيار اسم العرض في `names.display_evidence`. وقد تحمل المسودة اسم عرض قبل اكتمال دليله.

### وثق أدلة الاستعمال [#usage-evidence]

قارن تهجئات المفهوم نفسه داخل مجموعة مصادر معلنة ذات صلة بالبرمجيات القرآنية أو الكتابة العلمية الإنجليزية في مجاله. تصلح المستودعات الأصلية ووثائق المشاريع وواجهاتها والمنشورات العلمية ذات الصلة؛ ولا تثبت نتائج البحث العامة وحدها شيوع اسم في هذا المجال.

سجل في دليل اسم العرض أو في سجل قرار الاستثناء:

1. التهجئات المرشحة ومعنى المصطلح المقارن، والمصادر المختارة وسبب اختيارها وتاريخ القياس.
2. الاستعلامات الدقيقة وقيود البحث ووحدة العد: مشروع أو وثيقة أو ملف. استخدم عبارة مقيدة بالسياق إذا كانت الكلمة شائعة بمعنى آخر.
3. النتائج وروابط الشواهد، وكيف استُبعدت النسخ والمرايا والنتائج غير المتعلقة بالمفهوم. لا تخلط أعداد الملفات بأعداد المشاريع أو الوثائق.
4. حدود القياس، والصيغة المختارة وسبب الاختيار، ومن راجع الدليل وتاريخ المراجعة.

لاسم العرض، اختر الأكثر شيوعًا في المجموعة بعد التحقق من صلة النتائج؛ وإذا تعادلت الأدلة أو كانت غير كافية، أبقِ الاختيار مؤقتًا في مدخل `draft` ولا تدّعِ أنه مقاس بما يكفي للاعتماد.

لاستثناء التهجئة البرمجية، لا تكفي غلبة صيغة على أخرى. يجب أن يبين القرار صراحة ندرة الصورة المشتقة في المجموعة، وسبب الحاجة إلى استثناء هذا المصطلح، وأثره في التوافق. يراجع صاحب الاقتراح هذه الحجة مع المراجعين ويسجل القرار قبل إضافة الاستثناء. لا توجد عتبة رقمية عامة؛ الأرقام دليل ضمن القرار وليست اعتمادًا آليًا.

الأعداد التاريخية المخزنة في `display_measurements.json` شواهد أولية كما جُمعت، وليست سجلًا مكتملًا وفق هذه السياسة. لا نفترض تاريخًا أو تنظيفًا أو مراجعة لم تُسجَّل. تُستكمل البيانات الناقصة قبل اعتماد مدخل أو استثناء جديد؛ ولا تعيد هذه الصفحة قياس الأسماء القائمة أو تغييرها.

### حافظ على توافق اللغتين [#section-14]

المدخل واحد وله نص عربي وإنجليزي. الحقول `definition_en` و`purpose_en` و`boundaries_en` و`note_en` ترجمات لحقولها العربية؛ لا تضيف قيدًا ولا تسقطه. وتطابق حدود المفهوم سطرًا بسطر.

استخدم الاسم المعتمد في النص الإنجليزي، مثل `ayah`، واكتب المعرفات بين علامتي الشفرة. واحتفظ بالصيغة نفسها عند ترجمة عبارات عربية متطابقة. لا تترك نصًا عربيًا في الحقول الإنجليزية إلا اسمًا تناقشه الفقرة، موضوعًا بين «…». هذه ترجمة لشرح المفهوم، وليست ترجمة معتمدة للنص الشرعي.

### سجل تغيير الاسم دون قطع الإحالة [#section-15]

عند إعادة التسمية أو دمج مدخلين للمفهوم نفسه، ضع الاسم القديم في `deprecated` في المدخل الباقي. وسجل التاريخ والسبب في `note` مع رابط إلى سجل القرارات. الأسماء المتروكة تبقى في هذا الحقل؛ فهرس `aliases.json` مخصص للتهجئات البديلة.

إذا سُحب المدخل كله، أبقه بقيمة `status: deprecated` حتى لا يعاد استخدام اسمه بمعنى آخر. الاسم الخاطئ لمفهوم مختلف لا يعامل اسمًا قديمًا للمفهوم الحالي.

### قبل إرسال التغيير [#section-16]

- الحالة الواقعية وغرض المفهوم وحدوده ومصادره موضحة.
- الاسم يطابق المعيار والعلاقات تشير إلى مداخل موجودة.
- العربية والإنجليزية متوافقتان، وحالة المدخل تعكس مراجعته.
- الأسماء القديمة محفوظة مع سبب التغيير وتاريخه عند الحاجة.

## البحث السريع [#dictionary-lookup]

مدخل لكل مفهوم، مرتبة بالاسم. اضغط الاسم للوصول إلى المدخل كاملًا.

| الاسم | العرض | العربية | النوع | الموضوع | التعريف |
| --- | --- | --- | --- | --- | --- |
| [`abrogation`](/ar/docs/terms/dictionary/quranic_sciences#abrogation) | Abrogation | النسخ | <span dir="ltr">`concept`</span> | <span dir="ltr">`quranic_sciences`</span> | النسخ هو رفع حكم شرعي بدليل شرعي جاء بعده، ويدرس في القرآن بنسبة الآية الناسخة إلى الآية المنسوخة. |
| [`asbab_al_nuzul`](/ar/docs/terms/dictionary/revelation#asbab_al_nuzul) | Asbab al-Nuzul | أسباب النزول | <span dir="ltr">`content`</span> | <span dir="ltr">`revelation`</span> | أسباب النزول هي الحوادث أو الأسئلة التي نزلت آية أو آيات للحديث عنها أو لبيان حكم يتعلق بها. |
| [`ayah`](/ar/docs/terms/dictionary/structure#ayah) | Ayah | الآية | <span dir="ltr">`entity`</span> | <span dir="ltr">`structure`</span> | الآية وحدة من النص القرآني تقع داخل سورة ولها حدود محددة. |
| [`ayah_count`](/ar/docs/terms/dictionary/ayah_numbering#ayah_count) | Ayah Count | عدد الآيات | <span dir="ltr">`property`</span> | <span dir="ltr">`ayah_numbering`</span> | عدد الآيات هو عدد آيات السورة في نظام عد بعينه. |
| [`ayah_ending`](/ar/docs/terms/dictionary/structure#ayah_ending) | Ayah Ending | الفاصلة | <span dir="ltr">`concept`</span> | <span dir="ltr">`structure`</span> | الفاصلة هي خاتمة الآية أو المقطع من جهة النظم، ويعرفها بعض العلماء بأنها الكلمة الأخيرة من الآية. |
| [`ayah_fragment`](/ar/docs/terms/dictionary/mushaf#ayah_fragment) | Ayah Fragment | مقطع الآية | <span dir="ltr">`unit`</span> | <span dir="ltr">`mushaf`</span> | مقطع الآية هو ما يظهر من آية واحدة في سطر واحد من صفحة مصحف بعينه. |
| [`ayah_key`](/ar/docs/terms/dictionary/structure#ayah_key) | Ayah Key |  | <span dir="ltr">`property`</span> | <span dir="ltr">`structure`</span> | مفتاح الآية معرف نصي للآية يجمع رقم سورتها ورقمها داخلها مفصولين بنقطتين، على صورة `2:255`. |
| [`ayah_mark`](/ar/docs/terms/dictionary/dabt#ayah_mark) | Ayah Mark | علامة الآية | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | علامة الآية هي الدارة الفاصلة بين الآيتين، وتوضع عند نهاية الآية ويكتب فيها رقمها في أكثر المصاحف. |
| [`ayah_numbering_basri`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri) | Basri Numbering | العد البصري | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`ayah_numbering`</span> | العد البصري هو نظام عد الآي المروي عن عاصم الجحدري عن أسلافه من أهل البصرة. |
| [`ayah_numbering_dimashqi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi) | Dimashqi Numbering | العد الدمشقي | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`ayah_numbering`</span> | العد الدمشقي هو نظام عد أهل الشام، المروي عن يحيى بن الحارث الذماري عن ابن عامر، ويسمى العد الشامي. |
| [`ayah_numbering_kufi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi) | Kufi Numbering | العد الكوفي | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`ayah_numbering`</span> | العد الكوفي هو نظام عد الآي المروي عن حمزة الزيات عن ابن أبي ليلى عن أبي عبد الرحمن السلمي عن علي بن أبي طالب، وهو العد الذي تتبعه أكثر المصاحف المطبوعة اليوم. |
| [`ayah_numbering_madani_first`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first) | First Madani Numbering | العد المدني الأول | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`ayah_numbering`</span> | العد المدني الأول هو نظام عد أهل المدينة في روايته الأولى، وهي رواية أبي جعفر يزيد بن القعقاع وشيبة بن نصاح. |
| [`ayah_numbering_madani_last`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last) | Last Madani Numbering | العد المدني الأخير | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`ayah_numbering`</span> | العد المدني الأخير هو نظام عد أهل المدينة في روايته الأخيرة، وهي رواية إسماعيل بن جعفر عن سليمان بن جماز. |
| [`ayah_numbering_makki`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki) | Makki Numbering | العد المكي | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`ayah_numbering`</span> | العد المكي هو نظام عد الآي المروي عن ابن كثير عن مجاهد عن ابن عباس عن أبي بن كعب. |
| [`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system) | Ayah Numbering System | نظام عد الآي | <span dir="ltr">`classification`</span> | <span dir="ltr">`ayah_numbering`</span> | نظام عد الآي هو النظام الذي يحدد حدود الآيات وأعدادها وأرقامها وبعض المسائل المتعلقة بالبسملة، وفق إحدى مدارس عد الآي. |
| [`ayah_timing`](/ar/docs/terms/dictionary/recitation#ayah_timing) | Ayah Timing |  | <span dir="ltr">`concept`</span> | <span dir="ltr">`recitation`</span> | توقيت الآية مدى زمني في تسجيل تلاوة، له بداية ونهاية، ويقابل آية بعينها. |
| [`basmalah`](/ar/docs/terms/dictionary/structure#basmalah) | Basmalah | البسملة | <span dir="ltr">`concept`</span> | <span dir="ltr">`structure`</span> | البسملة هي صيغة «بسم الله الرحمن الرحيم» التي تفتتح بها السور عدا سورة التوبة. |
| [`character`](/ar/docs/terms/dictionary/text#character) | Character |  | <span dir="ltr">`unit`</span> | <span dir="ltr">`text`</span> | المحرف وحدة نصية مجردة في نظام تمثيل رقمي، ولا يلزم أن يطابق حرفًا لغويًا واحدًا. |
| [`codepoint`](/ar/docs/terms/dictionary/text#codepoint) | Codepoint |  | <span dir="ltr">`unit`</span> | <span dir="ltr">`text`</span> | نقطة الترميز قيمة رقمية معرفة في معيار ترميز مثل `Unicode`. |
| [`dagger_alif`](/ar/docs/terms/dictionary/dabt#dagger_alif) | Dagger Alif | الألف الخنجرية | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الألف الخنجرية علامة تدل على ألف محذوفة من الرسم واجبة النطق. |
| [`dammah`](/ar/docs/terms/dictionary/dabt#dammah) | Dammah | الضمة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الضمة علامة تدل على حركة الحرف بالضم. |
| [`disputed`](/ar/docs/terms/dictionary/revelation#disputed) | Disputed | مختلف فيه | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`revelation`</span> | المختلف فيه هو ما اختلفت المصادر المعتمدة في تصنيفه بين المكي والمدني. |
| [`division_mark`](/ar/docs/terms/dictionary/dabt#division_mark) | Division Mark | علامة التقسيم | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | علامة التقسيم علامة تدل على بداية الأجزاء والأحزاب وأنصافها وأرباعها. |
| [`dot`](/ar/docs/terms/dictionary/dabt#dot) | Dot | النقطة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | النقطة نقطة واحدة فوق الحرف أو تحته تميزه عن الحرف الذي يشاركه في الرسم، مثل الباء والنون والجيم والخاء والذال. |
| [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah) | Equivalent Ayah | الآية المقابلة | <span dir="ltr">`concept`</span> | <span dir="ltr">`ayah_numbering`</span> | الآية المقابلة هي الآية في نظام عد تقابل آية في نظام عد آخر، سواء اتفق رقماهما أو اختلفا لاختلاف مواضع الفصل بين الآي. |
| [`fathah`](/ar/docs/terms/dictionary/dabt#fathah) | Fathah | الفتحة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الفتحة علامة تدل على حركة الحرف بالفتح. |
| [`font`](/ar/docs/terms/dictionary/mushaf#font) | Font | الخط | <span dir="ltr">`concept`</span> | <span dir="ltr">`mushaf`</span> | الخط ملف يحمل مجموعة من الأشكال المرسومة (`glyphs`) وقواعد إخراجها، ويُعرض به نص المصحف. |
| [`ghunnah`](/ar/docs/terms/dictionary/tajwid#ghunnah) | Ghunnah | الغنة | <span dir="ltr">`concept`</span> | <span dir="ltr">`tajwid`</span> | الغنة صوت يخرج من الخيشوم مركب في جسم النون والميم، ولا عمل للسان فيه. |
| [`glyph`](/ar/docs/terms/dictionary/text#glyph) | Glyph |  | <span dir="ltr">`unit`</span> | <span dir="ltr">`text`</span> | الشكل المرسوم هو الشكل البصري الذي ينتجه الخط لتمثيل حرف أو محرف أو مجموعة منها. |
| [`grapheme`](/ar/docs/terms/dictionary/text#grapheme) | Grapheme |  | <span dir="ltr">`unit`</span> | <span dir="ltr">`text`</span> | الوحدة الكتابية وحدة يدركها المستخدم على أنها وحدة واحدة، وقد تتكون من أكثر من `codepoint`. |
| [`hadr`](/ar/docs/terms/dictionary/recitation_pace#hadr) | Hadr | الحدر | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`recitation_pace`</span> | الحدر هو الإسراع في القراءة مع المحافظة على الحروف والحركات وأحكام الأداء دون إخلال. |
| [`hamzah`](/ar/docs/terms/dictionary/dabt#hamzah) | Hamzah | الهمزة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الهمزة علامة تدل على همزة القطع المحققة. |
| [`hamzat_al_wasl`](/ar/docs/terms/dictionary/dabt#hamzat_al_wasl) | Hamzat al-Wasl | همزة الوصل | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | همزة الوصل علامة تدل على سقوط الهمزة في الوصل. |
| [`harakah`](/ar/docs/terms/dictionary/dabt#harakah) | Harakah | الحركة | <span dir="ltr">`classification`</span> | <span dir="ltr">`dabt`</span> | الحركة علامة تضبط حركة الحرف أو سكونه أو تشديده، وهي الفتحة والضمة والكسرة والسكون والشدة. |
| [`hizb`](/ar/docs/terms/dictionary/divisions#hizb) | Hizb | الحزب | <span dir="ltr">`entity`</span> | <span dir="ltr">`divisions`</span> | الحزب في التقسيم المعاصر نصف جزء، فيكون القرآن 60 حزبًا. |
| [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham) | Idgham | الإدغام | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | الإدغام إدخال حرف ساكن في حرف متحرك بعده بحيث يصيران حرفًا واحدًا مشددًا. |
| [`ijam`](/ar/docs/terms/dictionary/dabt#ijam) | Ijam | الإعجام | <span dir="ltr">`classification`</span> | <span dir="ltr">`dabt`</span> | الإعجام هو النقط الذي يميز الحرف عن الحروف التي تشاركه في صورة الرسم. |
| [`ikhfa`](/ar/docs/terms/dictionary/tajwid#ikhfa) | Ikhfa | الإخفاء | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | الإخفاء هو النطق بالحرف الساكن على صفة بين الإظهار والإدغام، دون تشديد ومع بقاء الغنة. |
| [`imalah`](/ar/docs/terms/dictionary/dabt#imalah) | Imalah | الإمالة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | علامة الإمالة تدل على الإمالة الكبرى، وهي نطق الفتحة مائلة إلى الكسرة، وترد في رواية حفص في موضع واحد (11:41). |
| [`instructional_ayah_repetition`](/ar/docs/terms/dictionary/recitation_style#instructional_ayah_repetition) | Instructional Ayah Repetition | تكرار الآيات | <span dir="ltr">`concept`</span> | <span dir="ltr">`recitation_style`</span> | تكرار الآيات هو إعادة آية أو جزء منها مرة أو مرات وفق نمط تعليمي يساعد على التلقي والحفظ. |
| [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab) | Iqlab | الإقلاب | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | الإقلاب قلب النون الساكنة أو التنوين ميمًا مخفاة بغنة عند الباء. |
| [`irab`](/ar/docs/terms/dictionary/linguistics#irab) | Irab | الإعراب | <span dir="ltr">`analysis`</span> | <span dir="ltr">`linguistics`</span> | الإعراب بيان الوظائف النحوية للكلمات وعلاماتها وعلاقاتها في التركيب. |
| [`ishmam`](/ar/docs/terms/dictionary/dabt#ishmam) | Ishmam | الإشمام | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | علامة الإشمام تدل على الإشمام، وهو ضم الشفتين إشارة إلى الضمة المحذوفة من غير صوت. |
| [`istiadhah`](/ar/docs/terms/dictionary/recitation#istiadhah) | Istiadhah | الاستعاذة | <span dir="ltr">`concept`</span> | <span dir="ltr">`recitation`</span> | الاستعاذة طلب العوذ بالله من الشيطان عند إرادة تلاوة القرآن. |
| [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar) | Izhar | الإظهار | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | الإظهار إخراج الحرف الساكن من مخرجه من غير غنة زائدة فيه، مثل إظهار النون الساكنة والتنوين عند حروف الحلق، وإظهار الميم الساكنة عند غير الباء والميم. |
| [`juz`](/ar/docs/terms/dictionary/divisions#juz) | Juz | الجزء | <span dir="ltr">`entity`</span> | <span dir="ltr">`divisions`</span> | الجزء واحد من 30 قسمًا في التقسيم المشهور للمصحف، والغرض من هذا التقسيم تيسير القراءة والختم. |
| [`kasrah`](/ar/docs/terms/dictionary/dabt#kasrah) | Kasrah | الكسرة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الكسرة علامة تدل على حركة الحرف بالكسر. |
| [`khatmah`](/ar/docs/terms/dictionary/recitation#khatmah) | Khatmah | الختمة | <span dir="ltr">`concept`</span> | <span dir="ltr">`recitation`</span> | الختمة قراءة القرآن كاملًا من أوله إلى آخره. |
| [`layout`](/ar/docs/terms/dictionary/mushaf#layout) | Layout | التخطيط | <span dir="ltr">`concept`</span> | <span dir="ltr">`mushaf`</span> | التخطيط تنظيم النص والعناصر بصريًا في صفحات وأسطر ومواضع داخل مصحف أو عرض معين. |
| [`lemma`](/ar/docs/terms/dictionary/linguistics#lemma) | Lemma |  | <span dir="ltr">`unit`</span> | <span dir="ltr">`linguistics`</span> | الصيغة المعجمية هي الصيغة الأساسية التي تُرد إليها صورة الكلمة المصرفة. |
| [`letter`](/ar/docs/terms/dictionary/text#letter) | Letter | الحرف | <span dir="ltr">`unit`</span> | <span dir="ltr">`text`</span> | الحرف هو الحرف الهجائي بوصفه وحدة لغوية من وحدات الكتابة. |
| [`letter_relation`](/ar/docs/terms/dictionary/tajwid#letter_relation) | Letter Relation | علاقة الحرفين | <span dir="ltr">`classification`</span> | <span dir="ltr">`tajwid`</span> | علاقة الحرفين هي نسبة الحرفين المتجاورين أحدهما إلى الآخر في المخرج والصفة، وهي تماثل أو تجانس أو تقارب أو تباعد. |
| [`line`](/ar/docs/terms/dictionary/mushaf#line) | Line | السطر | <span dir="ltr">`unit`</span> | <span dir="ltr">`mushaf`</span> | السطر هو السطر الطباعي داخل صفحة مصحف أو تخطيط معين. |
| [`madani`](/ar/docs/terms/dictionary/revelation#madani) | Madani | مدني | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`revelation`</span> | المدني ما نزل من القرآن بعد الهجرة، ولو نزل خارج المدينة. |
| [`madd`](/ar/docs/terms/dictionary/tajwid#madd) | Madd | المد | <span dir="ltr">`classification`</span> | <span dir="ltr">`tajwid`</span> | المد إطالة الصوت بحرف من حروف المد الـ3، وهي الألف الساكنة بعد فتح والواو الساكنة بعد ضم والياء الساكنة بعد كسر. |
| [`madd_al_badal`](/ar/docs/terms/dictionary/tajwid#madd_al_badal) | Madd al-Badal | مد البدل | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | مد البدل مد سببه همزة قبل حرف المد، وأُبدل فيه حرف المد من همزة ساكنة، مثل «آمن» و«أوتوا» و«إيمان». |
| [`madd_al_iwad`](/ar/docs/terms/dictionary/tajwid#madd_al_iwad) | Madd al-Iwad | مد العوض | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | مد العوض هو مد الألف عوضًا عن تنوين الفتح عند الوقف على الكلمة، ومقداره حركتان. |
| [`madd_al_lin`](/ar/docs/terms/dictionary/tajwid#madd_al_lin) | Madd al-Lin | مد اللين | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | مد اللين هو مد الواو أو الياء الساكنة المفتوح ما قبلها عند الوقف على الكلمة بسكون عارض، مثل «خوف» و«بيت». |
| [`madd_al_silah`](/ar/docs/terms/dictionary/tajwid#madd_al_silah) | Madd al-Silah | مد الصلة | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | مد الصلة مد ينشأ عن صلة هاء الضمير بواو أو ياء إذا وقعت بين متحركين. |
| [`madd_arid_li_al_sukun`](/ar/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun) | Madd Arid lil-Sukun | المد العارض للسكون | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | المد العارض للسكون مد سببه سكون عارض في الوقف بعد حرف المد، ويجوز فيه القصر والتوسط والطول. |
| [`madd_lazim`](/ar/docs/terms/dictionary/tajwid#madd_lazim) | Madd Lazim | المد اللازم | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | المد اللازم مد فرعي سببه سكون أصلي ثابت في الوصل والوقف بعد حرف المد، ويقع في كلمة أو في حرف من فواتح السور. |
| [`madd_munfasil`](/ar/docs/terms/dictionary/tajwid#madd_munfasil) | Madd Munfasil | المد المنفصل | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | المد المنفصل مد فرعي سببه همزة في أول الكلمة التالية لحرف المد، وهو جائز، فيُقصر ويُمد بحسب الرواية والطريق. |
| [`madd_muttasil`](/ar/docs/terms/dictionary/tajwid#madd_muttasil) | Madd Muttasil | المد المتصل | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | المد المتصل مد فرعي سببه همزة بعد حرف المد في كلمة واحدة، وهو واجب عند القراء جميعًا، وتختلف مقاديره بحسب الرواية والطريق. |
| [`madd_tabii`](/ar/docs/terms/dictionary/tajwid#madd_tabii) | Madd Tabee | المد الطبيعي | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | المد الطبيعي هو المد الذي لا تقوم ذات حرف المد إلا به، ولا يتوقف على سبب من همز أو سكون، ومقداره حركتان. |
| [`maddah`](/ar/docs/terms/dictionary/dabt#maddah) | Maddah | المدة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | المدة علامة تدل على لزوم مد الحرف مدًّا زائدًا على المد الطبيعي. |
| [`makki`](/ar/docs/terms/dictionary/revelation#makki) | Makki | مكي | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`revelation`</span> | المكي ما نزل من القرآن قبل الهجرة، ولو نزل خارج مكة. |
| [`manzil`](/ar/docs/terms/dictionary/divisions#manzil) | Manzil | المنزل | <span dir="ltr">`entity`</span> | <span dir="ltr">`divisions`</span> | المنزل واحد من 7 أقسام تقليدية للقرآن، والغرض من هذا التقسيم تيسير ختمه في أسبوع. |
| [`mathani`](/ar/docs/terms/dictionary/surah_classification#mathani) | Mathani | المثاني | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`surah_classification`</span> | المثاني هي السور التي تقل آياتها عن المئين وتليها في التقسيم التقليدي، وسميت مثاني لكثرة ما تُثنى، أي تتكرر قراءتها. |
| [`meem_sakinah`](/ar/docs/terms/dictionary/tajwid#meem_sakinah) | Meem Sakinah | الميم الساكنة | <span dir="ltr">`concept`</span> | <span dir="ltr">`tajwid`</span> | الميم الساكنة ميم خالية من الحركة، ثابتة في اللفظ والخط، وتقع في وسط الكلمة أو آخرها. |
| [`miun`](/ar/docs/terms/dictionary/surah_classification#miun) | Miun | المئون | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`surah_classification`</span> | المئون هي السور التي تقارب آياتها المئة أو تزيد عليها أو تنقص عنها قليلًا. |
| [`morpheme`](/ar/docs/terms/dictionary/linguistics#morpheme) | Morpheme | الوحدة الصرفية | <span dir="ltr">`unit`</span> | <span dir="ltr">`linguistics`</span> | الوحدة الصرفية أصغر وحدة في الكلمة تحمل معنى أو وظيفة صرفية، مثل السابقة واللاحقة والجذع. |
| [`morphology`](/ar/docs/terms/dictionary/linguistics#morphology) | Morphology | الصرف | <span dir="ltr">`analysis`</span> | <span dir="ltr">`linguistics`</span> | الصرف تحليل بنية الكلمة وصيغتها وما تحمله من خصائص صرفية. |
| [`muallim`](/ar/docs/terms/dictionary/recitation_style#muallim) | Muallim | معلم | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`recitation_style`</span> | المعلم نمط تلاوة معد للتعليم، وقد يتضمن تكرار الآيات أو إتاحة وقت للمتعلم للترديد. |
| [`mufassal`](/ar/docs/terms/dictionary/surah_classification#mufassal) | Mufassal | المفصل | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`surah_classification`</span> | المفصل مجموعة من قصار السور التي تلي المثاني، ويختلف العلماء في أولها. |
| [`mufassir`](/ar/docs/terms/dictionary/tafsir#mufassir) | Mufassir | المفسر | <span dir="ltr">`role`</span> | <span dir="ltr">`tafsir`</span> | المفسر من نُسب إليه تفسير للقرآن، تأليفًا أو رواية. |
| [`mujawwad`](/ar/docs/terms/dictionary/recitation_style#mujawwad) | Mujawwad | مجود | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`recitation_style`</span> | المجود نمط أداء بطيء يُمد فيه الصوت وتُستوفى أحكام التجويد بتطريب، وهو الوصف الذي تُنشر به التسجيلات المؤداة على هذا النحو. |
| [`muqatta_letter`](/ar/docs/terms/dictionary/structure#muqatta_letter) | Muqatta Letter | الحرف المقطع | <span dir="ltr">`concept`</span> | <span dir="ltr">`structure`</span> | الحروف المقطعة حروف هجائية افتتحت بها بعض السور، مثل «الم» و«الر» و«حم» و«كهيعص». |
| [`muqri`](/ar/docs/terms/dictionary/qiraat#muqri) | Muqri | المقرئ | <span dir="ltr">`role`</span> | <span dir="ltr">`qiraat`</span> | المقرئ من تلقى القراءة وأتقنها وينقلها إلى المتعلمين. |
| [`murattal`](/ar/docs/terms/dictionary/recitation_style#murattal) | Murattal | مرتل | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`recitation_style`</span> | المرتل نمط أداء متزن دون تطريب، على مرتبة الترتيل، وهو الوصف الذي تُنشر به التسجيلات المؤداة على هذا النحو. |
| [`mushaf`](/ar/docs/terms/dictionary/core#mushaf) | Mushaf | المصحف | <span dir="ltr">`entity`</span> | <span dir="ltr">`core`</span> | المصحف هو الصحف التي جُمع فيها القرآن مكتوبًا ومرتبًا على ترتيبه المعروف. |
| [`mushaf_edition`](/ar/docs/terms/dictionary/core#mushaf_edition) | Mushaf Edition | طبعة المصحف | <span dir="ltr">`entity`</span> | <span dir="ltr">`core`</span> | طبعة المصحف إصدار منشور محدد من المصحف، له خصائص محددة مثل الناشر والرسم والضبط والتخطيط وغيرها. |
| [`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark) | Mushaf Mark | علامة المصحف | <span dir="ltr">`classification`</span> | <span dir="ltr">`dabt`</span> | علامة المصحف رمز أو علامة غير داخلة في الحروف الأصلية للكلمة، وتستخدم في المصحف لأغراض القراءة أو التنظيم أو الإرشاد. |
| [`mutajanisan`](/ar/docs/terms/dictionary/tajwid#mutajanisan) | Mutajanisan | المتجانسان | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | المتجانسان حرفان اتحدا في المخرج واختلفا في الصفة، مثل الدال والتاء في «قد تبين». |
| [`mutamathilan`](/ar/docs/terms/dictionary/tajwid#mutamathilan) | Mutamathilan | المتماثلان | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | المتماثلان حرفان اتحدا في المخرج والصفة، مثل الباء في «اضرب بعصاك». |
| [`mutashabihat`](/ar/docs/terms/dictionary/quranic_sciences#mutashabihat) | Mutashabihat | المتشابهات | <span dir="ltr">`analysis`</span> | <span dir="ltr">`quranic_sciences`</span> | المتشابهات هي المواضع التي يتشابه فيها لفظ الآيات أو أجزائها في القرآن، تشابهًا تامًّا أو مع اختلاف يسير في كلمة أو ترتيب. |
| [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah) | Noon Sakinah | النون الساكنة | <span dir="ltr">`concept`</span> | <span dir="ltr">`tajwid`</span> | النون الساكنة هي نون خالية من الحركة، تثبت في اللفظ والخط وفي حالي الوصل والوقف. |
| [`noun`](/ar/docs/terms/dictionary/linguistics#noun) | Noun | الاسم | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`linguistics`</span> | الاسم هو ما دل على معنى في نفسه غير مقترن بزمان، وتدخل فيه الأسماء والصفات والضمائر وأسماء الإشارة والموصولات. |
| [`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark) | Orthographic Mark | العلامة الإملائية | <span dir="ltr">`classification`</span> | <span dir="ltr">`dabt`</span> | العلامة الإملائية هي علامة تضبط رسم الكلمة، مثل الهمزة والمدة والحروف الصغيرة. |
| [`page`](/ar/docs/terms/dictionary/mushaf#page) | Page | الصفحة | <span dir="ltr">`unit`</span> | <span dir="ltr">`mushaf`</span> | الصفحة هي وحدة طباعية من تخطيط مصحف معين، وقد يختلف محتواها وحدودها باختلاف المصحف أو الطبعة. |
| [`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech) | Part of Speech | قسم الكلمة | <span dir="ltr">`classification`</span> | <span dir="ltr">`linguistics`</span> | قسم الكلمة هو تصنيف الكلمة أو الوحدة الصرفية بحسب بابها النحوي، مثل الاسم والفعل والحرف وما يتفرع عنها. |
| [`particle`](/ar/docs/terms/dictionary/linguistics#particle) | Particle | حرف المعنى | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`linguistics`</span> | حرف المعنى هو ما دل على معنى في غيره، مثل حروف الجر والعطف والنفي والاستفهام. |
| [`qalqalah`](/ar/docs/terms/dictionary/tajwid#qalqalah) | Qalqalah | القلقلة | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`tajwid`</span> | القلقلة هي اضطراب في صوت الحرف الساكن عند النطق به حتى تسمع له نبرة قوية. |
| [`qiraah`](/ar/docs/terms/dictionary/qiraat#qiraah) | Qiraah | القراءة | <span dir="ltr">`concept`</span> | <span dir="ltr">`qiraat`</span> | القراءة هي وجه من وجوه قراءة القرآن ينسب إلى إمام من أئمة القراءات، وتتفرع عنه الروايات والطرق. |
| [`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark) | Qiraah Mark | علامة القراءة | <span dir="ltr">`classification`</span> | <span dir="ltr">`dabt`</span> | علامة القراءة هي علامة ترشد إلى وجه من وجوه الأداء في موضعها، مثل السكت والإشمام والتسهيل. |
| [`quran`](/ar/docs/terms/dictionary/core#quran) | Quran | القرآن | <span dir="ltr">`concept`</span> | <span dir="ltr">`core`</span> | القرآن هو كلام الله المنزل على محمد صلى الله عليه وسلم والمتعبد بتلاوته. |
| [`quran_merits`](/ar/docs/terms/dictionary/quranic_sciences#quran_merits) | Quran Merits | فضائل القرآن | <span dir="ltr">`content`</span> | <span dir="ltr">`quranic_sciences`</span> | فضائل القرآن هي ما ورد في فضل القرآن أو فضل سورة منه أو آية، وما يترتب على قراءتها من أجر أو أثر. |
| [`rasm`](/ar/docs/terms/dictionary/mushaf#rasm) | Rasm | الرسم | <span dir="ltr">`classification`</span> | <span dir="ltr">`mushaf`</span> | الرسم هو طريقة كتابة ألفاظ القرآن من حيث إثبات الحروف وحذفها وزيادتها وفصلها ووصلها وما يشبه ذلك. |
| [`rasm_imlai`](/ar/docs/terms/dictionary/mushaf#rasm_imlai) | Rasm Imlai | الرسم الإملائي | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`mushaf`</span> | الرسم الإملائي هو كتابة ألفاظ القرآن على قواعد الإملاء المعاصرة، بإثبات ما يحذف في الرسم العثماني وحذف ما يزاد فيه، حتى تقرأ الكلمة على صورتها المألوفة. |
| [`rasm_uthmani`](/ar/docs/terms/dictionary/mushaf#rasm_uthmani) | Rasm Uthmani | الرسم العثماني | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`mushaf`</span> | الرسم العثماني هو طريقة كتابة كلمات المصاحف العثمانية وما يتعلق بها من حذف وزيادة وبدل وفصل ووصل. |
| [`rawi`](/ar/docs/terms/dictionary/qiraat#rawi) | Rawi | الراوي | <span dir="ltr">`role`</span> | <span dir="ltr">`qiraat`</span> | الراوي هو من نسبت إليه الرواية عن إمام القراءة. |
| [`recitation`](/ar/docs/terms/dictionary/recitation#recitation) | Recitation | تسجيل التلاوة | <span dir="ltr">`entity`</span> | <span dir="ltr">`recitation`</span> | تسجيل التلاوة هو تسجيل منشور لتلاوة القرآن، منسوب إلى قارئ ورواية ونمط أداء. |
| [`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace) | Recitation Pace | مراتب القراءة | <span dir="ltr">`classification`</span> | <span dir="ltr">`recitation_pace`</span> | مراتب القراءة هي تصنيف لسرعة أداء القراءة مع المحافظة على أحكامها. |
| [`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style) | Recitation Style | نمط الأداء | <span dir="ltr">`classification`</span> | <span dir="ltr">`recitation_style`</span> | نمط الأداء هو تصنيف للتسجيلات والتلاوات بحسب طريقة أدائها، وهي مرتل أو مجود أو معلم، وهو مستقل عن القراءة والرواية. |
| [`reciter`](/ar/docs/terms/dictionary/recitation#reciter) | Reciter | القارئ | <span dir="ltr">`role`</span> | <span dir="ltr">`recitation`</span> | القارئ هو الشخص الذي يؤدي تلاوة القرآن. |
| [`rectangular_zero`](/ar/docs/terms/dictionary/dabt#rectangular_zero) | Rectangular Zero | الصفر المستطيل | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الصفر المستطيل علامة تدل على زيادة الألف في الوصل دون الوقف، ولذلك تنطق عند الوقف عليها. |
| [`reflection`](/ar/docs/terms/dictionary/quranic_sciences#reflection) | Reflection | التدبر | <span dir="ltr">`content`</span> | <span dir="ltr">`quranic_sciences`</span> | التدبر هو التأمل في معاني القرآن وما يقتضيه من عمل، وما يقيده القارئ من وقفة عند آية أو لفظة. |
| [`revelation`](/ar/docs/terms/dictionary/revelation#revelation) | Revelation | النزول | <span dir="ltr">`concept`</span> | <span dir="ltr">`revelation`</span> | النزول هو إنزال القرآن على النبي صلى الله عليه وسلم مفرقًا على مدة الرسالة بحسب الوقائع والحاجة. |
| [`revelation_classification`](/ar/docs/terms/dictionary/revelation#revelation_classification) | Revelation Classification | تصنيف النزول | <span dir="ltr">`classification`</span> | <span dir="ltr">`revelation`</span> | تصنيف النزول هو تصنيف للنص القرآني بحسب وقوع نزوله قبل الهجرة أو بعدها وفق الاصطلاح المعتمد. |
| [`revelation_order`](/ar/docs/terms/dictionary/revelation#revelation_order) | Revelation Order | ترتيب النزول | <span dir="ltr">`property`</span> | <span dir="ltr">`revelation`</span> | ترتيب النزول هو ترتيب السور أو الآيات بحسب زمن نزولها، وقد يختلف بحسب المصدر المعتمد. |
| [`riwayah`](/ar/docs/terms/dictionary/qiraat#riwayah) | Riwayah | الرواية | <span dir="ltr">`concept`</span> | <span dir="ltr">`qiraat`</span> | الرواية هي ما ينسب إلى راو عن إمام القراءة، مثل رواية حفص عن عاصم. |
| [`root`](/ar/docs/terms/dictionary/linguistics#root) | Root | الجذر | <span dir="ltr">`unit`</span> | <span dir="ltr">`linguistics`</span> | الجذر هو الأصل الصرفي الذي ترد إليه الكلمة لبيان اشتقاقها وصلتها بالكلمات الأخرى. |
| [`rounded_zero`](/ar/docs/terms/dictionary/dabt#rounded_zero) | Rounded Zero | الصفر المستدير | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الصفر المستدير علامة تدل على زيادة الحرف في الرسم، ولذلك لا ينطق في الوصل ولا في الوقف. |
| [`rubu_al_hizb`](/ar/docs/terms/dictionary/divisions#rubu_al_hizb) | Rubu al-Hizb | ربع الحزب | <span dir="ltr">`entity`</span> | <span dir="ltr">`divisions`</span> | ربع الحزب هو الجزء الرابع من الحزب في التقسيم المشهور للمصحف. |
| [`ruku`](/ar/docs/terms/dictionary/divisions#ruku) | Ruku | الركوع | <span dir="ltr">`entity`</span> | <span dir="ltr">`divisions`</span> | الركوع هو قسم اصطلاحي من القرآن يستخدم لتنظيم القراءة ويظهر في بعض المصاحف. |
| [`saba_tiwal`](/ar/docs/terms/dictionary/surah_classification#saba_tiwal) | Saba Tiwal | السبع الطوال | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`surah_classification`</span> | السبع الطوال هي مجموعة من أطول سور القرآن في أوله، مع خلاف معروف في تعيين السورة السابعة. |
| [`sajdah`](/ar/docs/terms/dictionary/structure#sajdah) | Sajdah | السجدة | <span dir="ltr">`concept`</span> | <span dir="ltr">`structure`</span> | السجدة موضع من مواضع سجود التلاوة في القرآن، ينتهي بآية بعينها، يسجد عنده القارئ والسامع. |
| [`sajdah_line`](/ar/docs/terms/dictionary/dabt#sajdah_line) | Sajdah Line | خط السجدة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | خط السجدة خط فوق الكلمة يدل على أنها الكلمة الموجبة للسجدة. |
| [`sajdah_mark`](/ar/docs/terms/dictionary/dabt#sajdah_mark) | Sajdah Mark | علامة السجدة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | علامة السجدة علامة تدل على موضع السجود. |
| [`saktah`](/ar/docs/terms/dictionary/tajwid#saktah) | Saktah | السكتة | <span dir="ltr">`concept`</span> | <span dir="ltr">`tajwid`</span> | السكتة هي قطع الصوت زمنًا يسيرًا من غير تنفس ثم متابعة القراءة. |
| [`saktah_mark`](/ar/docs/terms/dictionary/dabt#saktah_mark) | Saktah Mark | علامة السكتة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | علامة السكتة علامة تدل على السكت، وهو وقفة يسيرة من غير تنفس ثم الوصل بما بعده. |
| [`seen_al_qiraah`](/ar/docs/terms/dictionary/dabt#seen_al_qiraah) | Seen al-Qiraah | سين القراءة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | سين القراءة سين صغيرة فوق الصاد تدل على القراءة بالسين، وتحتها تدل على القراءة بالصاد. |
| [`shaddah`](/ar/docs/terms/dictionary/dabt#shaddah) | Shaddah | الشدة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الشدة علامة تدل على تشديد الحرف، أي إدغام الأول الساكن في الثاني المتحرك حتى ينطقا حرفًا واحدًا مشددًا. |
| [`small_meem`](/ar/docs/terms/dictionary/dabt#small_meem) | Small Meem | الميم الصغيرة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الميم الصغيرة علامة تدل على قلب النون الساكنة أو التنوين ميمًا عند الباء. |
| [`small_noon`](/ar/docs/terms/dictionary/dabt#small_noon) | Small Noon | النون الصغيرة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | النون الصغيرة علامة تدل على نون محذوفة من الرسم واجبة النطق، وترد في موضع واحد (21:88). |
| [`small_waw`](/ar/docs/terms/dictionary/dabt#small_waw) | Small Waw | الواو الصغيرة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الواو الصغيرة علامة تدل على صلة هاء الضمير المضمومة بواو لفظية في حال الوصل. |
| [`small_yaa`](/ar/docs/terms/dictionary/dabt#small_yaa) | Small Yaa | الياء الصغيرة | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الياء الصغيرة علامة تدل على صلة هاء الضمير المكسورة بياء لفظية في حال الوصل. |
| [`spoken_translation`](/ar/docs/terms/dictionary/translation#spoken_translation) | Spoken Translation | الترجمة المنطوقة | <span dir="ltr">`content`</span> | <span dir="ltr">`translation`</span> | الترجمة المنطوقة هي نقل معاني القرآن إلى لغة أخرى في مادة صوتية أو منطوقة. |
| [`stem`](/ar/docs/terms/dictionary/linguistics#stem) | Stem | الجذع | <span dir="ltr">`unit`</span> | <span dir="ltr">`linguistics`</span> | الجذع هو ما يبقى من الكلمة بعد نزع السوابق واللواحق، وتلحق به الزوائد الصرفية. |
| [`sukun`](/ar/docs/terms/dictionary/dabt#sukun) | Sukun | السكون | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | السكون علامة تدل على سكون الحرف وإظهاره. |
| [`surah`](/ar/docs/terms/dictionary/structure#surah) | Surah | السورة | <span dir="ltr">`entity`</span> | <span dir="ltr">`structure`</span> | السورة هي وحدة رئيسية من بنية القرآن، تتكون من آيات مرتبة ولها اسم وموضع معروف في ترتيب المصحف. |
| [`surah_group`](/ar/docs/terms/dictionary/surah_classification#surah_group) | Surah Group | تصنيف السور | <span dir="ltr">`classification`</span> | <span dir="ltr">`surah_classification`</span> | تصنيف السور هو تصنيف يجمع سورًا وفق تقسيمات اصطلاحية موروثة تعتمد الطول أو موضع السورة ضمن مجموعات السور. |
| [`surah_name_reason`](/ar/docs/terms/dictionary/quranic_sciences#surah_name_reason) | Surah Name Reason | سبب التسمية | <span dir="ltr">`content`</span> | <span dir="ltr">`quranic_sciences`</span> | سبب التسمية هو بيان العلة التي سميت بها السورة اسمها، وما ورد في ذلك من أثر أو وجه لغوي. |
| [`surah_names`](/ar/docs/terms/dictionary/quranic_sciences#surah_names) | Surah Names | أسماء السورة | <span dir="ltr">`content`</span> | <span dir="ltr">`quranic_sciences`</span> | أسماء السورة هي ما سميت به السورة من أسماء. |
| [`surah_objectives`](/ar/docs/terms/dictionary/quranic_sciences#surah_objectives) | Surah Objectives | مقاصد السورة | <span dir="ltr">`content`</span> | <span dir="ltr">`quranic_sciences`</span> | مقاصد السورة هي المعاني الكلية التي تدور عليها السورة ويجمع بينها موضوعها، وهي الغرض الواحد الذي تنتظم به آياتها. |
| [`tadwir`](/ar/docs/terms/dictionary/recitation_pace#tadwir) | Tadwir | التدوير | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`recitation_pace`</span> | التدوير هو القراءة بسرعة متوسطة بين التحقيق والحدر مع المحافظة على الأحكام. |
| [`tafkhim`](/ar/docs/terms/dictionary/tajwid#tafkhim) | Tafkhim | التفخيم | <span dir="ltr">`concept`</span> | <span dir="ltr">`tajwid`</span> | التفخيم هو سمن يدخل على صوت الحرف فيمتلئ الفم بصداه. |
| [`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir) | Tafsir | التفسير | <span dir="ltr">`content`</span> | <span dir="ltr">`tafsir`</span> | التفسير هو بيان معاني القرآن وشرح ألفاظه وما يرشد إليه من أحكام وهدايات بحسب أصول التفسير. |
| [`tafsir_al_ray`](/ar/docs/terms/dictionary/tafsir#tafsir_al_ray) | Tafsir al-Ray | تفسير الرأي | <span dir="ltr">`content`</span> | <span dir="ltr">`tafsir`</span> | تفسير الرأي هو بيان معاني القرآن بالاجتهاد والنظر بعد معرفة كلام العرب وأساليبه وأصول التفسير، سواء كان الاجتهاد محمودًا أو مذمومًا. |
| [`tafsir_mathur`](/ar/docs/terms/dictionary/tafsir#tafsir_mathur) | Tafsir Mathur | التفسير المأثور | <span dir="ltr">`content`</span> | <span dir="ltr">`tafsir`</span> | التفسير المأثور هو ما فسر به القرآن من القرآن نفسه أو من السنة أو من قول الصحابة والتابعين، منقولًا بإسناده. |
| [`tahqiq`](/ar/docs/terms/dictionary/recitation_pace#tahqiq) | Tahqiq | التحقيق | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`recitation_pace`</span> | التحقيق هو القراءة ببطء وتؤدة مع استيفاء الحروف وأحكامها، ويستخدم كثيرًا في مقام التعليم. |
| [`tajwid`](/ar/docs/terms/dictionary/tajwid#tajwid) | Tajweed | التجويد | <span dir="ltr">`concept`</span> | <span dir="ltr">`tajwid`</span> | التجويد هو علم أداء حروف القرآن من مخارجها وإعطائها حقوقها ومستحقاتها من الصفات والأحكام. |
| [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling) | Tajwid Ruling | حكم التجويد | <span dir="ltr">`classification`</span> | <span dir="ltr">`tajwid`</span> | حكم التجويد هو ما تقرره قواعد التجويد في أداء الحرف في موضع بعينه من النص، عند حرف يليه أو عند سكون أو همز، مثل الإظهار والإدغام والإقلاب والإخفاء والمد والقلقلة والتفخيم والترقيق. |
| [`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin) | Tanwin | التنوين | <span dir="ltr">`classification`</span> | <span dir="ltr">`dabt`</span> | التنوين هو نون ساكنة زائدة تلحق آخر الاسم، وترسم بتكرار صورة الحركة. |
| [`tanwin_al_damm`](/ar/docs/terms/dictionary/dabt#tanwin_al_damm) | Tanwin al-Damm | تنوين الضم | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | تنوين الضم علامة تدل على التنوين المرفوع. |
| [`tanwin_al_fath`](/ar/docs/terms/dictionary/dabt#tanwin_al_fath) | Tanwin al-Fath | تنوين الفتح | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | تنوين الفتح علامة تدل على التنوين المنصوب. |
| [`tanwin_al_kasr`](/ar/docs/terms/dictionary/dabt#tanwin_al_kasr) | Tanwin al-Kasr | تنوين الكسر | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | تنوين الكسر علامة تدل على التنوين المخفوض. |
| [`tariq`](/ar/docs/terms/dictionary/qiraat#tariq) | Tariq | الطريق | <span dir="ltr">`concept`</span> | <span dir="ltr">`qiraat`</span> | الطريق هو وجه النقل المأخوذ عن الراوي بواسطة من دونه في سلسلة نقل القراءة. |
| [`tarqiq`](/ar/docs/terms/dictionary/tajwid#tarqiq) | Tarqiq | الترقيق | <span dir="ltr">`concept`</span> | <span dir="ltr">`tajwid`</span> | الترقيق هو نحول يدخل على صوت الحرف فلا يمتلئ الفم بصداه. |
| [`tartil`](/ar/docs/terms/dictionary/recitation#tartil) | Tartil | الترتيل | <span dir="ltr">`concept`</span> | <span dir="ltr">`recitation`</span> | الترتيل هو قراءة القرآن بتؤدة وبيان للحروف والكلمات ومراعاة الوقف والمعنى. |
| [`tashil`](/ar/docs/terms/dictionary/dabt#tashil) | Tashil | التسهيل | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | علامة التسهيل تدل على تسهيل الهمزة بين بين، أي بينها وبين الألف. |
| [`tashkil`](/ar/docs/terms/dictionary/dabt#tashkil) | Tashkil | التشكيل | <span dir="ltr">`concept`</span> | <span dir="ltr">`dabt`</span> | التشكيل هو طبقة علامات الضبط الملحقة بحروف النص، من الحركات والتنوين والشدة والسكون وما يتبعها، منظورًا إليها جملة واحدة. |
| [`three_dots`](/ar/docs/terms/dictionary/dabt#three_dots) | Three Dots | الثلاث نقط | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | الثلاث نقط ثلاث نقاط فوق الحرف تميزه عن الحرف الذي يشاركه في الرسم، مثل الثاء والشين. |
| [`thumn`](/ar/docs/terms/dictionary/divisions#thumn) | Thumn | الثمن | <span dir="ltr">`entity`</span> | <span dir="ltr">`divisions`</span> | الثمن هو الجزء الثامن من الحزب، وهو تقسيم مستخدم في بعض المصاحف والمدارس. |
| [`tilawah`](/ar/docs/terms/dictionary/recitation#tilawah) | Tilawah | التلاوة | <span dir="ltr">`concept`</span> | <span dir="ltr">`recitation`</span> | التلاوة هي قراءة القرآن بلفظه أداء بالصوت على ما تلقاه القارئ، سواء كانت في صلاة أو درس أو تسجيل. |
| [`token`](/ar/docs/terms/dictionary/text#token) | Token |  | <span dir="ltr">`unit`</span> | <span dir="ltr">`text`</span> | `token` هو وحدة ينتجها تقسيم النص وفق منهج معلن. |
| [`translation`](/ar/docs/terms/dictionary/translation#translation) | Translation | الترجمة | <span dir="ltr">`content`</span> | <span dir="ltr">`translation`</span> | الترجمة هي نقل معاني القرآن إلى لغة أخرى، وهي ليست قرآنًا بلفظه. |
| [`translator`](/ar/docs/terms/dictionary/translation#translator) | Translator | المترجم | <span dir="ltr">`role`</span> | <span dir="ltr">`translation`</span> | المترجم هو من نسبت إليه ترجمة لمعاني القرآن إلى لغة أخرى، سواء كان فردًا أو هيئة. |
| [`transliteration`](/ar/docs/terms/dictionary/translation#transliteration) | Transliteration | النقل الحرفي | <span dir="ltr">`content`</span> | <span dir="ltr">`translation`</span> | النقل الحرفي هو تمثيل حروف نظام كتابي بحروف نظام آخر وفق قواعد محددة، دون ترجمة المعنى. |
| [`two_dots`](/ar/docs/terms/dictionary/dabt#two_dots) | Two Dots | النقطتان | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | النقطتان نقطتان فوق الحرف أو تحته تميزانه عن الحرف الذي يشاركه في الرسم، مثل التاء والياء والقاف. |
| [`verb`](/ar/docs/terms/dictionary/linguistics#verb) | Verb | الفعل | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`linguistics`</span> | الفعل هو ما دل على معنى في نفسه مقترن بزمان، ويتصرف إلى الماضي والمضارع والأمر. |
| [`wajh`](/ar/docs/terms/dictionary/qiraat#wajh) | Wajh | الوجه | <span dir="ltr">`concept`</span> | <span dir="ltr">`qiraat`</span> | الوجه هو كيفية من كيفيات الأداء يجوز الأخذ بأي منها في الرواية الواحدة أو الطريق الواحد، مثل أوجه المد العارض للسكون. |
| [`waqf`](/ar/docs/terms/dictionary/waqf#waqf) | Waqf | الوقف | <span dir="ltr">`concept`</span> | <span dir="ltr">`waqf`</span> | الوقف هو قطع القراءة عند موضع من النص وفق أحكام الوقف والابتداء. |
| [`waqf_al_muanaqah`](/ar/docs/terms/dictionary/dabt#waqf_al_muanaqah) | Waqf al-Muanaqah | وقف المعانقة | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`dabt`</span> | وقف المعانقة علامة تدل على موضعين للوقف، إذا وقف القارئ على أحدهما لم يصح الوقف على الآخر. |
| [`waqf_hasan`](/ar/docs/terms/dictionary/waqf#waqf_hasan) | Waqf Hasan | الوقف الحسن | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`waqf`</span> | الوقف الحسن هو الوقف على ما أفاد معنًى وتعلق بما بعده لفظًا ومعنًى. |
| [`waqf_jaiz_mustawi_al_tarafayn`](/ar/docs/terms/dictionary/dabt#waqf_jaiz_mustawi_al_tarafayn) | Waqf Jaiz Mustawi al-Tarafayn | الوقف الجائز مستوي الطرفين | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`dabt`</span> | الوقف الجائز علامة تدل على أن الوقف جائز جوازًا مستوي الطرفين، فالوقف والوصل فيه سواء. |
| [`waqf_jaiz_waqf_awla`](/ar/docs/terms/dictionary/dabt#waqf_jaiz_waqf_awla) | Waqf Jaiz Waqf Awla | الوقف الجائز مع كون الوقف أولى | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`dabt`</span> | علامة الوقف أولى تدل على أن الوقف جائز والوقف أولى. |
| [`waqf_jaiz_wasl_awla`](/ar/docs/terms/dictionary/dabt#waqf_jaiz_wasl_awla) | Waqf Jaiz Wasl Awla | الوقف الجائز مع كون الوصل أولى | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`dabt`</span> | علامة الوصل أولى تدل على أن الوقف جائز والوصل أولى. |
| [`waqf_kafi`](/ar/docs/terms/dictionary/waqf#waqf_kafi) | Waqf Kafi | الوقف الكافي | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`waqf`</span> | الوقف الكافي هو الوقف على ما تم معناه وتعلق بما بعده في المعنى دون اللفظ. |
| [`waqf_lazim`](/ar/docs/terms/dictionary/dabt#waqf_lazim) | Waqf Lazim | الوقف اللازم | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`dabt`</span> | الوقف اللازم علامة تدل على أن الوقف لازم، لأن وصل ما بعده بما قبله يوهم خلاف المعنى المراد. |
| [`waqf_mamnu`](/ar/docs/terms/dictionary/dabt#waqf_mamnu) | Waqf Mamnu | الوقف الممنوع | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`dabt`</span> | الوقف الممنوع علامة تدل على أن الوقف ممنوع، لأن الوقف على الموضع يفسد المعنى أو يقطع ما لا ينفصل عما بعده. |
| [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark) | Waqf Mark | علامة الوقف | <span dir="ltr">`mark`</span> | <span dir="ltr">`dabt`</span> | علامة الوقف علامة في المصحف ترشد القارئ إلى حكم الوقف أو الوصل في موضع معين. |
| [`waqf_mark_type`](/ar/docs/terms/dictionary/waqf#waqf_mark_type) | Waqf Mark Type | نوع علامة الوقف | <span dir="ltr">`classification`</span> | <span dir="ltr">`waqf`</span> | نوع علامة الوقف هو تصنيف لما ترشد إليه علامة الوقف المرسومة في المصحف من لزوم أو منع أو جواز. |
| [`waqf_qabih`](/ar/docs/terms/dictionary/waqf#waqf_qabih) | Waqf Qabih | الوقف القبيح | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`waqf`</span> | الوقف القبيح هو الوقف على ما لم يفد معنًى، أو أفاد معنًى غير مراد. |
| [`waqf_ruling`](/ar/docs/terms/dictionary/waqf#waqf_ruling) | Waqf Ruling | حكم الوقف | <span dir="ltr">`classification`</span> | <span dir="ltr">`waqf`</span> | حكم الوقف هو تصنيف الموضع نفسه من جهة تمام المعنى عنده، وليس من جهة العلامة المرسومة عليه. |
| [`waqf_tamm`](/ar/docs/terms/dictionary/waqf#waqf_tamm) | Waqf Tamm | الوقف التام | <span dir="ltr">`classification_value`</span> | <span dir="ltr">`waqf`</span> | الوقف التام هو الوقف على ما تم معناه ولم يتعلق بما بعده لفظًا ولا معنًى. |
| [`word`](/ar/docs/terms/dictionary/text#word) | Word | الكلمة | <span dir="ltr">`unit`</span> | <span dir="ltr">`text`</span> | الكلمة هي وحدة من النص يعرفها القارئ كلمة واحدة، ولا يتغير عدها بتغير منهج تقسيم النص. |
| [`word_by_word_translation`](/ar/docs/terms/dictionary/translation#word_by_word_translation) | Word by Word Translation |  | <span dir="ltr">`content`</span> | <span dir="ltr">`translation`</span> | الترجمة كلمة بكلمة هي ترجمة تعطي كل كلمة من كلمات الآية معناها في لغة أخرى على حدة، بترتيب كلمات الأصل. |
| [`word_key`](/ar/docs/terms/dictionary/structure#word_key) | Word Key |  | <span dir="ltr">`property`</span> | <span dir="ltr">`structure`</span> | مفتاح الكلمة هو معرف نصي للكلمة يضيف إلى مفتاح الآية موضع الكلمة فيها، على صورة `2:255:5`. |
| [`word_meanings`](/ar/docs/terms/dictionary/quranic_sciences#word_meanings) | Word Meanings | غريب القرآن | <span dir="ltr">`content`</span> | <span dir="ltr">`quranic_sciences`</span> | غريب القرآن هو بيان معاني الألفاظ القرآنية التي خفي معناها على أكثر القراء، لقلة استعمالها أو لتغير دلالتها. |
| [`word_timing`](/ar/docs/terms/dictionary/recitation#word_timing) | Word Timing |  | <span dir="ltr">`concept`</span> | <span dir="ltr">`recitation`</span> | توقيت الكلمة هو مدى زمني في تسجيل تلاوة، محدد ببداية ونهاية، يقابل كلمة بعينها من آية. |

## حسب الموضوع [#section-18]

- **الأساس** — `core`: <span dir="ltr">[`mushaf`](/ar/docs/terms/dictionary/core#mushaf)، [`mushaf_edition`](/ar/docs/terms/dictionary/core#mushaf_edition)، [`quran`](/ar/docs/terms/dictionary/core#quran)</span>
- **البنية** — `structure`: <span dir="ltr">[`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`ayah_ending`](/ar/docs/terms/dictionary/structure#ayah_ending)، [`ayah_key`](/ar/docs/terms/dictionary/structure#ayah_key)، [`basmalah`](/ar/docs/terms/dictionary/structure#basmalah)، [`muqatta_letter`](/ar/docs/terms/dictionary/structure#muqatta_letter)، [`sajdah`](/ar/docs/terms/dictionary/structure#sajdah)، [`surah`](/ar/docs/terms/dictionary/structure#surah)، [`word_key`](/ar/docs/terms/dictionary/structure#word_key)</span>
- **النص** — `text`: <span dir="ltr">[`character`](/ar/docs/terms/dictionary/text#character)، [`codepoint`](/ar/docs/terms/dictionary/text#codepoint)، [`glyph`](/ar/docs/terms/dictionary/text#glyph)، [`grapheme`](/ar/docs/terms/dictionary/text#grapheme)، [`letter`](/ar/docs/terms/dictionary/text#letter)، [`token`](/ar/docs/terms/dictionary/text#token)، [`word`](/ar/docs/terms/dictionary/text#word)</span>
- **أقسام القرآن** — `divisions`: <span dir="ltr">[`hizb`](/ar/docs/terms/dictionary/divisions#hizb)، [`juz`](/ar/docs/terms/dictionary/divisions#juz)، [`manzil`](/ar/docs/terms/dictionary/divisions#manzil)، [`rubu_al_hizb`](/ar/docs/terms/dictionary/divisions#rubu_al_hizb)، [`ruku`](/ar/docs/terms/dictionary/divisions#ruku)، [`thumn`](/ar/docs/terms/dictionary/divisions#thumn)</span>
- **تصنيف السور** — `surah_classification`: <span dir="ltr">[`mathani`](/ar/docs/terms/dictionary/surah_classification#mathani)، [`miun`](/ar/docs/terms/dictionary/surah_classification#miun)، [`mufassal`](/ar/docs/terms/dictionary/surah_classification#mufassal)، [`saba_tiwal`](/ar/docs/terms/dictionary/surah_classification#saba_tiwal)، [`surah_group`](/ar/docs/terms/dictionary/surah_classification#surah_group)</span>
- **المصحف والتخطيط** — `mushaf`: <span dir="ltr">[`ayah_fragment`](/ar/docs/terms/dictionary/mushaf#ayah_fragment)، [`font`](/ar/docs/terms/dictionary/mushaf#font)، [`layout`](/ar/docs/terms/dictionary/mushaf#layout)، [`line`](/ar/docs/terms/dictionary/mushaf#line)، [`page`](/ar/docs/terms/dictionary/mushaf#page)، [`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)، [`rasm_imlai`](/ar/docs/terms/dictionary/mushaf#rasm_imlai)، [`rasm_uthmani`](/ar/docs/terms/dictionary/mushaf#rasm_uthmani)</span>
- **الضبط وعلامات المصحف** — `dabt`: <span dir="ltr">[`ayah_mark`](/ar/docs/terms/dictionary/dabt#ayah_mark)، [`dagger_alif`](/ar/docs/terms/dictionary/dabt#dagger_alif)، [`dammah`](/ar/docs/terms/dictionary/dabt#dammah)، [`division_mark`](/ar/docs/terms/dictionary/dabt#division_mark)، [`dot`](/ar/docs/terms/dictionary/dabt#dot)، [`fathah`](/ar/docs/terms/dictionary/dabt#fathah)، [`hamzah`](/ar/docs/terms/dictionary/dabt#hamzah)، [`hamzat_al_wasl`](/ar/docs/terms/dictionary/dabt#hamzat_al_wasl)، [`harakah`](/ar/docs/terms/dictionary/dabt#harakah)، [`ijam`](/ar/docs/terms/dictionary/dabt#ijam)، [`imalah`](/ar/docs/terms/dictionary/dabt#imalah)، [`ishmam`](/ar/docs/terms/dictionary/dabt#ishmam)، [`kasrah`](/ar/docs/terms/dictionary/dabt#kasrah)، [`maddah`](/ar/docs/terms/dictionary/dabt#maddah)، [`mushaf_mark`](/ar/docs/terms/dictionary/dabt#mushaf_mark)، [`orthographic_mark`](/ar/docs/terms/dictionary/dabt#orthographic_mark)، [`qiraah_mark`](/ar/docs/terms/dictionary/dabt#qiraah_mark)، [`rectangular_zero`](/ar/docs/terms/dictionary/dabt#rectangular_zero)، [`rounded_zero`](/ar/docs/terms/dictionary/dabt#rounded_zero)، [`sajdah_line`](/ar/docs/terms/dictionary/dabt#sajdah_line)، [`sajdah_mark`](/ar/docs/terms/dictionary/dabt#sajdah_mark)، [`saktah_mark`](/ar/docs/terms/dictionary/dabt#saktah_mark)، [`seen_al_qiraah`](/ar/docs/terms/dictionary/dabt#seen_al_qiraah)، [`shaddah`](/ar/docs/terms/dictionary/dabt#shaddah)، [`small_meem`](/ar/docs/terms/dictionary/dabt#small_meem)، [`small_noon`](/ar/docs/terms/dictionary/dabt#small_noon)، [`small_waw`](/ar/docs/terms/dictionary/dabt#small_waw)، [`small_yaa`](/ar/docs/terms/dictionary/dabt#small_yaa)، [`sukun`](/ar/docs/terms/dictionary/dabt#sukun)، [`tanwin`](/ar/docs/terms/dictionary/dabt#tanwin)، [`tanwin_al_damm`](/ar/docs/terms/dictionary/dabt#tanwin_al_damm)، [`tanwin_al_fath`](/ar/docs/terms/dictionary/dabt#tanwin_al_fath)، [`tanwin_al_kasr`](/ar/docs/terms/dictionary/dabt#tanwin_al_kasr)، [`tashil`](/ar/docs/terms/dictionary/dabt#tashil)، [`tashkil`](/ar/docs/terms/dictionary/dabt#tashkil)، [`three_dots`](/ar/docs/terms/dictionary/dabt#three_dots)، [`two_dots`](/ar/docs/terms/dictionary/dabt#two_dots)، [`waqf_al_muanaqah`](/ar/docs/terms/dictionary/dabt#waqf_al_muanaqah)، [`waqf_jaiz_mustawi_al_tarafayn`](/ar/docs/terms/dictionary/dabt#waqf_jaiz_mustawi_al_tarafayn)، [`waqf_jaiz_waqf_awla`](/ar/docs/terms/dictionary/dabt#waqf_jaiz_waqf_awla)، [`waqf_jaiz_wasl_awla`](/ar/docs/terms/dictionary/dabt#waqf_jaiz_wasl_awla)، [`waqf_lazim`](/ar/docs/terms/dictionary/dabt#waqf_lazim)، [`waqf_mamnu`](/ar/docs/terms/dictionary/dabt#waqf_mamnu)، [`waqf_mark`](/ar/docs/terms/dictionary/dabt#waqf_mark)</span>
- **عد الآي** — `ayah_numbering`: <span dir="ltr">[`ayah_count`](/ar/docs/terms/dictionary/ayah_numbering#ayah_count)، [`ayah_numbering_basri`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_basri)، [`ayah_numbering_dimashqi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_dimashqi)، [`ayah_numbering_kufi`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_kufi)، [`ayah_numbering_madani_first`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_first)، [`ayah_numbering_madani_last`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_madani_last)، [`ayah_numbering_makki`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_makki)، [`ayah_numbering_system`](/ar/docs/terms/dictionary/ayah_numbering#ayah_numbering_system)، [`equivalent_ayah`](/ar/docs/terms/dictionary/ayah_numbering#equivalent_ayah)</span>
- **النزول** — `revelation`: <span dir="ltr">[`asbab_al_nuzul`](/ar/docs/terms/dictionary/revelation#asbab_al_nuzul)، [`disputed`](/ar/docs/terms/dictionary/revelation#disputed)، [`madani`](/ar/docs/terms/dictionary/revelation#madani)، [`makki`](/ar/docs/terms/dictionary/revelation#makki)، [`revelation`](/ar/docs/terms/dictionary/revelation#revelation)، [`revelation_classification`](/ar/docs/terms/dictionary/revelation#revelation_classification)، [`revelation_order`](/ar/docs/terms/dictionary/revelation#revelation_order)</span>
- **القراءات** — `qiraat`: <span dir="ltr">[`muqri`](/ar/docs/terms/dictionary/qiraat#muqri)، [`qiraah`](/ar/docs/terms/dictionary/qiraat#qiraah)، [`rawi`](/ar/docs/terms/dictionary/qiraat#rawi)، [`riwayah`](/ar/docs/terms/dictionary/qiraat#riwayah)، [`tariq`](/ar/docs/terms/dictionary/qiraat#tariq)، [`wajh`](/ar/docs/terms/dictionary/qiraat#wajh)</span>
- **التلاوة** — `recitation`: <span dir="ltr">[`ayah_timing`](/ar/docs/terms/dictionary/recitation#ayah_timing)، [`istiadhah`](/ar/docs/terms/dictionary/recitation#istiadhah)، [`khatmah`](/ar/docs/terms/dictionary/recitation#khatmah)، [`recitation`](/ar/docs/terms/dictionary/recitation#recitation)، [`reciter`](/ar/docs/terms/dictionary/recitation#reciter)، [`tartil`](/ar/docs/terms/dictionary/recitation#tartil)، [`tilawah`](/ar/docs/terms/dictionary/recitation#tilawah)، [`word_timing`](/ar/docs/terms/dictionary/recitation#word_timing)</span>
- **مراتب القراءة** — `recitation_pace`: <span dir="ltr">[`hadr`](/ar/docs/terms/dictionary/recitation_pace#hadr)، [`recitation_pace`](/ar/docs/terms/dictionary/recitation_pace#recitation_pace)، [`tadwir`](/ar/docs/terms/dictionary/recitation_pace#tadwir)، [`tahqiq`](/ar/docs/terms/dictionary/recitation_pace#tahqiq)</span>
- **أنماط الأداء** — `recitation_style`: <span dir="ltr">[`instructional_ayah_repetition`](/ar/docs/terms/dictionary/recitation_style#instructional_ayah_repetition)، [`muallim`](/ar/docs/terms/dictionary/recitation_style#muallim)، [`mujawwad`](/ar/docs/terms/dictionary/recitation_style#mujawwad)، [`murattal`](/ar/docs/terms/dictionary/recitation_style#murattal)، [`recitation_style`](/ar/docs/terms/dictionary/recitation_style#recitation_style)</span>
- **التجويد** — `tajwid`: <span dir="ltr">[`ghunnah`](/ar/docs/terms/dictionary/tajwid#ghunnah)، [`idgham`](/ar/docs/terms/dictionary/tajwid#idgham)، [`ikhfa`](/ar/docs/terms/dictionary/tajwid#ikhfa)، [`iqlab`](/ar/docs/terms/dictionary/tajwid#iqlab)، [`izhar`](/ar/docs/terms/dictionary/tajwid#izhar)، [`letter_relation`](/ar/docs/terms/dictionary/tajwid#letter_relation)، [`madd`](/ar/docs/terms/dictionary/tajwid#madd)، [`madd_al_badal`](/ar/docs/terms/dictionary/tajwid#madd_al_badal)، [`madd_al_iwad`](/ar/docs/terms/dictionary/tajwid#madd_al_iwad)، [`madd_al_lin`](/ar/docs/terms/dictionary/tajwid#madd_al_lin)، [`madd_al_silah`](/ar/docs/terms/dictionary/tajwid#madd_al_silah)، [`madd_arid_li_al_sukun`](/ar/docs/terms/dictionary/tajwid#madd_arid_li_al_sukun)، [`madd_lazim`](/ar/docs/terms/dictionary/tajwid#madd_lazim)، [`madd_munfasil`](/ar/docs/terms/dictionary/tajwid#madd_munfasil)، [`madd_muttasil`](/ar/docs/terms/dictionary/tajwid#madd_muttasil)، [`madd_tabii`](/ar/docs/terms/dictionary/tajwid#madd_tabii)، [`meem_sakinah`](/ar/docs/terms/dictionary/tajwid#meem_sakinah)، [`mutajanisan`](/ar/docs/terms/dictionary/tajwid#mutajanisan)، [`mutamathilan`](/ar/docs/terms/dictionary/tajwid#mutamathilan)، [`noon_sakinah`](/ar/docs/terms/dictionary/tajwid#noon_sakinah)، [`qalqalah`](/ar/docs/terms/dictionary/tajwid#qalqalah)، [`saktah`](/ar/docs/terms/dictionary/tajwid#saktah)، [`tafkhim`](/ar/docs/terms/dictionary/tajwid#tafkhim)، [`tajwid`](/ar/docs/terms/dictionary/tajwid#tajwid)، [`tajwid_ruling`](/ar/docs/terms/dictionary/tajwid#tajwid_ruling)، [`tarqiq`](/ar/docs/terms/dictionary/tajwid#tarqiq)</span>
- **الوقف** — `waqf`: <span dir="ltr">[`waqf`](/ar/docs/terms/dictionary/waqf#waqf)، [`waqf_hasan`](/ar/docs/terms/dictionary/waqf#waqf_hasan)، [`waqf_kafi`](/ar/docs/terms/dictionary/waqf#waqf_kafi)، [`waqf_mark_type`](/ar/docs/terms/dictionary/waqf#waqf_mark_type)، [`waqf_qabih`](/ar/docs/terms/dictionary/waqf#waqf_qabih)، [`waqf_ruling`](/ar/docs/terms/dictionary/waqf#waqf_ruling)، [`waqf_tamm`](/ar/docs/terms/dictionary/waqf#waqf_tamm)</span>
- **اللغة** — `linguistics`: <span dir="ltr">[`irab`](/ar/docs/terms/dictionary/linguistics#irab)، [`lemma`](/ar/docs/terms/dictionary/linguistics#lemma)، [`morpheme`](/ar/docs/terms/dictionary/linguistics#morpheme)، [`morphology`](/ar/docs/terms/dictionary/linguistics#morphology)، [`noun`](/ar/docs/terms/dictionary/linguistics#noun)، [`part_of_speech`](/ar/docs/terms/dictionary/linguistics#part_of_speech)، [`particle`](/ar/docs/terms/dictionary/linguistics#particle)، [`root`](/ar/docs/terms/dictionary/linguistics#root)، [`stem`](/ar/docs/terms/dictionary/linguistics#stem)، [`verb`](/ar/docs/terms/dictionary/linguistics#verb)</span>
- **الترجمة** — `translation`: <span dir="ltr">[`spoken_translation`](/ar/docs/terms/dictionary/translation#spoken_translation)، [`translation`](/ar/docs/terms/dictionary/translation#translation)، [`translator`](/ar/docs/terms/dictionary/translation#translator)، [`transliteration`](/ar/docs/terms/dictionary/translation#transliteration)، [`word_by_word_translation`](/ar/docs/terms/dictionary/translation#word_by_word_translation)</span>
- **التفسير** — `tafsir`: <span dir="ltr">[`mufassir`](/ar/docs/terms/dictionary/tafsir#mufassir)، [`tafsir`](/ar/docs/terms/dictionary/tafsir#tafsir)، [`tafsir_al_ray`](/ar/docs/terms/dictionary/tafsir#tafsir_al_ray)، [`tafsir_mathur`](/ar/docs/terms/dictionary/tafsir#tafsir_mathur)</span>
- **علوم القرآن** — `quranic_sciences`: <span dir="ltr">[`abrogation`](/ar/docs/terms/dictionary/quranic_sciences#abrogation)، [`mutashabihat`](/ar/docs/terms/dictionary/quranic_sciences#mutashabihat)، [`quran_merits`](/ar/docs/terms/dictionary/quranic_sciences#quran_merits)، [`reflection`](/ar/docs/terms/dictionary/quranic_sciences#reflection)، [`surah_name_reason`](/ar/docs/terms/dictionary/quranic_sciences#surah_name_reason)، [`surah_names`](/ar/docs/terms/dictionary/quranic_sciences#surah_names)، [`surah_objectives`](/ar/docs/terms/dictionary/quranic_sciences#surah_objectives)، [`word_meanings`](/ar/docs/terms/dictionary/quranic_sciences#word_meanings)</span>

