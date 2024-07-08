import { ResumeIntro as Wrap } from './ResumeIntro';
import { ResumeTitle } from './ResumeTitle';
import { ResumeNavigation } from './ResumeNavigation';
import { ResumeContact } from './ResumeContact';

export const ResumeIntro = Object.assign(Wrap, {
  Title: ResumeTitle,
  Nav: ResumeNavigation,
  Contact: ResumeContact,
});
