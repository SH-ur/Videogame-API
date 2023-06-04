//import axios from 'axios';
const { Videogame } = require("../db");

const postGames = async (info) => {
  const { name, description, image, platforms, rating, released, genreID } =
    info;
  try {
    console.log(genreID);
   
    const gameCreate = await Videogame.create({
      name,
      description,
      platforms,
      image,
      released,
      rating,
    });
    console.log(gameCreate);

    await gameCreate.setGenres(genreID);
    console.log(gameCreate);
    //en caso de

    return gameCreate;
  } catch (err) {
    return (
      "Something went wrong creating this game, you should make a quick review on the info. The error was: " +
      err.message
    );
  }
};
module.exports = postGames;
