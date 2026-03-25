import { motion } from 'motion/react'
import Button from '../ui/Button'
import InfinitySymbol from '../ui/InfinitySymbol'
import { personal } from '../../data/personal'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(232, 139, 156, 0.2), rgba(167, 139, 250, 0.1), transparent)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] animate-sway opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent)' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] animate-float opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(232, 139, 156, 0.12), transparent)' }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-pink text-sm tracking-[0.3em] uppercase mb-4 font-mono"
        >
          {personal.title} · {personal.institution}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-5xl sm:text-7xl font-medium mb-6 tracking-tight"
        >
          <span className="gradient-text">{personal.name}</span>
          <span className="block text-lg sm:text-2xl font-normal text-foreground-muted tracking-[0.3em] mt-2 font-mono">
            Soto
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-foreground-muted text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Building governance systems that detect when AI agents <span className="text-pink">drift</span> from who they're supposed to be.
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
    </section>
  )
}
