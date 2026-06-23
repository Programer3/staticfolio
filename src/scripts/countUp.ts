/**
 * countUp — shared count-up, started when the element scrolls into view.
 * Drives the LOC counter total (easeOutCubic) and the hero "exp" counter
 * (piecewise easeInExpo → easeOutBack, gated on page visibility) so they
 * share one animation language. Degrades instantly under reduced motion.
 *
 * Per-element opt-in via data attributes:
 *   data-count-up            required to be picked up
 *   data-target="N"          target integer
 *   data-duration="ms"       (default 1600)
 *   data-ease="expoback"     use the piecewise expo→back curve (hero exp).
 *                            Default is easeOutCubic (LOC counter).
 *   data-visibility="1"      wait until the tab is visible before starting.
 */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function easeInExpo(t: number): number {
  return t <= 0 ? 0 : Math.pow(2, 10 * (t - 1));
}

function easeOutBack(t: number, s = 1.7): number {
  return 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2);
}

// Slow dramatic expo start, then an overshooting back settle.
function easeExpoBack(t: number): number {
  return t < 0.5 ? easeInExpo(t * 2) / 2 : 0.5 + easeOutBack((t - 0.5) * 2) / 2;
}

function pickEase(el: HTMLElement): (t: number) => number {
  return el.dataset.ease === 'expoback' ? easeExpoBack : easeOutCubic;
}

export function initCountUp(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-count-up]');
  els.forEach((el) => {
    const target = Number(el.dataset.target || '0');
    const duration = Number(el.dataset.duration || '1600');
    const ease = pickEase(el);
    const needsVisibility = el.dataset.visibility === '1';

    if (reduce) {
      el.textContent = target.toLocaleString();
      return;
    }

    const run = () => {
      let t0: number | null = null;
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / duration, 1);
        el.textContent = Math.round(ease(p) * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const startIfReady = () => {
      if (needsVisibility && document.visibilityState !== 'visible') return;
      run();
      io.disconnect();
      if (visHandler) document.removeEventListener('visibilitychange', visHandler);
    };

    let visHandler: (() => void) | null = null;
    if (needsVisibility) {
      visHandler = () => startIfReady();
      document.addEventListener('visibilitychange', visHandler);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) startIfReady();
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
  });
}
