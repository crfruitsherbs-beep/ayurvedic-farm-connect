import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  // Placeholder images - in a real implementation, these would be actual gallery images
  const farmImages = Array(6).fill(null).map((_, i) => ({
    id: i,
    src: `https://images.unsplash.com/photo-1560493676522-773c37d0d33e?w=800&h=600&fit=crop&auto=format&q=80&seed=${i}`,
    alt: `Farm view ${i + 1}`
  }));

  const plantImages = Array(6).fill(null).map((_, i) => ({
    id: i,
    src: `https://images.unsplash.com/photo-1574943320259-c8db8c6e5a9a?w=800&h=600&fit=crop&auto=format&q=80&seed=${i}`,
    alt: `Medicinal plant ${i + 1}`
  }));

  const trainingImages = Array(6).fill(null).map((_, i) => ({
    id: i,
    src: `https://images.unsplash.com/photo-1542838132-1f31706e3c3b?w=800&h=600&fit=crop&auto=format&q=80&seed=${i}`,
    alt: `Training session ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Glimpses of our farms, crops, and farmer training programs
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="farms" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="farms">Farms</TabsTrigger>
              <TabsTrigger value="plants">Plants</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
            </TabsList>

            <TabsContent value="farms">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {farmImages.map((image) => (
                  <Card key={image.id} className="overflow-hidden group cursor-pointer border-border">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="plants">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plantImages.map((image) => (
                  <Card key={image.id} className="overflow-hidden group cursor-pointer border-border">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="training">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingImages.map((image) => (
                  <Card key={image.id} className="overflow-hidden group cursor-pointer border-border">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Watch Our Videos</h2>
            <p className="text-muted-foreground text-lg">
              Learn from our expert tips and farmer success stories on YouTube
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 border-border">
              <p className="text-lg text-muted-foreground mb-6">
                Visit our YouTube channel for farming tutorials, crop guides, and success stories
              </p>
              <a 
                href="https://www.youtube.com/@the_farm_life-cr/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF0000] text-white px-6 py-3 rounded-lg hover:bg-[#CC0000] transition-colors font-semibold"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Visit Our Channel
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
