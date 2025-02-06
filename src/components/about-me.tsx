import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-muted">
      <div className="container flex items-center">
        {/* Bild außerhalb der Card */}
        <div className="mr-6">
          <Image 
            src="/avatars/profilbild.jpg" 
            alt="Platzhalter Bild" 
            width={150} 
            height={150} 
            className="rounded"
          />
        </div>
        
        {/* Card-Komponente */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Entwickler und UX-Designer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Ich spezialisiere mich auf die Entwicklung moderner, skalierbarer Webanwendungen mit den neuesten Technologien und Frameworks. Mit meinem Know-how im Frontend, Backend und UX arbeite ich an leistungsfähigen, benutzerfreundlichen Lösungen, die den Anforderungen von heute gerecht werden.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
