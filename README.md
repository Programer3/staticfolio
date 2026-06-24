# staticfolio

> Dark-mode-first developer portfolio. Brutalist-meets-glassmorphism. Built with **Astro + GSAP + Tailwind CSS v4**, statically exported for GitHub Pages.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-ff5a03?logo=astro)](https://astro.build)
[![Tailwind CSS v4](https://img.shields.io/badge/css-Tailwind%20v4-06b6d4?logo=tailwindcss)](https://tailwindcss.com)

---

## Features

- **11 themes** — Midnight, Dracula, Claude, Terminal, Winter, Emerald, Blueprint, Paper, Cupcake, TF2 Red. Persisted in `localStorage`, FOUC-free with synchronous inline script.
- **Live Activity HUD** — real-time session metrics (keystrokes, scroll, idle, uptime, velocity sparkline). Pure vanilla, zero backend.
- **Custom cursor** — dot + trailing ring, `mix-blend-mode: difference`, grows on interactive targets. Touch-safe (auto-hides on coarse pointers).
- **GSAP micro-interactions** — scroll reveals, parallax, magnetic buttons, 3D tilt on cards.
- **~20 curated skills** — icon + name + "use" line per tool. No bars, no percentages.
- **Project cards** — generated SVG previews per project, animate on hover, live + repo links.
- **Contact form** — inline validation, works with Formspree/Formspark/Web3Forms, `mailto:` fallback when no endpoint set.
- **Konami code easter egg** — `↑↑↓↓←→←→ba` launches a theme-aware snake game.
- **Googly eyes** — cursor-tracking eyes in the nav. Click to blink. Pure delight.
- **Accessibility** — skip link, `prefers-reduced-motion`, ARIA landmarks, semantic HTML, `focus-visible` outlines.
- **Performance** — Astro zero-JS baseline, self-hosted fonts, all-SVG graphics, `font-display: swap`.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server at localhost:6767
npm run dev

# Build static site to dist/
npm run build

# Preview the built site
npm run preview
```

---

## Customize — Edit One File

All personal content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).

Replace the placeholder values:

| Field | What to change |
|-------|---------------|
| `name` | Your name |
| `role` | Your title / role |
| `location` | Where you're based |
| `experienceYears` | Years of experience |
| `availability` | Availability blurb |
| `proposition` | One-line value prop |
| `heroSub` | Supporting hero lines |
| `about` | Bio paragraphs |
| `nowadays` | Current focus |
| `skills` | Array of `{ name, icon, use }` |
| `projects` | Array of `{ title, tagline, description, year, stack, ... }` |
| `socials` | Social links |
| `email` | Your email |
| `cvUrl` | Path to your CV |
| `contactEndpoint` | Form endpoint URL |

### CV

Drop your real résumé at `public/cv.pdf`. The download button in the nav links to it. A placeholder HTML source lives at `public/cv-placeholder.html` for reference.

### Contact Form

1. Get a free endpoint from [Formspree](https://formspree.io), [Formspark](https://formspark.co), or [Web3Forms](https://web3forms.com).
2. Set `contactEndpoint` in `portfolio.ts` to your form URL.
3. When set, the form POSTs directly. When empty, it falls back to a `mailto:` link.

---

## Themes

| ID | Name | Vibe |
|----|------|------|
| `panda` | Panda | monochrome mono (default) |
| `dracula` | Dracula | synthwave purple |
| `claude` | Claude | warm paper clay |
| `terminal` | Terminal | CRT phosphor |
| `winter` | Winter | frost glass |
| `emerald` | Emerald | deep canopy light |
| `blueprint` | Blueprint | drafting table |
| `paper` | Paper | newsprint |
| `cupcake` | Cupcake | bakery pastel |
| `tf2red` | TF2 Red | builders league united |

Add or modify themes in [`src/data/themes.ts`](src/data/themes.ts) and the corresponding `[data-theme]` block in [`src/styles/global.css`](src/styles/global.css).

---

## Project Structure

```
src/
├── data/
│   ├── portfolio.ts        ← all personal content
│   └── themes.ts           ← 10 theme palettes
├── styles/
│   └── global.css          ← Tailwind + theme tokens + utilities
├── layouts/
│   └── Base.astro          ← document shell + meta + anti-FOUC
├── pages/
│   └── index.astro         ← single-page composition
├── components/
│   ├── Icon.astro          ← brand icon resolver (slug → inline SVG)
│   ├── Cursor.astro        ← custom dual-element cursor
│   ├── ThemeSwitcher.astro ← accessible dropdown of 10 themes
│   ├── Nav.astro           ← sticky glass nav + mobile bottom-sheet
│   ├── MagneticButton.astro← magnetic hover button/link
│   ├── GrainOverlay.astro  ← film-grain noise layer
│   ├── ActivityHUD.astro   ← live session metrics widget
│   ├── SkillCard.astro     ← flip-to-reveal skill tile
│   ├── ProjectPreview.astro← animated SVG preview per project
│   ├── ProjectCard.astro   ← bento project card
│   ├── GooglyEyes.astro    ← cursor-tracking eyes
│   ├── LocCounter.astro    ← live LOC counter widget
│   └── sections/
│       ├── Hero.astro
│       ├── About.astro
│       ├── Skills.astro
│       ├── Projects.astro
│       ├── Contact.astro
│       └── Footer.astro
├── scripts/
│   ├── interactions.ts     ← GSAP reveals, magnetic, parallax, konami
│   └── countUp.ts          ← shared count-up animation
public/
├── cv.pdf                  ← your résumé (replace placeholder)
├── cv-placeholder.html     ← HTML source for reference
├── favicon.svg
├── og-image.svg
├── site.webmanifest
├── robots.txt
└── loc-data.json           ← generated by GitHub Actions
```

---

## Deploy to GitHub Pages

### Option A: GitHub Actions (recommended)

The included [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) handles everything:

1. Push to a repo named `<your-username>.github.io` (user/org pages) or any repo name.
2. Go to **Settings → Pages → Source → GitHub Actions**.
3. Every push to `main`/`master` triggers a build + deploy.

**Project pages** (e.g. `https://<user>.github.io/<repo>/`): open [`astro.config.mjs`](astro.config.mjs) and set `base: '/<repo>/'`.

### Option B: Manual

```bash
npm run build
# Upload the contents of dist/ to GitHub Pages (or any static host)
```

---

## Using This as a Template

1. **Fork** this repository.
2. **Clone** your fork locally.
3. Run `npm install`.
4. Edit `src/data/portfolio.ts` with your information.
5. Replace `public/cv.pdf` with your résumé.
6. Update the site metadata in `src/layouts/Base.astro` (title, description, OG image).
7. (Optional) Add a contact form endpoint in `portfolio.ts`.
8. Deploy via the included GitHub Actions workflow.

For a detailed walkthrough, see [`.clinerules/SETUP_GUIDE.md`](.clinerules/SETUP_GUIDE.md).

---

## License

MIT — do what you want. Attribution appreciated but not required.