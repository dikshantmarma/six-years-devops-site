export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-2xl mb-4">
              DevOps<span className="text-accent">Engineer</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building scalable infrastructure and automating the future, 
              one deployment at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://linkedin.com/in/devops-engineer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                💼 LinkedIn Profile
              </a>
              <a 
                href="https://github.com/devops-engineer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                🐙 GitHub Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} DevOps Engineer Portfolio. Built with modern web technologies.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-primary-foreground/60">
                Made with ❤️ using React + TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};