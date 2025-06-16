
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Zap, 
  Shield, 
  Globe, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Cpu,
  BarChart3,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Buyers = () => {
  const advantages = [
    {
      title: "Instant Access",
      description: "Deploy GPU resources in under 60 seconds",
      icon: Zap
    },
    {
      title: "Cost Effective",
      description: "Up to 60% savings compared to traditional cloud",
      icon: BarChart3
    },
    {
      title: "Global Network",
      description: "Access GPUs from providers worldwide",
      icon: Globe
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
      icon: Clock
    }
  ];

  const useCases = [
    {
      title: "AI Model Training",
      description: "Train deep learning models with high-performance GPUs",
      features: ["PyTorch & TensorFlow support", "Distributed training", "Custom environments"]
    },
    {
      title: "Blockchain Mining",
      description: "Mine cryptocurrencies with optimized GPU clusters",
      features: ["Multiple coin support", "Pool mining", "Real-time monitoring"]
    },
    {
      title: "Research & Development",
      description: "Accelerate scientific computing and research projects",
      features: ["Academic pricing", "Jupyter notebooks", "Data visualization"]
    },
    {
      title: "Rendering & Graphics",
      description: "Render high-quality 3D graphics and animations",
      features: ["Blender support", "GPU rendering", "Batch processing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-300">
              <Cpu className="h-4 w-4 mr-2" />
              For Buyers
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Access GPU Power On-Demand
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scale your AI, blockchain, and compute-intensive projects with our global network of verified GPU providers. Pay only for what you use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button size="lg">
                  Browse GPUs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Thore Network?</h2>
            <p className="text-xl text-muted-foreground">
              The most efficient way to access GPU computing power
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <advantage.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  <CardDescription>{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Perfect For Your Projects</h2>
            <p className="text-xl text-muted-foreground">
              Whatever your compute needs, we have the right GPUs for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-lg">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Simple Three-Step Process</h2>
            <p className="text-xl text-muted-foreground">
              Get started with GPU computing in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Browse & Select</h3>
              <p className="text-muted-foreground">
                Choose from thousands of verified GPUs. Filter by type, location, pricing, and availability to find the perfect match.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Secure Purchase</h3>
              <p className="text-muted-foreground">
                Complete your purchase with our blockchain-secured payment system. Funds are held in escrow until service delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Deploy & Scale</h3>
              <p className="text-muted-foreground">
                Access your GPU resources instantly. Scale up or down as needed with our flexible computing environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-green-100 text-green-700 border-green-300">
                <Shield className="h-4 w-4 mr-2" />
                Enterprise Security
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Your Data is Safe</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Enterprise-grade security protocols protect your projects and data throughout the entire computing process.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>End-to-end encryption for all data transfers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Isolated computing environments</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>SOC 2 Type II compliance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Regular security audits and monitoring</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-primary rounded-3xl p-8 flex items-center justify-center">
                <Shield className="h-32 w-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Projects?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers and researchers who trust Thore Network for their GPU computing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button size="lg" variant="secondary">
                <Cpu className="mr-2 h-5 w-5" />
                Start Computing
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Users className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Buyers;
