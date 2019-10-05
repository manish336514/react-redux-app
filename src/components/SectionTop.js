import React, { Component } from "react";
import { Jumbotron, Button, Card, CardColumns } from "react-bootstrap";
import { connect } from "react-redux";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import ImageTile from "../common/ImageTile";

import "./sectiontop.scss";

class HeroButton extends Component {
  render() {
    return (
      <a href="#" className="Button" data-primary={this.props.primary}>
        {this.props.text.toUpperCase()}
      </a>
    );
  }
}

class SectionTop extends Component {
  render() {
    return (
      <div>
        <CardColumns style={{ margin: "86px" }}>
          {this.props.getCityReducer.map(city => {
            return (
              <Card style={{ width: "37rem", backgroundColor: "dimgray" }}>
                <Link to="/citypage">
                  <ImageTile city={city} />
                </Link>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("todsos00000000000", state.getCityReducer);
  return {
    todos: state.todos,
    states: state.states,
    getPostReducer: state.getPostReducer,
    getCityReducer: state.getCityReducer
  };
};

// const mapDispatchToProps = dispatch => ({
//   handleClick: abc => {
//     dispatch(getReportData(abc));
//   }
// });

export default connect(
  mapStateToProps
  //   mapDispatchToProps
)(SectionTop);

// <Jumbotron style={{ backgroundColor: "dimgray" }}>
//   <h1>Explore India</h1>
// </Jumbotron>;

// <Card.Body>
// <Card.Title>{city.val}</Card.Title>
// <Card.Text>Some quick example text</Card.Text>
// {city.val}

// <HeroButton primary={true} text={city.val} />
// </Card.Body>
