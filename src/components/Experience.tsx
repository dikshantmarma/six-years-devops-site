import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      description: "Lead DevOps initiatives for cloud-native applications, managing infrastructure for 50+ microservices serving millions of users daily.",
      achievements: [
        "Reduced deployment time from 2 hours to 15 minutes",
        "Implemented GitOps workflow with ArgoCD",
        "Achieved 99.99% uptime for critical services",
        "Led migration to Kubernetes from legacy infrastructure"
      ],
      technologies: ["Kubernetes", "AWS", "Terraform", "Jenkins", "Prometheus"]
    },
    {
      period: "2020 - 2022",
      role: "DevOps Engineer",
      company: "CloudFirst Inc.",
      description: "Designed and implemented CI/CD pipelines, automated infrastructure provisioning, and established monitoring solutions.",
      achievements: [
        "Built automated testing pipeline reducing bugs by 60%",
        "Implemented Infrastructure as Code for 100+ environments",
        "Created disaster recovery procedures",
        "Mentored junior engineers in DevOps practices"
      ],
      technologies: ["Docker", "GitLab CI", "Ansible", "ELK Stack", "Grafana"]
    },
    {
      period: "2019 - 2020",
      role: "Cloud Infrastructure Engineer",
      company: "DataFlow Systems",
      description: "Focused on cloud migration strategies and infrastructure optimization for high-traffic applications.",
      achievements: [
        "Successfully migrated legacy systems to AWS",
        "Reduced infrastructure costs by 40%",
        "Implemented auto-scaling solutions",
        "Established security best practices"
      ],
      technologies: ["AWS", "Python", "CloudFormation", "Lambda", "RDS"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven track record of delivering scalable infrastructure solutions and driving operational excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-glow"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <Card className="p-6 card-gradient shadow-medium hover-lift transition-smooth">
                    <div className="mb-4">
                      <Badge 
                        variant="secondary"
                        className="mb-2 bg-accent/10 text-accent border-accent/20"
                      >
                        {exp.period}
                      </Badge>
                      <h3 className="text-2xl font-semibold text-card-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-accent font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-accent mr-2 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="text-xs border-muted text-muted-foreground hover:border-accent hover:text-accent transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};