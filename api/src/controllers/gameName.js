const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;
const { Op } = require("sequelize");
const {mapFunc} = require('../helpers/helpMap');
const gameName = async (name) => {
  console.log(API_KEY);
  try {
    const api = (
      await axios.get(
        `https://api.rawg.io/api/games?key=48350e2bd900496093e4a63a4ced7e58`
      )
    ).data;

    const apiNext1 =(await axios.get(`${api.next}`)).data;
   // console.log(apiNext1);
    
    const apiNext2 = (await axios.get(apiNext1.next)).data;
    const apiNext3 = (await axios.get(apiNext2.next)).data;
    const apiNext4 = (await axios.get(apiNext3.next)).data;
  
    // Propiedad Result de cada page
    const results = api.results;
  
    const results1 = apiNext1.results;
    const results2 = apiNext2.results;
    const results3 = apiNext3.results;
    const results4 = apiNext4.results;

    //Aplicando Helper casero
    const mapeo1 = mapFunc(results);
   
    const mapeo2 = mapFunc(results1);
    const mapeo3 = mapFunc(results2);
    const mapeo4 = mapFunc(results3);
    const mapeo5 = mapFunc(results4);

    const totalGames = [...mapeo1, ...mapeo2, ...mapeo3, ...mapeo4, ...mapeo5];
    //Parte de la api
    
    const apiName = totalGames.filter((game) =>
      game.name.toLowerCase().includes(name.toLowerCase())
    );

    //const apiNameMap = apiName.map(game2=>{
    //  return{
    //    id: game2.id,
    //    name: game2.name,
    //    image: game2.background_image,
    //    released: game2.released,
    //    platforms: game2.platforms?.map(platform=>
    //      { return{id: platform.platform.id, name: platform.platform.name}}),
    //    rating: game2.rating,
    //    genres: game2.genres
    //  }
    //})

   

    //Parte de la BD
    const bdNames = await Videogame.findAll({
      where: { name: { [Op.iLike]: `%${name}%` }
     },
    include: [Genre],
    
    });
    return [...bdNames, ...apiName];
  } catch (err) {
    if (!apiName.length && !bdNames)
      return "Theres no videogame with that name...";
    else return err.message;
  }
};

module.exports = gameName;
