import { Skill } from '~/data';
import { useId, useMemo } from 'react';
import { Tooltip } from 'react-tooltip';

interface Props {
  skill: Skill;
}

export function SkillIcon({ skill }: Props) {
  const randomId = useId();
  const id = skill + randomId;

  const title = useMemo(() => {
    function capitalizeFirstLetter(value: string) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    switch (skill) {
      case 'nextjs':
        return 'Next.js';
      case 'react-query':
        return 'React Query';
      case 'spring-boot':
        return 'Spring Boot';
      case 'html':
      case 'css':
        return skill.toUpperCase();
      default:
        return capitalizeFirstLetter(skill);
    }
  }, []);

  return (
    <>
      <div className="skill-icon" data-tooltip-id={id} data-tooltip-content={title}>
        <img src={`/assets/image/skills/${skill}.svg`} alt={skill} />
      </div>
      <Tooltip id={id} />
    </>
  );
}
