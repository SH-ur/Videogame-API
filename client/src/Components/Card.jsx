import React from 'react'
import {Link} from 'react-router-dom';
import '../Css/Card.css'
const Card = ({game}) => {
  const {id, image, name, genres} = game;
  //console.log(genres);
  return (
    <div className='CardContainer'> 
      <div className='ImageContainer'>
        <Link to={`/details/${id}`}><img className='mainImage' src={image} alt={name}/></Link>
        </div>
    

      <div>
        <h2>
         {name}
        </h2>
      </div>
      <div>
        <h3>
          {genres?.map(genre=> typeof genre=== 'object'? genre.name: genre)}
        </h3>
      </div>
    </div>
  )
}

export default Card