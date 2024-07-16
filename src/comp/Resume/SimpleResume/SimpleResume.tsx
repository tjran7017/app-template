import { useState } from 'react';
import { SimpleResumeHeader } from './SimpleResumeHeader';
import { SimpleResumeContents } from './SimpleResumeContents';
import { ResumeContext } from './SimpleResume.model';
import type { Nav } from './SimpleResume.model';

export function SimpleResume() {
  const [value, setValue] = useState<Nav>('about');

  return (
    <ResumeContext.Provider value={{ value, setValue }}>
      <div className="resume-container">
        <SimpleResumeHeader />
        <SimpleResumeContents />
      </div>
    </ResumeContext.Provider>
  );
}
