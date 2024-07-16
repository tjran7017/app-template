import { SimpleResumeSection } from '~/comp/Resume/SimpleResume/view';
import {SimpleResumeContentsSkillBall} from './view';

export function SimpleResumeSkill() {
  return (
    <SimpleResumeSection className="contents-section-container reduction">
      <SimpleResumeContentsSkillBall />
    </SimpleResumeSection>
  );
}
