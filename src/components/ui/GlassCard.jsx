import { cn } from '../../lib/cn'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-sage/15 bg-white/50 backdrop-blur-xl shadow-sm',
        hover && 'transition-all duration-300 hover:bg-white/70 hover:border-sage/30 hover:shadow-md hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
