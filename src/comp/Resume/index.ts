import { Resume as ResumeWrap } from './Resume';
import { ResumeDetail } from './ResumeDetail';
import { ResumeIntro } from './ResumeIntro';

export const Resume = Object.assign(ResumeWrap, {
  Intro: ResumeIntro,
  Detail: ResumeDetail,
});
