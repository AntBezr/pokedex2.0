import React from 'react';
import '../style/Card.css'

const Card=({name, image, type}) =>{
  
  return (
    <div className='card'>
      <img className='image' src={image} alt="sd" />
      <h3 className='name'>{name}</h3>
      <h4>{type}</h4>
    </div>
  );
}

export default Card;