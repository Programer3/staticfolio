# portfolio

Dark-mode-first, brutalist/glassmorphism developer portfolio.
Built with **Astro + GSAP + Tailwind CSS v4**, statically exported for GitHub Pages.

[![Deploy](https://github.com/<your-username>/githubpages-folio/actions/workflows/deploy.yml/badge.svg)](https://github.com/<your-username>/githubpages-folio/actions/workflows/deploy.yml)

## ✨ Features

- **10 themes** — Midnight, Dracula, Claude, Terminal, Winter, Emerald, Blueprint, Paper, Cupcake, Panda. Persisted in `localStorage`, FOUC-free.
- **Live Activity HUD** — real-time session metrics (keystrokes, scroll, idle, uptime, velocity sparkline). Zero backend.
- **Custom cursor** — dot + trailing ring, `mix-blend-mode: difference`, grows on interactive targets. Touch-safe.
- **GSAP micro-interactions** — scroll reveals, parallax, magnetic buttons, 3D tilt on cards.
- **9 themes** — CSS-variable-driven, each with grain/glow intensity tuning.
- **~20 curated skills** — icon + name + punchy "use" line. No bars, no percentages.
- **6 project cards** — generated SVG previews that animate on hover, live + repo links.
- **Contact form** — inline validation, Formspree/Formspark-ready, `mailto:` fallback.
- **Konami code easter egg** — `↑↑↓↓←→←→ba` for a themed matrix overlay.
- **Accessibility** — skip link, `prefers-reduced-motion`, ARIA, semantic landmarks, focus-visible.
- **Performance** — Astro zero-JS baseline, self-hosted fonts, all-SVG imagery, `font-display: swap`.

## 🚀 Quick start

```bash
# Install
npm install

# Develop
npm run dev        # → localhost:6767

# Build (static output to dist/)
npm run build

# Preview the built site
npm run preview
```

## 🎨 Customize — edit ONE file

All personal content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).

Replace the placeholder values for:
- `name`, `role`, `location`, `availability`
- `proposition`, `heroSub`, `about`, `nowadays`
- `skills` — array of `{ name, icon, use }` (icon slug maps to [`src/components/Icon.astro`](src/components/Icon.astro))
- `projects` — array of `{ title, tagline, description, year, stack, live, repo, motif, accent, featured }`
- `socials`, `email`, `cvUrl`, `contactEndpoint`

### CV
Drop your real résumé at `public/cv.pdf`. The download button in the nav links to it.
A placeholder HTML source lives at `public/cv-placeholder.html` for reference.

### Contact form
1. Get a free endpoint from [Formspree](https://formspree.io), [Formspark](https://formspark.co), or [Web3Forms](https://web3forms.com).
2. Set `contactEndpoint` in `portfolio.ts` to your form URL.
3. When set, the form POSTs directly. When empty, it falls back to a `mailto:` link.

## 🌐 Themes

| ID        | Name       | Vibe              |
|-----------|-----------|--------------------|
| `dark`    | Midnight  | default dark       |
| `dracula` | Dracula   | synthwave purple   |
| `claude`  | Claude    | warm paper clay    |
| `terminal`| Terminal  | CRT phosphor       |
| `winter`  | Winter    | frost glass        |
| `emerald` | Emerald   | deep canopy        |
| `blueprint`| Blueprint| drafting table     |
| `paper`   | Paper     | newsprint          |
| `cupcake` | Cupcake   | bakery pastel      |
| `panda`   | Panda     | monochrome mono    |

Add or modify themes in [`src/data/themes.ts`](src/data/themes.ts) and the corresponding `[data-theme]` block in [`src/styles/global.css`](src/styles/global.css).

## 📦 Deploy to GitHub Pages

### Option A: GitHub Actions (recommended)

The included `.github/workflows/deploy.yml` handles everything:

1. Push to a repo named `<your-username>.github.io` (user/org pages) or any repo name.
2. Go to **Settings → Pages → Source → GitHub Actions**.
3. Every push to `main`/`master` triggers a build + deploy to `dist/`.

**Project pages** (e.g. `https://<user>.github.io/<repo>/`): open [`astro.config.mjs`](astro.config.mjs) and set `base: '/<repo>/'`.

### Option B: Manual

```bash
npm run build
# Upload the contents of dist/ to GitHub Pages (or any static host)
```

## 🏗 Architecture

```
src/
  data/portfolio.ts      ← all personal content
  data/themes.ts         ← 9 theme palettes
  styles/global.css      ← Tailwind + theme tokens + utilities
  layouts/Base.astro     ← document shell + meta + anti-FOUC
  pages/index.astro      ← single-page composition
  components/
    Icon.astro           ← brand icon resolver (slug → inline SVG)
    Cursor.astro         ← custom dual-element cursor
    ThemeSwitcher.astro  ← accessible dropdown of 10 themes
    Nav.astro            ← sticky glass nav + mobile bottom-sheet
    MagneticButton.astro ← magnetic hover button/link
    GrainOverlay.astro   ← film-grain noise layer
    ActivityHUD.astro    ← live session metrics widget
    SkillOrb.astro       ← flip-to-reveal skill tile
    ProjectPreview.astro ← animated SVG preview per project
    ProjectCard.astro    ← bento project card
    sections/
      Hero.astro
      About.astro
      Skills.astro
      Projects.astro
      Contact.astro
      Footer.astro
  scripts/interactions.ts ← GSAP reveals, magnetic, parallax, konami
public/
  cv.pdf                ← your résumé (replace placeholder)
  cv-placeholder.html    ← HTML source for reference
  favicon.svg
  og-image.svg
  site.webmanifest
  robots.txt
```

## 📄 License

MIT — use it however you like. Attribution appreciated but not required.
