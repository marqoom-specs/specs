import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import { remarkHeading } from 'fumadocs-core/mdx-plugins';
import rehypeReading from '../lib/rehype-reading.mjs';

const root = resolve(import.meta.dirname, '..');
const processor = unified().use(remarkParse).use(remarkGfm).use(remarkHeading).use(remarkRehype, { allowDangerousHtml: true });
const walk = (node) => [node, ...(node.children?.flatMap(walk) ?? [])];
const is = (node, tag) => node.type === 'element' && node.tagName === tag;
const content = (node) => node.value ?? node.children?.map(content).join('') ?? '';
let pages = 0;
for (const locale of ['', 'ar/']) {
  const dir = resolve(root, `content/docs/${locale}terms`);
  const paths = [
    ...(await readdir(dir)).filter((file) => file.endsWith('.md')).map((file) => resolve(dir, file)),
    ...(await readdir(resolve(dir, 'dictionary'))).filter((file) => file.endsWith('.md')).map((file) => resolve(dir, 'dictionary', file)),
  ];
  for (const path of paths) {
    const source = (await readFile(path, 'utf8')).replace(/^---\n[\s\S]*?\n---\n/, '');
    const tree = await processor.run(processor.parse(source));
    const original = walk(tree);
    const leaves = original.filter((node) => 'value' in node);
    const headings = original.filter((node) => is(node, 'h2') || is(node, 'h3'));
    rehypeReading()(tree, { path });
    const after = walk(tree);
    // Every original word, link, code sample and heading survives exactly once.
    for (const node of [...leaves, ...headings, ...original.filter((node) => is(node, 'a'))]) {
      assert.equal(after.filter((item) => item === node).length, 1, `${path}: lost or repeated ${content(node).slice(0, 60)}`);
    }
    if (path.includes('/dictionary/') && !path.endsWith('/index.md')) {
      for (const heading of headings) {
        const at = tree.children.indexOf(heading);
        assert.match(content(tree.children[at + 1]), /^(Definition:|التعريف:)/, path);
        assert.ok(walk(tree).some((node) => is(node, 'table') && node.properties.className?.includes('concept-fields')), path);
      }
    }
    if (path.endsWith('/standard.md')) assert.equal(headings.filter((node) => String(node.properties.id).startsWith('rule-')).length, 73);
    assert.ok(!after.some((node) => is(node, 'details')), `${path}: reading should not require expanding sections`);
    pages++;
  }
}
const data = JSON.parse(await readFile(resolve(root, 'lib/visual-lab-data.json'), 'utf8'));
for (const id of ['surah', 'ayah', 'word', 'ayah_mark', 'ayah_numbering_system']) assert.ok(data.concepts.some((concept) => concept.id === id), id);
for (const concept of data.concepts) {
  assert.ok(concept.code && concept.definition && concept.definitionAr, concept.id);
  for (const id of concept.related) assert.ok(data.concepts.some((other) => other.id === id), id);
}
assert.ok(data.categories.every((category) => category.titleAr));
assert.deepEqual(data.counts.surahs[1].counts, [285, 285, 285, 286, 287, 285]);
assert.equal(data.qiraat.riwayah.filter((item) => item.rawi === 'duri').length, 2);
console.log(`Verified presentation preserves every source node in ${pages} pages, all 73 rules per language, and the examples’ concept references.`);
