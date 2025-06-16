
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Lightbulb } from "lucide-react";

const Guides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-700 border-green-300">
              <BookOpen className="h-4 w-4 mr-2" />
              Guides & Tutorials
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn & Master
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Step-by-step guides to help you get the most out of Thore Network's GPU marketplace
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-6 w-6 mr-2" />
                Getting Started Guides
              </CardTitle>
              <CardDescription>
                Comprehensive tutorials and best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our detailed guides cover everything from basic setup to advanced optimization techniques.
                Learn how to maximize your earnings as a provider or efficiently use GPU resources as a buyer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;
