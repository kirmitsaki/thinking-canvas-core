import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationScrollBehavior } from "@/lib/navigation-scroll";
import { contactDetails } from "@/data/contact";
import { FooterDragon } from "@/components/portfolio/dragon";

type NavTo = "/" | "/work" | "/field-notes" | "/about" | "/contact";

export function PortfolioNavLink({
  to,
  children,
  className,
  active,
}: {
  to: NavTo;
  children: ReactNode;
  className?: string;
  active?: boolean;
}) {
  const { pathname } = useLocation();
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const samePage = pathname === to;
  const behavior = navigationScrollBehavior(pathname, to, reducedMotion);
  return (
    <Link
      to={to}
      className={className}
      data-active={active}
      onClick={(event) => {
        if (
          samePage &&
          event.button === 0 &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          !event.altKey
        ) {
          window.scrollTo({ top: 0, behavior });
        }
      }}
    >
      {children}
    </Link>
  );
}

export function PortfolioHeader() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className="portfolio-header sticky top-0 z-30 bg-card" data-scrolled={scrolled}>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-5">
        <PortfolioNavLink to="/" className="wordmark">
          Rachel Kirmitsaki<span className="ml-2 text-accent">·</span>
        </PortfolioNavLink>
        <nav aria-label="Main navigation" className="flex gap-6 md:gap-9">
          <PortfolioNavLink to="/work" className="nav-link" active={pathname.startsWith("/work")}>
            PORTFOLIO
          </PortfolioNavLink>
          <PortfolioNavLink
            to="/field-notes"
            className="nav-link"
            active={pathname.startsWith("/field-notes")}
          >
            Field Notes
          </PortfolioNavLink>
          <PortfolioNavLink to="/about" className="nav-link" active={pathname === "/about"}>
            About
          </PortfolioNavLink>
          <PortfolioNavLink to="/contact" className="nav-link" active={pathname === "/contact"}>
            Contact
          </PortfolioNavLink>
        </nav>
      </div>
    </header>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="relative z-10 hairline-top bg-card">
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-4 overflow-hidden px-6 py-8">
        <FooterDragon />
        <p className="label-quiet relative z-10">RK · CRAFTED IN LONDON</p>
        <div className="relative z-10 flex gap-3">
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Rachel on LinkedIn"
            aria-label="Rachel on LinkedIn"
            className="accent-link"
          >
            <Linkedin size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function ContactLink({ children = "Get in touch" }: { children?: React.ReactNode }) {
  return (
    <Button asChild variant="editorial">
      <PortfolioNavLink to="/contact">
        {children}
        <ArrowUpRight size={16} />
      </PortfolioNavLink>
    </Button>
  );
}
