import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Sprout, Award, TrendingUp, ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import ashwagandhaImg from "@/assets/ashwagandha.jpg";
import dragonFruitImg from "@/assets/dragon-fruit.jpg";
import safedMusliImg from "@/assets/safed-musli.jpg";
import chiaSeedsImg from "@/assets/chia-seeds.jpg";
import farmerTestimonialImg from "@/assets/farmer-testimonial.jpg";

const Home = () => {
  const crops = [
    { name: "Ashwagandha", image: ashwagandhaImg, description: "Premium quality stress-relief herb" },
    { name: "Dragon Fruit", image: dragonFruitImg, description: "Exotic superfruit with high profits" },
    { name: "Safed Musli", image: safedMusliImg, description: "Valuable medicinal root crop" },
    { name: "Chia Seeds", image: chiaSeedsImg, description: "Nutrient-rich superfood" },
  ];

  const stats = [
    { icon: Users, value: "2000+", label: "Trusted Farmers" },
    { icon: Sprout, value: "15+", label: "Medicinal Crops" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: TrendingUp, value: "100%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 60, 30, 0.7), rgba(20, 60, 30, 0.8)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Grow Prosperity with
            <span className="block text-accent mt-2">Ayurvedic Farming</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Expert guidance in medicinal plant cultivation. Join 2000+ successful farmers across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow">
              <Link to="/contact">Get Started Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:7999517203"><Phone className="mr-2 h-5 w-5" /> Call: 7999517203</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-4xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Crops */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Premium Medicinal Crops</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert guidance for cultivating high-value Ayurvedic herbs and medicinal plants
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crops.map((crop, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${crop.image})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{crop.name}</h3>
                  <p className="text-muted-foreground text-sm">{crop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg" className="bg-gradient-hero">
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-glow bg-card/95">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <img 
                    src={farmerTestimonialImg}
                    alt="Farmer testimonial"
                    className="w-48 h-48 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <p className="text-xl text-card-foreground mb-6 italic">
                      "CR Fruits and Herbs transformed my farming journey. Their expert guidance on Ashwagandha cultivation helped me triple my income. The support and training provided are exceptional."
                    </p>
                    <p className="font-bold text-foreground">Rajesh Kumar</p>
                    <p className="text-muted-foreground">Farmer from Maharashtra</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Farming?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert consultation and support for your medicinal plant farming journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
              <Link to="/contact">Contact for Farming Support</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
