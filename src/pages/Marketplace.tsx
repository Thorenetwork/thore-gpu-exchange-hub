
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TradingDemo from "@/components/TradingDemo";
import OrderBook from "@/components/OrderBook";
import QuickTrade from "@/components/QuickTrade";
import MarketStats from "@/components/MarketStats";
import SearchFilters from "@/components/SearchFilters";
import GPUListings from "@/components/GPUListings";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedGpuType, setSelectedGpuType] = useState("all");

  const gpuListings = [
    {
      id: 1,
      title: "NVIDIA A100 80GB",
      provider: "CloudTech Solutions",
      rating: 4.9,
      reviews: 127,
      location: "US East",
      price: 2.50,
      availability: "Immediate",
      specs: "80GB HBM2e, 1,555 GB/s",
      verified: true,
      sustainable: true
    },
    {
      id: 2,
      title: "NVIDIA H100",
      provider: "GPU Masters",
      rating: 4.8,
      reviews: 89,
      location: "EU West",
      price: 3.75,
      availability: "2 hours",
      specs: "80GB HBM3, 3,350 GB/s",
      verified: true,
      sustainable: false
    },
    {
      id: 3,
      title: "NVIDIA V100",
      provider: "Compute Collective",
      rating: 4.7,
      reviews: 203,
      location: "Asia Pacific",
      price: 1.85,
      availability: "Immediate",
      specs: "32GB HBM2, 900 GB/s",
      verified: true,
      sustainable: true
    },
    {
      id: 4,
      title: "AMD MI250X",
      provider: "NextGen Computing",
      rating: 4.6,
      reviews: 45,
      location: "US West",
      price: 2.10,
      availability: "1 hour",
      specs: "128GB HBM2e, 3,276 GB/s",
      verified: true,
      sustainable: true
    },
    {
      id: 5,
      title: "NVIDIA RTX 4090",
      provider: "Gaming Farms",
      rating: 4.5,
      reviews: 156,
      location: "EU Central",
      price: 0.95,
      availability: "Immediate",
      specs: "24GB GDDR6X, 1,008 GB/s",
      verified: false,
      sustainable: false
    },
    {
      id: 6,
      title: "NVIDIA A40",
      provider: "Enterprise GPU Hub",
      rating: 4.8,
      reviews: 78,
      location: "US Central",
      price: 1.65,
      availability: "30 minutes",
      specs: "48GB GDDR6, 696 GB/s",
      verified: true,
      sustainable: true
    }
  ];

  const filteredListings = gpuListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "all" || listing.location.includes(selectedRegion);
    const matchesGpuType = selectedGpuType === "all" || listing.title.includes(selectedGpuType);
    
    return matchesSearch && matchesRegion && matchesGpuType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-purple-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              GPU Credit Marketplace
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience live trading with real-time pricing, order books, and instant transactions.
            </p>
          </div>

          <MarketStats />
        </div>
      </section>

      {/* Main Trading Interface */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="trading" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trading">Live Trading</TabsTrigger>
              <TabsTrigger value="marketplace">Browse Marketplace</TabsTrigger>
              <TabsTrigger value="orders">Order Book</TabsTrigger>
            </TabsList>

            <TabsContent value="trading" className="space-y-6">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <TradingDemo />
                </div>
                <div>
                  <QuickTrade />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="marketplace" className="space-y-6">
              <SearchFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                selectedGpuType={selectedGpuType}
                setSelectedGpuType={setSelectedGpuType}
              />

              <GPUListings filteredListings={filteredListings} />
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <OrderBook />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
