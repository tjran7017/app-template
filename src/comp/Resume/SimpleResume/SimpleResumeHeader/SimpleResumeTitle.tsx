import { SimpleResumeSection } from '../view';
import { SimpleResumeHeaderTitle, SimpleResumeHeaderText } from './view';

export function SimpleResumeTitle() {
  return (
    <SimpleResumeSection className="fade">
      <SimpleResumeHeaderTitle text="Hello." />
      <SimpleResumeHeaderTitle text="I'm" />
      <SimpleResumeHeaderTitle text="Seokmu Yoon." />
      <SimpleResumeHeaderText
        text={
          <>
            With three years of experience as a web developer,
            <br /> I have primarily participated in projects as a<br /> Frontend developer.
          </>
        }
      />
    </SimpleResumeSection>
  );
}
