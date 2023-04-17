import React, { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
          <form onSubmit={handleClick} className="login-box">
            <input placeholder="Username" className="login-input" required ref={username} />
            <input placeholder="Email" className="login-input" type="email" required ref={email} />
            <input
              placeholder="Password"
              className="login-input"
              type="password"
              required
              ref={password}
              minLength="6"
            />
            <input
              placeholder="Password"
              className="login-input"
              type="password"
              required
              ref={passwordAgain}
              minLength="6"
            />
            <button className="login-btn" type="submit">
              Sign Up
            </button>
            <button className="register-btn">Log Into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
