import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  return (
    <>
      <div id="signup-container">
        <Link to="/" className="back-button">{"<"} <span>Back</span></Link>
        <form className="form">
          <p className="form-title">Welcome to Expenseflow</p>
          <div className="input-container">
            <input type="email" placeholder="Enter email" />
            <span>
            </span>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Enter password" />
            <span>
            </span>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Confirm password" />
          </div>
          <button type="submit" className="submit">
            Sign up
          </button>

          <p className="signup-link">
            Already have an account?{" "}
            <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Signup
