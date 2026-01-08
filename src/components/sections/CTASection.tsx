import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "gradient";
}

export function CTASection({
  title = "Ready to Get Started?",
  subtitle = "Tell us what you need—wrap, sign, wall, decals—we'll quote it fast.",
  buttonText = "Get My Quote",
  buttonLink = "/contact",
  variant = "gradient",
}: CTASectionProps) {
  return (
    <section className={`py-16 md:py-24 ${variant === "gradient" ? "bg-brand-gradient text-primary-foreground" : "bg-muted"}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${variant === "gradient" ? "" : ""}`}>
          {title}
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${variant === "gradient" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
        <Button
          asChild
          size="lg"
          variant={variant === "gradient" ? "secondary" : "default"}
          className="font-semibold text-base px-8"
        >
          <Link to={buttonLink}>
            {buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}