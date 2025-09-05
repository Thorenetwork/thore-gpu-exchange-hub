
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Rocket, X } from "lucide-react";

const SoftLaunchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto link to send email to info@thorenetwork.com
    const subject = encodeURIComponent("AI Credit Marketplace Registration");
    const body = encodeURIComponent(`Email: ${email}\n\nI would like to join the Thore Network AI Credit Marketplace and receive updates.`);
    window.open(`mailto:info@thorenetwork.com?subject=${subject}&body=${body}`);
    setEmail("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="relative bg-gradient-to-br from-primary via-purple-600 to-blue-600 text-white p-8">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 text-white hover:bg-white/20"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <DialogHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <Rocket className="h-12 w-12 text-white animate-bounce" />
            </div>
            
            <DialogTitle className="text-2xl md:text-3xl font-bold text-white">
              Exciting News!
            </DialogTitle>
            
            <Badge className="mx-auto bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              Soft Launch Announcement
            </Badge>
          </DialogHeader>

          <div className="mt-6 text-center space-y-4">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/0b40157c-42d8-490a-8a62-fe6dfb169fde.png" 
                alt="ThoreCoin Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <h3 className="text-xl font-semibold">
              Thore Network PVT LTD
            </h3>
            
            <p className="text-lg opacity-90">
              AI Credit Marketplace
            </p>
            
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-1 text-green-400">
                LIVE NOW
              </div>
              <div className="text-sm opacity-80">
                Join the marketplace!
              </div>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed">
              Join us as we revolutionize the AI credit marketplace. 
              Be part of the future of AI resource sharing and trading.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4 mt-6">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Button type="submit" variant="secondary">
                  Join Now
                </Button>
              </div>
            </form>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={handleClose}
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-white text-white hover:bg-white hover:text-primary"
                onClick={handleClose}
              >
                Remind Me Later
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SoftLaunchPopup;
