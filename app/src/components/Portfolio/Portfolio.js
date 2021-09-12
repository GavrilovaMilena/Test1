import './Portfolio.css';
import Back from '../../images/Back.svg';
import PortfolioImg from '../../images/PortfolioImg.svg';
import Forward from '../../images/Forward.svg';
import Check from '../../images/Check.svg';


function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Наше портфолио</h3>
            <div className="portfolio__container">
                <button className="portfolio__button">
                    <img className="portfolio__button_back" src={Back} />
                </button>
                <img className="portfolio__img" src={PortfolioImg} />
                <div className="portfolio__form">
                    <h2 className="portfolio__form_title">Ремонт эстакад</h2>
                    <p className="portfolio__form_subtitle">Капитальный ремонт и еще че нибудь напишите а то слишком мало выходит</p>
                    <h3 className="portfolio__form_title-two">Проделанные работы:</h3>

                    <div className="portfolio__form-text">
                        <div className="portfolio__form-text_one">
                            <div className="portfolio__form-text_one-one">
                                <img className="portfolio__ok" src={Check} />
                                <p className='portfolio__p'>Выкопали ямы (незнай зачем)</p>
                            </div>
                            <div className="portfolio__form-text_one-one">
                                <img className="portfolio__ok" src={Check} />
                                <p className='portfolio__p'>Положили рельсы</p>
                            </div>
                        </div>
                        <div className="portfolio__form-text_two">
                            <div className="portfolio__form-text_two-two">
                                <img className="portfolio__ok" src={Check} />
                                <p className='portfolio__p'>Рельсы рельсы, шпалы шпалы</p>
                            </div>
                            <div className="portfolio__form-text_two-two">
                                <img className="portfolio__ok" src={Check} />
                                <p className='portfolio__p'>Ехал поезд запоздалый</p>
                            </div>
                        </div>

                        <button className="portfolio__button_form">
                            <p className="portfolio__button_form-text">Оставить заявку</p>
                            </button>
                    </div>

                </div>
                <button className="portfolio__button">
                    <img className="portfolio__button_forward" src={Forward} />
                </button>
            </div>
        </div>
    )
}

export default Portfolio;