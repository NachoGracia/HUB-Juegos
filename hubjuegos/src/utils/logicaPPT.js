import {
  gettiradaOrdenador,
  settiradaOrdenador,
} from "../global/state/logicaPPT.state";
import { opciones } from "../global/data/logicaPPT.data";
//!  EXPORT DE TODA LA LÓGICA AL INDEX DE BARRIL, PARA LLEVARLA A PÁGINA DE JUEGO.

export const jugada = () => {
  opciones; // así las posiciones se pueden comparar con la tiradaOrdenador
  let tiradaJugador = 0; //! no const para poderla modificar con click

  const obtenerResultado = () => {
    settiradaOrdenador(); // crear nº aleatorio entre 0 y 2 ( 0, 1 y 2)  //!ANTES ARRIBA Y NO FUNCIONABA?
    let tiradaOrdenador = gettiradaOrdenador();
    console.log("Ordenador:", opciones[tiradaOrdenador]); //! ANTES ABAJO Y NO FUNCIONABA?
    if (tiradaOrdenador === tiradaJugador) {
      return `Empate`;
    } else if (
      (tiradaOrdenador === 0 && tiradaJugador === 1) ||
      (tiradaOrdenador === 1 && tiradaJugador === 2) ||
      (tiradaOrdenador === 2 && tiradaJugador === 0)
    ) {
      return `Gana el jugador`;
    } else {
      return `Gana el ordenador`;
    }
  };

  const mostrarResultado = () => {
    const resultadoMostrado = document.getElementById("resultado"); // apunto al elemento en el DOM

    const resultado = obtenerResultado(); // DEL RETURN DE LA FUNCION DE ARRIBA
    console.log(resultado);

    resultadoMostrado.textContent = resultado; // AÑADO EL TEXTO DEL RETURN EN "RESULTADO" DEL DOM
  };

  //! SELECCIÓN DE ELEMENTOS PINTADOS: LO HE MIRADO DE LA LOGICA DEL 3 EN RAYA
  const eleccionPiedra = document.getElementById("btn1");
  const eleccionPapel = document.getElementById("btn2");
  const eleccionTijera = document.getElementById("btn3");
  const resultadoMostrado = document.getElementById("resultado");
  //! ESCUCHADORES A LOS BOTONES, CON LA CONDICIÓN DEL let tiradajugador.
  eleccionPiedra.addEventListener("click", () => {
    tiradaJugador = 0;
    mostrarResultado();
  });
  eleccionPapel.addEventListener("click", () => {
    tiradaJugador = 1;
    mostrarResultado();
  });
  eleccionTijera.addEventListener("click", () => {
    tiradaJugador = 2;
    mostrarResultado();
  });
};
