import { PropsWithChildren, useEffect, useState } from 'react';

export function Main({ children }: PropsWithChildren) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 2000);
  }, []);

  const loadingClassName = `loading ${isActive && 'hide'}`;

  return (
    <>
      <div className={loadingClassName}>
        <div className="dot"></div>
        <div className="step" id="s1"></div>
        <div className="step" id="s2"></div>
        <div className="step" id="s3"></div>
      </div>
      {isActive && <div className="flex space-between">{children}</div>}
    </>
  );
}
