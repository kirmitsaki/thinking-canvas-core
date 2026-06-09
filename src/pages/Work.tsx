import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import {
  Container,
  Body,
  RuleLabel,
  ChapterMarker,
  MetaRail,
  Annotation,
  PullQuote,
  PageHeader,
  DarkPanel,
  FeatureTitle,
  LedeItalic,
  CardTitle,
  MetaMono,
} from "@/components/editorial";


type Chapter = {
  n: string;
  title: string;
  href: string;
  subtitle: string;
  tension: string;
  meta: { k: string; v: string }[];
  marker: string;
};

const chapters: Chapter[] = [
  {
    n: "03",
    title: "Secure Code Warrior",
    href: "/work/secure-code-warrior",
    subtitle: "Leading and defining product direction.",
    tension:
      "Shaping operational clarity across governance, observability, learning, and risk within an evolving AI software governance platform.",
    meta: [
      { k: "Role", v: "Head of Product Design" },
      { k: "Years", v: "2023 — Present" },
      { k: "Domain", v: "B2B SaaS · AI Governance" },
      { k: "Region", v: "EMEA + APAC" },
    ],
    marker: "Direction — Governance — Platform",
  },
  {
    n: "02",
    title: "Origin Markets",
    href: "/work/origin-markets",
    subtitle: "Building design from 0→1.",
    tension:
      "Transforming fragmented financial workflows into a connected operational platform used by borrowers and global investment banks.",
    meta: [
      { k: "Role", v: "Lead Product Designer" },
      { k: "Years", v: "2020 — 2023" },
      { k: "Domain", v: "Fintech · Capital Markets" },
      { k: "Region", v: "EMEA" },
    ],
    marker: "0→1 — Fintech — Operational",
  },
  {
    n: "01",
    title: "Mendeley (Elsevier)",
    href: "/work/mendeley",
    subtitle: "Designing systems for research at scale.",
    tension:
      "Supporting long-term academic workflows across reading, writing, organisation, and citation within a global research platform.",
    meta: [
      { k: "Role", v: "Senior UX/UI Designer" },
      { k: "Years", v: "2019 — 2020" },
      { k: "Domain", v: "Research Platform · SaaS" },
      { k: "Region", v: "Global" },
    ],
    marker: "Research — Scale — Platform",
  },
];

type Fragment = {
  n: string;
  title: string;
  href: string;
  note: string;
  meta: string;
  indent?: "left" | "right" | "center";
};

const fragments: Fragment[] = [
  {
    n: "a07",
    title: "Product Identity Foundations (SCW)",
    href: "/design-practice/scw-product-identity",
    note: "Visual language developed for a platform spanning governance, learning, observability, and risk.",
    meta: "Identity · Platform",
    indent: "left",
  },
  {
    n: "a06",
    title: "Wanda Library (SCW)",
    href: "/design-practice/wanda-tokens",
    note: "Design system supporting Secure Code Warrior's product platform across components, accessibility, themes, and operational states.",
    meta: "Design system · Product platform",
    indent: "right",
  },
  {
    n: "a05",
    title: "Morpho Library (Origin Markets)",
    href: "/design-practice/morpho-origin-markets",
    note: "Shared operational foundation for a 0→1 fintech platform. Tokens, components, accessibility standards, and interaction patterns across product surfaces.",
    meta: "Design foundation · Fintech",
    indent: "left",
  },
  {
    n: "a04",
    title: "Mendeley Pattern Library",
    href: "/design-practice/mendeley-pattern-library",
    note: "Cross-platform patterns supporting consistency across research workflows spanning web and desktop environments.",
    meta: "Pattern library · Research",
    indent: "center",
  },
  {
    n: "a03",
    title: "Elemental Concept",
    href: "/design-practice/elemental-concept",
    note: "Product discovery, UX/UI, and brand direction delivered across a range of client products spanning web and mobile experiences.",
    meta: "Consultancy · Product strategy",
    indent: "right",
  },
  {
    n: "a02",
    title: "PawSquad",
    href: "/design-practice/pawsquad",
    note: "Consumer brand and product experience exploring trust, accessibility, and service clarity within veterinary care.",
    meta: "Brand · Consumer",
    indent: "left",
  },
  {
    n: "a01",
    title: "Migreat",
    href: "/design-practice/migreat",
    note: "Digital product experiences designed to simplify immigration complexity through clearer workflows and structured information.",
    meta: "Product experience · Civic",
    indent: "right",
  },
];

const indentClass = (i?: Fragment["indent"]) => {
  switch (i) {
    case "right":
      return "md:col-span-7 md:col-start-6";
    case "center":
      return "md:col-span-7 md:col-start-4";
    case "left":
    default:
      return "md:col-span-7 md:col-start-2";
  }
};

const Work = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <PageHeader label="Work">
        A selection of work spanning product direction, research, operational design, and platform evolution across complex digital products.
      </PageHeader>

      {/* Section 1 — Featured Chapters (dark canvas) */}
      <DarkPanel>
        <Container className="py-[100px] md:py-[160px]">
          {chapters.map((c, i) => (
            <article
              key={c.title}
              className={`relative grid grid-cols-12 gap-x-6 md:gap-x-10 ${
                i === 0 ? "pt-0" : "pt-24 md:pt-32"
              } pb-24 md:pb-32 ${
                i !== 0 ? "border-t border-ink-strong/15" : ""
              }`}
            >
              {/* Left rail: chapter marker + meta */}
              <div
                className={`col-span-12 md:col-span-2 ${i === 1 ? "md:col-start-3" : "md:col-start-2"} mb-10 md:mb-0`}
              >
                <ChapterMarker n={c.n} tone="inverse" className="-mt-4 md:-mt-6" />
                <div className="mt-6 md:mt-10 hidden md:block">
                  <MetaRail items={c.meta} tone="inverse" />
                </div>
              </div>

              {/* Main content */}
              <div className="col-span-12 md:col-span-7 max-w-[680px]">
                <Link
                  to={c.href}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-strong/40 rounded-sm"
                >
                  <MetaMono>{c.marker}</MetaMono>

                  <FeatureTitle className="mt-8 md:mt-10 transition-opacity group-hover:opacity-70">
                    {c.title}
                    <span
                      aria-hidden="true"
                      className="inline-block ml-4 text-[26px] md:text-[34px] text-ink-strong/55 transition-transform duration-300 ease-out group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </FeatureTitle>

                  <LedeItalic className="mt-8 md:mt-10">
                    {c.subtitle}
                  </LedeItalic>

                  <Body className="mt-8 md:mt-10 max-w-[58ch]">
                    {c.tension}
                  </Body>
                </Link>

                {/* Mobile meta */}
                <div className="md:hidden mt-10">
                  <MetaRail items={c.meta} tone="inverse" />
                </div>
              </div>

              {/* Right annotation rail */}
              <div className="hidden md:block md:col-span-2 md:col-start-11 pt-12">
                <Annotation tone="inverse">
                  Chapter
                  <br />
                  № {c.n} / 03
                </Annotation>
              </div>
            </article>
          ))}
        </Container>

        {/* Mid-section pull quote, lifted from existing standfirst */}
        <Container className="pb-[80px] md:pb-[120px]">
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <PullQuote tone="inverse" cite="— From the archive">
                Product direction, research, operational design, and platform
                evolution across complex digital products.
              </PullQuote>
            </div>
          </div>
        </Container>
      </DarkPanel>

      {/* Section 2 — Archive / Fragments */}
      <Container className="py-[80px] md:py-[120px]">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
          <div className="col-span-12 md:col-span-2 md:col-start-2 mb-8 md:mb-0">
            <RuleLabel>Notes &amp; fragments</RuleLabel>
          </div>
          <div className="col-span-12 md:col-span-8 max-w-[58ch]">
            <Body muted>
              Smaller pieces of work, exploration, and operational
              infrastructure developed alongside larger product initiatives.
            </Body>
          </div>
        </div>

        {/* Fragments list — asymmetric */}
        <div className="mt-[40px] md:mt-[80px] grid grid-cols-12 gap-6">
          <ul className="col-span-12 contents">
            {fragments.map((f, i) => {
              const pad =
                f.indent === "center"
                  ? "py-16 md:py-20"
                  : f.indent === "right"
                  ? "py-10 md:py-12"
                  : "py-12 md:py-16";
              return (
                <li
                  key={f.title}
                  className={`col-span-12 ${indentClass(f.indent)} ${
                    i === 0 ? "" : "border-t border-hairline"
                  } ${pad}`}
                >
                  <Link
                    to={f.href}
                    className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-strong/40 rounded-sm"
                  >
                    <div className="flex items-baseline gap-8">
                      <span className="text-[11px] tracking-[0.22em] uppercase text-meta-ink font-mono shrink-0 w-10 tabular-nums">
                        {f.n}
                      </span>
                      <div className="flex-1">
                        <CardTitle className="transition-opacity group-hover:opacity-60 flex items-baseline gap-3">
                          <span>{f.title}</span>
                          <span
                            aria-hidden="true"
                            className="inline-block text-[16px] md:text-[18px] text-ink-strong/70 transition-transform duration-300 ease-out group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </CardTitle>
                        <Body muted className="mt-3 max-w-[58ch]">
                          {f.note}
                        </Body>
                        <MetaMono className="mt-5">{f.meta}</MetaMono>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Colophon */}
      </Container>

    </main>
  );
};

export default Work;
