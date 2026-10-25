import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteUrl } from '@/lib/site';

// Every page in both languages.
export default function sitemap(): MetadataRoute.Sitemap {
  return ['en', 'ar'].flatMap((lang) => source.getPages(lang).map((page) => ({ url: `${siteUrl}${page.url}` })));
}
