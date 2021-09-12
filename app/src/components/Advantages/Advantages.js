import './Advantages.css';
import Money from '../../images/Money.svg'
import Lightbulb from '../../images/Lightbulb.svg'
import Wallet from '../../images/Wallet.svg'
import Eject from '../../images/Eject.svg'
import ThumbsUp from '../../images/ThumbsUp.svg'
import CircleWavyCheck from '../../images/CircleWavyCheck.svg'

function Advantages() {
    return (
        <div className="advantages">
            <h2 className="advantages__title">Преимущества работы с нами</h2>
            <div className="advantages__cards">
                <div className="advantages__cards-row">
                    <div className="advantages__cards-row_card">
                        <img className="advantages__cards-row_card-img" src={Money} />
                        <div className="advantages__card_text">
                            <h2 className="advantages__cards-row_card-title">Экономия стредств</h2>
                            <p className="advantages__cards-row_card-text">Специалисты нашей компании грамотно рассчитываю объем работ и количество затрачиваемых материалов, что позволяет исключить дополнительные расходы на заключительных этапах.</p>
                        </div>
                    </div>
                    <div className="advantages__cards-row_card">
                        <img className="advantages__cards-row_card-img" src={Lightbulb} />
                        <div className="advantages__card_text">
                            <h2 className="advantages__cards-row_card-title">Большой опыт</h2>
                            <p className="advantages__cards-row_card-text">За 2020 год наша компания уложила более 5 километров новых железнодорожных путей и отремонтировала более 30 километров.</p>
                        </div>
                    </div>
                    <div className="advantages__cards-row_card">
                        <img className="advantages__cards-row_card-img" src={Wallet} />
                        <div className="advantages__card_text">
                            <h2 className="advantages__cards-row_card-title">Удобная оплата</h2>
                            <p className="advantages__cards-row_card-text">Постоянный поставщик, сертифицированные материалы. Все сотрудники имеют высокую квалификацию. Работы выполняются современными специализированными инструментами и оборудованием.</p>
                        </div>
                    </div>
                </div>
                <div className="advantages__cards-row_two">
                    <div className="advantages__cards-row_card">
                        <img className="advantages__cards-row_card-img" src={Eject} />
                        <div className="advantages__card_text">
                            <h2 className="advantages__cards-row_card-title">Оперативность</h2>
                            <p className="advantages__cards-row_card-text">Один из ключевых факторов нашей работы. Скорость реагирования — залог бесперебойной работы железнодорожного транспорта.</p>
                        </div>
                    </div>
                    <div className="advantages__cards-row_card">
                        <img className="advantages__cards-row_card-img" src={ThumbsUp} />
                        <div className="advantages__card_text">
                            <h2 className="advantages__cards-row_card-title">Высокий сервис</h2>
                            <p className="advantages__cards-row_card-text">Наша компания открыта для поиска оптимальных решений с целью достижения поставленных клиентами задач.</p>
                        </div>
                    </div>
                    <div className="advantages__cards-row_card">
                        <img className="advantages__cards-row_card-img" src={CircleWavyCheck} />
                        <div className="advantages__card_text">
                            <h2 className="advantages__cards-row_card-title">Качество</h2>
                            <p className="advantages__cards-row_card-text">Для постоянных клиентов существует возможность оплаты в рассрочку. Предлагаем поэтапную оплату или работаем с предоплатой менее 40%.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages;