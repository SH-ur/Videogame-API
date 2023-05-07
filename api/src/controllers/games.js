const {API_KEY} = process.env;
const {Videogame} = require('../db');
const axios = require('axios');

const dbGames = async()=>{
    const bd = await Videogame.findAll();
    const waitnowait = Promise.all(bd);
    return waitnowait;
}
const apiGames = async()=>{
    const api = (await axios.get(`https://api.rawg.io/api/games?key=48350e2bd900496093e4a63a4ced7e58`)).data;
    const apiData = api.results;
    const apiDesc= api.description;
const gameMap = apiData.map(games=>{
    console.log(apiDesc);
   return{ id: games.id,
    name: games.name,
    description: apiDesc.description,
    platforms: games.platforms,
    image: games.image,
    released: games.released,
    rating: games.ratings,
genre: games.genres
   }
})
return gameMap;
}

const getAll = async()=>{
    const dataApi = await apiGames();
    const dataBD = await dbGames();
    return [...dataBD, ...dataApi];
}

module.exports= getAll;