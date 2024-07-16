import { useContext } from 'react';
import { SimpleResumeAbout } from './SimpleResumeAbout';
import { SimpleResumeSkill } from './SimpleResumeSkill';
import { SimpleResumeProject } from './SimpleResumeProject';
import { ResumeContext } from '../SimpleResume.model';

export function SimpleResumeContents() {
    const { value } = useContext(ResumeContext);

  return (
    <div className="resume-right">
        {value === 'about' && <SimpleResumeAbout />}
        {value === 'skill' && <SimpleResumeSkill />}
        {value === 'project' && <SimpleResumeProject />}
    </div>
  );
}
