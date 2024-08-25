import { ResumeNavigation, ResumeProjects, ResumeWorks } from './view';

export function ResumeExperience() {
  return (
    <section className="experience-container bg-dark">
      <ResumeNavigation />
      <div className="contents-container">
        <ResumeWorks />
        <ResumeProjects />
      </div>
    </section>
  );
}
