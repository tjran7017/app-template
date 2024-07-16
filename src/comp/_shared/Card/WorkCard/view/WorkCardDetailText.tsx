interface Props {
  description: string;
}

export function WorkCardDetailText({ description }: Props) {
  return <p>{description}</p>;
}
