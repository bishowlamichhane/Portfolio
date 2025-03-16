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
      tags: ["React", "Redux", "Node.js", "MongoDB", "Git"],
      liveLink: "https://e-commerce-myntra-omega.vercel.app/",
      githubLink: "https://github.com/bishowlamichhane/eCommerce--Myntra",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app that helps users organize tasks, set priorities, and track progress.",
      image: "/images/gist.png",
      tags: ["React", "Zustand", "Tailwind CSS", "Git"],
      liveLink: "https://gist-task-management-web.vercel.app/",
      githubLink:
        "https://github.com/bishowlamichhane/GIST-Task-Management-Web",
    },
    {
      title: "Admin Dashboard",
      description:
        "An admin dashboard for online business, that manages sales, order management and customer management. ",
      image: "/images/openshop.png",
      tags: ["React", "Recharts", "Redux", "Chart.js"],
      liveLink: "https://admin-dashboard-phi-amber.vercel.app/",
      githubLink: "https://github.com/bishowlamichhane/Admin-Dashboard",
    },
    {
      title: "Trip Bahadur ",
      description:
        "An AI chat assistant that provides a detailed itinerary to travellers travelling Nepal. Travellers will get access to a map marked with locations and detailed informations about hotels and lodges near the destination. ",
      image: "/images/trip.png",
      tags: ["React", "Gemini API", "Zustand", "REST API"],
      liveLink: "https://trip-bahadur.vercel.app/",
      githubLink: "https://github.com/bishowlamichhane/Trip-Bahadur",
    },
  ];

  return (
    <section id="projects" className="py-10 sm:py-16 bg-muted/50 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="mb-2">
            My Work
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group h-full flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-4 sm:p-6 pb-2">
                <h3 className="text-lg sm:text-xl font-bold">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-2 flex-grow">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 sm:p-6 pt-0 flex flex-wrap gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 sm:flex-none"
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1 sm:flex-none">
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
