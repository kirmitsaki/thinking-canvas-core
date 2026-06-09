import { Link } from "react-router-dom";
import { Container } from "@/components/editorial";

type Chapter = {
  number: 1 | 2 | 3;
  path: string;
  title: string;
  tags: string;
};

const chapters: Chapter[] = [
  {
    number: 1,
    path: "/work/mendeley",
    title: "Mendeley",
    tags: "Research · Scale · Systems",
  },
  {
    number: 2,
    path: "/work/origin-markets",
    title: "Origin Markets",
    tags: "0→1 · Fintech · Operations",
  },
  {
    number: 3,
    path: "/work/secure-code-warrior",
    title: "Secure Code Warrior",
    tags: "Governance · Platform · Direction",
  },
];

const formatNumber = (n: number) => n.toString().padStart(2, "0");

/**
 * Quiet, typeset continuation reference.
 * Behaves like related-article links at the foot of a publication feature —
 * not a portfolio selector. Significant whitespace above; understated within.
 */
const ChapterTransition = ({ current }: { current: 1 | 2 | 3 }) => {
  const others = chapters.filter((c) => c.number !== current);

  return (
    <section className="relative pt-[220px] md:pt-[320px] pb-[80px] md:pb-[120px]">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          {/* Quiet eyebrow — no heavy divider */}
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <p className="text-[10px] tracking-[0.32em] uppercase text-meta-ink/45 font-mono mb-10 md:mb-14">
              Continue reading
            </p>
          </div>

          {/* Two typeset references — asymmetric, embedded in the editorial grid */}
          {others.map((c, idx) => {
            // Slight asymmetric indent, no equal columns
            const start = idx % 2 === 0 ? "md:col-start-2" : "md:col-start-4";
            return (
              <div
                key={c.path}
                className={`col-span-12 ${start} md:col-span-8 ${
                  idx === 0 ? "" : "mt-10 md:mt-14"
                }`}
              >
                <Link
                  to={c.path}
                  className="group block py-1.5"
                >
                  <div className="flex items-baseline gap-6 md:gap-8">
                    <span className="text-[10px] tracking-[0.28em] uppercase text-meta-ink/45 font-mono tabular-nums shrink-0">
                      {formatNumber(c.number)}
                    </span>
                    <span className="flex-1 flex items-baseline gap-x-6 gap-y-1 flex-wrap">
                      <span className="relative text-[18px] md:text-[22px] tracking-[-0.012em] text-ink-strong/85 font-medium leading-[1.2] group-hover:text-ink-strong transition-colors duration-500">
                        {c.title}
                        <span
                          aria-hidden
                          className="absolute left-0 -bottom-1 h-px bg-ink-strong/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{ width: "100%" }}
                        />
                      </span>
                      <span className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-meta-ink/50 font-mono">
                        {c.tags}
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}

          {/* Tiny foot marker */}
          <div className="col-span-12 md:col-span-10 md:col-start-2 mt-16 md:mt-24">
            <p className="text-[10px] tracking-[0.32em] uppercase text-meta-ink/35 font-mono">
              Chapter {formatNumber(current)} of 03
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChapterTransition;
