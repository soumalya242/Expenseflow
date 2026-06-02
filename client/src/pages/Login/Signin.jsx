import React from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'

function Login() {
  return (
    <>
      <div id="signin-container">
        <form class="form">
          <p class="form-title">Sign in to your account</p>
          <div class="input-container">
            <input type="email" placeholder="Enter email" />
            <span>
            </span>
          </div>
          <div class="input-container">
            <input type="password" placeholder="Enter password" />
          </div>
          <button type="submit" class="submit">
            Sign in
          </button>

          <p class="signin-link">
            No account?
            <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login
