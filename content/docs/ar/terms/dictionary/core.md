---
title: "الأساس"
description: "core"
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/ar/reference/dictionary.md"
sourceRevision: "9bf0db1"
---

### المصحف — Mushaf [#mushaf]

<!-- source: standards/terminology/concepts/mushaf.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`mushaf`</span> |
| `plural` | <span dir="ltr">`mushafs`</span> |
| `kind` | <span dir="ltr">`entity`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | المُصْحَف |
| تهجئات أخرى | <span dir="ltr">`mus'haf`، `muṣḥaf`، `moshaf`</span> |
| مقابل إنجليزي | <span dir="ltr">`Quran Codex`</span> |

**التعريف:** المصحف هو الصحف التي جُمع فيها القرآن مكتوبًا ومرتبًا على ترتيبه المعروف.

**الغرض:** نستخدمه عندما تكون خصائص التمثيل المكتوب للقرآن مهمة، مثل الرسم والتخطيط والصفحات والأسطر والعلامات.

- المصحف وعاء مكتوب للقرآن وليس القرآن نفسه، فالمصاحف تختلف في الرسم والصفحات والعلامات والقرآن واحد.

**مرتبط به:** <span dir="ltr">[`quran`](/ar/docs/terms/dictionary/core#quran)، [`mushaf_edition`](/ar/docs/terms/dictionary/core#mushaf_edition)، [`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)، [`layout`](/ar/docs/terms/dictionary/mushaf#layout)، [`page`](/ar/docs/terms/dictionary/mushaf#page)، [`rasm_uthmani`](/ar/docs/terms/dictionary/mushaf#rasm_uthmani)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/119`

### طبعة المصحف — Mushaf Edition [#mushaf_edition]

<!-- source: standards/terminology/concepts/mushaf_edition.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`mushaf_edition`</span> |
| `plural` | <span dir="ltr">`mushaf_editions`</span> |
| `kind` | <span dir="ltr">`entity`</span> |
| جزء من | <span dir="ltr">[`mushaf`](/ar/docs/terms/dictionary/core#mushaf)</span> |
| الأصل | <span dir="ltr">`standard`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | طَبْعَة المُصْحَف |

**التعريف:** طبعة المصحف إصدار منشور محدد من المصحف، له خصائص محددة مثل الناشر والرسم والضبط والتخطيط وغيرها.

**الغرض:** نستخدمها لتمييز الطبعات التي قد تختلف في الصفحات والأسطر والعلامات أو الخصائص الطباعية.

**مرتبط به:** <span dir="ltr">[`mushaf`](/ar/docs/terms/dictionary/core#mushaf)، [`layout`](/ar/docs/terms/dictionary/mushaf#layout)، [`page`](/ar/docs/terms/dictionary/mushaf#page)، [`riwayah`](/ar/docs/terms/dictionary/qiraat#riwayah)، [`font`](/ar/docs/terms/dictionary/mushaf#font)، [`rasm`](/ar/docs/terms/dictionary/mushaf#rasm)، [`ruku`](/ar/docs/terms/dictionary/divisions#ruku)</span>

### القرآن — Quran [#quran]

<!-- source: standards/terminology/concepts/quran.yml -->

| الحقل | القيمة |
| --- | --- |
| `code` | <span dir="ltr">`quran`</span> |
| `kind` | <span dir="ltr">`concept`</span> |
| الأصل | <span dir="ltr">`quranic`</span> |
| المستوى | <span dir="ltr">`core`</span> |
| الإصدار | <span dir="ltr">`v0.1`</span> |
| بالحركات | القُرْآن |
| تهجئات أخرى | <span dir="ltr">`koran`، `qur'an`، `qur’an`، `quraan`، `al_quran`</span> |

**التعريف:** القرآن هو كلام الله المنزل على محمد صلى الله عليه وسلم والمتعبد بتلاوته. ويطلق الاسم على مجموعه وعلى بعضه بحسب السياق.

**الغرض:** نستخدم القرآن لتمثيل المحتوى القرآني نفسه مستقلًا عن مصحف أو تخطيط أو تنسيق أو تمثيل رقمي معين.

- القرآن هو الكلام نفسه، والمصحف هو وعاؤه المكتوب. لذلك ما يخص الصفحات والرسم والعلامات ينسب إلى المصحف وليس إلى القرآن.

**مرتبط به:** <span dir="ltr">[`mushaf`](/ar/docs/terms/dictionary/core#mushaf)، [`surah`](/ar/docs/terms/dictionary/structure#surah)، [`ayah`](/ar/docs/terms/dictionary/structure#ayah)، [`quran_merits`](/ar/docs/terms/dictionary/quranic_sciences#quran_merits)</span>

**المصادر:**

- [مباحث في علوم القرآن](https://files.turath.io/books-v3/11368.json) — `1/15`

