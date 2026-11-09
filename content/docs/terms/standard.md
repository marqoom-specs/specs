---
title: "Quranic vocabulary naming standard"
description: "Rules for naming Quranic concepts, spelling and composing their names, and distinguishing them."
status: "draft"
sourceUrl: "https://github.com/realabdu/quran-ws-docs/blob/9bf0db1bac9a8186bced687950e0ccf04311d3e3/content/en/reference/standard.md"
sourceRevision: "9bf0db1"
---

This standard sets the naming rules for concepts used in Quranic software. First define the concept, its meaning and its boundaries; then choose its name and derive its spelling using these rules. Record the resulting names in the [terminology dictionary](/docs/terms/dictionary).

The standard names concepts that cannot be defined without reference to the Quran or mushaf. Users, subscriptions, files and other general application concepts remain outside its dictionary. The software naming guidance here applies when using its vocabulary.

The provisions of this standard are conformance requirements unless identified as recommendations or permitted options. “Must” indicates a requirement, “should” a recommendation, and “may” permission. Definitions explain meanings; examples illustrate the requirements.

The underlying idea follows `convention over configuration`:

> Once developers know the standard's rules, they can predict concept, relationship and field names and how to use them without consulting the documentation every time.

## Define the concept before naming it [#section-01]

Define the concept first, then choose its name.

Before adopting a term, establish:

- What does it represent?
- What are its boundaries?
- What does it exclude?
- Does it differ from a neighbouring concept?
- Why does software need to model it?

Then choose the most suitable name using the following rules.

## One canonical name per concept [#section-02]

### 001. One code name per concept [#rule-001]

After defining a concept, choose one code name for it according to this standard and record it in the dictionary. Use the same vocabulary wherever the standard applies, as far as possible.

**Examples**

| Concept | Canonical name | Names that do not replace it |
| --- | --- | --- |
| السورة | `surah` | `chapter`, `quran_section` |

## Translation and compound names [#section-04]

### 002. Transliterating specialised terms [#rule-002]

Retain an Arabic term when it denotes a concept specific to the Quran or its sciences, and write it in Latin letters using the spelling rules. Decide from the concept’s meaning and domain, regardless of whether an English equivalent exists.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| سورة | `surah` |
| آية | `ayah` |
| تجويد | `tajwid` |

### 003. Translating general concepts [#rule-003]

Use the established technical English name for a general concept, even in a Quranic application. Having an Arabic word does not make it a specialised Quranic term; if the English equivalent is unclear, review the concept’s definition before choosing its name.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| كلمة | `word` |
| صفحة | `page` |
| حرف | `letter` |

### 004. Forming compound names [#rule-004]

In a compound name, transliterate the complete term originating in the Quran or its sciences, and translate the general words added to it into English. Whether a word is translated or transliterated depends on its meaning within the term.

**Examples**

| Arabic name | Canonical form |
| --- | --- |
| الرَّسْم الإِمْلَائِيّ | `rasm_imlai` |
| النُّون السَّاكِنَة | `noon_sakinah` |
| الوَقْف اللَّازِم | `waqf_lazim` |
| المِيم الصَّغِيرَة | `small_meem` |

The form for «المِيم الصَّغِيرَة» is `small_meem`, not `meem_saghirah`.

### 005. Order of translated adjectives [#rule-005]

An adjective translated into English precedes the noun it describes.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| الأَلِف الخَنْجَرِيَّة | `dagger_alif` |

### 006. Order of translated head nouns [#rule-006]

A translated general head noun goes at the end of the English construction. Reverse the order of successive translated head nouns.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| عَلَامَة الوَقْف | `waqf_mark` |
| نَوْع عَلَامَة الوَقْف | `waqf_mark_type` |

### 007. Technical meaning within a compound [#rule-007]

This rule applies [rule 004](#rule-004); it is not an exception. A word’s technical meaning within the compound determines its spelling: translate «إملائية» with «علامة», but transliterate it with «رسم». Its separate number is retained to make this example easy to reference.

**Examples**

| Arabic name | Canonical form |
| --- | --- |
| العَلَامَة الإِمْلَائِيَّة | `orthographic_mark` |
| الرَّسْم الإِمْلَائِيّ | `rasm_imlai` |

## Canonical code spelling [#section-11]

After choosing an Arabic term, determine how to write it in code. This form is its `Canonical Code Spelling`. Derive it from vocalised Arabic using the following rules so that developers arrive at the same spelling rather than each project choosing its own.

The aim is a simple, stable and predictable spelling rather than a precise scholarly rendering of pronunciation. Use `ASCII` without scholarly transliteration marks. Two Arabic letters may share one Latin equivalent, such as س and ص, both written `s`. Keep the original Arabic separately because the code spelling alone cannot reconstruct it.

The project's shared tools can check spellings. The [contribution instructions](/docs/terms/dictionary#contributing) explain how to check names before proposing a change.

## Spelling: name format [#section-12]

### 008. Code-name format [#rule-008]

Write the canonical code name in lowercase Latin letters, separating words in a compound with underscores: `snake_case`.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| نظام عد الآي | `ayah_numbering_system` |
| الوقف اللازم | `waqf_lazim` |

## Spelling: consonants and vowels [#section-14]

### 009. Characters in code spelling [#rule-009]

Write code names using `ASCII`, without scholarly transliteration marks or an apostrophe representing hamzah or ayn.

**Examples**

| Canonical code spelling | Form not used in code |
| --- | --- |
| `qiraah` | `qirāʾah` |
| `irab` | `i'rab` |

### 010. Source of the derived spelling [#rule-010]

Derive the spelling of an Arabic term from its vocalised name according to this standard.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| سُورَة | `surah` |

### 011. Vocalising the Arabic name [#rule-011]

Use vocalised Arabic when deriving a spelling. Write hamzat al-wasl as an alif carrying its vowel, and do not assume an unrecorded vowel.

**Examples**

| Vocalised Arabic name | Derived form |
| --- | --- |
| اِسْتِعَاذَة | `istiadhah` |

Unvocalised «استعاذة» is insufficient to determine the spelling. Write اِ rather than ٱ.

### 012. Reconstructing the Arabic name [#rule-012]

Do not rely on the code name to reconstruct the original Arabic letters.

**Examples**

| Arabic letter | Latin equivalent |
| --- | --- |
| ص | `s` |
| س | `s` |

Store the original Arabic separately; `s` alone does not identify which of the two letters occurred in the name.

### 013. Consonant correspondences [#rule-013]

Transliterate consonants using the correspondences in the example.

**Examples**

| Arabic letter | Latin equivalent |
| --- | --- |
| ب | `b` |
| ت | `t` |
| ث | `th` |
| ج | `j` |
| ح | `h` |
| خ | `kh` |
| د | `d` |
| ذ | `dh` |
| ر | `r` |
| ز | `z` |
| س | `s` |
| ش | `sh` |
| ص | `s` |
| ض | `d` |
| ط | `t` |
| ظ | `z` |
| غ | `gh` |
| ف | `f` |
| ق | `q` |
| ك | `k` |
| ل | `l` |
| م | `m` |
| ن | `n` |
| ه | `h` |
| و | `w` |
| ي | `y` |
| ة | `h` |

### 014. Short vowels [#rule-014]

Represent short vowels as `a` for fathah, `i` for kasrah and `u` for dammah.

**Examples**

| Vowel | Latin equivalent |
| --- | --- |
| Fathah (َ) | `a` |
| Kasrah (ِ) | `i` |
| Dammah (ُ) | `u` |

### 015. Forms of long alif [#rule-015]

Treat alif maqsura, dagger alif and maddah as long alif.

**Examples**

| Arabic form | Latin equivalent |
| --- | --- |
| ا / ى / dagger alif / maddah | `a` |

### 016. Diphthongs [#rule-016]

Write waw with sukun following a fathah as `aw`, and yaa with sukun following a fathah as `ay`.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| مَوْضِع | `mawdi` |
| أَوْلَى | `awla` |
| طَرَفَيْن | `tarafayn` |

The `mawdi` example demonstrates only the transliteration of «مَوْضِع»; it does not choose the concept’s final name. When the word means a general location, the general-word table records `place`, following [rule 003](#rule-003).

### 017. Doubled consonants [#rule-017]

Double the consonant carrying a shaddah. The nisbah ending is covered in [rule 022](#rule-022).

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| شَدَّة | `shaddah` |
| مُقَطَّع | `muqatta` |

### 018. Tanwin and case endings [#rule-018]

Keep only the short vowel of tanwin, and drop the grammatical case vowel at the end of a word.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| هُدًى | `huda` |

## Spelling: ta marbutah [#section-25]

### 019. Ta marbutah outside idafah [#rule-019]

Write ta marbutah as `h` at the end of a name or before an adjective when the word is not the first member of an idafah construction.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| سُورَة | `surah` |
| القَلْقَلَة الصُّغْرَى | `qalqalah_sughra` |

A following word alone does not turn ta marbutah into `t`: «الصغرى» is an adjective, so write `qalqalah_sughra`, not `qalqalat_sughra`.

### 020. Ta marbutah in idafah [#rule-020]

Write ta marbutah as `t` when its word is the first member of an idafah construction, a noun construction expressing a relationship such as possession.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| هَمْزَة الوَصْل | `hamzat_al_wasl` |
| سَجْدَة التِّلَاوَة | `sajdat_al_tilawah` |

Ta marbutah is pronounced as a taa in idafah, so write `hamzat_al_wasl`, not `hamzah_al_wasl`.

## Spelling: long vowels and letter names [#section-28]

### 021. Long vowels [#rule-021]

Write long vowels with a single Latin letter: `a`, `i` or `u`. Letter names have canonical spellings in [rule 023](#rule-023).

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| تَجْوِيد | `tajwid` |
| تَفْسِير | `tafsir` |
| نُزُول | `nuzul` |

Do not double letters to represent vowel length: write `tajwid` and `nuzul`, not `tajweed` and `nuzool`. Other forms may be used for display or search, as explained in [rule 024](#rule-024).

### 022. The nisbah ending [#rule-022]

Write the doubled yaa of a final nisbah ending, an Arabic adjective ending indicating affiliation, as a single `i`.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| مَكِّيّ | `makki` |
| مَدَنِيّ | `madani` |
| عُثْمَانِيّ | `uthmani` |

This applies specifically to the final nisbah yaa: write `makki`, not `makkiyy` or `makkee`. The doubled kaf remains `kk` under [rule 017](#rule-017).

### 023. Letter-name spellings [#rule-023]

Use the spellings recorded in the [letter-name table](https://github.com/quran-ws/docs/blob/79e3c6bb2b52dd1df81b3e64debfebf9dd5f8ea5/standards/terminology/data/letter_names.tsv#L13-L40), whether the letter name occurs alone or in a compound.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| نُون | `noon` |
| مِيم | `meem` |
| سِين | `seen` |
| جِيم | `jeem` |
| يَاء | `yaa` |
| صَاد | `saad` |
| المِيم الصَّغِيرَة | `small_meem` |
| سِين القِرَاءَة | `seen_al_qiraah` |

Letter names are exceptions to shortened long vowels in [rule 021](#rule-021): write `noon` and `meem`, not `nun` and `mim`. The exception applies to the letter name even within a compound; it does not extend to terms such as `tajwid`.

Two letter names may share a spelling: `taa` for taa and emphatic taa, and `haa` for haa and the pharyngeal haa. These are written names, not unique letter identifiers. When distinguishing them, retain the Arabic letter or its codepoint alongside the name; do not infer the letter from `taa` or `haa` alone. This does not permit two concepts to share one dictionary identifier.

| Letter | Codepoint | Written name |
| --- | --- | --- |
| ت | `U+062A` | `taa` |
| ط | `U+0637` | `taa` |
| ح | `U+062D` | `haa` |
| ه | `U+0647` | `haa` |

### 024. Common spelling and the derived form [#rule-024]

When a common spelling differs from the derived form, use the common spelling for display and search, while keeping the derived form as the code name.

**Examples**

| Name form | Spelling |
| --- | --- |
| Code name | `tajwid` |
| Display name | `Tajweed` |
| Alternative spelling for search | `tajweed` |

In the dictionary, `code` holds the derived form `tajwid`, `display` holds `Tajweed`, and `alternative_spellings` records `tajweed` for search. This keeps code spelling predictable while accommodating common usage.

## Spelling: hamzah, ayn and exceptions [#section-33]

### 025. Hamzah and ayn [#rule-025]

Omit letters or special marks representing hamzah and ayn, retaining their vowels within a word.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| قِرَاءَة | `qiraah` |
| مُعَلِّم | `muallim` |

Omit the mark representing the consonant, not its vowel: write `qiraah`, not `qira'ah`, and retain the fathah in `muallim`. When precise scholarly transliteration is needed, store it in `names.transliteration` for display or scholarly content without changing the code name.

### 026. Final hamzah and ayn after a consonant with sukun [#rule-026]

Repeat the preceding vowel when a word ends in hamzah or ayn preceded by a consonant with sukun.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| رُبْع | `rubu` |
| جَمْع | `jama` |
| قَطْع | `qata` |

Repeating the vowel avoids shortening the ending to forms such as `rub` and `jam`, which are English words with other meanings. If hamzah or ayn follows a long vowel, add nothing: write `رُكُوع` → `ruku` and `مَمْنُوع` → `mamnu`, because the spelling already ends in a vowel.

### 027. Established-spelling exceptions [#rule-027]

When a term has a documented exception in the established-spellings table, use that recorded spelling instead of the derived result. Add a usage-based exception only through an explicit review decision supported by documented measurements showing the derived result is rare within a defined source set, following the [usage-evidence policy](/docs/terms/dictionary#usage-evidence). No automatic percentage grants an exception; the decision must explain why the derived form is unsuitable for this term.

**Examples**

| Arabic name | Canonical established spelling | Derived result replaced |
| --- | --- | --- |
| الجزء | `juz` | `juzu` |

A spelling being more common is not sufficient for an exception; otherwise `tajweed` would replace `tajwid`. The exception needs a term-specific justification within the declared measurement scope. Exceptions and measurements are recorded in the [established-spellings table](https://github.com/quran-ws/docs/blob/79e3c6bb2b52dd1df81b3e64debfebf9dd5f8ea5/standards/terminology/data/established_spellings.tsv).

### 028. The name of surah Aal Imran [#rule-028]

Write the surah name Aal Imran as `aal_imran` to distinguish «آل» from the definite article `al`.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| آل عِمْرَان | `aal_imran` |

### 029. Surahs named after their opening letters [#rule-029]

Use the recorded names for the surahs Taha, Yasin, Saad and Qaaf, which are named after their opening letters.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| طه | `taha` |
| يس | `yasin` |
| ص | `saad` |
| ق | `qaaf` |

## Spelling: articles and connecting words [#section-39]

### 030. The definite article and sun letters [#rule-030]

When the definite article remains inside a compound, write it consistently as `al`; do not change it before sun letters, the consonants that assimilate its pronunciation.

**Examples**

| Arabic name | Code name | Display name |
| --- | --- | --- |
| أسباب النزول | `asbab_al_nuzul` | `Asbab al-Nuzul` |

### 031. The definite article at the beginning [#rule-031]

Omit the definite article at the beginning of a code name.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| الفَتْحَة | `fathah` |
| السُّكُون | `sukun` |

### 032. The definite article on an adjective [#rule-032]

Omit the definite article from an adjective following a definite noun.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| الرَّسْم العُثْمَانِيّ | `rasm_uthmani` |
| الوَقْف اللَّازِم | `waqf_lazim` |

### 033. The definite article in idafah [#rule-033]

Retain `al` on the second member of an idafah construction, determining the idafah or adjective relationship between each adjacent pair of words.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| رُبْع الحِزْب | `rubu_al_hizb` |
| الوَقْف الجَائِز مُسْتَوِي الطَّرَفَيْن | `waqf_jaiz_mustawi_al_tarafayn` |

### 034. The definite article after translating a head noun [#rule-034]

Exclude a translated head noun when deciding whether to retain the definite article in the rest of the name.

**Examples**

| Arabic name | Canonical form | Form that violates the rule |
| --- | --- | --- |
| عَلَامَة الوَقْف اللَّازِم | `waqf_lazim_mark` | `al_waqf_lazim_mark` |

### 035. Attached prepositions [#rule-035]

When بِ or لِ is attached to a word inside a term, represent the preposition as a separate part of the code name and retain the definite article on the noun following it.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| تَفْسِير بِالرَّأْي | `tafsir_bi_al_ray` |
| المَدّ العَارِض لِلسُّكُون | `madd_arid_li_al_sukun` |

### 036. Connecting words [#rule-036]

Omit مَعَ, كَوْن, بِحَيْثُ and جَوَازًا from the code name when they only connect its parts, while keeping the Arabic name complete.

**Examples**

| Arabic name | Code spelling |
| --- | --- |
| الوَقْف الجَائِز مَعَ كَوْنِ الوَصْل أَوْلَى | `waqf_jaiz_wasl_awla` |

## Forms of a name [#section-47]

One concept may have different name forms because each serves a different use: a stable code name, a user-facing name, vocalised Arabic, and names preserved from sources. Different forms do not imply different concepts.

The [dictionary reader guide](/docs/terms/dictionary#reading-entries) explains naming fields and entry structure. The [dictionary contribution section](/docs/terms/dictionary#contributing) explains how to propose a term or change its definition.

### 037. Code-name stability [#rule-037]

Use the canonical code name unchanged; do not change it merely because a more common spelling appears.

**Examples**

| Use | Name |
| --- | --- |
| Stable code name | `tajwid` |
| Common display spelling | `Tajweed` |

`tajwid` remains the code name even when `Tajweed` is common in display.

### 038. Choosing the display name [#rule-038]

Choose the most common English spelling for display and document the evidence in `names.display_evidence` before marking the entry `adopted`. A `draft` may have a display name before its evidence is complete. The display name is what readers see in interfaces and documentation, and it may differ from the code name.

**Examples**

| Name form | Spelling |
| --- | --- |
| Code name | `tajwid` |
| Display name | `Tajweed` |

Document sources, comparison method and results under the [usage-evidence policy](/docs/terms/dictionary#usage-evidence). “Most common” means most common within the declared relevant sources, not proven dominance across every possible use.

### 039. The vocalised Arabic name [#rule-039]

Retain the vocalised Arabic name of a Quranic or scholarly Arabic term for derivation and Arabic display.

**Examples**

| Arabic name | Code name |
| --- | --- |
| الهَمْزَة | `hamzah` |

### 040. Source names and the standard's name [#rule-040]

Distinguish the standard's name from a source's name or shape description. Preserve the source's wording and attribute it. This applies when a mark's name or classification differs between the standard and the science of mushaf marks, a mushaf introduction or another source.

**Examples**

| Name type | Example |
| --- | --- |
| Name from the science of mushaf marks | المِيم — عَلَامَة الوَقْف اللَّازِم |
| Shape description from the source | رَأْس عَيْن |
| Source classification | `imlaiyyah` |
| Standard name | `orthographic_mark` |

### 041. Changing the Arabic name [#rule-041]

Change the vocalised Arabic name only for a linguistic reason that clarifies the concept, never to obtain a preferred code name.

**Examples**

| Case | Arabic name |
| --- | --- |
| Full name in the example | الوَقْف الجَائِز مَعَ كَوْنِ الوَصْل أَوْلَى |
| Proposed shortening solely to shorten the code name | الوَقْف الجَائِز |

Do not shorten a waqf value's Arabic name merely to shorten its code name. In this example, the shortened name omits that continuing is preferable.

The shortened form is an illustrative counter-example showing the lost meaning, not a name attributed to a source.

### 042. Definite articles in Arabic names [#rule-042]

Write singular Arabic nouns with the definite article, and classification values expressed as adjectives without it.

**Examples**

| Name type | Arabic form |
| --- | --- |
| Singular noun with the definite article | السُّورَة |
| Singular noun with the definite article | التَّجْوِيد |
| Classification value expressed as an adjective | مَكِّيّ |
| Classification value expressed as an adjective | مُرَتَّل |

### 043. Unicode character names [#rule-043]

Preserve the official Unicode character name as given; do not use it as the code name of the concept the character represents.

**Examples**

| Name type | Form |
| --- | --- |
| Unicode character name | `ARABIC LETTER HAMZA` |
| Concept's code name | `hamzah` |

### 044. Alternative spellings [#rule-044]

Distinguish alternative spellings from lookup forms differing only in case or separators. Both may be recorded in `alternative_spellings` so that references resolve, but a separator change does not create a distinct linguistic spelling or a new canonical name.

**Examples**

| Canonical form | Other form | Relationship |
| --- | --- | --- |
| `hamzah` | `hamza` | Alternative spelling |
| `waqf_lazim` | `waqf-lazim` | Separator-only lookup form; may be recorded for resolution |

## Relationships between names [#section-56]

### 045. Relationships between names [#rule-045]

Distinguish a canonical name, alternative spelling, English equivalent and deprecated name; these are different relationships between names.

**Examples**

| Name | Relationship to the canonical name |
| --- | --- |
| `ayah` | Canonical name |
| `aya` | Alternative spelling of `ayah` |
| `Verse` | English equivalent of `ayah` |
| `alamat_mawdi_al_sajdah` | Deprecated name for `sajdah_mark` |

## Deprecated names [#section-58]

### 046. Deprecated names [#rule-046]

Distinguish a valid name no longer recommended for new projects from an alternative spelling, and identify it as a deprecated name referring to the same concept.

**Examples**

| Deprecated name | Canonical name for the same concept |
| --- | --- |
| `alamat_mawdi_al_sajdah` | `sajdah_mark` |

### 047. References from former names [#rule-047]

When a concept is renamed or names for the same concept are merged, preserve the old names and their references to the surviving name, with the date and reason. This also applies when a name is withdrawn from the standard.

**Examples**

| Former name | Name it refers to |
| --- | --- |
| `alamat_mawdi_al_sajdah` | `sajdah_mark` |

Record the reason for the merge alongside the reference.

## Singular and plural [#section-61]

### 048. Singular and plural [#rule-048]

Use the singular for one item and the plural for a collection.

**Examples**

| Meaning | Form |
| --- | --- |
| One ayah | `ayah` |
| A collection of ayahs | `ayahs` |

### 049. Forming the code plural [#rule-049]

Form the code plural by adding `s` to the complete code name, including compound names.

**Examples**

```text
ayahs
juzs
hizbs
mushafs
```

Do not use Arabic plurals such as `ayat` and `suwar` as code collection names; write `ayahs` and `surahs`. Preserve the Arabic plural as linguistic information in the dictionary.

## Classification and value names [#section-64]

### 050. Classification names and the `_type` suffix [#rule-050]

Name a classification after what it classifies, and reserve the `_type` suffix for classifications of mark types.

**Examples**

| Meaning | Canonical name | Name not used for this classification |
| --- | --- | --- |
| Waqf mark type | `waqf_mark_type` | — |
| Waqf ruling | `waqf_ruling` | `waqf_type` |
| Recitation style | `recitation_style` | `recitation_type` |

### 051. The mark, its indication and the waqf ruling [#rule-051]

Use `waqf_mark` for the drawn mark, `waqf_mark_type` to classify what the marks indicate, and `waqf_ruling` to classify the ruling on stopping at a location.

**Examples**

| Meaning | Example values |
| --- | --- |
| A mark's indication | `waqf_lazim` or `waqf_mamnu` |
| Ruling on stopping at the location | `waqf_tamm` or `waqf_kafi` |

### 052. Naming and defining classification values [#rule-052]

Give each meaningful type or classification value its own code name and definition; defining only the overall classification is insufficient.

**Examples**

| Classification | Example values |
| --- | --- |
| `recitation_style` | `murattal`, `mujawwad`, `muallim` |
| `recitation_pace` | `tahqiq`, `tadwir`, `hadr` |
| `revelation_classification` | `makki`, `madani`, `disputed` |

### 053. Distinguishing classification-value names [#rule-053]

Add the distinguishing concept name to a classification value's name when needed, retaining the words that distinguish it from other values.

**Examples**

```text
waqf_lazim
waqf_jaiz_wasl_awla
```

### 054. Uniqueness within a classification [#rule-054]

A value name may occur in two different classifications when its classification is known. It must be unique within its own classification.

**Examples**

| Classification | Value name |
| --- | --- |
| Revelation classification | `makki` |
| Ayah numbering systems | `makki` |

### 055. Ayah numbering system names [#rule-055]

Use the school's name as the code value for an ayah numbering system, rather than deriving the full Arabic name.

**Examples**

```text
kufi
basri
dimashqi
makki
madani_first
madani_last
```

## Surah and personal names [#section-71]

### 056. Personal names [#rule-056]

Write the names of qiraah transmitters, rawis and other people associated with Quranic terminology using the scholarly English form with transliteration marks removed, supported by evidence for that form. If it conflicts with an explicit rule of the standard, the rule takes precedence: write `shubah`, not `shuba`, following the ta marbutah rule.

**Examples**

```text
hafs
warsh
qalun
ibn_dhakwan
```

### 057. Deriving surah names [#rule-057]

Derive surah names from their Arabic names using the general spelling rules.

**Examples**

```text
fatihah
baqarah
nisa
```

### 058. A concept and an individual sharing a name [#rule-058]

A concept and an individual may share a name when the individual's kind is known and no confusion arises; the bare name refers to the concept. This applies when a reciter or surah shares a name with a Quranic concept.

**Examples**

| Meaning | Name with its context |
| --- | --- |
| Hamzah mark | `hamzah` |
| Hamzah the qiraah transmitter | `qiraah:hamzah` |
| A level in the transmission chain | `tariq` |
| Surah al-Tariq | `surah:tariq` |

## Distinguishing concepts [#section-75]

### 059. Distinguishing neighbouring concepts [#rule-059]

Similar names or translations are not a reason to merge different concepts, and one concept's name must not be assigned to another.

**Examples**

| Name | Meaning |
| --- | --- |
| `word` | A word in the text |
| `token` | A unit produced by segmentation |

They may coincide in an example, but that does not make the names synonyms.

### 060. A mark and what it signifies [#rule-060]

Give a drawn mushaf mark a name that distinguishes it from the concept it signifies.

**Examples**

| Drawn mark | What it signifies |
| --- | --- |
| Saktah mark: `saktah_mark` | The pause: `saktah` |
| Sajdah mark: `sajdah_mark` | The prostration and its location: `sajdah` |
| Ayah mark: `ayah_mark` | The ayah ending: `ayah_ending` |

### 061. Sajdah and its mark [#rule-061]

Use `sajdah` for a location of recitation prostration and the prostration there, and `sajdah_mark` for the drawn mark.

**Examples**

| Meaning | Name |
| --- | --- |
| The location and prostration there | `sajdah` |
| Drawn mark | `sajdah_mark` |

### 062. Naming a mark in context [#rule-062]

Identify a Quranic mark by its meaning at its location; its codepoint alone does not determine its name.

**Examples**

| Codepoint | Name according to meaning |
| --- | --- |
| `U+06DC` | `saktah_mark` or `seen_al_qiraah`, depending on the location |
| `U+0652` and `U+06E1` | `sukun` |

### 063. Words and their analysis units [#rule-063]

Use `word` for a word in the text, `token` for a unit produced by segmentation, and morphological-analysis names for what is derived from the word. Do not use these names interchangeably.

**Examples**

| Name | Meaning |
| --- | --- |
| `word` | The word recognised by the reader |
| `token` | A unit produced by a segmentation method |
| `morpheme` | A unit carrying meaning or a morphological function |
| `lemma` | Dictionary form |
| `root` | Root |
| `morphology` | Morphological analysis |
| `irab` | Grammatical analysis |

### 064. Text units and their representation [#rule-064]

Choose a text-unit name according to what is meant: a linguistic letter, character, codepoint, grapheme or drawn glyph.

**Examples**

| Name | Meaning |
| --- | --- |
| `letter` | Linguistic letter |
| `character` | A character, an abstract textual unit |
| `codepoint` | A numeric value in the encoding system |
| `grapheme` | A written unit perceived as one by the reader |
| `glyph` | The shape drawn by the font |

### 065. The Quran and the mushaf [#rule-065]

Use `quran` for the Quran and `mushaf` for the book in which it is written; do not substitute one name for the other.

**Examples**

| Meaning | Name |
| --- | --- |
| The Quran | `quran` |
| The mushaf | `mushaf` |

### 066. Content and presentation [#rule-066]

Use content-unit names for what the text contains, and presentation names for how it appears on the page.

**Examples**

| Domain | Example names |
| --- | --- |
| Content | `surah`, `ayah`, `word` |
| Presentation | `page`, `line`, `layout`, `font`, `glyph` |

## Numbers, references and timing [#section-84]

### 067. Internal identifiers [#rule-067]

Use `id` for an internal identifier linking records; do not show it to readers or build external references on it. Use `number` for the number readers recognise and cite.

**Examples**

| Name | Meaning |
| --- | --- |
| `ayah_id` | Internal identifier |
| `ayah_number` | Ayah number within the surah |

### 068. Reference numbers [#rule-068]

Use `number` for an item's recognised number within its domain, displayed to readers and used in citations.

**Examples**

```text
surah_number
ayah_number
page_number
```

### 069. Position in a sequence [#rule-069]

Use `position` for an item's location within a parent or sequence; it is not a stable reference if the sequence changes.

**Examples**

```text
word_position
token_position
line_position
```

### 070. Semantic order [#rule-070]

Use `order` for an intended semantic ordering when it differs from position in the sequence.

**Examples**

```text
revelation_order
display_order
```

### 071. Composite references [#rule-071]

Use `key` for a readable composite reference: `ayah_key` combines surah and ayah numbers, and `word_key` combines the ayah key and word position.

**Examples**

```text
ayah_key = surah_number:ayah_number
2:255

word_key = ayah_key:word_position
2:255:3
```

### 072. The numbering system of a reference [#rule-072]

The meaning of `ayah_key` and `word_key` depends on the ayah numbering system. This standard uses `kufi` as the default when none is stated.

**Examples**

```text
ayah_key: 2:255
```

Interpret references within the declared numbering system, defaulting to `kufi`. The sequential index of ayahs across the whole mushaf is a `position` and also depends on the numbering system. The numbering system alone does not make `word_key` stable when the text or segmentation differs; identify the text and segmentation method when exchanging word references.

### 073. Naming audio timings [#rule-073]

Within a particular recitation recording, name an audio span after the text unit it corresponds to: `ayah_timing` for an ayah and `word_timing` for a word, without including the reciter, riwayah or style in the name.

**Examples**

| Name | Meaning |
| --- | --- |
| `ayah_timing` | An ayah span in one recording |
| `word_timing` | A word span in one recording |


## Using names in software [#section-92]

These guidelines supplement the terminology rules when using names in a model, database or API.

### Clear names [#section-93]

Use a complete, familiar name such as `surah`, `ayah` or `word`, avoiding abbreviations such as `srh`, `ay` and `wrd`. Choose a name that identifies the data rather than `data` or `item` when its kind is known.

### Relationship names [#section-94]

Name a relationship after the linked concept, using singular for a to-one relationship and plural for a to-many relationship: `ayah.surah`, `surah.ayahs` and `ayah.words`. For a data relationship, `ayahs` is sufficient; `getAyahList()` describes an operation that retrieves it.

### Operation names [#section-95]

Use the same verb for the same operation: `normalize`, `parse`, `tokenize`, `segment`, `transliterate`, `annotate`, `render`, `validate`, `compare` and `convert`. `tokenizeText()` explains the work more clearly than `processText()`, and `renderAyah()` is more precise than `handleAyah()` when the operation displays an ayah. These are operation names and do not need separate dictionary entries.

### Boolean names [#section-96]

Make a boolean field's name a yes/no question, such as `has_sajdah` or `is_active`. When choosing a value from a classification with several values, use that classification field rather than multiple booleans whose values could conflict.

### The same vocabulary across system layers [#section-97]

Keep canonical vocabulary in models, databases and APIs, adapting letter case to the layer. For example, the `Surah` model corresponds to the `surahs` table and `surah_id` linking field; it does not become `chapter` in another layer. The interface may display an appropriate translation for the reader.

| Form | Use | Example |
| --- | --- | --- |
| `snake_case` | Tables, columns, `JSON` keys, `enum` values and filenames | `ayah_numbering_system` |
| `PascalCase` | Classes and types | `AyahNumberingSystem` |
| `camelCase` | Fields and functions where required by the language | `ayahNumber` |
| `kebab-case` | URL paths | `/waqf-marks/waqf-lazim` |

Changing case or separators does not create an independent linguistic spelling; the form may be recorded for lookup under [rule 044](#rule-044).

### Names owned by an external source [#section-98]

Preserve external package, file and column names exactly as their owner writes them, because changing them breaks the reference. For example, retain `row["aya_text_emlaey"]` when reading a publisher's file. Fields created inside your project after reading it follow the standard. Declare these external names to the auditor through `external_names` in `.terminology.json`.

### Link timings to their recording [#section-99]

`ayah_timing` carries `recitation_id`, `ayah_key`, `start_ms` and `end_ms`; `word_timing` uses `word_key` instead of the ayah key. `recitation_id` identifies the recording the times belong to. Store the reciter, riwayah and style on the recitation, without adding them to the audio-span name.
