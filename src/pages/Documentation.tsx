
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Book, 
  Code, 
  Terminal, 
  Settings, 
  Shield, 
  Zap,
  Download,
  ExternalLink,
  Copy,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  const quickStartSteps = [
    {
      title: "Create Account",
      description: "Sign up for a Thore Network account and complete verification",
      icon: Shield
    },
    {
      title: "Browse GPU Credits",
      description: "Explore available GPU resources in our marketplace",
      icon: Zap
    },
    {
      title: "Make Purchase",
      description: "Buy GPU credits using our secure blockchain transactions",
      icon: CheckCircle
    },
    {
      title: "Deploy Resources",
      description: "Access your purchased GPU resources instantly",
      icon: Terminal
    }
  ];

  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/gpu-listings",
      description: "Retrieve available GPU listings"
    },
    {
      method: "POST",
      endpoint: "/api/v1/purchase",
      description: "Purchase GPU credits"
    },
    {
      method: "GET",
      endpoint: "/api/v1/user/credits",
      description: "Get user's GPU credit balance"
    },
    {
      method: "POST",
      endpoint: "/api/v1/deploy",
      description: "Deploy GPU resources"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Book className="h-4 w-4 mr-2" />
              Documentation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Developer Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete guide to integrating with Thore Network's GPU marketplace platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download SDK
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-5 w-5" />
                API Reference
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Quick Start Guide</h2>
            <p className="text-xl text-muted-foreground">
              Get up and running with Thore Network in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStartSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">API Reference</h2>
            <p className="text-xl text-muted-foreground">
              RESTful API endpoints for seamless integration
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-6 w-6 mr-2" />
                  Core Endpoints
                </CardTitle>
                <CardDescription>
                  Base URL: https://api.thorenetwork.com/v1
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-background">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Badge variant={endpoint.method === 'GET' ? 'secondary' : 'default'}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm font-mono">{endpoint.endpoint}</code>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Code Examples</h2>
            <p className="text-xl text-muted-foreground">
              Implementation examples in popular programming languages
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>JavaScript/Node.js</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>{`const response = await fetch(
  'https://api.thorenetwork.com/v1/gpu-listings',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);
const gpuListings = await response.json();`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Python</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.thorenetwork.com/v1/gpu-listings',
    headers=headers
)
gpu_listings = response.json()`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SDK and Tools */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">SDKs & Tools</h2>
            <p className="text-xl text-muted-foreground">
              Official SDKs and development tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="h-10 w-10 text-primary mb-4" />
                <CardTitle>JavaScript SDK</CardTitle>
                <CardDescription>
                  Full-featured SDK for web and Node.js applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download SDK
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Terminal className="h-10 w-10 text-primary mb-4" />
                <CardTitle>CLI Tool</CardTitle>
                <CardDescription>
                  Command-line interface for automated deployments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Install CLI
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-4" />
                <CardTitle>API Playground</CardTitle>
                <CardDescription>
                  Interactive API testing environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Playground
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our support team is here to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support">
              <Button size="lg">
                Contact Support
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;
