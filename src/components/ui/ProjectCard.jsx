import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import GlassCard from './GlassCard'
import TechBadge from './TechBadge'

export default function ProjectCard({ slug, title, tagline, description, stack, color, badge }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <Link to={`/projects/${slug}`} className="block group no-underline">
        <div className="relative pb-3">
          {/* Bottom stack layer */}
          <div
            className="absolute bottom-0 left-3 right-3 h-full rounded-2xl border border-white/4 bg-white/2 backdrop-blur-sm"
          />
          {/* Middle stack layer */}
          <div
            className="absolute bottom-1.5 left-1.5 right-1.5 h-full rounded-2xl border border-white/5 bg-white/3 backdrop-blur-sm"
          />
          {/* Main card */}
          <GlassCard className="p-6 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-1 opacity-40 group-hover:opacity-70 transition-opacity"
              style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
            />
            <div className="flex items-center gap-2 mt-2 mb-1">
              <h3 className="font-serif text-xl font-medium text-foreground">{title}</h3>
              {badge && (
                <span
                  className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide"
                  style={{ background: color + '18', color }}
                >
                  {badge}
                </span>
              )}
            </div>
            <p className="text-sage-dark text-sm font-medium mb-3">{tagline}</p>
            <p className="text-foreground-muted text-sm leading-relaxed mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {stack.slice(0, 4).map((t) => (
                <TechBadge key={t}>{t}</TechBadge>
              ))}
            </div>
            <div className="flex items-center gap-1 text-pink text-sm font-medium group-hover:gap-2 transition-all">
              View Details <ArrowRight size={14} />
            </div>
          </GlassCard>
        </div>
      </Link>
    </motion.div>
  )
}
