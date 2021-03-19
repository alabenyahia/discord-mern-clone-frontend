import React, { useContext } from "react";
import "./css/HomeMain.css";
import Message from "./Message";
import { GlobalContext } from "../context/GlobalState";

function HomeMain(props) {
  const { selectedChannel } = useContext(GlobalContext);
  return (
    <div className="homeMain">
      <div className="homeMain__channelName">
        <span>#</span>Channel Name
      </div>
      <div className="homeMain__msgsContainer">
        {selectedChannel.messages &&
          selectedChannel.messages.map((msg) => (
            <Message
              key={msg._id}
              username={msg.user ? msg.user.username : "DELETED USER"}
              text={msg.text}
              date={msg.date}
            />
          ))}
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
