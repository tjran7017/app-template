import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Loading, Resume } from './comp';

const Index = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1500);
  }).then(() => import('./comp/Resume/ResumeContainer')),
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
