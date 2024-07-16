import type { Nav, NavTuple } from '../../SimpleResume.model';

interface Props {
  navs: NavTuple;
  onClick: (nav: Nav) => void;
}

export function SimpleResumeHeaderNavList({ navs, onClick }: Props) {
  const height = `${70 / navs.length}%`;

  const handleClickNav = (value: Nav) => () => onClick(value);

  return (
    <ul className="nav ul">
      {navs.map((nav) => (
        <li key={nav} className="nav li" style={{ height }}>
          <span onClick={handleClickNav(nav)}>{nav.toUpperCase()}</span>
        </li>
      ))}
    </ul>
  );
}
