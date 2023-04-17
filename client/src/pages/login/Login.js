import React, { useContext, useRef } from "react";
import "./login.css";

import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

import { CircularProgress } from "@mui/material";

function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  };

  console.log(user);
  console.log(error);

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
            <button type="submit" className="login-btn" disabled={isFetching}>
              {isFetching ? <CircularProgress color="inherit" size="1rem" /> : "Log In"}
            </button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="register-btn">
              {isFetching ? (
                <CircularProgress color="inherit" size="1rem" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
