import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How long does a vehicle wrap last?",
    answer: "A high-quality vehicle wrap typically lasts 5-7 years with proper care. Factors like sun exposure, washing habits, and storage conditions can affect longevity. We use premium materials and professional installation techniques to maximize durability.",
  },
  {
    question: "Do you handle design, or do I need to provide files?",
    answer: "We offer full design services! You can provide your own files, share inspiration images, or work with our design team from scratch. We accept most file formats including AI, PSD, PDF, and high-resolution images.",
  },
  {
    question: "How long does installation take?",
    answer: "Installation time varies by project. A full vehicle wrap typically takes 2-5 days, while signs may take 1-3 days depending on complexity. Fleet projects are scheduled to minimize your downtime. We'll provide a timeline during consultation.",
  },
  {
    question: "Do you offer removal services?",
    answer: "Yes! We professionally remove old wraps and graphics before installing new ones. Proper removal is important to protect your paint and ensure the new wrap adheres correctly.",
  },
  {
    question: "What information do you need to provide a quote?",
    answer: "For the most accurate quote, we need: project type, dimensions or vehicle make/model, design requirements, timeline, and any photos of the installation area. The more details you provide, the faster we can quote.",
  },
  {
    question: "Do you work with businesses outside your immediate area?",
    answer: "Yes, we serve businesses throughout the region. For large fleet projects or sign installations, we can coordinate travel. Contact us with your location and project details for specifics.",
  },
];

export function FAQ({ title = "Frequently Asked Questions", subtitle, items }: FAQProps) {
  const faqItems = items || defaultFAQs;
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-muted rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}