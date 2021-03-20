import React from "react";
import "./css/Home.css";
import HomeSidebar from "./HomeSidebar";
import HomeMain from "./HomeMain";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Pusher from "pusher-js";

const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
  cluster: "eu",
});

function Home(props) {
  const {
    loadChannels,
    channels,
    selectedChannel,
    changeSelectedChannel,
  } = useContext(GlobalContext);
  useEffect(() => {
    loadChannels();
    const channelsChannel = pusher.subscribe("channels");
    channelsChannel.bind("new-channel", function (data) {
      loadChannels();
    });
    channelsChannel.bind("new-message", function (data) {
      loadChannels();
    });
  }, []);

  useEffect(() => {
    if (selectedChannel.hasOwnProperty("_id")) {
      changeSelectedChannel(selectedChannel._id);
    }
  }, [channels]);
  return (
    <div className="home">
      <HomeSidebar />
      <HomeMain />
    </div>
  );
}

export default Home;
