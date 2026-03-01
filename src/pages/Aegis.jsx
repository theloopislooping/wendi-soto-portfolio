import ProjectPage from './ProjectPage'
import { projects } from '../data/projects'

const project = projects.find((p) => p.slug === 'aegis')

export default function Aegis() {
  return <ProjectPage project={project} />
}
