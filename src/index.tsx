import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const loadCSS = (href: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error('CSS load error'));

    document.head.appendChild(link);
  });

const Root: React.FC = () => {
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    loadCSS('/assets/css/style.css').then(() => {
      setCssLoaded(true);
    });
  }, []);

  if (!cssLoaded) {
    return null;
  }

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
