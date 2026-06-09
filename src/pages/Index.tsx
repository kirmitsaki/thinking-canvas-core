import { Link, NavLink } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { RuleLabel, Display, MetaMono } from "@/components/editorial";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-ink-strong text-background flex flex-col relative overflow-hidden">
      {/* Environmental vertical word along right edge */}
      <p
        aria-hidden
        className="pointer-events-none hidden md:block absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[11px] tracking-[0.6em] uppercase text-background/15 font-mono select-none"
      >
        Portfolio
      </p>

      {/* Architectural hairline frame — anchored inset */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-6 md:inset-10 border border-background/12"
      />

      {/* Nav */}
      <header className="w-full sticky top-0 z-50 bg-ink-strong/70 backdrop-blur">
        <nav className="mx-auto max-w-[1200px] px-8 md:px-12 flex items-center justify-between h-20">
          <ul className="flex items-center gap-10 md:gap-14">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `text-[12px] font-medium tracking-[0.04em] pb-[6px] border-b transition-colors ${
                      isActive
                        ? "text-background border-background"
                        : "text-background/55 border-transparent hover:text-background"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href="https://linkedin.com/in/rachelkirmitsaki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-background/55 hover:text-background transition-colors"
          >
            <Linkedin size={17} strokeWidth={1.5} />
          </a>
        </nav>
      </header>

      {/* Cover plate */}
      <div className="flex-1 mx-auto max-w-[1200px] px-8 md:px-12 w-full pt-[60px] pb-[60px] relative flex flex-col">
        {/* Top row: cover marker (left) / issue mark (right) */}
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-6 md:col-span-5 md:col-start-2">
            <RuleLabel tone="inverse">Head of Product Design</RuleLabel>
            <p className="mt-4 text-[13px] md:text-[14px] leading-[1.7] tracking-[-0.005em] text-background/60 max-w-[36ch]">
              B2B SaaS · Fintech · AI &amp; Platform Products
            </p>
          </div>
        </div>

        {/* Name — centered composition with serif italic surname */}
        <div className="flex-1 grid grid-cols-12 gap-x-6 md:gap-x-10 items-center">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <Display className="animate-[fadeIn_900ms_ease-out_both]">
              Rachel
              <span className="block text-background/75 font-editorial italic tracking-[-0.02em] md:pl-[28%]">
                Kirmitsaki
              </span>
            </Display>
          </div>
        </div>

        {/* Bottom row: positioning (left) / entry link (right) */}
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-end">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <p className="text-[13px] md:text-[14px] leading-[1.7] tracking-[-0.005em] text-background/60 max-w-[36ch]">
              Defining product direction across complex digital products.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-12 md:mt-0 md:flex md:justify-end">
            <Link
              to="/work"
              className="group inline-flex flex-col gap-3 text-right"
            >
              <span className="inline-flex items-baseline gap-3 text-[12px] tracking-[0.18em] uppercase text-background/85 hover:text-background transition-colors font-mono">
                <span className="border-b border-background/25 group-hover:border-background/70 pb-1 transition-colors">
                  Explore the Work
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Index;
