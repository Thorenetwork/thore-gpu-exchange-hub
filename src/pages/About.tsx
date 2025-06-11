
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Coins,
  Server,
  Lock,
  Leaf,
  ArrowRight,
  CheckCircle,
  Target,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const [tradingVolume, setTradingVolume] = useState(10000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTradingVolume(prev => {
        // Random change between -5% and +5%
        const changePercent = (Math.random() - 0.5) * 0.1; // 10% max change
        const newVolume = prev * (1 + changePercent);
        return Math.round(newVolume);
      });
    }, 60000); // Update every minute (60,000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) {
      return `$${(volume / 1000000).toFixed(1)}M`;
    } else if (volume >= 1000) {
      return `$${(volume / 1000).toFixed(0)}K`;
    }
    return `$${volume}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Thore Network
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Democratizing GPU resources through blockchain technology. We're building the world's largest 
              decentralized marketplace for computational power, making AI and machine learning accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Thore Network, we believe that computational power should be accessible, 
                affordable, and sustainable. Our mission is to create a decentralized ecosystem 
                where GPU resources are democratically distributed and efficiently utilized.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Democratize Access</h3>
                    <p className="text-muted-foreground">Making high-performance computing accessible to researchers, developers, and businesses worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Optimize Efficiency</h3>
                    <p className="text-muted-foreground">Reducing waste by connecting idle GPU resources with those who need computational power.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Drive Innovation</h3>
                    <p className="text-muted-foreground">Accelerating AI research and development through affordable, scalable infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
                alt="High-tech circuit board"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* GPU Credits Explanation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Understanding GPU Credits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              GPU Credits are the native currency of Thore Network, enabling seamless transactions 
              in our decentralized marketplace for computational resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Coins className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>What are GPU Credits?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Digital tokens representing computational time on GPU resources. 
                  One credit equals one hour of GPU usage at standard performance levels.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Dynamic Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Credit values fluctuate based on supply and demand, ensuring optimal 
                  resource allocation and fair market pricing for all participants.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Secure Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All transactions are secured by blockchain technology, ensuring 
                  transparency, immutability, and trust in every exchange.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">How GPU Credits Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h4 className="font-semibold mb-2">Purchase Credits</h4>
                <p className="text-sm text-muted-foreground">Buy GPU credits using fiat currency or cryptocurrency</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h4 className="font-semibold mb-2">Browse Resources</h4>
                <p className="text-sm text-muted-foreground">Find the perfect GPU setup for your computational needs</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h4 className="font-semibold mb-2">Execute Tasks</h4>
                <p className="text-sm text-muted-foreground">Run your AI models, training, or rendering jobs</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h4 className="font-semibold mb-2">Pay Automatically</h4>
                <p className="text-sm text-muted-foreground">Credits are deducted automatically based on usage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cutting-Edge Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on advanced blockchain infrastructure with enterprise-grade security and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Server className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Distributed Infrastructure</CardTitle>
                <CardDescription>
                  Global network of GPU providers ensuring 99.9% uptime and optimal performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-region availability</li>
                  <li>• Automatic load balancing</li>
                  <li>• Instant scalability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-level security protocols protecting your data and computational processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• End-to-end encryption</li>
                  <li>• Zero-knowledge architecture</li>
                  <li>• Compliance ready</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Sustainable Computing</CardTitle>
                <CardDescription>
                  Eco-friendly approach to computational resources with carbon offset programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Green energy providers</li>
                  <li>• Carbon neutral operations</li>
                  <li>• Efficiency optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Network by the Numbers</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of users already leveraging our distributed GPU network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15,439</div>
              <div className="text-lg opacity-90">GPU Hours Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">892</div>
              <div className="text-lg opacity-90">Verified Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2,847</div>
              <div className="text-lg opacity-90">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{formatVolume(tradingVolume)}</div>
              <div className="text-lg opacity-90">24h Trading Volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-purple-50 to-blue-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the future of distributed computing. Start trading GPU credits and 
              access the computational power you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
