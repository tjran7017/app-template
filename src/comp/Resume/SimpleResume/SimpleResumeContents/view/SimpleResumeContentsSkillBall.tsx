import { useEffect } from 'react';
import TagCloud from 'TagCloud';

export function SimpleResumeContentsSkillBall() {
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

  useEffect(() => {
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
  }, []);

  return <span className="sphere"></span>;
}
