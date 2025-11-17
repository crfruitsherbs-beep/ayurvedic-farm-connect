import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, this would send the data to a backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about medicinal plant farming.");
    window.open(`https://wa.me/917999517203?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Get in touch for expert guidance on medicinal plant farming
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your farming plans..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-hero">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Phone</h3>
                      <a href="tel:7999517203" className="text-muted-foreground hover:text-primary transition-colors">
                        7999517203
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Location</h3>
                      <p className="text-muted-foreground">
                        Indore, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#25D366] text-white border-0">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                      <p className="mb-4 text-white/90">
                        Get instant support on WhatsApp
                      </p>
                      <Button 
                        onClick={handleWhatsApp}
                        variant="secondary"
                        className="bg-white text-[#25D366] hover:bg-white/90"
                      >
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Monday - Saturday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong className="text-foreground">Sunday:</strong> 10:00 AM - 4:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What crops do you specialize in?",
                a: "We specialize in Ayurvedic medicinal plants including Ashwagandha, Dragon Fruit, Safed Musli, Chia Seeds, Kali Haldi, Kali Adrak, and many more."
              },
              {
                q: "Do you provide buy-back support?",
                a: "Yes, we assist farmers in connecting with reliable buyers and help in getting competitive prices for their produce."
              },
              {
                q: "What areas do you serve?",
                a: "We serve farmers across India with our primary base in Indore, Madhya Pradesh. We provide remote consultations and on-site visits as needed."
              },
              {
                q: "How can I get started?",
                a: "Simply contact us via phone or WhatsApp, and our experts will guide you through the entire process from crop selection to cultivation."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
