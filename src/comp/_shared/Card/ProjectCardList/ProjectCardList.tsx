import { ProjectModel } from '~/api';
import { ProjectCardItem } from './ProjectCardItem';

interface Props {
  projects: ProjectModel[];
}

export function ProjectCardList({ projects }: Props) {
  return (
    <ul className="project-list-container">
      {projects.map((project) => (
        <ProjectCardItem key={project.id} project={project} />
      ))}
    </ul>
  );
}
