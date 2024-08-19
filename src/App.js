import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/login";
import Register from "./screens/register";
import Main from "./screens";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/index" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
