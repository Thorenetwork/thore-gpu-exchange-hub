
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
  CheckCircle
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
            <Badge className="mb-6 bg-green-100 text-green-700 border-green-300">
              <TrendingUp className="h-4 w-4 mr-2" />
              Investment Opportunity
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-green-600 to-blue-600 bg-clip-text text-transparent">
              Transform $100 into $3,000
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Invest in GPU Resources Credits today and capitalize on the explosive growth 
              of AI and blockchain technology over the next 2 years.
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
                <CardDescription>Target Value 2027</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto" />
                <CardTitle className="text-2xl">2,900%</CardTitle>
                <CardDescription>Total ROI</CardDescription>
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

      {/* Investment Growth Chart */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Investment Growth Projection</h2>
            <p className="text-xl text-muted-foreground">
              See how your $100 investment grows to $3,000 by 2027
            </p>
          </div>

          <Card className="max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-6 w-6 mr-2" />
                Investment Value Over Time
              </CardTitle>
              <CardDescription>
                Projected growth based on GPU market demand and Thore Network adoption
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Market Analysis</h2>
            <p className="text-xl text-muted-foreground">
              The GPU market is experiencing unprecedented growth
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
                  ROI Distribution by Sector
                </CardTitle>
                <CardDescription>
                  Where your $2,900 profit comes from by 2027
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why GPU Credits Will 30x</h2>
            <p className="text-xl text-muted-foreground">
              Multiple factors driving exponential growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Zap className="h-10 w-10 text-yellow-500 mb-4" />
                <CardTitle>AI Revolution</CardTitle>
                <CardDescription>
                  ChatGPT sparked an AI arms race. Every company needs GPU power for training 
                  and inference, creating unprecedented demand.
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
                <CardTitle>Supply Shortage</CardTitle>
                <CardDescription>
                  NVIDIA can't keep up with demand. Lead times for high-end GPUs are 
                  6-12 months, creating a massive supply-demand imbalance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">-60% supply</div>
                <div className="text-sm text-muted-foreground">Below demand</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Globe className="h-10 w-10 text-green-500 mb-4" />
                <CardTitle>Democratization</CardTitle>
                <CardDescription>
                  Thore Network makes GPU resources accessible to everyone, creating 
                  a liquid market for previously illiquid assets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">10x efficiency</div>
                <div className="text-sm text-muted-foreground">In resource allocation</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Investment Timeline</h2>
            <p className="text-xl text-muted-foreground">
              Your journey from $100 to $3,000
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
                    Invest $100 in GPU Credits. Market is just beginning to recognize the value.
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
                    Thore Network gains traction. First major enterprises start using the platform.
                  </p>
                  <div className="text-lg font-bold text-green-600 mt-2">Value: $180 (+80%)</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">2026 - Mass Adoption</h3>
                  <p className="text-muted-foreground">
                    AI becomes mainstream. GPU shortage intensifies. Thore Network is the go-to solution.
                  </p>
                  <div className="text-lg font-bold text-green-600 mt-2">Value: $450 (+350%)</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Late 2026 - Market Leadership</h3>
                  <p className="text-muted-foreground">
                    Thore Network dominates GPU credit trading. Institutional investors enter.
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
                    Full market maturity. GPU Credits are a recognized asset class.
                  </p>
                  <div className="text-lg font-bold text-green-600 mt-2">Value: $3,000 (+2,900%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">Investment Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-700">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  Past performance does not guarantee future results
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  GPU credit values can fluctuate based on market conditions
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
            Start Your $100 to $3,000 Journey
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don't miss this opportunity to be part of the GPU revolution. 
            The earlier you invest, the greater your potential returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Invest Now
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
