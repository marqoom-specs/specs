import type { ReactNode } from 'react';
import { AyahCounts } from '@/components/visual-lab/ayah-counts';
import { ConceptMap } from '@/components/visual-lab/concept-map';
import { Spellings } from '@/components/visual-lab/spellings';
import { Transmission } from '@/components/visual-lab/transmission';
import data from '@/lib/visual-lab-data.json';
import './lab.css';

// Temporary: mockups of figures that could stand in for prose and tables in the docs.
const differing = data.counts.surahs.filter(({ counts }) => new Set(counts).size > 1).length;

function Figure({
  title,
  lede,
  note,
  children,
}: {
  title: string;
  lede: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <section className="viz">
      <header className="viz-head">
        <h2>{title}</h2>
        <p>{lede}</p>
      </header>
      <div className="viz-stage">{children}</div>
      <p className="viz-note">{note}</p>
    </section>
  );
}

export default function VisualLab() {
  return (
    <main className="visual-lab" dir="ltr">
      <header className="lab-intro">
        <h1>Show the standard instead of describing it</h1>
        <p>
          Four figures drawn from the published terminology data. Each could
          stand where a paragraph or a table stands today.
        </p>
      </header>

      <Figure
        title="Many spellings, one name"
        lede="What the standard is for, shown with the spellings it collected."
        note={`For the overview page. ${data.spellings} attested spellings resolve to ${data.concepts.length} concepts; the figure reads them from aliases.json.`}
      >
        <Spellings />
      </Figure>

      <Figure
        title="The vocabulary as a map"
        lede="Every point is a concept. Move over or tap one to see what it is tied to; click it, or tap it again, to read its entry."
        note={`For the dictionary. ${data.concepts.length} entries in ${data.categories.length} categories, joined wherever one entry lists another as related. A larger point has more ties.`}
      >
        <ConceptMap />
      </Figure>

      <Figure
        title="One text, six counts"
        lede="Why an ayah number means nothing without its numbering system."
        note={`For the ayah counts registry. ${differing} of the 114 surahs are given more than one count. Each bar is the gap between the lowest and the highest count of a surah, from ayah_counts.tsv.`}
      >
        <AyahCounts />
      </Figure>

      <Figure
        title="A riwayah is a link"
        lede="Ten readers, nineteen rawis, twenty riwayahs. The name of each riwayah is the line it draws."
        note="For the qiraat registry. Al-Duri transmits from two readers, which is why one line crosses the ring. From qiraat.tsv."
      >
        <Transmission />
      </Figure>
    </main>
  );
}
