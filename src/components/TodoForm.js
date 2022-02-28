import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { createTodo } from '../utils/helpers';

export const TodoForm = () => {
    var today = new Date();
    today.setHours(today.getHours() - 4)
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState(today.toISOString().split("T")[0]);
    const [assignedTo, setAssignedTo] = useState("");
    const [taskErr, setTaskErr] = useState('');
    const [assignedErr, setAssignedErr] = useState('');
    const [dateErr, setDateErr] = useState('');

    const validateData = (e) => {
        var flag = true;

        if(!/^[a-zA-Z0-9 ]{5,}$/.test(taskName)) {
            flag = false;
            setTaskErr("Please enter task name(only characters, numbers and spaces allowed) and atleast 5 characters")
        } else {
            setTaskErr('');
        }

        if(!/^[a-zA-Z ]{4,}$/.test(assignedTo)) {
            flag = false;
            setAssignedErr("Please enter assignee name(only characters and spaces allowed) and atleast 4 characters")
        } else {
            setAssignedErr('');
        }

        var date = new Date(dueDate.replaceAll('-','/')) 
        
        if( (date === "Invalid Date") || (isNaN(date)) ) {
            flag = false;
            setDateErr("Please enter valid date")
        } else {
            setDateErr('');
        }

        if(flag) {
            saveTodo();
        }
        else {
            e.preventDefault();
        }
    }

    const saveTodo = async () => {
        await createTodo(taskName, dueDate, assignedTo)
    }

    return(
        <Container>
                <Card bg="light">
                    <Card.Header className='h4'>Create a Task</Card.Header>
                    <Card.Body>
                        <Card.Title>Enter Task Details</Card.Title><hr />
                        <Form onSubmit={(e) => validateData(e)}>
                            <Form.Group className="mb-3" controlId="taskName">
                                <Form.Label>Task Name</Form.Label>
                                <Form.Control type="text" placeholder="Task to do"
                                    value={taskName} onChange={(e) => setTaskName(e.target.value) }
                                     />
                                <Form.Text className='text-danger'>
                                        {taskErr}
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="dueDate">
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control type="date" placeholder="Due Date"
                                    value={dueDate} onChange={(e) => setDueDate(e.target.value) } 
                                    min={today.toISOString().split("T")[0]} />
                                    <Form.Text className='text-danger'>
                                            {dateErr}
                                        </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="assignedTo">
                                <Form.Label>Assigned To</Form.Label>
                                <Form.Control type="text" placeholder="Task Assignee"
                                    value={assignedTo} onChange={(e) => setAssignedTo(e.target.value) } />
                                    <Form.Text className='text-danger'>
                                            {assignedErr}
                                        </Form.Text>
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Create Task
                            </Button>
                            <br />
                            <br />
                        </Form>
                    </Card.Body>
                </Card>
        </Container>
    );
}