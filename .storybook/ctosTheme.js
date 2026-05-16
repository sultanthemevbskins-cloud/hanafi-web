// CTOS Design System — Storybook Theme
// Imports use the Storybook 10 core package path (NOT @storybook/theming)
import { create } from 'storybook/theming';

// ── Design tokens (mirrored from packages/tokens/design-tokens.json) ──────────
const brand = {
  primary:    '#007B85',   // blueLagoon
  darkTeal:   '#055157',   // darkTeal
  cerulean:   '#0BB1BE',   // cerulean (accent / focus ring)
};
const text = {
  dark:   '#111827',  // headings
  body:   '#374151',  // body copy
  muted:  '#6B7280',  // secondary
  subtle: '#9CA3AF',  // placeholder / caption
};
const surface = {
  white:   '#FFFFFF',
  bgLight: '#F9FAFB',  // page / card background
  bgMid:   '#F3F4F6',  // pressed / active state
};
const border = {
  light: '#E5E7EB',  // dividers / card borders
  mid:   '#D1D5DB',  // input borders
};

// ── Logo as inline SVG data URI ───────────────────────────────────────────────
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 36" fill="none">
  <text x="4" y="27" font-family="Poppins, Inter, sans-serif" font-size="26" font-weight="700" fill="${brand.primary}" letter-spacing="-1">HBJ</text>
</svg>`;

const logoDataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;

// ── Theme definition ──────────────────────────────────────────────────────────
export default create({
  // Mandatory base
  base: 'light',

  // Branding
  brandTitle: 'HBJ',
  brandUrl:   '/',
  brandImage: logoDataUri,
  brandTarget: '_self',

  // Primary palette
  colorPrimary:   brand.primary,
  colorSecondary: brand.primary,

  // App chrome
  appBg:           surface.bgLight,
  appContentBg:    surface.white,
  appPreviewBg:    surface.white,
  appBorderColor:  border.light,
  appBorderRadius: 6,

  // Typography — Poppins as the CTOS primary typeface
  fontBase: "'Poppins', 'Inter', -apple-system, sans-serif",
  fontCode: "'JetBrains Mono', 'Fira Code', monospace",

  // Text
  textColor:        text.dark,
  textInverseColor: surface.white,
  textMutedColor:   text.muted,

  // Toolbar / top bar
  barTextColor:     text.muted,
  barHoverColor:    brand.primary,
  barSelectedColor: brand.primary,
  barBg:            surface.white,

  // Inputs
  inputBg:           surface.white,
  inputBorder:       border.mid,
  inputTextColor:    text.dark,
  inputBorderRadius: 4,
});
