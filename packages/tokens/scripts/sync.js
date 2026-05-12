/**
 * packages/tokens/scripts/sync.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Reads design-tokens.json and regenerates:
 *   packages/tokens/tokens.js   — named ES module exports
 *   packages/tokens/tokens.css  — CSS custom properties
 *
 * Usage (from monorepo root):
 *   npm run sync              — run once
 *   npm run sync:watch        — watch for changes and re-run
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { readFileSync, writeFileSync, watchFile } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKENS_SRC = resolve(__dirname, '../design-tokens.json');
const TOKENS_JS  = resolve(__dirname, '../tokens.js');
const TOKENS_CSS = resolve(__dirname, '../tokens.css');

function flattenColors(colors) {
  const out = {};
  for (const [group, entries] of Object.entries(colors)) {
    for (const [name, token] of Object.entries(entries)) {
      out[name] = { value: token.value, role: token.role, group };
    }
  }
  return out;
}

function toCssVar(name) {
  return '--ctos-' + name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

function sync() {
  console.log('\n🔄  Syncing design tokens...');

  const raw = readFileSync(TOKENS_SRC, 'utf8');
  const tokens = JSON.parse(raw);
  const { colors, typography, spacing, radius, shadows, breakpoints, animation, zIndex } = tokens;
  const flatColors = flattenColors(colors);

  // ─── Generate tokens.js ──────────────────────────────────────────────────
  const js = `// ─────────────────────────────────────────────────────────────────────────────
// CTOS Web — Design Tokens  (AUTO-GENERATED — do not edit)
// Source: packages/tokens/design-tokens.json
// Regenerate: npm run sync  (from monorepo root)
// Generated: ${new Date().toISOString()}
// ─────────────────────────────────────────────────────────────────────────────

export const colors = {
${Object.entries(flatColors).map(([k,v]) =>
  `  ${k.padEnd(18)}: '${v.value}',  // ${v.role}`
).join('\n')}
};

export const typography = {
  families: {
${Object.entries(typography.families).map(([k,v]) =>
  `    ${k.padEnd(10)}: { value: ${JSON.stringify(v.value)}, use: ${JSON.stringify(v.use)} },`
).join('\n')}
  },
  scale: {
${Object.entries(typography.scale).map(([k,v]) =>
  `    ${k.padEnd(14)}: ${JSON.stringify(v)},`
).join('\n')}
  },
};

export const spacing = {
${Object.entries(spacing).map(([k,v]) =>
  `  '${k}': ${String(v.value).padEnd(4)}, // ${v.use}`
).join('\n')}
};

export const radius = {
${Object.entries(radius).map(([k,v]) =>
  `  ${String("'"+k+"'").padEnd(8)}: ${String(v.value).padEnd(4)}, // ${v.use}`
).join('\n')}
};

export const shadows = {
${Object.entries(shadows).map(([k,v]) =>
  `  ${k.padEnd(10)}: '${v.value}',  // ${v.use}`
).join('\n')}
};

export const breakpoints = {
${Object.entries(breakpoints).map(([k,v]) =>
  `  ${String("'"+k+"'").padEnd(6)}: ${String(v.value).padEnd(5)}, // ${v.use}`
).join('\n')}
};

export const animation = {
  duration: {
${Object.entries(animation.duration).map(([k,v]) =>
  `    ${k.padEnd(10)}: '${v.value}',  // ${v.use}`
).join('\n')}
  },
  easing: {
${Object.entries(animation.easing).map(([k,v]) =>
  `    ${k.padEnd(10)}: '${v.value}',  // ${v.use}`
).join('\n')}
  },
};

export const zIndex = {
${Object.entries(zIndex).map(([k,v]) =>
  `  ${k.padEnd(12)}: ${String(v.value).padEnd(6)}, // ${v.use}`
).join('\n')}
};

// Component token maps
export const components = {
  heroButton: {
    default:  { bg: '#FFFFFF',  text: colors.blueLagoon, shadow: shadows.hero },
    hover:    { bg: '#F9FAFB',  text: '#F58220',         shadow: shadows.hero },
    active:   { bg: '#F3F4F6',  text: colors.buttercup,  shadow: shadows.inner },
    focus:    { bg: '#FFFFFF',  text: colors.blueLagoon, shadow: shadows.focus },
    disabled: { bg: '#FFFFFF',  text: colors.subtle,     shadow: 'none', opacity: 0.5 },
  },
  ctaButton: {
    default:  { bg: colors.blueLagoon, text: '#FFFFFF', shadow: shadows.button },
    hover:    { bg: colors.darkTeal,   text: '#FFFFFF', shadow: shadows.button },
    active:   { bg: '#005D63',         text: '#FFFFFF', shadow: shadows.inner },
    focus:    { bg: colors.blueLagoon, text: '#FFFFFF', shadow: shadows.focus },
    disabled: { bg: colors.subtle,     text: '#FFFFFF', shadow: 'none', opacity: 0.6 },
  },
  headerButton: {
    default:  { bg: 'linear-gradient(to bottom, #1F1F1F, #0E0E0E)', text: '#FFFFFF', border: colors.dark },
    hover:    { opacity: 0.9 },
    active:   { opacity: 0.8 },
    focus:    { border: colors.blueLagoon },
    disabled: { opacity: 0.4 },
  },
  linkButton: {
    default:  { text: colors.blueLagoon },
    hover:    { text: colors.buttercup },
    active:   { text: colors.buttercup },
    disabled: { text: colors.subtle, opacity: 0.5 },
  },
};
`;

  writeFileSync(TOKENS_JS, js, 'utf8');
  console.log(`✅  packages/tokens/tokens.js updated`);

  // ─── Generate tokens.css ─────────────────────────────────────────────────
  const cssVars = [];
  cssVars.push('  /* Colors */');
  for (const [name, { value }] of Object.entries(flatColors)) {
    cssVars.push(`  ${toCssVar(name)}: ${value};`);
  }
  cssVars.push('\n  /* Spacing */');
  for (const [k, v] of Object.entries(spacing)) {
    cssVars.push(`  --ctos-space-${k}: ${v.value}px;`);
  }
  cssVars.push('\n  /* Radius */');
  for (const [k, v] of Object.entries(radius)) {
    cssVars.push(`  --ctos-radius-${k}: ${v.value === 999 ? '999px' : v.value + 'px'};`);
  }
  cssVars.push('\n  /* Shadows */');
  for (const [k, v] of Object.entries(shadows)) {
    cssVars.push(`  --ctos-shadow-${k}: ${v.value};`);
  }
  cssVars.push('\n  /* Animation durations */');
  for (const [k, v] of Object.entries(animation.duration)) {
    cssVars.push(`  --ctos-duration-${k}: ${v.value};`);
  }
  cssVars.push('\n  /* Animation easing */');
  for (const [k, v] of Object.entries(animation.easing)) {
    cssVars.push(`  --ctos-ease-${k}: ${v.value};`);
  }
  cssVars.push('\n  /* Z-index */');
  for (const [k, v] of Object.entries(zIndex)) {
    cssVars.push(`  --ctos-z-${k}: ${v.value};`);
  }

  const css = `/* ─────────────────────────────────────────────────────────────────────────────
   CTOS Web — CSS Custom Properties  (AUTO-GENERATED — do not edit)
   Source: packages/tokens/design-tokens.json
   Regenerate: npm run sync  (from monorepo root)
   Generated: ${new Date().toISOString()}
   ───────────────────────────────────────────────────────────────────────────── */

:root {
${cssVars.join('\n')}
}
`;

  writeFileSync(TOKENS_CSS, css, 'utf8');
  console.log(`✅  packages/tokens/tokens.css updated`);
  console.log(`\n✨  Sync complete — ${new Date().toLocaleTimeString()}\n`);
}

sync();

if (process.argv.includes('--watch')) {
  console.log(`👀  Watching ${TOKENS_SRC} for changes...\n`);
  watchFile(TOKENS_SRC, { interval: 500 }, () => {
    console.log('📝  design-tokens.json changed, re-syncing...');
    sync();
  });
}
