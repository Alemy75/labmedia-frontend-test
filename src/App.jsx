import { useState } from 'react';
import UserList from './components/UserList/UserList';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import { useDebounce } from './hooks/useDebounce';

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSort, setCurrentSort] = useState('registration_date');
    const [searchValue, setSearchValue] = useState('');

    const debounsedValue = useDebounce(searchValue, 500);

    const setDefault = () => {
        setCurrentPage(1);
        setCurrentSort('registration_date');
        setSearchValue('');
    };

    return (
        <div className="container">
            <h1 className="title">Список пользователей</h1>
            <Search
                setDefault={setDefault}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                setCurrentPage={setCurrentPage}
            />
            <Sort setCurrentSort={setCurrentSort} currentSort={currentSort} />
            <UserList
                sort={currentSort}
                page={currentPage}
                search={debounsedValue}
            />
            <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
}

export default App;
