import { Github, Linkedin, Twitter } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Footer() {
  const version = "v060225"; // Hier kannst du die Versionsnummer anpassen

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built with{" "}
            <span role="img" aria-label="heart" className="text-red-500">❤️</span> by Yusuf Kara in Duisburg.
          </p>
        </div>
        <Badge>            {version}
          </Badge>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          
        </div>
      </div>
    </footer>
  );
}
