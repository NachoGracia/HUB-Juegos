import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateTresEnRaya">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/32/Tic_tac_toe.svg"
            alt=" go to tres en raya"
          />
          <h2>TRES EN RAYA</h2>
        </figure>
      </li>
      <li>
        <figure id="navigatePPT">
          <img
            src="https://res.cloudinary.com/diyouj1se/image/upload/v1707145845/hub-juegos/mktxo5u9ig1s8jemsglg.png"
            alt="go to piedra papel tijera"
          />
          <h2>PIEDRA PAPEL TIJERA</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  //!   AÑANDIR EL ESCUCHADOR AL BOTÓN PARA LLEVARME AL TRES EN RAYA

  const navigateTresEnRaya = document.getElementById("navigateTresEnRaya");
  navigateTresEnRaya.addEventListener("click", () => {
    initControler("TresEnRaya");
  });

  //!     AÑADIR ESCUCHADOR AL BOTON PARA LLEVARME AL PPT
  const navigatePPT = document.getElementById("navigatePPT");
  navigatePPT.addEventListener("click", () => {
    initControler("PiedraPapelTijera");
  });

  //! ME HE TRAIDO lA CONSTANTE, BUSCO EN EL TEMPLATE DE ARRIBA Y LE AÑADO LA CLASE "dark"
  /*const cambioBlancoNegro = document.getElementById("containerDashboard");
  containerDashboard.classList.add("dark"); // añado clase .dark
  cambioBlancoNegro.addEventListener("click", () => {
    containerDashboard.classlist.toogle("dark");
  });*/
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();

  document.querySelector("nav").style.display = "flex";

  addEventListeners();

  getInfo();
};
