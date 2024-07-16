import { ProjectModel } from '~/api';

interface Props {
  project: ProjectModel;
}

export function ProjectSkill({ project }: Props) {
  const { tags } = project;

  return (
    <div className="tags-wrap">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
