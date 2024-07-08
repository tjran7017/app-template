import { useContext, useEffect } from 'react';
import { ResumeContext, Navs } from '../Resume.model';
import type { Nav } from '../Resume.model';

export function ResumeNavigation() {
  const { value, setValue } = useContext(ResumeContext);
  const navs = Navs;
  const height = `${70 / navs.length}%`;

  useEffect(() => {
    const lis = document.querySelectorAll('li');
    const targetIndex = navs.indexOf(value);

    lis.forEach((li, index) => {
      index === targetIndex ? li.classList.add('show') : li.classList.remove('show');
    });
  }, [value]);

  const handleClickNav = (value: Nav) => () => {
    setValue(value);
  };

  return (
    <section className="fade" style={{ flexGrow: '1' }}>
      <ul className="nav ul">
        {navs.map((nav) => (
          <li key={nav} className="nav li" style={{ height }}>
            <span onClick={handleClickNav(nav)}>{nav.toUpperCase()}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
