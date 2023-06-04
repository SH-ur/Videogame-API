import React from 'react'
import {Link} from 'react-router-dom';
import '../Css/landing.css'
const Landing = () => {
  return (
    <div style={{padding:'0px',backgroundImage:'url(https://www.shutterstock.com/image-vector/neon-sign-video-game-control-600w-1690397086.jpg)', minHeight:'1000px', backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundSize:'cover'}}>

      <div className='buttonContainer'>
        <Link to='/home'><button className='buttonLog' type='button' > Log in </button></Link>
      </div>
    </div>
  )
}

export default Landing