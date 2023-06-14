import { useEffect, useState } from 'react';
import { userService } from '../../services/users.servises';
import s from './Pagination.module.scss';

// eslint-disable-next-line react/prop-types
const Pagination = ({ setCurrentPage, currentPage }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        userService.getPagesCount(5).then((res) => {
            setPages(res);
            console.log(res);
        });
    }, [pages]);

    return (
        <div className={s.root}>
            <ul>
                {pages.map((page) => (
                    <li
                        className={page == currentPage && s.current}
                        key={page}
                        onClick={() => setCurrentPage(Number(page))}>
                        {page}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
