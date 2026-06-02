import React from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'

function Signin() {
  return (
    <>
      <div id="signin-container">
        <Link to="/" className="back-button">{"<"} <span>Back</span></Link>
        <form className="form">
          <p className="form-title">Sign in to your account</p>
          <div className="input-container">
            <input type="email" placeholder="Enter email" />
            <span>
            </span>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="submit">
            Sign in
          </button>

          <p className="signin-link">
            No account?{" "}
            <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Signin
