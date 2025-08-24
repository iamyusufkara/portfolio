'use client'

import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaJs, FaReact, FaNodeJs, FaFigma, FaGit, FaJira, FaJava, FaVuejs, FaConfluence } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiSpring } from 'react-icons/si'
import { TbBrandReactNative } from "react-icons/tb";


const inter = Inter({ subsets: ['latin'] })

const sections = [
  { id: 'hero', label: 'Start' },
  { id: 'experience', label: 'Erfahrung' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projekte' },
  { id: 'contact', label: 'Kontakt' },
]

const timeline = [
  { year: '2025', title: 'Bachelorstudium abgeschlossen', description: 'Mensch-Technik-Interaktion mit Schwerpunkt: Benutzerschnittstellen für Mobilgeräte' },
  { year: '2023 - 2024', title: 'Praktikant - Software Engineering & Operations', description: 'Mitwirkung an internen Anwendungen mit Fokus auf UX, Frontend mit Vue.js & TypeScript sowie der Umstellung auf Material Design 3.' },
  { year: '2024 - Heute', title: 'Junior Frontend Developer', description: 'Entwicklung und Wartung von Shopify-Themes mit Liquid und JavaScript, inklusive Funktionserweiterungen und individueller Anpassungen.' },
]

const projects = [
  {
    title: 'Jobportal',
    type: 'Web',
    status: 'Live in Entwicklung',
    description: 'Entwicklung eines Jobportals, das Bewerbenden die einfache Suche nach passenden Stellen ermöglicht.',
    tech: ['Vue', 'Vitest', "TailwindCSS"],
    demo: 'https://job-search-phi-jade.vercel.app',
    github: 'https://github.com/iamyusufkara/job-search',
    image: '/coming-soon.png'
  },
  {
    title: 'Kundify',
    type: 'Web',
    status: 'In Entwicklung',
    description: 'Modulares CRM-System zur Auftragserfassung, Rechnungsstellung & Terminplanung',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    demo: 'https://www.kundify.de/',
    image: '/kundify.png'
  },
  {
    title: 'Treso',
    type: 'Web',
    status: 'Live in Entwicklung',
    description: 'Eine Webanwendung zum Verwalten von Finanzen.',
    tech: ['React', 'Next.js', 'TypeScript', 'HeroUI'],
    demo: 'https://treso-tau.vercel.app',
    image: '/treso.png'
  },
  {
    title: 'NormlyAI',
    type: 'Web',
    status: 'Live',
    description: 'KI-gestütztes Barrierefreiheitstool für Entwickler:innen bon digitalen Systemen',
    tech: ['Next.js', 'MongoDB', 'Pinecone'],
    demo: 'https://normly-ai.vercel.app/',
    image: '/normly.png'
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('Alle')
  const [darkMode, setDarkMode] = useState(true)
  const filtered = activeTab === 'Alle' ? projects : projects.filter(p => p.type === activeTab)
  const [activeSection, setActiveSection] = useState('hero')


  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      setDarkMode(saved === 'true')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const current = sections.findLast(({ id }) => {
      const el = document.getElementById(id);
      return el && el.offsetTop <= scrollPosition;
    });
    if (current) setActiveSection(current.id);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <>
      <Head>
        <title>Yusuf Kara | Portfolio</title>
        <meta name="description" content="Portfolio von Talha Günes, Webentwickler aus Deutschland" />
      </Head>

      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md px-6 py-3 flex justify-center items-center text-sm font-medium shadow rounded-full max-w-fit mx-auto">
        <nav className="flex gap-6">
  {sections.map((sec) => (
    <a
      key={sec.id}
      href={`#${sec.id}`}
      className={`px-2 transition-colors ${
        activeSection === sec.id
          ? 'text-blue-600 dark:text-white font-semibold'
          : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white'
      }`}
    >
      {sec.label}
    </a>
  ))}
</nav>
      </header>

      <main className={`${inter.className} pt-32 bg-white text-black dark:bg-black dark:text-white scroll-smooth font-sans snap-y snap-mandatory h-screen overflow-y-scroll`}>

        <section id="hero" className="flex flex-col md:flex-row items-center justify-center h-screen text-center px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black snap-start">
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-xl md:text-left text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Hallo, ich bin Yusuf</h1>
    <h1 className='text-l md:text-l'>UX-Designer & Softwareentwickler aus Duisburg.</h1>
    <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300">
      Ich gestalte digitale Produkte mit Fokus auf Nutzer, Klarheit und Ästhetik. Design trifft Code – für starke, erlebbare Lösungen.
    </p>
  </motion.div>
  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-10 md:mt-0 md:ml-10">
    <div className="w-48 md:w-64 h-48 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
  <Image src="/avatars/avatar.bmp" alt="Avatar" width={256} height={256} className="w-full h-full object-cover" />
</div>
  </motion.div>
</section>

        <section id="experience" className="h-screen flex items-center justify-center px-4 bg-white dark:bg-gray-900 snap-start overflow-y-auto">
  <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-3xl w-full">
    <h2 className="text-4xl font-bold mb-10 text-center">Berufliche Laufbahn</h2>
    <ol className="relative border-l border-gray-300 dark:border-gray-600">
      {timeline.map((item, idx) => (
        <li key={idx} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">{item.year}</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">{item.description}</p>
        </li>
      ))}
    </ol>
  </motion.div>
</section>

<section id="techstack" className="h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900 snap-start">
  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl w-full text-center">
    <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
    <p className="mb-8 text-gray-700 dark:text-gray-300">Hier sind die Technologien und Tools, die ich regelmäßig verwende:</p>
    <div className="space-y-10">
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-left">Frontend</h3>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {[
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'React', icon: <FaReact /> },
            { name: 'React Native', icon: <TbBrandReactNative /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Vue.js', icon: <FaVuejs /> }
          ].map((tech, i) => (
            <div key={i} title={tech.name} className="flex flex-col items-center justify-center bg-gray-200 text-gray-800 w-24 h-24 text-sm font-medium rounded-lg dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-default">
              <div className="text-2xl mb-1">{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-left">Backend</h3>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {[
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Java', icon: <FaJava /> },
            { name: 'Spring Boot', icon: <SiSpring /> }
          ].map((tech, i) => (
            <div key={i} title={tech.name} className="flex flex-col items-center justify-center bg-gray-200 text-gray-800 w-24 h-24 text-sm font-medium rounded-lg dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-default">
              <div className="text-2xl mb-1">{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-left">Tools</h3>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {[
            { name: 'Git', icon: <FaGit /> },
            { name: 'Jira', icon: <FaJira /> },
            { name: 'Confluence', icon: <FaConfluence /> },
            { name: 'Figma', icon: <FaFigma /> },
          ].map((tech, i) => (
            <div key={i} title={tech.name} className="flex flex-col items-center justify-center bg-gray-200 text-gray-800 w-24 h-24 text-sm font-medium rounded-lg dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-default">
              <div className="text-2xl mb-1">{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
</section>

        <section id="projects" className="h-screen flex flex-col items-center justify-center px-4 bg-gray-50 dark:bg-gray-800 snap-start overflow-y-auto">
          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-6xl w-full">
            <h2 className="text-4xl font-bold mb-6 text-center">Projekte</h2>
            <div className="flex justify-center gap-4 mb-8">
              {['Alle', 'UX', 'Web', 'Mobile'].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full text-sm font-medium border transition ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-white border-gray-300 dark:border-gray-500'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              {filtered.map((proj, i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <Image src={proj.image} alt={proj.title} width={500} height={300} className="rounded-lg object-cover h-full max-h-60 md:max-h-72" />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{proj.type}</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{proj.status}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{proj.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tech.map((t, idx) => (
                          <span key={idx} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-white">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 flex gap-4">
                      <a href={proj.demo} className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium">Demo</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-gray-900 snap-start">
  <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-xl w-full mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Kontakt</h2>
    <p className="mb-6 text-gray-600 dark:text-gray-300">Ich bin offen für neue Herausforderungen – ob Festanstellung oder spannende Projekte.</p>
    <a href="mailto:yusufkara@gmx.de" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold text-sm transition">
      E-Mail schreiben
    </a>
  </motion.div>

  <footer className="absolute bottom-0 left-0 right-0 text-center py-6 text-sm opacity-70 text-gray-600 dark:text-gray-400">
    &copy; {new Date().getFullYear()} Yusuf Kara
  </footer>
</section>

      </main>
    </>
  )
}
