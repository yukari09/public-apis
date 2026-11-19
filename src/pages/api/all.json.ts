import { apis, dataGeneratedAt } from '../../lib/data.js';

export const prerender = true;

export const GET = () => {
  const payload = {
    schema_version: 1,
    generated_at: dataGeneratedAt,
    count: apis.length,
    apis,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
