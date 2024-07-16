interface Props {
  text: string;
}

export function SimpleResumeHeaderTitle({ text }: Props) {
  return (
    <section className="fade">
      <p className="title">{text}</p>
    </section>
  );
}
