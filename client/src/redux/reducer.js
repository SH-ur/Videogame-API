import {
  GET_ALL_GAMES,
  GET_GAMES_BY_NAME,
  GET_GENRES,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
} from "./actions";
import {
  GET_ID_DETAILS,
  POST_GAMES,
  FILTERED_BY_GENRE,
  FILTER_ORIGIN,
} from "./actions";

import  orders  from "./helper";
let initialState = {
  allGames: [],
  gamesBackUp: [],
  gamesById: [],
  allGenres: [],
  filteredStuff: [],
  filteredCopy: [],
  orderedStuff: []
};
export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
        gamesBackUp: action.payload,
      };
    case GET_GAMES_BY_NAME:
      return { ...state, allGames: action.payload };
    case GET_ID_DETAILS:
      return { ...state, gamesById: action.payload };
    case POST_GAMES:
      return { ...state, allGames: action.payload };
    case GET_GENRES:
      return { ...state, allGenres: action.payload };
    case FILTERED_BY_GENRE:
   
      if (action.payload === "0") return { ...state, allGames: state.gamesBackUp };
      console.log(action.payload);

      state.allGames.forEach((game) => {
        if (game.hasOwnProperty("createdInBD")) {
          const updatedGenres = [];
          for (const value of game.genres) {
            updatedGenres.push(value.name ? value.name : value);
          }
          game.genres = updatedGenres;
        }
      });
        const filteredGenre = state.allGames.filter((games) =>
          games.genres.includes(action.payload)
        );
        if (filteredGenre.length === 0)
          alert("No se encontraron filtros para esto");
        return {
          ...state,
          allGames: filteredGenre,
          filteredStuff: filteredGenre,
          
        };
      
    

    case FILTER_ORIGIN:
      if (action.payload === "Gizmo") return { ...state, allGames: state.gamesBackUp };
      
      
      const bdFilter = [...state.gamesBackUp].filter(
        (games) => games.createdInBD === true
      );
      console.log('los de BD: '+ bdFilter)

      const apiFilter = [...state.gamesBackUp].filter(
        (games2) => games2.createdInBD!==true
      );
      console.log('Los de la API '+apiFilter);
      if (action.payload === "API")
        return {
          ...state,
          filteredStuff: [...apiFilter],
          allGames: [...apiFilter],
        
        };
      else if (action.payload === "BD")
        return {
          ...state,
          allGames: [...bdFilter],
          filteredStuff: bdFilter,
        
        };
      break;
    case ORDER_BY_NAME:
      if (action.payload === "Nope")
        return { ...state, allGames: [...state.gamesBackUp], orderedStuff: [] };
     // if (state.filteredStuff.length !== 0) {
     //   //const practiceFilter = state.filteredCopy;
     //   const correctOrd = orders(
     //     [...state.filteredStuff],
     //     action.payload,
     //     "name"
     //   );
//
     //   return { ...state, allGames: [...correctOrd] };
     // }
      const secondOrd = orders([...state.allGames], action.payload, "name");
      return { ...state, allGames: [...secondOrd], banner:1 };

    case ORDER_BY_RATING:
      if (action.payload === "restore")
        return { ...state, allGames: [...state.gamesBackUp] };

     // if (state.filteredStuff.length > 0) {
     //   const rateOrd1 = orders(
     //     [...state.filteredStuff],
     //     action.payload,
     //     "rating"
     //   );
     //   return { ...state, orderedStuff: [...rateOrd1] };
     // }
      const rateOrd2 = orders([...state.allGames], action.payload, "rating");
      return { ...state, allGames: [...rateOrd2] , banner:1};

    default:
      return { ...state };
  }
}
