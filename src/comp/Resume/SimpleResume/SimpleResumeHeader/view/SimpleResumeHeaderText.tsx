import { ReactNode } from 'react';

interface Props {
  text: ReactNode;
}

export function SimpleResumeHeaderText({ text }: Props) {
  return (
    <div style={{ marginTop: '20px' }}>
      <span className="desc">{text}</span>
    </div>
  );
}
