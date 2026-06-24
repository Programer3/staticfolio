export interface Skill {
  /** short name shown on the orb */
  name: string;
  /** slug used to resolve the inline brand icon */
  icon: string;
  /** a punchy one-liner of what you actually USE it for */
  use: string;
}

export interface Project {
  title: string;
  /** one tight sentence — high signal, zero fluff */
  tagline: string;
  /** 2–3 line description shown on expand */
  description: string;
  /** year shipped */
  year: string;
  /** tech used (renders as chips) */
  stack: string[];
  /** live demo url */
  live?: string;
  /** source repo */
  repo?: string;
  /** visual motif key — drives the generated SVG preview */
  motif:
    | 'orbit'
    | 'grid'
    | 'wave'
    | 'circuit'
    | 'prism'
    | 'glyph'
    | 'stack'
    | 'pulse';
  /** dominant accent used in the preview (CSS color) */
  accent: string;
  /** a featured project gets a bigger bento cell */
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Portfolio {
  name: string;
  /** short role/title shown under the name */
  role: string;
  /** where you're based */
  location: string;
  /** years of experience — drives the hero animated exp counter */
  experienceYears: number;
  /** availability blurb */
  availability: string;
  /** the single above-the-fold value proposition — one sharp line */
  proposition: string;
  /** a couple of supporting lines for the hero */
  heroSub: string[];
  /** 2-3 sentence about blurb */
  about: string[];
  /** currently-focused line ("these days I'm…") */
  nowadays: string;
  /** absolute or relative path to your CV */
  cvUrl: string;
  /** contact form endpoint — Formspree/Formspark/Web3Forms etc. */
  contactEndpoint: string;
  /** fallback mailto when no endpoint / JS disabled */
  email: string;
  socials: SocialLink[];
  skills: Skill[];
  projects: Project[];
}

// ── EDIT EVERYTHING BELOW THIS LINE ──────────────────────────────────

export const portfolio: Portfolio = {
  name: 'Aman Verma',
  role: 'Software Engineer · Interface Tinkerer',
  location: 'Bengaluru, IN · Remote-friendly',
  experienceYears: 8,
  availability: 'Open to senior FE / full-stack roles',
  proposition: 'I build interfaces that feel alive — fast, weird, and deliberate.',
  heroSub: [
    '8 years turning pixels into products.',
    'Static-first, motion-aware, accessibility-hardened.',
    'Currently obsessed with rendering performance & tiny CSS.',
  ],
  about: [
    "I'm a frontend-leaning full-stack engineer who treats the browser like a serious runtime, not a dumb display.",
    'Most of my work sits at the seam between design systems and core product: the part users never think about because it just works.',
    'Before code I cared about typography, ergonomics, and how things feel in the hand — that still shows up everywhere I ship.',
  ],
  nowadays:
    'Currently neck-deep in view transitions, islands architecture, and shaving milliseconds off LCP.',
  cvUrl: '/cv.pdf',
  contactEndpoint: '',
  email: 'hello@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'X / Twitter', href: 'https://x.com/', icon: 'x' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
    { label: 'Reddit', href: 'https://reddit.com/', icon: 'reddit' },
  ],
  skills: [
    { name: 'TypeScript', icon: 'typescript', use: 'types-first APIs & tooling' },
    { name: 'React', icon: 'react', use: 'component graphs & Suspense' },
    { name: 'Astro', icon: 'astro', use: 'static-first marketing & docs' },
    { name: 'Next.js', icon: 'nextjs', use: 'app-router SaaS frontends' },
    { name: 'Svelte', icon: 'svelte', use: 'tight, reactive UIs' },
    { name: 'Vue', icon: 'vue', use: 'progressive enhancement' },
    { name: 'Node.js', icon: 'nodejs', use: 'edge & serverless APIs' },
    { name: 'Bun', icon: 'bun', use: 'fast dev runtimes' },
    { name: 'Tailwind', icon: 'tailwind', use: 'design tokens at scale' },
    { name: 'GSAP', icon: 'gsap', use: 'scroll & micro-interactions' },
    { name: 'Three.js', icon: 'threejs', use: 'performant 3D & WebGL' },
    { name: 'PostgreSQL', icon: 'postgres', use: 'relational modeling' },
    { name: 'Redis', icon: 'redis', use: 'caching & rate-limiting' },
    { name: 'GraphQL', icon: 'graphql', use: 'typed data fetching' },
    { name: 'Docker', icon: 'docker', use: 'reproducible deploys' },
    { name: 'Rust', icon: 'rust', use: 'hot paths & CLI tools' },
    { name: 'Go', icon: 'go', use: 'small, concurrent services' },
    { name: 'Python', icon: 'python', use: 'scripts & ML glue' },
    { name: 'Figma', icon: 'figma', use: 'design-to-code handoff' },
    { name: 'AWS', icon: 'aws', use: 'infra when it earns its keep' },
  ],
  projects: [
    {
      title: 'Halftone',
      tagline: 'A print-quality screenshot engine that runs in the browser.',
      description:
        'WebGL dithering pipeline that exports press-ready CMYK separations from any DOM node. Ships as a 9kb framework-agnostic widget.',
      year: '2025',
      stack: ['TypeScript', 'WebGL', 'WASM'],
      live: 'https://example.com',
      repo: 'https://github.com/',
      motif: 'glyph',
      accent: '#fbbf24',
      featured: true,
    },
    {
      title: 'Loomstate',
      tagline: 'Realtime collaborative cursor presence for static sites.',
      description:
        'A CRDT-backed presence layer that bolts onto any static deploy with one script tag. No backend deploys, sub-50ms sync.',
      year: '2025',
      stack: ['TypeScript', 'CRDT', 'Edge'],
      live: 'https://example.com',
      repo: 'https://github.com/',
      motif: 'orbit',
      accent: '#34d399',
    },
    {
      title: 'Cartograph',
      tagline: 'A dependency visualizer that treats your repo like a city.',
      description:
        'Parses your import graph and renders an interactive 3D skyline where building height = cyclomatic complexity. Great for architecture reviews.',
      year: '2024',
      stack: ['Three.js', 'Rust', 'WASM'],
      live: 'https://example.com',
      repo: 'https://github.com/',
      motif: 'circuit',
      accent: '#60a5fa',
    },
  ],
};

export default portfolio;