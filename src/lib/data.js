import apis from '../../data/apis.json';
import categories from '../../data/categories.json';
import sources from '../../data/sources.json';

export { apis, categories, sources };

export const SITE_URL = 'https://public-apis.morio.cc';
export const GITHUB_URL = 'https://github.com/yukari09/public-apis';
export const CONTACT_EMAIL = 'hello@morio.cc';

export const AUTH_LABEL = {
  none: '无需认证',
  api_key: '需要 API Key',
  oauth: 'OAuth 授权',
  other: '其他认证',
};

export const STATUS = {
  ok: { label: '可用', cls: 'ok' },
  key_required: { label: '需要 Key', cls: 'key' },
  unreachable: { label: '暂不可达', cls: 'bad' },
  dead: { label: '已失效', cls: 'bad' },
};

export const LIMIT_SOURCE_LABEL = {
  manual: '人工核实',
  scraped: '官网摘录',
  none: '未标注',
};

export const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
export const apiBySlug = new Map(apis.map((api) => [api.slug, api]));

export const stats = {
  total: apis.length,
  ok: apis.filter((api) => api.status === 'ok').length,
  keyRequired: apis.filter((api) => api.status === 'key_required').length,
  unreachable: apis.filter((api) => api.status === 'unreachable').length,
  dead: apis.filter((api) => api.status === 'dead').length,
  authNone: apis.filter((api) => api.auth === 'none').length,
  authKey: apis.filter((api) => api.auth !== 'none').length,
  categories: categories.length,
  lastChecked: apis.reduce(
    (latest, api) => (api.checked_at > latest ? api.checked_at : latest),
    '',
  ),
};

export const dataGeneratedAt = `${stats.lastChecked}T00:00:00Z`;

export function getCategory(slug) {
  return categoryBySlug.get(slug);
}

export function getApi(slug) {
  return apiBySlug.get(slug);
}

export function categoryApis(slug) {
  return apis.filter((api) => api.category === slug);
}

export function statusOf(api) {
  return STATUS[api.status] ?? { label: '未知', cls: 'unknown' };
}

export function authLabel(api) {
  return AUTH_LABEL[api.auth] ?? '其他认证';
}

export function limitSourceLabel(api) {
  return LIMIT_SOURCE_LABEL[api.limit_source] ?? '未标注';
}

export function hasQuota(api) {
  return /\d/.test(api.free_tier) && !api.free_tier.startsWith('按量付费');
}

export function searchText(api) {
  const category = getCategory(api.category);
  return [
    api.name,
    api.description_zh,
    api.tags.join(' '),
    category?.name ?? '',
    category?.slug ?? '',
  ]
    .join(' ')
    .toLowerCase();
}

export function categoryIntro(category, items = categoryApis(category.slug)) {
  const ok = items.filter((api) => api.status === 'ok').length;
  const key = items.filter((api) => api.status === 'key_required').length;
  const examples = items
    .slice()
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 3)
    .map((api) => api.name)
    .join('、');

  return `${category.description}本分类共收录 ${items.length} 个免费接口，${ok} 个可直接调用、${key} 个需要 Key。包括 ${examples} 等。每条附中文说明、额度、认证、实测状态和 curl 示例。`;
}

export function relatedApis(api, limit = 4) {
  return apis
    .filter((item) => item.category === api.category && item.slug !== api.slug)
    .sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) ||
        Number(b.status === 'ok') - Number(a.status === 'ok') ||
        a.name.localeCompare(b.name, 'en'),
    )
    .slice(0, limit);
}

export function adjacentCategories(slug) {
  const index = categories.findIndex((category) => category.slug === slug);
  if (index < 0) return [];
  const previous = categories[(index - 1 + categories.length) % categories.length];
  const next = categories[(index + 1) % categories.length];
  return [previous, next];
}

export function popularCategories(limit = 3) {
  return categories
    .slice()
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'zh-CN'))
    .slice(0, limit);
}
