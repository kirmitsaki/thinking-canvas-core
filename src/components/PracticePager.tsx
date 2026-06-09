import { Link } from "react-router-dom";
import { Container } from "@/components/editorial";

export type PracticeItem = {
  slug: string;
  title: string;
};

// Order follows the Product Identity & Systems page sequence
export const practiceOrder: PracticeItem[] = [
  // Featured: Product Identity
  { slug: "scw-product-identity", title: "SCW Product Identity" },
  // Design Systems
  { slug: "wanda-tokens", title: "Wanda Tokens & Components" },
  { slug: "wanda-applied", title: "Wanda Applied UI" },
  { slug: "morpho-origin-markets", title: "Morpho Library" },
  { slug: "mendeley-pattern-library", title: "Mendeley Pattern Library" },
  // Consultancy
  { slug: "elemental-concept", title: "Elemental Concept" },
  // Brand & Visual
  { slug: "pawsquad", title: "PawSquad" },
  { slug: "migreat", title: "Migreat" },
];

const PracticePager = ({ slug }: { slug: string }) => {
  const i = practiceOrder.findIndex((it) => it.slug === slug);
  if (i === -1) return null;
  const prev = i > 0 ? practiceOrder[i - 1] : null;
  const next = i < practiceOrder.length - 1 ? practiceOrder[i + 1] : null;

  return (
    <Container className="pt-[120px] md:pt-[160px] pb-[80px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <div className="border-t border-hairline pt-12 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">
            {prev ? (
              <Link
                to={`/design-practice/${prev.slug}`}
                className="group block max-w-[42ch]"
              >
                <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink font-mono">
                  Previous
                </p>
                <p className="mt-3 text-[18px] md:text-[20px] font-semibold tracking-tight text-ink-strong leading-[1.3] transition-opacity group-hover:opacity-60">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
            {next ? (
              <Link
                to={`/design-practice/${next.slug}`}
                className="group block max-w-[42ch] sm:text-right"
              >
                <p className="text-[10px] tracking-[0.28em] uppercase text-meta-ink font-mono">
                  Next
                </p>
                <p className="mt-3 text-[18px] md:text-[20px] font-semibold tracking-tight text-ink-strong leading-[1.3] transition-opacity group-hover:opacity-60">
                  {next.title}
                </p>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PracticePager;
