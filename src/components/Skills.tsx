import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Linode"]
    },
    {
      title: "Containerization",
      icon: "📦",
      skills: ["Docker", "Kubernetes", "Podman", "Docker Compose", "Helm"]
    },
    {
      title: "CI/CD Tools",
      icon: "🔄",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps", "CircleCI"]
    },
    {
      title: "Infrastructure as Code",
      icon: "🏗️",
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi", "Chef"]
    },
    {
      title: "Monitoring & Logging",
      icon: "📊",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"]
    },
    {
      title: "Programming & Scripting",
      icon: "💻",
      skills: ["Python", "Bash", "Go", "JavaScript", "PowerShell"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps practices and cloud infrastructure management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 card-gradient shadow-medium hover-lift transition-smooth"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              "Microservices Architecture", "Service Mesh", "API Gateway", 
              "Database Management", "Security Best Practices", "Disaster Recovery",
              "Performance Optimization", "Cost Management", "Team Leadership"
            ].map((skill) => (
              <Badge 
                key={skill}
                variant="outline"
                className="px-4 py-2 text-muted-foreground border-muted hover:border-accent hover:text-accent transition-smooth"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};