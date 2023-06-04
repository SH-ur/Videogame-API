import React from 'react'
import {useState, useEffect} from 'react';
import{ useDispatch, useSelector} from 'react-redux';
import { postGames, getAllGenres } from '../redux/actions';
import {validation} from '../Components/validation';
import '../Css/form.css'

const Form = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector(state=>state.allGenres)
  
  const [form, setForm] = useState({name:'', image: '', description:'',
platforms:'', released:'', rating:0, genreID:[]});
const [error, setError] = useState({name:'', image: '', description:'',
platforms:'', released:'', rating:''})
console.log(error);
useEffect(()=>{
  dispatch(getAllGenres())
}, [dispatch])

const handleChange=(e)=>{
  const property = e.target.name;
  const value = e.target.value;
  if(property==='genreID'){
    if(value!== 'Select Genre'&&!form.genreID.includes(value)){
setForm((prevData)=>(
  {...prevData, [property]: [...prevData.genreID, value]}
))}
  }else{

    setForm({...form, [property]: value})
    setError(validation({...form, [property]:value}))
  }
}


const handleCloseXD = (genderToRemove)=>{
const filteredGender = form.genreID.filter((gen)=> gen !== genderToRemove);
setForm((prevData)=>({
  ...prevData, genreID: filteredGender,
}))

};
//button Disabled here
const disabled = () => {
  for (let val in error) {
    if (error[val] !== '') {
      return true;
    }
  }
  for (let val in form) {
    if (form[val] === '') {
      return true;
    }
  }
  return false;
};

const resetForm=()=>{
  setForm({name:'', image: '', description:'',
  platforms:'', released:'', rating:0, genreID:[]})
  setError({name:'', image: '', description:'',
  platforms:'', released:'', rating:''})
}
const handleSubmit =(e)=>{
  e.preventDefault();
  dispatch(postGames(form))
  console.log(form);
  resetForm()
  //Also it works with e.target.reset()
}
  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <div> 
        <h2> Create Your Game Rigth Here
                                         
        </h2>
      </div>
    <div>
      <label >Name</label>
      <input type='text' name='name' onChange={handleChange} value={form.name}/>
      {error.name&&<p style={{color:'red'}}> {error.name}</p>}
    </div>
    <div>
      <label>Image</label>
      <input type='text' alt='imagen de juego' name='image' onChange={handleChange} value={form.img}/>
      {error.image&&<p style={{color:'red'}}> {error.image}</p>}
    </div>
    <div>
      <label>Description</label>
      <input type='text' name='description' onChange={handleChange} value={form.description}/>
      {error.description&&<p style={{color:'red'}}> {error.description}</p>}
    </div>
    <div>
      <label>Platforms</label>
      <input type='text' name='platforms' onChange={handleChange} value={form.platforms}/>
      {error.platforms&&<p style={{color:'red'}}> {error.platforms}</p>}
    </div>
    <div>
      <label>Released_at</label>
      <input type='date' name='released' onChange={handleChange} value={form.released}/>
      {error.released&&<p style={{color:'red'}}> {error.released}</p>}
    </div>
    <div>
      <label>Rating</label>
      <input type='number' name='rating' onChange={handleChange} value={form.rating}/>
      {error.rating&&<p style={{color:'red'}}> {error.rating}</p>}
    </div>
    <div>
      <label>Genres</label>
     
      <select onChange={handleChange} name='genreID' value={form.genreID}>
      <option>Select Genre</option>
      {allGenres?.map((genres)=>{
        return(<>
        
        <option value={genres.id} key={genres.id}>{genres.name}</option>
        </>
        )
      })}
      </select>
  
      <div>
     {form.genreID.map((genres)=>(
        <div className='xButtonContainer'> 
        {genres=== 'Select Genre'? null:  <div className='xButton' onClick={()=>{handleCloseXD(genres)}}>
          X
          </div>}
         
        <div className='genContainer'key={genres}  title={genres}>
{genres=== 'Select Genre'? alert('This its not selectable'): genres}
        </div>
        </div>

      ))}

      </div>
    </div>
    <div className='containerOfButton'>
    <button className='buttonSubmitForm' type='submit' disabled={disabled()} >Submit</button>

    </div>
      </form>
  )
}

export default Form