import React, { ErrorInfo, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from '../Error';

export function Layout({ children }: PropsWithChildren) {
  const handleError = (error: Error, info: ErrorInfo) => {
    // logging
  };

  return (
    <BrowserRouter>
      <div className="container">
        <ErrorBoundary fallbackRender={() => <Error type="boundary" />} onError={handleError}>
          {children}
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}
