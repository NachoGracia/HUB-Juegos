import { jugada } from "../../utils";
import "./PiedraPapelTijera.css";

//! CREO TEMPLATE CON BOTONES Y RESULTADO
const template = () => `
<div id="contenedor">

<div class=botones>
<button id="btn1">Piedra 💎</button>
<button id="btn2">Papel 🧻</button>
<button id="btn3">Tijera ✂</button>
</div>
<div><p id="ordenador"></p></div>

<div class="wrapper">
    <div class="typing-demo" id="resultado">
    
      
    </div>
    
</div>
</div>
</div>`;

//! SELECCIONO EN EL DOM Y LE PINTO TEMPLATE, DESPUÉS INVOCO FUNCIÓN DEL JUEGO (EN UTILS, BARRIL)
export const PrintPPT = () => {
  document.querySelector("main").innerHTML = template();
  jugada();
};
