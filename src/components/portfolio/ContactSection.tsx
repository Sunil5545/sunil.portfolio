import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how I can help automate your testing processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:sagarchaudhari5545@gmail.com"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      sagarchaudhari5545@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a
                      href="tel:+918668977464"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      +91 8668977464
                    </a>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://linkedin.com/in/sunil-chaudhari" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com/sunil-chaudhari" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Message Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <h3 className="text-xl font-bold mb-4">Quick Message</h3>
              <p className="text-muted-foreground mb-6">
                Ready to transform your testing process? Send me an email with your project details and I'll get back
                to you within 24 hours.
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                asChild
              >
                <a href="mailto:sagarchaudhari5545@gmail.com?subject=Automation Project Inquiry">
                  <Send className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </Card>
          </div>

          {/* Availability */}
          <Card className="mt-8 p-6 bg-card/50 border-border text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-semibold">Available for Projects</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Currently accepting new automation projects. Typical response time: 24 hours
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
