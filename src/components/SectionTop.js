import React, { Component } from "react";
import { Jumbotron, Button, Card, CardColumns } from "react-bootstrap";
import { connect } from "react-redux";

class SectionTop extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <CardColumns>
          {this.props.getCityReducer.map(city => {
            return (
              <Card style={{ width: "30rem" }}>
                <Card.Img variant="top" src={city.imageurl} />
                <Card.Body>
                  <Card.Title>{city.val}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
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
