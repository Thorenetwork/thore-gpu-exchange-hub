
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/SearchFilters";
import GPUListings from "@/components/GPUListings";
import MarketStats from "@/components/MarketStats";
import OrderBook from "@/components/OrderBook";
import QuickTrade from "@/components/QuickTrade";
import GpuPriceTicker from "@/components/GpuPriceTicker";

interface GPUListing {
  id: number;
  title: string;
  provider: string;
  rating: number;
  reviews: number;
  location: string;
  price: number;
  availability: string;
  specs: string;
  verified: boolean;
  sustainable: boolean;
}

const mockListings: GPUListing[] = [
  {
    id: 1,
    title: "NVIDIA A100 80GB",
    provider: "CloudGPU Pro",
    rating: 4.8,
    reviews: 124,
    location: "US East",
    price: 2.50,
    availability: "2 minutes",
    specs: "80GB HBM2e, 6912 CUDA Cores",
    verified: true,
    sustainable: true
  },
  {
    id: 2,
    title: "NVIDIA H100 80GB",
    provider: "AI Compute Hub",
    rating: 4.9,
    reviews: 89,
    location: "EU West",
    price: 3.75,
    availability: "5 minutes",
    specs: "80GB HBM3, 16896 CUDA Cores",
    verified: true,
    sustainable: false
  },
  {
    id: 3,
    title: "Thor T78 GPU",
    provider: "Thor Networks",
    rating: 4.7,
    reviews: 67,
    location: "Asia Pacific",
    price: 4.25,
    availability: "1 minute",
    specs: "128GB Memory, Custom Architecture",
    verified: true,
    sustainable: true
  },
  {
    id: 4,
    title: "NVIDIA V100 32GB",
    provider: "Budget GPU",
    rating: 4.5,
    reviews: 156,
    location: "US West",
    price: 1.85,
    availability: "10 minutes",
    specs: "32GB HBM2, 5120 CUDA Cores",
    verified: false,
    sustainable: false
  },
  {
    id: 5,
    title: "AMD MI250X",
    provider: "OpenCompute",
    rating: 4.6,
    reviews: 43,
    location: "EU Central",
    price: 2.10,
    availability: "3 minutes",
    specs: "128GB HBM2e, 14080 Stream Processors",
    verified: true,
    sustainable: true
  },
  {
    id: 6,
    title: "NVIDIA H200 141GB",
    provider: "Elite GPU",
    rating: 4.9,
    reviews: 28,
    location: "US East",
    price: 4.50,
    availability: "8 minutes",
    specs: "141GB HBM3e, 16896 CUDA Cores",
    verified: true,
    sustainable: false
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedGpuType, setSelectedGpuType] = useState("all");

  const filteredListings = mockListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.provider.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = selectedRegion === "all" || listing.location.includes(selectedRegion);
    
    const matchesGpuType = selectedGpuType === "all" || 
                          listing.title.toLowerCase().includes(selectedGpuType.toLowerCase());

    return matchesSearch && matchesRegion && matchesGpuType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Price Ticker */}
      <GpuPriceTicker />
      
      {/* Market Stats */}
      <section className="py-6 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <MarketStats />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <SearchFilters 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              selectedGpuType={selectedGpuType}
              setSelectedGpuType={setSelectedGpuType}
            />
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <GPUListings filteredListings={filteredListings} />
          </div>
          
          {/* Right Sidebar - Trading */}
          <div className="lg:col-span-1 space-y-6">
            <QuickTrade />
            <OrderBook />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
