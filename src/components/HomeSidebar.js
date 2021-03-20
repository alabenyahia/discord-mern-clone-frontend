import React from "react";
import "./css/HomeSidebar.css";
import Channel from "./Channel";
import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function HomeSidebar(props) {
  const { logout, channels, user } = useContext(GlobalContext);
  const [modalIsOpen, setIsModelOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    console.log("shdhsdh");
  };

  return (
    <nav className="homeSidebar">
      <div className="homeSidebar__serverName">alabenyahia's server</div>
      <div className="homeSidebar__channels">
        <div className="homeSidebar__addChannel">
          <span>Text channels</span>
          <button onClick={() => setIsModelOpen(true)}>
            <i className="material-icons">add</i>
          </button>
        </div>
        <div className="homeSidebar__channelsList">
          {channels.length > 0 &&
            channels.map((channel) => (
              <Channel id={channel._id} key={channel._id} name={channel.name} />
            ))}
        </div>
      </div>
      <div className="homeSidebar__bottomBar">
        <div className="homeSidebar__profileInfo">
          <div className="homeSidebar__avatar">
            <img
              src="https://icon-library.com/images/yellow-discord-icon/yellow-discord-icon-24.jpg"
              alt="Default discord avatar"
            />
          </div>
          <div className="homeSidebar__profileInfoText">
            <span className="homeSidebar__profileUsername">
              {user.username}
            </span>
            <span className="homeSidebar__profileId">
              {user.id.slice(0, 4)}
            </span>
          </div>
        </div>
        <div className="homeSidebar__bottomIcons">
          <button onClick={handleLogout}>
            <i className="material-icons">logout</i>
          </button>
        </div>
      </div>

      {/*Add channel Model*/}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsModelOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.65)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "#36393f",
            border: "none",
            color: "white",
            width: "440px",
            padding: 0,
          },
        }}
      >
        <div className="homeSidebar__modalContent">
          <h3>Create Text Channel</h3>
          <form onSubmit={handleModalSubmit}>
            <div className="homeSidebar__modelContentTop">
              <label htmlFor="channelName">CHANNEL NAME</label>
              <div>
                <span>#</span>
                <input type="text" id="channelName" placeholder="new-channel" />
              </div>
            </div>
            <div className="homeSidebar__modelContentBottom">
              <button>Cancel</button>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </Modal>
    </nav>
  );
}

export default HomeSidebar;
