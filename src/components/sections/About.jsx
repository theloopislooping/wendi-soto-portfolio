import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FlaskConical, Brain, Shield, Heart, Repeat, ChevronDown, ChevronUp } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { personal } from '../../data/personal'

const highlights = [
  { icon: FlaskConical, label: 'PhD Research', description: 'Adaptive cybersecurity education, recursive feedback architectures, and human-AI co-evolution in training environments at King\'s College London', color: 'violet' },
  { icon: Brain, label: 'Cognitive AI', description: 'Real-time user cognition modeling that adapts to anxiety, cognitive load, and learning style to support durable behavioural change', color: 'rose' },
  { icon: Repeat, label: 'Human-AI Co-Evolution', description: 'Designing systems where humans and AI develop together — not AI that replaces human thinking, but AI that strengthens it', color: 'sage' },
  { icon: Shield, label: 'AI Governance', description: 'Identity governance, drift detection, and behavioral stability in agentic AI — keeping humans thinking critically alongside AI systems', color: 'violet' },
  { icon: Heart, label: 'SonderSec', description: 'Trauma-informed cybersecurity training and tools for marginalised communities facing disproportionate digital risk', color: 'rose' },
]

const colorMap = {
  sage: 'bg-sage/15 text-sage-dark',
  rose: 'bg-pink/10 text-pink',
  violet: 'bg-violet/10 text-violet',
}

export default function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Who I am and what I build">About</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <GlassCard hover={false} className="p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                <img
                  src="/headshot.png"
                  alt="Wendi Kimberli"
                  className="w-40 h-40 rounded-2xl object-cover border border-white/10 shadow-sm shrink-0"
                />
                <p className="text-foreground-muted leading-relaxed text-lg">
                  {personal.bio[0]}
                </p>
              </div>
              <p className="text-foreground-muted leading-relaxed text-lg mt-4">
                {personal.bio[1]}
              </p>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key="bio-expanded"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    {personal.bio.slice(2).map((paragraph, i) => (
                      <p key={i} className="text-foreground-muted leading-relaxed text-lg mt-4">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 inline-flex items-center gap-1.5 text-pink text-sm font-medium tracking-wide hover:text-pink-light transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                <span className="border-b border-pink/40">
                  {expanded ? 'Read less' : 'Read more'}
                </span>
                {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </GlassCard>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <GlassCard className="p-5 flex items-start gap-4">
                  <div className={`p-2 rounded-lg shrink-0 ${colorMap[h.color]}`}>
                    <h.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{h.label}</h3>
                    <p className="text-foreground-muted text-sm">{h.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
