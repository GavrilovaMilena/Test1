import './Geography.css';
import Map from '../../images/Map.svg'

function Geography() {
    return (
        <div className="geography">
            <div className="geography__text">
                <h2 className="geography__text_title">География работ</h2>
                <h3 className="geography__text_subtitle">ООО «Путьремстрой» реализует проекты на всей территории Российской Федерации.</h3>
                <p className="geography__text_about">Компания проводит строительные и ремонтные работы на территории более чем 20 субъектов Российской Федерации, постоянно расширяя географию присутствия на всю территорию страны. Работа компании ведется как в крупных городах областного значения, так и в небольших населенных пунктах. Заказчиками могут быть региональные или федеральные компании, крупные компании из разных сфер деятельности,заинтересованные в осуществлении транспортных проектов.</p>
            </div>
            <div className="geography__image">
                <img className="geography__image_map" src={Map}/>
            </div>
        </div>

    )
}

export default Geography;