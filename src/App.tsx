import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppErrorBoundary } from '~/comp/ErrorBoundary';
import Index from '~/pages';
import { SettingContextProvider } from '~/contexts';

function App() {
  return (
    <AppErrorBoundary>
      <SettingContextProvider>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </SettingContextProvider>
    </AppErrorBoundary>
  );
}

export default App;
