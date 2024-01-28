import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintPokemonPage,
  printTemplateDashboard,
  PrintTresEnRayaPage,
  PrintPPT,
} from "../pages";

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;

    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    //!  INTRODUCIR EL CASE DE TRES EN RAYA
    case "TresEnRaya":
      PrintTresEnRayaPage();
      break;
    case "Login":
      Login();
      break;
    //! CASE DE PPT
    case "PiedraPapelTijera":
      PrintPPT();
      break;
  }
};
