import React from "react";
import "./css/Home.css";
import HomeSidebar from "./HomeSidebar";
import HomeMain from "./HomeMain";
import Login from "./Login";
import Register from "./Register";

function Home(props) {
  return (
    <div className="home">
      {/*<HomeSidebar />
      <HomeMain />*/}
      <Register />
    </div>
  );
}

export default Home;
