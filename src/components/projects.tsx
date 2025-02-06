"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Normly AI",
    status: "Abgeschlossen",
    image: "/thumbnails/app.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Prisma", "Pinecone"],
    link: "#",
    currentStand: "Status: Auf Basis der Bachelorarbeit", // new addition
  },
  {
    title: "App",
    status: "Planung",
    image: "/thumbnails/app.jpg",
    technologies: ["React", "React Native", "MongoDB"],
    link: "#",
    currentStand: "Status: Anforderungsanalyse", // new addition
  },
  {
    title: "App 'CRM'",
    status: "Pausiert",
    image: "/thumbnails/app.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "#",
    currentStand: "Status: Keine Ressourcen", // new addition
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader className="flex justify-between items-start">
                <div>
                  <CardTitle className="pb-3">{project.title}</CardTitle>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge variant="secondary" className="relative flex items-center gap-2">
                    {project.status === "Planung" ? (
                      <motion.span
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                    ) : project.status === "In Bearbeitung" ? (
                      <motion.span
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                    ) : project.status === "Pausiert" ? (
                      <motion.span
                        className="w-2 h-2 bg-yellow-500 rounded-full"
                      />
                    ) : project.status === "Abgeschlossen" ? (
                      <motion.span
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                    ) : null}
                    {project.status}
                  </Badge>

                  {/* New Badge for Current Stand */}
                  <Badge variant="outline" className="text-gray-500">{project.currentStand}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-lg mb-5"
                />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href={project.link}>View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
