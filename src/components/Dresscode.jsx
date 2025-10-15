import '../styles/Dresscode.css';
import dresscode from '../assets/dresscode.png';

export function Dresscode () {

    return(

        <section className="dresscode">

            <div className="dresscode__tittle-container">
                <h3 className="dresscode__tittle">CÓDIGO DE VESTIMENTA</h3>
            </div>

            <div className="dresscode__image-container">
                <img src={dresscode} alt="dresscode" className="dresscode__image" />
            </div>

            <div className="dresscode__text-container">
                <p className="dresscode__text-tittle">FORMAL</p>
                <p className="dresscode__text"><strong>( EVITE USAR COLORES ROSAS & BLANCOS )</strong></p>

            </div>

        </section>
    )

};