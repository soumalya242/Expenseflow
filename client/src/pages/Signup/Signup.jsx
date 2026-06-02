import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  return (
    <>
      <div id="signup-container">
        <form class="form">
          <p class="form-title">Welcome to Expenseflow</p>
          <div class="input-container">
            <input type="email" placeholder="Enter email" />
            <span>
            </span>
          </div>
          <div class="input-container">
            <input type="password" placeholder="Enter password" />
            <span>
            </span>
          </div>
          <div class="input-container">
            <input type="password" placeholder="Confirm password" />
          </div>
          <button type="submit" class="submit">
            Sign up
          </button>

          <p class="signup-link">
            Already have an account?
            <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Signup
