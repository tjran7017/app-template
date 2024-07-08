import { ResumeDetail as Wrap } from './ResumeDetail';
import { ResumeAbout } from './ResumeAbout';
import { ResumeWork } from './ResumeWork';
import { ResumeProject } from './ResumeProject';

export const ResumeDetail = Object.assign(Wrap, {
  About: ResumeAbout,
  Work: ResumeWork,
  Project: ResumeProject,
});
