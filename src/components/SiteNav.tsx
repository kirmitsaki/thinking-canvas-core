import { NavLink } from "react-router-dom";
import { Linkedin } from "lucide-react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work", end: true },
  { to: "/about", label: "About", end: true },
];

const SiteNav = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-hairline">
      <nav className="mx-auto max-w-[1200px] px-8 md:px-12 flex items-center justify-between h-20">
        <ul className="flex items-center gap-10 md:gap-14">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `text-[12px] font-medium tracking-[0.04em] pb-[6px] border-b transition-colors ${
                    isActive
                      ? "text-ink-strong border-ink-strong"
                      : "text-muted-ink border-transparent hover:text-ink-strong"
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
          className="text-muted-ink hover:text-ink-strong transition-colors"
        >
          <Linkedin size={17} strokeWidth={1.5} />
        </a>
      </nav>
    </header>
  );
};

export default SiteNav;
