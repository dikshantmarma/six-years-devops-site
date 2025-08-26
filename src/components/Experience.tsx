import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      period: "Aug 2023 - Present",
      role: "SRE Engineer",
      company: "Infracloud Technologies Pvt Ltd",
      description: "Leading site reliability engineering initiatives, managing Kubernetes infrastructure, and implementing advanced observability solutions.",
      achievements: [
        "Designed and administered Kubernetes clusters on GKE, executing seamless upgrades for zero-downtime deployments",
        "Implemented scalable, cost-efficient infrastructure on Google Cloud Run for code review platform",
        "Designed centralized CI/CD pipeline using GitHub Actions and ArgoCD, reducing developer build times by 50%",
        "Built comprehensive monitoring stack (Prometheus, Grafana, Loki, Alertmanager) reducing incident detection time",
        "Optimized GKE cluster scaling policies and resource requests, reducing compute costs by ~30%",
        "Implemented Terraform modules for dynamic infrastructure provisioning, reducing cloud waste by ~25%",
        "Implemented OAuth-based authentication for Grafana, ensuring secure and scalable access control",
        "Enhanced database performance and resilience for MongoDB and PostgreSQL clusters"
      ],
      technologies: ["Kubernetes", "GCP", "Terraform", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana"]
    },
    {
      period: "Mar 2023 - Aug 2023",
      role: "DevOps Engineer",
      company: "Reshamandi",
      description: "Led migration of Kubernetes workloads from AWS to Azure AKS, ensuring consistent deployment standards and implementing advanced monitoring solutions.",
      achievements: [
        "Led migration of Kubernetes workloads from AWS to Azure AKS with zero data loss",
        "Built and deployed secure HashiCorp Vault cluster for dynamic secrets management",
        "Established advanced observability pipeline with Grafana, Mimir, and Loki for real-time monitoring",
        "Automated entire AKS infrastructure deployment using Terraform with CI/CD integration",
        "Implemented Helm-based deployment pipelines using Jenkins and Spinnaker for application rollouts"
      ],
      technologies: ["Azure AKS", "Terraform", "HashiCorp Vault", "Grafana", "Helm", "Jenkins", "Spinnaker"]
    },
    {
      period: "Mar 2022 - Feb 2023",
      role: "DevOps Engineer", 
      company: "Stringventures.ai",
      description: "Managed multi-service deployments and designed scalable AWS infrastructure with focus on high availability and security.",
      achievements: [
        "Managed multi-service deployments (Node, Go, Django, React) using Docker and Kubernetes for high availability",
        "Designed scalable AWS infrastructure using CloudFormation, VPC, EC2, ALB with auto-scaling and secure networking",
        "Deployed centralized monitoring with CloudWatch, Prometheus, and Grafana to ensure SLA adherence",
        "Configured global content delivery using AWS CloudFront and Bunny-CDN with AWS MemoryDB",
        "Automated deployments via Bitbucket Pipelines and AWS CodePipeline for rollback and multi-environment support",
        "Delivered video streaming platforms using AWS IVS, MediaConvert, and SES integration"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "CloudFormation", "Prometheus", "CloudWatch", "Bitbucket"]
    },
    {
      period: "Aug 2019 - Feb 2022",
      role: "Monitoring Team Member",
      company: "SITAR, DRDO",
      description: "Maintained critical government infrastructure with focus on repository management, CI/CD pipelines, and containerized environments.",
      achievements: [
        "Maintained GitHub and Bitbucket repositories with access policies and automated housekeeping scripts",
        "Built Jenkins pipelines for multi-stage deployments across DEV and QA environments",
        "Managed Docker-based Kubernetes environments to support containerized testing and deployment flows",
        "Used AWS CloudFormation to provision EC2, ELB, IAM, and RDS resources with alerting for early fault detection"
      ],
      technologies: ["Jenkins", "GitHub", "Bitbucket", "Docker", "Kubernetes", "AWS", "CloudFormation"]
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