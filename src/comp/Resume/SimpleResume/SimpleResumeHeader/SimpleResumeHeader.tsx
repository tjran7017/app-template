import { SimpleResumeTitle } from './SimpleResumeTitle';
import { SimpleResumeNavigation } from './SimpleResumeNavigation';
import { SimpleResumeContact } from './SimpleResumeContact';

export function SimpleResumeHeader() {
  return (
    <div className="resume-left">
      <SimpleResumeTitle />
      <SimpleResumeNavigation />
      <SimpleResumeContact />
    </div>
  );
}
