import type { ProjectCardModel } from './ProjectCard.model';

interface Props {
  company: string;
  projects: ProjectCardModel[];
}

export function ProjectCard({ company, projects }: Props) {
  return (
    <>
      <div className="project-card-title">Project in {company}</div>
      {projects.map((project) => (
        <div className="project-card" key={project.name}>
          <div className="card-body">
            <h2>{project.name}</h2>
            <p className="description">{project.description}</p>
            <div className="info">
              <div className="duration">
                <ins>◷</ins>
                <p>{project.period}</p>
              </div>
            </div>
            <hr />
            <div className="skills">
              {project.skills.map((skill) => (
                <span key={project.name + skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
