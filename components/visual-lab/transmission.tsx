'use client';

import { useState } from 'react';
import data from '@/lib/visual-lab-data.json';

const { qiraah: readers, riwayah: riwayahs } = data.qiraat;
const named = new Map(
  [...readers, ...data.qiraat.rawi].map((person) => [person.code, person]),
);
const INNER = 140;
const OUTER = 226;
const round = (value: number) => Math.round(value * 10) / 10;
const polar = (radius: number, degrees: number) => ({
  x: round(Math.cos((degrees * Math.PI) / 180) * radius),
  y: round(Math.sin((degrees * Math.PI) / 180) * radius),
});

// The ten readers stand in their traditional order, clockwise from the top.
const angles = new Map(readers.map((reader, index) => [reader.code, -90 + index * 36]));
// A rawi stands beside the first reader he transmits from. Al-Duri transmits from two.
const taken = new Map<string, number>();
for (const riwayah of riwayahs) {
  const turn = taken.get(riwayah.qiraah) ?? 0;
  taken.set(riwayah.qiraah, turn + 1);
  if (!angles.has(riwayah.rawi)) {
    angles.set(riwayah.rawi, angles.get(riwayah.qiraah)! + (turn ? 9 : -9));
  }
}

const links = riwayahs.map((riwayah) => {
  const from = angles.get(riwayah.qiraah)!;
  const to = angles.get(riwayah.rawi)!;
  const start = polar(INNER, from);
  const end = polar(OUTER, to);
  // The wider the turn between the two, the nearer the centre the line bends.
  const bend = polar(185 * Math.cos((((to - from) / 2) * Math.PI) / 180), (from + to) / 2);
  return { ...riwayah, path: `M${start.x} ${start.y}Q${bend.x} ${bend.y} ${end.x} ${end.y}` };
});

function label(code: string, radius: number, outward: boolean) {
  const degrees = angles.get(code)!;
  const side = Math.cos((degrees * Math.PI) / 180);
  const spot = polar(radius, degrees);
  // Inside the ring there is only room to centre a name unless it sits squarely to one side.
  const anchor = Math.abs(side) < (outward ? 0.25 : 0.7) ? 'middle' : side > 0 === outward ? 'start' : 'end';
  return { ...spot, y: spot.y + 4, anchor } as const;
}

export function Transmission({ ar = false }: { ar?: boolean }) {
  // The riwayah the dictionary itself gives as its example.
  const [riwayah, setRiwayah] = useState(
    () => links.find((link) => link.code === 'hafs_an_asim') ?? links[0],
  );
  const reader = named.get(riwayah.qiraah)!;
  const numbering = data.counts.systems.find((system) => system.code === reader.numbering);

  return (
    <div className="chain">
      <svg
        viewBox="-350 -262 700 524"
        role="img"
        aria-label={ar ? 'عشرة قراء، وتسعة عشر راويًا، وعشرون رواية تصل بينهم' : 'The ten readers, the nineteen rawis who transmit from them, and the twenty riwayahs that join them'}
        direction="ltr"
      >
        <circle className="chain-ring" r={INNER} />
        <circle className="chain-ring" r={OUTER} />
        {links.map((link) => (
          <g key={link.code} className="chain-link" onPointerEnter={() => setRiwayah(link)}>
            <path d={link.path} />
            <path className="chain-hit" d={link.path} />
          </g>
        ))}
        <path key={riwayah.code} className="chain-live" d={riwayah.path} pathLength={1} />
        {readers.map((person) => {
          const spot = polar(INNER, angles.get(person.code)!);
          const text = label(person.code, INNER - 26, false);
          return (
            <g
              key={person.code}
              className="chain-reader"
              data-active={person === reader ? '' : undefined}
              onPointerEnter={() =>
                // Entering a reader from one of his own lines keeps that line.
                riwayah.qiraah === person.code ||
                setRiwayah(links.find((link) => link.qiraah === person.code)!)
              }
            >
              <circle className="chain-hit" cx={spot.x} cy={spot.y} r={16} />
              <circle cx={spot.x} cy={spot.y} r={5} />
              <text x={text.x} y={text.y} textAnchor={text.anchor}>
                {ar ? person.arabic : person.display}
              </text>
            </g>
          );
        })}
        {data.qiraat.rawi.map((person) => {
          const spot = polar(OUTER, angles.get(person.code)!);
          const text = label(person.code, OUTER + 15, true);
          return (
            <g
              key={person.code}
              className="chain-rawi"
              data-active={person.code === riwayah.rawi ? '' : undefined}
              onPointerEnter={() =>
                riwayah.rawi === person.code ||
                setRiwayah(links.find((link) => link.rawi === person.code)!)
              }
            >
              <circle className="chain-hit" cx={spot.x} cy={spot.y} r={14} />
              <circle cx={spot.x} cy={spot.y} r={3.5} />
              <text x={text.x} y={text.y} textAnchor={text.anchor}>
                {ar ? person.arabic : person.display}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="chain-entry" aria-live="polite">
        <span className="viz-arabic" lang="ar" dir="rtl">
          {riwayah.arabic}
        </span>
        {!ar && <strong>{riwayah.display}</strong>}
        {/* The code name read as the line it draws: who transmits, and from whom. */}
        <div className="chain-code" dir="ltr">
          <span>
            <code>{riwayah.rawi}</code>
            <small>{ar ? 'الراوي' : 'the rawi'}</small>
          </span>
          <span>
            <code>an</code>
            <small>{ar ? 'عن' : 'from'}</small>
          </span>
          <span>
            <code>{riwayah.qiraah}</code>
            <small>{ar ? 'القارئ' : 'the reader'}</small>
          </span>
        </div>
        {numbering && (
          <p>
            {ar ? `تُقرن قراءة ${reader.arabic} تقليديًا بنظام ${numbering.arabic}: ${numbering.total.toLocaleString('ar-u-nu-arab')} آية.` : `${reader.display} is conventionally paired with the ${numbering.display} ayah numbering: ${numbering.total.toLocaleString('en')} ayahs.`}
          </p>
        )}
      </div>
    </div>
  );
}
