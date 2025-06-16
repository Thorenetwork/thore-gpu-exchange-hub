
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
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Community from "./pages/Community";
import Credits from "./pages/Credits";
import ApiReference from "./pages/ApiReference";
import Documentation from "./pages/Documentation";
import Guides from "./pages/Guides";
import Status from "./pages/Status";
import Buyers from "./pages/Buyers";
import Sellers from "./pages/Sellers";
import Security from "./pages/Security";

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
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/api" element={<ApiReference />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/status" element={<Status />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/security" element={<Security />} />
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
