import { ResumeDetail as Wrap } from './ResumeDetail';
import { ResumeAbout } from './ResumeAbout';
import { ResumeSkill } from './ResumeSkill';
import { ResumeProject } from './ResumeProject';

export const ResumeDetail = Object.assign(Wrap, {
  About: ResumeAbout,
  Skill: ResumeSkill,
  Project: ResumeProject,
});
