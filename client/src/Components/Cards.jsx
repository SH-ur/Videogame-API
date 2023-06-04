import React from 'react'
import Card from '../Components/Card';
import '../Css/Cards.css'
const Cards = ({allGames}) => {
  const gamesList = allGames;

  //A partir de aquí se viene la locura con la paginación de prueba...
  //Enjoy!!!
  return (
    <div>
      <div>
<p>Cards of Games</p>
<div className='cards-list'>
          {gamesList?.map(game=> <Card key={game.id} game={game}/>)}
          </div>
      </div>
    </div>
  )
}

export default Cards