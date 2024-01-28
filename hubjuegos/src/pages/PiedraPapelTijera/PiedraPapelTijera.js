import "./PiedraPapelTijera.css";

const template = () => `
<h1>Juego de Piedra, Papel o Tijera</h1>

<button onclick="playPPT('piedra')">Piedra</button>
<button onclick="playPPT('papel')">Papel</button>
<button onclick="playPPT('tijera')">Tijera</button>

<div id="resultado"></div>`;

export const PrintPPT = () => {
  document.querySelector("main").innerHTML = template();
};
