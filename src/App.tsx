import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SecureCodeWarrior from "./pages/SecureCodeWarrior.tsx";
import OriginMarkets from "./pages/OriginMarkets.tsx";
import Mendeley from "./pages/Mendeley.tsx";
import Work from "./pages/Work.tsx";
import SCWProductIdentity from "./pages/SCWProductIdentity.tsx";
import MorphoOriginMarkets from "./pages/MorphoOriginMarkets.tsx";
import MendeleyPatternLibrary from "./pages/MendeleyPatternLibrary.tsx";
import PawSquad from "./pages/PawSquad.tsx";
import Migreat from "./pages/Migreat.tsx";
import ElementalConcept from "./pages/ElementalConcept.tsx";
import WandaTokens from "./pages/WandaTokens.tsx";
import WandaApplied from "./pages/WandaApplied.tsx";
import About from "./pages/About.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/secure-code-warrior" element={<SecureCodeWarrior />} />
          <Route path="/work/origin-markets" element={<OriginMarkets />} />
          <Route path="/work/mendeley" element={<Mendeley />} />
          <Route path="/design-practice/scw-product-identity" element={<SCWProductIdentity />} />
          <Route path="/design-practice/morpho-origin-markets" element={<MorphoOriginMarkets />} />
          <Route path="/design-practice/mendeley-pattern-library" element={<MendeleyPatternLibrary />} />
          <Route path="/design-practice/pawsquad" element={<PawSquad />} />
          <Route path="/design-practice/migreat" element={<Migreat />} />
          <Route path="/design-practice/elemental-concept" element={<ElementalConcept />} />
          <Route path="/design-practice/wanda-tokens" element={<WandaTokens />} />
          <Route path="/design-practice/wanda-applied" element={<WandaApplied />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
