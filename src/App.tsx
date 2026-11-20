import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Outlet, useLocation, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { PortfolioFooter, PortfolioHeader } from "@/components/portfolio/shell";
import { SnippetProvider } from '@/components/portfolio/snippet-context';
import { SnippetContent } from '@/components/portfolio/snippet-content';
import { ReadingProgress } from '@/components/portfolio/reading-progress';
import { ContentSkeleton } from '@/components/portfolio/content-skeleton';
import { ImageLoadingStates } from '@/components/portfolio/image-loading-states';
import { usePortfolioHeaderHeight } from '@/lib/portfolio-header-height';
const About = lazy(() => import("@/pages/About"));
const CaseStudyPage = lazy(() => import("@/pages/CaseStudyPage"));
const Contact = lazy(() => import("@/pages/Contact"));
// Notes section hidden for now — restore by uncommenting these two lines and the routes below.
// const FieldNotePage = lazy(() => import("@/pages/FieldNote"));
// const FieldNotes = lazy(() => import("@/pages/FieldNotes"));
import Home from "@/pages/Home";
const NotFound = lazy(() => import("@/pages/NotFound"));
const WorkPage = lazy(() => import("@/pages/Work"));
const OriginMarkets = lazy(() => import("@/pages/OriginMarkets"));
const SecureCodeWarrior = lazy(() => import("@/pages/SecureCodeWarrior"));

function SecondaryRedirect() {
  const { pathname, search } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  const params = new URLSearchParams(search);
  const legacyView = ['library', 'reader', 'citation'].includes(parts[2]);
  params.set('openSnippet', legacyView ? 'sample-work' : parts[2]);
  if (legacyView) params.set('view', parts[2]);
  return <Navigate replace to={`/${parts.slice(0, 2).join('/')}?${params}`} />;
}

const PageEnter = () => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-enter">
      <Outlet />
    </div>
  );
};

const Layout = () => {
  const { pathname, search } = useLocation();
  usePortfolioHeaderHeight();
  const snippet = new URLSearchParams(search).get("snippet");
  if (snippet) {
    const secondary = ['design-system', 'gallery', 'design-process', 'documentation', 'funding-matrix-redesign', 'sample-work', 'product-design-identity', 'cybermon'].includes(snippet);
    return <div className="snippet-page"><ReadingProgress key={pathname + search} snippet /><ImageLoadingStates /><Suspense fallback={<ContentSkeleton />}>{secondary ? <SnippetContent /> : <Outlet />}</Suspense></div>;
  }
  return (
  <SnippetProvider>
  <div className="paper-grain flex min-h-screen flex-col">
    <PortfolioHeader />
    {/^\/work\/[^/]+$/.test(pathname) && <ReadingProgress key={pathname} />}
    <ImageLoadingStates />
    <div className="flex-1">
      <Suspense fallback={<ContentSkeleton />}>
        <PageEnter />
      </Suspense>
    </div>
    <PortfolioFooter />
  </div>
  </SnippetProvider>
);
};

const App = () => (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/work/origin-markets" element={<OriginMarkets />} />
          <Route path="/work/secure-code-warrior" element={<SecureCodeWarrior />} />
          <Route path="/work/origin-markets/:study" element={<SecondaryRedirect />} />
          <Route path="/work/secure-code-warrior/:study" element={<SecondaryRedirect />} />
          <Route path="/work/mendeley/:study" element={<SecondaryRedirect />} />
          {/* Notes section hidden for now — restore by uncommenting these two routes.
          <Route path="/field-notes" element={<FieldNotes />} />
          <Route path="/field-notes/:slug" element={<FieldNotePage />} />
          */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

export default App;
