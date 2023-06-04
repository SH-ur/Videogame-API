import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { getGamesByName } from '../redux/actions'
import '../Css/searchBar.css'
const SearchBar = () => {
  const dispatch = useDispatch();
  
  const [search, setSearch]= useState('');
//console.log(search);
  const handleChange = (e)=>{
    setSearch(e.target.value);
  }
 
const handleSubmit=()=>{
  dispatch(getGamesByName(search));

}
  return (
    <div className='searchBarContainer'>
        <div className='searchContainer2'>
        <input className='inputSearch' placeholder='Search by Name' type='search' value={search} onChange={handleChange}/>
        <button className='buttonSearch' type='submit' onClick={()=> handleSubmit()}> Submit</button>
      </div>
    </div>
  )
}

export default SearchBar