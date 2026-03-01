import { motion } from 'motion/react'
import GlassCard from '../ui/GlassCard'

const stats = [
  { number: '65', label: 'Countries visited', sublabel: '6 continents' },
  { number: '3', label: 'Languages', sublabel: 'EN / ES / FR' },
  { number: '450K', label: 'Followers', sublabel: 'Life Confessions' },
  { number: 'PhD', label: "King's College London", sublabel: 'In progress' },
]

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <GlassCard className="p-6 text-center">
                <p className="font-serif text-3xl sm:text-4xl font-medium text-sage-dark mb-1">{s.number}</p>
                <p className="text-foreground text-sm font-medium">{s.label}</p>
                <p className="text-foreground-dim text-xs mt-1">{s.sublabel}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
