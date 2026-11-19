# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 5 static output, one global CSS file, inline client JavaScript only. No React/Vue/Svelte, no Tailwind, no runtime backend, no database, no secrets.

## Users

Chinese-speaking developers, indie builders, and technical researchers who need a public API now: to find a provider, compare free limits and authentication, copy a working curl example, and move on.

## Product Purpose

A Chinese-language index of free public APIs. It exists to make the first five minutes of API selection faster by combining a Chinese description, a free-tier note, authentication method, measured status, and a copyable example in one entry.

## Positioning

Not a translated copy of public-apis. The differentiators are concrete free-tier notes, measured endpoint status, and a curl example that can be run immediately.

## Operating Context

Visitors arrive from search, bookmarks, or a colleague's link, usually while evaluating an implementation. They scan by category, search in Chinese or English, compare authentication and quota, then open one detail page or copy its example. The site is read on both desktop and narrow mobile screens, and must remain useful with JavaScript unavailable.

## Capabilities and Constraints

- 244 API entries across 17 categories; `data/*.json` is read-only product data.
- Home search, category browsing, authentication filter, explicit-quota filter, CSV export, and JSON feeds are in scope.
- Each entry has a stable `slug`, Chinese description, free tier, authentication method, measured status, last-checked date, and curl example.
- The site is static, deployable to Cloudflare Pages with `npm ci && npm run build`.
- No user accounts, comments, admin surface, API proxy, English edition, or runtime backend.
- AdSense is present as a placeholder until a real slot ID exists.

## Brand Commitments

The site name is 免费 API 中文索引. The voice is direct, specific, and useful to Chinese developers; it avoids hype and invented claims. The current visual treatment is being replaced by this redesign and is not a durable commitment.

## Evidence on Hand

- `data/apis.json`: 244 curated entries, last checked 2026-11-18.
- `data/categories.json`: 17 categories with descriptions and counts.
- `data/sources.json`: nine source/license records.
- `data/README.md`: field definitions and data provenance.
- Working Astro site and prior implementation in `src/`.

## Product Principles

1. Make the next action obvious: search, filter, open, or copy.
2. Show the evidence behind every claim: quota source, status, and check date.
3. Keep dense information scannable without hiding content.
4. Treat Chinese and English as equal search inputs.
5. Stay useful when scripts, images, or ads fail.

## Accessibility & Inclusion

Keyboard focus must be visible on every control. Status needs text as well as color. Layout must not horizontally scroll at 375px. Reading and list content must survive JavaScript being disabled. Target WCAG AA contrast.
