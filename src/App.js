import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Imports from "./components/index";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Imports />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
