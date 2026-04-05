'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function FeaturedProjects() {
  return (
    <section className="border-t border-divider py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16 md:mb-20"
        >
          <div>
            <p className="text-xs tracking-[0.45em] uppercase text-accent mb-5">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#F5F5F5]">
              Selected Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:block text-xs tracking-[0.3em] uppercase text-muted hover:text-[#F5F5F5] transition-colors pb-1"
          >
            All Projects →
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-5">
                {project.coverImage ? (
                  <>
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="font-display text-[7rem] leading-none text-divider select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-light text-[#F5F5F5] leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-muted mt-1.5">
                    {project.location}
                  </p>
                </div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-accent shrink-0 mt-1">
                  {project.category}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile all projects link */}
        <div className="mt-12 md:hidden text-center">
          <Link
            href="/projects"
            className="text-xs tracking-[0.3em] uppercase text-muted hover:text-[#F5F5F5] transition-colors"
          >
            All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
