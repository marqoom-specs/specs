'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Spellings } from './visual-lab/spellings';
import { AyahCounts } from './visual-lab/ayah-counts';
import { Transmission } from './visual-lab/transmission';
import { ConceptMap } from './visual-lab/concept-map';
import data from '@/lib/visual-lab-data.json';

const differing = data.counts.surahs.filter(({ counts }) => new Set(counts).size > 1).length;

function Figure({ caption, children }: { caption: string; children: ReactNode }) {
  const figure = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = figure.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      element.dataset.entered = 'true';
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <figure ref={figure} className="doc-figure not-prose">{children}<figcaption>{caption}</figcaption></figure>;
}

export function SpellingExample({ ar = false }: { ar?: boolean }) {
  return <Figure caption={ar ? 'تهجئات متعددة تشير إلى المفهوم نفسه. استخدم surah في الكود.' : 'Different spellings, the same concept. Use surah in code.'}>
    <Spellings inline ar={ar} />
  </Figure>;
}

// The full, interactive lab figures, for the terminology overview.
export function SpellingsFigure({ ar = false }: { ar?: boolean }) {
  return <Figure caption={ar ? `جمعنا ${data.spellings.toLocaleString('ar-u-nu-arab')} تهجئة، وتعود كلها إلى ${data.concepts.length.toLocaleString('ar-u-nu-arab')} اسمًا.` : `We collected ${data.spellings} spellings, and they all point to ${data.concepts.length} names.`}>
    <Spellings ar={ar} />
  </Figure>;
}

export function CountsFigure({ ar = false }: { ar?: boolean }) {
  return <Figure caption={ar ? `${differing.toLocaleString('ar-u-nu-arab')} سورة من ١١٤ لها أكثر من عدد. يوضح كل عمود الفرق بين أعداد السورة. مرّر على الأعمدة أو استخدم الأسهم.` : `${differing} of the 114 surahs have more than one count. Each bar shows how far apart a surah's counts are. Move across the bars, or use the arrow keys.`}>
    <div className="figure-intro">
      <strong>{ar ? 'أعداد الآيات في أنظمة العد الستة' : 'Ayah counts in the six numbering systems'}</strong>
      <p>{ar ? 'رقم الآية وحده لا يكفي، احفظ معه نظام العد.' : "An ayah number on its own isn't enough. Store its numbering system with it."}</p>
    </div>
    <AyahCounts ar={ar} />
  </Figure>;
}

export function CountsExample({ ar }: { ar: boolean }) {
  return <Figure caption={ar ? 'سورة البقرة: ٢٨٥ أو ٢٨٦ أو ٢٨٧ آية حسب نظام العدّ. احفظ نظام العدّ مع مرجع الآية.' : 'Al-Baqarah: 285, 286, or 287 ayahs, depending on the numbering system. Keep the system with the reference.'}>
    <AyahCounts inline ar={ar} />
  </Figure>;
}

export function TransmissionExample({ ar = false }: { ar?: boolean }) {
  return <Figure caption={ar ? 'الدوري يروي عن قارئين، ولذلك يعبر أحد الخطوط الدائرة.' : 'Al-Duri transmits from two readers, which is why one line crosses the ring.'}>
    <div className="figure-intro">
      <strong>{ar ? 'القراء العشرة ورواتهم' : 'The ten readers and their rawis'}</strong>
      <p>{ar ? 'كل خط في الدائرة رواية: يصل الراوي بالقارئ الذي روى عنه، ومن هنا جاء اسمها، مثلًا حفص عن عاصم.' : 'Each line is a riwayah: it joins a rawi to the reader he transmits from, which is where its name comes from, for example Hafs an Asim.'}</p>
    </div>
    <Transmission ar={ar} />
  </Figure>;
}

const projects = [
  { id: 'munajjam', name: 'Munajjam', nameAr: 'مُنجّم' },
  { id: 'quran-ws', name: 'Quran.ws', nameAr: 'Quran.ws' },
  { id: 'mp3quran', name: 'MP3 Quran', nameAr: 'MP3 Quran' },
];

// The network figure: twelve places on a ring, filled in an order that keeps the first few spread out.
const RING = [0, 6, 3, 9, 1, 7, 4, 10, 2, 8, 5, 11].map((slot) => {
  const angle = (slot / 12) * Math.PI * 2 - Math.PI / 2;
  return { x: 170 + Math.cos(angle) * 88, y: 130 + Math.sin(angle) * 88, cos: Math.cos(angle), sin: Math.sin(angle) };
});
const named = [{ id: 'you', name: 'Your project', nameAr: 'مشروعك' }, ...projects];
const FIRST = 2;
const MAX = RING.length;

// Arabic counts the noun differently by number: محوّل، محوّلان، ٣–١٠ محوّلات، ١١ فأكثر محوّلًا.
function adapters(count: number, ar: boolean) {
  if (!ar) return count === 1 ? 'adapter' : 'adapters';
  return count === 1 ? 'محوّل' : count === 2 ? 'محوّلان' : count <= 10 ? 'محوّلات' : 'محوّلًا';
}

function Ring({ count, grew, ar, standard }: { count: number; grew: boolean; ar: boolean; standard: boolean }) {
  const nodes = RING.slice(0, count);
  const newest = count - 1;
  const links = standard
    ? nodes.map((_, index) => [-1, index])
    : nodes.flatMap((_, j) => nodes.slice(0, j).map((__, i) => [i, j]));
  const point = (index: number) => (index < 0 ? { x: 170, y: 130 } : nodes[index]);
  return <svg viewBox="0 0 340 260" direction="ltr" aria-hidden="true">
    {links.map(([i, j]) => <path
      key={`${i}-${j}`}
      className={grew && j === newest ? 'net-new' : undefined}
      d={`M${point(i).x} ${point(i).y}L${point(j).x} ${point(j).y}`}
      pathLength={1}
    />)}
    {standard && <g className="net-standard">
      <rect x={136} y={118} width={68} height={24} rx={12} />
      <text x={170} y={134} textAnchor="middle">{ar ? 'المعيار' : 'Standard'}</text>
    </g>}
    {nodes.map((node, index) => {
      const item = named[index];
      return <g key={index} data-new={(grew && index === newest) || undefined}>
        <circle cx={node.x} cy={node.y} r={index === 0 ? 6 : 4.5} className={item ? `project-${item.id}` : 'net-extra'} />
        {item && <text
          x={node.x + node.cos * 13}
          y={node.y + node.sin * 13 + 4}
          textAnchor={Math.abs(node.cos) < 0.3 ? 'middle' : node.cos > 0 ? 'start' : 'end'}
        >{ar ? item.nameAr : item.name}</text>}
      </g>;
    })}
  </svg>;
}

export function NetworkFigure({ ar = false }: { ar?: boolean }) {
  const [count, setCount] = useState(named.length);
  const [grew, setGrew] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const number = (value: number) => ar ? value.toLocaleString('ar-u-nu-arab') : String(value);

  // Below the fold, the network starts with you and one project and grows to the four on this page as it comes into view.
  useEffect(() => {
    const element = stage.current;
    if (!element || matchMedia('(prefers-reduced-motion: reduce)').matches || element.getBoundingClientRect().top < innerHeight) return;
    setCount(FIRST);
    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      timer = setInterval(() => {
        setGrew(true);
        setCount((current) => {
          if (current + 1 >= named.length) clearInterval(timer);
          return Math.min(current + 1, named.length);
        });
      }, 750);
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  const without = (count * (count - 1)) / 2;
  return <Figure caption={ar
    ? 'هذا أسوأ الاحتمالات: أن يتبادل كل مشروعين البيانات. وحتى لو لم يحدث ذلك، فمشروع واحد يأخذ من ثلاثة مصادر يكتب ثلاثة محوّلات. أما مع المعيار، فيكفي كلَّ مشروع محوّلٌ واحد، ولا يحتاج إليه إن استخدم الأسماء نفسها.'
    : 'This is the worst case, where every two projects exchange data. Even without it, one project reading from three sources writes three adapters. With the standard, each project needs one adapter at most, and none if it uses the names directly.'}>
    <div className="figure-intro">
      <strong>{ar ? 'كم محوّلًا نحتاج؟' : 'How many adapters does it take?'}</strong>
      <p>{ar
        ? 'كل خط في الشكل الأول محوّل يكتبه مشروعان ليفهم أحدهما بيانات الآخر. أضف مشروعًا وانظر كم يزيد كل شكل.'
        : "Each line in the first drawing is an adapter two projects write to read each other's data. Add a project and see how much each side grows."}</p>
    </div>
    <div ref={stage} className="join-compare net">
      <div data-side="before">
        <div className="join-side"><span aria-hidden="true">−</span> {ar ? 'كلٌّ بتسمياته' : 'Each with its own names'}</div>
        <Ring count={count} grew={grew} ar={ar} standard={false} />
        <p className="net-count">
          <strong>{number(without)}</strong> {adapters(without, ar)}
          {grew && count > 1 && <em key={count}>+{number(count - 1)}</em>}
        </p>
      </div>
      <div data-side="after">
        <div className="join-side"><span aria-hidden="true">+</span> {ar ? 'بتسميات المعيار' : "With the standard's names"}</div>
        <Ring count={count} grew={grew} ar={ar} standard />
        <p className="net-count">
          <strong>{number(count)}</strong> {adapters(count, ar)} {ar ? 'على الأكثر' : 'at most'}
          {grew && <em key={count}>+{number(1)}</em>}
        </p>
      </div>
    </div>
    <div className="net-actions">
      {count < MAX
        ? <button type="button" onClick={() => { setGrew(true); setCount(count + 1); }}>+ {ar ? 'أضف مشروعًا' : 'Add a project'}</button>
        : <button type="button" onClick={() => { setGrew(false); setCount(named.length); }}>{ar ? 'ابدأ من جديد' : 'Start over'}</button>}
      <span className="sr-only" aria-live="polite">{ar
        ? `${number(count)} مشاريع: ${number(without)} ${adapters(without, true)} بلا معيار، و${number(count)} على الأكثر مع المعيار.`
        : `${count} projects: ${without} adapters without a standard, and at most ${count} with it.`}</span>
    </div>
  </Figure>;
}

type Line = [sign: '-' | '+', code: string];
const hunks: { lines: Line[]; note: ReactNode; noteAr: ReactNode; href: string; link: string; linkAr: string }[] = [
  {
    lines: [['-', '"sura": 2,'], ['-', '"aya": 255,'], ['+', '"surah_number": 2,'], ['+', '"ayah_number": 255,']],
    note: <>One name per concept: <code>sura</code> and <code>aya</code> are other spellings of <code>surah</code> and <code>ayah</code>, and <code>number</code> is the number a reader cites.</>,
    noteAr: <>اسم واحد لكل مفهوم: <code>sura</code> و<code>aya</code> تهجئتان أخريان لـ<code>surah</code> و<code>ayah</code>، و<code>number</code> للرقم الذي يذكره القارئ.</>,
    href: 'terms/standard#rule-068', link: 'Reference numbers', linkAr: 'الرقم المرجعي',
  },
  {
    lines: [['+', '"ayah_numbering_system": "kufi",']],
    note: <>An ayah number on its own isn&apos;t enough. Al-Baqarah has 285, 286, or 287 ayahs, depending on the numbering system.</>,
    noteAr: <>رقم الآية وحده لا يكفي. سورة البقرة ٢٨٥ أو ٢٨٦ أو ٢٨٧ آية بحسب نظام العد.</>,
    href: 'terms/registries#ayah_counts', link: 'Ayah counts', linkAr: 'أعداد الآيات',
  },
  {
    lines: [['-', '"rewaya": "Hafs",'], ['+', '"riwayah": "hafs_an_asim",']],
    note: <>Store the registry code, not display text. <code>Hafs</code> names a rawi; the riwayah is Hafs an Asim.</>,
    noteAr: <>احفظ الرمز من السجل، لا نص العرض. و<code>Hafs</code> اسم راوٍ، أما الرواية فهي حفص عن عاصم.</>,
    href: 'terms/registries#qiraat', link: 'Qiraat registry', linkAr: 'سجل القراءات',
  },
  {
    lines: [['-', '"timing": { … }'], ['+', '"ayah_timing": { … }']],
    note: <><code>timing</code> alone doesn&apos;t say whose timing it is, an ayah&apos;s or a word&apos;s. The dictionary separates <code>ayah_timing</code> from <code>word_timing</code>.</>,
    noteAr: <><code>timing</code> وحدها لا تقول: توقيت آية أم توقيت كلمة؟ والقاموس يفرّق بين <code>ayah_timing</code> و<code>word_timing</code>.</>,
    href: 'terms/dictionary/recitation#ayah_timing', link: 'Ayah timing', linkAr: 'توقيت الآية',
  },
];
const added = hunks.flatMap(({ lines }) => lines).filter(([sign]) => sign === '+').length;
const removed = hunks.flatMap(({ lines }) => lines).filter(([sign]) => sign === '-').length;

export function IntegrationFigure({ ar = false }: { ar?: boolean }) {
  return <Figure caption={ar ? 'يوحّد المعيار الأسماء الآن. أما صيغ النص والصوت والتوقيت فما زالت قادمة، فقد تبقى بين المشاريع فروق في البنية.' : "For now the standard settles names. Formats for text, audio, and timing are still to come, so projects may still differ in structure."}>
    <div className="figure-intro">
      <strong>{ar ? 'سجل آية واحدة، بتسمياتك وبتسميات المعيار' : "One ayah record, in your names and in the standard's"}</strong>
    </div>
    {/* The diff reads left to right in both languages, like its code; only the notes follow the page. */}
    <div className="join-diff" dir="ltr">
      <div className="join-diff-head">
        <code>ayah.json</code>
        <span><b data-sign="+">+{added}</b> <b data-sign="-">−{removed}</b></span>
      </div>
      <pre className="join-context">{' {'}</pre>
      {hunks.map((hunk) => <div key={hunk.href} className="join-hunk">
        <pre>{hunk.lines.map(([sign, code]) => <span key={code} data-sign={sign}><i>{sign === '-' ? '−' : '+'}</i>{'  '}{code}</span>)}</pre>
        <p dir={ar ? 'rtl' : undefined}>{ar ? hunk.noteAr : hunk.note} <Link href={`${ar ? '/ar' : ''}/docs/${hunk.href}`}>{ar ? hunk.linkAr : hunk.link}</Link></p>
      </div>)}
      <pre className="join-context">{' }'}</pre>
    </div>
  </Figure>;
}

export function DictionaryExample({ ar = false, intro = true }: { ar?: boolean; intro?: boolean }) {
  return <Figure caption={ar ? '١٨٠ مفهومًا في ١٩ موضوعًا. مرّر على نقطة أو المسها لترى روابطها، ثم اضغطها أو المسها مرة أخرى لقراءة المدخل. أسماء المواضيع تفتح صفحاتها.' : '180 concepts across 19 categories. Hover over or tap a point to see its connections, then click it, or tap it again, to read the entry. Category names open their pages.'}>
    {intro && <div className="figure-intro"><strong>{ar ? 'خريطة المصطلحات' : 'The vocabulary as a map'}</strong></div>}
    <ConceptMap ar={ar} />
  </Figure>;
}
