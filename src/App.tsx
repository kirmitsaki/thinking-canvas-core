import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { SiteHeader } from "@/components/site-chrome";
import About from "@/pages/About";
import AcrossProduct from "@/pages/AcrossProduct";
import FieldNotes from "@/pages/FieldNotes";
import Home from "@/pages/Home";
import NotePage from "@/pages/Note";
import NotFound from "@/pages/NotFound";
import PiecePage from "@/pages/Piece";
import TheWork from "@/pages/TheWork";

const queryClient = new QueryClient();

const Layout = () => (
  <div className="paper-grain flex min-h-screen flex-col">
    <SiteHeader />
    <div className="flex-1">
      <Outlet />
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/the-work" element={<TheWork />} />
          <Route path="/systems-and-people" element={<AcrossProduct />} />
          <Route path="/field-notes" element={<FieldNotes />} />
          <Route path="/piece/:slug" element={<PiecePage />} />
          <Route path="/note/:slug" element={<NotePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
