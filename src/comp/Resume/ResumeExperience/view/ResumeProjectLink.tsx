interface Props {
  link?: string;
}

export function ResumeProjectLink({ link }: Props) {
  if (!link) return null;
  return (
    <p className="project-link">
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
    </p>
  );
}
