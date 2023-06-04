import React from 'react'
import {Link} from 'react-router-dom';
import '../Css/navBar.css';

const Navbar = () => {
  return (
    <nav className='Nav'>

      <Link className='LandLink' to='/'> Welcome!</Link>
    
     <Link className='homeLink' to='/home'> I want to go HOME!</Link>
      
      
        <Link className='createGLink' to='/create'> Create your game!</Link>
      
      
    </nav>
  )
}

export default Navbar