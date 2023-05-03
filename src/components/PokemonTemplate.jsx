import React, {useState, useEffect} from 'react';
import Card from './Card'
import './style/PokemonTemplate.css';
import axios from "axios"


function PokemonTemplate(props) {
  const[pokeData, setData] = useState([])


  
  useEffect( ()=>{ 
     axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then (res=>(setData( res.data.results)))
    .then(console.log(pokeData))},[]
  )
;
  return (
    <div className='template'>
      <h2>Cards will be here</h2>
      <Card data={pokeData}/>
    </div>
  );
};

export default PokemonTemplate;