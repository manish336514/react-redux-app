import React from "react";

import PropTypes from "prop-types";

const Todo = ({ completed, text, state, name }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {name} =>{state}
  </li>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
