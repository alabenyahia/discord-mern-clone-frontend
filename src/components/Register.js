import React from "react";
import "./css/LoginRegister.css";
import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";

function Register(props) {
  const { registerUser, registerValidationError, resetError } = useContext(
    GlobalContext
  );
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    resetError();
    registerUser({ email, username, password });
  };
  return (
    <div className="register">
      <div className="register__main">
        <h3>Create an account</h3>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className={registerValidationError.email ? "register__error" : ""}
          >
            EMAIL
            {registerValidationError.email && (
              <span> - {registerValidationError.email}</span>
            )}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={
              registerValidationError.email ? "register__errorInput" : ""
            }
          />

          <label
            htmlFor="username"
            className={
              registerValidationError.username ? "register__error" : ""
            }
          >
            USERNAME
            {registerValidationError.username && (
              <span> - {registerValidationError.username}</span>
            )}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={
              registerValidationError.username ? "register__errorInput" : ""
            }
          />

          <label
            htmlFor="password"
            className={
              registerValidationError.password ? "register__error" : ""
            }
          >
            PASSWORD
            {registerValidationError.password && (
              <span> - {registerValidationError.password}</span>
            )}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={
              registerValidationError.password ? "register__errorInput" : ""
            }
          />
          <button type="submit">Continue</button>
        </form>
        <div className="register__login">
          <button>Already have an account?</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
