import './index.css';
import UserProfile from './UserProfile.jsx';
import Counter from './Counter.jsx';
import Login from './Login.jsx';
import Card from './Card.jsx';
import Accordion from './Accordion.jsx';


const user1 = {
name: 'Jane Smith',
email: 'jane.smith@example.com',
avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
imageSize: 90,
};
const user2 = {
name: 'John Doe',
email: 'john.doe@example.com',
avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
imageSize: 80,
};


export default function App() {
return (
<>
<Card title="Exercise 3 & 4 — User Profiles">
<UserProfile userData={user1} />
<UserProfile userData={user2} theme="dark" />
</Card>


<Card title="Exercise 5 — Counter (State)">
<Counter />
</Card>


<Card title="Exercise 6 — Login (Controlled)">
<Login />
</Card>


<Card title="Exercise 7 — Accordion (Lifted State)">
<Accordion />
</Card>
</>
);
}