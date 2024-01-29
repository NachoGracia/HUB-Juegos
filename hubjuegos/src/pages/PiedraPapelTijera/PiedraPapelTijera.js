import { jugada } from "./logicaPPT";

const template = () => `
<div class=contenedor>
<div class=botones>
<button id="btn1">Piedra</button>
<button id="btn2">Papel</button>
<button id="btn3">Tijera</button>
</div>

<div id="resultado"></div>
</div>`;

export const PrintPPT = () => {
  document.querySelector("main").innerHTML = template();
  jugada();
};
