import { Link, useLocation } from "react-router-dom";
import { Linkedin } from "lucide-react";

const items = [
  { to: "/notes", label: "Notes" },
  { to: "/about", label: "About" },
];

export default function SiteNav() {
  const { pathname } = useLocation();
  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-6 flex items-baseline justify-between">
        <Link
          to="/"
          className="font-editorial text-[20px] md:text-[22px] leading-none tracking-tight text-[hsl(var(--ink-strong))]"
        >
          Rachel Kirmitsaki
        </Link>
        <nav className="flex items-center gap-6 md:gap-10 text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--ink-body))]">
          {items.map((i) => {
            const active = pathname === i.to;
            return (
              <Link
                key={i.to}
                to={i.to}
                className={
                  "transition-colors hover:text-[hsl(var(--ink-strong))] " +
                  (active ? "text-[hsl(var(--ink-strong))]" : "")
                }
              >
                {i.label}
              </Link>
            );
          })}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[hsl(var(--ink-strong))]"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}
