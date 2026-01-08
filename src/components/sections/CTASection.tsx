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
    <section className={`relative py-20 md:py-28 overflow-hidden ${variant === "gradient" ? "bg-foreground" : "bg-muted"}`}>
      {/* Background Elements */}
      {variant === "gradient" && (
        <>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </>
      )}
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${variant === "gradient" ? "text-background" : ""}`}>
          {title}
        </h2>
        <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${variant === "gradient" ? "text-background/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
        <Button
          asChild
          size="lg"
          className={`font-semibold text-base px-10 h-14 ${variant === "gradient" ? "shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40" : ""}`}
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