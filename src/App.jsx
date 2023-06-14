import { useState } from 'react';
import UserList from './components/UserList';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import { useDebounce } from './hooks/useDebounce';
import Search from './components/Search';

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
        <>
            <Search setDefault={setDefault} setSearchValue={setSearchValue} />
            <Sort setCurrentSort={setCurrentSort} />
            <UserList
                sort={currentSort}
                page={currentPage}
                search={debounsedValue}
            />
            <Pagination setCurrentPage={setCurrentPage} />
        </>
    );
}

export default App;
