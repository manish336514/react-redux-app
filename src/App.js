import React from "react";
import Footer from "./containers/Footer";
import AddTodo from "./containers/AddTodo";

import TodoList from "./containers/TodoList";
import { Container } from "react-bootstrap";
import SectionTop from "./components/SectionTop.js";
import NavigationSection from "./components/NavigationSection";

// import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <NavigationSection />
    <Container>
      <SectionTop />
      <AddTodo />
      {/* <VisibleTodoList /> */}
      <TodoList />
      <Footer />
    </Container>
  </div>
);

export default App;
