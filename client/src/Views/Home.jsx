import React from 'react'
import Cards from '../Components/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllGames } from '../redux/actions';
import SearchBar from '../Components/SearchBar';
import Pagination from '../Components/Pagination';
import Filters from '../Components/Filters/Filters'
import Order from '../Components/Orders/Order';
import '../Css/home.css';
const Home = () => {
  const dispatch= useDispatch();
  const allGames = useSelector(state=> state.allGames);
  console.log(allGames)
  //Prototype ensayo de filtros
  const filterG= useSelector(state=> state.filteredStuff);
  console.log(filterG);
  
  const backup= useSelector(state=>state.gamesBackUp);
  console.log(backup)
//Pagination de prueba
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  const [filteredGames, setFilteredGames]= useState([]);
console.log(filteredGames)

  const indexLastGame = currentPage * gamesPerPage;
  const indexFirstGame = indexLastGame - gamesPerPage;

//Esto es para no depender del useEffect en cuanto a los filtros
  let currentGames= filteredGames.slice(indexFirstGame, indexLastGame);
  
//Acá abajo es para llevar la cuenta de que se está cortando en la Paginacion
  
const pagination = (pageNums)=>{setCurrentPage(pageNums)}
  
useEffect(()=>{
  dispatch(getAllGames());
  return()=>{
    console.log('Se desmontó correctamente');
  }
}, [dispatch])
//Teóricamente esto setea la page en 1 al ejecutar  un filtro
useEffect(()=>{
if(allGames.length>0){

    setFilteredGames(allGames);
    setCurrentPage(1)
}
  

}, [filterG, allGames])
//useEffect(()=>{
//  const data = window.localStorage.getItem("currentGames");
//  setCurrentPage(JSON.parse(data));
//
//}, []);

useEffect(()=>{
  window.localStorage.setItem("currentGames", JSON.stringify(currentPage));
}, [currentPage]);
// Hasta aquí el Pagination 


//console.log(allGames);
  
  return (
    <div>
      
      <div>
        <SearchBar/>
      </div>
     <h1 > <Filters/></h1>
      <h1><Order/></h1>
     {currentGames&& <Cards allGames={currentGames}/>}
     <div>
        <Pagination allGames={filteredGames} pagination={pagination} gamesPerPage={gamesPerPage} currentPage={currentPage}/>

      </div>
      </div>
  )
}

export default Home