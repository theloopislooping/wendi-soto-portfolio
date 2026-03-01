import { motion } from 'motion/react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const current = [
  {
    status: 'In progress',
    title: 'PhD at King\'s College London',
    description: 'Finishing up my systematic literature review. Researching adaptive cybersecurity education, recursive feedback architectures, and human-AI co-evolution in training environments.',
    color: '#A3B18A',
  },
  {
    status: 'In progress',
    title: 'BridgetOS Full Patent Filing',
    description: 'Filing the full patent for BridgetOS before April 13, 2026 — identity governance, drift detection, and behavioral stability in agentic AI systems.',
    color: '#6366f1',
  },
]

export default function Now() {
  return (
    <section id="now" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="What I'm working on right now">Currently</SectionHeading>

        <div className="flex flex-col gap-5">
          {current.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard hover={false} className="p-6 flex items-start gap-4">
                <div className="flex flex-col items-center gap-1 shrink-0 mt-1">
                  <span className="relative flex h-3 w-3">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: item.color }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-3 w-3"
                      style={{ background: item.color }}
                    />
                  </span>
                </div>
                <div>
                  <p className="text-foreground-dim text-xs tracking-wide uppercase mb-1">{item.status}</p>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
