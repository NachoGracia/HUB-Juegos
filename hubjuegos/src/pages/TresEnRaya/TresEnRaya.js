import "./TresEnRaya.css";

//! CREAR LO QUE PINTA EN EL HTML:

const template = () => `<div class="game-container">
<h1>TRES EN RAYA</h1>
<div class="tic-tac-toe-board" id="board">
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
</div>
<div class="message" id="message">You are X, it's your turn</div>
<button class="reset-button" id="reset">RESET GAME</button>
</div>`;

//! CREADO CON TEMPLATE => innerHTML:

export const PrintTresEnRayaPage = () => {
  document.querySelector("main").innerHTML = template();
};

//! AHORA ESTA FUNCIÓN EXPORT EN BARRIL EN EL INDEX

//! LOGICA JUEGO IMPORTADA ARRIBA
