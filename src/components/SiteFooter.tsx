export default function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-[hsl(var(--hairline))]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--meta-ink))]">
        <span>Rachel Kirmitsaki — Volume 01</span>
        <span>London · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
