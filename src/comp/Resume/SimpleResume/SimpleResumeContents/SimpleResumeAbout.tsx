import { SimpleResumeContentsTerminal } from './view';
import { SimpleResumeSection } from '../view';

export function SimpleResumeAbout() {
  return (
    <SimpleResumeSection className="contents-section-container">
      <SimpleResumeContentsTerminal />
    </SimpleResumeSection>
  );
}
