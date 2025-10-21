import "../styles/Countdown.css";
import React, { useState, useEffect } from "react";

export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(timer); // Limpiar el intervalo cuando el componente se desmonte
  }, [targetDate]);

  const formatTime = (ms) => {
    const totalSeconds = Math.max(ms / 1000, 0);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (

    <div className="contdown__container">

      <div className="countdown__tittle-container">
        <h3 className="countdown__tittle">FALTAN: </h3>
      </div>

      <div className="countdown__content">

        <div class="countdown__days count">
          <h3 class="countdown__day-time time count_time">
            {days}
          </h3>
          <p class="countdown__day-text count_text">DIAS</p>
        </div>

        <div class="countdown__hours count">
          <h3 class="countdown__hours-time time count_time">
            {hours}
          </h3>
          <p class="countdown__hours-text count_text">HORAS</p>
        </div>

        <div class="countdown__minutes count">
          <h3 class="countdown__minutes-time time count_time">
            {minutes}
          </h3>
          <p class="countdown__minutes-text count_text">MINUTOS</p>
        </div>

        <div class="countdown__seconds count">
          <h3 class="countdown__seconds-time time count_time">
            {seconds}
          </h3>
          <p class="countdown__seconss-text count_text">SEGUNDOS</p>

        </div>

      </div>

    </div>
  );
}
