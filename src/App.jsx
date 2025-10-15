//IMPORT APP CSS
import "./App.css";
//IMPORT IMAGE APP
import esquinero from "./assets/esquinero.png";
//IMPORT JSX 
import { Modals } from "./components/Modals";
import { Header } from "./components/Header";
import { Ubication } from "./components/Ubication";
import { Itinerario } from "./components/Itinerario";
import { Dresscode } from "./components/Dresscode";
import { Gifttable } from "./components/Gifttable";
import { Confirmation } from "./components/Confirmation";

export function App() {
  return (
    <div className="app">
      <img
        src={esquinero}
        alt="esquinero"
        className="esquinero__one esquinero"
      />
      <img
        src={esquinero}
        alt="esquinero"
        className="esquinero__two esquinero"
      />
      <img
        src={esquinero}
        alt="esquinero"
        className="esquinero__three esquinero"
      />
      <img
        src={esquinero}
        alt="esquinero"
        className="esquinero__four esquinero"
      />
      <Modals />
      <Header />
      <Ubication />
      <Itinerario />
      <Dresscode />
      <Gifttable />
      <Confirmation />
    </div>
  );
}
