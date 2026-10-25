import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { TogglesFooter } from '@/components/toggles';
import type { ReactNode } from 'react';
import type * as PageTree from 'fumadocs-core/page-tree';

// The dictionary's 19 category pages are reached from the dictionary page itself, so the sidebar
// lists the dictionary as one link instead of a long folder.
function oneDictionaryLink(nodes: PageTree.Node[]): PageTree.Node[] {
  return nodes.map((node) => {
    if (node.type !== 'folder') return node;
    const index = node.children.find((child) => child.type === 'page' && child.url.endsWith('/terms/dictionary'));
    return index ? { ...index, name: node.name } : { ...node, children: oneDictionaryLink(node.children) };
  });
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const tree = source.getPageTree(lang);
  return (
    <DocsLayout
      tree={{ ...tree, children: oneDictionaryLink(tree.children) }}
      // Fumadocs renders the footer in a list beside its own controls, so it needs a key.
      sidebar={{ footer: <TogglesFooter key="toggles" /> }}
      {...baseOptions(lang)}
    >
      {children}
    </DocsLayout>
  );
}
