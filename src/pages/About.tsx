import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Award, Clock, Wrench } from "lucide-react";

import teamPhoto from "@/assets/team-photo.jpg";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We use premium materials and professional techniques. No shortcuts, no compromises.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your success is our success. We work closely with you from concept to completion.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand deadlines matter. Projects are completed when promised.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Our certified installers bring years of experience to every project.",
  },
];

const highlights = [
  "Locally owned and operated",
  "Serving businesses of all sizes",
  "In-house design team",
  "Professional installation",
  "Premium materials",
  "Quick turnaround available",
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Magic Shine Wraps
            </h1>
            <p className="text-lg text-muted-foreground">
              Your local experts in vehicle wraps, graphics, and professional signage.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Magic Shine Wraps was founded with a simple mission: deliver exceptional vehicle wraps 
                  and signage that help businesses stand out and succeed.
                </p>
                <p>
                  What started as a passion for automotive customization has grown into a full-service 
                  graphics and signage company serving businesses throughout the region. From single 
                  vehicle wraps to multi-location signage programs, we bring the same attention to 
                  detail and commitment to quality to every project.
                </p>
                <p>
                  Our team combines creative design capabilities with technical expertise in large-format 
                  printing and professional installation. We invest in the latest equipment and ongoing 
                  training to ensure every project meets our high standards.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={teamPhoto} 
                alt="Magic Shine Wraps Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision and every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Statement */}
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

      <CTASection 
        title="Ready to Work Together?"
        subtitle="Let's discuss your next wrap or signage project."
        buttonText="Get in Touch"
      />
    </Layout>
  );
}