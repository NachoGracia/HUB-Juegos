import { jugada } from "./logicaPPT";

const template = () => `
<h1></h1>

<button id="btn1">Piedra</button>
<button id="btn2">Papel</button>
<button id="btn3">Tijera</button>

<div id="resultado"></div>`;

export const PrintPPT = () => {
  document.querySelector("main").innerHTML = template();

  const botonPiedra = document.getElementById("btn1"); // Busco el boton 1
  // Le asigno un escuchador tipo click
  botonPiedra.addEventListener("click", () => {
    const tiradaJugador = 0;
    const resultado = jugada(tiradaJugador);
    document.getElementById("resultado").innerText = resultado;
  });
};
jugada();
