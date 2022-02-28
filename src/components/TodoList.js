import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Todo } from "./Todo";
import { getTodos } from '../utils/helpers';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            const todoList = await getTodos();
            setTodos(todoList);
        }
        fetchTodos();
    }, []);

    return(
        <Row>
            { (todos && todos.length > 0) ? 
                todos.map((todo, index) => <Col md={6} key={index}><Todo taskName={todo.taskName} dueDate={new Date(todo.dueDate.replaceAll('-','/')).toDateString()} assignedTo={todo.assignedTo} /></Col>)
                :
                <Col md={6}><Todo taskName={"No Task is assigned!!!"} dueDate={""} assignedTo={""} /></Col>}
        </Row>
    );
}