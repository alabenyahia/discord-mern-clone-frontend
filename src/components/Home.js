import React from "react";
import "./css/Home.css";
import HomeSidebar from "./HomeSidebar";
import HomeMain from "./HomeMain";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Home(props) {
  const { loadChannels } = useContext(GlobalContext);
  useEffect(() => {
    loadChannels();
  }, []);
  return (
    <div className="home">
      <HomeSidebar />
      <HomeMain />
    </div>
  );
}

export default Home;
