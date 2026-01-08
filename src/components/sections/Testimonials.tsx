import { Star } from "lucide-react";
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
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}