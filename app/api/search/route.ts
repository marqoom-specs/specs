import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET, staticGET } = createFromSource(source, {
  localeMap: { en: 'english', ar: 'arabic' },
});
