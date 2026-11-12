import Seo from "@/components/Seo";
import { pageMeta } from "@/data/projects";
import { DragonArt } from "@/components/portfolio/dragon";
import { ToolLogos } from "@/components/portfolio/tool-logos";

const meta = pageMeta(
  "About",
  "Meet Rachel Kirmitsaki, an independent Product Design Consultant with over a decade of experience across cybersecurity, fintech and research platforms."
);

export default function About() {
  return (
    <main className="relative z-10 mx-auto max-w-[1200px] px-6 py-12 md:py-16">
      <Seo title={meta.title} description={meta.description} path="/about" ogType={meta.ogType} />
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div>
          <header>
            <h1 className="page-title">Hey there! I'm Rachel</h1>
            <p className="standfirst mt-6 max-w-[520px]">
              I started in code, moved into product design, and eventually design leadership.
            </p>
          </header>
          <section className="body-copy mt-10 max-w-[520px] space-y-6">
            <p>
              Over the past decade, I’ve worked across cybersecurity, financial markets and
              academic research.
            </p>
            <p>
              I’ve built design teams and systems, shaped product direction, and designed products
              used by global financial institutions and thousands of researchers.
            </p>
            <p>
              Now, I work independently with product teams to solve complex problems and make
              better products.
            </p>
            <p>
              I like getting into the detail, understanding how things work, and figuring out how
              to make them better.
            </p>
          </section>
          <section className="hairline-top mt-10 max-w-[520px] pt-6">
            <h2 className="subsection-title">Tools I work with</h2>
            <ToolLogos />
          </section>
        </div>
        <div className="flex flex-col gap-5 md:pt-10">
          <section className="editorial-card min-w-0 p-6 md:p-8">
            <span aria-hidden="true" className="about-dragon">
              <span className="about-dragon__float">
                <DragonArt />
              </span>
            </span>
          </section>
        </div>
      </div>
    </main>
  );
}
