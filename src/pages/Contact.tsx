import { Layout } from "@/components/layout/Layout";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and we'll get back to you with a custom quote. 
              The more details you provide, the faster we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                  <QuoteForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a 
                          href="tel:+13042443030,2" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (304) 244-3030 ext. 2
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Text</p>
                        <a 
                          href="sms:+13042443030" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (304) 244-3030
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a 
                          href="mailto:info@magicshinewraps.com" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@magicshinewraps.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Location</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        1063 Greenbag Rd Ste E<br />
                        Morgantown, WV 26508
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Hours</h3>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: 8am - 6pm</p>
                      <p>Saturday: 9am - 2pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Quick Response</h3>
                  <p className="text-primary-foreground/90 text-sm">
                    We typically respond within 24 hours. For urgent projects, 
                    give us a call or text.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <a
                      href="tel:+13042443030,2"
                      className="flex-1 text-center py-2 px-4 rounded-md bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href="sms:+13042443030"
                      className="flex-1 text-center py-2 px-4 rounded-md bg-primary-foreground/20 text-primary-foreground font-medium hover:bg-primary-foreground/30 transition-colors"
                    >
                      Text Us
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}