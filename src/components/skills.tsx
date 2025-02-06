import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiTypescript, SiJavascript, SiNextdotjs, SiReact, SiVuedotjs, SiNodedotjs, SiFigma } from "react-icons/si"
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "React Native", icon: <SiReact className="w-8 h-8" /> },
  { name: "Vue", icon: <SiVuedotjs className="w-8 h-8" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
  { name: "Figma", icon: <SiFigma className="w-8 h-8" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" /> },
  { name: "Java", icon: <FaJava className="w-8 h-8" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Tools</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Card key={index} className="flex flex-col items-center p-4">
              <CardContent className="flex flex-col items-center">
                {/* Icon oben */}
                <div className="mb-6 mt-6">{skill.icon}</div>
                {/* Titel unten */}
                <CardTitle className="text-center">{skill.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
