import './style/Home.css'

import Button from '../components/UI/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate = useNavigate()

  return (
    <div className='home'>
      <h1> Do you want to know more about pokemons?</h1>
      <div className='wrapper'>
        <Button onClickAction={() => navigate('pokedex')} text={"Get started!"} />
        <div className='textGreeting'>
          <h2>Begin your adventure with our Pokédex Web Application. Explore, learn, and become the ultimate Pokémon Trainer. The world of Pokémon awaits you! Get ready to embark on an epic Pokémon journey!</h2>
        </div>
      </div>


    </div>
  );
}

export default Home;