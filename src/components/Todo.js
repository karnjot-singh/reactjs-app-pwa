import Card from 'react-bootstrap/Card';

export const Todo = ({taskName, dueDate, assignedTo}) => {
    return (
        <Card bg="light" className='todo-card'>
            <Card.Header className='h1'>{taskName}</Card.Header>
            { (dueDate.length>0 && assignedTo.length>0) ? 
            <Card.Body>
                <h4><strong>Due Date:</strong> {dueDate}</h4>
                <h5><strong>Assigned To:</strong> {assignedTo}</h5>
            </Card.Body>
            : 
            <Card.Body>
                <h5>Nothing to do....</h5>
            </Card.Body>
            }
        </Card>
    );
}