import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  ArrowRight,
  Calculator,
  PieChart,
  BarChart3,
  Zap,
  Globe,
  Users,
  CheckCircle,
  MapPin
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from "recharts";
import EarningsCalculator from "@/components/EarningsCalculator";

const Business = () => {
  // Investment growth data
  const investmentData = [
    { year: "2025", value: 100, roi: 0 },
    { year: "2025.5", value: 180, roi: 80 },
    { year: "2026", value: 450, roi: 350 },
    { year: "2026.5", value: 850, roi: 750 },
    { year: "2027", value: 3000, roi: 2900 }
  ];

  // Market growth data
  const marketData = [
    { year: "2024", market: 45, gpuDemand: 25 },
    { year: "2025", market: 89, gpuDemand: 55 },
    { year: "2026", market: 156, gpuDemand: 120 },
    { year: "2027", market: 280, gpuDemand: 245 }
  ];

  // India market data
  const indiaMarketData = [
    { year: "2024", market: 2.5, ai: 1.2 },
    { year: "2025", market: 8.5, ai: 4.8 },
    { year: "2026", market: 25.4, ai: 18.2 },
    { year: "2027", market: 125.0, ai: 95.5 }
  ];

  // ROI breakdown data
  const roiBreakdown = [
    { category: "AI Training", percentage: 45, value: 1350 },
    { category: "Blockchain Mining", percentage: 25, value: 750 },
    { category: "Cloud Gaming", percentage: 20, value: 600 },
    { category: "Research & Development", percentage: 10, value: 300 }
  ];

  const chartConfig = {
    value: {
      label: "Investment Value",
      color: "hsl(217, 91%, 60%)",
    },
    roi: {
      label: "ROI",
      color: "hsl(142, 76%, 36%)",
    },
    market: {
      label: "Total Market ($B)",
      color: "hsl(217, 91%, 60%)",
    },
    gpuDemand: {
      label: "GPU Demand ($B)",
      color: "hsl(142, 76%, 36%)",
    },
    ai: {
      label: "AI Industry ($B)",
      color: "hsl(287, 75%, 60%)",
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-300">
              <TrendingUp className="h-4 w-4 mr-2" />
              Investment Opportunity
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-green-600 to-blue-600 bg-clip-text text-transparent">
              GPU Credits Investment Analysis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Invest in GPU Resources Credits and participate in the growing 
              AI and blockchain technology market over the next 2 years.
            </p>
          </div>

          {/* Key Investment Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <DollarSign className="h-8 w-8 text-green-500 mx-auto" />
                <CardTitle className="text-2xl">$100</CardTitle>
                <CardDescription>Initial Investment</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <Target className="h-8 w-8 text-blue-500 mx-auto" />
                <CardTitle className="text-2xl">$3,000</CardTitle>
                <CardDescription>Projected Value 2027</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto" />
                <CardTitle className="text-2xl">30x</CardTitle>
                <CardDescription>Potential Growth</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <Calculator className="h-8 w-8 text-orange-500 mx-auto" />
                <CardTitle className="text-2xl">24 Months</CardTitle>
                <CardDescription>Investment Period</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Earnings Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Calculate Your Earnings</h2>
            <p className="text-xl text-muted-foreground">
              Estimate your profits when you rent your server out, or the cost to rent a server to complete your own tasks
            </p>
          </div>
          <EarningsCalculator />
        </div>
      </section>

      {/* India Market Focus */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">India: The Next AI Powerhouse</h2>
            <p className="text-xl text-muted-foreground">
              India's AI industry is experiencing unprecedented growth, creating massive GPU demand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  India AI Market Growth
                </CardTitle>
                <CardDescription>
                  GPU resources demand expected to grow 500x in Indian AI industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <AreaChart data={indiaMarketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="market"
                      stroke="var(--color-market)"
                      fill="var(--color-market)"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="ai"
                      stroke="var(--color-ai)"
                      fill="var(--color-ai)"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why India is Key</CardTitle>
                <CardDescription>
                  Early investment opportunity in a rapidly growing market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Government AI Initiative</h4>
                      <p className="text-sm text-muted-foreground">₹10,000 crore budget allocation for AI development</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Tech Talent Pool</h4>
                      <p className="text-sm text-muted-foreground">Largest pool of AI engineers and data scientists globally</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Early Stage Market</h4>
                      <p className="text-sm text-muted-foreground">GPU infrastructure still developing, perfect entry point</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold mb-1">500x Growth Potential</h4>
                      <p className="text-sm text-muted-foreground">GPU demand expected to multiply by 500x by 2027</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Growth Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Investment Growth Projection</h2>
            <p className="text-xl text-muted-foreground">
              Projected growth based on GPU market demand and Thore Network adoption
            </p>
          </div>

          <Card className="max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-6 w-6 mr-2" />
                Investment Value Over Time
              </CardTitle>
              <CardDescription>
                Based on global GPU market trends and India's emerging AI sector
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px]">
                <AreaChart data={investmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="var(--color-value)"
                    fill="var(--color-value)"
                    fillOpacity={0.3}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--color-value)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Market Analysis</h2>
            <p className="text-xl text-muted-foreground">
              The GPU market is experiencing significant growth worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-6 w-6 mr-2" />
                  Global GPU Market Growth
                </CardTitle>
                <CardDescription>
                  Total addressable market vs GPU-specific demand (in billions)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <BarChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="market" fill="var(--color-market)" />
                    <Bar dataKey="gpuDemand" fill="var(--color-gpuDemand)" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-6 w-6 mr-2" />
                  Revenue Distribution by Sector
                </CardTitle>
                <CardDescription>
                  Expected revenue sources by 2027
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roiBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded mr-3"
                          style={{ backgroundColor: `hsl(${index * 90 + 217}, 91%, 60%)` }}
                        />
                        <span className="font-medium">{item.category}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">${item.value}</div>
                        <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Drivers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Growth Drivers</h2>
            <p className="text-xl text-muted-foreground">
              Factors contributing to GPU credit value appreciation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Zap className="h-10 w-10 text-yellow-500 mb-4" />
                <CardTitle>AI Revolution</CardTitle>
                <CardDescription>
                  Growing demand for AI training and inference across industries, 
                  creating sustained GPU resource requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+850% demand</div>
                <div className="text-sm text-muted-foreground">Expected by 2027</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Users className="h-10 w-10 text-blue-500 mb-4" />
                <CardTitle>Supply Constraints</CardTitle>
                <CardDescription>
                  Limited GPU manufacturing capacity creating supply-demand imbalance, 
                  particularly in emerging markets like India.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">Limited supply</div>
                <div className="text-sm text-muted-foreground">vs growing demand</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Globe className="h-10 w-10 text-green-500 mb-4" />
                <CardTitle>Market Democratization</CardTitle>
                <CardDescription>
                  Thore Network enables efficient GPU resource allocation, 
                  creating new market opportunities in underserved regions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">Early entry</div>
                <div className="text-sm text-muted-foreground">Competitive advantage</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Investment Timeline</h2>
            <p className="text-xl text-muted-foreground">
              Your investment journey from $100 to projected $3,000
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">January 2025 - Initial Investment</h3>
                  <p className="text-muted-foreground">
                    Invest $100 in GPU Credits. Market begins recognizing value in emerging economies.
                  </p>
                  <div className="text-lg font-bold text-green-600 mt-2">Value: $100</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Mid 2025 - Early Adoption</h3>
                  <p className="text-muted-foreground">
                    Thore Network gains traction in India. Government AI initiatives drive demand.
                  </p>
                  <div className="text-lg font-bold text-green-600 mt-2">Value: $180 (+80%)</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">2026 - Market Expansion</h3>
                  <p className="text-muted-foreground">
                    AI adoption accelerates. GPU scarcity intensifies across Asian markets.
                  </p>
                  <div className="text-lg font-bold text-green-600 mt-2">Value: $450 (+350%)</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Late 2026 - Market Maturation</h3>
                  <p className="text-muted-foreground">
                    Thore Network becomes established platform. Institutional adoption begins.
                  </p>
                  <div className="text-lg font-bold text-green-600 mt-2">Value: $850 (+750%)</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-6">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">2027 - Target Achievement</h3>
                  <p className="text-muted-foreground">
                    Full market maturity. GPU Credits established as tradeable digital asset.
                  </p>
                  <div className="text-lg font-bold text-green-600 mt-2">Value: $3,000 (30x growth)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">Investment Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-700">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  Investment values are projections based on market analysis
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  GPU credit values may fluctuate based on market conditions
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  Technology adoption rates may vary from projections
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  Consider your risk tolerance before investing
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your GPU Credits Investment
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the growing GPU economy and participate in India's AI revolution. 
            Early investment positions offer the greatest potential returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Explore Investment Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;
