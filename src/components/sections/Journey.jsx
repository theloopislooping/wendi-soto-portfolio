import { motion } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import ConfessionsGallery from '../ui/ConfessionsGallery'

const timeline = [
  {
    period: '2 years, 450K followers',
    title: 'Life Confessions',
    description: 'An anonymous confessions platform on Tumblr where people submitted their secrets and I paired them with visuals. Posts routinely hit tens of thousands of reblogs and likes. 450K followers in two years — an early lesson in how people behave when given safe, anonymous space to be honest.',
    quote: '"Life is messy. And we\'re only human. We all do things we\'re ashamed of. We all do things we regret. We all carry burdens. We all have secrets. We all have dreams."',
    color: '#C9A96E',
  },
  {
    period: 'Early career',
    title: 'Clinical Science',
    description: 'Biochemistry, laboratory work, and vaccine research. Where the question of how systems change behaviour first took root.',
    color: '#E8B4B8',
  },
  {
    period: 'Professional',
    title: 'Cybersecurity Project Management',
    description: 'Managing security initiatives at scale. Learned that the biggest vulnerabilities are human, not technical.',
    color: '#A3B18A',
  },
  {
    period: 'Founded',
    title: 'SonderSec',
    description: 'Nonprofit designing trauma-informed cybersecurity training for marginalised communities facing disproportionate digital risk.',
    color: '#E8B4B8',
  },
  {
    period: 'Independent R&D',
    title: 'BridgetOS',
    description: 'Built a technical governance layer for agentic AI — identity governance, drift detection, and behavioral stability.',
    color: '#6366f1',
  },
  {
    period: "King's College London",
    title: 'PhD Research',
    description: 'Adaptive cybersecurity education, recursive feedback architectures, and human-AI co-evolution. Building an AI system that models user cognition in real time.',
    color: '#A3B18A',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="The path looks nonlinear. The question has been constant.">Journey</SectionHeading>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-sage/20" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Dot */}
                <div
                  className="absolute left-2.5 sm:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 border-white"
                  style={{ background: item.color }}
                />

                <p className="text-foreground-dim text-xs tracking-wide uppercase mb-1">{item.period}</p>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{item.description}</p>
                {item.quote && (
                  <p className="text-foreground-dim text-sm italic mt-3 pl-4 border-l-2 border-pink/30">{item.quote}</p>
                )}
                {item.title === 'Life Confessions' && <ConfessionsGallery />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
