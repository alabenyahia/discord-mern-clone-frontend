import React from "react";
import "./css/LoginRegister.css";

function Register(props) {
  return (
    <div className="register">
      <div className="register__main">
        <h3>Create an account</h3>
        <form>
          <label htmlFor="email">EMAIL</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="username">USERNAME</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" id="password" />
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
