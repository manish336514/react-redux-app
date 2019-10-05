import React, { Component } from "react";
import "./citypagecontent.css";

import RightContent from "./RightContent.js";
import SideNavBar from "./SideNavBar";

export default class CityPageContent extends Component {
  render() {
    return (
      <div className="newcontainer">
        <div
          // classname="newcontainer1"
          style={{ width: "30%" }}
        >
          <SideNavBar />
        </div>
        <div
          // classname="newcontainer2"
          style={{ width: "80%", backgroundColor: "green" }}
        >
          <RightContent />
        </div>
      </div>
    );
  }
}
