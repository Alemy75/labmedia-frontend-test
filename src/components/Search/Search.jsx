import s from './Search.module.scss';
import SearchIcon from './../../assets/svg/SearchIcon';
import FilterIcon from '../../assets/svg/FilterIcon';

// eslint-disable-next-line react/prop-types
const Search = ({ setDefault, setSearchValue, searchValue, setCurrentPage }) => {

    const onChangeHandler = (event) => {
        setSearchValue(event.target.value)
        setCurrentPage(1)
    }

    return (
        <div className={s.root + ` shadow`}>
            <div className={s.wrap}>
                <div className={s.input}>
                    <SearchIcon />
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(event) => onChangeHandler(event)}
                        placeholder="Поиск по имени или email"
                    />
                </div>
                <div onClick={() => setDefault()} className={s.filter}>
                    <FilterIcon />
                    Очистить фильтр
                </div>
            </div>
        </div>
    );
};

export default Search;
