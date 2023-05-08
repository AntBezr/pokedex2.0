import React from 'react';
import '../style/Card.css'
import { Link } from 'react-router-dom';

const Card=({name, image, type}) =>{
  
  return (
    <div className='card'>
      <img className='image' src={image} alt="sd" />
      <h3 className='name'>{name}</h3>
      <h4>{type}</h4>
     <Link className='seeMore' to={name}>See more...</Link>
    </div>
  );
} 

export default Card;