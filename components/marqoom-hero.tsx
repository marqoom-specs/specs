'use client';

import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { useEffect, useState, type ReactNode } from 'react';
import type { HeroVariant } from './hero-webgl';

// WebGL only exists in the browser; the static surface below covers the rest.
const HeroWebgl = dynamic(() => import('./hero-webgl'), { ssr: false });

export function MarqoomHero({
  rtl,
  variant,
  children,
}: {
  rtl: boolean;
  variant?: HeroVariant;
  children: ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';
  const [ready, setReady] = useState(false);
  const [still, setStill] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setStill(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <header className="marqoom-hero" data-ready={ready}>
      <div className="marqoom-hero-art" aria-hidden="true">
        {still !== null && (
          <HeroWebgl
            theme={theme}
            still={still}
            rtl={rtl}
            variant={variant}
            onReady={() => setReady(true)}
          />
        )}
      </div>
      <div className="marqoom-hero-copy">{children}</div>
    </header>
  );
}
