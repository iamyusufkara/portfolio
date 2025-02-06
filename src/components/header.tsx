import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          {/* Bild anstelle des Titels */}
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="/logo/logo.png" 
              alt="Logo" 
              width={48} 
              height={48} 
              className="rounded-full" 
            />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about">Über mich</Link>
            <Link href="#projects">Portfolio</Link>
            <Link href="#skills">Tools</Link>
          </nav>
        </div>
        <Button className="md:hidden">Menu</Button>
      </div>
    </header>
  )
}
