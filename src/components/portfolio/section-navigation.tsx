import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { navigationScrollBehavior } from "@/lib/navigation-scroll";
import { usePortfolioHeaderHeight } from "@/lib/portfolio-header-height";
import type { Project } from "@/data/projects";

export function SectionNavigation({
  items,
  to,
}: {
  items: { label: string; id: string }[];
  to: `/work/${Project["slug"]}`;
}) {
  const { pathname } = useLocation();
  const [reducedMotion, setReducedMotion] = useState(true);
  const [activeId, setActiveId] = useState(items[0]?.id);
  usePortfolioHeaderHeight();
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const update = () => {
      const height =
        document.querySelector<HTMLElement>(".portfolio-header")?.getBoundingClientRect().height ?? 80;
      let current = items[0]?.id;
      for (const item of items) {
        const target = document.getElementById(item.id);
        if (target && target.getBoundingClientRect().top <= height + 100) current = item.id;
      }
      setActiveId(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);
  return (
    <nav
      aria-label="Case study sections"
      className="case-study-navigation hairline-top hairline-bottom bg-background"
    >
      <div className="mx-auto flex max-w-[1200px] gap-7 overflow-x-auto px-6 py-5">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={activeId === item.id ? "location" : undefined}
            className="nav-link shrink-0"
            data-active={activeId === item.id}
            onClick={(event) => {
              event.preventDefault();
              const target = document.getElementById(item.id);
              if (target) {
                target.scrollIntoView({
                  behavior: navigationScrollBehavior(pathname, to, reducedMotion),
                  block: "start",
                });
                window.history.replaceState(null, "", `#${item.id}`);
              }
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
