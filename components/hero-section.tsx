"use client"

export function HeroSection() {
  return (
    <section className="min-w-full h-screen snap-start flex items-center justify-center bg-background px-4 md:px-8 pt-16 md:pt-24">
      <div className="max-w-4xl text-center space-y-4 md:space-y-8">
        <div className="flex justify-center mb-4 md:mb-8">
          <div className="w-20 h-20 md:w-64 md:h-64 rounded-[25px] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
            <img src="/profile-image.jpg" alt="Profilbild" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Hallo, ich bin Yusuf Kara
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground font-medium">
            UX/UI Designer & Developer
          </p>
        </div>
        <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
          <p className="text-sm md:text-xl text-muted-foreground leading-relaxed px-2">
            Ich entwerfe intuitive und ansprechende Benutzeroberflächen und setze sie mit modernsten Web-Technologien
            um. Meine Leidenschaft liegt in der Verbindung von Design und Code.
          </p>
        </div>
      </div>
    </section>
  )
}
