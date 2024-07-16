import { ProjectModel } from '~/api';

interface Props {
  project: ProjectModel;
}

export function ProjectDescription({ project }: Props) {
  const { name, description, period } = project;

  return (
    <>
      <h3>{name}</h3>
      <p className="detail">{description}</p>
      <p>{period}</p>
    </>
  );
}
