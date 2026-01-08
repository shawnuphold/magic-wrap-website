import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import {
  Lightbulb,
  Box,
  Layers,
  Signpost,
  Building,
  Flag,
  MapPin,
  AlertTriangle,
  Sun,
  Moon,
  Sparkles,
  CheckCircle2,
  Camera,
  Ruler,
  FileImage,
  Calendar,
  Upload,
} from "lucide-react";

const signTypes = [
  { icon: Lightbulb, name: "Channel Letters", description: "Dimensional illuminated letters" },
  { icon: Box, name: "Cabinet Signs", description: "Illuminated light box signs" },
  { icon: Layers, name: "ACM Panel Signs", description: "Durable aluminum composite" },
  { icon: Signpost, name: "Acrylic Signs", description: "Modern standoff mounted" },
  { icon: Building, name: "Monument Signs", description: "Freestanding entrance signs" },
  { icon: Flag, name: "Banners", description: "Indoor & outdoor displays" },
  { icon: Signpost, name: "Yard Signs", description: "Temporary outdoor signage" },
  { icon: MapPin, name: "Post & Pole Signs", description: "Elevated visibility signs" },
  { icon: MapPin, name: "Wayfinding Signs", description: "Directional guidance" },
  { icon: AlertTriangle, name: "Safety Signs", description: "Compliance & warning" },
  { icon: Signpost, name: "ADA Signs", description: "Accessibility compliant" },
  { icon: Box, name: "Menu Boards", description: "Restaurant displays" },
];

const lightingOptions = [
  {
    icon: Sun,
    title: "Front-Lit",
    description: "Light shines through the face of the letters or sign for maximum brightness and visibility. Ideal for high-traffic areas.",
  },
  {
    icon: Moon,
    title: "Halo-Lit (Back-Lit)",
    description: "Light projects behind the letters creating an elegant glow effect. Perfect for upscale businesses and modern aesthetics.",
  },
  {
    icon: Box,
    title: "Cabinet / Light Box",
    description: "Internally illuminated cabinet signs with translucent faces. Great for 24/7 visibility and retail applications.",
  },
  {
    icon: Sparkles,
    title: "Non-Illuminated",
    description: "Classic signage without lighting. Cost-effective for daytime businesses or when external lighting is available.",
  },
];

const materials = [
  { name: "Aluminum", description: "Durable, lightweight, weather-resistant" },
  { name: "Acrylic", description: "Modern look, great for indoor/outdoor" },
  { name: "PVC / Foam Board", description: "Lightweight, cost-effective" },
  { name: "Dibond / ACM", description: "Rigid aluminum composite panels" },
  { name: "Coroplast", description: "Corrugated plastic for temporary signs" },
  { name: "HDU (High Density Urethane)", description: "Carved, dimensional signs" },
];

const quoteChecklist = [
  { icon: MapPin, item: "Installation address and location photos" },
  { icon: Camera, item: "Photos of the mounting surface/building" },
  { icon: Ruler, item: "Approximate size or available space" },
  { icon: Lightbulb, item: "Illumination preference (lit or non-lit)" },
  { icon: FileImage, item: "Logo files and brand colors" },
  { icon: Signpost, item: "Preferred style or inspiration images" },
  { icon: Calendar, item: "Project deadline or install date" },
];

const signFAQs = [
  {
    question: "Do you handle sign design?",
    answer: "Yes! Our design team can create custom sign designs from scratch, or we can work with your existing brand guidelines and logo files. We'll provide mockups for approval before production.",
  },
  {
    question: "Do you install the signs?",
    answer: "Absolutely. We handle the complete process from design through professional installation. Our installers are experienced with all mounting types including storefronts, interior walls, and freestanding installations.",
  },
  {
    question: "Can you help with permits and landlord approvals?",
    answer: "We can provide the documentation and specifications typically needed for permit applications and landlord approval packages. Many municipalities require sign permits, and we're familiar with the process.",
  },
  {
    question: "How long does a sign project take?",
    answer: "Timeline varies by sign type and complexity. Simple vinyl signs may take 1-2 weeks. Channel letters and illuminated signs typically take 3-4 weeks. We'll provide a specific timeline during consultation.",
  },
  {
    question: "Can you match our existing branding?",
    answer: "Yes, we can match Pantone colors and work from your brand guidelines to ensure consistency with your existing materials. Please provide any brand standards documents you have.",
  },
  {
    question: "What's the difference between front-lit and halo-lit channel letters?",
    answer: "Front-lit letters have translucent faces that glow from the front, providing maximum brightness. Halo-lit (or back-lit) letters project light behind them onto the wall, creating a softer, more upscale glow effect.",
  },
];

export default function Signs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Signs That Make a Statement
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Professional signage designed to build brand presence, attract customers, and stand the test of time.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/contact?type=sign">Request a Sign Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sign Types Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sign Types</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From illuminated channel letters to temporary yard signs, we build signage for every business need.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {signTypes.map((sign, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all group hover:-translate-y-1">
                <CardContent className="p-6">
                  <sign.icon className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-1">{sign.name}</h3>
                  <p className="text-sm text-muted-foreground">{sign.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Options */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lighting Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the right illumination for your sign based on visibility needs, aesthetics, and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lightingOptions.map((option, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <option.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Finishes */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Materials & Finishes</h2>
              <p className="text-muted-foreground">
                We work with a variety of materials to match your budget, durability needs, and aesthetic goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {materials.map((material, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{material.name}</h4>
                    <p className="text-sm text-muted-foreground">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Installation</h2>
              <p className="text-muted-foreground">
                Professional installation for all sign types and mounting scenarios.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Installation Types</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Storefront & building facades
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Interior walls & lobbies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Freestanding & monument
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Hanging & suspended signs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Window & door graphics
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">We Can Help With</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Site surveys & measurements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Permit documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Landlord approval packages
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Electrical coordination
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Old sign removal
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need to Quote */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Need to Quote Your Sign</h2>
              <p className="text-muted-foreground">
                Help us provide an accurate quote by gathering these items before you reach out.
              </p>
            </div>
            <div className="space-y-4">
              {quoteChecklist.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>{item.item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/contact?type=sign">
                  <Upload className="mr-2 w-5 h-5" />
                  Upload Photos for a Fast Quote
                </Link>
              </Button>
            </div>
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

      <FAQ 
        title="Sign FAQs"
        subtitle="Common questions about our signage services"
        items={signFAQs}
      />

      <CTASection 
        title="Ready for Your New Sign?"
        subtitle="Upload photos and project details for a fast, accurate quote."
        buttonText="Get My Sign Quote"
      />
    </Layout>
  );
}