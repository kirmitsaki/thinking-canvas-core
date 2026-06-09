import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-24 md:pt-40 pb-16 md:pb-24">
          <h1 className="font-editorial text-[56px] md:text-[112px] leading-[0.95] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
            About
          </h1>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <section className="py-16 md:py-24 max-w-3xl">
          <div className="space-y-7 font-editorial text-[22px] md:text-[28px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-strong))]">
            <p>I started my career designing and building interfaces.</p>
            <p>
              Over time I became less interested in individual features and more interested in how
              products evolve through the people building them.
            </p>
            <p>Today I lead Product Design at Secure Code Warrior.</p>
            <p>
              My background includes research platforms, financial infrastructure, cybersecurity
              products, and AI-enabled systems.
            </p>
            <p>
              The products were different. The challenge was often the same: helping teams navigate
              complexity as products evolved.
            </p>
          </div>

        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
