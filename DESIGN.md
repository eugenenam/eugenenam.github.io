---
name: Eugene Nam
description: Personal site and portfolio of a Director of Product Management
colors:
  ledger-navy: "#0D1B35"
  ledger-navy-deep: "#0A1628"
  navy-surface: "#122040"
  navy-line: "#1A2D52"
  navy-accent: "#1E3A6E"
  statement-blue: "#2E5491"
  statement-blue-light: "#7AAAE8"
  focus-blue: "#4A78C4"
  statement-wash: "#EDF2FC"
  paper-white: "#FFFFFF"
  mist: "#F7F8FC"
  hairline-gray: "#E2E6F0"
  quiet-gray: "#5C6A88"
  slate-text: "#4A5568"
  status-green: "#22C55E"
  status-green-deep: "#15803D"
  night-text: "#EEF2FA"
  night-secondary: "#A0B3D0"
  night-muted: "#8296BB"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.8rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.8
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.93rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  mono:
    fontFamily: "SF Mono, Courier New, Courier, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "8px"
  md: "12px"
  full: "9999px"
spacing:
  gutter: "24px"
  grid-gap: "24px"
  card: "32px"
  card-compact: "28px"
  section-header: "52px"
  section-cta: "48px"
  section: "clamp(60px, 8vw, 100px)"
components:
  button-primary:
    backgroundColor: "{colors.ledger-navy}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ledger-navy}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.statement-wash}"
    textColor: "{colors.ledger-navy}"
  card:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  tool-tag:
    backgroundColor: "{colors.statement-wash}"
    textColor: "{colors.statement-blue}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  status-badge:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.slate-text}"
    rounded: "{rounded.full}"
    padding: "7px 14px"
  nav:
    backgroundColor: "rgba(255, 255, 255, 0.9)"
    textColor: "{colors.slate-text}"
    height: "64px"
---

# Design System: Eugene Nam

## Overview

**Creative North Star: "The Trusted Ledger"**

The site borrows its calm from a well-kept ledger: navy ink on clean paper, columns that line up, nothing out of place. That steadiness comes from Eugene's banking and fintech career, but the execution is clean, modern, and approachable rather than formal. Generous whitespace, one sans-serif family, soft corners, and gentle lift on cards make it feel like a contemporary product site that also happens to be trustworthy.

Color is almost entirely navy and cool gray. A single brighter blue marks links, tags, and the timeline, and a single green signals that something is live. Sections alternate between white and a faint cool tint, so the page reads as a sequence of clear entries rather than one long wall. Personality lives in small details, such as the pulsing availability dot, the role-progression pill, and a hidden terminal for the curious.

Light and dark themes are both first-class. Dark mode is a deep navy night, not a gray inversion, and every accent has a lighter twin for it.

**Key Characteristics:**
- Navy and cool-gray palette with one accent blue and one status green
- Inter throughout, heavy and tightly tracked at display sizes
- Soft 8px and 12px corners, full pills for small labels
- Cards rest on soft navy-tinted shadows and lift 2px on hover
- Alternating white and mist section bands
- Paired light and dark themes defined as semantic variables

## Colors

A restrained navy ledger palette: deep ink for text and actions, cool grays for structure, and one blue that points the eye.

### Primary
- **Ledger Navy** (ledger-navy): primary text color in light mode and the fill of the solid button. It is the "ink" of the system.
- **Ledger Navy Deep** (ledger-navy-deep): page background in dark mode and the tint behind all shadows.
- **Navy Accent** (navy-accent): semantic accent in light mode and the solid button fill in dark mode.

### Secondary
- **Statement Blue** (statement-blue): links, tool tags, the role-progression pill, and timeline dots in light mode. Used for wayfinding, never for large fills.
- **Statement Blue Light** (statement-blue-light): the dark-mode twin of Statement Blue, also the outline button border and text in dark mode.
- **Focus Blue** (focus-blue): the focus ring outline in both themes.
- **Statement Wash** (statement-wash): pale fill behind tags, the progression pill, outline-button hover, and theme-toggle hover in light mode.

### Tertiary
- **Status Green** (status-green): the availability dot in both themes, and project status labels in dark mode. It means "live" or "in progress" and nothing else.
- **Status Green Deep** (status-green-deep): project status labels in light mode, where the brighter green is too faint to read on white.

### Neutral
- **Paper White** (paper-white): main background and card surface in light mode.
- **Mist** (mist): alternate section background (About, Projects, Contact) in light mode.
- **Hairline Gray** (hairline-gray): borders, dividers, the timeline rail, and the hero dot grid.
- **Quiet Gray** (quiet-gray): muted text such as dates, "formerly" notes, and the footer. Dark enough to pass 4.5:1 on Mist.
- **Slate Text** (slate-text): secondary body text, nav links, and descriptions.
- **Navy Surface / Navy Line** (navy-surface, navy-line): card surface and border in dark mode.
- **Night Text / Night Secondary / Night Muted** (night-text, night-secondary, night-muted): the dark-mode text ladder.

### Named Rules
**The One Ink Rule.** Text is Ledger Navy or a gray from the neutral ladder. Statement Blue is for links, tags, and small markers only; never set paragraphs in it.

**The Green Means Live Rule.** Status Green appears only on status indicators. It is not a brand accent and never fills a button or background.

**The Paired Theme Rule.** Every new color is defined as a semantic variable with both a light value and a `[data-theme="dark"]` value. Hard-coded accent hex in a component needs a matching dark override.

## Typography

**Display Font:** Inter (with -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif)
**Body Font:** Inter
**Label/Mono Font:** SF Mono (with Courier New), used only inside the terminal easter egg

**Character:** One family carries everything. Weight and tracking do the work: very heavy and tight at the top, relaxed and airy in body copy.

### Hierarchy
- **Display** (800, clamp 2.8rem to 4.5rem, 1.1): the name in the hero only.
- **Headline** (700, clamp 1.8rem to 2.8rem, 1.2): section titles. The contact headline scales larger (clamp 2rem to 3.5rem).
- **Title** (600, 1.15rem, 1.3): card titles. Company names in the timeline use 700 at 1.1rem.
- **Body Large** (400, 1.05rem, 1.8): About paragraphs and section descriptions, capped near 560px for descriptions.
- **Body** (400, 1rem, 1.7): default paragraphs.
- **Body Small** (400, 0.86rem to 0.93rem, 1.65): card descriptions, timeline bullets, post excerpts.
- **Label** (700, 0.72rem, 0.1em, uppercase): project status on cards only. Dates use 600 at 0.75rem to 0.78rem with 0.04em tracking, not uppercase.

### Named Rules
**The Heading Stands Alone Rule.** Sections open directly with their headline. No small uppercase label or kicker sits above a heading; if the words matter, work them into the heading or the description below it.

**The Tight Top Rule.** Negative letter-spacing applies only at display and headline sizes. Body and small text keep normal tracking.

## Layout

A single centered column with a 1080px max width and 24px side gutters. Sections are separated by fluid vertical padding (clamp 60px to 100px) and alternate between Paper White and Mist backgrounds. Section headers sit 52px above content, and trailing calls to action sit 48px below.

The hero fills the viewport (100svh) with a two-column grid (text and circular headshot, 64px gap) over a faint 28px dot grid. Projects use a two-column card grid and writing uses a three-column grid, both with 24px gaps. Experience is a vertical timeline with a 2px rail, 32px indent, and 52px between entries.

Breakpoints: at 900px and below, nav links collapse into a hamburger menu, the hero stacks and centers with the photo first (200px), and all card grids drop to one column. At 600px and below, the headshot shrinks to 160px.

## Elevation & Depth

Soft lift. Cards, the status badge, and the headshot rest on soft shadows tinted with Ledger Navy Deep, so depth feels cool rather than gray. Interactive cards lift 2px and move to the larger shadow on hover. The fixed nav is a frosted layer (blur 12px) that gains a hairline border and small shadow once the page scrolls. In dark mode the same three steps use pure black at higher opacity.

### Shadow Vocabulary
- **Resting Hairline** (`0 1px 3px rgba(10, 22, 40, 0.08)`): status badge and scrolled nav.
- **Card Rest** (`0 2px 8px rgba(10, 22, 40, 0.10), 0 1px 3px rgba(10, 22, 40, 0.06)`): project and post cards at rest, mobile menu.
- **Card Lift** (`0 8px 32px rgba(10, 22, 40, 0.14)`): card hover and the hero headshot.

### Named Rules
**The Two-Pixel Lift Rule.** Hover lift is 1px for buttons and 2px for cards, never more. Lift always pairs with a shadow step, not a color change alone.

## Shapes

Gently rounded everywhere. Buttons, the theme toggle, and the hamburger use 8px corners; cards, skeletons, and the terminal window use 12px; small labels (status badge, tool tags, progression pill) are full pills. The headshot and timeline dots are perfect circles. Borders are 1px hairlines, except the outline button (1.5px) and the timeline rail (2px).

## Components

### Buttons
Friendly and dependable: soft corners, clear contrast, a small lift on hover.
- **Shape:** gently rounded (8px).
- **Primary:** solid Ledger Navy with white text, 600 weight at 0.9rem, 12px by 24px padding. In dark mode the fill becomes Navy Accent.
- **Hover / Focus:** primary fades to 85% opacity and lifts 1px; outline fills with Statement Wash and lifts 1px. Focus shows a 2px Focus Blue outline offset 3px.
- **Outline:** transparent with a 1.5px Ledger Navy border and navy text (Statement Blue Light in dark mode). Used for secondary actions and "see more on LinkedIn/Medium" links, often with a trailing ↗.

### Chips
- **Tool tag:** pill with Statement Wash fill and Statement Blue text, 600 weight at 0.75rem.
- **Role progression pill:** the same treatment with 0.02em tracking, used to show a promotion path (PM → Senior PM → Director).
- **Status badge:** white pill with hairline border and resting shadow, led by a pulsing green dot. Used once, in the hero.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Paper White (Navy Surface in dark mode).
- **Shadow Strategy:** Card Rest, lifting to Card Lift on hover (see Elevation & Depth).
- **Border:** 1px Hairline Gray (Navy Line in dark mode).
- **Internal Padding:** 32px for project cards, 28px for post cards. Content stacks vertically: status label, title, description, tags, then a Statement Blue text link.

### Navigation
Fixed 64px bar, frosted white (90% opacity, 12px blur). "EN" monogram at left in 700 weight. Links are 500 weight at 0.875rem in Slate Text, turning Ledger Navy on hover or when active. Theme toggle and hamburger are 36px square icon buttons with Statement Wash hover. Below 900px, links move to a full-width dropdown with hairline dividers.

### Timeline
Vertical experience list on a 2px Hairline Gray rail. Each entry has a small Statement Blue dot, a muted date, company name, role line, optional progression pill, and short bullets marked with a small 4px Quiet Gray dot. Date ranges use an en dash (2018–Present).

### Terminal (signature)
A hidden easter egg styled as a dark code-editor terminal: near-black window (#0D1117) with a #161B22 title bar, macOS window dots, SF Mono at 13px, and green prompt text. It deliberately sits outside the navy palette, because it should feel like stepping behind the scenes.

## Do's and Don'ts

### Do:
- **Do** define every new color as a semantic variable on `:root` with a matching `[data-theme="dark"]` value.
- **Do** open each section with its headline alone, optionally followed by a one-line description.
- **Do** keep cards at 12px corners with a hairline border and Card Rest shadow, lifting 2px on hover.
- **Do** use Inter only; express hierarchy through weight and tracking.
- **Do** alternate Paper White and Mist backgrounds between sections.

### Don't:
- **Don't** introduce a second accent hue; Statement Blue and Status Green are the only colors outside navy and gray.
- **Don't** use Status Green for small text on a light background; it fails contrast (about 2.3:1). Use Status Green Deep for light-mode status text.
- **Don't** go lighter than Quiet Gray for any readable text; every text color must pass 4.5:1 on its background in both themes.
- **Don't** set body text in Statement Blue or fill large areas with it.
- **Don't** lift elements more than 2px or use shadows heavier than Card Lift outside the terminal.
- **Don't** bring the terminal's code-editor colors into the main page.
