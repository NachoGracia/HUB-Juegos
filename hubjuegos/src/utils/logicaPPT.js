//! me traigo, los states y de la data el []

import {
  gettiradaOrdenador,
  settiradaOrdenador,
} from "../global/state/logicaPPT.state";
import { opciones } from "../global/data/logicaPPT.data";
//!  EXPORT DE TODA LA LÓGICA AL INDEX DE BARRIL, PARA LLEVARLA A PÁGINA DE JUEGO.

export const jugada = () => {
  opciones; //! viene de data, para comparar posiciones con elección
  let tiradaJugador = 0; //! no const para poderla modificar con click

  const obtenerResultado = () => {
    settiradaOrdenador(); //! viene de state, crea un nº aleatorio entre 0 y 2, para comparar con [] de opciones
    let tiradaOrdenador = gettiradaOrdenador(); //! lo trae de state y hace el random
    console.log("Ordenador:", opciones[tiradaOrdenador]); //! para verlo por consola
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
  //! función para escribir en el div de resultado:

  const mostrarResultado = () => {
    const resultadoMostrado = document.getElementById("resultado"); //! apunto al elemento en el DOM

    const resultado = obtenerResultado(); //! DEL RETURN DE LA FUNCION DE ARRIBA
    console.log(resultado); //! para verlo por consola

    resultadoMostrado.textContent = resultado; //! AÑADO EL TEXTO DEL RETURN EN "RESULTADO" DEL DOM
  };

  //! SELECCIÓN DE ELEMENTOS PINTADOS: LO HE MIRADO DE LA LOGICA DEL 3 EN RAYA
  const eleccionPiedra = document.getElementById("btn1"); //! primer boton será piedra, que en [] será 0
  const eleccionPapel = document.getElementById("btn2"); //! segundo boton será papel, que en [] será 1
  const eleccionTijera = document.getElementById("btn3"); //! tercer boton será tijera, que en [] será 2
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
