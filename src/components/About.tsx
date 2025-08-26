import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <strong>CKA-certified DevOps/SRE Engineer</strong> with hands-on experience designing 
                scalable, cloud-native infrastructure across AWS, GCP, and Azure. I specialize in Kubernetes, 
                Terraform, GitHub Actions, and serverless architectures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have a proven track record in optimizing CI/CD pipelines, observability, and cost-efficient 
                deployments. Strong focus on SRE principles, system reliability, and security compliance 
                including SOC 2 and HIPAA standards.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  SRE Principles
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Kubernetes Expert
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  CKA Certified
                </span>
              </div>
            </div>

            <Card className="p-8 card-gradient shadow-medium hover-lift">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">4+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Deployed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime Achieved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Tools Mastered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">3</div>
                    <div className="text-sm text-muted-foreground">Cloud Platforms</div>
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