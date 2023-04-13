import React from "react";
import "./register.css";

function Register() {
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
            <input placeholder="Username" className="login-input" />
            <input placeholder="Email" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <button className="login-btn">Sign Up</button>
            <button className="register-btn">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
