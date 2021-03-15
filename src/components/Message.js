import React from "react";
import "./css/Message.css";

function Message(props) {
  return (
    <div className="message">
      <div className="message__avatar">
        <img
          src="https://icon-library.com/images/yellow-discord-icon/yellow-discord-icon-24.jpg"
          alt="Default discord avatar"
        />
      </div>
      <div className="message__main">
        <div className="message__usernameAndData">
          <div className="message__username">alabenyahia</div>
          <div className="message__date">Today at 16:00</div>
        </div>
        <div className="message__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
          omnis.
        </div>
      </div>
    </div>
  );
}

export default Message;
