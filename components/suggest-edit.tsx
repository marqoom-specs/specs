'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { repoUrl, siteUrl } from '@/lib/site';

const BLOCKS = 'p, li, h2, h3, h4, blockquote, pre, tr, figure';
// GitHub rejects very long form links; a long block is quoted from its start.
const QUOTE = 1200;
const issue = (fields: Record<string, string>) =>
  `${repoUrl}/issues/new?${new URLSearchParams({ template: 'edit.yml', ...fields })}`;

// Suggesting edits is a mode the reader turns on; it is remembered from page to page.
const KEY = 'marqoom-suggest-edits';
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => void listeners.delete(listener);
};
const useEditing = () => useSyncExternalStore(subscribe, () => localStorage.getItem(KEY) === 'on', () => false);

export function SuggestEditToggle({ ar }: { ar: boolean }) {
  const editing = useEditing();
  return (
    <button
      type="button"
      id="suggest-edits"
      className="suggest-toggle"
      aria-pressed={editing}
      title={ar ? 'مرّر على أي فقرة لاقتراح تعديل عليها' : 'Point at any paragraph to suggest an edit to it'}
      onClick={() => {
        localStorage.setItem(KEY, editing ? 'off' : 'on');
        listeners.forEach((listener) => listener());
      }}
    >
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M11.2 2.3 13.7 4.8 5.6 12.9 2.5 13.5 3.1 10.4Z" />
      </svg>
      {ar ? 'اقتراح التعديلات' : 'Suggest edits'}
    </button>
  );
}

// One chip for the whole page: it follows the block under the pointer and opens the edit form filled in for it.
export function SuggestEdit({
  ar,
  title,
  page,
  file,
  entries,
}: {
  ar: boolean;
  title: string;
  page: string;
  // The page's file in the repository.
  file: string;
  // On a dictionary category page every third-level heading is a concept.
  entries: boolean;
}) {
  const editing = useEditing();
  const box = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<{ href: string; top: number; left: number; width: number; height: number }>();

  useEffect(() => {
    if (!editing) return setTarget(undefined);
    const root = box.current!.parentElement!;
    const body = root.querySelector('.prose');
    if (!body) return;

    const show = (event: Event) => {
      const element = event.target as Element;
      if (box.current!.contains(element)) return;
      const block = element.closest<HTMLElement>(BLOCKS);
      if (!block || !body.contains(block)) return;
      if (block.closest('.doc-figure')) return setTarget(undefined);

      const heading = [...body.querySelectorAll<HTMLElement>('h2[id], h3[id], h4[id]')]
        .filter((item) => item === block || item.compareDocumentPosition(block) & Node.DOCUMENT_POSITION_FOLLOWING)
        .at(-1);
      const text = (block.tagName === 'TR'
        ? [...block.children].map((cell) => (cell as HTMLElement).innerText.trim()).join(' | ')
        : block.innerText
      ).trim();
      const location = [
        `Page: ${siteUrl}${page}${heading ? `#${heading.id}` : ''}`,
        `File: ${file}`,
        entries && heading?.tagName === 'H3' && `Entry: ${heading.id}`,
      ];

      // A row of a scrolled table is outlined only where it shows.
      const frame = root.getBoundingClientRect();
      const view = block.closest('.reference-table')?.getBoundingClientRect() ?? frame;
      const rect = block.getBoundingClientRect();
      const top = Math.max(rect.top, view.top);
      const left = Math.max(rect.left, view.left, frame.left);
      setTarget({
        href: issue({
          title: `edit: ${title}${heading ? ` — ${heading.innerText.trim()}` : ''}`,
          location: location.filter(Boolean).join('\n'),
          quote: text.length > QUOTE ? `${text.slice(0, QUOTE)}…` : text,
        }),
        top: top - frame.top,
        left: left - frame.left,
        width: Math.min(rect.right, view.right, frame.right) - left,
        height: Math.min(rect.bottom, view.bottom) - top,
      });
    };
    const hide = () => setTarget(undefined);
    // A finger leaves the page as soon as it lifts; only a mouse leaving puts the chip away.
    const leave = (event: PointerEvent) => event.pointerType === 'mouse' && hide();

    root.addEventListener('pointerover', show);
    root.addEventListener('focusin', show);
    root.addEventListener('pointerleave', leave);
    window.addEventListener('resize', hide);
    return () => {
      root.removeEventListener('pointerover', show);
      root.removeEventListener('focusin', show);
      root.removeEventListener('pointerleave', leave);
      window.removeEventListener('resize', hide);
    };
  }, [editing, title, page, file, entries]);

  const { href, ...place } = target ?? {};
  if (!editing) return null;
  return (
    <div ref={box} className="suggest-edit" data-active={target ? '' : undefined} style={place}>
      <a
        href={href ?? issue({ title: `edit: ${title}`, location: `Page: ${siteUrl}${page}\nFile: ${file}` })}
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M11.2 2.3 13.7 4.8 5.6 12.9 2.5 13.5 3.1 10.4Z" />
        </svg>
        {ar ? 'اقترح تعديلًا' : 'Suggest an edit'}
      </a>
    </div>
  );
}
