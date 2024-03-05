import { getUser } from "../../global/state/globalState";
// import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";

const template = () => `



  <nav>
  <img
src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saWdodGJ1bGItb2ZmIj48cGF0aCBkPSJNMTYuOCAxMS4yYy44LS45IDEuMi0yIDEuMi0zLjJhNiA2IDAgMCAwLTkuMy01Ii8+PHBhdGggZD0ibTIgMiAyMCAyMCIvPjxwYXRoIGQ9Ik02LjMgNi4zYTQuNjcgNC42NyAwIDAgMCAxLjIgNS4yYy43LjcgMS4zIDEuNSAxLjUgMi41Ii8+PHBhdGggZD0iTTkgMThoNiIvPjxwYXRoIGQ9Ik0xMCAyMmg0Ii8+PC9zdmc+"
alt="switch blanco/negro"
id="white/black"
/>
  
    <img
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1nYW1lcGFkLTIiPjxsaW5lIHgxPSI2IiB4Mj0iMTAiIHkxPSIxMSIgeTI9IjExIi8+PGxpbmUgeDE9IjgiIHgyPSI4IiB5MT0iOSIgeTI9IjEzIi8+PGxpbmUgeDE9IjE1IiB4Mj0iMTUuMDEiIHkxPSIxMiIgeTI9IjEyIi8+PGxpbmUgeDE9IjE4IiB4Mj0iMTguMDEiIHkxPSIxMCIgeTI9IjEwIi8+PHBhdGggZD0iTTE3LjMyIDVINi42OGE0IDQgMCAwIDAtMy45NzggMy41OWMtLjAwNi4wNTItLjAxLjEwMS0uMDE3LjE1MkMyLjYwNCA5LjQxNiAyIDE0LjQ1NiAyIDE2YTMgMyAwIDAgMCAzIDNjMSAwIDEuNS0uNSAyLTFsMS40MTQtMS40MTRBMiAyIDAgMCAxIDkuODI4IDE2aDQuMzQ0YTIgMiAwIDAgMSAxLjQxNC41ODZMMTcgMThjLjUuNSAxIDEgMiAxYTMgMyAwIDAgMCAzLTNjMC0xLjU0NS0uNjA0LTYuNTg0LS42ODUtNy4yNTgtLjAwNy0uMDUtLjAxMS0uMS0uMDE3LS4xNTFBNCA0IDAgMCAwIDE3LjMyIDV6Ii8+PC9zdmc+"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sb2ctb3V0Ij48cGF0aCBkPSJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDQiLz48cG9seWxpbmUgcG9pbnRzPSIxNiAxNyAyMSAxMiAxNiA3Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iOSIgeTE9IjEyIiB5Mj0iMTIiLz48L3N2Zz4="
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

  // const changeColor = document.getElementById("changeColor");
  // changeColor.addEventListener("click", (e) => {
  //   /** en este caso lo que hacemos el generar un color y cambiar el stylo del background del body */
  //   const color = changeColorRGB();
  //   document.body.style.background = color;
  // });

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
