import React, { PropsWithChildren } from 'react';
import { AppErrorBoundary } from '~/comp/ErrorBoundary';
import { SettingContextProvider } from '~/contexts';

export function Layout({ children }: PropsWithChildren) {
  return (
    <AppErrorBoundary>
      <SettingContextProvider>
        <div className="corner top-left" />
        <div className="container">{children}</div>
        <div className="corner bottom-right" />
      </SettingContextProvider>
    </AppErrorBoundary>
  );
}
