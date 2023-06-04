const axios  =require("axios");
const {Videogame, Genre}=require('../db');

 const idGames = async(id)=>{
    if(isNaN(id)){
        const game = await Videogame.findByPk(id, {include:{
            model:Genre,
        }})
        console.log(game);
        return game;
    }
     const gameAPI = (await axios.get(`https://api.rawg.io/api/games/${id}?key=48350e2bd900496093e4a63a4ced7e58`)).data
console.log(gameAPI);
     const gameObj ={id: gameAPI.id,
        name: gameAPI.name,
        description: gameAPI.description,
        image: gameAPI.background_image,
        rating: gameAPI.rating,
        platforms: gameAPI.platforms?.map(plat=>{
            return {id: plat.platform.id, name: plat.platform.name}
        }),
        released: gameAPI.released,
        genres: gameAPI.genres?.map(genre=>{
            return {id: genre.id, name: genre.name}
        })};
console.log(gameObj.genres);
return gameObj;
}
module.exports= idGames;
