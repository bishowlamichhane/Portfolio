import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Database,
  Layers,
  GitBranch,
  Terminal,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Zustand",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Design",
      icon: <Palette className="h-6 w-6 text-purple-500" />,
      skills: [
        "Figma",
        "Adobe XD",
        "UI/UX",
        "Responsive Design",
        "Wireframing",
      ],
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6 text-blue-500" />,
      skills: ["Node.js", "Express", "RESTful APIs", "MongoDB", "SQL"],
    },
    {
      title: "Tools",
      icon: <Layers className="h-6 w-6 text-orange-500" />,
      skills: ["VS Code", "Webpack", "Vite", "npm/yarn", "Jest", "Cypress"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6 text-green-500" />,
      skills: ["Git", "GitHub", "GitLab"],
    },
    {
      title: "Other",
      icon: <Terminal className="h-6 w-6 text-red-500" />,
      skills: [
        "Responsive Design",
        "Performance Optimization",
        "SEO",
        "Accessibility",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 container px-16">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2">
          My Skills
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Technical Expertise
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          I've worked with a range of technologies in the web development world,
          from frontend to backend and everything in between.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="overflow-hidden border-2 hover:border-primary/50 transition-all"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="font-bold text-xl">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
