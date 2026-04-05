'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Inquiry — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType || 'Not specified'}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:jorgemedina.x@icloud.com?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  const fieldClass =
    'w-full bg-transparent border-b border-divider focus:border-accent outline-none py-3.5 text-[#F5F5F5] placeholder-[#3a3a3a] text-sm transition-colors duration-300 font-body'

  return (
    <section id="contact" className="border-t border-divider py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-[0.45em] uppercase text-accent mb-5">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F5F5F5] max-w-xl leading-tight">
            Let&apos;s start a conversation.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 lg:gap-36">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div className="py-10">
                <p className="font-display text-3xl text-[#F5F5F5] mb-3">Thank you.</p>
                <p className="text-sm text-muted">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className={fieldClass}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className={fieldClass}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <select
                  className={`${fieldClass} appearance-none cursor-pointer`}
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                >
                  <option value="" className="bg-[#141414]">
                    Project Type
                  </option>
                  <option value="Corporate Interior" className="bg-[#141414]">
                    Corporate Interior
                  </option>
                  <option value="Residential Interior" className="bg-[#141414]">
                    Residential Interior
                  </option>
                  <option value="Ground-Up Construction" className="bg-[#141414]">
                    Ground-Up Construction
                  </option>
                  <option value="Engineering Services" className="bg-[#141414]">
                    Engineering Services
                  </option>
                  <option value="Other" className="bg-[#141414]">
                    Other
                  </option>
                </select>
                <textarea
                  placeholder="Tell us about your project"
                  rows={5}
                  className={`${fieldClass} resize-none`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="self-start text-xs tracking-[0.3em] uppercase border border-accent text-accent px-9 py-3.5 hover:bg-accent hover:text-[#0A0A0A] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            {/* Offices */}
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted mb-6">Locations</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">New York</p>
                  <p className="text-sm text-muted">New York, NY</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">Miami</p>
                  <p className="text-sm text-muted">Miami, FL</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-divider" />

            {/* Partners */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm text-[#F5F5F5] mb-2">Jorge Medina</p>
                <a
                  href="mailto:jorgemedina.x@icloud.com"
                  className="block text-sm text-muted hover:text-accent transition-colors"
                >
                  jorgemedina.x@icloud.com
                </a>
                <a
                  href="tel:+19172397013"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  917.239.7013
                </a>
              </div>
              <div>
                <p className="text-sm text-[#F5F5F5] mb-2">Raymond Ahmadi</p>
                <a
                  href="mailto:raassociates@verizon.net"
                  className="block text-sm text-muted hover:text-accent transition-colors"
                >
                  raassociates@verizon.net
                </a>
                <a
                  href="tel:+18485483080"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  848.548.3080
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
