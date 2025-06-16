
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GpuPriceTicker from "@/components/GpuPriceTicker";
import TradingDashboard from "@/components/TradingDashboard";

const Trading = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GpuPriceTicker />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">GPU Trading Platform</h1>
          <p className="text-muted-foreground">Real-time GPU credit trading with live market data</p>
        </div>
        
        <TradingDashboard />
      </div>

      <Footer />
    </div>
  );
};

export default Trading;
