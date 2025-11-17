import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower farmers with knowledge and resources for sustainable medicinal plant cultivation"
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "Making India self-reliant in Ayurvedic medicinal plant production"
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "Providing exceptional support and guaranteed success to every farmer we work with"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About The Farm Life</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Leading the way in Ayurvedic medicinal plant cultivation across India
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-foreground text-center">Our Journey</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              The Farm Life began with a simple vision: to revolutionize medicinal plant farming in India 
              and empower farmers with the knowledge and resources needed for sustainable agriculture.
            </p>
            <p className="text-lg mb-6">
              Based in Indore, Madhya Pradesh, we have grown from a small consultancy to a trusted partner 
              for over 2000+ farmers across India. Our expertise spans across premium Ayurvedic crops 
              including Ashwagandha, Dragon Fruit, Safed Musli, Chia Seeds, and many more medicinal plants.
            </p>
            <p className="text-lg mb-6">
              With over 10 years of hands-on experience in the field, we combine traditional Ayurvedic 
              knowledge with modern farming techniques to help farmers achieve maximum yields and profitability.
            </p>
            <p className="text-lg">
              Our commitment goes beyond just consultation - we provide end-to-end support from land 
              preparation to harvest, and even assist in connecting farmers with reliable buyers. 
              Every farmer's success is our success, and we take pride in the thriving farming communities 
              we've helped build across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <value.icon className="h-16 w-16 mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold text-foreground mb-2">2000+</h3>
              <p className="text-muted-foreground">Trusted Farmers</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold text-foreground mb-2">15+</h3>
              <p className="text-muted-foreground">Medicinal Crops</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold text-foreground mb-2">10+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-4xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground">Dedication</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Become part of 2000+ successful farmers transforming their lives with medicinal plant farming
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
