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
  name: 'Aman Gupta',
  role: 'Software Developer · Open Source Advocate',
  location: 'Delhi, IN · Remote-friendly',
  experienceYears: 3,
  availability: 'Open to AI systems developer/ full-stack roles',
  proposition: 'I build Programs that feel alive — fast, weird, and deliberate.',
  heroSub: [
    '3 years turning logic into products.',
    'UX, logic, and maintainability first',
    'Curious and organized',
  ],
  about: [
    "I believe software should be built to last. That means prioritizing maintainability over cleverness, readability over brevity, and testing over speculation.",
    "I'm an introvert by nature, which means I listen more than I talk, and I think before I act. In code, that translates to fewer bugs, cleaner architecture, and better decisions.",
    "I build with the right tool for the problem.",
  ],
  nowadays:
    'Currently learning and Underdstanding System Design using AI and Cloud',
  cvUrl: '/cv.pdf',
  contactEndpoint: '',
  email: 'amangpta37@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Programer3', icon: 'github' },
    { label: 'X / Twitter', href: 'https://x.com/AmanGblue', icon: 'x' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agprogramer3', icon: 'linkedin' },
    { label: 'Reddit', href: 'https://www.reddit.com/user/notabotboi', icon: 'reddit' },
  ],
  skills: [
    { name: 'TypeScript', icon: 'typescript', use: 'types-first APIs & tooling' },
    { name: 'React', icon: 'react', use: 'component graphs & Suspense' },
    { name: 'Astro', icon: 'astro', use: 'static-first marketing & docs' },
    { name: 'Node.js', icon: 'nodejs', use: 'server-side JavaScript' },
    { name: 'Flutter', icon: 'flutter', use: 'tight, reactive UIs' },
    { name: 'Supabase', icon: 'supabse', use: 'PostgreSQL-as-a-service' },
    { name: 'MongoDB', icon: 'mongodb', use: 'NoSQL document databases' },
    { name: 'Bun', icon: 'bun', use: 'fast dev runtimes' },
    { name: 'Tailwind', icon: 'tailwind', use: 'design tokens at scale' },
    { name: 'Markdown', icon: 'markdown', use: 'documentation & content' },
    { name: 'PostgreSQL', icon: 'postgres', use: 'relational modeling' },
    { name: 'Source', icon: 'source', use: 'Game Engine' },
    { name: 'Java', icon: 'java', use: 'enterprise backends' },
    { name: 'Docker', icon: 'docker', use: 'reproducible deploys' },
    { name: 'Linux', icon: 'linux', use: 'server environments' },
    { name: 'Pandas', icon: 'pandas', use: 'data manipulation' },
    { name: 'Python', icon: 'pyhton', use: 'scripts & ML glue' },
    { name: 'Figma', icon: 'figma', use: 'design-to-code handoff' },
    { name: 'Git', icon: 'git', use: 'version control & history' },
    { name: 'Google Search', icon: 'googlesearch', use: 'debugging errors & finding solutions' },
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