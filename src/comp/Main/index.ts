import { Main as MainWrap } from './Main';
import { MainTitle } from './MainTitle';
import { MainNav } from './MainNav';
import { MainSkill } from './MainSkill';
import { MainWork } from './MainWork';
import { MainProject } from './MainProject';

export const Main = Object.assign(MainWrap, {
  Title: MainTitle,
  Nav: MainNav,
  Skill: MainSkill,
  Work: MainWork,
  Project: MainProject,
});
