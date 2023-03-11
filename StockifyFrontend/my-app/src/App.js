import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages";
import LogInPage from "./pages/LogIn";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import { useSelector } from 'react-redux';
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/LogIn" element={!access_token? <LogInPage />: <Navigate to='/'/>} />
        <Route exact path="/Register" element={!access_token? <Register />: <Navigate to='/'/>} />
        <Route exact path="/Logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
