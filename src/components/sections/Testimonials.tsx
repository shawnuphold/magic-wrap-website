import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Michael R.",
    company: "Fleet Manager, ABC Logistics",
    content: "Magic Shine wrapped our entire fleet of 15 vehicles. The quality is exceptional and the turnaround time was impressive. Our trucks are rolling billboards now!",
    rating: 5,
  },
  {
    name: "Sarah T.",
    company: "Owner, Coastal Café",
    content: "The storefront signage and window graphics completely transformed our café. We've seen a noticeable increase in foot traffic since the install.",
    rating: 5,
  },
  {
    name: "David L.",
    company: "Marketing Director, TechStart Inc.",
    content: "Professional from start to finish. The wall murals in our office look stunning and perfectly capture our brand identity.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-background/60 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what businesses like yours have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/5 border-background/10 backdrop-blur-sm hover:bg-background/10 transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/40 mb-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-background/80 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-background/10 pt-6">
                  <p className="font-bold text-background">{testimonial.name}</p>
                  <p className="text-sm text-background/50">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}