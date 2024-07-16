import { createContext, Dispatch } from 'react';

export const Navs = ['about', 'skill', 'project'] as const;
export type NavTuple = typeof Navs;
export type Nav = NavTuple[number];

export interface ResumeContextModel {
  value: Nav;
  setValue: Dispatch<Nav>;
}

export const ResumeContext = createContext<ResumeContextModel>({ value: 'about', setValue: () => {} });
