import { useCallback, useEffect, useMemo, useRef } from 'react';

export function AboutTerminal() {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const hostText = useMemo(() => window.location.hostname + ':~$', []);
  const typingText = useMemo(() => {
    const directories = 'work   characteristic';
    const career = 'Nextree(3년2개월)';
    const characteristic = '주도적인   소통하는   즐기는   배움이_빠른';
    return ` whoami
  -> 윤석무
  --# cd /Users/윤석무
  -# ls
  -> ${directories}
  --# cd work
  -# ls
  -> ${career}
  --# cd ../characteristic
  -# ls
  -> ${characteristic}`;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typing(0);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const typing = useCallback((index: number) => {
    const nextIndex = index + 1;
    const element = spanRef.current;
    if (!element) return;

    let nextText = typingText.substring(index, nextIndex);
    if (nextIndex === typingText.length + 1) return;
    nextText = nextText.replaceAll('-', '<br/>');
    nextText = nextText.replaceAll('#', hostText);

    element.innerHTML = element.innerHTML + nextText;

    setTimeout(() => {
      typing(nextIndex);
    }, 50);
  }, []);

  return (
    <section className="terminal">
      <div className="terminal-bar">
        <div />
        <div />
        <div />
      </div>
      <div className="terminal-screen">
        <span className="terminal-text" ref={spanRef}>
          {hostText}
        </span>
      </div>
    </section>
  );
}
