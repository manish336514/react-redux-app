import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: props.val };
  }

  hadlsestop = () => {
    console.log("hadlsestop");
    clearInterval(this.incrimental);
    console.log("AFTER hadlsestop");
  };

  hadlsestart = () => {
    var x = this;
    var { counter } = this.state;

    this.incrimental = setTimeout(function() {
      if (counter > 0) {
        x.setState({ counter: counter - 1 });
      }

      if (counter == 0) {
        // alert("Time Over");
        x.props.viewreults();
        x.hadlsestop();
      }
    }, 1000);
  };

  render() {
    var x = this;
    var { counter } = this.state;

    this.incrimental = setTimeout(function() {
      if (counter > 0) {
        x.setState({ counter: counter - 1 });
      }

      if (counter == 0) {
        // alert("Time Over");
        x.props.viewreults();
        x.hadlsestop();
      }
    }, 1000);

    return (
      <div>
        Time Left :-
        {counter}
        <button onClick={this.hadlsestop}>Stop</button>
        <button onClick={this.hadlsestart}>Start</button>
      </div>
    );
  }
}
