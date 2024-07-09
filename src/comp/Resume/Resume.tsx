import { useState } from 'react';
import { ResumeIntro } from './ResumeIntro';
import { ResumeDetail } from './ResumeDetail';
import { ResumeContext } from './Resume.model';
import type { Nav } from './Resume.model';

export function Resume() {
  const [value, setValue] = useState<Nav>('about');

  return (
    <ResumeContext.Provider value={{ value, setValue }}>
      <div className="resume-container">
        <ResumeIntro>
          <ResumeIntro.Title />
          <ResumeIntro.Nav />
          <ResumeIntro.Contact />
        </ResumeIntro>
        <ResumeDetail>
          <ResumeDetail.About />
          <ResumeDetail.Skill />
          <ResumeDetail.Project />
        </ResumeDetail>
      </div>
    </ResumeContext.Provider>
  );
}
