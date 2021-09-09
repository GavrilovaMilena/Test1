import './Header.css';
import logo from '../../images/Logo.svg';
import Phone from '../../images/Phone.svg';


function Header() {
    return (
        <section className="header">
            <div className="header__logo">
                <img className='header__logo_image' src={logo} />
                <div className="header__logo_text">
                    <h2 className='header__name'>Helios</h2>
                    <h3 className='header__slogan'>Корректное ведение работ</h3>
                </div>
            </div>
            <div className="header__menu">
                <p className="header__menu_text">Главная</p>
                <p className="header__menu_text">Портфолио</p>
                <p className="header__menu_text">О нас</p>
                <p className="header__menu_text">География</p>
                <p className="header__menu_text">Контакты</p>
            </div>
            <div className="header__number">
                <img className="header__number_image" src={Phone}/>
                <p className="header__number_phone">8(902)272-93-14</p>
            </div>
        </section>
    )
}

export default Header;