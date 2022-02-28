import { db } from './db';

export function createTodo(taskName, dueDate, assignedTo) {
    db.todos.put({taskName, dueDate, assignedTo})
        .then(() => true)
        .catch(err => {
            alert("Oops!!! " + err)
        });
}

export function getTodos() {
    return db.todos.toArray()
                .then((data) => {
                    return data;
                })
                .catch(err => {
                    alert("Oops!!! " + err)
                })
}