import './Preview.css';
import Rectangle2 from '../../images/Rectangle2.svg'
import Form from '../Form/Form'

function Preview() {
    return (
            <div className="preview">
                <img className='preview__image' src={Rectangle2} />
                <div className="preview__text">
                    <h1 className='preview__title'>Услуги по строительству и ремонту железнодорожных путей</h1>
                    <p className='preview__subtitle'>Компания проводит строительные и ремонтные работы на территории более чем 20 субъектов Российской Федерации</p>
                </div>
                <Form />
            </div>
    )
}

export default Preview;