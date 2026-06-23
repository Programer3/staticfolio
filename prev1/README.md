# Dev-foliio — Chaman

> Flutter developer. Problem solver. Systems thinker.

Personal portfolio built with [Astro](https://astro.build), Tailwind CSS v4, and GSAP. Dark-first, 4 themes, physics-based micro-interactions.

## Quick Start

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/` — deploy to GitHub Pages, Netlify, Vercel, or any static host.

## Customization

| File | What to change |
|------|---------------|
| `src/lib/data/skills.ts` | Your skill set (name, icon, context, why) |
| `src/lib/data/projects.ts` | Your real projects |
| `src/lib/data/social.ts` | Your social links |
| `public/resume.pdf` | Replace with your actual CV |
| `src/styles/themes.css` | Adjust theme colors if desired |
| `.github/workflows/loc-counter.yml` | LOC counter runs daily via GitHub Actions |

## Features

- 4 themes (Blueprint, Terminal, Paper, Neon)
- Magnetic buttons, tilt cards, custom cursor
- GitHub LOC counter with daily sparkline (via GitHub Actions)
- Typewriter effect, staggered reveals, parallax orbs
- Blueprint grid + grain overlay + glass panels
- Accessible (focus rings, skip nav, ARIA labels, semantic HTML)
- Perfect Lighthouse score target (zero JS on initial paint)

## Deployment

```bash
npm run build
npx gh-pages -d dist
```

Or connect to [Netlify](https://netlify.com) / [Vercel](https://vercel.com) — point at the repo, it auto-detects Astro.

## License

MIT © Chaman