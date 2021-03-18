import React from "react";
import "./css/LoginRegister.css";
import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";

function Register(props) {
  const { registerUser, validationError, resetError } = useContext(
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
            className={validationError.email ? "register__error" : ""}
          >
            EMAIL
            {validationError.email && <span> - {validationError.email}</span>}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={validationError.email ? "register__errorInput" : ""}
          />

          <label
            htmlFor="username"
            className={validationError.username ? "register__error" : ""}
          >
            USERNAME
            {validationError.username && (
              <span> - {validationError.username}</span>
            )}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={validationError.username ? "register__errorInput" : ""}
          />

          <label
            htmlFor="password"
            className={validationError.password ? "register__error" : ""}
          >
            PASSWORD
            {validationError.password && (
              <span> - {validationError.password}</span>
            )}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={validationError.password ? "register__errorInput" : ""}
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
