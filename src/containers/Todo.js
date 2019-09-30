import React from "react";

import PropTypes from "prop-types";

// const handlechenge = function() {
//   // console.log("st", param);
//   console.log("st");
// };

const Todo = ({ st, val }) => {
  const handlechenge = (st, val) => {
    console.log("The link was clicked.", st, val);
  };
  return (
    <li onClick={() => handlechenge(st, val)}>
      {st} =>{val}
    </li>
  );
};
Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
