import { motion } from 'motion/react'
import { Newspaper, ArrowUpRight, Clock } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const mentions = []

export default function Press() {
  if (mentions.length === 0) return null

  return (
    <section id="press" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Publications and features">Press</SectionHeading>

        <div className="flex flex-col gap-4">
          {mentions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-sage/15 text-sage-dark shrink-0 mt-0.5">
                    <Newspaper size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-foreground-dim text-sm mb-2">
                      {item.outlet} &middot; {item.date}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-pink text-sm font-medium hover:text-pink-light transition-colors no-underline"
                      >
                        Read article <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-foreground-dim text-xs font-medium tracking-wide uppercase">
                        <Clock size={12} />
                        {item.status === 'under-review' ? 'Under review' : 'Coming soon'}
                      </span>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
