import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 sm:py-12 bg-muted/30 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
              Bishow Lamichhane
            </div>
            <p className="text-muted-foreground text-sm"></p>
          </div>

          <div className="flex gap-3 sm:gap-4 mb-6 md:mb-0">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/bishowlamichhane"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/bishow-lamichhane-5477ba294/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.instagram.com/bishowlamichhane_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:lamichhanebisho4545@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} Bishow Lamichhane.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

