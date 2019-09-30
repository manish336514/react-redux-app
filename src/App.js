import React from "react";
import Footer from "./containers/Footer";
import AddTodo from "./containers/AddTodo";

import TodoList from "./containers/TodoList";
import { Container } from "react-bootstrap";
import SectionTop from "./components/SectionTop.js";

// import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <Container>
    <SectionTop />
    <AddTodo />
    {/* <VisibleTodoList /> */}
    <TodoList />
    <Footer />
  </Container>
);

export default App;
