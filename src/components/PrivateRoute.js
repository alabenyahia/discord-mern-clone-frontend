import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "./Loading";

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated, loading } = useContext(GlobalContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Loading />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
