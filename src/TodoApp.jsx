import { useState } from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';


let nextId = 1;


export default function TodoApp() {
const [todos, setTodos] = useState([
{ id: nextId++, text: 'Learn React', completed: false },
]);


function addTodo(text) {
setTodos(prev => [...prev, { id: nextId++, text, completed: false }]);
}


function toggleTodo(id) {
setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
}


function deleteTodo(id) {
setTodos(prev => prev.filter(t => t.id !== id));
}


return (
<div>
<h2>Todo App</h2>
<TodoForm addTodo={addTodo} />
<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
</div>
);
}