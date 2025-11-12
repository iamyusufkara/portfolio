"use client"

import { ExternalLink } from "lucide-react"

export default function TaskMasterPage() {
  return (
    <>
      <div className="min-h-screen bg-background px-4 md:px-8 lg:px-16 xl:px-24 py-20 md:py-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6">
              TaskMaster – Project Management Reimagined
            </h1>
            <div className="flex gap-2 justify-center mb-6 md:mb-8 flex-wrap">
              <span className="px-2 md:px-3 py-1 bg-purple-500 dark:bg-purple-600 text-white rounded text-xs md:text-sm font-medium uppercase">
                Web
              </span>
              <span className="px-2 md:px-3 py-1 bg-purple-500 dark:bg-purple-600 text-white rounded text-xs md:text-sm font-medium uppercase">
                Desktop
              </span>
            </div>
            <a
              href="https://taskmaster.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-full font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors text-sm md:text-base"
            >
              Projekt ansehen <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full bg-muted rounded-lg overflow-hidden mb-12 md:mb-16">
            <img
              src="/modern-project-management-dashboard-with-kanban-bo.jpg"
              alt="TaskMaster Dashboard"
              className="w-full h-auto"
            />
          </div>

          <div className="mb-12 md:mb-16">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              TaskMaster simplifies project management for agile teams with an intuitive interface that focuses on what
              matters. Built for collaboration, it reduces complexity while increasing productivity through smart
              workflows and real-time updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h3 className="text-purple-500 dark:text-purple-400 font-semibold mb-3 uppercase text-sm">My Role</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Lead UX Designer, User Research, Information Architecture, Interaction Design.
              </p>
            </div>
            <div>
              <h3 className="text-purple-500 dark:text-purple-400 font-semibold mb-3 uppercase text-sm">Timeline</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-2">6 months development cycle.</p>
              <p className="text-sm text-muted-foreground/70">Mar 2022 – Aug 2022</p>
            </div>
            <div>
              <h3 className="text-purple-500 dark:text-purple-400 font-semibold mb-3 uppercase text-sm">Tools</h3>
              <p className="text-sm md:text-base text-muted-foreground">Figma, Miro, Principle, Lottie</p>
            </div>
          </div>
stadt bochum 
          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-12 mb-12 md:mb-16 transition-colors duration-300">
            <h2 className="text-purple-500 dark:text-purple-400 font-semibold mb-6 md:mb-8 uppercase text-sm">
              Overview
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Problem</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 md:mb-10">
              Existing project management tools are often overly complex and require lengthy onboarding processes. Teams
              waste valuable time navigating cluttered interfaces and unnecessary features, leading to decreased
              adoption and productivity.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Goal</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Design an intuitive project management platform with drag-and-drop functionality, kanban boards, and
              real-time collaboration without a steep learning curve. Make project tracking feel natural and effortless
              for teams of all sizes.
            </p>
          </div>

          <div className="mb-12 md:mb-16">
            <h2 className="text-purple-500 dark:text-purple-400 font-semibold mb-6 md:mb-8 uppercase text-sm">
              Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-muted rounded-lg p-6 md:p-8 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-purple-500 dark:text-purple-400 mb-2 md:mb-3">
                  40%
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">Reduction in meeting time</p>
              </div>
              <div className="bg-muted rounded-lg p-6 md:p-8 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-purple-500 dark:text-purple-400 mb-2 md:mb-3">
                  2500+
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">Teams using TaskMaster</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
