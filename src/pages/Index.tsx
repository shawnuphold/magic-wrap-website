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

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Wraps, Graphics & Signs<br />
              <span className="text-primary">That Get You Noticed</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Vehicle wraps, fleet branding, wall graphics, decals, and professional signage—designed, printed, and installed with precision.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="font-semibold text-base px-8">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold text-base px-8">
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Path CTA Cards */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
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
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From vehicle wraps to storefront signs, we offer a complete range of graphics and signage services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Signs Scroller */}
      <section className="py-12 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
          <h3 className="text-xl font-semibold text-center">Signs We Build</h3>
        </div>
        <div className="flex gap-8 animate-scroll">
          {[...signTypes, ...signTypes].map((sign, index) => (
            <span
              key={index}
              className="flex-shrink-0 px-6 py-2 rounded-full border border-background/20 text-sm font-medium whitespace-nowrap"
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we make it simple and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                <step.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-muted-foreground/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Materials */}
      <section className="py-12 bg-muted">
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

      {/* Featured Work Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See some of our recent projects across vehicle wraps, signs, and graphics.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-muted rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <span className="text-muted-foreground text-sm">Project {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
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