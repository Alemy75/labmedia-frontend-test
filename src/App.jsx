import { useEffect, useState } from 'react';
import { userService } from './services/users.servises';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const data = await userService.getAll;
            setUsers(data);
        }
        fetchUsers()
    }, []);

    return (
        <ul>
            <li>
                {users.map(user => (
                    <div key={user.id}>
                        {user.username}
                    </div>
                ))}
            </li>
        </ul>
    );
}

export default App;
