import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import InfinitySymbol from '../ui/InfinitySymbol'
import { personal } from '../../data/personal'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floral decorations */}
      <img
        src="/florals/image2.png"
        alt=""
        className="absolute top-16 left-0 w-40 sm:w-64 pointer-events-none animate-sway"
      />
      <img
        src="/florals/image01.png"
        alt=""
        className="absolute bottom-16 right-0 w-40 sm:w-64 pointer-events-none animate-sway"
        style={{ animationDelay: '-3s' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground-dim hover:text-sage-dark transition-colors"
      >
        <ChevronDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
