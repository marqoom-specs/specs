import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { CountsFigure, DictionaryExample, IntegrationFigure, NetworkFigure, SpellingExample, SpellingsFigure, TransmissionExample } from './doc-examples';
import { JoinCta } from './join-cta';
import { ToolCta } from './tool-cta';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    SpellingExample,
    SpellingsFigure,
    DictionaryExample,
    CountsFigure,
    TransmissionExample,
    IntegrationFigure,
    NetworkFigure,
    JoinCta,
    ToolCta,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
