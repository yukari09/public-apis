import { SITE_URL } from '../lib/data.js';

export const prerender = true;

export const GET = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\n`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
