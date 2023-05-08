import React, {useState, useEffect} from 'react';
import Card from './UI/Card'
import './style/PokemonTemplate.css';
import axios from "axios"
import Loader from './UI/Loader';


function PokemonTemplate(props) {
  const[pokeData, setData] = useState([])
  const[isLoding, setIsLoding] = useState(false);
  const[searchInput, setSeatchInput] = useState('')

  
  useEffect( ()=>{ 
    setIsLoding(true)
     axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then (res=>{
      const fetches = res.data.results.map((pokemon)=>{
        return axios.get(pokemon.url).then((res)=>res.data);
      });
      Promise.all(fetches).then((res)=>{
        setData(res)
        setIsLoding(false)
      })
    })
  },[] )
;

const inputSearchHandler=(e)=>{
  setSeatchInput((e.target.value.toLowerCase()))
}

const searchFilter = pokeData.filter(pokemon=>{
  return pokemon.name.includes(searchInput)

})



if (isLoding){
  return( 
    <Loader/>
    )

}
  return (
<div className='main'>
  <div className='search'><h2>Find your pokemon:</h2>
<input onChange={inputSearchHandler}></input>
</div>

    <div className='template'>  
      {searchFilter.map(card=>{
        return(
         
        <Card 
        key={card.id}
        name={card.name}
        image={card.sprites.other.dream_world.front_default} 
        type={card.types.map(types=>
          (types.type.name)).join(' ')} />
        )
      })}
    
    </div>
    </div>
  );
};

export default PokemonTemplate;