import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SnippetModal } from "./snippet-modal";
import { projectImage } from "@/data/projects";

/* Snippets: small cards pointing at parts of a case study (a design system,
   an identity page, a sample interface) rather than a whole project. */
type Snippet = {
  to: string;
  image: string;
  project: string;
  name: string;
  description: string;
};

const snippets: Snippet[] = [
  {
    to: "/work/secure-code-warrior#design-system",
    image: "scw-wanda",
    project: "Secure Code Warrior",
    name: "Design system",
    description: "Wanda, the platform’s first design system, from shared file to living system.",
  },
  {
    to: "/work/origin-markets#design-system",
    image: "origin-morpho",
    project: "Origin Markets",
    name: "Design system",
    description: "Morpho, the UI library behind every screen of the Origin platform.",
  },
  {
    to: "/work/mendeley#design-system",
    image: "mendeley-pattern-library",
    project: "Mendeley",
    name: "Design system",
    description: "The UI Pattern Library and reusable Sketch components for Reference Manager.",
  },
  {
    to: "/work/secure-code-warrior/cybermon",
    image: "cybermon-poster",
    project: "Secure Code Warrior",
    name: "Cybermon",
    description: "Three years of gamified secure coding tournaments, 2024 to 2026.",
  },
  {
    to: "/work/origin-markets/gallery",
    image: "origin-sample-work",
    project: "Origin Markets",
    name: "Sample interface",
    description: "Dashboards, pricing and documentation screens from across the Origin platform.",
  },
  {
    to: "/work/mendeley/sample-work",
    image: "mendeley-library",
    project: "Mendeley",
    name: "Sample interface",
    description: "Library, reader and citation flows designed with researchers.",
  },
  {
    to: "/work/secure-code-warrior/product-design-identity",
    image: "scw-identity-header",
    project: "Secure Code Warrior",
    name: "Product design identity",
    description: "Colour, interface examples and character artwork for the new product vision.",
  },
  {
    to: "/work/aladdin#brand",
    image: "aladdin-brand",
    project: "Aladdin",
    name: "Brand styles",
    description: "Logo, typography, colour and imagery for the healthcare platform.",
  },
  {
    to: "/work/corresilience#brand",
    image: "cor-brand",
    project: "CorResilience",
    name: "Brand styles",
    description: "Identity, typography and iconography across the app and website.",
  },
];

export function SnippetGrid() {
  const [selected, setSelected] = useState<Snippet | null>(null);
  return (
    <>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {snippets.map((snippet) => {
        const media = projectImage(snippet.image);
        return (
          <Button
            key={snippet.to}
            variant="ghost"
            onClick={() => setSelected(snippet)}
            aria-haspopup="dialog"
            className="editorial-card group block h-auto min-w-0 overflow-hidden whitespace-normal p-0 text-left hover:bg-card"
          >
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img
                loading="lazy"
                src={media.url}
                alt={media.alt}
                className="block h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="label">{snippet.project}</p>
              <h3 className="subsection-title mt-2">{snippet.name}</h3>
              <p className="caption mt-3">{snippet.description}</p>
              <p className="accent-link mt-4">
                SEE MORE{"\u00a0"}
                <span className="arrow-nudge">→</span>
              </p>
            </div>
          </Button>
        );
      })}
    </div>
    <SnippetModal snippet={selected} onClose={() => setSelected(null)} />
    </>
  );
}
