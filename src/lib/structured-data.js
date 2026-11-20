import { SITE_URL } from './data.js';

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: new URL(item.href, SITE_URL).href,
    })),
  };
}

export function itemListJsonLd({ name, items, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: new URL(path, SITE_URL).href,
    numberOfItems: items.length,
    itemListElement: items.map((api, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: api.name,
      url: `${SITE_URL}/a/${api.slug}/`,
    })),
  };
}
