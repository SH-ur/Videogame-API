//import axios from 'axios';
const Videogame = require('../models/Videogame');


const postGames= async(info)=>{
    const{ID, name, description, image, platforms, rating, released, genreID}= info;

    try{

const gameCreate = await Videogame.create({
    id: ID,
    name: name,
    description: description,
    platforms: platforms,
    image: image,
    released: released,
    rating: rating
})

await gameCreate.setGenres(genreID);
return gameCreate;
    } catch(err){
return 'Something went wrong creating this game, you should make a quick review on the info';
    }
}
module.exports= postGames;