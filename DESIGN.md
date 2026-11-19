---
name: 免费 API 中文索引
description: A working index of free public APIs, designed as a night lexicon for Chinese developers.
colors:
  ink: "#090c0a"
  paper: "#0f1511"
  paper-raised: "#131b16"
  rule: "#263129"
  rule-strong: "#3a473d"
  bone: "#efe8d8"
  muted: "#a4a597"
  prose-bone: "#c4c0b2"
  code-bone: "#d7d1c2"
  seal: "#e3694a"
  seal-deep: "#1d110e"
  celadon-link: "#aac9c0"
  status-ok: "#8ac99a"
  status-key: "#dcb463"
  status-bad: "#e17a6b"
typography:
  display:
    fontFamily: "Songti SC, Noto Serif CJK SC, Source Han Serif SC, STSong, SimSun, serif"
    fontSize: "clamp(38px, 5.6vw, 64px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Songti SC, Noto Serif CJK SC, Source Han Serif SC, STSong, SimSun, serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "-apple-system, PingFang SC, Noto Sans CJK SC, Noto Sans SC, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "0.08em"
rounded:
  hairline: "1px"
  control: "2px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "44px"
components:
  seal-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.seal}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
    typography: "{typography.label}"
  seal-button-hover:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
    typography: "{typography.label}"
  entry-stamp:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.status-key}"
    rounded: "{rounded.control}"
    padding: "2px 7px"
    typography: "{typography.label}"
---

# Design System: 免费 API 中文索引

## Overview

**Creative North Star: "The Night Lexicon"**

The interface is a Chinese lexicon read after hours: warm bone type on ink-dark paper, cinnabar marks for the things that matter, and a ruled index that never stops behaving like a working tool. It borrows the authority of a dictionary and the density of a technical ledger, not the costume of a terminal. The serif carries the product's name and its entries; the sans carries the work; the mono carries measurements.

The first viewport is a title page and a work surface at once. The masthead states what the index is and who it serves, the edition strip states how much evidence is behind it, and the category rail and entry ledger are already usable below. The visual world enters through type, palette, density, and one signature move: category codes that behave like a dictionary's radical index, with every entry ending in a rectangular status stamp.

**Key Characteristics:**
- Warm bone serif against ink, with cinnabar used only for selection, action, and the index mark.
- Flat, ruled composition. No floating cards, no pill-shaped status badges, no decorative shadows.
- Dense entries that stay scannable: name, definition, quota, authentication, status.
- A working tool first; the lexicon metaphor never obscures a filter, link, or copy action.

## Colors

The palette is a dark reading room: ink and paper for the surface, bone for text, cinnabar for the seal.

### Primary
- **Cinnabar Seal** (#e3694a): the active category mark, search label, focus ring, primary outlined action, and hover accent. It marks state and action, never decoration.
- **Deep Seal Ground** (#1d110e): the low-contrast backing behind the search label. It keeps the label legible without turning it into a filled button.

### Neutral
- **Ink** (#090c0a): page ground.
- **Paper** (#0f1511): rail selection, entry hover, code button, and ad placeholder surfaces.
- **Raised Paper** (#131b16): reserved for the rare second neutral layer.
- **Rule** (#263129) and **Strong Rule** (#3a473d): 1px dividers and control borders.
- **Bone** (#efe8d8): primary text and serif headings.
- **Muted Bone** (#a4a597): supporting copy, labels, counts, and metadata. It still clears AA at small sizes.
- **Prose Bone** (#c4c0b2): long-form prose where muted text would be too dim.
- **Code Bone** (#d7d1c2): curl and inline code.
- **Celadon Link** (#aac9c0): inline links. Links also carry an underline when they sit inside prose.

### Status
- **Jade** (#8ac99a): measured as usable.
- **Amber** (#dcb463): key required.
- **Cinnabar Red** (#e17a6b): unreachable or dead.

## Typography

**Display Font:** Songti SC / Noto Serif CJK SC / Source Han Serif SC, with serif fallback  
**Body Font:** system sans with PingFang SC / Noto Sans CJK SC  
**Label/Mono Font:** ui-monospace / SFMono-Regular / Consolas

**Character:** The serif is the voice of the lexicon and the API headword. The sans is the working voice for descriptions and controls. The mono is reserved for codes, counts, dates, and curl, where exactness matters.

### Hierarchy
- **Display** (600, clamp 38–64px, 1.12): the masthead and 404 statement. One per page.
- **Headline** (600, 22px, 1.3): section headings and category titles. Headings use the serif and a single hairline below.
- **Entry name** (600, 20px, 1.3): dictionary headwords in the ledger. On mobile, 18px.
- **Body** (400, 15px, 1.65): descriptions and prose. Prose measure stays at 65–75ch.
- **Label** (500, 9.5–10.5px, tracked): category codes, column labels, source tags, stamps, and dates. Mono is information, not a mood.

## Layout

The page uses a 1180px maximum width with a 218px category rail and a 44px gutter on desktop. The masthead is full-width within the container; the index begins on a single ruled line. Entry rows use a three-column ledger: name, quota/authentication, status. The rule is the layout's main structural device.

At 900px and below the rail becomes a horizontal category strip. At 640px the ledger becomes a single column and the status stamp moves beneath the entry metadata. 375px is the narrow test width. No viewport may scroll horizontally.

Spacing follows a 4/8 rhythm: 4px inside metadata groups, 8px between labels, 16px inside list rows, 24px between columns, 36–44px between major sections.

## Elevation & Depth

Flat. There are no shadows. Depth is carried by one-pixel rules, paper-on-ink surface shifts, and typographic hierarchy. The ad placeholder is an outlined inset, not a floating card.

## Shapes

Controls and stamps use a 2px radius; rules and code surfaces use 1px. Status is a rectangular ink stamp, not a pill. Cards are not part of the vocabulary; repeated content is a ruled list. Buttons are either text filters with a 2px underline or a thin cinnabar outline.

## Components

- **Masthead:** serif title, one working sentence, then an edition strip of five ruled figures.
- **Category rail:** category code, Chinese name, count. Active state adds a 1px cinnabar left rule and paper ground.
- **Search console:** one bordered strip with a cinnabar "查词" label, search input, text filters, and CSV export.
- **Entry ledger:** one ruled row per API. Serif name, sans description, mono quota/authentication, rectangular status stamp.
- **Status stamp:** rectangular 1px outline in status color, with text. Color is never the only signal.
- **Specification grid:** two-column definition list with hairline separators; one column on mobile.
- **Code block:** ink surface, mono curl, copy control at top right; copy feedback changes to "已复制".
- **Related list:** ruled list of four entries, not a card grid.

## Do's and Don'ts

- Do use the serif for names, page titles, and section headings; it is the voice of the lexicon.
- Do keep status as text plus color, using the rectangular stamp.
- Do keep the tool usable with JavaScript disabled and at 375px.
- Do let the rules and type carry the design; empty space is part of the reading rhythm.
- Don't add cards, pill badges, gradients, glass, decorative shadows, or icon libraries.
- Don't use mono for ordinary prose or use cinnabar as a decorative wash.
- Don't let the dictionary metaphor hide a standard web affordance: links look like links, filters look like filters, and the copy button is a button.
