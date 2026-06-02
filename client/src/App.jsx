import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Signin.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Landing from './pages/Landing page/landing.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App
