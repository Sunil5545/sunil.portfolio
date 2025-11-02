import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Clock } from "lucide-react";

const projects = [
  {
    title: "SIL Web Automation",
    description: "Led a team of QA engineers, developing and managing a comprehensive web automation framework that revolutionized the testing process.",
    achievements: [
      "Saved 25 hours per sprint",
      "650+ hours saved annually",
      "Led cross-functional collaboration with clients",
    ],
    tech: ["Selenium", "Python", "Pytest"],
    impact: "25 hrs/sprint",
  },
  {
    title: "Integration API Automation",
    description: "Developed and maintained automation test suites for Integration APIs, significantly reducing testing time and improving coverage.",
    achievements: [
      "Reduced testing time by 60%",
      "Increased coverage from 20% to 70%",
      "Created custom Java libraries",
    ],
    tech: ["Selenium", "Java", "TestNG", "REST API"],
    impact: "60% faster",
  },
];

const achievements = [
  "Multiple recognition awards from SHL for outstanding contribution",
  "Recognized as a Superstar Performer for two consecutive quarters",
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Key Projects</h2>
            <p className="text-xl text-muted-foreground">
              Impactful automation solutions delivering measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-[1.02] group animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge className="bg-primary/20 text-primary border-primary/30 flex items-center gap-1 whitespace-nowrap">
                      <TrendingUp className="h-3 w-3" />
                      {project.impact}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Achievements & Recognition</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-lg">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
