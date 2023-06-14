import s from './Sort.module.scss';

// eslint-disable-next-line react/prop-types
const Sort = ({ setCurrentSort, currentSort }) => {
    return (
        <div className={s.root}>
            <span className={s.label}>Сортировка:</span>
            <span
                className={
                    currentSort === 'registration_date'
                        ? s.active + ' ' + s.item
                        : s.item
                }
                onClick={() => setCurrentSort('registration_date')}>
                Дате регистрации
            </span>
            <span
                className={
                    currentSort === 'rating' ? s.active + ' ' + s.item : s.item
                }
                onClick={() => setCurrentSort('rating')}>
                Рейтингу
            </span>
        </div>
    );
};

export default Sort;
