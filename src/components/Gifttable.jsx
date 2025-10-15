import '../styles/Gifttable.css';
import logoLiverpool from '../assets/liverpool.png';
import logoSears from '../assets/sears.png';

export function Gifttable () {

    return(

        <section className="gifttable">

            <div className="gifttable__tittle-container">
                <h3 className="gifttable__tittle">MESA DE REGALOS</h3>
            </div>

            <div className="gifttable__cards-container">

                <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51807031" target='_blank' className="gifttable__card-liverpool gifttable__card">
                    <img src={logoLiverpool} alt="liverpool-logo" className="gift__logo-liverpool" />
                    <p className="gift__logo-text">Liverpool</p>
                </a>

                <a href="https://www.sears.com.mx/Mesa-de-Regalos/215785/Te-invito-a-mi-Boda---Esteffany-Jareth-&-Juan-" target='_blank' className="gifttable__card">
                    <img src={logoSears} alt="sears-logo" className="gift__logo-sears" />
                </a>

            </div>

            <div className="gifttable__message-container">
                <p className="gifttable__message">(Da click en la mesa de regalos de tu elección)</p>
            </div>

        </section>
    )

};