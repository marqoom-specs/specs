// Keep the full source readable in sequence: meaning first, compact metadata after it.
const is = (node, tag) => node.type === 'element' && node.tagName === tag;
const content = (node) => node.value ?? node.children?.map(content).join('') ?? '';
const h = (tagName, properties, children) => ({ type: 'element', tagName, properties, children });
const text = (value) => ({ type: 'text', value });

// A copy of a paragraph's first sentence, keeping its code and emphasis but not its links.
function firstSentence(nodes) {
  const out = [];
  for (const node of nodes) {
    if (node.type === 'text') {
      const end = node.value.search(/[.?!؟](\s|$)/);
      if (end !== -1) return [[...out, text(node.value.slice(0, end + 1))], true];
      out.push(text(node.value));
    } else if (node.type === 'element' && node.tagName !== 'code') {
      const [children, done] = firstSentence(node.children);
      out.push(is(node, 'a') ? h('span', {}, children) : h(node.tagName, { ...node.properties }, children));
      if (done) return [out, true];
    } else out.push(structuredClone(node));
  }
  return [out, false];
}

// Every rule of the standard in one table: its number, its name and its first sentence, by section.
function ruleIndex(nodes, ar) {
  const sections = [];
  nodes.forEach((node, at) => {
    if (!is(node, 'h2') && !is(node, 'h3')) return;
    const next = nodes.slice(at + 1).find((item) => item.type === 'element');
    const gist = is(next, 'p') ? firstSentence(next.children)[0] : [];
    const title = structuredClone(node.children);
    if (is(node, 'h2')) return sections.push({ id: node.properties.id, title, gist, rules: [] });
    const number = title[0]?.type === 'text' ? title[0].value.match(/^(\d{3})\.\s*/) : null;
    if (number) title[0] = text(title[0].value.slice(number[0].length));
    sections.at(-1).rules.push({ id: node.properties.id, number: number?.[1] ?? '', title, gist });
  });
  return [
    h('h2', { id: 'rules' }, [text(ar ? 'القواعد باختصار' : 'The rules at a glance')]),
    h('p', {}, [text(ar
      ? 'كل قواعد المعيار في جدول واحد وبترتيبها. الملخص هو الجملة الأولى من القاعدة، واختر القاعدة لتقرأها كاملة مع أمثلتها.'
      : "Every rule of the standard in one table, in order. Each summary is the rule's first sentence; select a rule to read it in full with its examples.")]),
    h('table', { className: ['rule-index'] }, [
      h('thead', {}, [h('tr', {}, (ar ? ['رقم', 'القاعدة', 'باختصار'] : ['No.', 'Rule', 'In short'])
        .map((label) => h('th', { scope: 'col' }, [text(label)])))]),
      ...sections.map((section) => h('tbody', {}, [
        h('tr', { className: ['rule-index-section'] }, [h('th', { colSpan: 3, scope: 'rowgroup' }, [
          h('a', { href: `#${section.id}` }, section.title),
          ...(section.rules.length ? [] : [h('span', {}, section.gist)]),
        ])]),
        ...section.rules.map((rule) => h('tr', {}, [
          h('td', {}, [text(rule.number)]),
          h('th', { scope: 'row' }, [h('a', { href: `#${rule.id}` }, rule.title)]),
          h('td', {}, rule.gist),
        ])),
      ])),
    ]),
  ];
}

export default function rehypeReading() {
  return (tree, file) => {
    const path = String(file.path).replaceAll('\\', '/');
    if (!/\/content\/docs\/(ar\/)?terms\/.+\.md$/.test(path)) return;
    const category = /\/dictionary\/(?!index\.md)[^/]+\.md$/.test(path);
    if (category) {
      for (let at = 0; at < tree.children.length; at++) {
        if (!is(tree.children[at], 'h3')) continue;
        let end = at + 1;
        while (end < tree.children.length && !is(tree.children[end], 'h3')) end++;
        const section = tree.children.slice(at + 1, end);
        const definition = section.findIndex((node) => is(node, 'p') && /^(Definition:|التعريف:)/.test(content(node)));
        if (definition === -1) throw new Error(`Missing definition: ${path}`);
        const [meaning] = section.splice(definition, 1);
        const purpose = section.findIndex((node) => is(node, 'p') && /^(Purpose:|الغرض:)/.test(content(node)));
        const introduction = purpose === -1 ? [meaning] : [meaning, ...section.splice(purpose, 1)];
        const table = section.find((node) => is(node, 'table'));
        if (table) table.properties.className = ['concept-fields'];
        tree.children.splice(at + 1, end - at - 1, ...introduction, ...section);
        at = end - 1;
      }
    }
    // Large source tables stay complete, with a bounded, keyboard-scrollable viewport.
    tree.children = tree.children.map((node) => {
      if (category || !is(node, 'table')) return node;
      const rows = node.children.find((child) => is(child, 'tbody'))?.children.filter((child) => is(child, 'tr')).length ?? 0;
      if (rows <= 12) return node;
      return {
        type: 'element', tagName: 'div',
        properties: { className: ['reference-table'], tabIndex: 0, role: 'region', 'aria-label': path.includes('/docs/ar/') ? `جدول مرجعي، ${rows} صفًا` : `Reference table, ${rows} rows` },
        children: [node],
      };
    });
    if (/\/terms\/standard\.md$/.test(path)) {
      tree.children.splice(tree.children.findIndex((node) => is(node, 'h2')), 0, ...ruleIndex(tree.children, path.includes('/docs/ar/')));
    }
  };
}
