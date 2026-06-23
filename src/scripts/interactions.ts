/**
 * Global interactions — imported once on the index page.
 * - GSAP ScrollTrigger reveals, staggered section headers, parallax.
 * - Magnetic button pull for [data-magnetic].
 * - Parallax for [data-parallax] layers.
 * - Konami code easter egg.
 * Everything degrades gracefully under prefers-reduced-motion.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const touch = matchMedia('(hover: none), (pointer: coarse)').matches;

const ready = () =>
  new Promise<void>((res) =>
    document.readyState !== 'loading'
      ? res()
      : document.addEventListener('DOMContentLoaded', () => res(), { once: true })
  );

async function init() {
  await ready();
  if (reduce) {
    // make sure reveal targets are visible
    document
      .querySelectorAll<HTMLElement>('[data-reveal]')
      .forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.filter = 'none';
      });
    initMagnetic(); // still safe — does nothing expensive
    return;
  }

  initReveals();
  initParallax();
  initMagnetic();
  // Skip Konami code (snake game) on touch devices — no keyboard available
  if (!touch) initKonami();
}

// ── Scroll reveals: staggered fade/blur/slide for [data-reveal] ───────────
function initReveals() {
  const els = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  els.forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay || '0');
    gsap.to(el, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.9,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Sequential reveal for groups: [data-reveal-group] > children
  gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const children = Array.from(
      group.querySelectorAll<HTMLElement>(':scope > *')
    );
    gsap.set(children, { opacity: 0, y: 24, filter: 'blur(6px)' });
    gsap.to(children, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.7,
      stagger: 0.07,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: group,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  });
}

// ── Parallax: layers move at [data-parallax="0.2"] (speed factor) ─────────
function initParallax() {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.2');
    gsap.to(el, {
      yPercent: -speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

// ── Magnetic pull for [data-magnetic] ─────────────────────────────────────
function initMagnetic() {
  if (touch) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.mbStrength || '0.35');
    const inner = el.querySelector<HTMLElement>('.mb-inner');
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
    let ixTo: ((v: number) => void) | null = null;
    let iyTo: ((v: number) => void) | null = null;
    if (inner) {
      ixTo = gsap.quickTo(inner, 'x', { duration: 0.5, ease: 'power3.out' });
      iyTo = gsap.quickTo(inner, 'y', { duration: 0.5, ease: 'power3.out' });
    }
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      xTo(x * strength);
      yTo(y * strength);
      ixTo?.(x * strength * 0.4);
      iyTo?.(y * strength * 0.4);
    });
    el.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
      ixTo?.(0);
      iyTo?.(0);
    });
  });
}

// ── Konami code → snake game modal ───────────────────────────────────────
// Replaces the old matrix-rain easter egg. Theme-aware canvas snake, edge
// wrap, auto-restart, a short WebAudio beep on death (no asset). Bigger than
// prev1's 252px — covers ~min(80vmin, 560px). Full cleanup on close.
function initKonami() {
  const seq = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a',
  ];
  let idx = 0;

  const deathBeep = () => {
    try {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      if (!Ctx) return;
      const ac = new Ctx();
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = 'square';
      o.frequency.setValueAtTime(220, ac.currentTime);
      o.frequency.exponentialRampToValueAtTime(70, ac.currentTime + 0.18);
      g.gain.setValueAtTime(0.18, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.2);
      o.connect(g).connect(ac.destination);
      o.start();
      o.stop(ac.currentTime + 0.2);
      o.onended = () => ac.close();
    } catch { /* audio blocked — silent */ }
  };

  const launch = () => {
    if (document.querySelector('.snake-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'snake-overlay';
    overlay.innerHTML = `
      <div class="snake-modal glass-strong" role="dialog" aria-modal="true" aria-label="Snake game">
        <button class="snake-modal-x" aria-label="Close">&times;</button>
        <h3 class="snake-title">snake</h3>
        <div class="snake-bar">
          <span class="snake-score">score: 0</span>
          <span class="snake-status">arrow keys to start</span>
        </div>
        <canvas class="snake-canvas"></canvas>
        <p class="snake-help">wasd / arrows · wraps edges · auto-restarts</p>
      </div>`;
    document.body.appendChild(overlay);

    const canvas = overlay.querySelector<HTMLCanvasElement>('.snake-canvas')!;
    const scoreEl = overlay.querySelector<HTMLElement>('.snake-score')!;
    const statusEl = overlay.querySelector<HTMLElement>('.snake-status')!;
    const ctx = canvas.getContext('2d')!;

    const GRID = 24;
    const CELL = Math.floor(Math.min(innerWidth * 0.8, innerHeight * 0.8, 560) / GRID);
    canvas.width = GRID * CELL;
    canvas.height = GRID * CELL;

    const cs = () => getComputedStyle(document.documentElement);
    const read = (name: string, fb: string) => cs().getPropertyValue(name).trim() || fb;

    let snake: { x: number; y: number }[];
    let dir: { x: number; y: number };
    let nextDir: { x: number; y: number };
    let food: { x: number; y: number } | null;
    let score: number;
    let gameOver: boolean;
    let started: boolean;
    let lastTick = 0;
    let raf = 0;
    let restartTo: number | null = null;
    let destroyed = false;
    const TICK = 120;

    const placeFood = () => {
      let attempts = 0;
      while (attempts < 500) {
        const fx = Math.floor(Math.random() * GRID);
        const fy = Math.floor(Math.random() * GRID);
        if (!snake.some((s) => s.x === fx && s.y === fy)) { food = { x: fx, y: fy }; return; }
        attempts++;
      }
    };

    const initGame = () => {
      const mid = Math.floor(GRID / 2);
      snake = [{ x: mid, y: mid }, { x: mid - 1, y: mid }, { x: mid - 2, y: mid }];
      dir = { x: 1, y: 0 };
      nextDir = { x: 1, y: 0 };
      food = null;
      score = 0;
      gameOver = false;
      started = false;
      lastTick = 0;
      placeFood();
      updateUI();
      draw();
    };

    const updateUI = () => {
      scoreEl.textContent = `score: ${score}`;
      statusEl.textContent = gameOver ? 'game over!' : started ? 'playing…' : 'arrow keys to start';
    };

    const step = () => {
      dir = nextDir;
      const head = { x: (snake[0].x + dir.x + GRID) % GRID, y: (snake[0].y + dir.y + GRID) % GRID };
      if (snake.some((s) => s.x === head.x && s.y === head.y)) {
        gameOver = true;
        updateUI();
        deathBeep();
        restartTo = window.setTimeout(() => { if (!destroyed) initGame(); }, 1500);
        return;
      }
      snake.unshift(head);
      if (food && head.x === food.x && head.y === food.y) { score++; placeFood(); updateUI(); }
      else snake.pop();
    };

    const draw = () => {
      const bg = read('--t-bg-alt', '#161618');
      const fg = read('--t-text', '#fafafa');
      const acc = read('--t-accent', '#ffffff');
      const acc2 = read('--t-accent-2', '#a3a3a3');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (food) {
        ctx.fillStyle = acc2;
        ctx.beginPath();
        ctx.arc(food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, CELL / 2 - 1, 0, Math.PI * 2);
        ctx.fill();
      }
      snake.forEach((s, i) => {
        ctx.fillStyle = i === 0 ? fg : acc;
        const r = i === 0 ? 5 : 3;
        ctx.beginPath();
        (ctx as any).roundRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2, r);
        ctx.fill();
      });
    };

    const loop = (ts: number) => {
      if (destroyed) return;
      if (!gameOver && started && ts - lastTick >= TICK) { step(); lastTick = ts; }
      draw();
      raf = requestAnimationFrame(loop);
    };

    const keyHandler = (e: KeyboardEvent) => {
      if (destroyed) return;
      const k = e.key;
      if (k === 'ArrowUp' || k === 'w' || k === 'W') { if (dir.y !== 1) { nextDir = { x: 0, y: -1 }; started = true; } e.preventDefault(); }
      else if (k === 'ArrowDown' || k === 's' || k === 'S') { if (dir.y !== -1) { nextDir = { x: 0, y: 1 }; started = true; } e.preventDefault(); }
      else if (k === 'ArrowLeft' || k === 'a' || k === 'A') { if (dir.x !== 1) { nextDir = { x: -1, y: 0 }; started = true; } e.preventDefault(); }
      else if (k === 'ArrowRight' || k === 'd' || k === 'D') { if (dir.x !== -1) { nextDir = { x: 1, y: 0 }; started = true; } e.preventDefault(); }
      else if (k === 'Escape') { cleanup(); }
      if (started) updateUI();
    };

    let tsx = 0, tsy = 0;
    const ts = (e: TouchEvent) => { tsx = e.touches[0].clientX; tsy = e.touches[0].clientY; };
    const te = (e: TouchEvent) => {
      if (destroyed) return;
      const dx = e.changedTouches[0].clientX - tsx;
      const dy = e.changedTouches[0].clientY - tsy;
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      if (Math.abs(dx) > Math.abs(dy)) { if (dx > 0 && dir.x !== -1) nextDir = { x: 1, y: 0 }; else if (dx < 0 && dir.x !== 1) nextDir = { x: -1, y: 0 }; }
      else { if (dy > 0 && dir.y !== -1) nextDir = { x: 0, y: 1 }; else if (dy < 0 && dir.y !== 1) nextDir = { x: 0, y: -1 }; }
      started = true; updateUI();
    };

    function cleanup() {
      destroyed = true;
      cancelAnimationFrame(raf);
      if (restartTo) clearTimeout(restartTo);
      document.removeEventListener('keydown', keyHandler);
      canvas.removeEventListener('touchstart', ts as any);
      canvas.removeEventListener('touchend', te as any);
      overlay.remove();
    }

    overlay.addEventListener('click', (e) => { if (e.target === overlay) cleanup(); });
    overlay.querySelector('.snake-modal-x')!.addEventListener('click', cleanup);
    document.addEventListener('keydown', keyHandler);
    canvas.addEventListener('touchstart', ts as any, { passive: true });
    canvas.addEventListener('touchend', te as any, { passive: true });

    initGame();
    raf = requestAnimationFrame(loop);
  };

  addEventListener('keydown', (e) => {
    // don't hijack typing while a form/input is focused
    const t = e.target as HTMLElement;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (k === seq[idx]) {
      idx++;
      if (idx === seq.length) { idx = 0; launch(); }
    } else {
      idx = k === seq[0] ? 1 : 0;
    }
  });
}

init();
