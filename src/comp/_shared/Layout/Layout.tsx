import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function Layout({ children }: PropsWithChildren) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
