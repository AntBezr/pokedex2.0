import '../style/Card.css'

import { Link } from 'react-router-dom';
import React from 'react';
import pokeBall from "../../images/pokeBall.png"

const Card = ({ name, image, type }) => {
  let pokeImage

  if (image.other.dream_world.front_default !== null) {
    pokeImage = image.other.dream_world.front_default

  } else if (image.other.home.front_default !== null) {
    pokeImage = image.other.home.front_default
  }
  else if (image.front_default !== null) {
    pokeImage = image.front_default
  } else {
    pokeImage = pokeBall
  }
  return (
    <div className='card'>
      <img className='image' src={pokeImage} alt={name} />
      <h3 className='name'>{name}</h3>
      <h4>{type}</h4>
      <Link className='seeMore' to={name}>See more...</Link>
    </div>
  );
}

export default Card;