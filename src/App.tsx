import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppErrorBoundary } from '~/comp/ErrorBoundary';
import Main from '~/pages/main';

function App() {
  return (
    <AppErrorBoundary>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </AppErrorBoundary>
  );
}

export default App;
