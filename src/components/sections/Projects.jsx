import { motion } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="What I've been building">Projects</SectionHeading>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-foreground-muted text-sm leading-relaxed max-w-2xl mx-auto text-center mb-10 -mt-4"
        >
          BridgetOS is the commercial governance product. Aegis is the doctoral research prototype. SonderSec is the nonprofit arm. The Recursive Thinking Lab is a cognitive assessment platform built on the same drift detection engine.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
