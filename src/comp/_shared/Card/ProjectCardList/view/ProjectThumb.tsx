import { ProjectModel } from '~/api';

interface Props {
  project: ProjectModel;
}

export function ProjectThumb({ project }: Props) {
  const { src, name } = project;

  return (
    <div className="thumb-wrap">
      <img src={src} alt={name} />
    </div>
  );
}
