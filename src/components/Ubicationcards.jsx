import '../styles/Ubicationcards.css';

export function Ubicationcards ({ card__tittle, card__image, card__place, card__hour, card__location, card__button }) {

    return(

        <div className="cards">
            
            <div className="card__tittle-container">
                <h4 className="card__tittle">{card__tittle}</h4>
            </div>

            <div className="card__image-container">
                <img src={card__image} alt="salon-image" className="card__image" />
            </div>
            
            <div className="card__place-tittle-container card__text">
                <p className="card__place-tittle">"{card__place}"</p>
            </div>
            
            <div className="card__hour-container card__text">
                <p className="card__hour">HORA: {card__hour}</p>
            </div>

            <div className="card__location-container card__text">
                <p className="card__location">LUGAR: {card__location}</p>
            </div>

            <div className="card__button-container card__text">
                <a href={card__button} className="card__button" target='_blank'>UBICACIÓN</a>
            </div>
            


        </div>
    )

};