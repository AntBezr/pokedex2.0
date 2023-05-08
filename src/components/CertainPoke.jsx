import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from './UI/Loader';
import './style/CertainPoke.css'

function CertainPoke(props) {
const params = useParams();
const navigation = useNavigate();
const [isLoding, setIsLoding] = useState(false);
const [pokeData, setData]= useState([]);
const [type, setType]= useState([]);
const [stats, setStats]= useState([]);
const [abilities, setAbil]=useState();



useEffect(()=>{ 
  setIsLoding(true)
  axios.get(`https://pokeapi.co/api/v2/pokemon/${params.certainPoke}`).then((res)=>{
    setData(res.data);
    setType(res.data.types.map(types=>types.type.name).join(' '))
    setStats(res.data.stats)
    const fetches= res.data.abilities.map(abil=>{
      return (
        axios
        .get(abil.ability.url)
        .then(res=>res.data.effect_entries
        .map(effect=>{if(effect.language.name==='en')
          {return (effect.effect)}}
      )))
  })
  Promise.all(fetches).then(res => {
    setAbil(res.join(' '));
  setIsLoding(false)
  })
});
}, [])



if(isLoding){
  return(<Loader/>)
}
  return (
    <div className='aboutPoke'>
      <div className='picture'>
        <h1>{pokeData.name}</h1>
        <img src={pokeData.sprites?.other.dream_world.front_default} alt={pokeData.name} />
      </div>
      <div className='description'>
      <article><h3>Type:</h3> 
        <h4>{type}</h4>
      </article>
      <article>
        <h3>Stats:</h3>
        {stats.map(stats=>{
          return(
          <h4 key={stats.stat.name}>{stats.stat.name}: {stats.base_stat}</h4>)
        })}
         <h5>{abilities}</h5>
      </article>
      
      <button onClick={() => navigation('/pokedex')}>Go back </button></div>
      
    </div>  
  );
}

export default CertainPoke;