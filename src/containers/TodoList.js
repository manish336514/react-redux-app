import React from "react";

import PropTypes from "prop-types";
import Todo from "./Todo";
import ThemeSwitcher from "./ThemeSwitcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";

import { connect } from "react-redux";

const TodoList = ({ todos, states }) => {
  console.log("todos new", todos);
  return states === {} ? (
    <div>nn</div>
  ) : (
    <div>
      {/* <ThemeSwitcher /> */}
      <ul>
        {states.map(
          todo => {
            console.log("todo8888888888888888888", todo.state);
            return <Todo st={todo.key} val={todo.val} />;
          }

          //   todo.text
        )}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log("todsos", state);
  return {
    todos: state.todos,
    states: state.states
  };
};

export default connect(mapStateToProps)(TodoList);
