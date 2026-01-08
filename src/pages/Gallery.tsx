import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";

// Import images
import vehicleWrap1 from "@/assets/gallery/vehicle-wrap-1.jpg";
import vehicleWrap2 from "@/assets/gallery/vehicle-wrap-2.jpg";
import vehicleWrap3 from "@/assets/gallery/vehicle-wrap-3.jpg";
import fleetWrap1 from "@/assets/gallery/fleet-wrap-1.jpg";
import fleetWrap2 from "@/assets/gallery/fleet-wrap-2.jpg";
import wallWrap1 from "@/assets/gallery/wall-wrap-1.jpg";
import wallWrap2 from "@/assets/gallery/wall-wrap-2.jpg";
import sign1 from "@/assets/gallery/sign-1.jpg";
import sign2 from "@/assets/gallery/sign-2.jpg";
import foodTruckWrap from "@/assets/gallery/food-truck-wrap.jpg";
import windowGraphics1 from "@/assets/gallery/window-graphics-1.jpg";

const categories = [
  "All",
  "Vehicle Wraps",
  "Fleet Branding",
  "Wall Wraps",
  "Window Graphics",
  "Stickers/Decals",
  "Signs",
];

const projects = [
  { id: 1, title: "Tesla Model 3 Full Wrap", category: "Vehicle Wraps", tags: ["Full Wrap", "Color Change", "Matte"], image: vehicleWrap1 },
  { id: 2, title: "ABC Plumbing Fleet", category: "Fleet Branding", tags: ["Fleet", "Commercial", "Vinyl"], image: fleetWrap1 },
  { id: 3, title: "Downtown Cafe Mural", category: "Wall Wraps", tags: ["Interior", "Mural", "Branding"], image: wallWrap1 },
  { id: 4, title: "Retail Storefront", category: "Window Graphics", tags: ["Storefront", "Frosted", "Hours"], image: windowGraphics1 },
  { id: 5, title: "Restaurant Channel Letters", category: "Signs", tags: ["Channel Letters", "Front-Lit", "Outdoor"], image: sign1 },
  { id: 6, title: "Ford F-150 Partial Wrap", category: "Vehicle Wraps", tags: ["Partial Wrap", "Commercial"], image: vehicleWrap3 },
  { id: 7, title: "Tech Startup Office Branding", category: "Wall Wraps", tags: ["Office", "Interior", "Logo Wall"], image: wallWrap2 },
  { id: 8, title: "Delivery Van Fleet - 20 Units", category: "Fleet Branding", tags: ["Fleet", "Delivery", "National"], image: fleetWrap2 },
  { id: 9, title: "Dental Office Lobby Sign", category: "Signs", tags: ["Acrylic", "Standoffs", "Interior"], image: sign2 },
  { id: 10, title: "BMW M4 Color Change", category: "Vehicle Wraps", tags: ["Full Wrap", "Satin", "Luxury"], image: vehicleWrap2 },
  { id: 11, title: "Food Truck Full Wrap", category: "Vehicle Wraps", tags: ["Full Wrap", "Food Truck", "Custom"], image: foodTruckWrap },
  { id: 12, title: "Corporate Wall Graphics", category: "Wall Wraps", tags: ["Corporate", "Large Format"], image: wallWrap1 },
  { id: 13, title: "Storefront Sign Installation", category: "Signs", tags: ["Channel Letters", "Illuminated"], image: sign1 },
  { id: 14, title: "Fleet Van Graphics", category: "Fleet Branding", tags: ["Fleet", "Graphics"], image: fleetWrap1 },
  { id: 15, title: "Luxury Car Wrap", category: "Vehicle Wraps", tags: ["Luxury", "Color Change"], image: vehicleWrap2 },
  { id: 16, title: "Office Lobby Sign", category: "Signs", tags: ["Interior", "Modern"], image: sign2 },
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
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
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