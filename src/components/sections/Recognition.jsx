import { motion } from 'motion/react'
import { Trophy, MapPin, Calendar } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const scholarship = {
  title: 'IT Audit Scholarship',
  issuer: 'ISACA London Chapter',
  date: 'Jan 2026',
}

const conferences = [
  { name: 'Black Hat Europe 2025', date: 'Dec 2025', location: 'London' },
  { name: 'BETT UK 2026', date: 'Jan 2026', location: 'London' },
  { name: 'AI & Big Data Expo Global', date: 'Feb 2026', location: 'Olympia London' },
]

export default function Recognition() {
  return (
    <section id="recognition" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Awards and conferences">Recognition</SectionHeading>

        {/* Scholarship highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <GlassCard hover={false} className="p-6 border-amber-300/30 bg-amber-50/30">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-amber-100/60 text-amber-700 shrink-0 mt-0.5">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                  {scholarship.title}
                </h3>
                <p className="text-foreground-dim text-sm">
                  {scholarship.issuer} &middot; {scholarship.date}
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Conferences */}
        <div className="grid sm:grid-cols-3 gap-4">
          {conferences.map((conf, i) => (
            <motion.div
              key={conf.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-5 h-full">
                <h4 className="font-serif text-sm font-medium text-foreground mb-3 leading-snug">
                  {conf.name}
                </h4>
                <div className="flex flex-col gap-1.5">
                  <span className="flex items-center gap-1.5 text-foreground-muted text-xs">
                    <Calendar size={12} className="text-sage-dark shrink-0" />
                    {conf.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-foreground-muted text-xs">
                    <MapPin size={12} className="text-sage-dark shrink-0" />
                    {conf.location}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
