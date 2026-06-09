import { Link } from "react-router-dom";
import { Container } from "@/components/editorial";

type Chapter = {
  number: number;
  path: string;
  title: string;
  description: string;
};

const chapters: Chapter[] = [
  {
    number: 1,
    path: "/work/mendeley",
    title: "Mendeley (Elsevier)",
    description: "Designing products that support high-volume research.",
  },
  {
    number: 2,
    path: "/work/origin-markets",
    title: "Origin Markets",
    description: "Bringing structure to debt capital markets workflows.",
  },
  {
    number: 3,
    path: "/work/secure-code-warrior",
    title: "Secure Code Warrior",
    description: "Defining product direction across governance, observability, learning, and risk within a growing AI software governance platform.",
  },
];

const ChapterPager = ({ current }: { current: 1 | 2 | 3 }) => {
  const i = chapters.findIndex((c) => c.number === current);
  const prev = i > 0 ? chapters[i - 1] : null;
  const next = i < chapters.length - 1 ? chapters[i + 1] : null;

  return (
    <Container className="pt-[200px] md:pt-[260px] pb-[120px] md:pb-[160px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <div className="border-t border-hairline pt-16 md:pt-20">
            <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink font-mono mb-20 md:mb-24">
              Chapter {current} of {chapters.length}
            </p>

            {/* Previous — quiet, secondary */}
            {prev && (
              <div className="mb-20 md:mb-24">
                <Link
                  to={prev.path}
                  className="group inline-block transition-opacity duration-200 hover:opacity-60"
                >
                  <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink font-mono">
                    Previous chapter
                  </p>
                  <p className="mt-4 text-[18px] md:text-[20px] font-medium tracking-tight text-ink-strong/80 leading-[1.3]">
                    {prev.title}
                  </p>
                </Link>
              </div>
            )}

            {/* Next — primary, editorial chapter transition */}
            {next && (
              <div>
                <Link
                  to={next.path}
                  className="group block transition-opacity duration-200 hover:opacity-70"
                >
                  <p className="text-[10px] tracking-[0.28em] uppercase text-ink-strong font-mono font-medium">
                    Next chapter
                  </p>
                  <h2 className="mt-6 text-[40px] md:text-[56px] lg:text-[64px] font-semibold tracking-[-0.02em] text-ink-strong leading-[1.05] max-w-[20ch] group-hover:underline underline-offset-[6px] decoration-[1.5px] decoration-ink-strong/30">
                    {next.title}
                  </h2>
                  <p className="mt-8 text-[16px] md:text-[18px] leading-[1.55] text-ink-body max-w-[52ch]">
                    {next.description}
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChapterPager;
