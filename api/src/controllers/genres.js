const axios = require('axios')
const {Genre} = require('../db');

 const genres= async()=>{
    try{
        const api = (await axios.get('https://api.rawg.io/api/genres?key=48350e2bd900496093e4a63a4ced7e58')).data;
        const apiGenre = api.filter(games=> games.genres);
        
        console.log(apiGenre);
    }catch(err){
        return 'The error was: ' + err.message;
    }
}

module.exports=genres;