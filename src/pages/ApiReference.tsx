
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, ExternalLink, Copy, Book } from "lucide-react";

const ApiReference = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-300">
              <Code className="h-4 w-4 mr-2" />
              API Reference
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete API Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive API reference for integrating with Thore Network's GPU marketplace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <ExternalLink className="mr-2 h-5 w-5" />
                Interactive Docs
              </Button>
              <Button variant="outline" size="lg">
                <Copy className="mr-2 h-5 w-5" />
                Download SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="h-6 w-6 mr-2" />
                API Endpoints
              </CardTitle>
              <CardDescription>
                Base URL: https://api.thorenetwork.com/v1
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Complete API reference documentation is available at our interactive documentation portal.
                Access authentication, endpoints, examples, and SDKs for seamless integration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApiReference;
