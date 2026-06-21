import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LinkedInIcon from "@/components/LinkedInIcon";
import FigmaIcon from "@/components/FigmaIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const items = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/writing", label: "Writing" },
];

export default function SiteNav() {
  const { pathname } = useLocation();
  const [figmaOpen, setFigmaOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-[hsl(var(--background))]/60 backdrop-blur-[12px] border-b border-[hsl(var(--hairline))]/50">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6 md:px-12 py-5 flex items-baseline gap-4">
          <Link
            to="/"
            className={
              "font-editorial text-[18px] sm:text-[20px] md:text-[22px] leading-none tracking-tight text-[hsl(var(--ink-strong))] truncate transition-colors hover:[text-decoration:underline] hover:[text-decoration-color:hsl(var(--accent-stone))] hover:[text-decoration-thickness:1px] hover:[text-underline-offset:4px] " +
              (pathname === "/" ? "invisible pointer-events-none" : "")
            }
          >
            <span className="inline sm:hidden">RK</span>
            <span className="hidden sm:inline">Rachel Kirmitsaki</span>
          </Link>
          <nav className="ml-auto flex items-center gap-5 sm:gap-6 md:gap-10 text-[11px] sm:text-[12px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[hsl(var(--ink-body))]">

            {items.map((i) => {
              const active =
                pathname === i.to ||
                (i.to === "/writing" && pathname.startsWith("/essays"));
              return (
                <Link
                  key={i.to}
                  to={i.to}
                  className={
                    "font-normal transition-colors hover:text-[hsl(var(--ink-strong))] " +
                    (active
                      ? "text-[hsl(var(--ink-strong))] underline decoration-[#8B2500] decoration-2 underline-offset-4"
                      : "no-underline")
                  }
                >
                  {i.label}
                </Link>
              );
            })}
            <button
              type="button"
              aria-label="Figma portfolio"
              onClick={() => setFigmaOpen(true)}
              className="transition-colors text-[hsl(var(--ink-body))] hover:text-[hsl(var(--ink-strong))] cursor-pointer"
            >
              <FigmaIcon size={20} />
            </button>
            <a
              href="https://linkedin.com/in/rachelkirmitsaki"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors text-[hsl(var(--ink-body))] hover:text-[hsl(var(--ink-strong))]"
            >
              <LinkedInIcon size={20} />
            </a>
          </nav>
        </div>
      </header>

      <Dialog open={figmaOpen} onOpenChange={setFigmaOpen}>
        <DialogContent className="bg-[hsl(var(--background))] border-[hsl(var(--hairline))] text-[hsl(var(--foreground))]">
          <DialogHeader>
            <DialogTitle className="font-editorial text-xl">Figma portfolio</DialogTitle>
            <DialogDescription className="text-[hsl(var(--muted-ink))]">
              Link to portfolio available on request only.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
