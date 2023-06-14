import { useEffect, useState } from 'react';
import { userService } from '../services/users.servises';

// eslint-disable-next-line react/prop-types
const UserList = ({ sort, page, search }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll(page, 10, sort, 'desc', search).then((res) => {
            setUsers(res);
        });
    }, [sort, page, search]);

    return (
        <table className="iksweb">
            <thead>
                <tr>
                    <th>Никнейм</th>
                    <th>Почта</th>
                    <th>Дата регистрации</th>
                    <th>Рейтинг</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 &&
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.registration_date}</td>
                            <td>{user.rating}</td>
                            <td onClick={() => alert('suck')}>X</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default UserList;
