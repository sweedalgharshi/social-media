import React, { useRef } from "react";
import "./login.css";

function Login() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };

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
          <form className="login-box" onSubmit={handleSubmit}>
            <input placeholder="Email" type="email" className="login-input" required ref={email} />
            <input
              placeholder="Password"
              type="password"
              className="login-input"
              required
              minLength="6"
              ref={password}
            />
            <button className="login-btn">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="register-btn">Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
