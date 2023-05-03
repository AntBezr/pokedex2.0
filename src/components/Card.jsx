import React from 'react';
import './style/Card.css'

function Card({data}) {

const CardHandler =()=>{
  data.map(pokemon=>{<h2>{pokemon.name}</h2>
})}

  
  return (
    <div className='card'>
   {CardHandler}
    </div>
  );
}

export default Card;