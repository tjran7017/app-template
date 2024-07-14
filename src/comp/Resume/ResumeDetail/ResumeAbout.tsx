import { useContext, useEffect, useRef } from 'react';
import { ResumeContext } from '../Resume.model';

export function ResumeAbout() {
  //
  const id = 'about';
  const { value } = useContext(ResumeContext);
  const isUpdated = useRef<boolean>(false);
  const host = window.location.hostname + ':~$';
  const directories = 'work   characteristic';
  const career = 'Nextree(3y2m)';
  const characteristic = '즐기는   고민하는   배움이_빠른   호기심_많은';
  const typingText = ` whoami
  -yoonseokmu
  --# cd /Users/yoonseokmu
  -# ls
  -${directories}
  --# cd work
  -# ls
  -${career}
  --# cd ../characteristic
  -# ls
  -${characteristic}`;

  useEffect(() => {
    if (isUpdated.current) return;
    if (value !== id) {
      isUpdated.current = false;
      return;
    }

    function typing(index: number) {
      const nextIndex = index + 1;
      const element = document.getElementById('typing');
      if (!element) return;

      let nextText = typingText.substring(index, nextIndex);
      if (nextIndex === typingText.length + 1) return;

      const currentInnerHTML = element.innerHTML;
      nextText = nextText.replaceAll('-', '<br>');
      nextText = nextText.replaceAll('#', host);
      element.innerHTML = currentInnerHTML + nextText;

      setTimeout(() => {
        typing(nextIndex);
      }, 50);
    }

    isUpdated.current = true;
    typing(0);
  }, [value]);

  if (value !== id) return null;
  return (
    <section className="section-wrapper" id={id}>
      <div className="about-wrap">
        <div className="terminal-bar">
          <div />
          <div />
          <div />
        </div>
        <div className="terminal-screen">
          <span className="terminal-text">{host}</span>
          <span className="terminal-text typing" id="typing" />
        </div>
      </div>
    </section>
  );
}
