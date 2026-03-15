import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Thesis from '../components/sections/Thesis'
import About from '../components/sections/About'
import Now from '../components/sections/Now'
import Journey from '../components/sections/Journey'
import Writing from '../components/sections/Writing'
import Press from '../components/sections/Press'
import Recognition from '../components/sections/Recognition'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Newsletter from '../components/sections/Newsletter'
import Contact from '../components/sections/Contact'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Wendi Kimberli Soto — AI Governance & Identity Drift Detection'
  }, [])

  return (
    <>
      <Hero />
      <Thesis />
      <About />
      <Now />
      <Journey />
      <Writing />
      <Press />
      <Recognition />
      <Projects />
      <Skills />
      <Newsletter />
      <Contact />
    </>
  )
}
