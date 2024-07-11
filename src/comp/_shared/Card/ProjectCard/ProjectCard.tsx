import { ProjectCardModel } from './ProjectCard.model';

interface Props {
  projectData: ProjectCardModel[];
}

export function ProjectCard({ projectData }: Props) {
  return (
    <ul className="project-list-wrap">
      {projectData.map((project) => (
        <li key={project.key} className="project-item">
          <div className="thumb">
            <img src={project.src} alt={project.name} />
          </div>
          <div className="description">
            <h3>{project.name}</h3>
            <p className="detail">{project.desc}</p>
            <p>{project.period}</p>
            <div className="tags-wrap">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
