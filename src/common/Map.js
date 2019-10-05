import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { render } from "react-dom";
import DirectionsRailwayIcon from "@material-ui/icons/DirectionsRailway";
import LocalAirportIcon from "@material-ui/icons/LocalAirport";
// import "mapbox-gl/dist/mapbox-gl.css";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl
} from "react-map-gl";
import MenuIcon from "@material-ui/icons/Menu";
// import MapGL, {NavigationControl, Marker,Popup} from "react-map-gl’;

const markerList = [
  { lat: 17.441013, long: 78.391796, name: "ABC Hospitals", info: 10 },
  { lat: 17.442889, long: 78.396873, name: "XYZ Hospitals", info: 20 },
  { lat: 17.441681, long: 78.394357, name: "NRI Hospitals", info: 10 }
];

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

let iconStyles = {
  fontSize: "25px",
  fill: "red"
};

export default class Map extends Component {
  state = {
    viewport: {
      width: 800,
      height: 800,
      latitude: 12.9716,
      longitude: 77.5946,
      zoom: 10

      // latitude: 37.785164,
      // longitude: -100,
      // zoom: 3.5,
      // bearing: 0,
      // pitch: 0
    }
  };

  render() {
    // const { viewport } = this.state;
    return (
      // <ReactMapGL
      //   mapboxApiAccessToken={
      //     "pk.eyJ1IjoibWFuaXNha3R1IiwiYSI6ImNrMTdsYnN2azAwcW0zZG11cmh6MGVlMGYifQ.iq2Ounf_jDJFRaKtRi64dA"
      //   }
      //   {...this.state.viewport}
      //   onViewportChange={viewport => this.setState({ viewport })}
      // >
      //   <Marker
      //     latitude={12.9716}
      //     longitude={77.5946}
      //     offsetLeft={-20}
      //     offsetTop={-10}
      //   >
      //     <MenuIcon style={iconStyles} />
      //   </Marker>
      //   <Marker
      //     latitude={13.1986}
      //     longitude={77.7066}
      //     offsetLeft={-20}
      //     offsetTop={-10}
      //   >
      //     <LocalAirportIcon style={iconStyles} />
      //   </Marker>

      //   <Marker
      //     latitude={12.9781}
      //     longitude={77.5697}
      //     offsetLeft={-20}
      //     offsetTop={-10}
      //   >
      //     <DirectionsRailwayIcon style={iconStyles} />
      //   </Marker>
      // </ReactMapGL>
      <div>Mapnn</div>
    );
  }
}
