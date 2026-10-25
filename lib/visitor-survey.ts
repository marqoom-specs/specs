// The three questions that open for visitors, shared by the sheet and the API route that stores the answers.

export const bookingUrl = 'https://cal.com/abdullah-551234/30min?overlayCalendar=true';

type Option = { code: string; en: string; ar: string };
export type Question = { key: 'role' | 'data' | 'intent'; multiple: boolean; en: string; ar: string; hintEn?: string; hintAr?: string; options: Option[] };

export const questions: Question[] = [
  {
    key: 'role',
    multiple: false,
    en: 'Which describes you best?',
    ar: 'ما الذي يصفك أكثر؟',
    options: [
      { code: 'developer', en: 'A developer working on a Quran project', ar: 'مطوّر أعمل على مشروع قرآني' },
      { code: 'organization', en: 'Part of a team that publishes Quranic data', ar: 'أعمل مع جهة أو فريق ينشر بيانات قرآنية' },
      { code: 'researcher', en: 'A researcher or specialist in Quranic sciences', ar: 'باحث أو مختص في علوم القرآن' },
      { code: 'browsing', en: 'Just looking around', ar: 'أتصفح فقط' },
    ],
  },
  {
    key: 'data',
    multiple: true,
    en: 'Which data do you work with?',
    ar: 'مع أي بيانات تعمل؟',
    hintEn: 'Choose all that apply.',
    hintAr: 'اختر كل ما ينطبق.',
    options: [
      { code: 'text', en: 'Quranic text and its structure', ar: 'النص القرآني وبنيته' },
      { code: 'audio', en: 'Recitations and audio', ar: 'التلاوات والملفات الصوتية' },
      { code: 'timing', en: 'Ayah or word timings', ar: 'توقيت الآيات أو الكلمات' },
      { code: 'tafsir', en: 'Tafsir and translation', ar: 'التفسير والترجمة' },
      { code: 'none', en: 'None yet', ar: 'لا شيء بعد' },
    ],
  },
  {
    key: 'intent',
    multiple: false,
    en: 'Would you use these standards in your work?',
    ar: 'هل تستخدم هذه المعايير في عملك؟',
    options: [
      { code: 'using', en: 'I already use them', ar: 'أستخدمها الآن' },
      { code: 'soon', en: 'Yes, in a current or upcoming project', ar: 'نعم، في مشروع قائم أو قادم' },
      { code: 'maybe', en: 'Maybe, I want to understand them better', ar: 'ربما، أريد أن أفهمها أكثر' },
      { code: 'not_now', en: 'Not now', ar: 'ليس الآن' },
    ],
  },
];

export const codes = Object.fromEntries(questions.map((question) => [question.key, question.options.map((option) => option.code)])) as Record<Question['key'], string[]>;

// Visitors who might use the standards are offered the call first.
export const interested = (intent?: string) => intent === 'using' || intent === 'soon' || intent === 'maybe';
