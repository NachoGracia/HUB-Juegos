export const jugada = () => {
  const opciones = ["piedra", "papel", "tijera"]; // así las posiciones se pueden comparar con la tiradaOrdenador
  let tiradaJugador = 2; // no const para poderla modificar con click

  const tiradaOrdenador = Math.floor(Math.random() * 3); // crear nº aleatorio entre 0 y 2 ( 0, 1 y 2)

  const obtenerResultado = (jugador, ordenador) => {
    jugador = tiradaJugador; //!!!!!!!!!!!!!!       HACE FALTA??
    if (ordenador === jugador) {
      return `Empate`;
    } else if (
      (ordenador === 0 && jugador === 1) ||
      (ordenador === 1 && jugador === 2) ||
      (ordenador === 2 && jugador === 0)
    ) {
      return `Gana el jugador`;
    } else {
      return `Gana el ordenador`;
    }
  };

  //console.log("Jugador:", opciones[tiradaJugador]); // estamos accediento al array en la posición de tiradaJugador
  //console.log("Ordenador:", opciones[tiradaOrdenador]); // lo mismo

  const resultado = obtenerResultado(tiradaJugador, tiradaOrdenador); //entonces aquí se valoran 0 1 y 2
  //console.log(resultado);
};
jugada();
