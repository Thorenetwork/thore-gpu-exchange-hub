import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TradingDemo from "@/components/TradingDemo";
import OrderBook from "@/components/OrderBook";
import QuickTrade from "@/components/QuickTrade";
import { 
  Search, 
  Filter,
  MapPin,
  Cpu,
  Zap,
  Shield,
  Star,
  Clock,
  DollarSign,
  TrendingUp,
  Activity,
  Users
} from "lucide-react";

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

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">2,847</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Traders</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-2xl font-bold">$1.2M</span>
                </div>
                <p className="text-sm text-muted-foreground">24h Volume</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">15,439</span>
                </div>
                <p className="text-sm text-muted-foreground">GPU Hours Available</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-2xl font-bold">892</span>
                </div>
                <p className="text-sm text-muted-foreground">Verified Providers</p>
              </Card>
            </Card>
          </div>
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
              {/* Search and Filters */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-background p-6 rounded-lg shadow-sm border">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search GPUs or providers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="EU">Europe</SelectItem>
                      <SelectItem value="Asia">Asia Pacific</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedGpuType} onValueChange={setSelectedGpuType}>
                    <SelectTrigger>
                      <SelectValue placeholder="GPU Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All GPUs</SelectItem>
                      <SelectItem value="A100">NVIDIA A100</SelectItem>
                      <SelectItem value="H100">NVIDIA H100</SelectItem>
                      <SelectItem value="V100">NVIDIA V100</SelectItem>
                      <SelectItem value="RTX">NVIDIA RTX</SelectItem>
                      <SelectItem value="AMD">AMD</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="w-full">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>

              {/* Results */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">
                  {filteredListings.length} Available GPU Credits
                </h2>
                <Select defaultValue="price">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="availability">Availability</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map((listing) => (
                  <Card key={listing.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-xl">{listing.title}</CardTitle>
                          <CardDescription className="text-primary font-medium">
                            {listing.provider}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col gap-1">
                          {listing.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Shield className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          {listing.sustainable && (
                            <Badge variant="outline" className="text-xs text-green-600 border-green-300">
                              🌱 Eco
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{listing.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{listing.reviews} reviews</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{listing.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Cpu className="h-4 w-4 mr-2" />
                          <span>{listing.specs}</span>
                        </div>

                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>Available in {listing.availability}</span>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t">
                          <div className="flex items-center">
                            <DollarSign className="h-5 w-5 text-primary mr-1" />
                            <span className="text-2xl font-bold text-primary">
                              ${listing.price}
                            </span>
                            <span className="text-muted-foreground ml-1">/hour</span>
                          </div>
                          <Button>
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredListings.length === 0 && (
                <div className="text-center py-12">
                  <Cpu className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No GPUs Found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or filters
                  </p>
                </div>
              )}
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
