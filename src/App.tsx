import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Loading, Error } from './comp';

const Index = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  }).then(() => import('./pages')),
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading type="page" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Error type="404" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
