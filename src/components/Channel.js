import React, { useContext } from "react";
import "./css/Channel.css";
import { GlobalContext } from "../context/GlobalState";

function Channel(props) {
  const { changeSelectedChannel } = useContext(GlobalContext);

  const handleClick = () => {
    changeSelectedChannel(props.id);
  };
  return (
    <div className="channel" onClick={handleClick}>
      <span>#</span>
      {props.name}
    </div>
  );
}

export default Channel;
