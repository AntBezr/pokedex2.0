import React from 'react';

const PokeInfo = ({ stats, name, types }) => {
  return (
    <div>
      <article>
        <h1>{name}</h1>
        <div className='pokeTypes'>
          <h3>Type:</h3>
          {types?.map((types) => (types.type.name)).join(' ')}
        </div>
      </article>
      <article>
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