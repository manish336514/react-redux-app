import React, { Component } from "react";
import Blink from "./Blink";

import "./imagetile.scss";
// import { url } from "inspector";
export default class ImageTile extends Component {
  render() {
    console.log("url", this.props.iurl);
    return (
      <div>
        <div
          className="Item"
          style={{
            backgroundImage: `url(${this.props.city.imageurl})`
          }}
        >
          <div className="overlay">
            <div className="title">{this.props.city.val}</div>
            <div className="rating">8 / 10</div>
            <div className="plot">
              {" "}
              <Blink blinkdata={this.props.city.blinkdata} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
