import { useState } from 'react';


export default function TodoForm({ addTodo }) {
const [text, setText] = useState('');


function handleSubmit(e) {
e.preventDefault();
const s = text.trim();
if (!s) return;
addTodo(s);
setText('');
}


return (
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="New todo"
value={text}
onChange={e => setText(e.target.value)}
/>
<button type="submit">Add Todo</button>
</form>
);
}