import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://public-apis.morio.cc',
  build: { format: 'directory' },
  compressHTML: true,
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/api/') &&
        !page.endsWith('/404/') &&
        !page.endsWith('/404'),
    }),
  ],
});
