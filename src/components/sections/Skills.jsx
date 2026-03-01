import { motion } from 'motion/react'
import { Monitor, Server, Database, Brain, Shield, Cloud, BookOpen, FlaskConical, Layers, Sparkles } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import TechBadge from '../ui/TechBadge'
import { skillCategories } from '../../data/skills'

const iconMap = { Monitor, Server, Database, Brain, Shield, Cloud, BookOpen, FlaskConical, Layers, Sparkles }

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Technologies and tools I work with">Tech Stack</SectionHeading>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon]
            return (
              <motion.div
                key={cat.title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <div className="p-2 rounded-lg bg-sage/15 text-sage-dark">
                        <Icon size={18} />
                      </div>
                    )}
                    <h3 className="font-semibold text-foreground">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <TechBadge key={skill}>{skill}</TechBadge>
                    ))}
                  </div>
                  {cat.note && (
                    <p className="text-foreground-muted text-xs leading-relaxed mt-3 italic">{cat.note}</p>
                  )}
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
