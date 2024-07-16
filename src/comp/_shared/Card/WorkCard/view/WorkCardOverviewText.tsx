interface Props {
  text: string;
  subText?: string;
}

export function WorkCardOverviewText({ text, subText }: Props) {
  if (!subText) {
    return (
      <div className="group-text">
        <h1>{text}</h1>
      </div>
    );
  }

  return (
    <div className="group-text">
      <h3>{text}</h3>
      <p>{subText}</p>
    </div>
  );
}
