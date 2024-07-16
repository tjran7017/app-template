import { useEffect, useState } from 'react';
import { ProjectModel, findProjectsByCompany } from '~/api';
import { ProjectCardList } from '~/comp/_shared';
import { SimpleResumeContentsCompany } from './view';
import { SimpleResumeSection } from '../view';

export function SimpleResumeProject() {
  //
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const companyText = 'Nextree (2021.01 -2024.02)';

  useEffect(() => {
    findProjectsByCompany().then((result) => setProjects(result));
  }, []);

  return (
    <SimpleResumeSection className="contents-section-container fade">
      <div className="project-wrap">
        <SimpleResumeContentsCompany text={companyText} />
        <ProjectCardList projects={projects} />
      </div>
    </SimpleResumeSection>
  );
}
