'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Corporate Interiors',
    description:
      'Workplace environments designed for performance. From tenant fit-outs to full office transformations, we deliver spaces that are functional, refined, and built to last.',
  },
  {
    number: '02',
    title: 'Residential Interiors',
    description:
      'Custom residential design grounded in craft and intention. We work closely with clients to create homes that reflect who they are and how they live.',
  },
  {
    number: '03',
    title: 'Hospitality',
    description:
      'Guest-centered environments that balance atmosphere with operational efficiency — from boutique hotels to restaurants and lounges built for experience.',
  },
  {
    number: '04',
    title: 'Retail',
    description:
      'Retail spaces designed to convert. We create environments that elevate the brand, guide the customer journey, and hold up through heavy daily use.',
  },
]

export default function Services() {
  return (
    <section className="border-t border-divider py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-[0.45em] uppercase text-accent mb-5">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F5F5F5]">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-divider border-t border-divider">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group pt-10 pb-12 md:px-8 first:md:pl-0 last:md:pr-0"
            >
              <p className="font-display text-6xl text-divider group-hover:text-accent transition-colors duration-500 mb-8 leading-none">
                {service.number}
              </p>
              <h3 className="font-display text-xl font-light text-[#F5F5F5] mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-[1.9]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
