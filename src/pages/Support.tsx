
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle,
  Search,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  Zap,
  Shield,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7",
      responseTime: "< 2 minutes",
      action: "Start Chat"
    },
    {
      title: "Email Support",
      description: "Detailed technical assistance via email",
      icon: Mail,
      availability: "24/7",
      responseTime: "< 4 hours",
      action: "Send Email"
    },
    {
      title: "Phone Support",
      description: "Direct phone support for urgent issues",
      icon: Phone,
      availability: "Business Hours",
      responseTime: "Immediate",
      action: "Call Now"
    }
  ];

  const faqItems = [
    {
      question: "How do I purchase GPU credits?",
      answer: "You can purchase GPU credits through our marketplace by browsing available listings, selecting the resources you need, and completing the transaction using our secure blockchain payment system."
    },
    {
      question: "What types of GPUs are available?",
      answer: "We offer a wide range of GPUs including NVIDIA RTX 4090, RTX 4080, A100, H100, and AMD equivalents. All GPUs are verified and benchmarked for optimal performance."
    },
    {
      question: "How secure are the transactions?",
      answer: "All transactions are secured by blockchain technology with smart contracts handling escrow. We also implement multi-factor authentication and encryption for all user data."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 24-hour satisfaction guarantee. If you're not satisfied with the GPU performance, you can request a full refund within 24 hours of purchase."
    },
    {
      question: "How do I access my purchased GPU resources?",
      answer: "Once purchased, you'll receive access credentials and connection details via email. You can also access your resources through your dashboard in the user portal."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major cryptocurrencies (Bitcoin, Ethereum, USDC), credit cards, and bank transfers. All payments are processed securely through our partners."
    }
  ];

  const statusItems = [
    { service: "API Gateway", status: "Operational", color: "green" },
    { service: "GPU Marketplace", status: "Operational", color: "green" },
    { service: "Payment Processing", status: "Operational", color: "green" },
    { service: "User Authentication", status: "Operational", color: "green" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-300">
              <HelpCircle className="h-4 w-4 mr-2" />
              Support Center
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get the support you need to succeed with Thore Network's GPU marketplace
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-input bg-background text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get Support</h2>
            <p className="text-xl text-muted-foreground">
              Choose the support channel that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <channel.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Availability:</span>
                      <span className="text-sm font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Response Time:</span>
                      <span className="text-sm font-medium">{channel.responseTime}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    {channel.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">System Status</h2>
            <p className="text-xl text-muted-foreground">
              Real-time status of all Thore Network services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  All Systems Operational
                </CardTitle>
                <CardDescription>
                  Last updated: {new Date().toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {statusItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background border">
                    <span className="font-medium">{item.service}</span>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                      <span className="text-sm text-green-600 font-medium">{item.status}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="cursor-pointer" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                    {expandedFaq === index ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Helpful Resources</h2>
            <p className="text-xl text-muted-foreground">
              Additional resources to help you get the most out of our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Getting Started Guide</CardTitle>
                <CardDescription>
                  Step-by-step guide to using the GPU marketplace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/docs">
                  <Button variant="outline" className="w-full">
                    View Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Security Best Practices</CardTitle>
                <CardDescription>
                  Learn how to keep your account and resources secure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>
                  Connect with other users and share experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Join Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="text-center py-16">
              <AlertCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our dedicated support team is standing by to assist you with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Live Chat
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
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

export default Support;
