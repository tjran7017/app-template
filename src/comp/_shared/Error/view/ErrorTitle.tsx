import { ReactNode } from 'react';

interface Props {
  title: string | ReactNode;
  desc: string | ReactNode;
}
export function ErrorTitle({ title, desc }: Props) {
  return (
    <>
      <p>{title}</p>
      <p className="small">{desc}</p>
    </>
  );
}
