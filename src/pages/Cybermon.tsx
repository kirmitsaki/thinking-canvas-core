import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { getProject, pageMeta } from "@/data/projects";
import { usePortfolioHeaderHeight } from "@/lib/portfolio-header-height";
import { ProjectPagination } from "@/components/portfolio/project-pagination";
import { SectionDivider } from "@/components/portfolio/section-divider";
import { editorialEmphasis } from "@/components/portfolio/editorial-emphasis";

const meta = pageMeta(
  "Secure Code Warrior · Cybermon",
  "Rachel Kirmitsaki’s Cybermon campaigns for Secure Code Warrior: three years of gamified secure coding tournaments, 2024 to 2026.",
  "article"
);

type DetailRow = {
  title: string;
  sub?: boolean;
  paragraphs: string[];
  items?: { name: string; text: string }[];
};

function DetailSection({ row, divider }: { row: DetailRow; divider: boolean }) {
  return (
    <section className="editorial-study-section mb-14 md:mb-20">
      {divider && <SectionDivider />}
      <div className="mendeley-detail-row">
        {row.sub
          ? <h3 className="subsection-title">{row.title}</h3>
          : <h2 className="section-title">{row.title}</h2>}
        <div className="mendeley-detail-body">
          <div className="essay-prose space-y-5">
            {row.paragraphs.map(text => <p key={text}>{editorialEmphasis(text)}</p>)}
          </div>
          {row.items && (
            <dl className="mt-8 space-y-6">
              {row.items.map(item => (
                <div key={item.name}>
                  <dt className="body-copy font-semibold text-foreground">{item.name}</dt>
                  <dd className="body-copy mt-1 text-muted-foreground">{item.text}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}

const stats2026 = [
  { value: "74", label: "Countries represented" },
  { value: "42,000+", label: "Activities completed" },
  { value: "19,000+", label: "Badges earned" },
  { value: "2,000+", label: "Cyberheroes crowned" },
  { value: "880+", label: "Cyberhero Primes" },
];

function Year2024() {
  const rows: DetailRow[] = [
    {
      title: "The campaign",
      paragraphs: [
        "CyberMon 2024 was a gamified cybersecurity awareness and secure coding training campaign, launched during Cyber Security Awareness Month in October 2024. Its purpose was to make secure coding education more engaging by turning it into a game, rather than relying on traditional training courses.",
        "In simple terms: Pokémon meets cybersecurity training. Instead of catching Pokémon, developers complete secure coding exercises to defeat monsters representing security vulnerabilities.",
      ],
    },
    {
      title: "How it worked",
      paragraphs: [
        "The campaign ran for four weeks, starting on 7 October 2024. Each week a new fictional monster appeared, each one representing a common software security vulnerability. Participants completed learning activities — coding labs, walkthroughs, missions and challenges — to defeat each monster.",
        "Earn three points each week to defeat that week’s CyberMon. Defeat all four to become a Cyberhero, collect limited-edition weekly badges, and enter the prize draw.",
      ],
    },
    {
      title: "Why it mattered",
      paragraphs: [
        "The campaign was designed to improve security awareness, encourage secure coding practice and increase engagement by making training interactive and competitive. More than a one-off compliance exercise, it aimed to build a security culture of continuous learning — with points, badges and completed activities making participation measurable.",
      ],
    },
  ];
  return (
    <>
      <h2 className="card-title">CyberMon 2024</h2>
      <p className="standfirst mt-6 mb-10">Pokémon meets cybersecurity training: four weeks, four monsters, one Cyberhero.</p>
      {rows.map((row, index) => <DetailSection key={row.title} row={row} divider={index > 0} />)}
    </>
  );
}

function Year2025() {
  const rows: DetailRow[] = [
    {
      title: "The campaign",
      paragraphs: [
        "CyberMon 2025 launched on 6 October 2025 with the theme The Age of AI. Where 2024 focused on general software vulnerabilities, the 2025 campaign turned to the emerging security risks of AI-powered software development and Large Language Models.",
        "The campaign was built around Beat the Boss: developers were challenged to complete advanced security missions involving vulnerabilities found in AI-enabled applications.",
      ],
    },
    {
      title: "Meet the bosses",
      paragraphs: ["Four boss characters, each representing a different AI security threat."],
      items: [
        { name: "Bypassaur", text: "Direct prompt injection — exploiting malicious instructions supplied directly to an AI model." },
        { name: "Keykraken", text: "Indirect prompt injection — malicious instructions hidden in external content processed by AI." },
        { name: "Promptgeist", text: "Vector and embedding weaknesses — targeting vector databases and embedding-based retrieval." },
        { name: "Proxysurfa", text: "Excessive agency — AI agents with permissions or autonomy beyond what they should have." },
      ],
    },
    {
      title: "How it worked",
      paragraphs: [
        "Each boss challenge was designed around practical, hands-on learning: understand the vulnerability, learn how an attacker could exploit it, complete a guided walkthrough, then attempt a high-difficulty Boss Mission and apply secure development techniques to mitigate it.",
      ],
    },
    {
      title: "After the campaign",
      paragraphs: [
        "The four 2025 Boss Missions later became a reusable Quest topic collection, available on demand from March 2026. Each topic includes an introductory video and guideline, a guided walkthrough and the original high-difficulty Boss Mission — so organisations can use the challenges throughout the year rather than waiting for October.",
      ],
    },
  ];
  return (
    <>
      <h2 className="card-title">CyberMon 2025</h2>
      <p className="standfirst mt-6 mb-10">The Age of AI: four bosses, four AI security threats, one mission — beat the boss.</p>
      {rows.map((row, index) => <DetailSection key={row.title} row={row} divider={index > 0} />)}
    </>
  );
}

function Year2026() {
  const rows: DetailRow[] = [
    {
      title: "The campaign",
      paragraphs: [
        "CyberMon 2026 launched on 5 October 2026 with the theme Built by AI. Secured by You. Four CyberMon, four weeks, one global community.",
        "The campaign built on the 2025 focus on AI security, but expanded the scope to address the security implications of AI-generated software, agentic AI and traditional application vulnerabilities. A free, four-week interactive event: short coding labs, interactive challenges, badges and boss battles.",
      ],
    },
    {
      title: "Meet the CyberMon",
      paragraphs: ["The 2026 campaign combined traditional application security vulnerabilities with newer AI-related risks."],
      items: [
        { name: "Glitchursus — The Scrap Bandit", text: "Indirect prompt injection and formula injection — the risks of trusting AI-generated code and automated workflows without verification." },
        { name: "Gatecorvus — The Keykeeper", text: "SSRF, sensitive data exposure, path traversal and weak cryptography." },
        { name: "Fangserpens — The Commit Devourer", text: "SQL injection, uncaught error handling and AI security scanners that fail open." },
        { name: "Nulltinea — The Lure", text: "Insufficiently protected credentials, stored XSS, CSRF — the risks of old code, forgotten states and exposed secrets." },
      ],
    },
    {
      title: "Badges and achievements",
      paragraphs: [
        "Defeat an individual CyberMon to earn its weekly badge. Defeat all four to become a Cyberhero. Conquer all four Prime Boss missions — an additional level of difficulty beyond the standard challenges — to become a Cyberhero Prime. Two levels of progression: completing the campaign, and mastering every Prime Boss.",
      ],
    },
  ];
  return (
    <>
      <h2 className="card-title">CyberMon 2026</h2>
      <p className="standfirst mt-6 mb-10">Built by AI. Secured by You. Four CyberMon, four weeks, one global community.</p>
      {rows.map((row, index) => <DetailSection key={row.title} row={row} divider={index > 0} />)}
      <section className="editorial-study-section mb-14 md:mb-20">
        <SectionDivider />
        <div className="mendeley-detail-row">
          <h2 className="section-title">The results</h2>
          <div className="mendeley-detail-body">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats2026.map(stat => (
                <div key={stat.label} className="editorial-card p-6">
                  <p className="page-title">{stat.value}</p>
                  <p className="body-copy mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const views = [
  { id: "2024", label: "2024", Content: Year2024 },
  { id: "2025", label: "2025", Content: Year2025 },
  { id: "2026", label: "2026", Content: Year2026 },
];

export default function Cybermon() {
  usePortfolioHeaderHeight();
  const [params, setParams] = useSearchParams();
  const requested = params.get("view");
  const active = views.some(view => view.id === requested) ? requested ?? "2026" : "2026";
  // Switching tabs swaps the panel below, which can collapse the page height and
  // throw the reader back to the top; put them back where they were.
  const scrollMemo = useRef(0);
  useEffect(() => {
    const target = scrollMemo.current;
    scrollMemo.current = 0;
    if (!target) return;
    let frame = 0;
    let attempts = 0;
    const restore = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (target <= max) window.scrollTo(0, target);
      else if (attempts++ < 90) frame = requestAnimationFrame(restore);
    };
    frame = requestAnimationFrame(restore);
    return () => cancelAnimationFrame(frame);
  }, [active]);
  return (
    <main className="case-study-editorial relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
      <Seo title={meta.title} description={meta.description} path="/work/secure-code-warrior/cybermon" ogType={meta.ogType} />
      <header className="pb-10">
        <PortfolioBreadcrumb
          items={[
            { label: "Portfolio", to: "/work" },
            { label: "Secure Code Warrior", to: "/work/secure-code-warrior" },
            { label: "Cybermon" },
          ]}
          trailing={<p className="label-quiet">{getProject("secure-code-warrior").dates}</p>}
        />
        <h1 className="mt-8 page-title">Cybermon</h1>
        <p className="standfirst mt-6 max-w-[720px]">
          Three years of gamified secure coding tournaments — from secure coding fundamentals to securing software built with AI.
        </p>
      </header>
      <Tabs.Root value={active} onValueChange={view => { scrollMemo.current = window.scrollY; setParams({ view }, { preventScrollReset: true }); }}>
        <div className="sample-work-tabs hairline-top mb-10 border-b border-border py-3">
          <Tabs.List aria-label="Cybermon campaigns" className="flex gap-2">
            {views.map(view => <Tabs.Trigger key={view.id} value={view.id} asChild>
              <Button variant="ghost" className="rounded-none border-b-2 border-transparent px-4 text-muted-foreground hover:bg-camel-wash hover:text-foreground data-[state=active]:border-caramel data-[state=active]:text-foreground">{view.label}</Button>
            </Tabs.Trigger>)}
          </Tabs.List>
        </div>
        {views.map(({ id, Content }) => <Tabs.Content key={id} value={id} className="editorial-detail-content mx-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Content />
        </Tabs.Content>)}
      </Tabs.Root>
      <div className="flex justify-center pt-12 pb-12 md:pb-16">
        <Link to="/work/secure-code-warrior" className="accent-link inline-flex items-center gap-2">
          <ArrowLeft size={14} />
          Back to Secure Code Warrior
        </Link>
      </div>
      <ProjectPagination slug="secure-code-warrior" />
    </main>
  );
}
