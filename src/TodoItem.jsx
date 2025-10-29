export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
return (
<li>
<input
type="checkbox"
checked={todo.completed}
onChange={() => toggleTodo(todo.id)}
/>
<span style={{ textDecoration: todo.completed ? 'line-through' : 'none', margin: '0 8px' }}>
{todo.text}
</span>
<button onClick={() => deleteTodo(todo.id)}>Delete</button>
</li>
);
}