import { Project } from '~/data';
import { ResumeProjectRespond } from '~/comp/Resume/ResumeExperience/view/ResumeProjectRespond';
import { ResumeProjectLink } from '~/comp/Resume/ResumeExperience/view/ResumeProjectLink';
import { SkillIcon } from '~/comp/_shared';

interface Props {
  project: Project;
}

export function ResumeProjectCard({ project }: Props) {
  const { period, job, name, description, contents, respond, skills, link } = project;

  return (
    <div className="project-card fade-target">
      <div className="project-work">
        <p className="project-period">{period}</p>
        <p className="project-job">{job}</p>
      </div>
      <div className="project-contents">
        <p className="project-title">
          {name}
          <ResumeProjectRespond respond={respond} />
        </p>
        <p className="project-sub-title">{description}</p>
        <ul className="project-description">
          {contents.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ResumeProjectLink link={link} />
        <div className="project-skills">
          {skills.map((skill) => (
            <SkillIcon key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
