import type { SkillModel } from './MainSkill.model';

export function MainSkill() {
  //
  const skills: SkillModel[] = [
    { name: 'React.js', percent: 50 },
    { name: 'Javascript', percent: 50 },
    { name: 'Typescript', percent: 50 },
    { name: 'HTML', percent: 50 },
    { name: 'CSS', percent: 25 },
  ];

  const handleHover = () => {
    // todo
  };

  return (
    <div className="section-wrapper fade" id="skill">
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.name}>
            <p>
              {skill.name}
              <span></span>
              <span className={`percent-${skill.percent}`}></span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
