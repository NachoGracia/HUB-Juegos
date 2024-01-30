import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";

const template = () => `



  <nav>
  <img
src="https://cdn-icons-png.flaticon.com/512/5261/5261864.png"
alt="switch blanco/negro"
id="white/black"
/>
    <img
      src="https://w7.pngwing.com/pngs/793/136/png-transparent-color-wheel-computer-icons-color-picker-angle-color-ral-colour-standard.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-game-console-game-icon-image_1174023.jpg"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/4400/4400629.png"
      alt="logout"
      id="buttonLogout"
    />
    
  </nav>
`;

const addListeners = () => {
  //! AÑADO EL ESCUCHADOR PARA EL TOGLLE: evennto click

  const cambioBlancoNegro = document.getElementById("white/black"); // apunto al botón:
  cambioBlancoNegro.addEventListener("click", () => {
    document.body.classList.toggle("dark"); //! añadir .dark al css general y asi me cambia fondo.
  });

  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    /** en este caso lo que hacemos el generar un color y cambiar el stylo del background del body */
    const color = changeColorRGB();
    document.body.style.background = color;
  });

  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    // llamamos al initController con el dashboard para que pinte la pagina del dashboard
    initControler("Dashboard");
  });

  //! ----------------> LOGOUT ----------------
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    /** Ahora vamos a empezar a utilizar los estados con sus funciones get y set
     * En este caso primero vamos a traernos el nombre del usuario que esta logado y
     * que se encuentra en el sessionStorage
     * Esto lo hacemos porque es el nombre con el que podemos traer los datos del localStorage
     * Al traernos los datos del localStorage vamos a modificar el objeto y poner el token a false
     * porque es el token lo que nos da el ok o no en nuestra aplicacion
     *
     * Es una simulacion para luego cuando estemos en el back nos sea mucho mas sencillo entender que
     * para las request al back que necesiten autenticacion necesitaremos un token valido.
     */
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);

    /** una vez borrado el currentUser del sessionStorage llamamos al initControler para que renderice el
     * login, aunque si no le hubieramos puesto ningun parametro hubiera hecho la misma accion porque
     * evalua si tenermos currentUser en el sessionStorage
     *
     */
    initControler("Login");
  });
};
//!-----------------------------------------------------------------------------------
//? ------------------------------ 3) La funcion que se exporta y que pinta-----------
//!-----------------------------------------------------------------------------------
export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
