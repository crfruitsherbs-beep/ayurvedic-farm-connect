import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Sprout className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
            <div>
              <h1 className="text-xl font-bold text-foreground">The Farm Life</h1>
              <p className="text-xs text-muted-foreground">Ayurvedic Farming Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-gradient-hero hover:opacity-90">
              <a href="tel:7999517203">Call Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary font-medium py-2 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full bg-gradient-hero">
              <a href="tel:7999517203">Call Now</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
