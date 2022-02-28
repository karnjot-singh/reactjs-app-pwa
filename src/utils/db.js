import Dexie from 'dexie';

export const db = new Dexie('reactTodoDB');

db.version(1).stores({
  todos: `
    ++id,
    taskName,
    dueDate,
    assignedTo`,
});
