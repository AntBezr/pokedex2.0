import AbilitiesDesc from './AbilitiesDesc';
import React from 'react';

const PokeInfo = ({ pokeData }) => {


  return (
    <div className='pokemonDescription'>
      <h1 className='pokeName'>{pokeData.name}</h1>
      <article>
        <div className='pokeTypes'>
          <h2>Type:</h2>
          <h3> {pokeData.types?.map((types) => (types.type.name)).join(' ')}</h3>
        </div>
        <h2>Stats:</h2>
        {pokeData.stats?.map((stats) => {
          return (
            <h3 key={stats.stat.name}>
              {stats.stat.name}: {stats.base_stat}
            </h3>
          );
        })}
        <h2>Abilities:</h2>

        {pokeData.abilities?.map((abilities) => { return (<AbilitiesDesc key={abilities.ability.name} abilName={abilities.ability.name} url={abilities.ability.url} />) })}

      </article>
    </div>
  );
};

export default PokeInfo;
