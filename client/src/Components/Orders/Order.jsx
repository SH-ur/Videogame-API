//YOLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

import React from 'react'
import {useDispatch} from 'react-redux';
import { orderNames, orderRatings } from '../../redux/actions';
import '../../Css/Order.css'
const Order = () => {
    const dispatch = useDispatch();
    const attackOrder = (e)=>{
        const val = e.target.value;
dispatch(orderNames(val));
    }

    const orderThoseRatings = (e)=>{
      const values= e.target.value;
      console.log(values);
      dispatch(orderRatings(values));
    }
  return (
    <div className='navOrder'>
<p> Order by Name </p>
        <select className='selectOrderN' onChange={attackOrder}>
            <option defaultChecked value='Nope'> Come Back!!</option>
            <option value='ASC'> Ascendio</option>
            <option value='DESC'> Decrescendo </option>
        </select>

<p>Order By Ratings</p>
        <select className='selectOrderR' onChange={orderThoseRatings}>
          <option defaultChecked value='restore'> Let's go back!</option>
          <option value='ASC'>Ascendente </option>
          <option value='DESC'> Descendente</option>
        </select>
    </div>
  )
}

export default Order