import s from './Confirm.module.scss'

// eslint-disable-next-line react/prop-types
const Confirm = ({ onConfirm }) => {
    return (
        <div className={s.modal}>
            <div className={s['modal-content']}>
                <div className={s.content}>
                    <span>Вы уверены, что хотите удалить пользователя?</span>
                    <div>
                        <button onClick={() => onConfirm(true)}>Да</button>
                        <button onClick={() => onConfirm(false)}>Нет</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirm;
