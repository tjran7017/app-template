interface Props {
  text: string;
}

export function SimpleResumeContentsCompany({ text }: Props) {
  return (
    <div className="company-wrap">
      <h1>{text}</h1>
    </div>
  );
}
