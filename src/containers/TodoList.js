import React from "react";

import PropTypes from "prop-types";
import Todo from "./Todo";
import ThemeSwitcher from "./ThemeSwitcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";
import { Button } from "react-bootstrap";

import { connect } from "react-redux";
import { getReportData } from "../redux/actions/index";

const TodoList = ({ todos, states, getPostReducer, handleClick }) => {
  console.log("todos new********8***", todos);
  console.log("states new************", states);

  return states === {} ? (
    <div>nn</div>
  ) : (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          handleClick("manish");
        }}
      >
        Primary
      </Button>
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
      Manish
      <ul>
        {getPostReducer.map(
          todo => (
            <li>
              {todo.id} =>{todo.title}
            </li>
          )

          //   todo.text
        )}
      </ul>
      <button>Get data </button>
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
    states: state.states,
    getPostReducer: state.getPostReducer
  };
};

const mapDispatchToProps = dispatch => ({
  handleClick: abc => {
    dispatch(getReportData(abc));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
