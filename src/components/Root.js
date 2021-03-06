import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import SectionTop from "./SectionTop";
import CityPage from "../common/CityPage";
import Quiz from "../components/quiz/Quiz";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/section" component={SectionTop} />
      <Route path="/citypage" component={CityPage} />
      <Route path="/quiz" component={Quiz} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
