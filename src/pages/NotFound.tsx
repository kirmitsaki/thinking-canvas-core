import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageHeader, PageRule, PageShell } from "@/components/PageShell";

const NotFound = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname,
    );
  }, [pathname]);

  return (
    <PageShell>
      <PageHeader
        title="404"
        lede="That page wandered off. The rest of the site is still here."
      />

      <PageRule />

      <section className="py-14 md:py-20">
        <a
          href="/"
          className="inline-block text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))] hover:text-[hsl(var(--ink-strong))] transition-colors"
        >
          ← Return home
        </a>
      </section>
    </PageShell>
  );
};

export default NotFound;
