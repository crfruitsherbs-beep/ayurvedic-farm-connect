import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Complete Guide to Ashwagandha Farming in India",
      excerpt: "Learn everything about cultivating Ashwagandha - from soil preparation to harvest and market rates.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Crop Guide"
    },
    {
      title: "Dragon Fruit Farming: High Profits with Minimal Investment",
      excerpt: "Discover why Dragon Fruit is becoming the most profitable crop for Indian farmers.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Profitability"
    },
    {
      title: "Safed Musli: The White Gold of Medicinal Plants",
      excerpt: "Everything you need to know about growing and selling Safed Musli successfully.",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Crop Guide"
    },
    {
      title: "Top 10 Medicinal Plants for Indian Climate",
      excerpt: "Explore the most suitable and profitable medicinal plants you can grow in India.",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "General"
    },
    {
      title: "Organic Farming Practices for Ayurvedic Herbs",
      excerpt: "Learn sustainable and organic farming methods for premium quality medicinal plants.",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Techniques"
    },
    {
      title: "Market Trends: Demand for Ayurvedic Crops in 2024",
      excerpt: "Understanding market dynamics and pricing for medicinal plant farmers.",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Market Analysis"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Farming Knowledge Hub</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Expert insights, guides, and tips for successful medicinal plant farming
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-accent font-semibold mb-3">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl mb-2 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Crop Guides", "Market Analysis", "Techniques", "Success Stories"].map((category, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow border-border text-center">
                <CardContent className="pt-6 pb-6">
                  <p className="font-semibold text-foreground">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20 bg-gradient-to-br from-background to-muted">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest farming tips and market insights
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button className="bg-gradient-hero whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
