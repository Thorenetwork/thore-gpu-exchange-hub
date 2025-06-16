
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/SearchFilters";
import GPUListings from "@/components/GPUListings";
import MarketStats from "@/components/MarketStats";
import OrderBook from "@/components/OrderBook";
import QuickTrade from "@/components/QuickTrade";
import GpuPriceTicker from "@/components/GpuPriceTicker";

const Marketplace = () => {
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

      {/* Search Filters */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <SearchFilters />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content Area - GPU Listings */}
          <div className="xl:col-span-3">
            <GPUListings />
          </div>
          
          {/* Right Sidebar - Trading */}
          <div className="xl:col-span-1 space-y-6">
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
