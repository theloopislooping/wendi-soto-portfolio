import { motion } from 'motion/react'
import { ExternalLink, ShieldAlert, Heart, Smartphone, AlertTriangle, Landmark, CreditCard } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const programs = [
  { icon: Landmark, title: 'Government Scams & Impersonation', description: 'Recognizing, verifying, and reporting fake calls and letters from Social Security, Medicare, or the IRS.' },
  { icon: Heart, title: 'Romance & Caregiver Exploitation', description: 'Spotting red flags early in emotional manipulation that leads to financial abuse — without shame.' },
  { icon: Smartphone, title: 'Tech Support & Password Traps', description: 'Staying safe from pop-ups, phishing emails, and scam tech support calls targeting older adults.' },
  { icon: AlertTriangle, title: 'What to Do After a Scam', description: 'Recovery steps, emotional support, and how to stop further harm if you\'ve been targeted.' },
  { icon: CreditCard, title: 'Banking & Payment App Fraud', description: 'Spotting suspicious activity and protecting digital money transfers on Zelle, PayPal, and Venmo.' },
  { icon: ShieldAlert, title: 'Fake Charities & Donation Scams', description: 'Verifying charities and donating safely — because scammers prey on good intentions.' },
]

export default function SonderSec() {
  return (
    <section id="sondersec" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Trauma-informed cybersecurity training for marginalised communities">SonderSec</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <GlassCard hover={false} className="p-8 text-center">
            <h3 className="font-serif text-lg font-medium text-foreground mb-4">Giving Back by Protecting What Matters.</h3>
            <p className="text-foreground-muted leading-relaxed mb-4">
              SonderSec was founded to close the cybersecurity gap for the people most often left behind — our elders, caregivers, and underserved communities.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Giving back means equipping them with the knowledge to recognize scams, the tools to protect their information, and the confidence to stay connected without fear.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Your support helps us run hands-on workshops, provide trauma-aware training, and keep vulnerable communities one step ahead of online threats.
            </p>
            <p className="text-foreground italic text-sm">
              When we protect the most overlooked, we protect everyone.
            </p>
            <a
              href="https://sondersec.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 px-5 py-2 rounded-full border border-pink/25 bg-white/40 text-pink-dark text-sm font-medium hover:bg-white/60 hover:border-pink/40 transition-all no-underline"
            >
              <ExternalLink size={13} />
              Visit sondersec.org
            </a>
          </GlassCard>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-xl font-medium text-foreground text-center mb-8"
        >
          What We Teach
        </motion.h3>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {programs.map((p) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <GlassCard className="p-5 h-full">
                <div className="p-2 rounded-lg bg-pink/15 text-pink-dark inline-block mb-3">
                  <p.icon size={18} />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-2">{p.title}</h4>
                <p className="text-foreground-muted text-sm leading-relaxed">{p.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
