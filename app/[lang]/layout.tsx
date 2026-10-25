import { RootProvider } from 'fumadocs-ui/provider/next';
import '../globals.css';
import './visitor-survey.css';
import { VisitorSurvey } from '@/components/visitor-survey';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site';

// Link previews need absolute URLs; the pages give theirs relative to the site.
export const metadata: Metadata = { metadataBase: new URL(siteUrl) };

const thmanyah = localFont({
  src: [
    { path: '../fonts/thmanyahsans-Light.woff2', weight: '300' },
    { path: '../fonts/thmanyahsans-Regular.woff2', weight: '400' },
    { path: '../fonts/thmanyahsans-Medium.woff2', weight: '500' },
    { path: '../fonts/thmanyahsans-Bold.woff2', weight: '700' },
    { path: '../fonts/thmanyahsans-Black.woff2', weight: '900' },
  ],
  variable: '--font-thmanyah',
  display: 'swap',
});

const languages = ['en', 'ar'] as const;

const localeNames: Record<string, string> = {
  en: 'English',
  ar: 'العربية',
};

const arabicTranslations = {
  search: 'بحث',
  searchNoResult: 'لا توجد نتائج',
  toc: 'في هذه الصفحة',
  tocNoHeadings: 'لا عناوين',
  lastUpdate: 'آخر تحديث في',
  chooseLanguage: 'اختر لغة',
  nextPage: 'الصفحة التالية',
  previousPage: 'الصفحة السابقة',
  chooseTheme: 'المظهر',
  editOnGithub: 'عدّل على GitHub',
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  return (
    <html
      lang={lang}
      dir={dir}
      className={thmanyah.variable}
      suppressHydrationWarning
    >
      {/* Browser extensions (ColorZilla's cz-shortcut-listen, for example) add attributes to body before React loads. */}
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider
          dir={dir}
          theme={{ disableTransitionOnChange: false }}
          i18n={{
            locale: lang,
            locales: languages.map((code) => ({
              name: localeNames[code],
              locale: code,
            })),
            translations: lang === 'ar' ? arabicTranslations : undefined,
          }}
        >
          {children}
          <VisitorSurvey lang={lang} />
        </RootProvider>
      </body>
    </html>
  );
}
