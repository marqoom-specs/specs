'use client';

import { useEffect, useId, useRef, useState } from 'react';
import data from '@/lib/visual-lab-data.json';
import { useTour } from './use-tour';

const picks = ['rubu_al_hizb', 'surah', 'tajwid_ruling', 'juz', 'qiraah', 'ayah']
  .map((id) => data.concepts.find((concept) => concept.id === id))
  .filter((concept) => concept !== undefined);
const HEIGHT = 340;
const MIDDLE = HEIGHT / 2;
const inlinePicks = picks.filter((concept) => concept.id === 'surah');

export function Spellings({ inline = false, ar = false }: { inline?: boolean; ar?: boolean }) {
  const [concept, choose] = useTour(inline ? inlinePicks : picks, 7000, !inline);
  const stage = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const gradient = useId();

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const resized = new ResizeObserver(() => setWidth(element.clientWidth));
    resized.observe(element);
    return () => resized.disconnect();
  }, []);

  const narrow = width < 560;
  // Room for the longest recorded spelling (16 characters) at the phone size set in lab.css.
  const from = narrow ? 134 : 176;
  // On a phone the name needs about 120px on one line; the threads give way.
  const to = width - (narrow ? 138 : Math.min(380, width * 0.4));
  const gap = narrow ? 18 : 36;
  const pitch = Math.min(36, HEIGHT / concept.spellings.length);
  const rows = concept.spellings.map(
    (_, index) => MIDDLE + (index - (concept.spellings.length - 1) / 2) * pitch,
  );
  const reach = to - from;
  const threads = rows.map(
    (y) =>
      `M${from} ${y}C${from + reach * 0.55} ${y} ${from + reach * 0.45} ${MIDDLE} ${to} ${MIDDLE}`,
  );

  if (inline) return (
    <svg className="inline-spellings" viewBox="0 0 440 154" role="img" aria-label={ar ? 'soorah وsura وsurat وsuwar تهجئات بديلة لـsurah' : 'soorah, sura, surat and suwar resolve to surah'} direction="ltr">
      <defs><linearGradient id={gradient}><stop className="spell-far" offset="0" /><stop className="spell-near" offset="1" /></linearGradient></defs>
      {concept.spellings.map((spelling, index) => {
        const y = 23 + index * 36;
        return <g key={spelling}>
          <text x="91" y={y + 4} textAnchor="end" className="figure-code">{spelling}</text>
          <path className="figure-highlight" style={{ animationDelay: `${index * 100}ms`, stroke: `url(#${gradient})` }} d={`M106 ${y}C180 ${y} 190 77 274 77`} pathLength="1" />
        </g>;
      })}
      <text x="322" y="68" lang="ar" direction="rtl" textAnchor="middle">{concept.arabic}</text>
      <text x="294" y="96" className="figure-code">{concept.code}</text>
    </svg>
  );

  return (
    <div className="spell">
      <div className="viz-pills">
        {picks.map((pick) => (
          <button
            key={pick.id}
            type="button"
            aria-pressed={pick === concept}
            onClick={() => choose(pick)}
          >
            {ar ? pick.arabic || pick.display : pick.display}
          </button>
        ))}
      </div>
      {/* Spellings flow into the name from left to right in both languages, like the code they come from. */}
      <div ref={stage} className="spell-stage" data-narrow={narrow ? '' : undefined} style={{ height: HEIGHT }} dir="ltr">
        {width > 0 && (
          <div key={concept.id} className="spell-scene">
            <svg viewBox={`0 0 ${width} ${HEIGHT}`} aria-hidden="true">
              <defs>
                <linearGradient id={gradient} gradientUnits="userSpaceOnUse" x1={from} x2={to}>
                  <stop className="spell-far" offset="0" />
                  <stop className="spell-near" offset="1" />
                </linearGradient>
              </defs>
              <g stroke={`url(#${gradient})`}>
                {threads.map((thread, index) => (
                  // Unequal weights, as in the hero's ribbons.
                  <path key={thread} d={thread} strokeWidth={1.25 + (index % 3) * 0.6} />
                ))}
              </g>
              <g className="spell-pulse">
                {threads.map((thread, index) => (
                  <path
                    key={thread}
                    d={thread}
                    pathLength={100}
                    style={{ animationDelay: `${index * 170}ms` }}
                  />
                ))}
              </g>
              <path className="spell-trunk" d={`M${to} ${MIDDLE}h22`} />
            </svg>
            {concept.spellings.map((spelling, index) => (
              <code
                key={spelling}
                className="spell-alias"
                style={{ top: rows[index], width: from - 14 }}
              >
                {spelling}
              </code>
            ))}
            <div className="spell-name" style={{ left: to + gap }}>
              {concept.arabic && (
                <span className="viz-arabic" lang="ar" dir="rtl">
                  {concept.arabic}
                </span>
              )}
              <code>{concept.id}</code>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
