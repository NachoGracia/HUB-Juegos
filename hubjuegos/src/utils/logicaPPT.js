import {
  gettiradaOrdenador,
  settiradaOrdenador,
} from "../global/state/logicaPPT.state";
import { opciones } from "../global/data/logicaPPT.data";

export const jugada = () => {
  opciones;
  let tiradaJugador = 0;

  const obtenerResultado = () => {
    settiradaOrdenador();
    let tiradaOrdenador = gettiradaOrdenador();

    console.log("Ordenador:", opciones[tiradaOrdenador]); // para ver tirada por consola
    if (tiradaOrdenador === tiradaJugador) {
      return `Empate !`;
    } else if (
      (tiradaOrdenador === 0 && tiradaJugador === 1) ||
      (tiradaOrdenador === 1 && tiradaJugador === 2) ||
      (tiradaOrdenador === 2 && tiradaJugador === 0)
    ) {
      return `Gana el jugador !`;
    } else {
      return `Gana el ordenador !`;
    }
  };

  const mostrarResultado = () => {
    const resultado = obtenerResultado();
    console.log(resultado); // para ver resultado por consola

    resultadoMostrado.textContent = resultado;
  };

  const mostrarResultadoOrdenador = () => {
    const resultadoMostradoOrdenador = document.getElementById("ordenador");

    resultadoMostradoOrdenador.textContent = `El ordenador ha sacado: ${
      opciones[gettiradaOrdenador()]
    }`;
  };

  const eleccionPiedra = document.getElementById("btn1");
  const eleccionPapel = document.getElementById("btn2");
  const eleccionTijera = document.getElementById("btn3");
  const resultadoMostrado = document.getElementById("resultado");

  eleccionPiedra.addEventListener("click", () => {
    tiradaJugador = 0;
    mostrarResultado();
    mostrarResultadoOrdenador();
  });
  eleccionPapel.addEventListener("click", () => {
    tiradaJugador = 1;
    mostrarResultado();
    mostrarResultadoOrdenador();
  });
  eleccionTijera.addEventListener("click", () => {
    tiradaJugador = 2;
    mostrarResultado();
    mostrarResultadoOrdenador();
  });
};
