import Image from 'next/image';
import Link from 'next/link';
import { SurveyButton } from './visitor-survey';

const projects = [
  { id: 'munajjam', name: 'Munajjam', nameAr: 'مُنجّم' },
  { id: 'quran-ws', name: 'Quran.ws', nameAr: 'Quran.ws' },
  { id: 'mp3quran', name: 'MP3 Quran', nameAr: 'MP3 Quran' },
];

// The open place after the project cards: dashed, like a standard that is not built yet,
// with the projects' logos and an empty seat for the reader's. Its main button opens the visitor questions.
export function JoinCta({ ar = false }: { ar?: boolean }) {
  return <aside className="join-cta not-prose">
    <div className="join-cta-slots" aria-hidden="true">
      {projects.map((project) => <Image key={project.id} src={`/projects/logos/${project.id}.png`} alt="" width={32} height={32} title={ar ? project.nameAr : project.name} />)}
      <span className="join-cta-open">+</span>
    </div>
    <div className="join-cta-copy">
      <strong>{ar ? 'تعمل على مشروع قرآني؟' : 'Working on a Quran project?'}</strong>
      <p>{ar
        ? 'هذه المشاريع تستخدم الأسماء نفسها. إذا استخدمتها في مشروعك، فستأخذ من بياناتهم وتشاركهم بياناتك دون محوّلات.'
        : 'These projects use the same names. Use them in your project, and you can take their data and share yours without adapters.'}</p>
    </div>
    <div className="join-cta-actions">
      <SurveyButton>{ar ? 'حدّثنا عن مشروعك' : 'Tell us about your project'}</SurveyButton>
      <Link href={`${ar ? '/ar' : ''}/docs/terms#use`}>{ar ? 'ابدأ بالمصطلحات' : 'Start with the terminology'}</Link>
    </div>
  </aside>;
}
