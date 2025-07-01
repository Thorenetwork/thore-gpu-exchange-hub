
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThorecoinPriceTicker from "@/components/ThorecoinPriceTicker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, Zap, Gift, Trophy, Target, ArrowRight, ExternalLink, Percent, Star, Crown, Award } from "lucide-react";

const Thorecoin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ThorecoinPriceTicker />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/d0c3ad96-4098-4d11-88c1-f99faed47acc.png" 
              alt="ThoreCoin" 
              className="h-32 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ThoreCoin (THR)
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            The utility token powering the Thore Network AI Credit Marketplace. Transform THR from speculation to real-world AI infrastructure value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get THR Tokens
              <Coins className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="https://www.thorecoin.com" target="_blank" rel="noopener noreferrer">
                Visit ThoreCoin.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Objective</h2>
            <p className="text-lg text-muted-foreground">
              Enable THR (Thorecoin) to serve as a utility token within the Thore Network AI Credit Marketplace, 
              offering real-world application for AI developers, researchers, and enterprises by allowing them to 
              purchase GPU credits with added benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* THR-Powered Transactions */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>THR-Powered Transactions</CardTitle>
                <CardDescription>
                  Purchase GPU credits directly using THR tokens with fast, low-fee, and transparent payments
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Instant Discounts */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Percent className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Instant Discounts</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">5%</Badge>
                    <span className="text-sm">Under ₹50,000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">10%</Badge>
                    <span className="text-sm">Above ₹50,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Exclusive discounts for THR payments</p>
                </div>
              </CardHeader>
            </Card>

            {/* THR Rewards Program */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle>THR Rewards Program</CardTitle>
                <CardDescription>
                  Earn bonus GPU credits, loyalty tokens, and THR airdrops. The more you use THR, the more benefits you unlock
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Loyalty & Tier Boosting */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Crown className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Loyalty & Tier Boosting</CardTitle>
                <CardDescription>
                  Advance faster through marketplace loyalty tiers with priority access to high-demand GPU clusters and exclusive perks
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Gamified Usage */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Gamified Usage</CardTitle>
                <CardDescription>
                  Unlock special rewards through milestones, earn "GPU Hunter" badges, and participate in monthly contests
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Ecosystem Value Loop */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle>Ecosystem Value Loop</CardTitle>
                <CardDescription>
                  Drives THR adoption beyond speculation, encourages long-term holding, and strengthens utility in AI infrastructure
                </CardDescription>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      {/* Loyalty Tier Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Loyalty Tier Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            <Card className="text-center">
              <CardHeader>
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Priority Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get priority access to high-demand GPU clusters when you pay with THR
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                <CardTitle>Flash Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Early access to discounted flash sales and exclusive GPU deals
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                <CardTitle>Account Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dedicated account management and personalized support
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* User Experience Example */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">User Experience Example</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">How THR Payment Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <p>User selects GPU credits to purchase</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <p>Chooses THR as the payment method</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <p>Discount auto-applies (e.g., 10% off)</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <p>THR deducted, GPU credits delivered instantly</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <p>Bonus rewards and loyalty points added to user account</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform THR into the Fuel of the AI Economy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            THR becomes the fuel of the AI economy within Thore Network—backing every AI task, 
            training run, or infrastructure deployment with tangible value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Using THR
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://www.thorecoin.com" target="_blank" rel="noopener noreferrer">
                Learn More at ThoreCoin.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Thorecoin;
