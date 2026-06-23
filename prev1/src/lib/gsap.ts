import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function fadeInUp(element: string | Element, delay: number = 0, duration: number = 0.6) {
  return gsap.from(element, {
    y: 30,
    opacity: 0,
    duration,
    delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
}

export function staggerFadeIn(container: string, staggerAmount: number = 0.08) {
  return gsap.from(`${container} > *`, {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: staggerAmount,
    ease: "power2.out",
    scrollTrigger: {
      trigger: container as gsap.DOMTarget,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
}