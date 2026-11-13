import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Outlet, useLocation, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { PortfolioFooter, PortfolioHeader } from "@/components/portfolio/shell";
const About = lazy(() => import("@/pages/About"));
const CaseStudyPage = lazy(() => import("@/pages/CaseStudyPage"));
const Contact = lazy(() => import("@/pages/Contact"));
// Notes section hidden for now — restore by uncommenting these two lines and the routes below.
// const FieldNotePage = lazy(() => import("@/pages/FieldNote"));
// const FieldNotes = lazy(() => import("@/pages/FieldNotes"));
import Home from "@/pages/Home";
const MendeleyCitation = lazy(() => import("@/pages/MendeleyCitation"));
const MendeleyLibrary = lazy(() => import("@/pages/MendeleyLibrary"));
const MendeleyReader = lazy(() => import("@/pages/MendeleyReader"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ProductDesignIdentity = lazy(() => import("@/pages/ProductDesignIdentity"));
const WorkPage = lazy(() => import("@/pages/Work"));

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
          <Route
            path="/work/secure-code-warrior/product-design-identity"
            element={<ProductDesignIdentity />}
          />
          <Route path="/work/mendeley/library" element={<MendeleyLibrary />} />
          <Route path="/work/mendeley/reader" element={<MendeleyReader />} />
          <Route path="/work/mendeley/citation" element={<MendeleyCitation />} />
          <Route path="/field-notes" element={<FieldNotes />} />
          <Route path="/field-notes/:slug" element={<FieldNotePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
