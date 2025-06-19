import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 sm:py-16 px-4 sm:px-8 md:px-16 bg-muted/50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:flex-1 max-w-md mx-auto md:mx-0">
            <img
              src="/images/about.jpg"
              alt="About me"
              className="rounded-lg shadow-lg w-full h-auto object-cover object-top aspect-square sm:aspect-auto"
            />
          </div>
          <div className="w-full md:flex-1 space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                About Me
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Passionate Developer & Designer
              </h2>
            </div>
            <p className="text-muted-foreground">
              I'm a frontend developer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With 1 year of
              experience in the field, I am always looking forward to improving
              my skills and learning new technologies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Bachelor's Degree in Computer Science
                    <br />
                    Tribhuwan University, 2020-2024
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Web Developer - Internship Select IT Hub
                    
                    <br />
                    Present{" "}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
