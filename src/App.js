import React from "react";
import Footer from "./containers/Footer";
import AddTodo from "./containers/AddTodo";

import TodoList from "./containers/TodoList";
import { Container } from "react-bootstrap";
import SectionTop from "./components/SectionTop.js";
import NavigationSection from "./components/NavigationSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <NavigationSection />
    <Container fluid="false">
      <Row>
        <Col style={{ marginTop: 350 }}>
          <ArrowBackIosIcon style={{ fontSize: "58px" }} />
        </Col>
        <Col xs={10}>
          <SectionTop />
        </Col>
        <Col style={{ marginTop: 350 }}>
          <ArrowForwardIosIcon style={{ fontSize: "58px" }} />
        </Col>
      </Row>

      <AddTodo />
      {/* <VisibleTodoList /> */}
      <TodoList />
      <Footer />
    </Container>
  </div>
);

export default App;
