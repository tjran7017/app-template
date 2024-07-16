import { ProjectModel } from '~/api';
import { ProjectDescription, ProjectThumb, ProjectSkill } from './view';

interface Props {
  project: ProjectModel;
}

export function ProjectCardItem({ project }: Props) {
  return (
    <li className="project-item-container">
      <ProjectThumb project={project} />
      <div className="detail">
        <ProjectDescription project={project} />
        <ProjectSkill project={project} />
      </div>
    </li>
  );
}
