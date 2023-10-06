import axios from "axios";


export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const POST_GAMES = "POST_GAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_ID_DETAILS = "GET_ID_DETAILS";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const FILTERED_BY_GENRE = "FILTERED_BY GENRE";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";

export function postGames(info) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://videogame-app-api.onrender.com/videogames",
        info
      );
      console.log("Salió bien el response: " + response + "!");
      alert("Creado exitosamente");
    } catch (error) {
      console.log(error);
      alert(
        "Hubo problemas creando el game, este es el error: " + error.message
      );
    }
  };
}

export function getAllGames() {
  return async function (dispatch) {
    try {
      const response = await axios("https://videogame-app-api.onrender.com/videogames");
      return dispatch({ type: GET_ALL_GAMES, payload: response.data });
    } catch (err) {
      alert("The error seems to be: " + err.message);
    }
  };
}

export function getGamesByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `https://videogame-app-api.onrender.com/videogames?name=${name}`
      );
      return dispatch({ type: GET_GAMES_BY_NAME, payload: response.data });
    } catch (err) {
      alert("The error was: " + err.message);
    }
  };
}

export function getIdDetails(id) {
  return async function (dispatch) {
    try {
      const response = await axios(`https://videogame-app-api.onrender.com/videogames/${id}`);
      return dispatch({ type: GET_ID_DETAILS, payload: response.data });
    } catch (err) {
      alert("The error its supposed to be" + err.message);
    }
  };
}

export function getAllGenres() {
  return async function (dispatch) {
    try {
      const response = await axios("https://videogame-app-api.onrender.com/genres");
      return dispatch({ type: GET_GENRES, payload: response.data });
    } catch (err) {
      console.log(err.message)
      alert(err.message);
    }
  };
}

//Sección de Filtros
export const filterByGenre = (genre) => {
  return async function (dispatch) {
    console.log(genre);
    try {
      return dispatch({ type: FILTERED_BY_GENRE, payload: genre });
    } catch (err) {
      console.log(err.message);
      
    }
  };
};

//El filtro de orígenes
export const primalFilter = (origin) => {
  return async function (dispatch) {
    console.log(origin);
    return dispatch({type: FILTER_ORIGIN, payload: origin
    })
  }
};

//¡Orden en las Cartas! ¡Orden, por favor!
export const orderNames = (order) => {
  return async function (dispatch) {
   return dispatch({type: ORDER_BY_NAME, payload: order})
  };
};

export const orderRatings= (order2)=>{
    return async function(dispatch){
        try{
return dispatch({type: ORDER_BY_RATING, payload: order2})
        }catch(err){
            alert('Oh, no!!! ' + err.message)
        }
    }
}
