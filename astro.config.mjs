// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Set ASTRO_BASE env var for project page deploys, or keep '/' for user/org pages.
const PAGES_BASE = process.env.ASTRO_BASE || '/';

export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://your-username.github.io',
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
