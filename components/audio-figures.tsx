'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react';
// The models, their pieces of information and the timing example, read back from the pages by scripts/build-audio.py.
import data from '@/lib/audio-data.json';
import { Figure } from './doc-examples';

type ModelId = 'reciter' | 'recitation' | 'audio-file' | 'timing';
const models = data.models as { id: ModelId; name: Words; question: Words; pieces: { level: string; known: boolean; label: Words }[] }[];
type Words = { en: string; ar: string };
const LEVELS: (Words & { id: string })[] = [
  { id: 'required', en: 'Required', ar: 'مطلوب' },
  { id: 'expected', en: 'Expected', ar: 'متوقع' },
  { id: 'optional', en: 'Optional', ar: 'اختياري' },
];

// One real reciter in MP3Quran v4: the same reciter and the same riwayah, in three recitations.
// `row` and `span` place a node in the wide drawing, where each model has a column; `phone` and
// `depth` place it in the narrow one, an outline, where a branch climbs `up` rows: to the node it
// hangs on when it is that node's `first`, and otherwise to the branch before it.
const tree: (Words & { key: string; model: ModelId; row: number; span?: number; phone: number; depth: number; up?: number; first?: boolean; plain?: boolean })[] = [
  { key: 'reciter', model: 'reciter', en: 'Maher Al Meaqli', ar: 'ماهر المعيقلي', row: 1, span: 5, phone: 1, depth: 0 },
  { key: 'murattal', model: 'recitation', en: 'Hafs, murattal', ar: 'حفص، مرتل', row: 1, span: 3, phone: 2, depth: 1, up: 1, first: true },
  { key: 'surah-1', model: 'audio-file', en: 'Surah 1', ar: 'السورة ١', row: 1, phone: 3, depth: 2, up: 1, first: true },
  { key: 'timing-1', model: 'timing', en: 'Ayah timing', ar: 'توقيت الآيات', row: 1, phone: 3, depth: 3 },
  { key: 'surah-2', model: 'audio-file', en: 'Surah 2', ar: 'السورة ٢', row: 2, phone: 4, depth: 2, up: 1 },
  { key: 'timing-2', model: 'timing', en: 'Ayah timing', ar: 'توقيت الآيات', row: 2, phone: 4, depth: 3 },
  { key: 'more', model: 'audio-file', en: '… and 112 more', ar: '… و١١٢ ملفًا آخر', row: 3, phone: 5, depth: 2, up: 1, plain: true },
  { key: 'muallim', model: 'recitation', en: 'Hafs, muallim', ar: 'حفص، معلم', row: 4, phone: 6, depth: 1, up: 4 },
  { key: 'muallim-files', model: 'audio-file', en: '38 surah files', ar: '٣٨ ملف سورة', row: 4, phone: 7, depth: 2, up: 1, first: true, plain: true },
  { key: 'mujawwad', model: 'recitation', en: 'Hafs, mujawwad', ar: 'حفص، مجود', row: 5, phone: 8, depth: 1, up: 2 },
  { key: 'mujawwad-files', model: 'audio-file', en: '114 surah files', ar: '١١٤ ملف سورة', row: 5, phone: 9, depth: 2, up: 1, first: true, plain: true },
];
const relations: (Words & { to: ModelId })[] = [
  { to: 'recitation', en: 'has one or more', ar: 'له واحد أو أكثر' },
  { to: 'audio-file', en: 'is published in one or more', ar: 'يُنشر في واحد أو أكثر' },
  { to: 'timing', en: 'can have', ar: 'قد يكون له' },
];
// What the example is, for each model.
const examples: Record<ModelId, Words> = {
  reciter: { en: 'Maher Al Meaqli', ar: 'ماهر المعيقلي' },
  recitation: { en: 'the murattal recitation of Maher Al Meaqli in Hafs', ar: 'تسجيل ماهر المعيقلي المرتل برواية حفص' },
  'audio-file': { en: 'surah 1 of that recitation, an mp3 file at 64 kbps', ar: 'السورة ١ من ذلك التسجيل، ملف mp3 بمعدل ٦٤ كيلوبت في الثانية' },
  timing: { en: 'the ayah timing of that file', ar: 'توقيت آيات ذلك الملف' },
};

// The lines between two columns of the wide drawing, in tenths of a rem: a row is 2.6rem, the gap
// 0.45rem, and the columns the lines cross 4.5rem and 3.5rem (reading.css).
const ROW = 26;
const GAP = 4.5;
const middle = (row: number, span = 1) => (row - 1) * (ROW + GAP) + (span * ROW + (span - 1) * GAP) / 2;
const HEIGHT = 5 * ROW + 4 * GAP;
const links: { to: ModelId; width: number; lines: [from: number, to: number, quiet?: boolean][] }[] = [
  { to: 'recitation', width: 45, lines: [[middle(1, 5), middle(1, 3)], [middle(1, 5), middle(4)], [middle(1, 5), middle(5)]] },
  { to: 'audio-file', width: 45, lines: [[middle(1, 3), middle(1)], [middle(1, 3), middle(2)], [middle(1, 3), middle(3), true], [middle(4), middle(4)], [middle(5), middle(5)]] },
  { to: 'timing', width: 35, lines: [[middle(1), middle(1)], [middle(2), middle(2)]] },
];

export function ModelsFigure({ ar = false }: { ar?: boolean }) {
  // The recitation is the model the other three hang on.
  const [active, setActive] = useState<ModelId>('recitation');
  const lang = ar ? 'ar' : 'en';
  const model = models.find((item) => item.id === active)!;
  const column = (id: ModelId) => models.findIndex((item) => item.id === id) * 2 + 1;

  return <Figure caption={ar
    ? 'قارئ واحد كما هو في MP3Quran v4: القارئ نفسه والرواية نفسها، وثلاثة تسجيلات. اختر نموذجًا لترى ما يجب أن يُعرف عنه، وما المعروف منه في مثالنا.'
    : 'One real reciter, in MP3Quran v4: the same reciter, the same riwayah, three recitations. Choose a model to see what must be known about it, and what is known in our example.'}>
    <div className="models">
      <div className="models-head">
        {models.map((item, index) => <span key={item.id} style={{ '--col': index * 2 + 1 } as CSSProperties}>
          <button
            type="button"
            aria-pressed={item.id === active}
            aria-controls="models-entry"
            onClick={() => setActive(item.id)}
            onPointerEnter={(event) => event.pointerType === 'mouse' && setActive(item.id)}
          >{item.name[lang]}</button>
          {relations[index] && <small data-on={relations[index].to === active || undefined}>{relations[index][lang]}</small>}
        </span>)}
      </div>
      <div
        className="models-tree"
        role="img"
        aria-label={ar
          ? 'ماهر المعيقلي له ثلاثة تسجيلات تلاوة برواية حفص: المرتل، منشور في ١١٤ ملف سورة، وللسورة ١ والسورة ٢ منها توقيت آيات؛ والمعلم، في ٣٨ ملف سورة؛ والمجود، في ١١٤ ملف سورة.'
          : 'Maher Al Meaqli has three recitations in Hafs: the murattal, published in 114 surah files, of which surah 1 and surah 2 each have an ayah timing; the muallim, in 38 surah files; and the mujawwad, in 114 surah files.'}
      >
        {links.map((link) => <svg
          key={link.to}
          className="models-link"
          data-on={link.to === active || undefined}
          data-optional={link.to === 'timing' || undefined}
          viewBox={`0 0 ${link.width} ${HEIGHT}`}
          style={{ '--col': column(link.to) - 1 } as CSSProperties}
          aria-hidden="true"
        >
          {link.lines.map(([from, to, quiet]) => <path
            key={`${from}-${to}`}
            data-quiet={quiet || undefined}
            d={`M0 ${from}C${link.width / 2} ${from} ${link.width / 2} ${to} ${link.width} ${to}`}
            pathLength={1}
          />)}
        </svg>)}
        {tree.map((node) => <span
          key={node.key}
          className="models-node"
          data-model={node.model}
          data-on={node.model === active || undefined}
          data-plain={node.plain || undefined}
          style={{ '--col': column(node.model), '--row': node.row, '--span': node.span ?? 1, '--phone': node.phone, '--depth': node.depth, '--up': node.up ?? 0, '--first': node.first ? 1 : 0 } as CSSProperties}
          onPointerEnter={(event) => event.pointerType === 'mouse' && setActive(node.model)}
          onClick={() => setActive(node.model)}
        ><b>{node[lang]}</b></span>)}
      </div>

      <div className="models-entry" id="models-entry">
        <div className="models-name">
          <span className="viz-arabic" lang="ar" dir="rtl">{model.name.ar}</span>
          {!ar && <strong>{model.name.en}</strong>}
          <p>{model.question[lang]}</p>
        </div>
        <dl>
          {LEVELS.map((level) => {
            const pieces = model.pieces.filter((piece) => piece.level === level.id);
            return pieces.length > 0 && <div key={level.id}>
              <dt><span className="level" data-level={level.id}>{level[lang]}</span></dt>
              <dd>{pieces.map((piece) => <span key={piece.label.en} data-known={piece.known}>
                {piece.label[lang]}
                <span className="sr-only">{piece.known ? (ar ? '، معروف' : ', known') : (ar ? '، غير معروف' : ', unknown')}</span>
              </span>)}</dd>
            </div>;
          })}
        </dl>
        <p className="models-key">
          <span>{ar ? 'في المثال، ' : 'In the example, '}{examples[active][lang]}:</span>
          <span className="models-marks">
            <span data-known="true">{ar ? 'معروف' : 'known'}</span>
            <span data-known="false">{ar ? 'غير معروف' : 'unknown'}</span>
          </span>
          <Link href={`${ar ? '/ar' : ''}/docs/audio/models#${active}`}>{ar ? 'اقرأ النموذج كاملًا' : 'Read the full model'}</Link>
        </p>
      </div>
    </div>
  </Figure>;
}

// Everything the example file holds, in order: its ayahs and the sound between them.
const total = data.file.duration_ms;
const spans: { start: number; end: number; key?: string }[] = [];
for (const entry of data.entries) {
  const last = spans.at(-1)?.end ?? 0;
  if (entry.start_ms > last) spans.push({ start: last, end: entry.start_ms });
  spans.push({ start: entry.start_ms, end: entry.end_ms, key: entry.ayah_key });
}
if (spans.at(-1)!.end < total) spans.push({ start: spans.at(-1)!.end, end: total });

export function TimingFigure({ ar = false }: { ar?: boolean }) {
  // The fourth ayah does not start where the third ended.
  const [active, setActive] = useState(() => spans.findIndex((span) => span.key === data.entries[3].ayah_key));
  const span = spans[active];
  const seconds = (ms: number) => `${(ms / 1000).toLocaleString(ar ? 'ar-u-nu-arab' : 'en', { minimumFractionDigits: 3 })} ${ar ? 'ث' : 's'}`;
  const file = `${String(data.file.surah_number).padStart(3, '0')}.mp3`;

  const point = (event: PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    const at = ((event.clientX - box.left) / box.width) * total;
    const index = spans.findIndex((item) => at < item.end);
    setActive(index === -1 ? spans.length - 1 : Math.max(0, index));
  };
  const step = (event: KeyboardEvent) => {
    const by = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
    if (!by) return;
    event.preventDefault();
    setActive((at) => Math.min(spans.length - 1, Math.max(0, at + by)));
  };
  const reading = span.key
    ? `${ar ? 'الآية' : 'Ayah'} ${span.key}`
    : (ar ? 'ليس آية: وقفة أو صمت' : 'Not an ayah: a pause or silence');

  return <Figure caption={ar
    ? 'ملف سورة مع توقيت آياته، وسبعة ملفات آيات. الفراغات في التوقيت وقفات وصمت. مرّر على التوقيت أو استخدم الأسهم.'
    : 'A surah file with an ayah timing, and seven ayah files. The gaps in the timing are pauses and silence. Move across the timing, or use the arrow keys.'}>
    <div className="figure-intro">
      <strong>{ar ? 'طريقتان لتشغيل آية واحدة' : 'Two ways to play one ayah'}</strong>
      <p>{ar ? 'النطاق هو ما يحويه الملف الواحد. والتوقيت موضع كل آية داخل ذلك الملف.' : 'The scope is what one file holds. A timing is where each ayah is inside that file.'}</p>
    </div>
    <div className="timing">
      <div>
        <p className="timing-title">{ar ? 'ملف سورة واحد، مع توقيت آياته' : 'One surah file, with an ayah timing'}</p>
        {/* Time runs left to right in both languages, as on a player. */}
        <div dir="ltr">
          <div
            className="timing-track"
            role="slider"
            tabIndex={0}
            aria-label={ar ? 'موضع في الملف' : 'Place in the file'}
            aria-valuemin={1}
            aria-valuemax={spans.length}
            aria-valuenow={active + 1}
            aria-valuetext={ar ? `${reading}، من ${seconds(span.start)} إلى ${seconds(span.end)}` : `${reading}, ${seconds(span.start)} – ${seconds(span.end)}`}
            onPointerMove={point}
            onPointerDown={point}
            onKeyDown={step}
          >
            <div className="timing-entries">
              {spans.map((item, index) => <i
                key={item.start}
                data-ayah={item.key ? '' : undefined}
                data-active={index === active ? '' : undefined}
                style={{ '--from': item.start / total, '--to': item.end / total } as CSSProperties}
              >{item.key && <b>{item.key.split(':')[1]}</b>}</i>)}
            </div>
            <div className="timing-file" style={{ '--from': span.start / total, '--to': span.end / total } as CSSProperties}><code>{file}</code></div>
          </div>
          <div className="timing-axis" aria-hidden="true"><span>{seconds(0)}</span><span>{seconds(total)}</span></div>
        </div>
        <p className="timing-read">
          <strong>{span.key ? <>{ar ? 'الآية' : 'Ayah'} <code>{span.key}</code></> : reading}</strong>
          <span>{ar ? `من ${seconds(span.start)} إلى ${seconds(span.end)}` : `${seconds(span.start)} to ${seconds(span.end)}`}</span>
        </p>
      </div>
      <div>
        <p className="timing-title">{ar ? 'سبعة ملفات آيات، بلا حاجة إلى توقيت آيات' : 'Seven ayah files, no ayah timing needed'}</p>
        <div className="timing-files" dir="ltr">
          {data.entries.map((entry) => <span key={entry.ayah_key}><code>{entry.ayah_key}</code></span>)}
        </div>
      </div>
    </div>
  </Figure>;
}

// The file name of the page, field by field, and the model each field repeats. `joined` fields follow the one before with no `_`.
type NameModel = Exclude<ModelId, 'timing'>;
const fields: (Words & { value: string; model?: NameModel; joined?: boolean })[] = [
  { value: 'QR', en: 'category', ar: 'الفئة' },
  { value: 'SC', model: 'recitation', en: 'producer', ar: 'المنتج' },
  { value: '1447', model: 'recitation', en: 'year', ar: 'السنة', joined: true },
  { value: 'ibrahim-dosari', model: 'reciter', en: 'reciter', ar: 'القارئ' },
  { value: 'As-Hf', model: 'recitation', en: 'riwayah', ar: 'الرواية' },
  { value: 'mdd', model: 'recitation', en: 'wajh', ar: 'الوجه' },
  { value: '128kbps', model: 'audio-file', en: 'bitrate', ar: 'معدل البت' },
  { value: 'FX', model: 'audio-file', en: 'effects', ar: 'المؤثرات' },
  { value: '001', model: 'audio-file', en: 'surah', ar: 'السورة' },
  { value: '.mp3', model: 'audio-file', en: 'format', ar: 'الصيغة', joined: true },
];
const nameModels = models.filter((item) => item.id !== 'timing') as (typeof models[number] & { id: NameModel })[];

export function FileNameFigure({ ar = false }: { ar?: boolean }) {
  const [active, setActive] = useState<NameModel>('recitation');
  const lang = ar ? 'ar' : 'en';
  const model = nameModels.find((item) => item.id === active)!;

  return <Figure caption={ar
    ? 'اسم ملف واحد، والنموذج الذي ينتمي إليه كل حقل. اختر نموذجًا لترى حقوله. الحقل QR لا يكرر شيئًا من النماذج.'
    : 'One file name, and the model each field belongs to. Choose a model to see its fields. QR repeats nothing in the models.'}>
    <div className="fname">
      <div className="viz-pills" role="group" aria-label={ar ? 'النماذج' : 'Models'}>
        {nameModels.map((item) => <button
          key={item.id}
          type="button"
          aria-pressed={item.id === active}
          onClick={() => setActive(item.id)}
          onPointerEnter={(event) => event.pointerType === 'mouse' && setActive(item.id)}
        >{item.name[lang]}</button>)}
      </div>
      {/* A file name reads left to right in both languages. */}
      <p className="fname-name" dir="ltr">
        {fields.map((field, index) => <span key={field.value}>
          {index > 0 && !field.joined && <i>_<wbr /></i>}
          <code
            data-on={field.model === active || undefined}
            data-none={field.model ? undefined : ''}
            onPointerEnter={(event) => event.pointerType === 'mouse' && field.model && setActive(field.model)}
            onClick={() => field.model && setActive(field.model)}
          >{field.value}</code>
        </span>)}
      </p>
      <p className="fname-read" aria-live="polite">
        <strong>{model.name[lang]}</strong>
        {fields.filter((field) => field.model === active).map((field) => <span key={field.value}>
          <code dir="ltr">{field.value}</code> {field[lang]}
        </span>)}
      </p>
    </div>
  </Figure>;
}

// Letters a reader may type differently from the registry: Arabic marks and letter forms, case, spaces and hyphens.
const fold = (text: string) => text
  .toLowerCase()
  .replace(/[ً-ٰٟـ]/g, '')
  .replace(/[أإآٱ]/g, 'ا')
  .replace(/[ىی]/g, 'ي')
  .replace(/ة/g, 'ه')
  .replace(/ک/g, 'ك')
  .replace(/[\s\-_'’.]/g, '');

// A search field over the registry's table, which stays whole in the page for readers without scripts and for the site search.
export function RegistryFilter({ ar = false, children }: { ar?: boolean; children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState(data.reciters);
  const number = (value: number) => value.toLocaleString(ar ? 'ar-u-nu-arab' : 'en');

  useEffect(() => {
    const wanted = fold(query);
    let count = 0;
    for (const row of box.current!.querySelectorAll<HTMLTableRowElement>('tbody tr')) {
      row.hidden = wanted !== '' && !fold(row.textContent ?? '').includes(wanted);
      if (!row.hidden) count++;
    }
    setShown(count);
  }, [query]);

  return <div className="registry-filter" ref={box}>
    <div className="registry-search not-prose">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={ar ? 'ابحث عن قارئ بالاسم أو بالرمز' : 'Find a reciter by name or code'}
        aria-label={ar ? 'ابحث في سجل القراء' : 'Search the reciter registry'}
        autoComplete="off"
        spellCheck={false}
      />
      <p aria-live="polite">{fold(query)
        ? shown ? (ar ? `${number(shown)} من ${number(data.reciters)}` : `${shown} of ${data.reciters}`) : (ar ? 'لا يوجد قارئ بهذا الاسم أو الرمز' : 'No reciter has this name or code')
        : (ar ? `${number(data.reciters)} قارئًا` : `${data.reciters} reciters`)}</p>
    </div>
    {children}
  </div>;
}
