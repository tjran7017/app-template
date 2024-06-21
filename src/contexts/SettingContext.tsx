import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type Setting = {
  todo: any;
};

type SettingContextModel = { setting: Setting; setSetting: Dispatch<SetStateAction<Setting>> };

function makeSetting(): Setting {
  return { todo: 'todo' };
}

export const SettingContext = createContext<SettingContextModel>({
  setting: makeSetting(),
  setSetting: () => {},
});

export function SettingContextProvider({ children }: PropsWithChildren) {
  const [setting, setSetting] = useState<Setting>(makeSetting());

  return <SettingContext.Provider value={{ setting, setSetting }}>{children}</SettingContext.Provider>;
}

export type { Setting };
