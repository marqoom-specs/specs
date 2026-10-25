import type { ReactNode } from 'react';
import { ConceptMap } from '@/components/visual-lab/concept-map';
import { CategoryShelf, FamilyOutline, TermFinder, TermStrip } from '@/components/visual-lab/dictionary-nav';
import '../lab.css';
import './navigation.css';

// Temporary: ways into the dictionary, to compare before one replaces the map at the top of the page.
function Option({
  id,
  title,
  lede,
  note,
  ar,
  children,
}: {
  id: string;
  title: string;
  lede: string;
  note: string;
  ar: boolean;
  children: ReactNode;
}) {
  return (
    <section className="viz" id={id}>
      <header className="viz-head">
        <h2>{title}</h2>
        <p>{lede}</p>
      </header>
      <div className="viz-stage" dir={ar ? 'rtl' : 'ltr'} lang={ar ? 'ar' : 'en'}>
        {children}
      </div>
      <p className="viz-note">{note}</p>
    </section>
  );
}

export default async function NavigationLab(props: { params: Promise<{ lang: string }> }) {
  const ar = (await props.params).lang === 'ar';
  return (
    <main className="visual-lab" dir="ltr">
      <header className="lab-intro">
        <h1>Ways into the dictionary</h1>
        <p>
          Five entry points built from the same published data. The first four
          are candidates; the last is the map the dictionary opens with today.
        </p>
      </header>

      <Option
        id="finder"
        ar={ar}
        title="A. Find a term"
        lede="For the reader who arrives with a name. It matches the code, the display name, the Arabic and every recorded spelling."
        note="With nothing typed it is an alphabetical index of all 180 entries. It is the only option that answers “I wrote koran, what is the right name?”. It adds a text field to the page."
      >
        <TermFinder ar={ar} initial="koran" />
      </Option>

      <Option
        id="index"
        ar={ar}
        title="A, at rest"
        lede="The same component before anything is typed."
        note="Every entry is one click away and the page can be scanned or searched with the browser's own find."
      >
        <TermFinder ar={ar} />
      </Option>

      <Option
        id="shelf"
        ar={ar}
        title="B. Categories as a shelf"
        lede="For the reader who knows the subject but not the name. Nineteen categories in the dictionary's reading order, each with its first entries."
        note="No interaction to learn, and it works without scripts. Large categories (44 marks, 26 tajwid entries) show only their first seven names."
      >
        <CategoryShelf ar={ar} />
      </Option>

      <Option
        id="outline"
        ar={ar}
        title="C. Families"
        lede="For the reader learning how the terms fit together. Each entry sits under the entry it is a kind of."
        note="Built from the parent field, which 88 entries carry. It shows that fathah is a harakah and a harakah is a mushaf mark, which no flat list does. It is the tallest option."
      >
        <FamilyOutline ar={ar} />
      </Option>

      <Option
        id="strip"
        ar={ar}
        title="D. Entries at the top of a category"
        lede="For the reader already inside a category page. Shown here for the Waqf page."
        note="It goes with any of the options above rather than replacing them. On a phone it stands in for the contents column, which is folded away there."
      >
        <TermStrip ar={ar} category="waqf" />
      </Option>

      <Option
        id="map"
        ar={ar}
        title="Today: the map"
        lede="What the dictionary opens with now."
        note="It shows the shape of the vocabulary and which entries are tied. A name cannot be found on it without moving over points one at a time."
      >
        <ConceptMap ar={ar} />
      </Option>
    </main>
  );
}
