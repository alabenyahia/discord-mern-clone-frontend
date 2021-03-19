import React from "react";
import "./css/LoginRegister.css";
import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";

function Login(props) {
  const {
    loginUser,
    loginValidationError,
    resetError,
    isAuthenticated,
    loading,
  } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    resetError();
    loginUser({ email, password });
  };
  if (loading) return <Loading />;
  else if (isAuthenticated) return <Redirect to="/" />;
  else
    return (
      <div className="login">
        <div className="login__main">
          <h3>Welcome back!</h3>
          <p>We're so excited to see you again!</p>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className={loginValidationError.email ? "login__error" : ""}
            >
              EMAIL
              {loginValidationError.email && (
                <span> - {loginValidationError.email}</span>
              )}
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={loginValidationError.email ? "login__errorInput" : ""}
            />
            <label
              htmlFor="password"
              className={loginValidationError.password ? "login__error" : ""}
            >
              PASSWORD
              {loginValidationError.password && (
                <span> - {loginValidationError.password}</span>
              )}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                loginValidationError.password ? "login__errorInput" : ""
              }
            />
            <button type="submit">Login</button>
          </form>
          <div className="login__register">
            Need an account? <button>Register</button>
          </div>
        </div>
      </div>
    );
}

export default Login;
