import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description: "Designed and implemented a unified Kubernetes platform spanning AWS, GCP, and Azure with centralized monitoring and automated failover capabilities.",
      impact: "Reduced infrastructure downtime by 95% and enabled seamless multi-region deployments",
      technologies: ["Kubernetes", "Terraform", "Helm", "Prometheus", "Istio"],
      metrics: ["99.99% Uptime", "50% Cost Reduction", "3 Cloud Providers"],
      category: "Infrastructure"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built comprehensive GitOps-based CI/CD pipeline with automated testing, security scanning, and progressive deployment strategies.",
      impact: "Accelerated deployment frequency from weekly to multiple times daily while maintaining quality",
      technologies: ["GitLab CI", "ArgoCD", "SonarQube", "Trivy", "Docker"],
      metrics: ["90% Faster Deployments", "60% Fewer Bugs", "Zero-Downtime Releases"],
      category: "Automation"
    },
    {
      title: "Infrastructure Cost Optimization",
      description: "Implemented comprehensive cost monitoring and optimization strategies across cloud infrastructure using FinOps principles.",
      impact: "Achieved 40% cost reduction while improving performance and reliability metrics",
      technologies: ["AWS Cost Explorer", "Grafana", "Python", "Lambda", "CloudWatch"],
      metrics: ["40% Cost Savings", "$200K Annual Savings", "Real-time Monitoring"],
      category: "Optimization"
    },
    {
      title: "Microservices Monitoring Stack",
      description: "Deployed enterprise-grade observability stack for microservices architecture with distributed tracing and intelligent alerting.",
      impact: "Reduced MTTR from hours to minutes with proactive issue detection and resolution",
      technologies: ["Prometheus", "Grafana", "Jaeger", "ELK Stack", "PagerDuty"],
      metrics: ["80% Faster MTTR", "24/7 Monitoring", "15+ Services Tracked"],
      category: "Monitoring"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions that demonstrate expertise in modern DevOps practices and cloud architecture
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 card-gradient shadow-medium hover-lift transition-smooth group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20"
                  >
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Impact Section */}
              <div className="mb-6 p-4 bg-accent/5 rounded-lg border border-accent/10">
                <h4 className="font-semibold text-accent mb-2">Impact:</h4>
                <p className="text-sm text-card-foreground">{project.impact}</p>
              </div>

              {/* Metrics */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-3 bg-muted/30 rounded-lg">
                      <div className="text-sm font-medium text-card-foreground">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs border-muted text-muted-foreground hover:border-accent hover:text-accent transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 hover:border-accent hover:text-accent transition-smooth"
                >
                  View Details
                </Button>
                <Button 
                  variant="default"
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Case Study
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 shadow-glow hover-lift"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};