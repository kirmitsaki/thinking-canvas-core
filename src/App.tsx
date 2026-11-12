import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { PortfolioFooter, PortfolioHeader } from "@/components/portfolio/shell";
import About from "@/pages/About";
import CaseStudyPage from "@/pages/CaseStudyPage";
import Contact from "@/pages/Contact";
import FieldNotePage from "@/pages/FieldNote";
import FieldNotes from "@/pages/FieldNotes";
import Home from "@/pages/Home";
import MendeleyCitation from "@/pages/MendeleyCitation";
import MendeleyLibrary from "@/pages/MendeleyLibrary";
import MendeleyReader from "@/pages/MendeleyReader";
import NotFound from "@/pages/NotFound";
import ProductDesignIdentity from "@/pages/ProductDesignIdentity";
import WorkPage from "@/pages/Work";

const queryClient = new QueryClient();

const Layout = () => (
  <div className="paper-grain flex min-h-screen flex-col">
    <PortfolioHeader />
    <div className="flex-1">
      <Outlet />
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
