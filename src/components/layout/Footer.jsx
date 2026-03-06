import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../../data/personal'

export default function Footer() {
  return (
    <footer className="border-t border-sage/10 bg-white/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-foreground-dim text-sm">
          &copy; {new Date().getFullYear()} {personal.name}
        </p>
        <div className="flex items-center gap-4">
          {personal.github && (
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-foreground-dim hover:text-sage-dark transition-colors">
              <Github size={18} />
            </a>
          )}
          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground-dim hover:text-sage-dark transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          {personal.email && (
            <a href={`mailto:${personal.email}`} className="text-foreground-dim hover:text-sage-dark transition-colors">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
