
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Shield, 
  Users, 
  TrendingUp, 
  Cloud, 
  Zap, 
  Globe, 
  Leaf,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              🚀 Revolutionizing GPU Resource Sharing
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
              GPU Credit Marketplace
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              Democratize AI and blockchain development with secure, transparent GPU credit trading. 
              Connect providers and innovators in the world's first dedicated GPU resource marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/marketplace">
                <Button size="lg" className="text-lg px-8 py-3">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Start Selling
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">GPU Hours Traded</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Providers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Modern GPU Trading
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for developers, researchers, and enterprises who need reliable, scalable GPU resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Blockchain Security</CardTitle>
                <CardDescription>
                  Smart contract-powered transactions with built-in escrow for maximum security and transparency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Dynamic Pricing</CardTitle>
                <CardDescription>
                  AI-powered pricing algorithms that adapt to real-time supply and demand for optimal value
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Verified Profiles</CardTitle>
                <CardDescription>
                  Comprehensive seller verification with ratings, reviews, and transaction history tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Multi-Cloud Integration</CardTitle>
                <CardDescription>
                  Seamless integration with AWS, Azure, Google Cloud, and other major cloud providers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Instant Deployment</CardTitle>
                <CardDescription>
                  Deploy GPU resources in seconds with automated provisioning and configuration
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Global Network</CardTitle>
                <CardDescription>
                  Access GPU resources worldwide with region-specific compliance and data regulations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Browse & Compare</h3>
              <p className="text-muted-foreground">
                Explore available GPU credits from verified providers. Filter by type, region, pricing, and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Secure Transaction</h3>
              <p className="text-muted-foreground">
                Purchase with confidence using our blockchain-secured smart contracts and automated escrow system.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Deploy & Scale</h3>
              <p className="text-muted-foreground">
                Instantly access your GPU resources and scale your AI or blockchain projects with enterprise-grade performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-green-100 text-green-700 border-green-300">
                <Leaf className="h-4 w-4 mr-2" />
                Sustainability First
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Responsible AI Development
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're committed to promoting sustainable GPU usage and reducing the carbon footprint 
                of AI and blockchain development through efficient resource sharing.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Carbon footprint tracking for all resources</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Priority listing for eco-friendly providers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Renewable energy source verification</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-primary rounded-3xl p-8 flex items-center justify-center">
                <Leaf className="h-32 w-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your AI Projects?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of developers, researchers, and enterprises who trust Thore Network 
            for their GPU resource needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
