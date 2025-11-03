import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles, Zap, Rocket } from "lucide-react";

const services = [
  {
    tier: "Basic",
    icon: Zap,
    price: "$500",
    period: "/project",
    description: "Perfect for small projects and quick automation needs",
    features: [
      "Web automation setup (up to 20 test cases)",
      "Basic API testing",
      "Test execution reports",
      "Email support",
      "1 week delivery",
    ],
    popular: false,
  },
  {
    tier: "Professional",
    icon: Sparkles,
    price: "$1,500",
    period: "/project",
    description: "Comprehensive automation solution for growing teams",
    features: [
      "Web automation framework (up to 50 test cases)",
      "API automation with TestNG/Pytest",
      "CI/CD integration (Jenkins/Bamboo)",
      "Performance testing setup",
      "Test reports & documentation",
      "Priority support",
      "2-3 weeks delivery",
    ],
    popular: true,
  },
  {
    tier: "Enterprise",
    icon: Rocket,
    price: "$3,500+",
    period: "/project",
    description: "Full-scale automation transformation for enterprises",
    features: [
      "Complete automation framework (unlimited test cases)",
      "Multi-platform testing (Web, API, Mobile)",
      "Advanced CI/CD pipelines",
      "Performance & load testing",
      "Team training & knowledge transfer",
      "Ongoing maintenance & support",
      "Custom integrations (AWS, Azure, etc.)",
      "Dedicated support",
      "Flexible timeline",
    ],
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Automation Services & Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for automation solutions that scale with your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.tier}
                  className={`p-8 relative bg-card/50 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] animate-fade-up ${
                    service.popular
                      ? "border-primary shadow-lg shadow-primary/20 lg:-mt-4 lg:mb-4"
                      : "border-border hover:border-primary/50"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {service.popular && (
                    <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent">
                      Most Popular
                    </Badge>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{service.tier}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{service.price}</span>
                      <span className="text-muted-foreground">{service.period}</span>
                    </div>

                    <ul className="space-y-3 py-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full transition-all duration-300 ${
                        service.popular
                          ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                          : ""
                      }`}
                      variant={service.popular ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <a href="#contact">Get Started</a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-card/50 border-primary/30 inline-block">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Need a custom solution?</span> Contact me for a
                personalized quote tailored to your specific requirements.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
