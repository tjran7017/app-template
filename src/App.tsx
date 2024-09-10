import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Resume } from './comp';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
    </Layout>
  );
}

export default App;
