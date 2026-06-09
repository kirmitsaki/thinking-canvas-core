import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-20 md:pt-32 pb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))] md:pt-3">
            Section III
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="font-editorial text-[56px] md:text-[112px] leading-[0.95] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
              About
            </h1>
          </div>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <section className="py-20 md:py-28 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))]">
            Colophon
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-4 space-y-8 font-editorial text-[22px] md:text-[30px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
            <p>
              I started my career designing and building interfaces. Over time I became less interested in
              individual features and more interested in how products evolve through the people building them.
            </p>
            <p>
              Today I lead Product Design at Secure Code Warrior. My background includes research platforms,
              financial infrastructure, cybersecurity products, and AI-enabled systems.
            </p>
            <p>
              The products were different. The challenge was often the same: helping teams navigate complexity
              as products evolved.
            </p>
          </div>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <section className="py-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--meta-ink))]">
            Correspondence
          </div>
          <div className="col-span-12 md:col-span-10 flex flex-wrap gap-x-10 gap-y-3 text-[14px] md:text-[16px] text-[hsl(var(--ink-body))]">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="underline decoration-[hsl(var(--hairline))] underline-offset-[6px] hover:decoration-[hsl(var(--ink-strong))]"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="underline decoration-[hsl(var(--hairline))] underline-offset-[6px] hover:decoration-[hsl(var(--ink-strong))]"
            >
              Email
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
