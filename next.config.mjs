import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return ['', '/en', '/ar'].flatMap((locale) =>
      Object.entries({
        'quranic-vocabulary-standard': 'terms/standard',
        vocabulary: 'terms/dictionary',
        'quranic-vocab-skill': 'terms',
        'terms/sources': 'terms',
        'terms/decisions': 'terms/standard',
        'terms/naming': 'terms/standard',
      }).map(([from, to]) => ({
        source: `${locale}/docs/${from}`,
        destination: `${locale === '/ar' ? '/ar' : ''}/docs/${to}`,
        permanent: true,
      })),
    );
  },
};

export default withMDX(config);
