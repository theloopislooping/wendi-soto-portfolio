import { motion } from 'motion/react'
import { PenLine, ArrowUpRight, Clock } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { posts } from '../../data/posts'

export default function Writing() {
  return (
    <section id="writing" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Essays on recursive systems, AI cognition, and the human loop">
          Writing
        </SectionHeading>

        <div className="flex flex-col gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-sage/15 text-sage-dark shrink-0 mt-1">
                    <PenLine size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                      {post.title}
                    </h3>
                    <p className="text-foreground-dim text-sm mb-2">
                      {post.date} &middot; {post.readTime}
                    </p>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    {post.link ? (
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sage-dark text-sm font-medium mt-3 hover:text-sage transition-colors no-underline"
                      >
                        Read essay <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-foreground-dim text-xs font-medium mt-3 tracking-wide uppercase">
                        <Clock size={12} />
                        Coming soon
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
