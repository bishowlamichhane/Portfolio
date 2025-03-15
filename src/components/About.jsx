import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-16 px-2 bg-muted/50">
      <div className="container ">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 h-92">
            <img
              src="/images/about_me.jpg"
              alt="About me"
              className="rounded-lg shadow-lg w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Passionate Developer & Designer
              </h2>
            </div>
            <p className="text-muted-foreground">
              I'm a frontend developer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With 5 years of
              experience in the field, I am always looking forward to improving
              my skills and learning new technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Bachelor's Degree in Computer Science
                    <br />
                    University of Technology, 2018-2022
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Senior Frontend Developer
                    <br />
                    Tech Solutions Inc., 2022-Present
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
