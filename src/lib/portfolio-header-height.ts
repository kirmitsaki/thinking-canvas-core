import { useEffect } from "react";

/**
 * Keeps `--portfolio-header-height` in sync with the sticky site header so any
 * secondary sticky bar (section nav, sample-work tabs) can sit directly below it.
 */
export function usePortfolioHeaderHeight() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".portfolio-header");
    const update = () => {
      const height = header?.getBoundingClientRect().height ?? 80;
      document.documentElement.style.setProperty("--portfolio-header-height", `${height}px`);
    };
    const observer = new ResizeObserver(update);
    if (header) observer.observe(header);
    update();
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);
}
