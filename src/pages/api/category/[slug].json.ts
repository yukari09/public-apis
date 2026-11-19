import { apis, categories, dataGeneratedAt } from '../../../lib/data.js';

export const prerender = true;

export function getStaticPaths() {
  return categories.map((category) => ({
    params: { slug: category.slug },
  }));
}

export const GET = ({ params }) => {
  const items = apis.filter((api) => api.category === params.slug);
  const payload = {
    schema_version: 1,
    generated_at: dataGeneratedAt,
    count: items.length,
    apis: items,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
