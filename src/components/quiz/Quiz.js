import React, { Component } from "react";
import QuistionDetails from "./QuistionDetails";
import QuestionsLIst from "./QuestionsLIst";
export default class Quiz extends Component {
  render() {
    return (
      <div>
        Quiz component
        <QuestionsLIst />
        <QuistionDetails />
      </div>
    );
  }
}
