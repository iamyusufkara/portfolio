import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="h-screen p-6 overflow-hidden font-mono bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-4 p-3 bg-white rounded-lg shadow-sm border-l-4 border-indigo-400">
          <h1 className="text-xl font-bold text-indigo-700">Yusuf Kara</h1>
          <p className="text-slate-600">Fullstack Entwickler</p>
        </header>

        <div className="space-y-4 overflow-auto h-[calc(100vh-180px)] pr-2">
          {/* Tech Stack */}
          <section className="p-3 bg-white rounded-lg shadow-sm border-l-4 border-emerald-400">
            <h2 className="text-lg font-bold mb-2 text-emerald-700">Technologie-Stack</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Vue.js",
                "Java",
                "Spring Boot",
                "Node.js",
                "PostgreSQL",
                "Docker",
                "Git",
                "React Native",
                "Redux",
              ].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Projekte */}
          <section className="p-3 bg-white rounded-lg shadow-sm border-l-4 border-amber-400">
            <h2 className="text-lg font-bold mb-3 text-amber-700">Projekte</h2>

            <div className="mb-4 pb-3 border-b border-amber-100">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">Kundify</h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Web</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Mobile
                  </span>
                  <Link
                    href="https://kundify.de"
                    className="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full hover:bg-amber-100 transition-colors"
                    target="_blank"
                  >
                    Projekt ansehen
                  </Link>
                </div>
              </div>
              <p className="text-sm mb-1 text-slate-500">React, React Native, Java, Spring Boot</p>
              <p className="text-sm text-slate-700">
                Eine Lösung zur Verwaltung von Kundendaten und Aufträgen – effizient, übersichtlich und sicher. 🚀
              </p>
            </div>

            <div className="mb-4 pb-3 border-b border-amber-100">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">Asphaltcrew</h3>
                <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Web</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Mobile
                  </span>
                  <Link
                    href="https://example.com/taskmanager"
                    className="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full hover:bg-amber-100 transition-colors"
                    target="_blank"
                  >
                    Projekt ansehen
                  </Link>
                </div>
              </div>
              <p className="text-sm mb-1 text-slate-500">React Native, TypeScript, WebSockets, PostgreSQL</p>
              <p className="text-sm text-slate-700">
                Ein strategisches, textbasiertes Rennspiel im Stil von Autoquartett! Vergleiche Fahrzeugwerte und tune dein Auto, um NPCs in spannenden Duellen zu besiegen.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">Formiki</h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Web</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Mobile
                  </span>
                  <Link
                    href="https://example.com/analytics"
                    className="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full hover:bg-amber-100 transition-colors"
                    target="_blank"
                  >
                    Projekt ansehen
                  </Link>
                </div>
              </div>
              <p className="text-sm mb-1 text-slate-500">React, React Native</p>
              <p className="text-sm text-slate-700">
                Interaktive Datenvisualisierung mit anpassbaren Diagrammen und Echtzeit-Datenanalyse. Implementierung
                von benutzerdefinierten Filtern und Export-Funktionen.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-4 p-3 bg-white rounded-lg shadow-sm border-l-4 border-blue-400 text-sm">
          <div className="flex flex-wrap gap-2">
            <Link
              href="mailto:max.mustermann@example.com"
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
            >
              Email
            </Link>
            <Link
              href="https://github.com/iamyusufkara"
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
