import Header from "@/components/header"
import AboutMe from "@/components/about-me"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutMe />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

