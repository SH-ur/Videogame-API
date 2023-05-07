const axios  =require("axios");
const {Videogame}=require('../db');

 const idGames = async(id)=>{
    if(isNaN(id)){
        const game = await Videogame.findByPk()
        return game;
    }
     const gameBd = (await axios.get(`https://api.rawg.io/api/games?key=48350e2bd900496093e4a63a4ced7e58/${id}`)).data
     return gameBd;
}
module.exports= idGames;
