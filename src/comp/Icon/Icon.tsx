import { useEffect, useState } from 'react';

type IconInfo = { href: string; src: string; className: string };

interface Props {
  type: 'vite' | 'react';
}

export function Icon({ type }: Props) {
  //
  const [iconInfo, setIconInfo] = useState<IconInfo | null>(null);

  useEffect(() => {
    const newIconInfo: IconInfo = { href: '', src: '', className: '' };
    switch (type) {
      case 'react':
        newIconInfo.href = 'https://reactjs.org';
        newIconInfo.src = '/assets/logo/react.svg';
        newIconInfo.className = 'logo react';
        break;
      case 'vite':
        newIconInfo.href = 'https://vitejs.dev';
        newIconInfo.src = '/assets/logo/vite.svg';
        newIconInfo.className = 'logo';
        break;
    }

    if (newIconInfo.href) setIconInfo(newIconInfo);
  }, []);

  if (!iconInfo) return null;
  return (
    <a href={iconInfo.href} target="_blank" rel="noreferrer">
      <img src={iconInfo.src} className={iconInfo.className} alt={`${type} logo`} />
    </a>
  );
}
