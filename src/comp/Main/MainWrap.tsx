import { PropsWithChildren } from 'react';

export function MainWrap({ children }: PropsWithChildren<{}>) {
  return (
    <div className="App">
      <div>{children}</div>
    </div>
  );
}
