export default function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1320px] px-6 md:px-12 py-12 mt-16 flex items-center justify-between text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--meta-ink))]">
      <span>© Rachel Kirmitsaki</span>
      <a
        href="https://linkedin.com/in/rachelkirmitsaki"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="hover:text-[hsl(var(--ink-strong))] transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
        </svg>
      </a>
    </footer>
  );
}
