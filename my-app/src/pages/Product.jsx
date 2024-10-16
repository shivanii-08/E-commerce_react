import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Product() {
    const location=useLocation();
  return (
    <div>
      <div className='container d-flex' style={{marginTop:"10%"}}>
        <div className='col-lg-6'>
            <img src={location.state.img} style={{height:"400px"}} alt=''></img>
        </div>
        <div className='col-lg-6'>
            <h3><b>ID:</b>{location.state.id}</h3>
            <h4><b>Title:</b>{location.state.title}</h4>
            <p><b>Discription:</b>{location.state.desc}</p>
            <h5><b>Categories:</b>{location.state.category}</h5>
            <h3><b>Price</b>{location.state.price}$</h3>
            <p><i>Rating</i>{location.state.rating}</p>
        </div>
      </div>
    </div>
  )
}
