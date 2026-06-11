import LinkedInIcon from "@/components/LinkedInIcon";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[hsl(var(--hairline))] mt-auto">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12 py-10 grid grid-cols-3 items-center text-[12px] font-light text-[hsl(var(--ink-body))]/40">
        <div className="justify-self-start tracking-[0.18em] uppercase">RK</div>
        <div className="justify-self-center text-center">© 2025 Rachel Kirmitsaki</div>
        <div className="justify-self-end flex items-center gap-4">
          <a
            href="mailto:rachel.kirmitsaki@gmail.com"
            className="transition-colors hover:text-[hsl(var(--ink-strong))]"
          >
            rachel.kirmitsaki@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/rachelkirmitsaki"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[hsl(var(--ink-strong))]"
          >
            <LinkedInIcon size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
