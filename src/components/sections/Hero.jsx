import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import InfinitySymbol from '../ui/InfinitySymbol'
import { personal } from '../../data/personal'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-40">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-64">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sage-dark text-sm tracking-[0.2em] uppercase mb-4"
        >
          {personal.title} &middot; {personal.institution}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-5xl sm:text-7xl font-medium text-foreground mb-6 tracking-tight"
        >
          {personal.name}
          <span className="block text-lg sm:text-2xl font-normal text-foreground-muted tracking-[0.2em] mt-1">
            Soto
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-foreground-muted text-base sm:text-lg max-w-xl mx-auto mb-6 leading-relaxed"
        >
          Building governance systems that detect when AI agents drift from who they're supposed to be.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10 flex justify-center"
        >
          <InfinitySymbol className="text-foreground-muted" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#projects">View My Work</Button>
          <Button href="#contact" variant="ghost">Get In Touch</Button>
        </motion.div>
      </div>

      <motion.picture
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full pointer-events-none"
      >
        <source srcSet="/embroidery-flowers.webp" type="image/webp" />
        <img
          src="/embroidery-flowers.png"
          alt="Embroidered wildflower garden"
          className="w-full"
          loading="eager"
        />
      </motion.picture>
    </section>
  )
}
