import './style/PokemonTemplate.css';

import React, { useEffect, useState } from 'react';

import Card from '../components/UI/Card'
import Loader from '../components/UI/Loader';
import RadioBtn from '../components/UI/RadioBtn';
import axios from "axios"

function PokemonTemplate(props) {
  const [pokeData, setData] = useState([])
  const [isLoding, setIsLoding] = useState(false);
  const [searchInput, setSeatchInput] = useState('')
  const [generation, setGeneration] = useState({ "limit": 151, "offset": 0 })
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(1)


  useEffect(() => {
    setIsLoding(true)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`)
      .then(res => {
        const fetches = res.data.results.map((pokemon) => {
          return axios.get(pokemon.url).then((res) => res.data);
        });
        Promise.all(fetches).then((res) => {
          setData(res)
          setIsLoding(false)
        })
      })
  }, [generation])
    ;

  const inputSearchHandler = (e) => {
    setSeatchInput((e.target.value.toLowerCase()))
  }

  const searchFilter = pokeData.filter(pokemon => {
    return pokemon.name.includes(searchInput)

  })



  if (isLoding) {
    return (<Loader />)
  }
  return (
    <div className='main'>
      <div className='search'><h2>Find your pokemon:</h2>
        <input onChange={inputSearchHandler}></input>
      </div>
      <RadioBtn stateGenerationChanger={setGeneration} selectedRadioBtn={selectedRadioBtn} updateSelectedBtn={setSelectedRadioBtn} />


      <div className='template'>
        {searchFilter.map(card => {
          return (

            <Card
              key={card.id}
              name={card.name}
              image={card.sprites}
              type={card.types.map(types =>
                (types.type.name)).join(' ')} />
          )
        })}

      </div>
    </div>
  );
};

export default PokemonTemplate;