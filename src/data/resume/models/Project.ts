export interface Project {
  id: string;
  workId: string;

  name: string;
  period: string;
  job: string;
  skills: Skill[];
  description: string;
  contents: string[];
  respond: Respond[];
  link?: string;
}

export type Respond = 'web' | 'tablet' | 'mobile';
export type Skill =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nextjs'
  | 'vite'
  | 'rollup'
  | 'mobx'
  | 'react-query'
  | 'java'
  | 'spring-boot'
  | 'mysql'
  | 'nginx'
  | 'kafka';
