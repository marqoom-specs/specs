import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';

export default createI18nMiddleware({
  languages: ['en', 'ar'],
  defaultLanguage: 'en',
  hideLocale: 'default-locale',
});

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|.*\\..*).*)'],
};
