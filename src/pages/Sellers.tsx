
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Cpu,
  Globe,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Sellers = () => {
  const benefits = [
    {
      title: "Monetize Idle GPUs",
      description: "Turn your unused GPU resources into a steady income stream",
      icon: DollarSign
    },
    {
      title: "Premium Pricing",
      description: "Earn up to 70% more than traditional cloud providers",
      icon: TrendingUp
    },
    {
      title: "Secure Transactions",
      description: "Blockchain-secured payments with instant settlement",
      icon: Shield
    },
    {
      title: "Global Reach",
      description: "Access customers worldwide through our marketplace",
      icon: Globe
    }
  ];

  const requirements = [
    "NVIDIA RTX 3080 or higher (or equivalent AMD)",
    "Stable internet connection (minimum 100 Mbps)",
    "99.5% uptime guarantee capability",
    "Verified identity and business registration"
  ];

  const earnings = [
    { gpu: "RTX 4090", hourly: "$4.50 - $6.00", monthly: "$3,240 - $4,320" },
    { gpu: "RTX 4080", hourly: "$3.25 - $4.50", monthly: "$2,340 - $3,240" },
    { gpu: "RTX 3090", hourly: "$2.75 - $3.75", monthly: "$1,980 - $2,700" },
    { gpu: "A100 80GB", hourly: "$5.50 - $7.50", monthly: "$3,960 - $5,400" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-700 border-green-300">
              <DollarSign className="h-4 w-4 mr-2" />
              For Sellers
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Turn Your GPUs Into Profit
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of GPU owners earning passive income by sharing their computing power with AI researchers and developers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg">
                  Start Selling
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Calculate Earnings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Sell on Thore Network?</h2>
            <p className="text-xl text-muted-foreground">
              Join the future of decentralized computing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Potential */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Earnings Potential</h2>
            <p className="text-xl text-muted-foreground">
              See how much you can earn with your GPU hardware
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Estimated Earnings by GPU Model</CardTitle>
                <CardDescription>
                  Based on current market rates and 24/7 operation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {earnings.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-background border">
                      <div className="flex items-center space-x-4">
                        <Cpu className="h-8 w-8 text-primary" />
                        <span className="font-semibold text-lg">{item.gpu}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{item.hourly}/hour</div>
                        <div className="text-sm text-muted-foreground">{item.monthly}/month</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Getting Started Requirements</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ensure your setup meets our quality standards for the best earning potential
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8">
              <CardHeader className="text-center">
                <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Quick Setup Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                    <span>Register and verify your identity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                    <span>Install Thore Network software</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                    <span>Configure your GPU settings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                    <span>Start earning immediately</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of GPU providers and start monetizing your hardware today
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary">
              <Users className="mr-2 h-5 w-5" />
              Join as Seller
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sellers;
