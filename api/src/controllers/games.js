const {API_KEY} = process.env;
const {Videogame, Genre} = require('../db');
const axios = require('axios');
const { mapFunc } = require('../helpers/helpMap');

const dbGames = async()=>{
    const bd = await Videogame.findAll({include:{
        model: Genre,
       // attributes: ['id', 'name']
    }});
    const waitnowait = Promise.all(bd);
    console.log (waitnowait);
    return waitnowait;
}
const apiGames = async()=>{
    try{
    const api = (await axios.get(`https://api.rawg.io/api/games?key=48350e2bd900496093e4a63a4ced7e58`)).data;
  


    const apiNext1 =(await axios.get(`${api.next}`)).data;
   // console.log(apiNext1);
    
    const apiNext2 = (await axios.get(apiNext1.next)).data;
    const apiNext3 = (await axios.get(apiNext2.next)).data;
    const apiNext4 = (await axios.get(apiNext3.next)).data;
    
    const results = api.results;
    //console.log(results);
    const results1 = apiNext1.results;
    const results2 = apiNext2.results;
    const results3 = apiNext3.results;
    const results4 = apiNext4.results;
    const mapeo1 = mapFunc(results);
    //console.log(mapeo1);
    const mapeo2 = mapFunc(results1);
    const mapeo3 = mapFunc(results2);
    const mapeo4 = mapFunc(results3);
    const mapeo5 = mapFunc(results4);

    const arresterDramon = [...mapeo1,...mapeo2, ...mapeo3, ...mapeo4, ...mapeo5];

  
   Promise.all(arresterDramon);
   //console.log(arresterDramon);
   return arresterDramon;}
   catch(error){
    console.log('el error es: ' + error.message)
   }
}



const getAll = async()=>{
    const dataApi = await apiGames();
    console.log(dataApi);
    const dataBD = await dbGames();
    console.log(dataBD);
    return [...dataBD, ...dataApi];
}

module.exports= getAll;