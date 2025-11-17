import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Lightbulb, Handshake, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: "Ayurvedic Plant Consultancy",
      description: "Expert guidance on selecting and cultivating premium Ayurvedic medicinal plants suited to your region and soil type.",
      features: ["Soil analysis", "Crop recommendation", "Seasonal planning", "Market insights"]
    },
    {
      icon: Lightbulb,
      title: "Farming Setup Guidance",
      description: "Complete support from land preparation to harvest, ensuring optimal setup for medicinal plant cultivation.",
      features: ["Land assessment", "Infrastructure planning", "Resource optimization", "Technology integration"]
    },
    {
      icon: Users,
      title: "Crop Selection Support",
      description: "Personalized crop selection based on climate, market demand, and profitability analysis.",
      features: ["ROI analysis", "Market trends", "Risk assessment", "Crop diversification"]
    },
    {
      icon: Handshake,
      title: "Buy-Back Assistance",
      description: "Connect with reliable buyers and get support in marketing your produce at competitive prices.",
      features: ["Buyer network", "Price negotiation", "Quality grading", "Logistics support"]
    },
    {
      icon: GraduationCap,
      title: "Farmer Training Programs",
      description: "Comprehensive training sessions on modern farming techniques and Ayurvedic plant cultivation.",
      features: ["Hands-on workshops", "Field visits", "Best practices", "Expert mentorship"]
    },
    {
      icon: TrendingUp,
      title: "Ongoing Support & Monitoring",
      description: "Continuous monitoring and support throughout your farming cycle for maximum yield and quality.",
      features: ["Regular field visits", "Problem solving", "Pest management", "Harvest timing"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Comprehensive support for medicinal plant farming - from consultation to harvest
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Crops Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Crops We Specialize In</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "Ashwagandha", "Dragon Fruit", "Safed Musli", "Chia Seeds",
              "Kali Haldi", "Kali Adrak", "Stevia", "Tulsi",
              "Aloe Vera", "Giloy", "Shatavari", "Brahmi"
            ].map((crop, index) => (
              <div key={index} className="bg-card p-4 rounded-lg text-center border border-border hover:border-primary transition-colors">
                <p className="font-semibold text-card-foreground">{crop}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Start Your Farming Journey Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized consultation and expert support for medicinal plant cultivation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-hero">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:7999517203">Call: 7999517203</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
