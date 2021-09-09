import './Form.css';

function Form() {
    return (
        <div className="form">
            <p className="form__title">Оставьте заявку на <span>бесплатную</span> консультацию</p>
            <div className="form__container_row">
                <div className="form__container">
                    <p className="form__container_name">Имя</p>
                    <input
                        type="text"
                        className="form__input"
                        placeholder="Михаил"
                        required
                        minLength="2"
                        maxLength="20"
                    />
                </div>
                <div className="form__container">
                    <p className="form__container_name">Телефон</p>
                    <input
                        type="number"
                        className="form__input"
                        placeholder="8 (800) 535 35 35"
                        required
                    />
                </div>
                <div className="form__container">
                    <p className="form__container_name">Почта</p>
                    <input
                        type="email"
                        className="form__input"
                        placeholder="company@mail.com"
                        required
                        minLength="2"
                        maxLength="40"
                    />
                </div>
                <button type="submit" className="form__container_button">
                    <p className="form__container_button-text">ОТПРАВИТЬ</p>
                </button>
            </div>
        </div>
    )
}

export default Form;