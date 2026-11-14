import { lazy, Suspense } from "react";
import { Link, useSearchParams } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { getProject, pageMeta } from "@/data/projects";
import { usePortfolioHeaderHeight } from "@/lib/portfolio-header-height";

const Library = lazy(() => import("./MendeleyLibrary"));
const Reader = lazy(() => import("./MendeleyReader"));
const Citation = lazy(() => import("./MendeleyCitation"));
const views = [
  { id: "library", label: "Library", Content: Library },
  { id: "reader", label: "Reader", Content: Reader },
  { id: "citation", label: "Citation", Content: Citation },
];
const meta = pageMeta("Mendeley · Sample work", "Selected Mendeley Library, Reader and Citation interfaces by Rachel Kirmitsaki.", "article");

export default function MendeleySampleWork() {
  const [params, setParams] = useSearchParams();
  const requested = params.get("view");
  const active = views.some(view => view.id === requested) ? requested ?? "library" : "library";
  return (
    <main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
      <Seo title={meta.title} description={meta.description} path="/work/mendeley/sample-work" ogType={meta.ogType} />
      <header className="pb-10 pt-10 md:pt-14">
        <PortfolioBreadcrumb
          items={[{ label: "Portfolio", to: "/work" }, { label: "Mendeley", to: "/work/mendeley" }, { label: "Sample work" }]}
          trailing={<p className="label-quiet">{getProject("mendeley").dates}</p>}
        />
        <h1 className="mt-8 page-title">Sample work</h1>
      </header>
      <Tabs.Root value={active} onValueChange={view => setParams({ view }, { preventScrollReset: true })}>
        <Tabs.List aria-label="Mendeley sample work" className="sample-work-tabs hairline-bottom mb-10 flex gap-2">
          {views.map(view => <Tabs.Trigger key={view.id} value={view.id} asChild>
            <Button variant="ghost" className="rounded-none border-b-2 border-transparent px-4 text-muted-foreground hover:bg-camel-wash hover:text-foreground data-[state=active]:border-caramel data-[state=active]:text-foreground">{view.label}</Button>
          </Tabs.Trigger>)}
        </Tabs.List>
        {views.map(({ id, Content }) => <Tabs.Content key={id} value={id} className="mx-auto max-w-[720px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Suspense fallback={<p className="caption">Loading…</p>}><Content embedded /></Suspense>
        </Tabs.Content>)}
      </Tabs.Root>
      <div className="hairline-top mx-auto max-w-[720px] pt-8">
        <Link to="/work/mendeley" className="accent-link inline-flex items-center gap-2"><ArrowLeft size={14} />Back to the Mendeley case study</Link>
      </div>
    </main>
  );
}