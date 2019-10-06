import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "./Map";
import { Tabs, Tab } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import "./citypage.css";
import Sonnet from "./Sonnet";
import CityPageContent from "../components/citypageconent/CityPageContent";
import CarouselCityPage from "../components/citypageconent/CarouselCityPage";

class CityPage extends Component {
  render() {
    return (
      <div className="citypage">
        <CarouselCityPage />
        <h3>This is the Current city page</h3>
        <CityPageContent />
        <Map />
        {this.props.getCityDetailsReducer.map(city => {
          return (
            <ul>
              <li>{city.majorplace}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("todsos00000000000", state.getCityDetailsReducer);
  return {
    getCityDetailsReducer: state.getCityDetailsReducer
  };
};

export default connect(mapStateToProps)(CityPage);
