"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineLink } from "react-icons/ai"; // Füge das Icon für den Link hinzu
import { useState } from "react"; // useState für das Popup
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "App",
    status: "Planung",
    image: "/thumbnails/app.jpg",
    technologies: ["React", "React Native", "MongoDB"],
    link: "#", // Link ist "#" und soll ein Popup öffnen
    currentStand: "Status: Anforderungsanalyse", // new addition
    isPopup: true, // Flag für Popup
  },
  {
    title: "Normly AI",
    status: "Abgeschlossen",
    image: "/thumbnails/app.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Prisma", "Pinecone"],
    link: "https://example.com", // Gültiger Link
    currentStand: "Auf Basis der Bachelorarbeit", // new addition
    isPopup: true, // Kein Popup erforderlich
  },
  {
    title: "helpukrainian",
    status: "Abgeschlossen",
    image: "/thumbnails/ux_hu_2.jpg",
    technologies: ["Nutzeranalyse", "User Flow", "High Fidelity-Prototype"],
    link: "https://www.behance.net/gallery/166361671/helpukrainian", // Link ist "#" und soll ein Popup öffnen
    currentStand: "Studium", // new addition
    isPopup: false, // Flag für Popup
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
                {project.isPopup ? (
                  // Dialog wird angezeigt, wenn isPopup true ist und Link "#"
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">View Project</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Bald verfügbar!</DialogTitle>
                      <DialogDescription>
                        Dieses Projekt wird in Kürze aktualisiert. Bleib dran!
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                ) : (
                  // Normaler Button für gültige Links
                  <Button className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center justify-between">
                        <span>View Project</span>
                        <AiOutlineLink className="ml-2" />
                      </span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
