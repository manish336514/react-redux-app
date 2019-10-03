import React, { Component } from "react";
import "./imagetile.scss";
// import { url } from "inspector";
export default class ImageTile extends Component {
  render() {
    return (
      <div>
        <div
          className="Item"
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAJHKC1sz3IjgEqOPSZJUyLYq4N2CGQG89FX4RrgPyo2mPrvhK")`
          }}
        >
          <div className="overlay">
            <div className="title">Title</div>
            <div className="rating">8 / 10</div>
            <div className="plot">jdjesdjsdsdkjjsk</div>
          </div>
        </div>
        <div
          className="Item"
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAJHKC1sz3IjgEqOPSZJUyLYq4N2CGQG89FX4RrgPyo2mPrvhK")`
          }}
        >
          <div className="overlay">
            <div className="title">Title</div>
            <div className="rating">8 / 10</div>
            <div className="plot">jdjesdjsdsdkjjsk</div>
          </div>
        </div>
      </div>
    );
  }
}
