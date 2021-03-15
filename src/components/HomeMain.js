import React from "react";
import "./css/HomeMain.css";
import Message from "./Message";

function HomeMain(props) {
  return (
    <div className="homeMain">
      <div className="homeMain__channelName">
        <span>#</span>Channel Name
      </div>
      <div className="homeMain__msgsContainer">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="homeMain__msgSender">
        <form>
          <input type="text" placeholder="Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default HomeMain;