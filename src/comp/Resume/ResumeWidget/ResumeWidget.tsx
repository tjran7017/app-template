import { WidgetButton } from '~/comp/Resume/ResumeWidget/view';

export function ResumeWidget() {
  return (
    <article className="widget-container">
      <WidgetButton imgSrc="/assets/image/github.svg" alt="github" href="https://github.com/tjran7017/app-template" />
      <WidgetButton imgSrc="/assets/image/mail.svg" alt="mail" href="mailto:tjran7017@gmail.com" />
    </article>
  );
}
