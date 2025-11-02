import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "FNZ",
    role: "Analyst Tester",
    location: "Gurugram, India",
    period: "July 2025 – Present",
    description: "Learning the advisor platform to efficiently manage and oversee portfolio financials.",
    current: true,
  },
  {
    company: "SHL",
    role: "Software Engineer",
    location: "Gurugram, India",
    period: "July 2021 – June 2025",
    description: "Led automation initiatives and managed testing processes for web, API, and backend systems.",
    highlights: [
      "Spearheaded API automation framework using TestNG",
      "Saved 650+ hours annually through automation",
      "Led team of QA engineers across multiple testing domains",
      "Increased test coverage from 20% to 70%",
      "Conducted performance testing using Apache JMeter",
      "Implemented CI/CD pipelines using Bamboo",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
            <p className="text-xl text-muted-foreground">
              Professional journey in quality assurance and automation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={exp.company}
                  className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 md:ml-20 relative animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[3.75rem] top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          <h3 className="text-2xl font-bold">{exp.company}</h3>
                          {exp.current && (
                            <Badge className="bg-primary text-primary-foreground">Current</Badge>
                          )}
                        </div>
                        <p className="text-lg text-muted-foreground">{exp.role}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    {exp.highlights && (
                      <ul className="space-y-2 pt-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <Card className="p-6 bg-card/50 border-border">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Bachelor of Engineering in E&TC</h4>
                  <p className="text-muted-foreground">Nutan Maharashtra Institute of Engineering And Technology</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span>Aug 2017 – June 2021</span>
                    <span>•</span>
                    <span className="text-primary font-semibold">CGPA: 9.05</span>
                    <span>•</span>
                    <span>Pune, India</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
