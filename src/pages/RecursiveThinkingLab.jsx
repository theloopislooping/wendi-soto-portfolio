import ProjectPage from './ProjectPage'
import { projects } from '../data/projects'

const project = projects.find((p) => p.slug === 'recursive-thinking-lab')

export default function RecursiveThinkingLab() {
  return <ProjectPage project={project} />
}
