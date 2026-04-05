import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-divider py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-6">
        <Link
          href="/"
          className="font-display text-base tracking-[0.25em] uppercase text-[#F5F5F5] hover:text-accent transition-colors"
        >
          RA Associates
        </Link>

        <p className="text-[11px] tracking-[0.25em] uppercase text-[#444] text-center">
          &copy; {year} RA Associates &nbsp;&middot;&nbsp; New York &amp; Miami
        </p>

        <nav className="flex gap-8">
          <Link
            href="/projects"
            className="text-[11px] tracking-[0.25em] uppercase text-[#444] hover:text-muted transition-colors"
          >
            Projects
          </Link>
          <a
            href="#about"
            className="text-[11px] tracking-[0.25em] uppercase text-[#444] hover:text-muted transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[11px] tracking-[0.25em] uppercase text-[#444] hover:text-muted transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
