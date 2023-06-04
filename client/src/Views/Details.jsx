import React from 'react'
import { useParams } from 'react-router-dom';
//import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getIdDetails } from '../redux/actions';
import '../Css/Card.css'
const Details = () => {

const dispatch = useDispatch();
  const {id}= useParams();
 // console.log(id);
const gamesById = useSelector(state=>state.gamesById);

const { name, image, description, rating, released, genres, platforms} = gamesById;

useEffect(()=>{
  dispatch(getIdDetails(id)) 
  
}, [dispatch, id])
return (
  <div>Details
         {console.log(genres)}
         {console.log(image)}
      <div>
        
      
        </div>
        <div>
          <h2> ID: {id}</h2>
        </div>
        <div>
          <h2> Name: {name}</h2>
        </div>

        <div>
          <h3><img className='mainImage' src={image} alt={name}/></h3>
          <h3> Platforms: {Array.isArray(platforms)?platforms.map(plat=> plat.name):platforms}</h3>
          <h3> Description: {description}</h3>
          <h4> Released_At: {released}</h4>
          <h4>Rating: {rating}</h4>
          <h4> Genres: {genres?.map((gen)=> gen = gen.name)}</h4>
          {/*<h4> Genres: {Array.isArray(genres)?genres.map(genre=> genre.name): genres}</h4>*/}
        </div>
    </div>
  )
}

export default Details