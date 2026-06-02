import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
