import { motion } from 'motion/react'
import { FileText, ArrowUpRight } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { papers } from '../../data/papers'

export default function Papers() {
  return (
    <section id="papers" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Research publications and working papers">White Papers</SectionHeading>

        <div className="flex flex-col gap-6">
          {papers.map((paper, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-pink/15 text-pink-dark shrink-0 mt-1">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                      {paper.title}
                    </h3>
                    <p className="text-sage-dark text-sm font-medium mb-2">{paper.venue}</p>
                    <p className="text-foreground-muted text-sm leading-relaxed">{paper.abstract}</p>
                    {paper.link && paper.link !== '#' && (
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sage-dark text-sm font-medium mt-3 hover:text-sage transition-colors no-underline"
                      >
                        Read Paper <ArrowUpRight size={14} />
                      </a>
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
