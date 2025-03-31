"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Github, ExternalLink, Check, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

// Portfolio version
const PORTFOLIO_VERSION = "v1.2.5"

// Define development phases
const developmentPhases = ["UX Design", "Entwicklung", "Testen", "Deployment"]

// Project data - replace with your own projects
const projects = [
  {
    id: 1,
    title: "Asphaltcrew",
    description:
      "Ein strategisches, textbasiertes Rennspiel im Stil von Autoquartett! Vergleiche Fahrzeugwerte und tune dein Auto, um NPCs in spannenden Duellen zu besiegen.",
    images: [
      "/asphaltcrew-bg.webp",
      "/screenshots/ac1.png",
      "/screenshots/ac2.png",
      "/screenshots/ac3.png",
      "/screenshots/ac4.png",
    ],
    technologies: ["React Native", "TypeScript"],
    githubUrl: "#",
    liveUrl: "https://asphaltcrew.de",
    status: "alpha",
    currentPhase: 1, // Index of the current phase (0-based)
  },
  {
    id: 2,
    title: "Kundify",
    description:
      "Eine Lösung zur Verwaltung von Kundendaten und Aufträgen – effizient, übersichtlich und sicher. 🚀",
    images: [
      "/kundify-bg.png",
    ],
    technologies: ["React", "React Native", "Spring Boot", "TypeScript"],
    githubUrl: "#", // Leerer String, um den Button zu deaktivieren
    liveUrl: "kundify.de",
    status: "in-progress",
    currentPhase: 0, // Index of the current phase (0-based)
  }
]

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const statusConfig = {
    "in-progress": { label: "In Progress", variant: "outline" as const },
    alpha: { label: "Alpha", variant: "secondary" as const },
    beta: { label: "Beta", variant: "default" as const },
    completed: { label: "Completed", variant: "default" as const },
  }

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["in-progress"]

  return <Badge variant={config.variant}>{config.label}</Badge>
}

// Project phases component
const ProjectPhases = ({ currentPhase }: { currentPhase: number }) => {
  const [blink, setBlink] = useState(true)

  // Blinking effect for current phase
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mb-6">
      <h4 className="text-sm font-medium mb-3">Projektphasen</h4>
      <div className="flex items-center w-full">
        {developmentPhases.map((phase, index) => (
          <div key={phase} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              {/* Phase indicator circle */}
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center border-2",
                  index < currentPhase
                    ? "bg-primary border-primary text-primary-foreground" // Completed
                    : index === currentPhase
                      ? cn("border-primary", blink ? "bg-primary/50" : "bg-transparent") // Current (blinking)
                      : "border-muted-foreground/30 bg-transparent", // Future
                )}
              >
                {index < currentPhase && <Check className="h-3 w-3" />}
              </div>

              {/* Phase label */}
              <span
                className={cn(
                  "text-xs mt-1 text-center",
                  index === currentPhase ? "font-medium text-primary" : "text-muted-foreground",
                )}
              >
                {phase}
              </span>
            </div>

            {/* Connector line between phases */}
            {index < developmentPhases.length - 1 && (
              <div
                className={cn("h-[2px] flex-grow mx-1", index < currentPhase ? "bg-primary" : "bg-muted-foreground/30")}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Image lightbox component
const ImageLightbox = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}: {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex?: number
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Reset to initial index when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
        <div className="relative w-full h-[80vh]">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt="Project image"
            fill
            className="object-contain"
            priority
          />

          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background/90">
            <X className="h-5 w-5" />
          </DialogClose>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 z-10"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 z-10"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      currentIndex === index ? "bg-primary" : "bg-background/50 hover:bg-background/80",
                    )}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Image slider component
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent opening lightbox when clicking navigation
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent opening lightbox when clicking navigation
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const openLightbox = () => {
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="relative h-full w-full min-h-[200px] md:min-h-[300px] cursor-pointer" onClick={openLightbox}>
        <div className="absolute inset-0 overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt="Project screenshot"
            fill
            className="object-cover"
            priority
          />
        </div>

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 z-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 z-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full bg-background/80",
                    currentIndex === index ? "opacity-100" : "opacity-50",
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={images}
        initialIndex={currentIndex}
      />
    </>
  )
}

// Project card component
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <Card className="overflow-hidden w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-[250px] md:h-auto">
          <ImageSlider images={project.images} />
        </div>
        <CardContent className="p-4 md:p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-sm md:text-base text-muted-foreground mb-4">{project.description}</p>

          {/* Project phases visualization */}
          <ProjectPhases currentPhase={project.currentPhase} />

          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            {project.githubUrl ? (
              <Button asChild variant="outline" size="sm">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="sm" disabled className="opacity-50 cursor-not-allowed">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            )}
            <Button asChild size="sm">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default function Portfolio() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const currentProject = projects[currentProjectIndex]

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNextProject = () => {
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay */}
        <Image
          src={currentProject.images[0] || "/placeholder.svg"}
          alt="Background"
          fill
          className="object-cover blur-sm"
          priority
        />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-20 bg-black/80 backdrop-blur-sm py-4 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-white">YUSUF KARA</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-8 md:py-12 px-4 z-10">
        <div className="w-full max-w-6xl">
          <div className="relative">
            {/* Project card */}
            <div className="transition-all duration-500 ease-in-out">
              <ProjectCard project={currentProject} />
            </div>

            {/* Project navigation - Desktop and Mobile */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 hover:bg-background/90"
                onClick={goToPreviousProject}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Project indicator dots */}
              <div className="flex items-center gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all",
                      currentProjectIndex === index ? "bg-primary" : "bg-white/30 hover:bg-white/50",
                    )}
                    onClick={() => setCurrentProjectIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 hover:bg-background/90"
                onClick={goToNextProject}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 z-20 bg-black/80 backdrop-blur-sm py-3 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex justify-center">
          <p className="text-sm text-white/70">{PORTFOLIO_VERSION}</p>
        </div>
      </footer>
    </div>
  )
}

