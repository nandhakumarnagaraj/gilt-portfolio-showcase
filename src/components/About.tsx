import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders"
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Passionate about continuous learning and improvement"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive, and user-friendly applications. My journey in tech started 
              with a curiosity for how things work and has evolved into a passion for 
              building solutions that make a real impact.
            </p>
            
            <p className="text-lg leading-relaxed">
              I believe in the power of good design combined with solid engineering principles. 
              Whether it's a complex web application or a simple landing page, I approach 
              every project with attention to detail and a focus on user experience.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};