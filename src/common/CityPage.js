import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import Map from "./Map";
import { Tabs, Tab } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import "./citypage.css";
import Sonnet from "./Sonnet";
import CityPageContent from "../components/citypageconent/CityPageContent";

class CityPage extends Component {
  render() {
    return (
      <div className="citypage">
        <Carousel>
          <Carousel.Item>
            <img
              height={300}
              width={1800}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVfc6vltJrhHMiq_UGUUbFV_1g24NMM6SQ57SoXLC9sjrUZXmt"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={300}
              width={1800}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzPDT2gPv8jqt52xmsSaneMgTD-LHk8fKSmFFq_bnU50JthCaG"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={300}
              width={1800}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
