import { Respond } from '~/data';

interface Props {
  respond: Respond[];
}

export function ResumeProjectRespond({ respond }: Props) {
  return (
    <>
      {respond.map((value) => (
        <span key={value}>
          <img src={`/assets/image/${value}.svg`} alt={value} />
        </span>
      ))}
    </>
  );
}
