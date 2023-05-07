const axios = require ("axios");
const { Videogame } = require("../db");
const {API_KEY} = process.env;
const gameName = async (name) => {
  console.log(API_KEY);
  try {
    const api = (
      await axios.get(
        `https://api.rawg.io/api/games?key=48350e2bd900496093e4a63a4ced7e58`
      )
    ).data;

    //Parte de la api
    const apiName = api.filter((game) =>
      game.name.toLowerCase().includes(name.toLowerCase())
    );

    //Parte de la BD
    const bdNames = await Videogame.findAll({
      where: { name: name },
    });
    return [...bdNames, ...apiName];
  } catch (err) {
    if (!apiName.length && !bdNames)
    return "Theres no videogame with that name...";
    else return err.message;
} 
};

module.exports = gameName;
