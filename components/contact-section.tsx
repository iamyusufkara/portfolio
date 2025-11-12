"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section className="min-w-full h-screen snap-start flex items-center justify-center bg-background px-4 py-12 md:px-8 md:py-0 transition-colors duration-300">
      <div className="max-w-3xl text-center space-y-10 md:space-y-12">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-6xl font-bold text-foreground leading-tight">{t.contact.title}</h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
            {t.contact.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 bg-card dark:bg-gray-800 rounded-[20px] md:rounded-[25px] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="font-semibold text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
              {t.contact.github}
            </span>
          </a>

          <div className="relative group/tooltip">
            <button
              disabled
              className="flex items-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 bg-secondary dark:bg-gray-700 rounded-[20px] md:rounded-[25px] shadow-sm cursor-not-allowed opacity-60"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
              <span className="font-semibold text-sm md:text-base text-muted-foreground">{t.contact.linkedin}</span>
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black dark:bg-white text-white dark:text-black text-xs md:text-sm rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Kein LinkedIn Account vorhanden
            </div>
          </div>

          <a
            href="mailto:hello@example.com"
            className="group flex items-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-[20px] md:rounded-[25px] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-semibold text-sm md:text-base">{t.contact.email}</span>
          </a>
        </div>

        <div className="pt-10 md:pt-12">
          <p className="text-xs md:text-sm text-muted-foreground">© 2025 {t.hero.name}.</p>
        </div>
      </div>
    </section>
  )
}
