import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Outlet, useLocation, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { PortfolioFooter, PortfolioHeader } from "@/components/portfolio/shell";
const About = lazy(() => import("@/pages/About"));
const CaseStudyPage = lazy(() => import("@/pages/CaseStudyPage"));
const Contact = lazy(() => import("@/pages/Contact"));
// Notes section hidden for now — restore by uncommenting these two lines and the routes below.
// const FieldNotePage = lazy(() => import("@/pages/FieldNote"));
// const FieldNotes = lazy(() => import("@/pages/FieldNotes"));
import Home from "@/pages/Home";
const MendeleySampleWork = lazy(() => import("@/pages/MendeleySampleWork"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ProductDesignIdentity = lazy(() => import("@/pages/ProductDesignIdentity"));
const WorkPage = lazy(() => import("@/pages/Work"));
const OriginMarkets = lazy(() => import("@/pages/OriginMarkets"));
const OriginStudy = lazy(() => import("@/pages/OriginStudy"));
const OriginGallery = lazy(() => import("@/pages/OriginGallery"));

const queryClient = new QueryClient();

const PageEnter = () => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-enter">
      <Outlet />
    </div>
  );
};

const Layout = () => (
  <div className="paper-grain flex min-h-screen flex-col">
    <PortfolioHeader />
    <div className="flex-1">
      <Suspense fallback={null}>
        <PageEnter />
      </Suspense>
    </div>
    <PortfolioFooter />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/work/origin-markets" element={<OriginMarkets />} />
          <Route path="/work/origin-markets/gallery" element={<OriginGallery />} />
          <Route path="/work/origin-markets/:study" element={<OriginStudy />} />
          <Route
            path="/work/secure-code-warrior/product-design-identity"
            element={<ProductDesignIdentity />}
          />
          <Route path="/work/mendeley/sample-work" element={<MendeleySampleWork />} />
          <Route path="/work/mendeley/library" element={<Navigate replace to="/work/mendeley/sample-work?view=library" />} />
          <Route path="/work/mendeley/reader" element={<Navigate replace to="/work/mendeley/sample-work?view=reader" />} />
          <Route path="/work/mendeley/citation" element={<Navigate replace to="/work/mendeley/sample-work?view=citation" />} />
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
  </QueryClientProvider>
);

export default App;
