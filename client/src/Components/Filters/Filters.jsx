import React from 'react'
import { useDispatch } from 'react-redux';
import { filterByGenre, primalFilter } from '../../redux/actions';
import '../../Css/Filter.css'
const Filters = () => {
    const dispatch = useDispatch();
    
    const filterGenre=(e)=>{
        const values = e.target.value;
  
dispatch(filterByGenre(values))    }



const filterOrigin = (e)=>{
  const val = e.target.value;
 
  dispatch(primalFilter(val));
}
    
  return (
    <div className='filterContainer'>
      <p className='headTitle'>Genre Filter</p>
        <select className='selectGenre' onChange={filterGenre}  id='filterG'  >
            <option defaultChecked value='0'> None </option>
            <option value='Racing'> Racing </option>
            <option value='Shooter'> Shooter </option>
            <option value='Adventure'> Adventure </option>
            <option value='Action'> Action </option>
            <option value='RPG'> RPG </option>
            <option value='Fighting'> Fighting </option>
            <option value='Puzzle'> Puzzle </option>
            <option value='Strategy'> Strategy </option>
            <option value='Arcade'> Arcade </option>
            <option value='Simulation'> Simulation </option>
            <option value='Sports'> Sports </option>
            <option value='Card'> Card</option>
            <option value='Family'> Family </option>
            <option value='Board Games'> Board Games </option>
            <option value='Educational'> Educational</option>
            <option value='Casual'> Casual </option>
            <option value='Indie'> Indie </option>
            <option value='Massively Multiplayer'> Massively Multiplayer </option>
            <option value='Platformer'> Platformer </option>
        </select>

        <p className='headTitle2'>By Origin </p>
        <select className='selectOrigin' onChange={filterOrigin} name='filterOrigin' id='FilterO'>
          <option defaultChecked value='Gizmo'> - </option>
            <option value='BD'> BD</option>
            <option value='API'> API </option>
        </select>
    </div>
  )
}

export default Filters