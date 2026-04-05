import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-divider py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-6">
        <Link
          href="/"
          className="font-display text-base tracking-[0.25em] uppercase text-[#F5F5F5] hover:text-accent transition-colors"
        >
          RA Associates
        </Link>

        <div className="flex flex-col items-center gap-1 md:items-end">
          <p className="text-sm tracking-[0.2em] uppercase text-[#777]">
            &copy; {year} &nbsp;RA Associates
          </p>
          <p className="text-sm tracking-[0.2em] uppercase text-[#777]">
            New York &nbsp;&middot;&nbsp; Miami
          </p>
        </div>
      </div>
    </footer>
  )
}
