import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "devops.engineer@email.com",
      link: "mailto:devops.engineer@email.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/devops-engineer",
      link: "https://linkedin.com/in/devops-engineer"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/devops-engineer",
      link: "https://github.com/devops-engineer"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Remote / San Francisco, CA",
      link: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Build Something Together
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next DevOps project? Let's connect and explore how we can streamline your infrastructure.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about the latest in DevOps and cloud technologies. Feel free to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <Card 
                  key={info.title}
                  className="p-6 card-gradient shadow-medium hover-lift transition-smooth group cursor-pointer"
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h4 className="font-semibold text-card-foreground mb-2">
                      {info.title}
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-accent transition-smooth">
                      {info.value}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="p-6 bg-accent/5 rounded-lg border border-accent/10">
              <h4 className="font-semibold text-accent mb-3">Available For:</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-center"><span className="text-accent mr-2">✓</span> DevOps Consulting</li>
                <li className="flex items-center"><span className="text-accent mr-2">✓</span> Infrastructure Architecture Review</li>
                <li className="flex items-center"><span className="text-accent mr-2">✓</span> CI/CD Pipeline Implementation</li>
                <li className="flex items-center"><span className="text-accent mr-2">✓</span> Cloud Migration Strategy</li>
                <li className="flex items-center"><span className="text-accent mr-2">✓</span> Team Training & Mentoring</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 card-gradient shadow-medium">
            <form className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Send a Message</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="john.doe@company.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Project Type
                </label>
                <Input 
                  placeholder="e.g., Cloud Migration, CI/CD Implementation"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell me about your project, timeline, and specific requirements..."
                  className="w-full min-h-32"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 shadow-glow hover-lift"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};