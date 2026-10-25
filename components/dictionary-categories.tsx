import Link from 'next/link';
import data from '@/lib/visual-lab-data.json';
import meta from '@/content/docs/terms/dictionary/meta.json';

// Terms named on each card before the rest are left to its page.
const SHOWN = 4;

// As on the map, the best-connected concepts come first.
const ties = new Map(data.concepts.map((concept) => [concept.id, new Set<string>()]));
for (const concept of data.concepts) {
  for (const other of concept.related) {
    ties.get(concept.id)!.add(other);
    ties.get(other)!.add(concept.id);
  }
}

// The categories in the dictionary's own order.
const categories = meta.pages
  .filter((id) => id !== 'index')
  .map((id) => ({
    ...data.categories.find((category) => category.id === id)!,
    members: data.concepts
      .filter((concept) => concept.category === id)
      .sort((a, b) => ties.get(b.id)!.size - ties.get(a.id)!.size),
  }));

/** The dictionary page's way in: one card per category, each opening its page. */
export function DictionaryCategories({ ar = false }: { ar?: boolean }) {
  const count = (value: number) => value.toLocaleString(ar ? 'ar-u-nu-arab' : 'en');
  const name = (concept: (typeof data.concepts)[number]) => (ar ? concept.arabic || concept.display : concept.display);
  return (
    <>
      <h2 id="categories">{ar ? 'تصفّح حسب الموضوع' : 'Browse by category'}</h2>
      <p>
        {ar
          ? `${count(data.concepts.length)} مصطلحًا في ${count(categories.length)} موضوعًا. كل بطاقة تفتح صفحة الموضوع بمداخله كاملة، وللبحث عن مصطلح بعينه استخدم البحث في أعلى الموقع.`
          : `${data.concepts.length} terms in ${categories.length} categories. Each card opens the category's page with all its entries; to find one term, use the search at the top of the site.`}
      </p>
      <div className="category-cards not-prose">
        {categories.map((category) => (
          <Link key={category.id} href={`${ar ? '/ar' : ''}/docs/terms/dictionary/${category.id}`}>
            <strong>
              {ar ? category.titleAr : category.title}
              <span>{count(category.members.length)}</span>
            </strong>
            <span>
              {category.members.slice(0, SHOWN).map(name).join(ar ? '، ' : ', ')}
              {category.members.length > SHOWN && '…'}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
