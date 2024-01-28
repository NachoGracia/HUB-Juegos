import { getUserData, setUserData } from "../../global/state/globalState";
import "./CardPokemons.css";

export const CardsPokemons = (data) => {
  const appUser = getUserData();

  document.getElementById("galleryPokemon").innerHTML = "";

  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;

    const templateFigure = ` <figure class=${classCustomType} id=${pokemon.id}>
      <img src=${pokemon.image} alt=${pokemon.name} />
      <h2>${pokemon.name}</h2>
      <span class="material-symbols-outlined  ${
        appUser.fav.includes(pokemon.id.toString()) ? "like" : ""
      }"> favorite </span>
    </figure>`;

    document.getElementById("galleryPokemon").innerHTML += templateFigure;

    addListeners(data);
  });
};

const addListeners = (data) => {
  const appUser = getUserData();

  const spanAll = document.querySelectorAll("span");
  spanAll.forEach((span) => {
    span.addEventListener("click", (e) => {
      if (appUser.fav.includes(e.target.parentNode.id)) {
        const appUser = getUserData();

        const newFavArray = [];

        appUser.fav.forEach((id) => {
          if (e.target.parentNode.id != id) newFavArray.push(id);
        });

        setUserData({
          ...appUser,
          fav: newFavArray,
        });

        /** inportante a ese span quitarle la clase like para asi se le quite el rojo */
        span.classList.toggle("like");
      } else {
        /** En caso de no incluir ese id en el arrray de fav del user logado del contesto lo que tenemos que hacer es meter el id de ese figire
         * en el array de fav de los datos de usuario del contesto y de nuevo utilizamos la funcion de set para modificar el estado
         */
        const appUser = getUserData();
        appUser.fav.push(e.target.parentNode.id);
        setUserData(appUser);

        /** En este caso metemos la clase like al elemento que hemos hecho fav, recordar que el metodo toggle lo hace solo el quitar o poner la clase
         * en caso de que la tenga o no
         */
        span.classList.toggle("like");
      }
    });
  });
};
