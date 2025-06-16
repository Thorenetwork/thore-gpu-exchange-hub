
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Index from "./pages/Index";
import ThorecoinTransactions from "./pages/ThorecoinTransactions";
import Marketplace from "./pages/Marketplace";
import Trading from "./pages/Trading";
import Thorecoin from "./pages/Thorecoin";
import Business from "./pages/Business";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/thorecoin" element={<Thorecoin />} />
          <Route path="/business" element={<Business />} />
          <Route path="/thorecoin-transactions" element={<ThorecoinTransactions />} />
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
