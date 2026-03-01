import { motion } from 'motion/react'

export default function SectionHeading({ children, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground inline-block mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
