import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { motion } from 'motion/react'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import ThemeToggle from '../ui/ThemeToggle'
import { cn } from '../../lib/cn'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'writing', label: 'Writing' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)
  const itemRefs = useRef({})
  const location = useLocation()
  const isHome = location.pathname === '/home'
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id))

  const highlightedId = hoveredId || activeId

  useEffect(() => {
    if (!highlightedId || !navRef.current) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }))
      return
    }
    const el = itemRefs.current[highlightedId]
    if (el) {
      const navRect = navRef.current.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      setPillStyle({
        left: elRect.left - navRect.left - 8,
        width: elRect.width + 16,
        opacity: 1,
      })
    }
  }, [highlightedId])

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-heavy rounded-full px-6 py-3 flex items-center gap-8 shadow-md">
        {isHome ? (
          <a href="#hero" className="font-serif text-base font-medium text-foreground whitespace-nowrap">
            Wendi Kimberli
          </a>
        ) : (
          <Link to="/home" className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors no-underline">
            <ArrowLeft size={14} />
            <span className="font-serif text-base font-medium text-foreground whitespace-nowrap">Wendi Kimberli</span>
          </Link>
        )}

        {isHome && (
          <>
            <div className="w-px h-4 bg-sage/20" />
            <div ref={navRef} className="hidden md:flex items-center gap-1 relative">
              {/* Sliding pill */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-8 rounded-full bg-sage/12"
                animate={{
                  left: pillStyle.left,
                  width: pillStyle.width,
                  opacity: pillStyle.opacity,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  ref={(el) => (itemRefs.current[item.id] = el)}
                  href={`#${item.id}`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={cn(
                    'relative z-10 px-3 py-1 text-sm font-medium transition-all duration-200 no-underline',
                    activeId === item.id
                      ? 'text-sage-dark'
                      : 'text-foreground-muted hover:text-foreground hover:scale-110'
                  )}
                >
                  {item.label}
                  {activeId === item.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-sage-dark"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </>
        )}

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isHome && (
            <button
              className="md:hidden text-foreground-muted hover:text-foreground transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && isHome && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 glass-heavy rounded-2xl p-4 flex flex-col gap-3 shadow-md"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                'text-sm font-medium transition-colors px-3 py-2 rounded-xl no-underline',
                activeId === item.id
                  ? 'text-sage-dark bg-sage/10'
                  : 'text-foreground-muted hover:text-foreground hover:bg-white/30'
              )}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
