---
name: 免费 API 中文索引
description: A high-signal free API directory for Chinese developers, built with Tailwind CSS 4.
colors:
  ink: "#0a0b0d"
  surface: "#121417"
  raised: "#181b20"
  line: "#262b32"
  line-strong: "#3a414b"
  bone: "#f3efe7"
  muted: "#b7b7b0"
  copper: "#d29a5d"
  copper-ink: "#170d05"
  sky: "#b4d4da"
  blue: "#8fa7c4"
  coral: "#c98b7a"
  status-ok: "#9bd2aa"
  status-key: "#e2c06a"
  status-bad: "#e09292"
  prose: "#d1cfc6"
  code: "#e2dfd6"
typography:
  display:
    fontFamily: "Space Grotesk Variable, PingFang SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "clamp(42px, 6vw, 68px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Grotesk Variable, PingFang SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Space Grotesk Variable, PingFang SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  control: "10px"
  panel: "16px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  filter-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
    typography: "{typography.body}"
  filter-chip-active:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.copper-ink}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
    typography: "{typography.body}"
  export-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.copper}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
    typography: "{typography.label}"
  status-stamp:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.status-key}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
    typography: "{typography.label}"
---

# Design System: 免费 API 中文索引

## Overview

**Creative North Star: "Signal Deck"**

The index behaves like a live console for finding a usable API: one high-signal view with a real curl sample on display, a search field that owns the center, and a dense ledger of evidence below. The palette is dark and instrument-like, but it is not a terminal costume. The visual energy comes from sharp Space Grotesk lettering, one burnished copper action color, soft slate-teal links, and low-saturation category dots.

The signature move is the **live sample panel** in the masthead: the first screen proves the product by showing a runnable call from the data, not by describing it. Supporting moves are the category color dots and the copper focus/action language. Tailwind CSS 4 supplies the token layer and utilities; the components remain standard web controls.

**Key Characteristics:**
- Near-black instrument surface with one burnished copper action/selection color.
- Space Grotesk for display and working text; system Chinese fallback; mono for codes and evidence.
- Category color is a small signal (dot, active tint), never a full-page wash.
- A page-sized search deck and a real sample call lead the experience.
- Flat surfaces with hairline borders and controlled 10/16px radii.

## Colors

The palette is a warm graphite console with one burnished copper signal.

### Primary
- **Burnished Copper** (#d29a5d): primary filters, focus, copy-success, active category markers, and the small square that closes the masthead. It is the only warm fill on the page.
- **Copper Ink** (#170d05): text placed on copper.

### Secondary
- **Slate Teal** (#b4d4da): inline links and low-volume information.
- **Dust Blue** (#8fa7c4): reserved for secondary data emphasis and future data graphics.
- **Coral Clay** (#c98b7a): a small third signal for the fourth dot in the mark.

### Neutral
- **Deck Ink** (#0a0b0d): page ground.
- **Deck Surface** (#121417): search deck, sample panel, entry hover, info panel.
- **Raised Deck** (#181b20): a second neutral layer for related links and controls.
- **Hairline** (#262b32) and **Strong Hairline** (#3a414b): borders and dividers.
- **Bone** (#f3efe7): primary text.
- **Muted Signal** (#b7b7b0): secondary copy, metadata, counts, and labels.
- **Prose** (#d1cfc6): long-form reading text.
- **Code** (#e2dfd6): curl and code.

### Status
- **Sage** (#9bd2aa): usable.
- **Amber** (#e2c06a): key required.
- **Muted Red** (#e09292): unreachable or dead.

### Category Spectrum
Category dots use six muted families: copper for AI/devtools/finance, slate teal for weather/geo/transport, sage for open data/science/sports, mauve for news/media/music/fun/lifestyle, muted red for security, and slate for utilities. The dot is 6px and appears beside category names and entries; active rows tint the background at 11% of the category hue.

## Typography

**Display Font:** Space Grotesk Variable, with PingFang SC / Noto Sans CJK SC for Chinese
**Body Font:** Space Grotesk Variable with the same Chinese fallback
**Mono Font:** system ui-monospace for codes, counts, dates, and curl

**Character:** Space Grotesk gives the Latin API names and numbers a precise, contemporary instrument feel; Chinese falls back to the platform's clean sans. The mono layer is evidence, not decoration.

### Hierarchy
- **Display** (600, clamp 46–82px, 0.98): the masthead and 404 statement.
- **Page title** (600, 34–62px): category and detail headings.
- **Headline** (600, 19–24px): section headings and empty states.
- **Entry name** (600, 17–18px): API names in the ledger.
- **Body** (400, 13.5–16.5px): descriptions, prose, and controls.
- **Label** (500, 9–12px mono or tracked sans): counts, source tags, status, column labels.

## Layout

The shell is 1240px wide with 20px mobile gutters. The masthead is a two-column composition: the title and status rail on the left, a live sample panel on the right. The search deck spans the content width below it. The index is a 220px category rail plus a flexible ledger on desktop.

The ledger uses three columns: entry, quota/authentication, and status. The detail page uses a 1fr + 360px split, with the call example sticky on desktop and stacked on mobile. Category pages use a 1080px shell. 375px is the narrow test width; no viewport may scroll horizontally.

Spacing follows a 4/8 rhythm with 16–24px inside repeated rows and 32–40px between major regions.

## Elevation & Depth

Flat. There are no decorative shadows. Depth comes from surface changes (`ink` → `surface` → `raised`), 1px borders, and the sample panel's inset relationship to the masthead. Hover is a surface change, not a lift.

## Shapes

Controls use a 10px radius; panels use 16px; filters and status badges use the full pill radius because they are small state controls. The entry ledger is not a card grid: rows are separated by hairlines and only gain a border/background on hover. Buttons are either pill filters, a 10px outlined export action, or a compact copy control.

## Components

- **Masthead:** large Space Grotesk title, status rail, and a live sample panel showing a real curl from `data/apis.json`.
- **Search deck:** the primary control; search icon, large input, pill filters, and an outlined CSV export.
- **Category rail:** category dot, code, name, count. Active state uses the category hue as a 1px border and 11% background tint.
- **Entry ledger:** API name with category dot, Chinese description, quota/auth evidence, status badge. Hover raises the surface and turns the name copper.
- **Status badge:** pill with a dot, colored text, and a tinted background; text is always present.
- **Spec panel:** 16px surface panel with a two-column definition grid on desktop and one column on mobile.
- **Call example:** dark code surface with a copper copy success state; wraps long curl lines.
- **Related links:** compact two-column panels with a surface change, not a nested card grid.

## Do's and Don'ts

- Do use Burnished Copper for state and action; don't wash the page in it.
- Do use category color as a 6px signal and a low-opacity active tint.
- Do keep the search deck and sample call above the fold.
- Do keep Tailwind 4 tokens in `@theme` and use utilities or `@apply` for component styling.
- Don't add decorative gradients, glass, glow shadows, or icon libraries.
- Don't turn the entry ledger into a grid of equal cards.
- Don't remove text from status badges or rely on category color alone.
