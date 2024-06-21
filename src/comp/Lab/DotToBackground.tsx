import { PropsWithChildren, useEffect, useState } from 'react';

export function DotToBackground({ children }: PropsWithChildren) {
  const [shouldHideLoading, setShouldHideLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldHideLoading(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!shouldHideLoading) return;
    const element = document.querySelector<HTMLElement>('.to-square');
    if (!element) throw new Error('Element not exist');
    adjustScale(element);
    element.addEventListener('animationend', () => {
      window.addEventListener('resize', () => adjustScale(element));
      // todo
    });
  }, [shouldHideLoading]);

  const adjustScale = (element: HTMLElement) => {
    const scaleX = window.innerWidth / element.offsetWidth + 2;
    const scaleY = window.innerHeight / element.offsetHeight + 1;
    element.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  const dotClassName = `dot ${shouldHideLoading && 'to-square'}`;
  const stepClassName = `step ${shouldHideLoading && 'hide'}`;

  return (
    <div className="main-container">
      <div className={dotClassName}>{children}</div>
      <div className={stepClassName} id="s1"></div>
      <div className={stepClassName} id="s2"></div>
      <div className={stepClassName} id="s3"></div>
    </div>
  );
}
