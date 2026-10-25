import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    // The site moved to marqoom-specs.com (lib/site.ts); links to the old address land on the same page there.
    const moved = {
      source: '/:path*',
      has: [{ type: 'host', value: 'marqoom-temp.hadeel.studio' }],
      destination: 'https://marqoom-specs.com/:path*',
      permanent: true,
    };
    return [moved, ...['', '/en', '/ar'].flatMap((locale) =>
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
    )];
  },
};

export default withMDX(config);
