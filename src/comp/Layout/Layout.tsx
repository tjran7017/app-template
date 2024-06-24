import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppErrorBoundary } from '~/comp/ErrorBoundary';
import { SettingContextProvider } from '~/contexts';

export function Layout({ children }: PropsWithChildren) {
  return (
    <AppErrorBoundary>
      <BrowserRouter>
        <SettingContextProvider>
          {/*<div className="corner top-left" />*/}
          <div className="container">{children}</div>
          {/*<div className="corner bottom-right" />*/}
        </SettingContextProvider>
      </BrowserRouter>
    </AppErrorBoundary>
  );
}
