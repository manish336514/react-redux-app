import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import SectionTop from "./SectionTop";
import CityPage from "../common/CityPage";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/section" component={SectionTop} />
      <Route path="/citypage" component={CityPage} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
