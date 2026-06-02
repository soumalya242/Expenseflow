import React from 'react'
<<<<<<< Updated upstream
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login.jsx'
=======
import { Routes, Route } from 'react-router-dom'
import Signin from './pages/Login/Signin.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Landing from './pages/Landing page/landing.jsx';
>>>>>>> Stashed changes
import './App.css'
import Landing from './pages/Landing page/landing.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
<<<<<<< Updated upstream
      <Route path="/login" element={<Login />} />
=======
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App
