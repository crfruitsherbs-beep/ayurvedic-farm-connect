import { Link } from "react-router-dom";
import { Sprout, Phone, MapPin, Mail, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-6 w-6" />
              <h3 className="font-bold text-lg">The Farm Life</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Leading Ayurvedic medicinal plant consultancy serving 2000+ farmers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Ayurvedic Plant Consultancy</li>
              <li>Farming Setup Guidance</li>
              <li>Crop Selection Support</li>
              <li>Farmer Training Programs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:7999517203" className="hover:text-accent transition-colors">7999517203</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Indore, Madhya Pradesh</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Youtube className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.youtube.com/@the_farm_life-cr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @the_farm_life-cr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} The Farm Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
