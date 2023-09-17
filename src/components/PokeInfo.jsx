import AbilitiesDesc from './AbilitiesDesc';
import Button from './UI/Button';
import React from 'react';

const PokeInfo = ({ pokeData }) => {


  return (
    <div className='twoArticles'>
      <h1 className='pokeName'>{pokeData.name}</h1>
      <article>
        <div className='pokeTypes'>
          <h3>Type:</h3>
          <h3> {pokeData.types?.map((types) => (types.type.name)).join(' ')}</h3>
        </div>
        <h3>Stats:</h3>
        {pokeData.stats?.map((stats) => {
          return (
            <h4 key={stats.stat.name}>
              {stats.stat.name}: {stats.base_stat}
            </h4>
          );
        })}
        <h3>Abilities:</h3>

        {pokeData.abilities?.map((abilities, i) => { return (<AbilitiesDesc key={i} abilName={abilities.ability.name} url={abilities.ability.url} />) })}

      </article>
    </div>
  );
};

export default PokeInfo;
