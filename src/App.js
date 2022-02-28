import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { Col, Container, Row } from 'react-bootstrap';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <Container>
        <Row>
          <Col md={4}>
            <TodoForm />
          </Col>
          <Col md={8}>
            <TodoList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
