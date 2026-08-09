import Seo from "@/components/Seo";
import chapterMendeley from "@/assets/chapter-mendeley.jpg";
import chapterOrigin from "@/assets/chapter-origin.jpg";
import chapterScw from "@/assets/chapter-scw.jpg";

type Chapter = {
  chapter: string;
  period: string;
  label: string;
  company: string;
  descriptor: string;
  image: string;
  imageAlt: string;
  stat?: { figure: string; caption: string };
  paragraphs: string[];
  observations: string[];
  outcome: { label: string; text: string };
};

const CHAPTERS: Chapter[] = [
  {
    chapter: "01",
    period: "MMXXIII – Present",
    label: "Head of Product Design",
    company: "Secure Code Warrior",
    descriptor: "AI-driven developer-risk platform · London, EMEA/APAC",
    image: chapterScw,
    imageAlt: "Abstract editorial illustration of layered security shields and a network graph",
    paragraphs: [
      "I joined after a restructure. The product had been around for years, but the design function had never really been established across the company.",
      "So the first part of the job was fairly foundational: build the team, create a design system engineers would actually use, introduce accessibility standards, and work out how design should operate alongside product and engineering.",
      "Over time the role became broader. I became more involved in product direction, including the vision work that helped move the company from thinking mainly about learning towards a wider developer-risk platform.",
    ],
    observations: [
      "TEAM\n6 designers across EMEA and APAC",
      "FOUNDATIONS\nDesign system and accessibility practice",
      "DIRECTION\nProduct vision and strategy",
    ],
    outcome: {
      label: "FOUNDATIONS",
      text: "A design team across two regions, a shared design system, accessibility standards, and a product vision that teams could work towards together.",
    },
  },
  {
    chapter: "02",
    period: "MMXX – MMXXIII",
    label: "Lead Product Designer",
    company: "Origin Markets",
    descriptor: "Fintech platform for debt capital markets · London",
    image: chapterOrigin,
    imageAlt: "Abstract editorial illustration of ledger lines and bond market bars",
    paragraphs: [
      "I joined as the first designer while the company and product were still taking shape.",
      "Debt capital markets was a new world to me, so a lot of the early work was simply learning how the process actually worked: who spoke to whom, where information moved, which parts happened outside the software, and why some apparently inefficient steps were still important.",
      "I built the design function and Morpho, the first design system, and worked closely with the founders as the product developed.",
    ],
    observations: [
      "ROLE\nFirst designer",
      "FOUNDATION\nBuilt Morpho and the design practice",
      "CUSTOMERS\nBanks and borrowers",
    ],
    outcome: {
      label: "BUILT FROM SCRATCH",
      text: "A design function, a research practice and Morpho, the system the product continued to grow on.",
    },
  },
  {
    chapter: "03",
    period: "MMXIX – MMXX",
    label: "Senior UX/UI Designer",
    company: "Mendeley (Elsevier)",
    descriptor: "Academic reference management platform · London",
    image: chapterMendeley,
    imageAlt: "Abstract editorial illustration of index cards and a citation grid",
    paragraphs: [
      "I worked on the parts of Mendeley where researchers spent most of their time: Library, Reader and Citation.",
      "It was a different kind of product from the financial and security platforms I worked on later, but still a complicated one. Researchers were managing large bodies of knowledge over long periods of time, often moving between reading, organising, citing and writing.",
      "I also contributed to the wider design system and helped make regular research and usability testing part of how the team made decisions.",
    ],
    observations: [
      "PRODUCT\nLibrary, Reader and Citation",
      "SCALE\n120,000+ researchers",
      "PRACTICE\nContinuous research and usability testing",
    ],
    outcome: {
      label: "PRACTICE",
      text: "Research built into the normal rhythm of product decisions, rather than something saved for occasional studies.",
    },
  },
];

const anchorId = (company: string) =>
  company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function ChapterMarker({
  period,
  accentMode,
}: {
  period: string;
  accentMode?: "split" | "full";
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-5">
      {accentMode === "split" ? (
        <p className="label-quiet">
          <span className="text-accent">{period.split(" ")[0]}</span>
          <span>{" " + period.split(" ").slice(1).join(" ")}</span>
        </p>
      ) : accentMode === "full" ? (
        <p className="label">{period}</p>
      ) : (
        <p className="label-quiet">{period}</p>
      )}
    </div>
  );
}

function Observations({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-6 border-t border-border pt-6 sm:grid-cols-3">
      {items.map((item, i) => {
        const [label, ...textLines] = item.split("\n");
        return (
          <li key={item} className="max-w-[34ch]">
            <span className="label-quiet mb-2 block">{String(i + 1).padStart(2, "0")}</span>
            <p className="label-quiet">{label}</p>
            <p className="mt-2 font-serif text-[19px] italic leading-[1.4] text-foreground/85">
              {textLines.join(" ")}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

function Outcome({ label, text }: { label: string; text: string }) {
  return (
    <aside className="outcome-callout mt-12 max-w-[72ch]">
      <p className="label mb-3">{label}</p>
      <p className="font-serif text-[21px] leading-[1.45] md:text-[23px]">{text}</p>
    </aside>
  );
}

export default function TheWork() {
  return (
    <main className="page-shell pt-10 pb-14">
      <Seo
        title="The Work · Rachel Kirmitsaki"
        description="Selected chapters from Rachel Kirmitsaki’s work across cybersecurity, financial markets and academic research."
        path="/the-work"
      />

      <header className="page-header">
        <p className="label">The Work</p>
        <h1 className="mt-4 font-serif text-[42px] leading-[1.04] tracking-tight md:text-[60px]">
          I started close to code and moved into product design and then leadership.
        </h1>
        <p className="mt-6 max-w-[58ch] font-serif text-[20px] leading-[1.7] text-muted-foreground">
          Most of the last decade has been spent in cybersecurity, financial markets and academic
          research.
        </p>
      </header>

      {CHAPTERS.map((c, index) => {
        const leadsWithStat = Boolean(c.stat);
        const sideBySide = index === 2;

        return (
          <section
            key={c.company}
            id={anchorId(c.company)}
            aria-labelledby={`chapter-${index}`}
            className="scroll-mt-24"
          >
            {index > 0 && <hr className="chapter-rule" />}

            <ChapterMarker period={c.period} accentMode={index === 0 ? "split" : "full"} />

            {leadsWithStat && (
              <div className="mt-10 grid grid-cols-1 items-end gap-6 md:grid-cols-12">
                <p className="font-serif text-4xl leading-[1.05] tracking-tight md:col-span-7 md:text-5xl">
                  {c.stat?.figure}
                </p>
                <p className="standfirst max-w-[38ch] text-lg md:col-span-5">{c.stat?.caption}</p>
              </div>
            )}

            {!sideBySide && (
              <figure className={leadsWithStat ? "mt-10 md:ml-[16%]" : "mt-10"}>
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  width={1600}
                  height={900}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="block aspect-[1600/912] w-full rounded-[10px] border border-border bg-warm-white object-cover"
                />
              </figure>
            )}

            <div
              className={
                sideBySide
                  ? "mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-12"
                  : "mt-16 mb-14"
              }
            >
              {sideBySide && (
                <figure className="md:col-span-6">
                  <img
                    src={c.image}
                    alt={c.imageAlt}
                    width={1600}
                    height={900}
                    loading="lazy"
                    className="block aspect-[1600/912] w-full rounded-[10px] border border-border bg-warm-white object-cover"
                  />
                </figure>
              )}
              <div className={sideBySide ? "md:col-span-6" : ""}>
                <p className="label-quiet">{c.label}</p>
                <h2
                  id={`chapter-${index}`}
                  className="mt-4 font-serif text-5xl italic leading-[1.02] tracking-tight md:text-[64px]"
                >
                  {c.company}
                </h2>
                <p className="label mt-5 text-muted-foreground">{c.descriptor}</p>
              </div>
            </div>

            <div
              className={`${sideBySide ? "mt-14" : ""} max-w-[64ch] space-y-6 font-serif text-[18px] leading-[1.7] text-foreground/90`}
            >
              {c.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-14">
              <Observations items={c.observations} />
            </div>

            <Outcome label={c.outcome.label} text={c.outcome.text} />

            <div className="h-24" />
          </section>
        );
      })}

      <hr className="chapter-rule" />

      <section id="earlier" className="grid scroll-mt-24 grid-cols-1 gap-6 py-14 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="label">EARLIER</p>
        </div>
        <div className="max-w-[62ch] md:col-span-9">
          <p className="font-serif text-[17px] leading-[1.65] text-foreground/90">
            Before that I worked in consultancy, consumer services and migration technology.
          </p>
          <p className="mt-6 font-serif text-[17px] leading-[1.65] text-foreground/90">
            My first role was as a UX engineer, designing interfaces and building them too. I did not
            know it at the time, but that combination ended up shaping almost everything that came
            afterwards.
          </p>
        </div>
      </section>
    </main>
  );
}
