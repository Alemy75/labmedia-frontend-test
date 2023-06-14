// eslint-disable-next-line react/prop-types
const Confirm = ({ onConfirm }) => {
    return (
        <div>
            <h1>Вы уверены</h1>
            <div>
                <button onClick={() => onConfirm(true)}>Да</button>
                <button onClick={() => onConfirm(false)}>Нет</button>
            </div>
        </div>
    );
};

export default Confirm;
