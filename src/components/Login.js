import React from "react";
import "./css/LoginRegister.css";

function Login(props) {
  return (
    <div className="login">
      <div className="login__main">
        <h3>Welcome back!</h3>
        <p>We're so excited to see you again!</p>
        <form>
          <label htmlFor="email">EMAIL</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" id="password" />
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
