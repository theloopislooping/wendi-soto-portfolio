import { motion } from 'motion/react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { personal } from '../../data/personal'

export default function Contact() {
  const links = [
    personal.email && { icon: Mail, label: 'Email', href: `mailto:${personal.email}`, value: personal.email },
    personal.github && { icon: Github, label: 'GitHub', href: personal.github, value: personal.github.replace('https://github.com/', '') },
    personal.linkedin && { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin, value: 'LinkedIn Profile' },
  ].filter(Boolean)

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Let's connect">Get In Touch</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard hover={false} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Interested in collaborating, discussing adaptive systems, or just want to say hi?
                  I'd love to hear from you.
                </p>
                {links.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.label !== 'Email' ? '_blank' : undefined}
                        rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 text-foreground-muted hover:text-sage-dark transition-colors"
                      >
                        <link.icon size={18} />
                        <span className="text-sm">{link.value}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white/60 border border-sage/15 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground-dim focus:outline-none focus:border-sage/40 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/60 border border-sage/15 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground-dim focus:outline-none focus:border-sage/40 transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="bg-white/60 border border-sage/15 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground-dim focus:outline-none focus:border-sage/40 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-pink text-white hover:bg-pink-dark hover:shadow-md transition-all cursor-pointer"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
