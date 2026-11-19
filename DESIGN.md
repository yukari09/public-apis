---
name: 免费 API 中文索引
description: A printed-index style API directory for Chinese developers, built with Tailwind CSS 4.
colors:
  paper: "#f3f0e7"
  surface: "#fbf9f2"
  raised: "#ebe5d8"
  ink: "#11100e"
  muted: "#6c675d"
  line: "#d6cfc2"
  line-strong: "#9f9789"
  accent: "#ff4d00"
  accent-ink: "#11100e"
  code: "#12110f"
  status-ok: "#1d7a4a"
  status-key: "#9a5b00"
  status-bad: "#b3261e"
typography:
  display:
    fontFamily: "Instrument Sans Variable, PingFang SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "clamp(42px, 6vw, 68px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Instrument Sans Variable, PingFang SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument Sans Variable, PingFang SC, Noto Sans CJK SC, system-ui, sans-serif"
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
  control: "2px"
  panel: "2px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  filter-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
    typography: "{typography.body}"
  filter-chip-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
    typography: "{typography.body}"
  export-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
    typography: "{typography.label}"
  status-stamp:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "4px 10px"
    typography: "{typography.label}"
---

# Design System: 免费 API 中文索引

## Overview

**Creative North Star: "The Printed Index"**

The directory behaves like a well-produced trade catalogue: warm paper, black ink, hairline rules, a single safety-orange marker, and square records that can be scanned quickly. It is not a dashboard skin. The page uses the authority of print typography and the precision of a tabular index, while keeping the search, filters, pagination, and API cards unmistakably interactive.

The first viewport is a masthead and a specimen strip: the title in black Instrument Sans, a small orange square as the only mark, a ruled status line, and a black live-call panel. Below it, the search deck and category index lead into a two-column card grid with 20 records per page. The signature move is the contrast between the paper surface, the black specimen panel, and the orange state marker.

**Key Characteristics:**
- Warm paper ground and black ink with one safety-orange action color.
- Instrument Sans for display and working text; system Chinese fallback; mono for evidence.
- Flat, hairline composition with 2px corners and no decorative shadows.
- Twenty API cards per page in a two-column grid with explicit pagination.
- Category color is neutral; only the active category becomes an ink block with an orange dot.

## Colors

The palette is a two-ink print system: paper and black, with a single orange registration mark.

### Primary
- **Safety Orange** (#ff4d00): active filters, current page, focus, the masthead square, and the sample-panel dot.
- **Orange Ink** (#11100e): text placed on orange.

### Neutral
- **Paper** (#f3f0e7): page ground.
- **Surface** (#fbf9f2): cards, search deck, spec panel, and related links.
- **Raised** (#ebe5d8): card hover and secondary surfaces.
- **Ink** (#11100e): primary text and the category active block.
- **Muted** (#6c675d): descriptions, metadata, and secondary labels.
- **Hairline** (#d6cfc2) and **Strong Hairline** (#9f9789): dividers, borders, and control outlines.
- **Code Block** (#12110f): the live sample and curl panels.

### Status
- **Sage** (#1d7a4a): usable.
- **Ochre** (#9a5b00): key required.
- **Brick** (#b3261e): unreachable or dead.

Status color is carried by a 4px square inside a neutral stamp; the label stays ink. Category dots are neutral ink; the active category marker is orange. There is no category rainbow.

## Typography

**Display Font:** Instrument Sans Variable, with PingFang SC / Noto Sans CJK SC for Chinese
**Body Font:** Instrument Sans Variable with the same Chinese fallback
**Mono Font:** system ui-monospace for codes, counts, dates, and curl

**Character:** Instrument Sans gives the page a contemporary but neutral editorial voice; the mono layer reads as evidence, not decoration. The Chinese fallback stays plain and legible.

### Hierarchy
- **Display** (600, clamp 42–68px, 1.02): the masthead.
- **Page title** (600, 34–56px): category and detail headings.
- **Headline** (600, 19–24px): section headings and empty states.
- **Entry name** (600, 17–18px): API names in the cards.
- **Body** (400, 13.5–16px): descriptions, prose, and controls.
- **Label** (500, 9–12px mono or tracked sans): counts, source tags, status, and column labels.

## Layout

The shell is 1180px wide with 20px mobile gutters. The masthead is a two-column composition: the title and status rail on the left, a black live-call specimen on the right. The search deck spans the content width below it. The index is a 210px category rail plus a flexible content area on desktop.

The content area is a two-column card grid at 640px and above, one column on mobile. Each page shows 20 records; pagination follows the grid with previous/next and a compact page sequence. Category pages use the same grid and pagination inside a 1080px shell. The detail page uses a 1fr + 360px split, with the call example and ad in the right column on desktop. 375px is the narrow test width; no viewport may scroll horizontally.

Spacing follows a 4/8 rhythm with 16px inside cards, 12px between cards, and 32–40px between major regions.

## Elevation & Depth

Flat. There are no decorative shadows. Depth comes from paper/surface shifts, 1px rules, and the black specimen panel. Hover changes surface and border; it never lifts.

## Shapes

Controls, cards, status stamps, and pagination use a 2px radius. Filters use the full pill radius because they are small state controls. The API directory is a card grid with equal-height records and a bottom-anchored evidence footer. There are no nested cards.

## Components

- **Masthead:** black Instrument Sans title, orange square marker, ruled status line, and a black live-call panel.
- **Header:** four-square paper mark, site name, and flat nav. The directory section keeps the orange underline on `/`, `/a/`, and `/c/`.
- **Breadcrumb:** 11.5px mono, muted ancestors, current page in ink. It sits 16px below the header and never self-links.
- **Search deck:** paper surface, search icon, input, pill filters, and a black CSV action.
- **Category rail:** neutral category dots, codes, names, counts. Active state becomes an ink block with an orange dot and count.
- **API card:** name, neutral category square, description, quota/auth evidence, and a status stamp in the top-right. Hover changes surface and border.
- **Status stamp:** paper ground, strong hairline, black text, and a 4px semantic square. Text is always present.
- **Pagination:** square previous/next/page controls; current page uses safety orange with ink text.
- **Spec panel:** paper surface with a two-column definition grid on desktop and one column on mobile.
- **Call example:** black code surface with paper text; copy feedback uses the orange fill.
- **Related links:** two-column paper records with a hairline border and a surface hover.

## Do's and Don'ts

- Do keep the page paper, ink, and one orange action color.
- Do use Instrument Sans and the system Chinese fallback together.
- Do keep status text present and use the square only as a second signal.
- Do keep 20 records per page and preserve the pagination URL state.
- Don't reintroduce neon accents, multicolor category systems, or dark dashboard chrome.
- Don't turn cards into decorative tiles; each card is a working record.
- Don't let the print reference replace standard web controls.
