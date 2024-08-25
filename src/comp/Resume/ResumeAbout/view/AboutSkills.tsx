import { SkillIcon } from '~/comp/_shared';

export function AboutSkills() {
  return (
    <section className="skills fade-target">
      <div className="skill-wrap">
        <div className="skill-wrap-title">FRONT-END</div>
        <div className="skill-icon-wrap">
          <SkillIcon skill="html" />
          <SkillIcon skill="css" />
          <SkillIcon skill="javascript" />
          <SkillIcon skill="typescript" />
          <SkillIcon skill="react" />
          <SkillIcon skill="nextjs" />
          <SkillIcon skill="vite" />
          <SkillIcon skill="rollup" />
          <SkillIcon skill="mobx" />
          <SkillIcon skill="react-query" />
        </div>
      </div>
      <div className="skill-wrap">
        <div className="skill-wrap-title">BACK-END</div>
        <div className="skill-icon-wrap">
          <SkillIcon skill="java" />
          <SkillIcon skill="spring-boot" />
          <SkillIcon skill="mysql" />
        </div>
      </div>

      <div className="skill-wrap">
        <div className="skill-wrap-title">ETC</div>
        <div className="skill-icon-wrap">
          <SkillIcon skill="nginx" />
          <SkillIcon skill="kafka" />
        </div>
      </div>
    </section>
  );
}
