import { useState, useRef } from 'react';
import '../styles/Modals.css';
import musicSong from '../assets/boda.mp3';

export function Modals () {
    // Estado para controlar la visibilidad del modal
    const [isModalVisible, setIsModalVisible] = useState(true);
    // Estado para controlar si la música está sonando
    const [isPlaying, setIsPlaying] = useState(false);
    
    // Crear referencia al elemento de audio
    const audioRef = useRef(null);

    // Función para manejar el click en el texto del modal
    const handleModalClick = () => {
        // Desaparece el modal moviéndolo a la izquierda
        setIsModalVisible(false);
        
        // Reproduce la música cuando se haga clic
        if (audioRef.current) {
            audioRef.current.play();  // Inicia la música
        }
        // Cambiar el estado para mostrar la animación de barras
        setIsPlaying(true);
    };

    // Función para manejar el clic en el botón de pausa/play
    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause(); // Pausa la música
            } else {
                audioRef.current.play();  // Reproduce la música
            }
        }
        setIsPlaying(!isPlaying);  // Alterna el estado de la música
    };

    return (
        <section className="modals">
            {/* Modal con animación para desaparecer */}
            <div className={`modal ${!isModalVisible ? 'modal--hidden' : ''}`}>
                <h1 className="modal__text" onClick={handleModalClick}>
                    EMPEZAR INVITACIÓN
                </h1>
            </div>

            {/* Botón para controlar la música */}
            <div className="button__music" onClick={togglePlayPause}>
                {isPlaying ? (
                    // Mostrar animación de barras cuando la música está reproduciéndose
                    <div className="pause">
                        <div className="bar__music bar__music-one"></div>
                        <div className="bar__music bar__music-two"></div>
                        <div className="bar__music bar__music-three"></div>
                        <div className="bar__music bar__music-four"></div>
                    </div>
                ) : (
                    // Mostrar ícono de play cuando la música está en pausa
                    <div className="play">
                        <i className="bx bxs-music"></i>
                    </div>
                )}
            </div>

            {/* Reproductor de música con ref y autoloop */}
            <audio 
                ref={audioRef}  // Referencia al elemento de audio
                src={musicSong} // Usamos la canción importada
                autoPlay={isPlaying}  // Se reproduce automáticamente cuando se activa
                loop // Se agrega para repetir la canción automáticamente
            />
        </section>
    );
}

