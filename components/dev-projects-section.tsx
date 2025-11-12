import { ProjectCard } from "@/components/project-card"

const devProjects = [
  {
    title: "E-Commerce Platform",
    subtitle: "Full-stack E-Commerce-Lösung mit modernem Tech-Stack und optimaler Performance.",
    platforms: ["React", "Next.js", "Node.js"],
    techStack: ["React", "Next.js", "TailwindCSS", "PostgreSQL", "Stripe"],
    accentColor: "from-slate-400 to-slate-600",
    imageQuery: "modern e-commerce website interface with clean design",
  },
  {
    title: "SaaS Dashboard",
    subtitle: "Analytics-Dashboard mit Echtzeit-Datenvisualisierung und komplexen Filtern.",
    platforms: ["Web"],
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
    accentColor: "from-indigo-400 to-indigo-600",
    imageQuery: "analytics dashboard with charts and data visualization",
  },
  {
    title: "Social Media App",
    subtitle: "Mobile-first Social-Media-Plattform mit Fokus auf Performance und Skalierbarkeit.",
    platforms: ["React Native"],
    techStack: ["React Native", "Firebase", "Redux", "Express"],
    accentColor: "from-pink-400 to-rose-600",
    imageQuery: "social media app interface with modern design",
  },
]

export function DevProjectsSection() {
  return (
    <section className="min-w-full h-screen snap-start flex items-center bg-[#F8F9FA] px-8 md:px-16 pt-24 pb-16 flex-shrink-0">
      <div className="w-full max-w-screen-2xl mx-auto overflow-y-auto max-h-full">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Entwicklungs-Projekte</h2>
          <p className="text-lg md:text-xl text-gray-600">Moderne Web-Anwendungen und technische Lösungen</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {devProjects.map((project, index) => (
            <ProjectCard key={index} {...project} isDev />
          ))}
        </div>
      </div>
    </section>
  )
}
