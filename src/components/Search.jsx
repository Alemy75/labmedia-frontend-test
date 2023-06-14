// eslint-disable-next-line react/prop-types
const Search = ({ setDefault, setSearchValue }) => {
    return (
        <div>
            <input
                type="text"
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <div onClick={setDefault}>Очистить фильтр</div>
        </div>
    );
};

export default Search;
