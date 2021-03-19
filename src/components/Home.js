import React from "react";
import "./css/Home.css";
import HomeSidebar from "./HomeSidebar";
import HomeMain from "./HomeMain";

function Home(props) {
  return (
    <div className="home">
      <HomeSidebar />
      <HomeMain />
    </div>
  );
}

export default Home;
