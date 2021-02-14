import React from "react";
import closeIcon from "../../icons/closeIcon";
import onlineIcon from "../../icons/onlineIcon";
import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img src={onlineIcon} className="onlineIcon" alt="online image" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src="closeIcon" alt="close image" />
      </a>
    </div>
  </div>
)

export default InfoBar;
