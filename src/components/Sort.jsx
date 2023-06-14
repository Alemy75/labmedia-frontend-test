
// eslint-disable-next-line react/prop-types
const Sort = ({setCurrentSort}) => {
  return (
      <div>
          Сортировать по:
          <span onClick={() => setCurrentSort('registration_date')}>Дате</span>
          <span onClick={() => setCurrentSort('rating')}>Рейтингу</span>
      </div>
  );
}

export default Sort