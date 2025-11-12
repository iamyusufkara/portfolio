"use client"

import { useRef, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

const Kundify = () => {
  return (
    <section className="min-w-full min-h-[70vh] md:h-screen snap-start flex items-center justify-center bg-background px-4 py-8 md:px-8 md:py-0 lg:px-16 flex-shrink-0 transition-colors duration-300">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <Link href="/projects/kundify" className="block group">
          <div className="w-full h-[240px] md:h-[500px] bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src="/kundify.png"
              alt="Kundify App"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <span className="px-2 md:px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
              UX Design
            </span>
            <span className="px-2 md:px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
              Entwicklung
            </span>
            <span className="text-blue-700 dark:text-blue-300 font-medium text-xs md:text-sm uppercase tracking-wider">
              Web · Mobile
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-foreground">Kundify</h2>
          <p className="text-base md:text-2xl text-muted-foreground">Großes Eigenprojekt</p>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed md:leading-relaxed">
            Kundify vereint Kundenverwaltung, Auftragsmanagement und Buchungssystem in einer einzigen, modularen Plattform.
          </p>
          <button
            disabled
            className="inline-block px-4 md:px-6 py-2 md:py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm md:text-base"
          >
            In Entwicklung →
          </button>
        </div>
      </div>
    </section>
  )
}

const ClubHrw = () => {
  return (
    <section className="min-w-full min-h-[70vh] md:h-screen snap-start flex items-center justify-center bg-background px-4 py-8 md:px-8 md:py-0 lg:px-16 flex-shrink-0 transition-colors duration-300">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <Link href="/projects/clubhrw" className="block group">
          <div className="w-full h-[240px] md:h-[500px] bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-950/50 dark:to-blue-950/50 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src="/clubhrw.webp"
              alt="TaskMaster App"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <span className="px-2 md:px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
              UX Design
            </span>
            <span className="text-blue-700 dark:text-blue-300 font-medium text-xs md:text-sm uppercase tracking-wider">
              Web · Desktop
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-foreground">ClubHRW</h2>
          <p className="text-base md:text-2xl text-muted-foreground">Uniprojekt</p>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed md:leading-relaxed">
            ClubHRW verbindet Studierende der Hochschule Ruhr West, erleichtert den Austausch und bietet Raum für Gruppen, Ideen und Events. <br />
            <b>// Redesign geplant //</b>
          </p>
          <button
            disabled
            className="inline-block px-4 md:px-6 py-2 md:py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors text-sm md:text-base"
          >
            Projekt ansehen →
          </button>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.innerWidth < 768

    const handleWheel = (e: WheelEvent) => {
      if (!isMobile && e.deltaY !== 0) {
        e.preventDefault()
        container.scrollBy({
          left: e.deltaY * 2,
          behavior: "smooth",
        })
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <>
      <Navigation containerRef={containerRef} />
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row h-screen overflow-x-hidden md:overflow-x-auto overflow-y-auto md:overflow-y-hidden md:snap-x snap-y md:snap-mandatory snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "thin" }}
      >
        <HeroSection />
        <Kundify />
        <ClubHrw />
        <ContactSection />
      </div>
    </>
  )
}
