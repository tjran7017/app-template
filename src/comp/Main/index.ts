import { Main as MainWrap } from './Main';
import { MainText } from './MainText';
import { MainIcons } from './MainIcons';

export const Main = Object.assign(MainWrap, {
  Icons: MainIcons,
  Text: MainText,
});