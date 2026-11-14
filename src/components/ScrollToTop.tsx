import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/section-scroll";

/**
 * Resets scroll to top on route changes (pathname).
 * Resolves saved anchors even when the destination page is lazy-loaded.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let cancelScroll: (() => void) | undefined;
      let observer: MutationObserver | undefined;
      let timer = 0;
      const align = () => {
        let id: string;
        try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
        const target = document.getElementById(id);
        if (!target) return;
        observer?.disconnect();
        window.clearTimeout(timer);
        cancelScroll = scrollToSection(target, "auto");
      };
      observer = new MutationObserver(align);
      observer.observe(document.body, { childList: true, subtree: true });
      timer = window.setTimeout(() => observer?.disconnect(), 5000);
      align();
      return () => {
        observer?.disconnect();
        window.clearTimeout(timer);
        cancelScroll?.();
      };
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
