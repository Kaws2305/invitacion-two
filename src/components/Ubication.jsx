import '../styles/Ubication.css';
import { Ubicationcards } from './Ubicationcards';
import apartadoTwo from '../assets/apartado-two.png';

export function Ubication () {

    return(

      <section className="ubication">

        <div className="ubication__tittle-container">
            <h3 className="ubication__tittle">UBICACIÓN</h3>
        </div>

        <div className="ubication__cards-container">

            <Ubicationcards
            card__tittle='MISA'
            card__image='https://buscarmisas.com.mx/wp-content/uploads/2024/01/DCuuV_parroquia-de-san-francisco-de-asis-ciudad-nezahualcoyotl-estado-de-mexico.jpg'
            card__place='PARROQUIA DE SAN FRANCISCO DE ASÍS' 
            card__hour='11:40 AM'
            card__location='S. Juan de Aragón Manzana 020, Gral Vicente Villada, 57710 Cdad. Nezahualcóyotl, Méx.'
            card__button='https://maps.app.goo.gl/bXSiSVX8RzdkmcSF9' />

            <Ubicationcards
            card__tittle='CELEBRACIÓN'
            card__image='https://hotelhuayacan.com/wp-content/uploads/2021/01/huayacan.jpg'
            card__place='HACIENDA SAN JUAN' 
            card__hour='01:30 PM'
            card__location='Av. Independencia 5, Col. La Magdalena Atlicpac, 56525 Los Reyes Acaquilpan, Méx.'
            card__button='https://maps.app.goo.gl/qFKRwQPGgFgvQhNh7' />

        </div>

        <div className="apartado__two-container">
            <img src={apartadoTwo}  alt="apartado-two" className="apartado__two" />
        </div>

      </section>
    )

};