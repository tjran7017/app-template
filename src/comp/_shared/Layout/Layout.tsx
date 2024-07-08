import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppErrorBoundary } from '~/comp/_shared/Layout/ErrorBoundary';

export function Layout({ children }: PropsWithChildren) {
  return (
    <AppErrorBoundary>
      <BrowserRouter>
        <div className="container">{children}</div>
      </BrowserRouter>
    </AppErrorBoundary>
  );
}
