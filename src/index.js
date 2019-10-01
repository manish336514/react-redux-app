import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import todos from "./redux/reducers/todos";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import Root from "./components/Root";

// const store = createStore(todos);

// Redux-Thunk is the most popular middleware used to handle asynchronous actions in Redux.
//  You can read more about middleware in Redux here. ... As you see above, redux-thunk is the
//  most popular one

// applyMiddleware(...middleware) ... The most common use case for middleware is to support asynchronous
//  actions without much boilerplate code or a dependency on a library like Rx. It does so by letting you
//  dispatch async actions in addition to normal actions.

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <Root store={store} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
