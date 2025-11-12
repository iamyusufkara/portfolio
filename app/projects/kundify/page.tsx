"use client"

import { Navigation } from "@/components/navigation"
import { ExternalLink } from "lucide-react"

export default function PastelinePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background px-4 md:px-8 lg:px-16 xl:px-24 py-20 md:py-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6">
              Pasteline – Add a Note Quickly
            </h1>
            <div className="flex gap-2 justify-center mb-6 md:mb-8 flex-wrap">
              <span className="px-2 md:px-3 py-1 bg-blue-500 dark:bg-blue-600 text-white rounded text-xs md:text-sm font-medium uppercase">
                iOS App
              </span>
              <span className="px-2 md:px-3 py-1 bg-blue-500 dark:bg-blue-600 text-white rounded text-xs md:text-sm font-medium uppercase">
                Mac OS App
              </span>
              <span className="px-2 md:px-3 py-1 bg-blue-500 dark:bg-blue-600 text-white rounded text-xs md:text-sm font-medium uppercase">
                Web
              </span>
            </div>
            <a
              href="https://pasteline.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm md:text-base"
            >
              Projekt ansehen <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full bg-muted rounded-lg overflow-hidden mb-12 md:mb-16">
            <img
              src="/modern-note-taking-app-interface-with-minimal-desi.jpg"
              alt="Pasteline App Interface"
              className="w-full h-auto"
            />
          </div>

          <div className="mb-12 md:mb-16">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Pasteline: the ultimate note-taking app for individuals and teams. With Pasteline, you can quickly and
              easily save small notes or links in a text message format, with each note being stored as a separate
              message. It's intuitive and easy-to-use, making it the perfect app for taking quick notes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h3 className="text-blue-500 dark:text-blue-400 font-semibold mb-3 uppercase text-sm">My Role</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Research, Analysis, Product Design, Interaction Design, Design Systems, User-testing.
              </p>
            </div>
            <div>
              <h3 className="text-blue-500 dark:text-blue-400 font-semibold mb-3 uppercase text-sm">Timeline</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-2">
                4 months to release the first version of new app.
              </p>
              <p className="text-sm text-muted-foreground/70">June 2021 – Dec 2022</p>
            </div>
            <div>
              <h3 className="text-blue-500 dark:text-blue-400 font-semibold mb-3 uppercase text-sm">Tools</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Figma, XD, Photoshop, Principle, Apple Motion
              </p>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-12 mb-12 md:mb-16 transition-colors duration-300">
            <h2 className="text-blue-500 dark:text-blue-400 font-semibold mb-6 md:mb-8 uppercase text-sm">Overview</h2>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Problem</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 md:mb-10">
              After researching conventional note-taking apps, I've come to the realization that they can be difficult
              to use and may not always be helpful when you need to quickly save an idea or a link. Many of these apps
              have too many functions, which can make it challenging to save something quickly and then locate the note
              you want.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Goal</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Design a simple and user-friendly notes app that allows users to quickly save new notes, especially links.
              The app should be intuitive and easy to navigate, so finding a saved note is never a difficult task.
            </p>
          </div>

          <div className="mb-12 md:mb-16">
            <h2 className="text-blue-500 dark:text-blue-400 font-semibold mb-6 md:mb-8 uppercase text-sm">
              User Research
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">Persona</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
              During the research phase, I conducted interviews with 20 potential users, asking them questions such as
              "What do you use to quickly save notes, ideas, or links that come to mind?" and "How often do you lose
              saved notes?". From these interviews, I gained valuable insights and began to develop user archetypes to
              ensure that every user can make the most of the app's features.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
              I discovered that short message formats in messenger apps are well-suited to our needs. As a result, we
              chose this as the primary format for our product's further development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-5 md:p-6 transition-colors duration-300">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">🤔</div>
                <h4 className="font-bold text-foreground mb-1 text-sm md:text-base">David</h4>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Age: 31</p>
                <p className="text-xs md:text-sm text-muted-foreground">Product Designer</p>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-5 md:p-6 transition-colors duration-300">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">😌</div>
                <h4 className="font-bold text-foreground mb-1 text-sm md:text-base">Sarah</h4>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Age: 34</p>
                <p className="text-xs md:text-sm text-muted-foreground">Educator</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-5 md:p-6 transition-colors duration-300">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">🙂</div>
                <h4 className="font-bold text-foreground mb-1 text-sm md:text-base">Rachel</h4>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Age: 27</p>
                <p className="text-xs md:text-sm text-muted-foreground">Freelance Writer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
