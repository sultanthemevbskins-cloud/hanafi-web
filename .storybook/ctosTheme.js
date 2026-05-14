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
// Replicate the CTOS wordmark in brand teal so no external file is needed
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 36" fill="none">
  <path d="M14 10C9.029 10 5 14.029 5 19s4.029 9 9 9h7v-3h-7c-3.314 0-6-2.686-6-6s2.686-6 6-6h7v-3h-7Z" fill="${brand.primary}"/>
  <path d="M32 7h-3v3h-4v3h4v12h3V13h4v-3h-4V7Z" fill="${brand.primary}"/>
  <path d="M49 10c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9Zm0 15c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6Z" fill="${brand.primary}"/>
  <path d="M70 10h-8v3h8c.552 0 1 .448 1 1s-.448 1-1 1h-5c-2.209 0-4 1.791-4 4v1c0 2.209 1.791 4 4 4h9v-3h-9c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h5c2.209 0 4-1.791 4-4s-1.791-4-4-4Z" fill="${brand.primary}"/>
  <rect x="82" y="18" width="1.5" height="12" rx=".75" fill="${border.light}"/>
  <text x="90" y="26" font-family="Poppins, Inter, sans-serif" font-size="11" font-weight="500" fill="${text.muted}" letter-spacing="0.3">Design System</text>
</svg>`;

const logoDataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;

// ── Theme definition ──────────────────────────────────────────────────────────
export default create({
  // Mandatory base
  base: 'light',

  // Branding
  brandTitle: 'CTOS Design System',
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
