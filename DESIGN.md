# CTOS Web — Design Reference

> Quick reference for designers and developers. For Claude Code instructions see `CLAUDE.md`.
> For the full interactive design system see Storybook: **http://localhost:6006**

---

## Complete Workflow

```
Figma Page 1 — "CTOS web"          ← source of design intent
  figma.com/design/MpHkBNWSBKa2wUanFty8uX
       │
       │ designer makes changes
       ▼
design-tokens.json                  ← SINGLE SOURCE OF TRUTH (edit values here)
       │
       │ STEP 1 — npm run sync (in hanafi-claude-shop)
       ▼
tokens.js + tokens.css              ← auto-generated, do not edit manually
       │
       │ STEP 2 — update Storybook stories
       │ • tokens auto-update via sync
       │ • component structure change? → update stories/*.stories.jsx
       ▼
Storybook localhost:6006            ← living component library + visual verification
       │
       │ STEP 3 — update Figma Design System page
       │ • mirror all token/component changes
       │ • target: node-id 198-2
       ▼
Figma Page 2 — "Design System"      ← always mirrors Storybook
  figma.com/design/MpHkBNWSBKa2wUanFty8uX?node-id=198-2
       │
       │ STEP 4 — Claude reads CLAUDE.md, writes code with token names
       ▼
Mismatch found in render?
  → fix in design-tokens.json → re-sync → re-verify → re-update Figma DS
```

### After each change — what to run

| What changed | Steps |
|---|---|
| Token value | `npm run sync` → check Storybook → update Figma DS page |
| New component | Add story → update Figma DS page |
| Component update | Update story → update Figma DS page |
| Font / colour change | Update `design-tokens.json` → sync → update stories → update Figma DS page |

**Rule:** If a value isn't in `design-tokens.json`, it doesn't exist. Add it there first.

---

## Colours

### Brand — Primary (teal)
| Name          | Hex       | Use                                    |
|---------------|-----------|----------------------------------------|
| Blue Lagoon   | `#007B85` | Buttons, links, icons, active states   |
| Dark Teal     | `#055157` | Button hover, dark backgrounds         |
| Cerulean      | `#0BB1BE` | Accent, gradient, focus rings          |
| Firefly       | `#102A2E` | Deep dark text, header background      |

### Brand — Accent (warm)
| Name       | Hex       | Use                              |
|------------|-----------|----------------------------------|
| Buttercup  | `#F15D22` | Orange CTAs, hover text          |
| Saffron    | `#F2B530` | Amber, gradient end              |

### Text
| Name    | Hex       | Use                        |
|---------|-----------|----------------------------|
| Dark    | `#111827` | Headings                   |
| Body    | `#374151` | Body copy                  |
| Muted   | `#6B7280` | Secondary / helper text    |
| Subtle  | `#9CA3AF` | Placeholders, captions     |
| White   | `#FFFFFF` | On teal / dark backgrounds |

### Surfaces
| Name        | Hex       | Use                           |
|-------------|-----------|-------------------------------|
| White       | `#FFFFFF` | Default surface               |
| BG Light    | `#F9FAFB` | Page / card background        |
| BG Mid      | `#F3F4F6` | Pressed / active state        |
| Teal Tint   | `rgba(0,123,133,0.08)` | Tinted icon bg   |

### Semantic
| Name    | Hex       | Use           |
|---------|-----------|---------------|
| Success | `#10B981` | Success state |
| Warning | `#F59E0B` | Warning state |
| Error   | `#EF4444` | Error state   |
| Info    | `#3B82F6` | Info state    |

---

## Typography

### Font Family
**One font only: Poppins.** All text across the entire product uses Poppins. Differentiate hierarchy through weight and size — not by switching fonts.

### Type Scale
| Role          | Size | Weight         | Line Height |
|---------------|------|----------------|-------------|
| Hero Display  | 40px | 700 Bold       | 120%        |
| Hero Sub      | 16px | 400 Regular    | 160%        |
| Section Title | 28px | 700 Bold       | 130%        |
| Card Title    | 18px | 600 SemiBold   | 130%        |
| Card Subtitle | 15px | 500 Medium     | 140%        |
| Body          | 14px | 400 Regular    | 170%        |
| Body Emphasis | 14px | 600 SemiBold   | 170%        |
| Small         | 12px | 400 Regular    | 160%        |
| Label / Tag   | 11px | 600 SemiBold   | 140%        |
| Caption       | 10px | 400 Regular    | 150%        |

---

## Spacing Scale

Base unit: **4px**

| Token    | Value | Common use                     |
|----------|-------|--------------------------------|
| space-1  | 4px   | Icon gap, tight inline padding |
| space-2  | 8px   | Button icon gap, small padding |
| space-3  | 12px  | Badge padding, input padding   |
| space-4  | 16px  | Default padding                |
| space-5  | 20px  | Button x-padding, card gap     |
| space-6  | 24px  | Section inner padding          |
| space-8  | 32px  | Card padding, grid gap         |
| space-10 | 40px  | Section vertical gap           |
| space-12 | 48px  | Large section / hero padding   |
| space-16 | 64px  | Page section gap               |
| space-20 | 80px  | Hero section gap               |

---

## Border Radius

| Token       | Value | Use                           |
|-------------|-------|-------------------------------|
| radius-sm   | 6px   | Tags, badges, chips           |
| radius-md   | 8px   | Toggle pills, inputs          |
| radius-card | 10px  | Hero buttons, input boxes     |
| radius-lg   | 12px  | Cards, panels, modals         |
| radius-xl   | 16px  | Large cards, feature blocks   |
| radius-2xl  | 20px  | Sheets, bottom panels         |
| radius-pill | 999px | CTA buttons, header buttons   |

---

## Shadows

| Token         | Use                         |
|---------------|-----------------------------|
| shadow-xs     | Subtle card lift            |
| shadow-sm     | Input field, small card     |
| shadow-md     | Card default                |
| shadow-lg     | Modal, panel, dropdown      |
| shadow-xl     | Overlay, sheet              |
| shadow-button | CTA buttons                 |
| shadow-hero   | Hero slide buttons          |
| shadow-teal   | Teal glow on button hover   |
| shadow-focus  | Keyboard focus ring         |

---

## Button Variants

| Variant     | Background          | Text          | Radius | Font                     |
|-------------|---------------------|---------------|--------|--------------------------|
| Hero        | White               | Teal → Orange | 10px   | Poppins SemiBold 14px    |
| Primary CTA | Teal → Dark Teal    | White         | Pill   | Plus Jakarta Sans XBold  |
| Header      | Dark gradient       | White         | Pill   | Plus Jakarta Sans Bold   |
| Link        | None                | Teal → Orange | —      | Manrope Bold 14px        |

---

## Breakpoints

| Name | px   | Use                          |
|------|------|------------------------------|
| sm   | 640  | Mobile landscape             |
| md   | 768  | Tablet                       |
| lg   | 1024 | Small desktop                |
| xl   | 1280 | Desktop (primary breakpoint) |
| 2xl  | 1536 | Wide / ultrawide             |

---

## Animation

### Durations
| Token   | Value | Use                        |
|---------|-------|----------------------------|
| instant | 100ms | Icon swap, opacity         |
| fast    | 150ms | Button hover, colour       |
| normal  | 300ms | Panel open, tooltip        |
| slow    | 500ms | Slide transitions          |
| slower  | 800ms | Hero animations            |

### Easing
| Token   | Curve                           | Use                    |
|---------|---------------------------------|------------------------|
| default | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard (most cases)  |
| in      | `cubic-bezier(0.4, 0, 1, 1)`   | Entering elements      |
| out     | `cubic-bezier(0, 0, 0.2, 1)`   | Exiting elements       |
| bounce  | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful / hero    |

---

## Z-Index

| Token    | Value | Use                      |
|----------|-------|--------------------------|
| base     | 0     | Default stacking         |
| raised   | 10    | Cards, sticky elements   |
| dropdown | 20    | Dropdowns, tooltips      |
| overlay  | 30    | Backdrop overlays        |
| panel    | 40    | Side panels, drawers     |
| modal    | 50    | Modals, dialogs          |
| toast    | 60    | Toast notifications      |
| max      | 9999  | Always on top            |

---

## Icon Set

16 SVG line icons · 1.8–2.2px stroke · Round caps/joins

`score` · `ccris` · `person` · `briefcase` · `scales` · `document` · `shield` · `alert` · `check` · `search` · `close` · `arrow` · `chevron` · `eye` · `phone` · `mail`

Use at **16px** (inline/label), **20px** (default), **24px** (feature icon).

---

*Last updated from `design-tokens.json` v1.0.0 · Figma: MpHkBNWSBKa2wUanFty8uX*
