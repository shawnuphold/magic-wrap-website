import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { ImageOff } from "lucide-react";

// Import real work images
import interiorWrap1 from "@/assets/gallery/interior-wrap-1.jpg";
import interiorWrap2 from "@/assets/gallery/interior-wrap-2.jpg";
import colorChangeWrap1 from "@/assets/gallery/color-change-wrap-1.jpg";
import colorChangeWrap2 from "@/assets/gallery/color-change-wrap-2.jpg";
import boxTruckWrap1 from "@/assets/gallery/box-truck-wrap-1.jpg";
import windowTint1 from "@/assets/gallery/window-tint-1.jpg";
import windowTint2 from "@/assets/gallery/window-tint-2.jpg";
import vehicleWrap4 from "@/assets/gallery/vehicle-wrap-4.jpg";
import vehicleWrap5 from "@/assets/gallery/vehicle-wrap-5.jpg";
import partialWrap1 from "@/assets/gallery/partial-wrap-1.jpg";
import partialWrap2 from "@/assets/gallery/partial-wrap-2.jpg";
import partialWrap3 from "@/assets/gallery/partial-wrap-3.jpg";
import wallWrapLawOffice from "@/assets/gallery/wall-wrap-law-office.jpg";
import wallWrapGym from "@/assets/gallery/wall-wrap-gym.jpg";
import wallWrapOffice from "@/assets/gallery/wall-wrap-office.jpg";
import windowGraphicsGym from "@/assets/gallery/window-graphics-gym.jpg";
import windowGraphicsGameStore from "@/assets/gallery/window-graphics-game-store.jpg";
import stickersBusiness from "@/assets/gallery/stickers-business.jpg";
import stickersCustom from "@/assets/gallery/stickers-custom.jpg";
import sign1 from "@/assets/gallery/sign-1.jpg";
import sign2 from "@/assets/gallery/sign-2.jpg";
import sign3 from "@/assets/gallery/sign-3.jpg";

const categories = [
  "All",
  "Vehicle Wraps",
  "Fleet Branding",
  "Wall Wraps",
  "Window Graphics",
  "Stickers/Decals",
  "Signs",
];

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image?: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  // Real work - Vehicle Wraps
  { id: 1, title: "AMG Carbon Fiber Interior Wrap", category: "Vehicle Wraps", tags: ["Interior", "Carbon Fiber", "Luxury"], image: interiorWrap1 },
  { id: 2, title: "AMG Carbon Console Wrap", category: "Vehicle Wraps", tags: ["Interior", "Carbon Fiber", "Mercedes"], image: interiorWrap2 },
  { id: 3, title: "Color-Shift Truck Wrap", category: "Vehicle Wraps", tags: ["Full Wrap", "Color Change", "Iridescent"], image: colorChangeWrap1 },
  { id: 4, title: "Cybertruck Color Change", category: "Vehicle Wraps", tags: ["Full Wrap", "Color Change", "Tesla"], image: colorChangeWrap2 },
  { id: 5, title: "MagicShine Auto Spa Truck", category: "Fleet Branding", tags: ["Commercial", "Full Wrap", "Truck"], image: vehicleWrap4 },
  { id: 6, title: "MagicShine Mobile Detailing Van", category: "Fleet Branding", tags: ["Commercial", "Full Wrap", "Van"], image: vehicleWrap5 },
  { id: 7, title: "Carbon Fiber Gas Cap Accent", category: "Vehicle Wraps", tags: ["Partial Wrap", "Carbon Fiber", "Accent"], image: partialWrap1 },
  { id: 8, title: "Carbon Fiber Hood Scoop", category: "Vehicle Wraps", tags: ["Partial Wrap", "Carbon Fiber", "Truck"], image: partialWrap2 },
  { id: 9, title: "Red Hood Scoop Accent", category: "Vehicle Wraps", tags: ["Partial Wrap", "Color Accent", "Truck"], image: partialWrap3 },
  
  // Real work - Fleet
  { id: 10, title: "Wayside Furniture Box Truck", category: "Fleet Branding", tags: ["Box Truck", "Commercial", "Full Wrap"], image: boxTruckWrap1 },
  
  // Real work - Window Graphics
  { id: 11, title: "Navigator Roof & Mirror Wrap", category: "Vehicle Wraps", tags: ["Partial Wrap", "SUV", "Accents"], image: windowTint1 },
  { id: 12, title: "Carbon Fiber Pillar Accents", category: "Vehicle Wraps", tags: ["Partial Wrap", "Carbon Fiber", "SUV"], image: windowTint2 },
  
  // Coming soon placeholders
  { id: 13, title: "Coming Soon", category: "Fleet Branding", tags: ["Fleet"], comingSoon: true },
  { id: 14, title: "Coming Soon", category: "Fleet Branding", tags: ["Fleet"], comingSoon: true },
  { id: 15, title: "Law Office Wall Mural", category: "Wall Wraps", tags: ["Interior", "Professional", "Custom"], image: wallWrapLawOffice },
  { id: 16, title: "Gym Motivational Mural", category: "Wall Wraps", tags: ["Interior", "Fitness", "Large Format"], image: wallWrapGym },
  { id: 17, title: "Corporate Skyline Wrap", category: "Wall Wraps", tags: ["Interior", "Office", "Custom"], image: wallWrapOffice },
  { id: 18, title: "Gym Storefront Graphics", category: "Window Graphics", tags: ["Storefront", "Fitness", "Full Coverage"], image: windowGraphicsGym },
  { id: 19, title: "Game Store Window Display", category: "Window Graphics", tags: ["Storefront", "Retail", "Custom"], image: windowGraphicsGameStore },
  { id: 20, title: "Business Logo Stickers", category: "Stickers/Decals", tags: ["Custom", "Die-Cut", "Branding"], image: stickersBusiness },
  { id: 21, title: "Custom Die-Cut Decals", category: "Stickers/Decals", tags: ["Custom", "Die-Cut", "Vinyl"], image: stickersCustom },
  { id: 22, title: "Industrial Storefront Signage", category: "Signs", tags: ["Channel Letters", "Exterior", "Commercial"], image: sign1 },
  { id: 23, title: "Rustic Home Décor Sign", category: "Signs", tags: ["Dimensional", "Storefront", "Custom"], image: sign2 },
  { id: 24, title: "Auto Parts Channel Letters", category: "Signs", tags: ["Channel Letters", "Illuminated", "Commercial"], image: sign3 },
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
                  className={`group relative bg-muted rounded-lg overflow-hidden aspect-[4/3] ${project.comingSoon ? '' : 'cursor-pointer'}`}
                >
                  {project.comingSoon ? (
                    // Coming Soon placeholder
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted-foreground/10 p-6">
                      <ImageOff className="w-12 h-12 text-muted-foreground/40 mb-3" />
                      <p className="text-muted-foreground font-semibold text-lg">Coming Soon</p>
                      <p className="text-muted-foreground/60 text-sm mt-1">{project.category}</p>
                    </div>
                  ) : (
                    <>
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
                    </>
                  )}

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
