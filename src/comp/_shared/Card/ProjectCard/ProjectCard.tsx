import { ProjectCardModel } from './ProjectCard.model';

interface Props {
  projectData: ProjectCardModel;
}

export function ProjectCard({ projectData }: Props) {
  const { key, src, name, desc, tags, period, job } = projectData;
  const descStrings = desc.split('/');

  return (
    <div className="projects-card-wrap">
      <div className="project-img">
        <img src={src} alt={name} />
      </div>
      <div className="project-info">
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={name.concat(tag)}>{tag}</span>
          ))}
        </div>
        <div className="project-title">
          <h3>{name}</h3>
        </div>
        <div className="project-description">
          {descStrings.map((value, index) => (
            <p key={key.concat(index.toString())}>- {value}</p>
          ))}
        </div>
        <div className="project-period">
          {period} / {job}
        </div>
      </div>
    </div>
  );
}
