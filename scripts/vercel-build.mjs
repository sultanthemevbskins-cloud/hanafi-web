/**
 * Vercel build dispatcher.
 *
 * Both Vercel projects (hanafi-web = Storybook, ctos-web = web app) share
 * this monorepo. Vercel always sets VERCEL_PROJECT_NAME at build time, so we
 * use it to route to the correct build and write output to the Vercel Build
 * Output API path (.vercel/output/static) so a single vercel.json can serve
 * both projects with the right artifacts.
 */

import { execSync } from 'child_process';
import { cpSync, mkdirSync, writeFileSync } from 'fs';

const project = process.env.VERCEL_PROJECT_NAME ?? '';
console.log(`[vercel-build] VERCEL_PROJECT_NAME="${project}"`);

const OUT = '.vercel/output';
const STATIC = `${OUT}/static`;
mkdirSync(STATIC, { recursive: true });

if (project === 'ctos-web') {
  // ── Web app (Vite / React) ────────────────────────────────────────────────
  console.log('[vercel-build] Building web app (apps/web)…');
  execSync('npm run build --workspace=apps/web', { stdio: 'inherit' });

  // Copy Vite output into the Build Output API static dir
  cpSync('apps/web/dist', STATIC, { recursive: true });

  // SPA routing: fall back every path to index.html
  writeFileSync(`${OUT}/config.json`, JSON.stringify({
    version: 3,
    routes: [
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/index.html' },
    ],
  }, null, 2));

  console.log('[vercel-build] Web app build complete → .vercel/output/static');

} else {
  // ── Storybook (hanafi-web or local fallback) ──────────────────────────────
  console.log('[vercel-build] Building Storybook…');
  execSync('storybook build', { stdio: 'inherit' });

  // Copy Storybook static output into the Build Output API static dir
  cpSync('storybook-static', STATIC, { recursive: true });

  writeFileSync(`${OUT}/config.json`, JSON.stringify({ version: 3 }, null, 2));

  console.log('[vercel-build] Storybook build complete → .vercel/output/static');
}
