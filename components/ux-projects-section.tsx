import { ProjectCard } from "@/components/project-card"

const uxProjects = [
  {
    title: "Pasteline – Add a Note Quickly.",
    subtitle: "Eine unglaublich praktische App zum schnellen Notieren kleiner Gedanken und Ideen.",
    platforms: ["iOS", "Web"],
    accentColor: "from-blue-400 to-blue-600",
    imageQuery: "modern note-taking app interface with minimal design",
  },
  {
    title: "FoodFlow – Healthy Meal Planning",
    subtitle: "Eine intuitive App für gesunde Essensplanung mit personalisierten Rezeptvorschlägen.",
    platforms: ["iOS", "Android"],
    accentColor: "from-green-400 to-emerald-600",
    imageQuery: "meal planning app with colorful food photography",
  },
  {
    title: "TaskMaster – Project Management",
    subtitle: "Kollaboratives Projektmanagement-Tool für agile Teams mit klarem Fokus auf UX.",
    platforms: ["Web", "Desktop"],
    accentColor: "from-purple-400 to-purple-600",
    imageQuery: "modern project management dashboard with kanban board",
  },
]

export function UXProjectsSection() {
  return (
    <section className="min-w-full h-screen snap-start flex items-center bg-[#F8F9FA] px-8 md:px-16 pt-24 pb-16 flex-shrink-0">
      <div className="w-full max-w-screen-2xl mx-auto overflow-y-auto max-h-full">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">UX-Design Projekte</h2>
          <p className="text-lg md:text-xl text-gray-600">Nutzerzentrierte digitale Erlebnisse</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {uxProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
