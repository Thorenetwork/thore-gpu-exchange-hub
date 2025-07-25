
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [waitlistCount, setWaitlistCount] = useState(460);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setWaitlistCount(Math.floor(Math.random() * (700 - 460 + 1)) + 460);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission here
    console.log("Waitlist email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Waitlist Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-muted-foreground mb-2">Be the first to access our GPU marketplace</p>
          <p className="text-sm text-primary font-medium mb-6">{waitlistCount} people already waiting</p>
          <form onSubmit={handleWaitlistSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Join Waitlist</Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/1371ab81-1d62-46d1-ad31-cbcbc7a43f3d.png" 
              alt="Thore Network" 
              className="h-8 w-auto"
            />
            <p className="text-muted-foreground text-sm">
              Democratizing GPU resources for AI and blockchain projects through our secure marketplace platform.
            </p>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/marketplace" className="text-muted-foreground hover:text-primary transition-colors">Marketplace</Link></li>
              <li><Link to="/sellers" className="text-muted-foreground hover:text-primary transition-colors">For Sellers</Link></li>
              <li><Link to="/buyers" className="text-muted-foreground hover:text-primary transition-colors">For Buyers</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/data-centre" className="text-muted-foreground hover:text-primary transition-colors">Data Centre</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/api" className="text-muted-foreground hover:text-primary transition-colors">API Reference</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-primary transition-colors">Guides</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/status" className="text-muted-foreground hover:text-primary transition-colors">Status</Link></li>
              <li><Link to="/security" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <p className="text-muted-foreground text-sm text-center">
            © 2025-2027 Thore Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
