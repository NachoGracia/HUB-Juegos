import { jugada } from "../../utils";
import "./PiedraPapelTijera.css";

//! CREO TEMPLATE CON BOTONES Y RESULTADO
const template = () => `
<div class=contenedor>
<div class=botones>
<button id="btn1">Piedra</button>
<button id="btn2">Papel</button>
<button id="btn3">Tijera</button>
</div>

<div id="resultado"></div>
</div>`;

//! SELECCIONO EN EL DOM Y LE PINTO TEMPLATE, DESPUÉS INVOCO FUNCIÓN DEL JUEGO (EN UTILS, BARRIL)
export const PrintPPT = () => {
  document.querySelector("main").innerHTML = template();
  jugada();
};
