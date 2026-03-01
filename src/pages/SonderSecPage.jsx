import ProjectPage from './ProjectPage'
import { projects } from '../data/projects'

const project = projects.find((p) => p.slug === 'sondersec')

export default function SonderSecPage() {
  return <ProjectPage project={project} />
}
