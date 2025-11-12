"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  subtitle: string
  platforms: string[]
  accentColor: string
  imageQuery: string
  techStack?: string[]
  isDev?: boolean
}

export function ProjectCard({
  title,
  subtitle,
  platforms,
  accentColor,
  imageQuery,
  techStack,
  isDev = false,
}: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-[30px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col min-h-[500px]">
      {/* Platforms/Tech badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {platforms.map((platform) => (
          <span key={platform} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
            {platform}
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="relative rounded-[25px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-6 aspect-video">
        <Image
          src={`/.jpg?height=600&width=800&query=${encodeURIComponent(imageQuery)}`}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
        {/* Colored overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
      </div>
npm uninstall vaul
      {/* Text content */}
      <div className="flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-black leading-tight">{title}</h3>
          <p className="text-base text-gray-600 leading-relaxed">{subtitle}</p>

          {/* Tech stack for dev projects */}
          {isDev && techStack && (
            <div className="pt-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <button
          className={`mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${accentColor} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 group-hover:gap-3 w-fit`}
        >
          {isDev ? "Projekt ansehen" : "View Case Study"}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
