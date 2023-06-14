import { useEffect, useState } from 'react';
import { userService } from '../services/users.servises';
import Confirm from './Confirm';

// eslint-disable-next-line react/prop-types
const UserList = ({ sort, page, search }) => {
    const [users, setUsers] = useState([]);
    const [isPopupShown, setIsPopupShown] = useState(false);
    const [deletingIndex, setDeletingIndex] = useState(null)

    const onDeleteHandler = (id) => {
        setIsPopupShown(true);
        setDeletingIndex(id)
    };

    const onConfirm = (value) => {
        if (value) {
            setUsers((prev) => prev.filter((user) => user.id !== deletingIndex));
            setIsPopupShown(false);
        } else {
            setIsPopupShown(false);
        }
        
    }

    useEffect(() => {
        userService.getAll(page, 10, sort, 'desc', search).then((res) => {
            setUsers(res);
        });
    }, [sort, page, search]);

    return (
        <>
            {isPopupShown && <Confirm onConfirm={onConfirm} />}
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
                                <td onClick={() => onDeleteHandler(user.id)}>
                                    X
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default UserList;
