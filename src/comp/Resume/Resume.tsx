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
          <ResumeDetail.About tags={['#프론트엔드', '#고민하는', '#즐기는', '#배움이 빠른', '#호기심 많은']} />
          <ResumeDetail.Work />
          <ResumeDetail.Project />
        </ResumeDetail>
      </div>
    </ResumeContext.Provider>
  );
}
