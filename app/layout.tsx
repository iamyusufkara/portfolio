import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { PageTransition } from "@/components/page-transition"
import { ThemeProvider } from "@/contexts/theme-context"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio – UX-Designer & Softwareentwickler",
  description: "Moderne Portfolio-Website mit horizontalem Scroll-Layout",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider>
          <LanguageProvider>
            <PageTransition>{children}</PageTransition>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
