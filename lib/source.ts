import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import { BookOpenText, Wrench } from 'lucide-react';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    transformers: [
      {
        folder(node, folderPath) {
          const Icon =
            folderPath === 'terms'
              ? BookOpenText
              : folderPath === 'tools'
                ? Wrench
                : undefined;
          return {
            ...node,
            icon:
              Icon &&
              createElement(Icon, {
                'aria-hidden': true,
                className: 'section-icon',
                size: 16,
                strokeWidth: 1.5,
              }),
          };
        },
      },
    ],
  },
  i18n: {
    languages: ['en', 'ar'],
    defaultLanguage: 'en',
    parser: 'dir',
    hideLocale: 'default-locale',
  },
});
