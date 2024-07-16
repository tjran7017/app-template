import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

function TerminalBar() {
  return (
    <div className="terminal-bar">
      <div />
      <div />
      <div />
    </div>
  );
}

interface TerminalScreenProps {
  hostText: string;
}
interface TerminalScreenRef {
  innerHTML: string;
  concatInnerHTML: (nextValue: string) => void;
}
const TerminalScreen = forwardRef<TerminalScreenRef, TerminalScreenProps>((props, ref) => {
  const { hostText } = props;
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useImperativeHandle(ref, () => ({
    innerHTML: spanRef.current?.innerHTML || '',
    concatInnerHTML: (nextValue: string) => {
      if (spanRef.current) {
        spanRef.current!.innerHTML = spanRef.current!.innerHTML + nextValue;
      }
    }
  }));

  return (
    <div className="terminal-screen">
      <span className="terminal-text" ref={spanRef}>
        {hostText}
      </span>
    </div>
  );
});

export function SimpleResumeContentsTerminal() {
  const terminalScreenRef = useRef<TerminalScreenRef | null>(null);
  const hostText = window.location.hostname + ':~$';
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
    function typing(index: number) {
      const nextIndex = index + 1;
      const element = terminalScreenRef.current;
      if (!element) return;

      let nextText = typingText.substring(index, nextIndex);
      if (nextIndex === typingText.length + 1) return;
      nextText = nextText.replaceAll('-', '<br/>');
      nextText = nextText.replaceAll('#', hostText);
      element.concatInnerHTML(nextText);

      setTimeout(() => {
        typing(nextIndex);
      }, 50);
    }

    typing(0);
  }, []);

  return (
    <div className="terminal-wrap">
      <TerminalBar />
      <TerminalScreen ref={terminalScreenRef} hostText={hostText} />
    </div>
  );
}
