import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import {
  Container,
  H1,
  Body,
  SectionLabel,
  Divider,
  CardTitle,
  MetaMono,
} from "@/components/editorial";
import mendeleySystem from "@/assets/mendeley-system.png";
import originMorpho from "@/assets/origin-morpho-card.png";

type Item = {
  title: string;
  tag: string;
  href?: string;
  image?: string;
};

const designSystems: Item[] = [
  { title: "Wanda. Secure Code Warrior", tag: "Tokens & components", href: "/design-practice/wanda-tokens" },
  { title: "Morpho Library", tag: "0→1 fintech system", href: "/design-practice/morpho-origin-markets", image: originMorpho },
  { title: "Mendeley Pattern Library", tag: "Cross-platform consistency", href: "/design-practice/mendeley-pattern-library", image: mendeleySystem },
];

const brand: Item[] = [
  { title: "PawSquad", tag: "Consumer brand & product", href: "/design-practice/pawsquad" },
  { title: "Migreat", tag: "Immigration platform surface", href: "/design-practice/migreat" },
];

const sizeMap = {
  sm: "aspect-[4/3]",
  md: "aspect-[3/2]",
  lg: "aspect-[16/10]",
  xl: "aspect-[21/10]",
  portrait: "aspect-[4/5]",
} as const;

type Size = keyof typeof sizeMap;

const Figure = ({
  title,
  tag,
  href,
  image,
  size = "sm",
}: Item & { size?: Size }) => {
  const inner = (
    <figure className="group">
      <div
        className={`${sizeMap[size]} w-full bg-secondary overflow-hidden transition-opacity duration-300 group-hover:opacity-90`}
      >
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <figcaption className="mt-6">
        <CardTitle as="p" className="text-[16px] md:text-[16px] flex items-baseline gap-2 transition-opacity group-hover:opacity-60">
          <span>{title}</span>
          {href && (
            <span
              aria-hidden="true"
              className="inline-block text-[14px] text-ink-strong/70 transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          )}
        </CardTitle>
        <MetaMono className="mt-2">{tag}</MetaMono>
      </figcaption>
    </figure>
  );
  return href ? (
    <Link
      to={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-strong/40 rounded-sm"
    >
      {inner}
    </Link>
  ) : (
    inner
  );
};

const SectionIntro = ({ children }: { children: React.ReactNode }) => (
  <Body muted className="mb-16">
    {children}
  </Body>
);

const DesignPractice = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <Container className="pt-[100px] md:pt-[140px] pb-[80px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <H1>Product Identity & Systems</H1>
            <Body className="mt-16">
              Selected interface and system work across complex products.
            </Body>
            <Body muted className="mt-8">
              A focused view of the craft behind the case studies. System
              thinking, high-density interfaces, and a minimal set of brand
              surfaces.
            </Body>
          </div>
        </div>
      </Container>

      {/* FEATURED — PRODUCT IDENTITY */}
      <section className="bg-secondary/30 py-[80px] md:py-[120px]">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <SectionLabel>Product Identity</SectionLabel>
              <Link
                to="/design-practice/scw-product-identity"
                className="group block mt-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-strong/40 rounded-sm"
              >
                <figure>
                  <div className="aspect-[16/10] md:aspect-[21/9] w-full bg-secondary transition-opacity duration-300 group-hover:opacity-90" />
                  <figcaption className="mt-8">
                    <CardTitle as="p" className="text-[20px] md:text-[20px] flex items-baseline gap-3 transition-opacity group-hover:opacity-60">
                      <span>SCW Product Identity</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[18px] text-ink-strong/70 transition-transform duration-300 ease-out group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </CardTitle>
                    <Body muted className="mt-3">
                      Defining a unified product identity across product surfaces
                      and system interactions
                    </Body>
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* DESIGN SYSTEMS */}
      <Container className="py-[80px] md:py-[120px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <SectionLabel>Design Systems</SectionLabel>
            <div className="mt-8">
              <SectionIntro>
                System thinking across AI, fintech, and research products.
              </SectionIntro>
            </div>

            <div className="mb-24">
              <Figure {...designSystems[0]} size="xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16">
              {designSystems.slice(1).map((it) => (
                <Figure key={it.title} {...it} size="sm" />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Divider />

      {/* BRAND & VISUAL */}
      <Container className="py-[80px] md:py-[120px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <SectionLabel>Brand & Visual</SectionLabel>
            <div className="mt-8">
              <SectionIntro>
                A minimal selection of brand and product surfaces.
              </SectionIntro>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16">
              <Figure {...brand[0]} size="md" />
              <Figure {...brand[1]} size="md" />
            </div>
          </div>
        </div>
      </Container>

    </main>
  );
};

export default DesignPractice;
