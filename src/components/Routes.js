import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";

function Routes(props) {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
