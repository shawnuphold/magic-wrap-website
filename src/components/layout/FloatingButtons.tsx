import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
      <a
        href="tel:+13042443030,2"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href="sms:+13042443030"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background shadow-lg hover:bg-foreground/90 transition-all hover:scale-105"
        aria-label="Text us"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}