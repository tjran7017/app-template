import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
const LoadMap = lazy(async () => await import("./pages/load-map"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/load-map" element={<LoadMap />} />
    </Routes>
  );
}

export default App;
