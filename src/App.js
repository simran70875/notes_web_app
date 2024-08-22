import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/login";
import Register from "./screens/register";
import Main from "./screens";
import PrivateRoute from "./screens/privateRoute";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.userid);
  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn, userId);
  });
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute element={<Main />} />} />
      </Routes>
    </Router>
  );
};

export default App;
