'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import data from '@/lib/visual-lab-data.json';
import { find } from './dictionary-nav';

const GOLDEN = Math.PI * (3 - Math.sqrt(5));
const PITCH = 12;
// Names listed under the map before the rest are counted.
const SHOWN = 8;
// Search results offered as links before the rest are counted.
const HITS = 6;
// Node and browser may differ in the last bits of a sine; one decimal keeps the markup identical.
const round = (value: number) => Math.round(value * 10) / 10;
const entry = (concept: { category: string; id: string }, ar: boolean) =>
  `${ar ? '/ar' : ''}/docs/terms/dictionary/${concept.category}#${concept.id}`;

const byId = new Map(data.concepts.map((concept) => [concept.id, concept]));
const ties = new Map(data.concepts.map((concept) => [concept.id, new Set<string>()]));
for (const concept of data.concepts) {
  for (const other of concept.related) {
    ties.get(concept.id)!.add(other);
    ties.get(other)!.add(concept.id);
  }
}
const web = data.concepts.flatMap((concept) =>
  [...ties.get(concept.id)!].filter((other) => concept.id < other).map((other) => [concept.id, other]),
);
// As on a star chart, the better connected a concept is the larger it is drawn.
const size = (id: string) => 2.4 + Math.min(ties.get(id)!.size, 10) * 0.36;

// The largest category takes the middle; the rest settle on a widening spiral wherever they first fit.
const clusters: {
  id: string;
  title: string;
  titleAr: string;
  x: number;
  y: number;
  radius: number;
  reach: number;
  members: typeof data.concepts;
}[] = [];
const groups = data.categories
  .map((category) => ({
    ...category,
    // The most connected concept sits at the heart of its cluster.
    members: data.concepts
      .filter((concept) => concept.category === category.id)
      .sort((a, b) => ties.get(b.id)!.size - ties.get(a.id)!.size),
  }))
  .sort((a, b) => b.members.length - a.members.length);
for (const group of groups) {
  const radius = PITCH * Math.sqrt(group.members.length) + 6;
  const reach = radius + 26;
  let x = 0;
  let y = 0;
  for (
    let turn = 0;
    clusters.some((other) => Math.hypot(other.x - x, other.y - y) < other.reach + reach);
    turn += 0.04
  ) {
    x = Math.cos(turn) * turn * 9;
    y = Math.sin(turn) * turn * 5;
  }
  clusters.push({ ...group, x, y, radius, reach });
}

const spots = new Map<string, { x: number; y: number }>();
for (const cluster of clusters) {
  cluster.members.forEach((concept, index) => {
    const distance = PITCH * Math.sqrt(index + 0.5);
    spots.set(concept.id, {
      x: round(cluster.x + Math.cos(index * GOLDEN) * distance),
      y: round(cluster.y + Math.sin(index * GOLDEN) * distance),
    });
  });
}
const left = Math.min(...clusters.map((cluster) => cluster.x - cluster.reach));
const right = Math.max(...clusters.map((cluster) => cluster.x + cluster.reach));
const top = Math.min(...clusters.map((cluster) => cluster.y - cluster.radius)) - 22;
const bottom = Math.max(...clusters.map((cluster) => cluster.y + cluster.reach));
const frame = [left, top, right - left, bottom - top].map(round).join(' ');

export function ConceptMap({ ar = false }: { ar?: boolean }) {
  const [activeId, setActiveId] = useState('ayah');
  const [query, setQuery] = useState('');
  const scroller = useRef<HTMLDivElement>(null);
  // A finger has no hover: its first tap on a point selects it, and a second opens the entry.
  const touch = useRef(false);
  const count = (value: number) => value.toLocaleString(ar ? 'ar-u-nu-arab' : 'en');
  const hits = find(query);
  const found = new Set(hits.map((hit) => hit.concept.id));
  const router = useRouter();
  const active = byId.get(activeId)!;
  const near = [...ties.get(activeId)!];
  const here = spots.get(activeId)!;

  // On a narrow screen the map scrolls sideways; keep the selected concept in view.
  const first = useRef(true);
  useEffect(() => {
    const view = scroller.current;
    if (!view || view.scrollWidth <= view.clientWidth) return;
    const across = (spots.get(activeId)!.x - left) / (right - left);
    const still = first.current || matchMedia('(prefers-reduced-motion: reduce)').matches;
    first.current = false;
    view.scrollTo({ left: across * view.scrollWidth - view.clientWidth / 2, behavior: still ? 'instant' : 'smooth' });
  }, [activeId]);

  const nearest = (event: MouseEvent<SVGSVGElement>) => {
    const svg = event.currentTarget;
    const at = new DOMPoint(event.clientX, event.clientY).matrixTransform(
      svg.getScreenCTM()!.inverse(),
    );
    let found: string | undefined;
    let closest = 26;
    for (const [id, spot] of spots) {
      const distance = Math.hypot(spot.x - at.x, spot.y - at.y);
      if (distance < closest) [found, closest] = [id, distance];
    }
    return found;
  };

  return (
    <div className="map">
      <form
        className="map-search"
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          if (hits[0]) router.push(entry(hits[0].concept, ar));
        }}
      >
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            // The best match is marked on the map as it is typed.
            const [best] = find(event.target.value);
            if (best) setActiveId(best.concept.id);
          }}
          placeholder={ar ? 'ابحث عن مصطلح: الوقف، koran، tashkeel' : 'Find a term: koran, tashkeel, الوقف'}
          aria-label={ar ? 'ابحث في القاموس' : 'Find a term in the dictionary'}
        />
        {query && (
          <p aria-live="polite">
            {hits.slice(0, HITS).map(({ concept, via }) => (
              <Link
                key={concept.id}
                href={entry(concept, ar)}
                onPointerEnter={() => setActiveId(concept.id)}
                onFocus={() => setActiveId(concept.id)}
              >
                {via && <><code dir="ltr">{via}</code> {ar ? '←' : '→'} </>}
                {ar ? concept.arabic || concept.display : concept.display}
              </Link>
            ))}
            {hits.length === 0
              ? ar ? 'لا يوجد مدخل بهذا الاسم.' : 'No entry has this name.'
              : hits.length > HITS && <span>{ar ? `و${count(hits.length - HITS)} أخرى` : `and ${hits.length - HITS} more`}</span>}
          </p>
        )}
      </form>
      <div ref={scroller} className="viz-scroll" dir="ltr">
        <svg
          data-searching={hits.length ? '' : undefined}
          viewBox={frame}
          role="img"
          aria-label={ar ? `${count(data.concepts.length)} مفهومًا في ${count(data.categories.length)} موضوعًا، تصل بينها العلاقات المسجلة في القاموس` : `${data.concepts.length} concepts in ${data.categories.length} categories, joined where one entry names another as related`}
          onPointerDown={(event) => {
            touch.current = event.pointerType !== 'mouse';
          }}
          onPointerMove={(event) => {
            if (event.pointerType !== 'mouse') return;
            const id = nearest(event);
            if (id) setActiveId(id);
          }}
          onClick={(event) => {
            const id = nearest(event);
            if (!id) return;
            if (touch.current && id !== activeId) setActiveId(id);
            else router.push(entry(byId.get(id)!, ar));
          }}
        >
          <g className="map-web">
            {web.map(([from, to]) => (
              <line
                key={`${from} ${to}`}
                x1={spots.get(from)!.x}
                y1={spots.get(from)!.y}
                x2={spots.get(to)!.x}
                y2={spots.get(to)!.y}
              />
            ))}
          </g>
          <g key={activeId} className="map-ties">
            {near.map((id) => {
              const there = spots.get(id)!;
              // A slight bow, so ties that share a direction can be told apart.
              const bow = {
                x: round((here.x + there.x) / 2 + (there.y - here.y) * 0.12),
                y: round((here.y + there.y) / 2 - (there.x - here.x) * 0.12),
              };
              return (
                <path
                  key={id}
                  pathLength={1}
                  d={`M${here.x} ${here.y}Q${bow.x} ${bow.y} ${there.x} ${there.y}`}
                />
              );
            })}
          </g>
          <circle className="map-mark" cx={here.x} cy={here.y} r={round(size(activeId) + 5)} />
          {clusters.map((cluster) => (
            <g key={cluster.id}>
              {cluster.members.map((concept) => (
                <circle
                  key={concept.id}
                  className="map-node"
                  data-state={
                    concept.id === activeId ? 'active' : near.includes(concept.id) ? 'near' : undefined
                  }
                  data-found={found.has(concept.id) ? '' : undefined}
                  cx={spots.get(concept.id)!.x}
                  cy={spots.get(concept.id)!.y}
                  r={round(size(concept.id))}
                />
              ))}
              <a href={`${ar ? '/ar' : ''}/docs/terms/dictionary/${cluster.id}`} onClick={(event) => event.stopPropagation()}>
                <text className="map-label" direction={ar ? 'rtl' : 'ltr'} x={round(cluster.x)} y={round(cluster.y + cluster.radius + 17)}>
                  {ar ? cluster.titleAr : cluster.title}
                </text>
              </a>
            </g>
          ))}
          <text className="map-here" direction={ar ? 'rtl' : 'ltr'} x={here.x} y={here.y - 14}>
            {ar ? active.arabic || active.display : active.display}
          </text>
        </svg>
      </div>

      <div className="map-entry" aria-live="polite">
        {active.arabic && (
          <span className="viz-arabic" lang="ar" dir="rtl">
            {active.arabic}
          </span>
        )}
        <div>
          <p className="map-name">
            <strong>{ar ? active.arabic || active.display : active.display}</strong>
            <code dir="ltr">{active.code}</code>
          </p>
          <p>{ar ? active.definitionAr : active.definition}</p>
          <div className="viz-pills">
            {near.slice(0, SHOWN).map((id) => (
              <button key={id} type="button" onClick={() => setActiveId(id)}>
                {ar ? byId.get(id)!.arabic || byId.get(id)!.display : byId.get(id)!.display}
              </button>
            ))}
            {near.length > SHOWN && <span>{ar ? `و${count(near.length - SHOWN)} أخرى` : `and ${near.length - SHOWN} more`}</span>}
          </div>
          <Link href={entry(active, ar)}>{ar ? 'اقرأ المدخل' : 'Read the entry'}</Link>
        </div>
      </div>
    </div>
  );
}
