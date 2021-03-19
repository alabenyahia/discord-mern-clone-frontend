import React from "react";
import loadingIcon from "../img/loading.svg";

function Loading(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={loadingIcon} alt="Loading" />
    </div>
  );
}

export default Loading;
