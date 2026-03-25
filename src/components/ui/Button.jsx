import { cn } from '../../lib/cn'

export default function Button({ children, variant = 'solid', className = '', href, ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer'

  const variants = {
    solid: 'bg-pink-dark text-white hover:bg-pink hover:shadow-md hover:shadow-pink/20',
    ghost: 'border border-white/8 bg-white/4 backdrop-blur-sm text-foreground hover:bg-white/8 hover:border-white/15',
  }

  const classes = cn(base, variants[variant], className)

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }

  return <button className={classes} {...props}>{children}</button>
}
