import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
      image: "/images/myntra.png",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      liveLink: "https://e-commerce-myntra-omega.vercel.app/",
      githubLink: "https://github.com/bishowlamichhane/eCommerce--Myntra",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app that helps users organize tasks, set priorities, and track progress.",
      image: "/images/gist.png",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://gist-task-management-application.vercel.app/",
      githubLink:
        "https://github.com/bishowlamichhane/GIST-Task-Management-Application",
    },
    {
      title: "Admin Dashboard",
      description:
        "An admin dashboard for online business, that manages sales, order management and customer management. ",
      image: "/images/openshop.png",
      tags: ["React", "OpenWeather API", "Chart.js"],
      liveLink: "https://admin-dashboard-phi-amber.vercel.app/",
      githubLink: "https://github.com/bishowlamichhane/Admin-Dashboard",
    },
    {
      title: "Trip Bahadur ",
      description:
        "An AI chat assistant that provides a detailed itinerary to travellers travelling Nepal. Travellers will get access to a map marked with locations and detailed informations about hotels and lodges near the destination. ",
      image: "/images/trip.png",
      tags: ["React", "D3.js", "REST API"],
      liveLink: "https://trip-bahadur.vercel.app/",
      githubLink: "https://github.com/bishowlamichhane/Trip-Bahadur",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 "
                />
              </div>
              <CardHeader className="p-6 pb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
