import { useEffect } from 'react';

export function MainNav() {
  const navs = ['skill', 'work', 'project'];

  useEffect(() => {
    const lis = document.querySelectorAll('li');
    const skill = document.getElementById(navs[0]);
    const work = document.getElementById(navs[1]);
    lis[0].classList.add('show');

    if (!skill || !work) return;

    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const skillMiddle = skill.offsetHeight / 2;
      const workMiddle = skill.offsetHeight + work.offsetHeight;

      function editClassByIndex(lis: NodeListOf<HTMLLIElement>, targetIndex: number) {
        lis.forEach((li, index) => {
          index === targetIndex ? li.classList.add('show') : li.classList.remove('show');
        });
      }

      if (scrollPosition <= skillMiddle) editClassByIndex(lis, 0);
      else if (scrollPosition >= skillMiddle && scrollPosition < workMiddle) editClassByIndex(lis, 1);
      else editClassByIndex(lis, 2);
    });
  }, []);

  const handleClickNav = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fade">
      <ul className="nav ul">
        {navs.map((nav) => (
          <li key={nav} className="nav li" onClick={handleClickNav(nav)}>
            {nav.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
