'use client';

import { useState } from 'react';

// The setup the tool page shows; keep `rev` on the documented release.
const config = `repos:
  - repo: https://github.com/marqoom-specs/quranic-terminology-lint
    rev: v0.4.0
    hooks:
      - id: quranic-terminology
`;

// The end of the tool page: copy the setup, or send an example that the tool gets wrong.
export function ToolCta({ ar = false }: { ar?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(config);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Without a clipboard, the reader still has the setup to copy by hand.
      location.hash = 'set-up';
    }
  };
  return <aside className="join-cta tool-cta not-prose">
    <div className="join-cta-copy">
      <strong>{ar ? 'جرّبها في مشروعك' : 'Try it in your project'}</strong>
      <p>{ar
        ? <>انسخ الإعداد إلى ملف <code dir="ltr">.pre-commit-config.yaml</code>، ثم شغّل <code dir="ltr">pre-commit install</code>. وإذا وجدت اقتراحًا لا يناسب الكود عندك، شاركنا مثالًا صغيرًا.</>
        : <>Copy the setup into <code>.pre-commit-config.yaml</code>, then run <code>pre-commit install</code>. If a suggestion doesn&apos;t fit your code, share a small example.</>}</p>
    </div>
    <div className="join-cta-actions">
      <button type="button" onClick={copy}>
        {copied ? (ar ? 'نُسخ الإعداد' : 'Setup copied') : (ar ? 'انسخ الإعداد' : 'Copy the setup')}
      </button>
      <a href="https://github.com/marqoom-specs/quranic-terminology-lint/issues/new" target="_blank" rel="noreferrer">
        {ar ? 'شاركنا مثالًا' : 'Share an example'}
      </a>
    </div>
    <span className="sr-only" aria-live="polite">{copied ? (ar ? 'نُسخ الإعداد' : 'Setup copied') : ''}</span>
  </aside>;
}
