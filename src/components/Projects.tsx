import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "OpenWeather API", "Chart.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
      image: "/placeholder.svg",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Recipe Finder App",
      description: "Mobile-first recipe application with ingredient-based search, meal planning, and nutritional information.",
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "Spoonacular API"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
      image: "/placeholder.svg",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground/30">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))
                    }
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))
            }
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
