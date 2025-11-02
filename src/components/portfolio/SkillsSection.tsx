import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, TestTube, GitBranch, Cloud, Zap } from "lucide-react";

const skills = [
  {
    category: "Languages & Frameworks",
    icon: Code,
    items: ["Python", "Java", "Selenium", "Pytest", "TestNG"],
  },
  {
    category: "Testing",
    icon: TestTube,
    items: ["API Automation", "Web Automation", "Manual Testing", "Apache JMeter", "Rest Assured", "Postman"],
  },
  {
    category: "Databases & APIs",
    icon: Database,
    items: ["MySQL", "MongoDB", "REST API"],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub", "Bitbucket"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Jenkins", "CI/CD", "Selenium Grid"],
  },
  {
    category: "Management Tools",
    icon: Zap,
    items: ["JIRA", "Test Planning", "Defect Tracking", "Team Management"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set spanning automation, testing, and DevOps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.category}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">{skill.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <Badge
                            key={item}
                            variant="secondary"
                            className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
