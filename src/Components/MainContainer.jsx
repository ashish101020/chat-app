import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatDash from "./ChatDash";
const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="chatDash">
        <ChatDash />
      </div>
    </div>
  );
};

export default MainContainer;
