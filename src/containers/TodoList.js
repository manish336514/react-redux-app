import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  console.log("todos new", todos);
  return todos === {} ? (
    <div>nn</div>
  ) : (
    <ul>
      {todos.map(
        todo =>
          // <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />

          todo
      )}
      mmm
    </ul>
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
    todos: state
  };
};

export default connect(mapStateToProps)(TodoList);
