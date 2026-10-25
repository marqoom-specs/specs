'use client';

import {
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import data from '@/lib/visual-lab-data.json';

const { systems, surahs } = data.counts;
const spreads = surahs.map(
  ({ counts }) => Math.max(...counts) - Math.min(...counts),
);
const widest = Math.max(...spreads);
const ticks = [1, 20, 40, 60, 80, 100, 114];

export function AyahCounts({ inline = false, ar = false }: { inline?: boolean; ar?: boolean }) {
  // Al-Baqarah: the three counts it is given make the point at a glance.
  const [active, setActive] = useState(1);
  const surah = surahs[active];
  const low = Math.min(...surah.counts);
  const high = Math.max(...surah.counts);
  const number = (value: number) => value.toLocaleString(ar ? 'ar-u-nu-arab' : 'en');

  const point = (event: PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    const at = Math.floor(
      ((event.clientX - box.left) / box.width) * surahs.length,
    );
    setActive(Math.min(surahs.length - 1, Math.max(0, at)));
  };
  const step = (event: KeyboardEvent) => {
    const by = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
    if (!by) return;
    event.preventDefault();
    setActive((at) => Math.min(surahs.length - 1, Math.max(0, at + by)));
  };

  return (
    <div className="counts">
      {/* Surahs run from 1 to 114 left to right in both languages, as on the axis. */}
      {!inline && <div dir="ltr">
        <div
          className="counts-bars"
          role="slider"
          tabIndex={0}
          aria-label={ar ? 'السورة' : 'Surah'}
          aria-valuemin={1}
          aria-valuemax={114}
          aria-valuenow={surah.number}
          aria-valuetext={`${surah.number}, ${ar ? surah.arabic : surah.display}`}
          onPointerMove={point}
          onPointerDown={point}
          onKeyDown={step}
        >
          {spreads.map((spread, index) => (
            <i
              key={index}
              data-same={spread ? undefined : ''}
              data-active={index === active ? '' : undefined}
              style={{ '--share': spread / widest } as CSSProperties}
            >
              {spread === widest && <b>{ar ? `فارق ${number(spread)} آيات` : `${spread} ayahs apart`}</b>}
            </i>
          ))}
        </div>
        <div className="counts-axis" aria-hidden="true">
          {ticks.map((tick) => (
            <span key={tick} style={{ '--n': tick } as CSSProperties}>
              {number(tick)}
            </span>
          ))}
        </div>
      </div>}

      <div className="counts-surah" aria-live="polite">
        <span className="viz-arabic" lang="ar" dir="rtl">
          {surah.arabic}
        </span>
        {!inline && <span>
          <strong>
            {ar ? `السورة ${number(surah.number)}` : `${surah.number}. ${surah.display}`}
          </strong>
          {ar
            ? low === high
              ? `${number(low)} آية في كل أنظمة العد`
              : `من ${number(low)} إلى ${number(high)} آية حسب نظام العد`
            : low === high
              ? `${low} ayahs in every system`
              : `${low} to ${high} ayahs, depending on who counts`}
        </span>}
      </div>

      <div className="counts-tiles">
        {systems.map((system, index) => (
          <div key={system.code}>
            <span>{ar ? system.arabic : system.display}</span>
            <strong>{number(surah.counts[index])}</strong>
            {/* How far above the lowest count this system stands. */}
            <i
              style={
                {
                  '--share': low === high ? 0 : (surah.counts[index] - low) / (high - low),
                } as CSSProperties
              }
            />
            {!inline && <small>{ar ? `من ${number(system.total)}` : `of ${number(system.total)}`}</small>}
          </div>
        ))}
      </div>
    </div>
  );
}
