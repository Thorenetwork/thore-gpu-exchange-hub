
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Building2, 
  Zap, 
  Shield, 
  Thermometer,
  Globe,
  TrendingUp,
  Calendar,
  MapPin,
  Users,
  Database,
  Server,
  Cpu,
  HardDrive,
  Network,
  Leaf,
  DollarSign,
  Target,
  CheckCircle,
  Clock,
  ArrowRight,
  Mail
} from "lucide-react";

const DataCentre = () => {
  const specifications = [
    {
      title: "Total Capacity",
      value: "50 MW",
      description: "Maximum power capacity for high-performance computing",
      icon: Zap
    },
    {
      title: "GPU Racks",
      value: "2,000+",
      description: "State-of-the-art GPU housing infrastructure",
      icon: Server
    },
    {
      title: "Cooling System",
      value: "Liquid Immersion",
      description: "Advanced liquid cooling for optimal performance",
      icon: Thermometer
    },
    {
      title: "Security Level",
      value: "Tier IV",
      description: "Highest level of data center security and reliability",
      icon: Shield
    },
    {
      title: "Network Speed",
      value: "400 Gbps",
      description: "Ultra-high-speed network connectivity",
      icon: Network
    },
    {
      title: "Uptime SLA",
      value: "99.995%",
      description: "Guaranteed availability and reliability",
      icon: CheckCircle
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Site Preparation & Foundation",
      timeline: "Q2 2025 - Q4 2025",
      status: "Upcoming",
      description: "Land acquisition, permits, and foundation construction",
      budget: "$25M"
    },
    {
      phase: "Phase 2",
      title: "Infrastructure Development",
      timeline: "Q1 2026 - Q3 2026",
      status: "Planned",
      description: "Power systems, cooling infrastructure, and security systems",
      budget: "$75M"
    },
    {
      phase: "Phase 3",
      title: "Equipment Installation",
      timeline: "Q4 2026 - Q2 2027",
      status: "Planned",
      description: "GPU deployment, network setup, and testing",
      budget: "$150M"
    },
    {
      phase: "Phase 4",
      title: "Operations Launch",
      timeline: "Q3 2027",
      status: "Planned",
      description: "Full operational capacity and client onboarding",
      budget: "$10M"
    }
  ];

  const features = [
    {
      title: "Green Energy Powered",
      description: "100% renewable energy sources including solar and wind power",
      icon: Leaf
    },
    {
      title: "AI-Optimized Infrastructure",
      description: "Purpose-built for machine learning and AI workloads",
      icon: Cpu
    },
    {
      title: "Global Connectivity",
      description: "Direct fiber connections to major internet exchanges",
      icon: Globe
    },
    {
      title: "Redundant Systems",
      description: "Multiple backup systems ensuring zero downtime",
      icon: Database
    },
    {
      title: "Scalable Architecture",
      description: "Modular design allowing for future expansion",
      icon: TrendingUp
    },
    {
      title: "Edge Computing Ready",
      description: "Low-latency processing for edge applications",
      icon: Target
    }
  ];

  const investmentHighlights = [
    {
      metric: "$260M",
      label: "Total Investment",
      description: "Comprehensive funding for complete facility"
    },
    {
      metric: "15-20%",
      label: "Expected ROI",
      description: "Annual return on investment projection"
    },
    {
      metric: "500+",
      label: "Jobs Created",
      description: "Direct and indirect employment opportunities"
    },
    {
      metric: "2027",
      label: "Target Launch",
      description: "Expected operational commencement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-700 border-green-300">
              <Building2 className="h-4 w-4 mr-2" />
              Future Investment Project
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Thore Network Data Centre
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The future of high-performance computing infrastructure. A state-of-the-art data centre 
              designed to power the next generation of AI and blockchain applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <DollarSign className="mr-2 h-5 w-5" />
                Investment Opportunities
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <MapPin className="mr-2 h-5 w-5" />
                Location Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategically positioned to become the premier GPU computing facility in the region, 
              supporting AI research, blockchain mining, and high-performance computing workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <spec.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl font-bold text-primary">{spec.value}</CardTitle>
                  <CardDescription className="text-lg font-medium">{spec.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Representation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Facility Design</h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge architecture optimized for performance and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                alt="Data Centre Infrastructure" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Next-Generation Infrastructure</h3>
              <p className="text-lg text-muted-foreground">
                Our data centre will feature the latest in computing infrastructure, designed 
                specifically for GPU-intensive workloads and optimized for energy efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Modular Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Hot Aisle Containment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Smart Monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Automated Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Development Timeline</h2>
            <p className="text-xl text-muted-foreground">
              Four-phase development plan ensuring systematic and efficient construction
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className="text-lg px-4 py-2">
                        {phase.phase}
                      </Badge>
                      <div>
                        <CardTitle className="text-xl">{phase.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {phase.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{phase.budget}</div>
                      <div className="text-sm text-muted-foreground">{phase.timeline}</div>
                      <Badge className="mt-2" variant={phase.status === 'Upcoming' ? 'default' : 'secondary'}>
                        {phase.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-muted-foreground">
              Advanced capabilities setting new standards in data centre operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Investment Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Strategic investment opportunity in the future of computing infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary mb-2">
                    {highlight.metric}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium">
                    {highlight.label}
                  </CardDescription>
                  <p className="text-muted-foreground text-sm mt-2">
                    {highlight.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Sustainable Computing</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Committed to environmental responsibility with 100% renewable energy and 
              innovative cooling solutions that reduce our carbon footprint.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Carbon Neutral</h3>
                <p className="text-muted-foreground">Zero net carbon emissions</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">40% Less Energy</h3>
                <p className="text-muted-foreground">Compared to traditional data centres</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Water Efficient</h3>
                <p className="text-muted-foreground">Advanced cooling reduces water usage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="text-center py-16">
              <Building2 className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl font-bold mb-6">Join the Future of Computing</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Be part of the next generation of computing infrastructure. Investment opportunities 
                and partnership programs available for qualified investors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Investment Team
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Download Prospectus
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataCentre;
