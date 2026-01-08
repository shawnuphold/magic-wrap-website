import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import {
  ArrowRight,
  Car,
  Truck,
  Building2,
  Sticker,
  PanelTop,
  Signpost,
  Flag,
  AlertTriangle,
  ClipboardCheck,
  Palette,
  Wrench,
  CheckCircle2,
} from "lucide-react";

// Import images
import heroBg from "@/assets/hero-bg.jpg";
import vehicleWrap1 from "@/assets/gallery/vehicle-wrap-1.jpg";
import vehicleWrap2 from "@/assets/gallery/vehicle-wrap-2.jpg";
import vehicleWrap3 from "@/assets/gallery/vehicle-wrap-3.jpg";
import vehicleWrapHero from "@/assets/gallery/vehicle-wrap-hero.jpg";
import fleetWrap1 from "@/assets/gallery/fleet-wrap-1.jpg";
import fleetWrap2 from "@/assets/gallery/fleet-wrap-2.jpg";
import wallWrap1 from "@/assets/gallery/wall-wrap-1.jpg";
import wallWrap2 from "@/assets/gallery/wall-wrap-2.jpg";
import sign1 from "@/assets/gallery/sign-1.jpg";
import sign2 from "@/assets/gallery/sign-2.jpg";
import storefrontSign from "@/assets/gallery/storefront-sign.jpg";
import foodTruckWrap from "@/assets/gallery/food-truck-wrap.jpg";
import windowGraphics1 from "@/assets/gallery/window-graphics-1.jpg";

const services = [
  { icon: Car, name: "Vehicle Wraps", description: "Full & partial wraps for any vehicle" },
  { icon: Truck, name: "Fleet Graphics", description: "Consistent branding across your fleet" },
  { icon: Building2, name: "Wall Wraps & Murals", description: "Transform interior & exterior spaces" },
  { icon: Sticker, name: "Stickers & Decals", description: "Die-cut, kiss-cut, reflective options" },
  { icon: PanelTop, name: "Window Graphics", description: "Perforated, frosted, hours & logos" },
  { icon: Signpost, name: "Business Signs", description: "Channel letters, cabinet signs & more" },
  { icon: Flag, name: "Banners & Event Signage", description: "Indoor & outdoor event displays" },
  { icon: AlertTriangle, name: "Wayfinding & Safety", description: "Directional & compliance signage" },
];

const signTypes = [
  "Channel Letters",
  "Cabinet Signs",
  "Aluminum Panels",
  "Acrylic Signs",
  "Standoff Signs",
  "Yard Signs",
  "Banners",
  "Window Vinyl",
  "ADA Signs",
  "Parking & Safety",
];

const processSteps = [
  { icon: ClipboardCheck, step: "01", title: "Discovery", description: "We learn about your project, goals, and timeline" },
  { icon: Palette, step: "02", title: "Design", description: "Our team creates custom designs or refines yours" },
  { icon: Wrench, step: "03", title: "Production", description: "Premium materials, precision printing & prep" },
  { icon: CheckCircle2, step: "04", title: "Install", description: "Professional installation by certified technicians" },
];

const featuredWork = [
  { image: vehicleWrap1, title: "Tesla Model 3 Full Wrap", category: "Vehicle Wraps" },
  { image: fleetWrap1, title: "Commercial Fleet Branding", category: "Fleet Graphics" },
  { image: sign1, title: "Storefront Channel Letters", category: "Signs" },
  { image: wallWrap1, title: "Corporate Office Mural", category: "Wall Wraps" },
  { image: vehicleWrap2, title: "BMW M4 Color Change", category: "Vehicle Wraps" },
  { image: foodTruckWrap, title: "Food Truck Full Wrap", category: "Vehicle Wraps" },
  { image: sign2, title: "Lobby Acrylic Sign", category: "Signs" },
  { image: windowGraphics1, title: "Cafe Window Graphics", category: "Window Graphics" },
  { image: vehicleWrap3, title: "Service Truck Wrap", category: "Vehicle Wraps" },
  { image: fleetWrap2, title: "Delivery Fleet Program", category: "Fleet Graphics" },
  { image: wallWrap2, title: "Gym Wall Mural", category: "Wall Wraps" },
  { image: vehicleWrap1, title: "Electric Vehicle Wrap", category: "Vehicle Wraps" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/80 to-foreground/60" />
        
        {/* Accent Glow */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase">Morgantown's Premier Wrap & Sign Shop</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-background leading-[1.1] animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Wraps & Signs<br />
              <span className="text-primary">That Demand Attention</span>
            </h1>
            
            <p className="text-lg md:text-xl text-background/70 mb-10 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Professional vehicle wraps, fleet branding, wall graphics, and custom signage. 
              Precision-crafted to make your brand unforgettable.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="font-semibold text-base px-8 h-14 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold text-base px-8 h-14 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-sm transition-all">
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-background/10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-background/60 mt-1">Vehicles Wrapped</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-background/60 mt-1">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-background/60 mt-1">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Path CTA Cards */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${vehicleWrapHero})` }}
              />
              <CardContent className="p-8">
                <Car className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Vehicle Wraps & Fleet Graphics</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your vehicles into moving billboards with high-impact wraps and graphics.
                </p>
                <Button asChild className="w-full font-semibold">
                  <Link to="/contact?type=wrap">Request a Wrap Quote</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${storefrontSign})` }}
              />
              <CardContent className="p-8">
                <Signpost className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Business Signs & Storefront Graphics</h3>
                <p className="text-muted-foreground mb-6">
                  Professional signage that builds brand presence and attracts customers.
                </p>
                <Button asChild className="w-full font-semibold">
                  <Link to="/contact?type=sign">Request a Sign Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From vehicle wraps to storefront signs, we offer a complete range of graphics and signage services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Signs Scroller */}
      <section className="py-16 bg-foreground text-background overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 mb-8 relative">
          <h3 className="text-2xl font-bold text-center">Signs We Build</h3>
        </div>
        <div className="flex gap-8 animate-scroll relative">
          {[...signTypes, ...signTypes].map((sign, index) => (
            <span
              key={index}
              className="flex-shrink-0 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium whitespace-nowrap text-background"
            >
              {sign}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From concept to completion, we make it simple and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="text-7xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">{step.step}</div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-muted-foreground/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Materials */}
      <section className="py-16 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Quality Materials</h3>
            <p className="text-muted-foreground text-lg">
              We use premium, industry-trusted materials and professional production methods. 
              We partner with leading manufacturers and wholesale suppliers to deliver consistent results.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              See some of our recent projects across vehicle wraps, signs, and graphics.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredWork.map((project, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs text-primary font-medium mb-1">{project.category}</span>
                  <span className="text-sm font-bold text-background">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTASection />
    </Layout>
  );
}