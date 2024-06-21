import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './comp';
import Index from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Layout>
  );
}

export default App;
