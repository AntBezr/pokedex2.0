import './style/Home.css'

import Button from '../components/UI/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate = useNavigate()

  return (
    <div className='home'>
      <h2> Welcome to our Pokédex Web Application!</h2>
      <div className='wrapper'>
        <Button onClickAction={() => navigate('pokedex')} text={"Get started!"} />
        <div className='textGreeting'>
          <h3>Uncover the Secrets of Pokémon</h3>
          <h4>Step into the world of Pokémon and explore our comprehensive Pokédex. Discover the fascinating details and lore behind each Pokémon species, from their unique abilities and evolutionary paths to their captivating backstories.</h4>
          <h3> Start Your Poké Journey Today!</h3>
          <h4>Begin your adventure with our Pokédex Web Application. Explore, learn, and become the ultimate Pokémon Trainer. The world of Pokémon awaits you!</h4>
          <h3>Get ready to embark on an epic Pokémon journey!</h3>
        </div>
      </div>


    </div>
  );
}

export default Home;