import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import rehypeReading from './lib/rehype-reading.mjs';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: { schema: frontmatterSchema.passthrough() },
});

export default defineConfig({ mdxOptions: { rehypePlugins: [rehypeReading] } });
