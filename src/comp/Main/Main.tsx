import { PropsWithChildren, useEffect, useState } from 'react';

export function Main({ children }: PropsWithChildren) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 2000);
  }, []);

  const handleClickIcon = () => {
    window.open('https://github.com/tjran7017/app-template', '_blank');
  };

  const loadingClassName = `loading ${isActive && 'hide'}`;

  return (
    <>
      <div className={loadingClassName}>
        <div className="dot"></div>
        <div className="step" id="s1"></div>
        <div className="step" id="s2"></div>
        <div className="step" id="s3"></div>
      </div>
      {isActive && (
        <div className="main-container">
          <img src="/assets/img/git.png" alt="git" className="top-icon" onClick={handleClickIcon} />
          {children}
        </div>
      )}
    </>
  );
}
