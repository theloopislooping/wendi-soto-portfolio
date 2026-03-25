import { motion } from 'motion/react'
import GlassCard from '../ui/GlassCard'

const paragraphs = [
  'Adaptive AI education is advancing rapidly — modelling learner behaviour, personalising content in real time, building systems that respond to how people actually think. But this progress has been built almost exclusively for the normative population. The people who already have access, infrastructure, and institutional support.',
  'Meanwhile, cybersecurity training for marginalised communities is expanding — more programs, more funding, more awareness. But the methods haven\'t kept up. The training is still static, linear, and built on assumptions about learning that were outdated a decade ago. It treats all learners the same and hopes repetition will be enough.',
  'These two fields have never intersected. Adaptive systems don\'t account for structural disadvantage. Community-focused programs don\'t leverage what we now know about cognition. The result is a gap — and it\'s the people carrying the most risk who fall into it.',
  'My PhD focuses on closing that gap.',
]

export default function Thesis() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard hover={false} className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={
                  i === paragraphs.length - 1
                    ? 'font-serif text-xl font-medium gradient-text'
                    : 'text-foreground-muted leading-relaxed'
                }
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </GlassCard>
      </div>
    </section>
  )
}
