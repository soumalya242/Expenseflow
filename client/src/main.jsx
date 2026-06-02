<<<<<<< HEAD
import react from 'react'
import ReactDOM from "react-dom/client";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
>>>>>>> dev1
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
=======
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
>>>>>>> dev1
)
