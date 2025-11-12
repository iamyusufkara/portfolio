"use client"

import type { RefObject } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

interface NavigationProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function Navigation({ containerRef }: NavigationProps) {
  const pathname = usePathname()
  const isProjectPage = pathname.startsWith("/projects/")
  const { theme, toggleTheme } = useTheme()

  const scrollToContact = () => {
    if (containerRef?.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold text-foreground tracking-wide">Yusuf Kara</div>

        {isProjectPage && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-full font-medium transition-colors text-sm"
            >
              Zurück zur Übersicht
            </Link>
          </div>
        )}

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 md:p-2.5 rounded-full hover:bg-muted transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4 md:w-5 md:h-5" /> : <Sun className="w-4 h-4 md:w-5 md:h-5" />}
          </button>

          {!isProjectPage && (
            <button
              onClick={scrollToContact}
              className="px-4 md:px-6 py-2 md:py-2.5 bg-foreground text-background rounded-full hover:opacity-90 transition-all duration-300 font-medium text-sm md:text-base"
            >
              Kontakt
            </button>
          )}
        </div>
      </div>

      {isProjectPage && (
        <div className="md:hidden px-4 pb-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-full font-medium transition-colors text-sm"
          >
            Zurück zur Übersicht
          </Link>
        </div>
      )}
    </nav>
  )
}
