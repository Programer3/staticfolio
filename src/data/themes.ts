/**
 * ── Theme system ─────────────────────────────────────────────────────────
 * Nine hand-tuned palettes. Each is a flat map of CSS custom properties
 * consumed in global.css under [data-theme="…"] blocks.
 *
 * Keys map to the --t-* tokens documented in src/styles/global.css.
 * Keep the key set in sync across all themes — the UI reads these names.
 */

export interface ThemeTokens {
  bg: string; // page background
  bgAlt: string; // elevated surface
  surface: string; // card / glass
  surfaceMuted: string; // recessed chip
  border: string; // hairline
  borderStrong: string; // visible separator
  text: string; // primary text
  textMuted: string; // secondary
  accent: string; // primary accent
  accent2: string; // secondary accent
  accentText: string; // text on accent
  mode: 'dark' | 'light'; // drives mix-blend / shadows
  font: 'mono' | 'sans'; // default face
  grain: number; // 0–1 overlay opacity
  glow: number; // accent shadow intensity 0–1
  vibe: string; // short label shown in the switcher
}

export interface Theme {
  id: string;
  label: string;
  /** single emoji glyph for compact UIs */
  glyph: string;
  tokens: ThemeTokens;
}

export const themes: Theme[] = [
  {
    id: 'panda',
    label: 'Panda',
    glyph: '🐼',
    tokens: {
      bg: '#0d0d0f',
      bgAlt: '#161618',
      surface: 'rgba(255,255,255,0.05)',
      surfaceMuted: 'rgba(255,255,255,0.025)',
      border: 'rgba(255,255,255,0.1)',
      borderStrong: 'rgba(255,255,255,0.2)',
      text: '#fafafa',
      textMuted: '#a3a3a3',
      accent: '#ffffff',
      accent2: '#a3a3a3',
      accentText: '#0d0d0f',
      mode: 'dark',
      font: 'sans',
      grain: 0.04,
      glow: 0.3,
      vibe: 'monochrome mono',
    },
  },
  {
    id: 'dracula',
    label: 'Dracula',
    glyph: '🧛',
    tokens: {
      bg: '#282a36',
      bgAlt: '#21222c',
      surface: 'rgba(248,248,242,0.05)',
      surfaceMuted: 'rgba(248,248,242,0.025)',
      border: 'rgba(248,248,242,0.12)',
      borderStrong: 'rgba(248,248,242,0.22)',
      text: '#f8f8f2',
      textMuted: '#bcbcbc',
      accent: '#bd93f9',
      accent2: '#ff79c6',
      accentText: '#282a36',
      mode: 'dark',
      font: 'mono',
      grain: 0.04,
      glow: 0.55,
      vibe: 'synthwave purple',
    },
  },
  {
    id: 'claude',
    label: 'Claude',
    glyph: '🧡',
    tokens: {
      bg: '#1f1d1a',
      bgAlt: '#26231f',
      surface: 'rgba(228,222,210,0.05)',
      surfaceMuted: 'rgba(228,222,210,0.025)',
      border: 'rgba(228,222,210,0.12)',
      borderStrong: 'rgba(228,222,210,0.22)',
      text: '#ece6d8',
      textMuted: '#b9b1a0',
      accent: '#d97757',
      accent2: '#c9a876',
      accentText: '#1a1815',
      mode: 'dark',
      font: 'sans',
      grain: 0.06,
      glow: 0.45,
      vibe: 'warm paper clay',
    },
  },
  {
    id: 'terminal',
    label: 'Terminal',
    glyph: '▮',
    tokens: {
      bg: '#0b0e0b',
      bgAlt: '#0f130f',
      surface: 'rgba(0,255,102,0.04)',
      surfaceMuted: 'rgba(0,255,102,0.02)',
      border: 'rgba(0,255,102,0.18)',
      borderStrong: 'rgba(0,255,102,0.4)',
      text: '#7dffb0',
      textMuted: '#3da06a',
      accent: '#00ff66',
      accent2: '#00ffe1',
      accentText: '#06120a',
      mode: 'dark',
      font: 'mono',
      grain: 0.05,
      glow: 0.7,
      vibe: 'CRT phosphor',
    },
  },
  {
    id: 'winter',
    label: 'Winter',
    glyph: '❄️',
    tokens: {
      bg: '#0b1218',
      bgAlt: '#101a23',
      surface: 'rgba(186,230,253,0.05)',
      surfaceMuted: 'rgba(186,230,253,0.025)',
      border: 'rgba(186,230,253,0.14)',
      borderStrong: 'rgba(186,230,253,0.26)',
      text: '#e0f2fe',
      textMuted: '#94b8cc',
      accent: '#38bdf8',
      accent2: '#a5f3fc',
      accentText: '#06121a',
      mode: 'dark',
      font: 'sans',
      grain: 0.04,
      glow: 0.55,
      vibe: 'frost glass',
    },
  },
  {
    id: 'emerald',
    label: 'Emerald',
    glyph: '🌿',
    tokens: {
      bg: '#E5E7EB',
      bgAlt: '#D1D5DB',
      surface: 'rgba(255,255,255,0.8)',
      surfaceMuted: 'rgba(10,60,48,0.06)',
      border: 'rgba(10,60,48,0.12)',
      borderStrong: 'rgba(10,60,48,0.24)',
      text: '#0A3C30',
      textMuted: '#1A5C4A',
      accent: '#00674F',
      accent2: '#E6A373',
      accentText: '#E5E7EB',
      mode: 'light',
      font: 'sans',
      grain: 0.02,
      glow: 0.25,
      vibe: 'deep canopy light',
    },
  },
  {
    id: 'blueprint',
    label: 'Blueprint',
    glyph: '📐',
    tokens: {
      bg: '#0c2a5e',
      bgAlt: '#0a2350',
      surface: 'rgba(255,255,255,0.06)',
      surfaceMuted: 'rgba(255,255,255,0.03)',
      border: 'rgba(255,255,255,0.22)',
      borderStrong: 'rgba(255,255,255,0.38)',
      text: '#fde68a',
      textMuted: '#bcd0ee',
      accent: '#fbbf24',
      accent2: '#7dd3fc',
      accentText: '#0c2a5e',
      mode: 'dark',
      font: 'mono',
      grain: 0.0,
      glow: 0.5,
      vibe: 'drafting table',
    },
  },
  {
    id: 'paper',
    label: 'Paper',
    glyph: '📄',
    tokens: {
      bg: '#f4f1ea',
      bgAlt: '#ece8de',
      surface: 'rgba(40,30,15,0.04)',
      surfaceMuted: 'rgba(40,30,15,0.02)',
      border: 'rgba(40,30,15,0.14)',
      borderStrong: 'rgba(40,30,15,0.24)',
      text: '#1a1714',
      textMuted: '#6b6353',
      accent: '#b45309',
      accent2: '#0f766e',
      accentText: '#fffaf0',
      mode: 'light',
      font: 'sans',
      grain: 0.12,
      glow: 0.25,
      vibe: 'newsprint',
    },
  },
  {
    id: 'cupcake',
    label: 'Cupcake',
    glyph: '🧁',
    tokens: {
      bg: '#fff0f6',
      bgAlt: '#fde2ef',
      surface: 'rgba(157,23,77,0.04)',
      surfaceMuted: 'rgba(157,23,77,0.02)',
      border: 'rgba(157,23,77,0.16)',
      borderStrong: 'rgba(157,23,77,0.28)',
      text: '#4a1d3f',
      textMuted: '#9d5174',
      accent: '#ec4899',
      accent2: '#a78bfa',
      accentText: '#fff0f6',
      mode: 'light',
      font: 'sans',
      grain: 0.06,
      glow: 0.4,
      vibe: 'bakery pastel',
    },
  },
  {
    id: 'tf2red',
    label: 'TF2 Red',
    glyph: '🔴',
    tokens: {
      bg: '#dddfd3',
      bgAlt: '#CDD0C2',
      surface: 'rgba(255,255,255,0.8)',
      surfaceMuted: 'rgba(54,54,54,0.08)',
      border: 'rgba(54,54,54,0.12)',
      borderStrong: 'rgba(54,54,54,0.24)',
      text: '#363636',
      textMuted: '#5A5A5A',
      accent: '#FB524F',
      accent2: '#661C18',
      accentText: '#dddfd3',
      mode: 'light',
      font: 'sans',
      grain: 0.02,
      glow: 0.3,
      vibe: 'builders league united',
    },
  },
];

export const defaultThemeId = 'panda';

export function getTheme(id: string): Theme {
  return themes.find((t) => t.id === id) ?? themes[0];
}
