import { Link } from 'react-router'
import { motion } from 'motion/react'
import ThemeToggle from '../components/ui/ThemeToggle'
import InfinitySymbol from '../components/ui/InfinitySymbol'

export default function PortalPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Theme toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Floral decorations */}
      <img
        src="/florals/image01.png"
        alt=""
        className="absolute -top-16 -left-16 w-[22rem] sm:w-[40rem] pointer-events-none animate-sway"
      />
      <img
        src="/florals/image2.png"
        alt=""
        className="absolute -bottom-16 -right-16 w-[22rem] sm:w-[40rem] pointer-events-none animate-sway"
        style={{ animationDelay: '-3s' }}
      />
      <img
        src="/florals/image2.png"
        alt=""
        className="absolute -top-12 -right-12 w-[18rem] sm:w-[30rem] pointer-events-none animate-float"
      />
      <img
        src="/florals/image01.png"
        alt=""
        className="absolute -bottom-12 -left-12 w-[18rem] sm:w-[30rem] pointer-events-none animate-float"
        style={{ animationDelay: '-4s' }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-medium text-foreground mb-4 tracking-tight"
        >
          Wendi Kimberli
          <span className="block text-lg sm:text-2xl lg:text-3xl font-normal text-foreground-muted tracking-[0.2em] mt-1">
            Soto
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12 flex justify-center"
        >
          <InfinitySymbol className="text-foreground-muted" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Link
            to="/home"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-sage/30 bg-white/50 backdrop-blur-sm text-sage-dark font-medium text-sm tracking-wide hover:bg-white/70 hover:border-sage/50 transition-all duration-300"
          >
            Enter
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
