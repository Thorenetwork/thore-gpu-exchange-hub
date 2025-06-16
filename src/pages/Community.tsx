
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MessageCircle } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-purple-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-300">
              <Users className="h-4 w-4 mr-2" />
              Community
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with GPU providers, developers, and AI researchers from around the world
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-2" />
                Community Forums
              </CardTitle>
              <CardDescription>
                Share knowledge, get help, and connect with fellow users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join thousands of GPU providers and users in our vibrant community. 
                Share experiences, get technical support, and stay updated with the latest developments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
