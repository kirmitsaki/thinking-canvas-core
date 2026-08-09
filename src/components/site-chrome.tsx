import { Figma, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NAV_ITEMS } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b bg-warm-white transition-[border-color,box-shadow] duration-300"
      style={{
        borderBottomColor: scrolled ? "var(--caramel)" : "var(--border)",
        boxShadow: scrolled ? "0 1px 0 0 var(--caramel)" : "none",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 pt-6 pb-5 md:pt-8 md:pb-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Link to="/" className="block text-foreground" aria-label="Rachel Kirmitsaki · home">
            <p className="font-serif text-3xl leading-none tracking-tight md:text-[32px]">
              Rachel Kirmitsaki
            </p>
          </Link>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 md:justify-end">
            <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Sections">
              {NAV_ITEMS.map((s) => (
                <NavLink key={s.path} to={s.path} className="nav-link">
                  {s.name}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-1" aria-label="Links">
              <a
                href="https://www.linkedin.com/in/rachelkirmitsaki/"
                target="_blank"
                rel="noreferrer"
                aria-label="Rachel Kirmitsaki on LinkedIn"
                title="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center text-foreground/65 transition-colors hover:text-accent"
              >
                <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.7} />
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center text-foreground/65 transition-colors hover:text-accent"
                    aria-label="Request the Figma portfolio link"
                  >
                    <Figma className="h-[18px] w-[18px]" strokeWidth={1.7} />
                  </button>
                </DialogTrigger>
                <DialogContent className="border-0 bg-warm-ivory text-foreground sm:rounded-none">
                  <DialogTitle className="sr-only">Figma portfolio</DialogTitle>
                  <div className="flex flex-col items-center gap-5 text-center">
                    <Figma className="h-8 w-8 text-accent" strokeWidth={1.4} aria-hidden="true" />
                    <DialogDescription className="max-w-[34ch] font-serif text-lg leading-relaxed text-muted-foreground">
                      Link to Figma portfolio available on request only.
                    </DialogDescription>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { pathname } = useLocation();

  return (
    <footer
      className={`border-t bg-warm-white text-foreground/75 ${pathname === "/" ? "" : "mt-24"}`}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-sm tracking-wide">RK · written in London</p>
        <div className="flex items-center gap-3" aria-label="Links">
          <a
            href="https://www.linkedin.com/in/rachelkirmitsaki/"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Kirmitsaki on LinkedIn"
            title="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center text-foreground/65 transition-colors hover:text-accent"
          >
            <Linkedin className="h-5 w-5" strokeWidth={1.7} />
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center text-foreground/65 transition-colors hover:text-accent"
                aria-label="Request the Figma portfolio link"
              >
                <Figma className="h-5 w-5" strokeWidth={1.7} />
              </button>
            </DialogTrigger>
            <DialogContent className="border-0 bg-warm-ivory text-foreground sm:rounded-none">
              <DialogTitle className="sr-only">Figma portfolio</DialogTitle>
              <div className="flex flex-col items-center gap-5 text-center">
                <Figma className="h-8 w-8 text-accent" strokeWidth={1.4} aria-hidden="true" />
                <DialogDescription className="max-w-[34ch] font-serif text-lg leading-relaxed text-muted-foreground">
                  Link to Figma portfolio available on request only.
                </DialogDescription>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
}
