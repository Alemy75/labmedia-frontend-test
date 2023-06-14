import { useEffect, useState } from 'react';
import Confirm from '../components/Confirm/Confirm';
import { userService } from '../services/users.servises';
import s from './UserList.module.scss'
import CrossIcon from '../assets/svg/CrossIcon';

// eslint-disable-next-line react/prop-types
const UserList = ({ sort, page, search }) => {
    const [users, setUsers] = useState([]);
    const [isPopupShown, setIsPopupShown] = useState(false);
    const [deletingIndex, setDeletingIndex] = useState(null);

    const onDeleteHandler = (id) => {
        setIsPopupShown(true);
        setDeletingIndex(id);
    };

    const onConfirm = (value) => {
        if (value) {
            setUsers((prev) =>
                prev.filter((user) => user.id !== deletingIndex)
            );
            setIsPopupShown(false);
        } else {
            setIsPopupShown(false);
        }
    };

    useEffect(() => {
        userService.getAll(page, 5, sort, 'desc', search).then((res) => {
            setUsers(res);
        });
    }, [sort, page, search]);

    return (
        <div className={s.root + ' shadow'}>
            {isPopupShown && <Confirm onConfirm={onConfirm} />}
            <table className="iksweb">
                <thead>
                    <tr>
                        <th>Имя пользователя</th>
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
                                <td className={s.blue}>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    {new Date().toLocaleDateString(
                                        'ru-RU'
                                    )}
                                </td>
                                <td>{user.rating}</td>
                                <td className={s.delete} onClick={() => onDeleteHandler(user.id)}>
                                    <CrossIcon />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
