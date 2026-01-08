import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import {
  Car,
  Truck,
  Palette,
  Building2,
  Sticker,
  PanelTop,
  Signpost,
  Lightbulb,
  Box,
  Layers,
  Flag,
  MapPin,
  AlertTriangle,
  ClipboardList,
  Image,
  ArrowRight,
} from "lucide-react";

const wrapServices = [
  {
    icon: Car,
    title: "Full & Partial Vehicle Wraps",
    description: "Transform any vehicle with a complete color change or strategic partial wrap that maximizes impact while fitting your budget.",
    useCases: ["Brand new look for personal vehicles", "Commercial vehicle advertising", "Color protection for luxury cars"],
    needForQuote: "Vehicle make/model/year, desired coverage, design files or inspiration",
  },
  {
    icon: Truck,
    title: "Fleet Graphics & Commercial Branding",
    description: "Consistent, professional branding across your entire fleet. Turn every vehicle into a mobile billboard.",
    useCases: ["Delivery vans and trucks", "Service vehicles", "Company car programs"],
    needForQuote: "Fleet size, vehicle types, brand guidelines, timeline",
  },
  {
    icon: Palette,
    title: "Color Change / Accents",
    description: "Roof wraps, pillar accents, mirror caps, and trim details. Add personality without a full wrap commitment.",
    useCases: ["Racing stripes", "Two-tone color schemes", "Chrome delete"],
    needForQuote: "Vehicle info, specific areas to wrap, color preferences",
  },
  {
    icon: Building2,
    title: "Wall Wraps & Interior Branding",
    description: "Transform office spaces, lobbies, and retail environments with custom wall graphics and murals.",
    useCases: ["Office branding", "Retail displays", "Restaurant ambiance", "Event backdrops"],
    needForQuote: "Wall dimensions, photos of space, design concept",
  },
  {
    icon: Sticker,
    title: "Decals & Stickers",
    description: "Die-cut, kiss-cut, and reflective decals for any application. From small logos to large graphics.",
    useCases: ["Product labels", "Promotional stickers", "Vehicle lettering", "Safety decals"],
    needForQuote: "Size, quantity, material preference, artwork files",
  },
  {
    icon: PanelTop,
    title: "Window Graphics",
    description: "Frosted privacy film, perforated see-through graphics, hours and logo displays for any storefront.",
    useCases: ["Storefront branding", "Privacy solutions", "Promotional displays", "Vehicle windows"],
    needForQuote: "Window dimensions, indoor/outdoor, see-through requirements",
  },
];

const signServices = [
  {
    icon: Lightbulb,
    title: "Channel Letters (Front-lit / Halo-lit)",
    description: "Dimensional illuminated letters that make your brand stand out day and night.",
    useCases: ["Storefronts", "Shopping centers", "Office buildings"],
    needForQuote: "Letter dimensions, front-lit or halo, mounting location photos",
  },
  {
    icon: Box,
    title: "Cabinet Signs / Light Boxes",
    description: "Illuminated cabinet signs for maximum visibility and brand impact.",
    useCases: ["Retail locations", "Gas stations", "Strip malls"],
    needForQuote: "Size, single or double-sided, mounting height",
  },
  {
    icon: Layers,
    title: "Aluminum Composite Panel Signs (ACM)",
    description: "Durable, weather-resistant signage for long-lasting outdoor applications.",
    useCases: ["Building signage", "Monument signs", "Parking lot signs"],
    needForQuote: "Dimensions, mounting type, design requirements",
  },
  {
    icon: Signpost,
    title: "Acrylic Signs with Standoffs",
    description: "Modern, professional look with dimensional mounting hardware.",
    useCases: ["Lobby signs", "Reception areas", "Conference rooms"],
    needForQuote: "Size, thickness, standoff finish preference",
  },
  {
    icon: MapPin,
    title: "Monument & Post Signs",
    description: "Freestanding signs that establish presence at property entrances.",
    useCases: ["Business parks", "Churches", "Schools", "Apartment complexes"],
    needForQuote: "Height restrictions, illumination needs, location photos",
  },
  {
    icon: Flag,
    title: "Banners (Indoor/Outdoor)",
    description: "Versatile banner solutions for events, promotions, and temporary signage.",
    useCases: ["Grand openings", "Trade shows", "Seasonal promotions"],
    needForQuote: "Size, indoor/outdoor, quantity, hardware needs",
  },
  {
    icon: Signpost,
    title: "Yard Signs",
    description: "Cost-effective corrugated signs for temporary outdoor use.",
    useCases: ["Real estate", "Political campaigns", "Event directions", "Construction sites"],
    needForQuote: "Size, quantity, single or double-sided, stakes needed",
  },
  {
    icon: MapPin,
    title: "Directional / Wayfinding",
    description: "Guide visitors and customers with clear, branded wayfinding signage.",
    useCases: ["Hospitals", "Universities", "Corporate campuses", "Retail centers"],
    needForQuote: "Number of signs, locations, content for each sign",
  },
  {
    icon: AlertTriangle,
    title: "Safety & Compliance Signs",
    description: "OSHA, ADA, and custom safety signage for workplace compliance.",
    useCases: ["Warehouses", "Construction", "Manufacturing", "Public buildings"],
    needForQuote: "Types needed, quantities, any custom messaging",
  },
  {
    icon: ClipboardList,
    title: "Menu Boards / Interior Displays",
    description: "Functional and attractive displays for restaurants and retail.",
    useCases: ["Restaurants", "Cafes", "Quick-service", "Retail price displays"],
    needForQuote: "Size, changeable or fixed, illumination preference",
  },
  {
    icon: Image,
    title: "Vehicle Magnets",
    description: "Removable magnetic signs for flexible vehicle branding.",
    useCases: ["Personal vehicles used for business", "Temporary promotions", "Rental vehicles"],
    needForQuote: "Size, quantity, artwork files",
  },
];

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  useCases: string[];
  needForQuote: string;
}

function ServiceCard({ icon: Icon, title, description, useCases, needForQuote }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6">
        <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Common Uses:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {useCases.map((use, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                {use}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">What We Need to Quote:</h4>
          <p className="text-sm text-muted-foreground">{needForQuote}</p>
        </div>

        <Button asChild className="w-full">
          <Link to="/contact">Request a Quote</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              From vehicle wraps to business signage, we offer comprehensive graphics and signage solutions 
              designed, printed, and installed with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Wraps & Graphics Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wraps & Graphics</h2>
            <p className="text-muted-foreground max-w-2xl">
              High-impact vehicle wraps, wall graphics, and decals that transform any surface into a branding opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wrapServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Signs & Displays</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Professional signage solutions for every business need. From illuminated channel letters to safety signage.
                </p>
              </div>
              <Button asChild variant="outline" size="lg">
                <Link to="/signs">
                  View Signs Page
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Materials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-3">Quality Materials</h3>
            <p className="text-muted-foreground">
              We use premium, industry-trusted materials and professional production methods. 
              We partner with leading manufacturers and wholesale suppliers to deliver consistent results.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}