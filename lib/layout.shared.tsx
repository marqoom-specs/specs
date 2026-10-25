import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { LanguageToggle } from '@/components/toggles';

export function baseOptions(lang: string): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="marqoom-brand">
          <Image
            src="/brand/monolith.png"
            alt=""
            width={144}
            height={144}
            sizes="36px"
            className="marqoom-mark"
          />
          {lang === 'ar' ? 'مرقوم' : 'Marqoom'}
        </span>
      ),
      url: lang === 'ar' ? '/ar/docs' : '/docs',
      children: (
        <div className="mobile-locale">
          <LanguageToggle />
        </div>
      ),
    },
    i18n: false,
    themeSwitch: { enabled: false },
  };
}
