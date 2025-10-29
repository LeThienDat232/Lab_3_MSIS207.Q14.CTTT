import { useState } from 'react';


export default function Login() {
const [formData, setFormData] = useState({ username: '', password: '' });


function handleChange(e) {
const { name, value } = e.target;
setFormData(prev => ({ ...prev, [name]: value }));
}


function handleSubmit(e) {
e.preventDefault();
console.log('Form data submitted:', formData);
}


return (
<form onSubmit={handleSubmit}>
<input
type="text"
name="username"
placeholder="Username"
value={formData.username}
onChange={handleChange}
/>
<input
type="password"
name="password"
placeholder="Password"
value={formData.password}
onChange={handleChange}
/>
<button type="submit">Login</button>
<p>Username preview: {formData.username}</p>
</form>
);
}