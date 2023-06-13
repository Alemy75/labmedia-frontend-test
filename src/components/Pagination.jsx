import { useEffect, useState } from 'react';
import { userService } from '../services/users.servises';

// eslint-disable-next-line react/prop-types
const Pagination = ({ setCurrentPage }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        userService.getPagesCount(10).then((res) => {
            setPages(res);
            console.log(res);
        });
    }, [pages]);

    return (
        <>
            <div>Страница:</div>
            <ul>
                {pages.map((page) => (
                    <div
                        key={page}
                        onClick={() => setCurrentPage(Number(page))}
                    >
                        {page}
                    </div>
                ))}
            </ul>
        </>
    );
};

export default Pagination;
