import { SimpleResumeSection } from '../view';
import { SimpleResumeHeaderAnchor } from './view';

export function SimpleResumeContact() {
  return (
    <SimpleResumeSection className="fade">
      <div className="contact-wrap">
        <SimpleResumeHeaderAnchor href="https://github.com/tjran7017/app-template" target="_blank" image="git" />
        <SimpleResumeHeaderAnchor href="mailto:tjran7017@gmail.com" target="_blank" image="mail" />
      </div>
    </SimpleResumeSection>
  );
}
