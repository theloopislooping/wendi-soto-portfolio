import ProjectPage from './ProjectPage'
import { projects } from '../data/projects'

const project = projects.find((p) => p.slug === 'bridgetos')

export default function BridgetOS() {
  return <ProjectPage project={project} />
}
