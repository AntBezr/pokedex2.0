import React from 'react';
import Button from './UI/Button';

const PokeInfo = ({ stats, name, types }) => {
  return (
    <div className='twoArticles'>
        <h1 className='pokeName'>{name}</h1>
      <article>
        <div className='pokeTypes'>
          <h3>Type:</h3>
         <h3> {types?.map((types) =>(types.type.name)).join(' ')}</h3>
        </div>
        <h3>Stats:</h3>
        {stats?.map((stats) => {
          return (
            <h4 key={stats.stat.name}>
              {stats.stat.name}: {stats.base_stat}
            </h4>
          );
        })}
      </article>
    </div>
  );
};

export default PokeInfo;