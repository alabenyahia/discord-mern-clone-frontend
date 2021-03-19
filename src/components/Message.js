import React from "react";
import "./css/Message.css";
import moment from "moment";

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
          <div className="message__username">{props.username}</div>
          <div className="message__date">{moment(props.date).format()}</div>
        </div>
        <div className="message__text">{props.text}</div>
      </div>
    </div>
  );
}

export default Message;
