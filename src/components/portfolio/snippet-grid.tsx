import { Link } from "react-router-dom";
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
    to: "/work/secure-code-warrior/product-design-identity",
    image: "scw-identity-header",
    project: "Secure Code Warrior",
    name: "Product design identity",
    description: "Colour, interface examples and character artwork for the new product vision.",
  },
  {
    to: "/work/secure-code-warrior/cybermon",
    image: "cybermon-poster",
    project: "Secure Code Warrior",
    name: "Cybermon",
    description: "Three years of gamified secure coding tournaments, 2024 to 2026.",
  },
  {
    to: "/work/mendeley/sample-work",
    image: "mendeley-library",
    project: "Mendeley",
    name: "Sample interface",
    description: "Library, reader and citation flows designed with researchers.",
  },
];

export function SnippetGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {snippets.map((snippet) => {
        const media = projectImage(snippet.image);
        return (
          <Link
            key={snippet.to}
            to={snippet.to}
            className="editorial-card group block min-w-0 overflow-hidden"
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
          </Link>
        );
      })}
    </div>
  );
}
