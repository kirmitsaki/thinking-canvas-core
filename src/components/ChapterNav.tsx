import { Link } from "react-router-dom";
import { Container } from "@/components/editorial";

type Chapter = {
  number: number;
  path: string;
  title: string;
};

const chapters: Chapter[] = [
  {
    number: 1,
    path: "/work/secure-code-warrior",
    title: "Secure Code Warrior",
  },
  {
    number: 2,
    path: "/work/origin-markets",
    title: "Origin Markets",
  },
  {
    number: 3,
    path: "/work/mendeley",
    title: "Mendeley (Elsevier)",
  },
];

const ChapterNav = ({ current }: { current: 1 | 2 | 3 }) => {
  return (
    <div className="sticky top-20 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-hairline">
      <Container>
        <nav className="flex items-center h-12 md:h-14 gap-6 md:gap-8">
          <span className="text-[10px] tracking-[0.32em] uppercase text-meta-ink/45 font-mono whitespace-nowrap">Chapters</span>
          <ul className="flex items-center gap-8 md:gap-12 overflow-x-auto">
            {chapters.map((c) => {
              const active = c.number === current;
              return (
                <li key={c.path} className="whitespace-nowrap">
                  <Link
                    to={c.path}
                    className={`text-[13px] tracking-tight transition-colors duration-200 ${
                      active
                        ? "text-ink-strong font-semibold underline decoration-1 underline-offset-[6px]"
                        : "text-muted-ink hover:text-ink-strong font-medium"
                    }`}
                  >
                    {c.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default ChapterNav;
