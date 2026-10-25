import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { MarqoomHero } from '@/components/marqoom-hero';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { CountsExample, SpellingExample, TransmissionExample } from '@/components/doc-examples';
import { DictionaryCategories } from '@/components/dictionary-categories';
import { SuggestEdit, SuggestEditToggle } from '@/components/suggest-edit';
import { findNeighbour } from 'fumadocs-core/page-tree';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { terminologyVersion } from '@/lib/versions';
import '../../visual-lab/lab.css';
import './reading.css';

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { lang, slug } = await props.params;
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const MDX = page.data.body;
  const ar = lang === 'ar';
  const path = slug?.join('/') ?? '';
  const toc = path === 'terms/standard' || path === 'terms/dictionary'
    ? page.data.toc.filter((item) => item.depth === 2)
    : page.data.toc;
  // The dictionary opens with its category cards, outside the page's own headings.
  if (path === 'terms/dictionary') toc.unshift({ title: ar ? 'تصفّح حسب الموضوع' : 'Browse by category', url: '#categories', depth: 2 });
  // The sidebar shows the dictionary as one link (app/[lang]/docs/layout.tsx), so its category pages
  // take their breadcrumb and their previous and next pages from the full tree.
  const category = path.startsWith('terms/dictionary/');
  const neighbours = findNeighbour(source.getPageTree(lang), page.url);
  const prefix = ar ? '/ar' : '';
  // Every terms page carries the terminology standard's published version; entries keep their own review status.
  const version = slug?.[0] === 'terms' ? terminologyVersion : undefined;

  const intro = (
    <>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{slug?.[1] === 'dictionary' && slug[2]
        ? ar ? 'التعريفات والأسماء والحدود بين المفاهيم.' : 'Definitions, names, and the boundaries between concepts.'
        : page.data.description}</DocsDescription>
    </>
  );

  return (
    // A section's front page would only repeat its own title in the breadcrumb.
    <DocsPage
      toc={toc}
      full={page.data.full}
      breadcrumb={{
        enabled: (slug?.length ?? 0) > 1,
        component: category ? (
          <div className="flex items-center gap-1.5 text-sm text-fd-muted-foreground">
            <Link href={`${prefix}/docs/terms`} className="truncate transition-opacity hover:opacity-80">{ar ? 'المصطلحات' : 'Terms'}</Link>
            <ChevronRight className="size-3.5 shrink-0 rtl:rotate-180" aria-hidden />
            <Link href={`${prefix}/docs/terms/dictionary`} className="truncate font-medium text-fd-primary transition-opacity hover:opacity-80">{ar ? 'القاموس' : 'Dictionary'}</Link>
          </div>
        ) : undefined,
      }}
      footer={{ items: neighbours }}
    >
      <div
        key={`${lang}/${slug?.join('/') ?? ''}`}
        className="reading-content flex flex-1 flex-col gap-4"
      >
        {slug ? intro : <MarqoomHero rtl={ar}>{intro}</MarqoomHero>}
        {/* Marqoom's pages name no source: the terms are its own standards, and the tool page links its repository. */}
        {version && (
          <div className="source-note">
            <span className="status-badge">
              <bdi>{version}</bdi>
            </span>
            <SuggestEditToggle ar={ar} />
          </div>
        )}
        <DocsBody>
          {path === 'terms/dictionary' && <DictionaryCategories ar={ar} />}
          {path === 'terms/dictionary/qiraat' && <TransmissionExample ar={ar} />}
          {path === 'terms/dictionary/ayah_numbering' && <CountsExample ar={ar} />}
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source, page),
              h2: (props) => <>
                <defaultMdxComponents.h2 {...props} />
                {path === 'terms/standard' && props.id === 'section-02' && <SpellingExample ar={ar} />}
                {path === 'terms/registries' && props.id === 'ayah_counts' && <CountsExample ar={ar} />}
                {path === 'terms/registries' && props.id === 'qiraat' && <TransmissionExample ar={ar} />}
              </>,
            })}
          />
        </DocsBody>
        {/* Suggestions open an issue on Marqoom's own repository. */}
        {version && (
          <SuggestEdit
            ar={ar}
            title={page.data.title}
            page={page.url}
            file={`content/docs/${page.path}`}
            entries={category}
          />
        )}
      </div>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const ar = lang === 'ar';
  const title = `${page.data.title} | ${ar ? 'مرقوم' : 'Marqoom'}`;
  // One link-preview image per language, drawn by scripts/build-og-images.py.
  const image = {
    url: `/og/${ar ? 'ar' : 'en'}.jpeg`,
    width: 1200,
    height: 630,
    alt: ar ? 'مرقوم: معايير البيانات القرآنية' : 'Marqoom: Quranic data standards',
  };
  return {
    title,
    description: page.data.description,
    openGraph: {
      title,
      description: page.data.description,
      url: page.url,
      siteName: ar ? 'مرقوم' : 'Marqoom',
      locale: ar ? 'ar_SA' : 'en_US',
      type: 'website',
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description: page.data.description, images: [image] },
  };
}
