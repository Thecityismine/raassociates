import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-divider py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <Link
          href="/"
          className="font-display text-base tracking-[0.25em] uppercase text-[#F5F5F5] hover:text-accent transition-colors"
        >
          RA Associates
        </Link>

        <p className="text-[10px] tracking-[0.3em] uppercase text-[#444]">
          © {year} RA Associates &nbsp;·&nbsp; New York &amp; Miami
        </p>

        <nav className="flex gap-7">
          <Link
            href="/projects"
            className="text-[10px] tracking-[0.3em] uppercase text-[#444] hover:text-muted transition-colors"
          >
            Projects
          </Link>
          <a
            href="#about"
            className="text-[10px] tracking-[0.3em] uppercase text-[#444] hover:text-muted transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[10px] tracking-[0.3em] uppercase text-[#444] hover:text-muted transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
