import { useContext } from 'react';
import { Setting, SettingContext } from '~/contexts';

export type UseSetting = { setting: Setting };

export const useSetting = (): UseSetting => {
  const { setting, setSetting } = useContext(SettingContext);
  return { setting };
};
