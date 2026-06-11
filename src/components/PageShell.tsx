import type { ReactNode } from "react";
import SiteNav from "@/components/SiteNav";

/**
 * Page shell — site nav + centered editorial container.
 * Use `centered` for hero pages (Index) where the main column
 * vertically centers its single section.
 */
export function PageShell({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={
        "min-h-screen bg-background text-foreground" +
        (centered ? " flex flex-col" : "")
      }
    >
      <SiteNav />
      <main
        className={
          "mx-auto w-full max-w-[1320px] px-6 md:px-12" +
          (centered ? " flex-1 flex items-center" : "")
        }
      >
        {children}
      </main>
    </div>
  );
}

type HeaderSize = "hero" | "section" | "essay";

const titleSizes: Record<HeaderSize, string> = {
  hero: "text-[56px] sm:text-[88px] md:text-[128px] leading-[0.95] tracking-[-0.025em]",
  section: "text-[64px] md:text-[136px] leading-[0.95] tracking-[-0.025em]",
  essay: "text-[40px] sm:text-[56px] md:text-[80px] leading-[1.02] tracking-[-0.02em]",
};

/**
 * Editorial page header — display heading + optional lede.
 * Used on Index (hero), Work / Writing / About (section), and Essay.
 */
export function PageHeader({
  title,
  lede,
  size = "section",
  children,
}: {
  title: ReactNode;
  lede?: ReactNode;
  size?: HeaderSize;
  children?: ReactNode;
}) {
  return (
    <section className="pt-24 md:pt-40 pb-12 md:pb-16">
      <h1
        className={
          "font-editorial text-[hsl(var(--ink-strong))] " + titleSizes[size]
        }
      >
        {title}
      </h1>
      {lede && (
        <p className="mt-10 md:mt-14 max-w-2xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
          {lede}
        </p>
      )}
      {children}
    </section>
  );
}

export function PageRule() {
  return <hr className="border-[hsl(var(--hairline))]" />;
}
