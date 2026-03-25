import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
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
            <div className="max-w-lg">
              <p className="text-foreground-muted leading-relaxed mb-4">
                Interested in collaborating, discussing adaptive systems, or just want to say hi?
                I'd love to hear from you.
              </p>
              <p className="text-foreground-muted text-sm leading-relaxed mb-6 border-l-2 border-sage/30 pl-4">
                I'm open to research collaborations, speaking invitations, advisory roles in AI governance, and partnerships that serve underrepresented communities in cybersecurity.
              </p>
              {links.length > 0 && (
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.label !== 'Email' ? '_blank' : undefined}
                      rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 text-foreground-muted hover:text-pink transition-colors"
                    >
                      <link.icon size={18} />
                      <span className="text-sm">{link.value}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
