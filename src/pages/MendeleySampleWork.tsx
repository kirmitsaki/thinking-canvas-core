import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { ContentSkeleton } from '@/components/portfolio/content-skeleton';

const Library = lazy(() => import("./MendeleyLibrary"));
const Reader = lazy(() => import("./MendeleyReader"));
const Citation = lazy(() => import("./MendeleyCitation"));

export default function MendeleySampleWork() {
  const [params] = useSearchParams();
  const view = params.get("view");
  const Content = view === "reader" ? Reader : view === "citation" ? Citation : Library;
  return (
    <main className="case-study-editorial relative z-10 mx-auto max-w-[960px] px-6 py-12 md:py-16">
      <div className="editorial-detail-content mx-auto">
        <Suspense fallback={<ContentSkeleton />}><Content /></Suspense>
      </div>
    </main>
  );
}