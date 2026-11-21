import { useEffect } from "react";

let consumers = 0;
let stopObserving: (() => void) | undefined;

/**
 * Keeps `--portfolio-header-height` in sync with the sticky site header so any
 * secondary sticky bar (section nav, sample-work tabs) can sit directly below it.
 */
export function usePortfolioHeaderHeight() {
  useEffect(() => {
    consumers += 1;
    if (!stopObserving) {
    const header = document.querySelector<HTMLElement>(".portfolio-header");
    const update = () => {
      const height = header?.getBoundingClientRect().height ?? 80;
      document.documentElement.style.setProperty("--portfolio-header-height", `${height}px`);
    };
    const observer = new ResizeObserver(update);
    if (header) observer.observe(header);
    update();
    window.addEventListener("resize", update);
    stopObserving = () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
    }
    return () => {
      consumers -= 1;
      if (!consumers) {
        stopObserving?.();
        stopObserving = undefined;
      }
    };
  }, []);
}
