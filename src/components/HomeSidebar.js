import React from "react";
import "./css/HomeSidebar.css";
import Channel from "./Channel";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function HomeSidebar(props) {
  const { logout } = useContext(GlobalContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="homeSidebar">
      <div className="homeSidebar__serverName">alabenyahia's server</div>
      <div className="homeSidebar__channels">
        <div className="homeSidebar__addChannel">
          <span>Text channels</span>
          <button>
            <i className="material-icons">add</i>
          </button>
        </div>
        <div className="homeSidebar__channelsList">
          <Channel />
          <Channel />
          <Channel />
          <Channel />
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
            <span className="homeSidebar__profileUsername">alabenyahia</span>
            <span className="homeSidebar__profileId">#1234</span>
          </div>
        </div>
        <div className="homeSidebar__bottomIcons">
          <button onClick={handleLogout}>
            <i className="material-icons">logout</i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HomeSidebar;
