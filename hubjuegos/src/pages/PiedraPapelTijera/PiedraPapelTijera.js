import "./PiedraPapelTijera.css";

const template = () => `
<h1>Juego de Piedra, Papel o Tijera</h1>

<button onclick="playPPT('piedra')">Piedra</button>
<button onclick="playPPT('papel')">Papel</button>
<button onclick="playPPT('tijera')">Tijera</button>

<div id="resultado"></div>`;

/*const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

const playPPT = (jugador) => {
  const tiradaOrdenador = Math.floor(Math.random() * 3);
  const opciones = [piedra, papel, tijera];
  const eleccionOrdenador = opciones[tiradaOrdenador];

  document.getElementById("resultado").innerHTML = `
      Ordenador eligió: ${eleccionOrdenador}<br>
      Jugador eligió: ${jugador}<br>
      Resultado: ${determinarResultado(jugador, eleccionOrdenador)}
    `;
};

const determinarResultado = (jugador, eleccionOrdenador) => {
  if (jugador === eleccionOrdenador) {
    return "¡Empate!";
  } else if (
    (jugador === piedra && eleccionOrdenador === tijera) ||
    (jugador === papel && eleccionOrdenador === piedra) ||
    (jugador === tijera && eleccionOrdenador === papel)
  ) {
    return "¡Jugador gana!";
  } else {
    return "¡Ordenador gana!";
  }
};*/

export const PrintPPT = () => {
  document.querySelector("main").innerHTML = template();
};
