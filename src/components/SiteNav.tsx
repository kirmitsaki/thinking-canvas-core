import { Link, useLocation } from "react-router-dom";

const items = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/writing", label: "Writing" },
];

export default function SiteNav() {
  const { pathname } = useLocation();
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[hsl(var(--background))]/60 backdrop-blur-[12px] border-b border-[hsl(var(--hairline))]/50">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-5 flex items-baseline">
        <Link
          to="/"
          className={
            "font-editorial text-[20px] md:text-[22px] leading-none tracking-tight text-[hsl(var(--ink-strong))] " +
            (pathname === "/" ? "invisible pointer-events-none" : "")
          }
        >
          Rachel Kirmitsaki
        </Link>
        <nav className="ml-auto flex items-center gap-6 md:gap-10 text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--ink-body))]">
          {items.map((i) => {
            const active =
              pathname === i.to ||
              (i.to === "/writing" && pathname.startsWith("/essays")) ||
              (i.to === "/work" && pathname.startsWith("/work"));
            return (
              <Link
                key={i.to}
                to={i.to}
                className={
                  "transition-colors hover:text-[hsl(var(--ink-strong))] " +
                  (active
                    ? "text-[hsl(var(--ink-strong))] border-b border-[hsl(var(--ink-strong))] pb-0.5"
                    : "")
                }
              >
                {i.label}
              </Link>
            );
          })}
          <a
            href="https://linkedin.com/in/rachelkirmitsaki"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors text-[hsl(var(--ink-body))] hover:text-[hsl(var(--ink-strong))]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M8 10.5v6" />
              <circle cx="8" cy="7.5" r="0.6" />
              <path d="M12 16.5v-6" />
              <path d="M12 13c0-1.5 1-2.5 2.25-2.5S16.5 11.5 16.5 13v3.5" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
