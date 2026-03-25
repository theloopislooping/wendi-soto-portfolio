import { cn } from '../../lib/cn'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/6 bg-white/4 backdrop-blur-xl shadow-sm',
        hover && 'glow-hover transition-all duration-300 hover:bg-white/8 hover:border-white/12 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
