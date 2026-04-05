'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'Jorge Medina',
    title: 'Principal — Architecture & Project Delivery',
    image: '/images/Jorge - Profile.png',
    bio: 'Architect and Senior Project Manager with over 16 years of experience delivering corporate interior and ground-up projects across Miami, New York, and California. Specializing in leading projects from concept through construction — combining design, planning, and execution to create high-performing, well-built spaces. The focus is simple: deliver on time, within budget, and at a level that clients actually notice.',
  },
  {
    name: 'Raymond Ahmadi',
    title: 'Principal — Structural & MEP Engineering',
    image: '/images/Raymond - profile.png',
    bio: 'Multidisciplinary engineering professional and Principal at RA Associates, bringing deep expertise across civil, environmental, and structural systems. Specializing in dam engineering, hydrology, hydraulics, and construction management — delivering practical, high-performance solutions for complex projects.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-20 md:mb-28"
      >
        <p className="text-xs tracking-[0.45em] uppercase text-accent mb-5">The Studio</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#F5F5F5] max-w-2xl leading-tight">
          Architecture and engineering, delivered as one.
        </h2>
      </motion.div>

      {/* Partners grid */}
      <div className="grid md:grid-cols-2 gap-20 md:gap-16 lg:gap-28">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
            className="flex flex-col"
          >
            {/* Headshot — Option B: desaturated, dark container */}
            <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden bg-[#141414]">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                style={{ filter: 'grayscale(25%) brightness(0.88)' }}
              />
              {/* Bottom gradient to blend into dark bg */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            </div>

            {/* Info */}
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-3">
                {partner.title}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-[#F5F5F5] mb-4">
                {partner.name}
              </h3>
              <div className="w-8 h-px bg-accent mb-6" />
              <p className="text-base text-muted leading-[1.9]">{partner.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
