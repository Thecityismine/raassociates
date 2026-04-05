'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'

const categories = ['all', 'corporate', 'residential', 'hospitality', 'retail'] as const
type Category = (typeof categories)[number]

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>('all')

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Page header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.45em] uppercase text-accent mb-5">Portfolio</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F5F5]">
              Projects
            </h1>
          </div>

          {/* Filter bar */}
          <div className="flex gap-8 border-b border-divider pb-6 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[10px] tracking-[0.4em] uppercase transition-colors duration-200 ${
                  active === cat ? 'text-[#F5F5F5]' : 'text-[#444] hover:text-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface mb-5">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-end p-6">
                        <span className="font-display text-[6rem] leading-none text-divider select-none">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="font-display text-xl md:text-2xl font-light text-[#F5F5F5]">
                        {project.title}
                      </h2>
                      <p className="text-[10px] tracking-[0.35em] uppercase text-accent shrink-0 mt-1.5">
                        {project.category}
                      </p>
                    </div>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-muted mb-4">
                      {project.location}
                    </p>
                    <p className="text-sm text-muted leading-[1.9]">{project.description}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
