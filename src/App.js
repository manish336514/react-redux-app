import React from "react";
import Footer from "./containers/Footer";
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
// import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    {/* <VisibleTodoList /> */}
    <TodoList />
    <Footer />
  </div>
);

export default App;
