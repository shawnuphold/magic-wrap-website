import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";

const categories = [
  "All",
  "Vehicle Wraps",
  "Fleet Branding",
  "Wall Wraps",
  "Window Graphics",
  "Stickers/Decals",
  "Signs",
];

// Placeholder projects - in a real app, these would come from a CMS or database
const projects = [
  { id: 1, title: "Tesla Model 3 Full Wrap", category: "Vehicle Wraps", tags: ["Full Wrap", "Color Change", "Matte"] },
  { id: 2, title: "ABC Plumbing Fleet", category: "Fleet Branding", tags: ["Fleet", "Commercial", "Vinyl"] },
  { id: 3, title: "Downtown Cafe Mural", category: "Wall Wraps", tags: ["Interior", "Mural", "Branding"] },
  { id: 4, title: "Retail Storefront", category: "Window Graphics", tags: ["Storefront", "Frosted", "Hours"] },
  { id: 5, title: "Product Labels Batch", category: "Stickers/Decals", tags: ["Die-Cut", "Labels", "Bulk"] },
  { id: 6, title: "Restaurant Channel Letters", category: "Signs", tags: ["Channel Letters", "Front-Lit", "Outdoor"] },
  { id: 7, title: "Ford F-150 Partial Wrap", category: "Vehicle Wraps", tags: ["Partial Wrap", "Commercial"] },
  { id: 8, title: "Tech Startup Office Branding", category: "Wall Wraps", tags: ["Office", "Interior", "Logo Wall"] },
  { id: 9, title: "Delivery Van Fleet - 20 Units", category: "Fleet Branding", tags: ["Fleet", "Delivery", "National"] },
  { id: 10, title: "Dental Office Monument Sign", category: "Signs", tags: ["Monument", "Illuminated", "ACM"] },
  { id: 11, title: "Coffee Shop Window Display", category: "Window Graphics", tags: ["Perforated", "Promotional"] },
  { id: 12, title: "BMW M4 Color Change", category: "Vehicle Wraps", tags: ["Full Wrap", "Satin", "Luxury"] },
  { id: 13, title: "Law Firm Lobby Sign", category: "Signs", tags: ["Acrylic", "Standoffs", "Interior"] },
  { id: 14, title: "Food Truck Full Wrap", category: "Vehicle Wraps", tags: ["Full Wrap", "Food Truck", "Custom"] },
  { id: 15, title: "Gym Motivational Wall", category: "Wall Wraps", tags: ["Gym", "Large Format", "Typography"] },
  { id: 16, title: "Real Estate Yard Signs - 100pc", category: "Signs", tags: ["Yard Signs", "Bulk", "Real Estate"] },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our portfolio of vehicle wraps, fleet graphics, wall murals, and professional signage projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="font-medium"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-muted rounded-lg overflow-hidden aspect-[4/3] cursor-pointer"
                >
                  {/* Placeholder image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300" />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/80 transition-all duration-300 flex flex-col justify-end p-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-background font-semibold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-background/20 text-background"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button asChild size="sm" variant="secondary" className="w-full">
                        <Link to="/contact">Request a Quote Like This</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-background/90 text-foreground font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection 
        title="Like What You See?"
        subtitle="Let us create something amazing for your business too."
        buttonText="Start Your Project"
      />
    </Layout>
  );
}