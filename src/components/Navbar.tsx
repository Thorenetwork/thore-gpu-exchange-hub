
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, ShoppingCart, Menu, Mail } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1371ab81-1d62-46d1-ad31-cbcbc7a43f3d.png" 
              alt="Thore Network" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors font-medium">
              Marketplace
            </Link>
            <Link to="/trading" className="text-foreground hover:text-primary transition-colors font-medium">
              Trading
            </Link>
            <Link to="/business" className="text-foreground hover:text-primary transition-colors font-medium">
              Business
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/docs" className="text-foreground hover:text-primary transition-colors font-medium">
              Documentation
            </Link>
            <Link to="/support" className="text-foreground hover:text-primary transition-colors font-medium">
              Support
            </Link>
            <a 
              href="mailto:info@thorenetwork.com" 
              className="text-foreground hover:text-primary transition-colors font-medium flex items-center"
            >
              <Mail className="h-4 w-4 mr-1" />
              Contact Us
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
            <Link to="/login">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors font-medium">
                Marketplace
              </Link>
              <Link to="/trading" className="text-foreground hover:text-primary transition-colors font-medium">
                Trading
              </Link>
              <Link to="/business" className="text-foreground hover:text-primary transition-colors font-medium">
                Business
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link to="/docs" className="text-foreground hover:text-primary transition-colors font-medium">
                Documentation
              </Link>
              <Link to="/support" className="text-foreground hover:text-primary transition-colors font-medium">
                Support
              </Link>
              <a 
                href="mailto:info@thorenetwork.com" 
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center"
              >
                <Mail className="h-4 w-4 mr-1" />
                Contact Us
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
