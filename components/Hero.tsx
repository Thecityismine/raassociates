'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/Hero.jpg')" }}
      />

      {/* Layered dark overlay */}
      <div className="absolute inset-0 bg-[#0A0A0A]/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-xs tracking-[0.5em] uppercase text-accent mb-7"
        >
          New York &nbsp;&bull;&nbsp; Miami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-light text-[clamp(3.5rem,10vw,8rem)] leading-none tracking-wide text-[#F5F5F5] mb-8"
        >
          RA Associates
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted mb-14"
        >
          From Concept to Completion, Workplace Ready
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="text-xs tracking-[0.3em] uppercase border border-accent text-accent px-9 py-3.5 hover:bg-accent hover:text-[#0A0A0A] transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href="#contact"
            className="text-xs tracking-[0.3em] uppercase text-muted hover:text-[#F5F5F5] transition-colors px-6 py-3.5"
          >
            Contact Us →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#444]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#444] to-transparent" />
      </motion.div>
    </section>
  )
}
