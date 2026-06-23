// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * ── GitHub Pages base path ───────────────────────────────────────────────
 * • If you deploy to a USER or ORG page  → https://<name>.github.io/
 *   (or a custom domain)            → keep base = '/' and site as-is.
 * • If you deploy to a PROJECT page  → https://<name>.github.io/<repo>/
 *   → set base = '/<repo>/'  (trailing slash required) and update `site`.
 *
 * Tip: most people want this on '/' and to enable GitHub Pages → "Deploy
 * from a branch" pointing at the docs folder, OR use the included workflow.
 */
const PAGES_BASE = '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-username.github.io',
  base: PAGES_BASE,
  output: 'static',
  server: { port: 6767 },
  trailingSlash: 'ignore',
  build: {
    // Inline small stylesheets to cut render-blocking requests (Lighthouse).
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
