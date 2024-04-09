import { jugada } from "../../utils";
import "./PiedraPapelTijera.css";

const template = () => `
<div id="contenedor">

<div class=botones>
<button id="btn1">Piedra 💎</button>
<button id="btn2">Papel 🧻</button>
<button id="btn3">Tijera ✂</button>
</div>
<div><p id="ordenador"></p></div>

<div class="wrapper">
    <div class="typing-demo">
    <p id="resultado">
    </p>
    
      
    </div>
    
</div>
</div>
</div>`;

export const PrintPPT = () => {
  document.querySelector("main").innerHTML = template();
  jugada();
};
