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
                I'm a passionate DevOps Engineer with <strong>6 years of hands-on experience</strong> in 
                designing, implementing, and maintaining scalable cloud infrastructure. I specialize in 
                automating deployment processes and creating robust CI/CD pipelines.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across cloud platforms, containerization, infrastructure as code, 
                monitoring, and security. I'm committed to bridging the gap between development and 
                operations teams to enable faster, more reliable software delivery.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Cloud Architecture
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  CI/CD Automation
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Infrastructure as Code
                </span>
              </div>
            </div>

            <Card className="p-8 card-gradient shadow-medium hover-lift">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">6+</div>
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