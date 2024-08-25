import { useEffect, useRef, MouseEvent } from 'react';

export function ResumeNavigation() {
  const workNavRef = useRef<HTMLLIElement | null>(null);
  const projectNavRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ref = entry.target.id === 'projects' ? projectNavRef : workNavRef;
          if (entry.isIntersecting) {
            ref.current?.classList.add('focus');
          } else {
            ref.current?.classList.remove('focus');
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    const works = document.getElementById('works');
    const projects = document.getElementById('projects');
    if (works) observer.observe(works);
    if (projects) observer.observe(projects);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClickNav = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="experience-nav">
      <ul>
        <li ref={workNavRef}>
          <a href="" onClick={handleClickNav('works')}>
            Works
          </a>
        </li>
        <li ref={projectNavRef}>
          <a href="" onClick={handleClickNav('projects')}>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
