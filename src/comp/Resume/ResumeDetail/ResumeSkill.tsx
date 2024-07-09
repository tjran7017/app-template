import { useContext, useEffect } from 'react';
import { ResumeContext } from '../Resume.model';
import TagCloud from 'TagCloud';

export function ResumeSkill() {
  //
  const id = 'skill';
  const { value } = useContext(ResumeContext);

  useEffect(() => {
    if (value !== id) return;
    const texts = [
      'React',
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'SCSS',
      'MobX',
      'Rollup',
      'Vite',
      'React query',
      'Next.js',
      'Storybook',
      'Axios',
    ];

    const tagCloud = TagCloud('.sphere', texts, {
      radius: 230,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      // deceleration: 135,
      keep: true,
      containerClass: 'skill-ball',
      itemClass: 'skill-text',
    });

    tagCloud.resume();
  }, [value]);

  if (value !== id) return null;
  return (
    <section className="section-wrapper" id={id}>
      <span className="sphere"></span>
    </section>
  );
}
