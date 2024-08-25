import { ResumeIntro } from './ResumeIntro';
import { ResumeWidget } from './ResumeWidget';
import { ResumeAbout } from './ResumeAbout';
import { ResumeExperience } from './ResumeExperience';
import { useEffect } from 'react';

export function ResumeContainer() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('in-View');
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    const targets = document.querySelectorAll('.fade-target');
    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <ResumeWidget />
      <ResumeIntro />
      <ResumeAbout />
      <ResumeExperience />
    </>
  );
}
