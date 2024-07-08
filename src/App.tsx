import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './comp';
import { Loading } from '~/comp/_shared/Loading';

const Index = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  }).then(() => import('./pages')),
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading type="page" />}>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
