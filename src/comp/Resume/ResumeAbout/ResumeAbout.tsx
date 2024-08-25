import { AboutSkills, AboutTerminal } from './view';

export function ResumeAbout() {
  return (
    <section className="about-container bg-dark">
      <div className="about-title">About me</div>
      <div className="about-contents">
        <AboutSkills />
        <AboutTerminal />
      </div>
    </section>
  );
}
