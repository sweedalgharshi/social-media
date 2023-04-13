import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Roguesocial</h3>
          <span className="login-desc">
            Connect with friends and the world around you on Roguesocial.
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder="Email" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <button className="login-btn">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="register-btn">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
