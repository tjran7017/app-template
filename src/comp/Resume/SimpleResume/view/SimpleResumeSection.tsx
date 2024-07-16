import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {}

export function SimpleResumeSection({ children, ...props }: Props) {
  return <section {...props}>{children}</section>;
}
