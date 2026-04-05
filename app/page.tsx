import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
