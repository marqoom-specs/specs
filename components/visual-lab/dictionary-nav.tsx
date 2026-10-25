'use client';

import Link from 'next/link';
import { useState } from 'react';
import data from '@/lib/visual-lab-data.json';
import order from '@/content/docs/terms/dictionary/meta.json';

type Concept = (typeof data.concepts)[number];

// Names listed on a category card before the rest are counted.
const SHOWN = 7;
const HITS = 8;
const home = (ar: boolean) => `${ar ? '/ar' : ''}/docs/terms/dictionary`;
const entry = (concept: Concept, ar: boolean) => `${home(ar)}/${concept.category}#${concept.id}`;
const name = (concept: Concept, ar: boolean) => (ar ? concept.arabic || concept.display : concept.display);
// Spellings differ in case, hyphens, apostrophes and vowel marks; none of them should stop a match.
const plain = (text: string) => text.toLowerCase().normalize('NFD').replace(/[^\p{L}\p{N}]/gu, '');

// The dictionary's own reading order, not the alphabet.
const categories = order.pages
  .filter((id) => id !== 'index')
  .map((id) => ({
    ...data.categories.find((category) => category.id === id)!,
    members: data.concepts.filter((concept) => concept.category === id),
  }));
const children = (id: string) => data.concepts.filter((concept) => concept.parent === id);
const index = data.concepts.map((concept) => ({
  concept,
  // Arabic names are searched with and without the article.
  names: [concept.code, concept.display, concept.arabic ?? '', (concept.arabic ?? '').replace(/^ال/, '')].filter(Boolean).map(plain),
  spellings: concept.spellings.map((spelling) => [spelling, plain(spelling)]),
}));

export function find(query: string) {
  const wanted = plain(query);
  if (!wanted) return [];
  const rank = (text: string) => (text === wanted ? 0 : text.startsWith(wanted) ? 1 : text.includes(wanted) ? 2 : 9);
  return index
    .map(({ concept, names, spellings }) => {
      const score = Math.min(...names.map(rank));
      const spelling = spellings.find(([, text]) => rank(text) < 9);
      // A recorded spelling is named in the result, so the reader sees why the entry matched.
      return score < 9 ? { concept, score } : spelling ? { concept, score: 3, via: spelling[0] } : undefined;
    })
    .filter((hit) => hit !== undefined)
    .sort((a, b) => a.score - b.score || a.concept.code.localeCompare(b.concept.code));
}

export function TermFinder({ ar = false, initial = '' }: { ar?: boolean; initial?: string }) {
  const [query, setQuery] = useState(initial);
  const hits = find(query);
  const letter = (concept: Concept) => name(concept, ar).replace(/^ال/, '')[0].toUpperCase();
  const sorted = [...data.concepts].sort((a, b) =>
    name(a, ar).replace(/^ال/, '').localeCompare(name(b, ar).replace(/^ال/, ''), ar ? 'ar' : 'en'),
  );

  return (
    <div className="nav-find">
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={ar ? 'ابحث عن مصطلح: سورة، koran، tashkeel' : 'Find a term: sura, koran, tashkeel, الوقف'}
        aria-label={ar ? 'ابحث في القاموس' : 'Find a term in the dictionary'}
      />
      {query ? (
        <>
          <ol className="nav-hits">
            {hits.slice(0, HITS).map(({ concept, via }) => (
              <li key={concept.id}>
                <Link href={entry(concept, ar)}>
                  <span className="nav-hit-name">
                    <strong>{name(concept, ar)}</strong>
                    <code dir="ltr">{concept.code}</code>
                    <span>{ar ? categories.find(({ id }) => id === concept.category)!.titleAr : categories.find(({ id }) => id === concept.category)!.title}</span>
                  </span>
                  <span>{ar ? concept.definitionAr : concept.definition}</span>
                  {via && (
                    <span className="nav-via">
                      <code dir="ltr">{via}</code> {ar ? 'تهجئة مسجلة لـ' : 'is a recorded spelling of'} <code dir="ltr">{concept.code}</code>
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ol>
          <p className="nav-count" aria-live="polite">
            {hits.length === 0
              ? ar ? 'لا يوجد مدخل بهذا الاسم.' : 'No entry has this name.'
              : hits.length > HITS && (ar ? `و${hits.length - HITS} مدخلًا آخر` : `and ${hits.length - HITS} more entries`)}
          </p>
        </>
      ) : (
        <div className="nav-az">
          {sorted.map((concept, at) => (
            <span key={concept.id}>
              {letter(concept) !== (at ? letter(sorted[at - 1]) : '') && <b>{letter(concept)}</b>}
              <Link href={entry(concept, ar)}>{name(concept, ar)}</Link>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function CategoryShelf({ ar = false }: { ar?: boolean }) {
  return (
    <div className="nav-shelf">
      {categories.map((category) => (
        <section key={category.id}>
          <Link className="nav-shelf-title" href={`${home(ar)}/${category.id}`}>
            {ar ? category.titleAr : category.title}
            <span>{category.members.length}</span>
          </Link>
          <p>
            {category.members.slice(0, SHOWN).map((concept) => (
              <Link key={concept.id} href={entry(concept, ar)}>
                {name(concept, ar)}
              </Link>
            ))}
            {category.members.length > SHOWN && (
              <Link className="nav-more" href={`${home(ar)}/${category.id}`}>
                {ar ? `و${category.members.length - SHOWN} أخرى` : `and ${category.members.length - SHOWN} more`}
              </Link>
            )}
          </p>
        </section>
      ))}
    </div>
  );
}

function Branch({ concepts, ar }: { concepts: Concept[]; ar: boolean }) {
  return (
    <ul>
      {concepts.map((concept) => (
        <li key={concept.id}>
          <Link href={entry(concept, ar)}>{name(concept, ar)}</Link>
          {children(concept.id).length > 0 && <Branch concepts={children(concept.id)} ar={ar} />}
        </li>
      ))}
    </ul>
  );
}

// Each entry sits under the entry it is a kind of, as its `parent` field records.
export function FamilyOutline({ ar = false }: { ar?: boolean }) {
  return (
    <div className="nav-outline">
      {categories.map((category) => (
        <section key={category.id}>
          <Link className="nav-shelf-title" href={`${home(ar)}/${category.id}`}>
            {ar ? category.titleAr : category.title}
          </Link>
          <Branch concepts={category.members.filter((concept) => !concept.parent)} ar={ar} />
        </section>
      ))}
    </div>
  );
}

// For the top of a category page: every entry of the category, and the categories on either side.
export function TermStrip({ ar = false, category: id }: { ar?: boolean; category: string }) {
  const at = categories.findIndex((category) => category.id === id);
  const [previous, category, next] = [categories[at - 1], categories[at], categories[at + 1]];
  return (
    <nav className="nav-strip" aria-label={ar ? 'مداخل هذا الموضوع' : 'Entries in this category'}>
      <div className="nav-pills">
        {category.members.map((concept) => (
          <a key={concept.id} href={`#${concept.id}`}>
            {name(concept, ar)}
          </a>
        ))}
      </div>
      <div className="nav-around">
        {previous && <Link href={`${home(ar)}/${previous.id}`}>{ar ? '→' : '←'} {ar ? previous.titleAr : previous.title}</Link>}
        <Link href={`${home(ar)}#dictionary-lookup`}>{ar ? `كل المداخل، ${data.concepts.length}` : `All ${data.concepts.length} entries`}</Link>
        {next && <Link href={`${home(ar)}/${next.id}`}>{ar ? next.titleAr : next.title} {ar ? '←' : '→'}</Link>}
      </div>
    </nav>
  );
}
