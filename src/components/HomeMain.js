import React, { useContext } from "react";
import "./css/HomeMain.css";
import Message from "./Message";
import { GlobalContext } from "../context/GlobalState";
import { useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import ScrollableFeed from "react-scrollable-feed";

function HomeMain(props) {
  const { selectedChannel, sendMessage } = useContext(GlobalContext);
  const [message, setMessage] = useState("");

  const handleSendingMsg = (e) => {
    e.preventDefault();
    if (message.length > 0) sendMessage(selectedChannel._id, message);
    setMessage("");
  };

  return (
    <div className="homeMain">
      <div className="homeMain__channelName">
        <span>#</span>
        {selectedChannel.name}
      </div>

      <div
        className="homeMain__msgsContainer"
        style={{ height: "100%", overflow: "auto" }}
      >
        <ScrollToBottom className="homeMain__scrollToBottom">
          {selectedChannel.messages &&
            selectedChannel.messages.map((msg) => (
              <Message
                key={msg._id}
                username={msg.user ? msg.user.username : "DELETED USER"}
                text={msg.text}
                date={msg.date}
              />
            ))}
        </ScrollToBottom>
      </div>
      <div className="homeMain__msgSender">
        <form onSubmit={handleSendingMsg}>
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default HomeMain;
