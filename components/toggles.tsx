'use client';

import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useState, useTransition, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Shared by the desktop and mobile controls, including rapid consecutive clicks.
let themeTransitionTimer: ReturnType<typeof setTimeout> | undefined;

function softenThemeChange() {
  const root = document.documentElement;
  clearTimeout(themeTransitionTimer);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.removeAttribute('data-theme-transition');
    return;
  }
  root.setAttribute('data-theme-transition', '');
  themeTransitionTimer = setTimeout(() => {
    root.removeAttribute('data-theme-transition');
  }, 360);
}

function Pill({
  count,
  activeIndex,
  children,
  direction,
}: {
  count: number;
  activeIndex: number | null;
  children: ReactNode;
  direction?: 'ltr' | 'rtl';
}) {
  const { locale } = useI18n();
  const rtl = (direction ?? (locale === 'ar' ? 'rtl' : 'ltr')) === 'rtl';
  return (
    <div
      dir={direction}
      className="marqoom-toggle relative flex h-10 flex-1 items-center overflow-hidden rounded-full border border-fd-border bg-fd-secondary/50 p-0.5"
    >
      {activeIndex !== null && (
        <span
          aria-hidden
          className="toggle-indicator pointer-events-none absolute inset-y-0.5 rounded-full bg-fd-background shadow-sm"
          style={{
            width: `calc((100% - 0.25rem) / ${count})`,
            insetInlineStart: '0.125rem',
            transform: `translateX(${(rtl ? -1 : 1) * activeIndex * 100}%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

function Segment({
  active,
  title,
  onClick,
  children,
}: {
  active: boolean;
  title: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      aria-pressed={active}
      onClick={onClick}
      className="toggle-segment relative z-10 flex h-full min-w-0 flex-1 items-center justify-center rounded-full px-2 text-xs font-medium leading-none outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-fd-primary/60 data-[active=true]:text-fd-foreground data-[active=false]:text-fd-muted-foreground hover:data-[active=false]:text-fd-foreground"
      data-active={active}
    >
      <span className="toggle-label flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}

export function LanguageToggle() {
  const { locale, locales } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [requestedLocale, setRequestedLocale] = useState(locale);
  const canonicalPath =
    pathname.split(/[?#]/)[0].replace(/^\/(ar|en)(?=\/|$)/, '') || '/docs';
  const alternatePath = `${locale === 'ar' ? '' : '/ar'}${canonicalPath}`;

  useEffect(() => {
    router.prefetch(alternatePath);
    // Next 16.2 can append a fragment twice when revisiting a cached route.
    const [anchor, ...repeated] = window.location.hash.slice(1).split('#');
    if (
      anchor &&
      repeated.length &&
      repeated.every((part) => part === anchor)
    ) {
      window.history.replaceState(
        window.history.state,
        '',
        `${window.location.pathname}${window.location.search}#${anchor}`,
      );
    }
  }, [alternatePath, router]);

  function changeLanguage(nextLocale: string) {
    if (nextLocale === locale || pending) return;
    setRequestedLocale(nextLocale);
    // Keep the visible section, not an old hash the reader has since scrolled past.
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>('#nd-page :is(h2, h3)[id]'),
    );
    const section = headings.findLast(
      (heading) => heading.getBoundingClientRect().top <= 160,
    );
    const hash = section ? `#${encodeURIComponent(section.id)}` : '';
    startTransition(() =>
      router.push(`${alternatePath}${window.location.search}${hash}`),
    );
  }

  const selectedLocale = pending ? requestedLocale : locale;
  const activeIndex =
    locales?.findIndex((item) => item.locale === selectedLocale) ?? null;
  return (
    <div className="locale-control flex flex-1" aria-busy={pending}>
      {/* Stable option positions let the pill travel smoothly across an RTL switch. */}
      <Pill
        count={locales?.length ?? 2}
        activeIndex={activeIndex}
        direction="ltr"
      >
        {locales?.map((item) => (
          <Segment
            key={item.locale}
            active={item.locale === selectedLocale}
            title={item.name}
            onClick={() => changeLanguage(item.locale)}
          >
            {item.locale === 'ar' ? 'ع' : 'EN'}
          </Segment>
        ))}
      </Pill>
    </div>
  );
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { locale } = useI18n();
  const ar = locale === 'ar';

  useEffect(() => setMounted(true), []);

  const options = [
    {
      value: 'light',
      icon: <Sun className="size-4" />,
      title: ar ? 'فاتح' : 'Light',
    },
    {
      value: 'dark',
      icon: <Moon className="size-4" />,
      title: ar ? 'داكن' : 'Dark',
    },
    {
      value: 'system',
      icon: <Monitor className="size-4" />,
      title: ar ? 'النظام' : 'System',
    },
  ];

  const activeIndex = mounted
    ? options.findIndex((option) => option.value === (theme ?? 'system'))
    : null;

  return (
    <Pill count={options.length} activeIndex={activeIndex}>
      {options.map((option) => (
        <Segment
          key={option.value}
          active={activeIndex === options.indexOf(option)}
          title={option.title}
          onClick={() => {
            if (option.value === theme) return;
            softenThemeChange();
            setTheme(option.value);
          }}
        >
          {option.icon}
        </Segment>
      ))}
    </Pill>
  );
}

export function TogglesFooter() {
  return (
    <div className="flex gap-2">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
}
