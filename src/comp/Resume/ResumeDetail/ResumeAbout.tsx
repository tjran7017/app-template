import { memo, useContext, useEffect, useRef, useState } from 'react';
import { ResumeContext } from '../Resume.model';

type TypingText = { text: string; index: number };

interface Props {
  tags: string[];
}

export function ResumeAbout({ tags }: Props) {
  //
  const id = 'about';
  const { value } = useContext(ResumeContext);
  const [typingText, setTypingText] = useState<TypingText>({ text: '#프론트엔드', index: 0 });
  const typingIndex = useRef<number>(0);

  useEffect(() => {
    if (value !== id) return;

    function typing(i: number) {
      if (i >= typingText.text.length || (i !== 0 && typingIndex.current !== typingText.index)) return;

      typingIndex.current = typingText.index;
      const typingSpan = document.querySelector('#typing');
      if (!typingSpan) return;
      typingSpan.innerHTML = typingText.text.substring(0, i + 1);
      setTimeout(() => {
        typing(i + 1);
      }, 150);
    }

    typing(0);
  }, [typingText, value]);

  const handleClickTag = (value: TypingText) => setTypingText({ ...value });

  if (value !== id) return null;
  return (
    <section className="section-wrapper" id={id}>
      <div className="about-wrap">
        <div className="about-title-wrap">
          <span id="typing" className="typing" />
          개발자
        </div>
        <MemoizedTags tags={tags} onClickTag={handleClickTag} />

        <div className="about-icon-wrap fade">
          <i title="React" className="devicon-react-original-wordmark"></i>
          <i title="Javascript" className="devicon-javascript-plain"></i>
          <i title="Typescript" className="devicon-typescript-plain"></i>
          <i title="HTML5" className="devicon-html5-plain-wordmark"></i>
          <i title="CSS3" className="devicon-css3-plain-wordmark"></i>
          <i title="Vite" className="devicon-vitejs-plain"></i>
          <i title="MobX" className="devicon-mobx-plain"></i>
        </div>
      </div>
    </section>
  );
}

interface TagsProps {
  tags: string[];
  onClickTag: (value: TypingText) => void;
}
function Tags({ tags, onClickTag }: TagsProps) {
  //
  const handleClickTag = (tag: string, index: number) => () => onClickTag({ text: tag, index });
  return (
    <div className="about-tag-wrap fade">
      {tags.map((tag, index) => (
        <span key={tag} onClick={handleClickTag(tag, index)}>
          {tag}
        </span>
      ))}
    </div>
  );
}

const tagsAreEqual = (props: TagsProps, nextProps: TagsProps) => props.tags === nextProps.tags;
const MemoizedTags = memo(Tags, tagsAreEqual);
