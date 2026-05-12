# CTOS Web — Claude Code Instructions

## Design Token Rule (CRITICAL)
**Never use raw hex values, hardcoded font sizes, or magic numbers.**
Every colour, spacing value, radius, shadow, z-index and duration must map to a named token from `design-tokens.json`.

An invented hex value (e.g. `#3a7bd5`, `text-[13px]`, `rounded-[7px]`) is a bug.
If a token doesn't exist for what you need → add it to `design-tokens.json` first, then use it.

---

## Complete Design Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│  Figma — Page 1 "CTOS web"  (source of design intent)          │
│  figma.com/design/MpHkBNWSBKa2wUanFty8uX                       │
└────────────────────────┬────────────────────────────────────────┘
                         │  designer makes visual changes
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  design-tokens.json  (repo root)                                │
│  ← SINGLE SOURCE OF TRUTH — edit values here only              │
└──────┬──────────────────────────────────────────────────────────┘
       │
       │  STEP 1 — npm run sync  (in hanafi-claude-shop)
       ▼
┌─────────────────────────────────────────────────────────────────┐
│  hanafi-claude-shop/src/tokens.js   (auto-generated)            │
│  hanafi-claude-shop/src/tokens.css  (auto-generated)            │
└──────┬──────────────────────────────────────────────────────────┘
       │
       │  STEP 2 — update Storybook stories
       │  • tokens.js/css auto-update via sync
       │  • If component structure changes → update stories/*.stories.jsx manually
       │  • Stories must reflect the latest token names and component states
       ▼
┌─────────────────────────────────────────────────────────────────┐
│  Storybook  localhost:6006  (living component library)          │
│  • Visual verification — every colour must map to a token       │
│  • Invented hex in render = bug, fix in design-tokens.json      │
└──────┬──────────────────────────────────────────────────────────┘
       │
       │  STEP 3 — update Figma Design System page
       │  • Use mcp__figma__use_figma on file MpHkBNWSBKa2wUanFty8uX
       │  • Target page: "Design System" (node-id 198-2)
       │  • Mirror any token/component changes from steps 1–2
       │  • Keep in sync with Storybook stories
       ▼
┌─────────────────────────────────────────────────────────────────┐
│  Figma — Page 2 "Design System"                                 │
│  figma.com/design/MpHkBNWSBKa2wUanFty8uX?node-id=198-2        │
│  • Buttons · Colours · Spacing · Radius · Typography            │
│  • Input · Badge · Icons · Shadows · Animation · Z-index        │
└──────┬──────────────────────────────────────────────────────────┘
       │
       │  STEP 4 — Claude reads CLAUDE.md before writing any code
       ▼
┌─────────────────────────────────────────────────────────────────┐
│  CLAUDE.md  ←  "use token names, never raw hex"                 │
│  Claude writes code referencing token names from this file      │
└──────┬──────────────────────────────────────────────────────────┘
       │
       │  STEP 5 — verify render in Storybook
       ▼
┌─────────────────────────────────────────────────────────────────┐
│  Mismatch found?                                                │
│  → Update design-tokens.json  (not the component, not the hex) │
│  → Re-run npm run sync                                          │
│  → Re-check Storybook                                           │
│  → Re-update Figma Design System page (Step 3)                 │
└──────┬──────────────────────────────────────────────────────────┘
       │
       │  STEP 6 — push to GitHub  ⚠️ NOT automatic — must be done manually
       │  • git add <changed files>
       │  • git commit -m "feat/fix/chore: description"
       │  • If new feature → create branch + PR:
       │      git checkout -b feat/<name>
       │      git push -u origin feat/<name>
       │      open PR against main
       │  • If small fix → push directly to main:
       │      git push origin main
       ▼
┌─────────────────────────────────────────────────────────────────┐
│  GitHub — sultanthemevbskins-cloud/hanafi-web  (monorepo)       │
│  • PR review → merge into main                                  │
│  • Direct push to main also triggers deploy                     │
└──────┬──────────────────────────────────────────────────────────┘
       │
       │  STEP 7 — Vercel auto-deploys  ✅ AUTOMATIC on every push to main
       │  • Storybook build: npm run sync && npm run build-storybook
       │  • App build: cd apps/web && npm run build
       │  • Live Storybook URL: https://hanafi-designsystem.vercel.app
       │  • Preview URL auto-created for every open PR branch
       ▼
┌─────────────────────────────────────────────────────────────────┐
│  Storybook — hanafi-designsystem.vercel.app  (live, public)     │
│  • Designers and devs always see the latest merged design system │
│  • PR preview URL lets you review before merging                │
└─────────────────────────────────────────────────────────────────┘
```

### Quick reference — what to run after each change

| What changed | Commands to run | Push needed? | Vercel auto-deploys? |
|---|---|---|---|
| Token value in `design-tokens.json` | `npm run sync` → check Storybook → update Figma DS page | ✅ Yes — commit + push | ✅ Yes, on merge to main |
| New component added to ctos-web | Add story to `stories/*.stories.jsx` → update Figma DS page | ✅ Yes — commit + push | ✅ Yes, on merge to main |
| Component visual update | Update story → update Figma DS page | ✅ Yes — commit + push | ✅ Yes, on merge to main |
| Font / colour standardisation | Update `design-tokens.json` → sync → update stories → update Figma DS page | ✅ Yes — commit + push | ✅ Yes, on merge to main |
| Figma DS page only (no code change) | Use `mcp__figma__use_figma` — no commit needed | ❌ No | ❌ No (Figma only) |

### Push & deploy rules

| Action | Manual? | Notes |
|---|---|---|
| `git commit` + `git push` | ✅ Manual | Claude does this when asked, or you run it yourself |
| Vercel build + deploy | ✅ Automatic | Triggers the moment any commit lands on `main` |
| PR preview deploy | ✅ Automatic | Vercel creates a unique preview URL for every PR branch |
| Merge PR → main | ✅ Manual | You (or Claude) must merge — Vercel then auto-deploys |

---

## Token Source of Truth

**File:** `design-tokens.json` (repo root)
**Figma Page 1:** https://www.figma.com/design/MpHkBNWSBKa2wUanFty8uX/CTOS-web (source of design)
**Figma Page 2:** https://www.figma.com/design/MpHkBNWSBKa2wUanFty8uX/CTOS-web?node-id=198-2 (Design System)
**Storybook:** http://localhost:6006 (run `npm run sync` in `hanafi-claude-shop` to push token changes)

When tokens change:
1. Edit `design-tokens.json`
2. Run `npm run sync` in `hanafi-claude-shop` → regenerates `tokens.js` + `tokens.css`
3. Storybook hot-reloads automatically

---

## Colour Tokens

Use the semantic name, not the hex.

| Token name       | Value       | Use when…                                  |
|------------------|-------------|--------------------------------------------|
| `blueLagoon`     | `#007B85`   | Primary buttons, links, icons              |
| `darkTeal`       | `#055157`   | Button hover, dark backgrounds             |
| `cerulean`       | `#0BB1BE`   | Accent, gradients, focus rings             |
| `firefly`        | `#102A2E`   | Deep dark text, header bg                  |
| `buttercup`      | `#F15D22`   | Orange CTAs, hover text                    |
| `saffron`        | `#F2B530`   | Amber, gradient end                        |
| `text.dark`      | `#111827`   | Headings                                   |
| `text.body`      | `#374151`   | Body copy                                  |
| `text.muted`     | `#6B7280`   | Secondary / helper text                    |
| `text.subtle`    | `#9CA3AF`   | Placeholders, captions                     |
| `surface.bgLight`| `#F9FAFB`   | Page / card backgrounds                    |
| `surface.bgMid`  | `#F3F4F6`   | Pressed / active state backgrounds         |
| `border.light`   | `#E5E7EB`   | Dividers, card borders                     |
| `border.mid`     | `#D1D5DB`   | Input borders                              |
| `border.error`   | `#EF4444`   | Error state borders                        |

In Tailwind, map to the closest configured colour class or use the CSS variable `--ctos-<tokenName>`.

---

## Typography Rules

**Two font families only: Poppins (primary) and Parkinsans (card descriptions).**

| Family       | Tailwind class      | Use for                                              |
|--------------|---------------------|------------------------------------------------------|
| `Poppins`    | `font-poppins`      | All headings, labels, UI text, CTAs, nav — default   |
| `Parkinsans` | `font-parkinsans`   | Card body descriptions in MarketSegments section only|

Type scale — always use these sizes and weights, never arbitrary values:

| Token           | Size  | Weight         | Use                          |
|-----------------|-------|----------------|------------------------------|
| `heroDisplay`   | 40px  | 700 (Bold)     | Hero slide H1                |
| `heroSub`       | 16px  | 400 (Regular)  | Hero slide subtext           |
| `sectionTitle`  | 28px  | 700 (Bold)     | Section headings             |
| `cardTitle`     | 18px  | 600 (SemiBold) | Card / panel headings        |
| `cardSubtitle`  | 15px  | 500 (Medium)   | Pricing, feature subtitles   |
| `body`          | 14px  | 400 (Regular)  | General body copy            |
| `bodyEmphasis`  | 14px  | 600 (SemiBold) | Highlighted body text        |
| `small`         | 12px  | 400 (Regular)  | Helper text, disclaimers     |
| `label`         | 11px  | 600 (SemiBold) | Tags, badges, section labels |
| `caption`       | 10px  | 400 (Regular)  | Timestamps, footnotes        |

---

## Spacing Rules

Base unit: **4px**. All spacing is a multiple of 4.

| Token      | px  | Tailwind    | Use                              |
|------------|-----|-------------|----------------------------------|
| `space-1`  | 4   | `p-1 / gap-1`  | Icon gap, tight inline padding |
| `space-2`  | 8   | `p-2 / gap-2`  | Button icon gap, small padding |
| `space-3`  | 12  | `p-3 / gap-3`  | Badge padding, input padding   |
| `space-4`  | 16  | `p-4 / gap-4`  | Default padding, input y-pad   |
| `space-5`  | 20  | `p-5 / gap-5`  | Button x-padding, card gap     |
| `space-6`  | 24  | `p-6 / gap-6`  | Section inner padding          |
| `space-8`  | 32  | `p-8 / gap-8`  | Card padding, grid gap         |
| `space-10` | 40  | `p-10`         | Section vertical gap           |
| `space-12` | 48  | `p-12`         | Large section gap              |
| `space-16` | 64  | `p-16`         | Page section gap               |
| `space-20` | 80  | `p-20`         | Hero section gap               |

---

## Border Radius Rules

| Token        | px   | Tailwind           | Use                              |
|--------------|------|--------------------|----------------------------------|
| `radius-sm`  | 6    | `rounded-md`       | Tags, badges, chips              |
| `radius-md`  | 8    | `rounded-lg`       | Toggle pills, small inputs       |
| `radius-card`| 10   | `rounded-[10px]`   | Hero buttons, input boxes        |
| `radius-lg`  | 12   | `rounded-xl`       | Cards, panels, modals            |
| `radius-xl`  | 16   | `rounded-2xl`      | Large cards, feature blocks      |
| `radius-2xl` | 20   | `rounded-[20px]`   | Sheets, bottom panels            |
| `radius-pill`| 999  | `rounded-full`     | CTA buttons, header buttons      |

---

## Button Components

Four variants — never create a fifth without adding it to `design-tokens.json` first.

### Hero Button (`btn-hero` in `index.css`)
- Background: `#FFFFFF` → hover: `#F9FAFB`
- Text: `blueLagoon` (`#007B85`) → hover: `#F58220` (orange)
- Radius: `radius-card` (10px)
- Shadow: `shadow-hero` (`0 4px 20px rgba(0,0,0,0.18)`)
- Font: Poppins SemiBold 14px
- Padding: `py-[13px] px-[22px]`

### Primary CTA Button (`btn-cta-pricing` in `index.css`)
- Background: `blueLagoon` → hover: `darkTeal`
- Text: white
- Radius: `radius-pill` (999px)
- Shadow: `shadow-button` (`0 8px 12px rgba(0,0,0,0.18)`)
- Font: Plus Jakarta Sans ExtraBold 14px, letter-spacing 0.3px

### Header Sign-In Button (`btn-header` in `index.css`)
- Background: dark gradient (`#1F1F1F` → `#0E0E0E`)
- Border: `border.dark` (`#2A2A2A`)
- Text: white
- Radius: `radius-pill` (999px)
- Font: Plus Jakarta Sans Bold 13px

### Link Button (`btn-link` in `index.css`)
- Background: none
- Text: `blueLagoon` → hover: `buttercup`
- Font: Manrope Bold 14px

---

## Shadow Rules

| Token           | Value                                   | Use                   |
|-----------------|-----------------------------------------|-----------------------|
| `shadow-xs`     | `0 1px 2px rgba(0,0,0,0.06)`           | Subtle lift           |
| `shadow-sm`     | `0 1px 4px rgba(0,0,0,0.08)`           | Input, small card     |
| `shadow-md`     | `0 4px 12px rgba(0,0,0,0.10)`          | Card default          |
| `shadow-lg`     | `0 8px 24px rgba(0,0,0,0.12)`          | Modal, panel          |
| `shadow-xl`     | `0 16px 40px rgba(0,0,0,0.14)`         | Overlay, sheet        |
| `shadow-button` | `0 8px 12px rgba(0,0,0,0.18)`          | CTA buttons           |
| `shadow-hero`   | `0 4px 20px rgba(0,0,0,0.18)`          | Hero slide buttons    |
| `shadow-teal`   | `0 8px 24px rgba(0,123,133,0.30)`      | Teal glow hover       |
| `shadow-focus`  | `0 0 0 3px rgba(0,123,133,0.30)`       | Keyboard focus ring   |

---

## Z-Index Rules

| Token          | Value | Use                          |
|----------------|-------|------------------------------|
| `z-base`       | 0     | Default stacking             |
| `z-raised`     | 10    | Cards, sticky elements       |
| `z-dropdown`   | 20    | Dropdowns, tooltips          |
| `z-overlay`    | 30    | Backdrop overlays            |
| `z-panel`      | 40    | Side panels, drawers         |
| `z-modal`      | 50    | Modals, dialogs              |
| `z-toast`      | 60    | Toast notifications          |
| `z-max`        | 9999  | Always on top                |

---

## Animation Rules

Always use token values for transitions. Never hardcode durations or easing.

```css
transition: background var(--ctos-duration-fast) var(--ctos-ease-default);
```

| Duration token | Value  | Use                          |
|----------------|--------|------------------------------|
| `instant`      | 100ms  | Icon swap, opacity flicker   |
| `fast`         | 150ms  | Button hover, colour change  |
| `normal`       | 300ms  | Panel open, tooltip          |
| `slow`         | 500ms  | Slide transitions            |
| `slower`       | 800ms  | Hero animations              |

Easing: always use `cubic-bezier(0.4, 0, 0.2, 1)` (default) unless entering (`in`) or exiting (`out`) an element.

---

## Responsive Breakpoints

Tailwind-compatible, mobile-first.

| Token | px   | Use                            |
|-------|------|--------------------------------|
| `sm`  | 640  | Mobile landscape               |
| `md`  | 768  | Tablet                         |
| `lg`  | 1024 | Small desktop                  |
| `xl`  | 1280 | Desktop (primary breakpoint)   |
| `2xl` | 1536 | Wide desktop                   |

---

## Project Stack (Monorepo — Option B)

```
ctos-web/                        ← monorepo root (one git repo)
  packages/
    tokens/                      ← @ctos/tokens  design-tokens.json + sync script
    ui/                          ← @ctos/ui       Button, Badge, Input, Icon
  apps/
    web/                         ← @ctos/web      React 18 + Vite + TypeScript
  .storybook/ + stories/         ← Storybook 10   lives at monorepo root
```

- **Framework:** React 18 + Vite + TypeScript (`apps/web/`)
- **Styling:** Tailwind CSS v3 + custom CSS in `apps/web/src/index.css`
- **Fonts:** Poppins (primary), Parkinsans (card descriptions), Plus Jakarta Sans, Manrope
- **Icons:** `packages/ui/src/Icon/Icon.tsx` — 32 SVG line icons, exported as `@ctos/ui`
- **Shared components:** `packages/ui/src/` — Button, Badge, Input, Icon
- **Page components:** `apps/web/src/components/` — Hero, Header, Pricing, Footer, etc.
- **Design tokens:** `packages/tokens/design-tokens.json` → `npm run sync` → `tokens.js` + `tokens.css`
- **Storybook:** `stories/*.stories.jsx` — imports from `@ctos/ui` and `@ctos/tokens`
- **GitHub:** `sultanthemevbskins-cloud/hanafi-web`
- **Vercel Storybook:** `hanafi-designsystem.vercel.app` (root build)

## File conventions

- Shared UI: `packages/ui/src/ComponentName/ComponentName.tsx` + `index.ts`
- Page-level: `apps/web/src/components/ComponentName.tsx`
- Styles in `apps/web/src/index.css` using `@layer components`
- No CSS modules — Tailwind + `index.css` only
- TypeScript strict mode — no `any` types

## When adding a new reusable UI component

1. Check `packages/tokens/design-tokens.json` — values must exist as tokens first
2. Create `packages/ui/src/ComponentName/ComponentName.tsx` + `index.ts`
3. Export from `packages/ui/src/index.ts`
4. Add story to `stories/ComponentName.stories.jsx` — import from `@ctos/ui`
5. Verify in Storybook every colour maps to a named token
6. Commit + push → Vercel auto-deploys updated Storybook

## When adding a new page-level component

1. Create in `apps/web/src/components/ComponentName.tsx`
2. Import reusable primitives from `@ctos/ui` (not local paths)
3. Update Figma Design System page if the layout introduces new patterns
