interface Props {
  imgSrc: string;
  alt: string;
  href: string;
}

export function WidgetButton({ imgSrc, alt, href }: Props) {
  return (
    <button>
      <a href={href} target="_blank" rel="noreferrer">
        <img src={imgSrc} alt={alt} />
      </a>
    </button>
  );
}
