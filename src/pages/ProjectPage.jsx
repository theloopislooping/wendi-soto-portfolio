import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  Shield, Users, Radio, Palette, Timer, Network,
  BookOpen, Brain, Layers, GitBranch, ShieldAlert, Sparkles,
  ClipboardList, FlaskConical, Radar, TrendingUp, Building2, MessageSquareText,
  Landmark, Heart, Smartphone, AlertTriangle, CreditCard,
  ArrowLeft, ArrowRight, ExternalLink,
} from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import TechBadge from '../components/ui/TechBadge'
import { projects } from '../data/projects'

const iconMap = {
  Shield, Users, Radio, Palette, Timer, Network,
  BookOpen, Brain, Layers, GitBranch, ShieldAlert, Sparkles,
  ClipboardList, FlaskConical, Radar, TrendingUp, Building2, MessageSquareText,
  Landmark, Heart, Smartphone, AlertTriangle, CreditCard,
}

export default function ProjectPage({ project }) {
  const idx = projects.findIndex((p) => p.slug === project.slug)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-12 h-1 rounded-full mb-6 opacity-60"
              style={{ background: project.color }}
            />
            <h1 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mb-3">
              {project.title}
            </h1>
            <p className="text-sage-dark text-lg font-medium mb-6">{project.tagline}</p>
            <div className="flex flex-wrap gap-2 items-center">
              {project.stack.map((t) => (
                <TechBadge key={t}>{t}</TechBadge>
              ))}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 ml-2 px-4 py-1.5 rounded-full border border-sage/25 bg-white/40 text-sage-dark text-xs font-medium hover:bg-white/60 hover:border-sage/40 transition-all no-underline"
                >
                  <ExternalLink size={12} />
                  Visit Site
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard hover={false} className="p-8">
              <h2 className="font-serif text-xl font-medium text-foreground mb-4">Overview</h2>
              <p className="text-foreground-muted leading-relaxed">{project.overview}</p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-medium text-foreground mb-8"
          >
            Key Features
          </motion.h2>

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
            {project.features.map((f) => {
              const Icon = iconMap[f.icon]
              return (
                <motion.div
                  key={f.title}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                >
                  <GlassCard className="p-6 h-full">
                    {Icon && (
                      <div className="p-2 rounded-lg bg-sage/15 text-sage-dark inline-block mb-3">
                        <Icon size={20} />
                      </div>
                    )}
                    <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-foreground-muted text-sm leading-relaxed">{f.description}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      {project.architecture && (
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-2xl font-medium text-foreground mb-8"
            >
              Architecture
            </motion.h2>

            <div className="flex flex-col gap-6">
              {project.architecture.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard hover={false} className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: project.color + '20', color: project.color }}
                      >
                        {i + 1}
                      </span>
                      {a.title}
                    </h3>
                    <p className="text-foreground-muted text-sm leading-relaxed ml-8">{a.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prev ? (
              <Link
                to={`/projects/${prev.slug}`}
                className="flex items-center gap-2 text-foreground-muted hover:text-sage-dark transition-colors no-underline"
              >
                <ArrowLeft size={16} />
                <span className="text-sm">{prev.title}</span>
              </Link>
            ) : <div />}

            <Link
              to="/home#projects"
              className="text-foreground-dim hover:text-foreground transition-colors text-sm no-underline"
            >
              All Projects
            </Link>

            {next ? (
              <Link
                to={`/projects/${next.slug}`}
                className="flex items-center gap-2 text-foreground-muted hover:text-sage-dark transition-colors no-underline"
              >
                <span className="text-sm">{next.title}</span>
                <ArrowRight size={16} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  )
}
