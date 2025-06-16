
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  CheckCircle, 
  X, 
  DollarSign, 
  Zap, 
  Users, 
  Building,
  Crown,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0.10",
      unit: "per GPU hour",
      description: "Perfect for individual developers and small projects",
      icon: Zap,
      features: [
        "Access to verified GPU providers",
        "Basic support (email)",
        "Standard performance GPUs",
        "Pay-as-you-use billing",
        "Community forums access",
        "Basic monitoring dashboard"
      ],
      limitations: [
        "Limited to 100 hours/month",
        "No priority support",
        "Standard SLA (99.5%)"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$0.08",
      unit: "per GPU hour",
      description: "Ideal for growing teams and medium-scale projects",
      icon: Users,
      features: [
        "Everything in Starter",
        "Priority support (chat + email)",
        "High-performance GPUs",
        "Volume discounts",
        "Advanced monitoring & analytics",
        "API access",
        "Custom environments",
        "Team collaboration tools"
      ],
      limitations: [
        "Limited to 1,000 hours/month",
        "Standard SLA (99.7%)"
      ],
      cta: "Choose Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      unit: "pricing",
      description: "For large organizations with specific requirements",
      icon: Building,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Premium GPU access (A100, H100)",
        "Unlimited usage",
        "Custom SLA (up to 99.99%)",
        "Private GPU clusters",
        "White-label options",
        "Custom integrations",
        "24/7 phone support",
        "Security compliance (SOC 2, HIPAA)"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const gpuPricing = [
    { model: "RTX 4090", price: "$0.12/hour", performance: "High", use: "Gaming, AI Training" },
    { model: "RTX 4080", price: "$0.08/hour", performance: "High", use: "AI Development" },
    { model: "A100 80GB", price: "$0.18/hour", performance: "Enterprise", use: "Large Model Training" },
    { model: "H100 80GB", price: "$0.25/hour", performance: "Premium", use: "Advanced AI Research" },
    { model: "RTX 3090", price: "$0.06/hour", performance: "Standard", use: "General Computing" }
  ];

  const additionalServices = [
    { service: "Data Transfer", price: "$0.01/GB", description: "Secure data upload/download" },
    { service: "Storage", price: "$0.05/GB/month", description: "Persistent storage for your data" },
    { service: "Setup Support", price: "$50/hour", description: "Expert assistance with configuration" },
    { service: "Custom Software", price: "$100/hour", description: "Custom environment setup" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-300">
              <DollarSign className="h-4 w-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, Fair Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Pay only for the GPU resources you use. No hidden fees, no long-term contracts. Scale up or down as needed.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground">
              Flexible pricing that grows with your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Crown className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <plan.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      {plan.unit}
                    </span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center">
                        <X className="h-4 w-4 text-red-500 mr-3" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/signup">
                    <Button className={`w-full ${plan.popular ? 'bg-primary' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">GPU-Specific Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for different GPU models
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Current GPU Rates</CardTitle>
                <CardDescription>
                  Prices may vary based on demand and availability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gpuPricing.map((gpu, index) => (
                    <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-background border">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{gpu.model.split(' ')[0]}</span>
                        </div>
                        <div>
                          <div className="font-semibold">{gpu.model}</div>
                          <div className="text-sm text-muted-foreground">{gpu.use}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{gpu.price}</div>
                        <Badge variant="outline" className="text-xs">
                          {gpu.performance}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Optional services to enhance your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{service.service}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="font-bold">
                      {service.price}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Pricing FAQ</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How is billing calculated?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Billing is calculated per minute of GPU usage, rounded up to the nearest minute. You only pay for active computing time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there any setup fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No setup fees for standard configurations. Custom setups may incur additional charges as listed in our additional services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I get volume discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Professional and Enterprise plans include automatic volume discounts. Contact our sales team for custom enterprise pricing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start with our free trial and scale as you grow. No commitments, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                <Zap className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Shield className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
