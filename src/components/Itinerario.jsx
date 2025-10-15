import '../styles/Itinerario.css';
import rings from '../assets/anillos.png';

export function Itinerario () {

    return(
       <section className="itinerario">

        <div className="itinerario__tittle-container">
            <h3 className="itinerario__tittle">ITINERARIO</h3>
        </div>

        <div className="itinerario__content">

            <div className="itinerario__line">

                <div className="itinerario__misa itinerario__items">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-mosque"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21h7v-2a2 2 0 1 1 4 0v2h7" /><path d="M4 21v-10" /><path d="M20 21v-10" /><path d="M4 16h3v-3h10v3h3" /><path d="M17 13a5 5 0 0 0 -10 0" /><path d="M21 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5z" /><path d="M5 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5z" /><path d="M12 2a2 2 0 1 0 2 2" /><path d="M12 6v2" /></svg>
                    
                </div>

                <p className="itinerario__text-misa itinerario__text">MISA <br></br><strong className="itinerario__stron">11:40 AM</strong> </p>

                <div className="itinerario__salon itinerario__items">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-pavilion"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" /><path d="M6 21l0 -9" /><path d="M18 21l0 -9" /><path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" /></svg>
                </div>

                <p className="itinerario__text-reception itinerario__text">RECEPCIÓN <br></br><strong className="itinerario__stron">01:30 PM</strong> </p>
                

                <div className="itinerario__comida itinerario__items">
                    <img src={rings} alt="" className="rings" />
                </div>

                <p className="itinerario__text-eat itinerario__text">BODA CIVIL   <br></br><strong className="itinerario__stron">02:20 PM</strong> </p>

                <div className=" itinerario__baile itinerario__items">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-glass-champagne"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 21h6" /><path d="M12 16v5" /><path d="M12 5m-4 0a4 2 0 1 0 8 0a4 2 0 1 0 -8 0" /><path d="M8 5c0 6.075 1.79 11 4 11s4 -4.925 4 -11" /></svg>
                </div>

                <p className="itinerario__text-brindis itinerario__text">BRINDIS<br></br><strong className="itinerario__stron">05:00 PM</strong> </p>

            </div>

        </div>


       </section>
    )

};