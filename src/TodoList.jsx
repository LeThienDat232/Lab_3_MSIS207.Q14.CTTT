import TodoItem from './TodoItem.jsx';


export default function TodoList({ todos, toggleTodo, deleteTodo }) {
return (
<ul>
{todos.map(t => (
<TodoItem key={t.id} todo={t} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
))}
</ul>
);
}