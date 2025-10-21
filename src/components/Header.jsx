import '../styles/Header.css';
import logo from '../assets/E&J.png';
import apartadoOne from '../assets/apartado-one.png';
import fannyJuan from '../assets/fj.jpeg';
import { Countdown } from './Contdown';

export function Header () {

    const targetDate = new Date('2025-12-31T23:59:59').getTime(); // Fecha objetivo (puedes cambiarla)


    return(

        <header className="header">

            

            <div className="header__bg-container">

             <div className="header__tittle-container">
                <h1 className="header__tittle">NUESTRA BODA</h1>
             </div>

             <div className="header__logo-container">
                <img src={logo} alt="logo" className="header__logo" />
             </div>

             <div className="header__subtittle-container">
                <h2 className="header__subtittle">Esteffany & Juan</h2>
             </div>

             <div className="header__image-container">
                <img src={fannyJuan} alt="couple" className="header__image" />
             </div>

            </div>

           

            <div className="header__text-container">
                <p className="header__text">" La vida nos regaló encontrarnos, y queremos compartir <br></br> contigo la felicidad de unir nuestras vidas. <br></br><br></br> Será un honor contar con tu presencia en este día que quedará <br></br> en nuestro corazón "</p>
            </div>

            <div className="header__date-container">
                <p className="header__date-mounth header__date">Dic</p>
                <p className="header__date-apartadone header__date-apartado"></p>
                <p className="header__date-day header__date">27</p>
                <p className="header__date-apartadotwo header__date-apartado"></p>
                <p className="header__date-year header__date">2025</p>
            </div>

            <div className='countdown'>

               <Countdown targetDate={targetDate}/>

            </div>

            <div className="apartado__image-container">
                <img src={apartadoOne} alt="apartado-one" className="apartado__one" />
            </div>

            
  
        </header>
    )
};