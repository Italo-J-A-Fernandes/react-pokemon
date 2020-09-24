import React from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import pokeball from '../../../assets/images/pokeball.png';

const PokemonBusca = ({ resPok, capture }) => {
  return resPok ? (
    <div className="pokemon-busca-container">
      <Avatar src={resPok.sprites.front_default} />
      <div className="infoPokemon">
        <h1>{resPok.name}</h1>
        <section>
          <span>hp</span>
          <span>
            {resPok.stats[0].base_stat}/{resPok.stats[0].base_stat}
          </span>
          <span>altura</span>
          <span>{(resPok.height / 10).toFixed(1)} m</span>
          <span>peso</span>
          <span>{(resPok.weight / 10).toFixed(1)} kg</span>
        </section>
        <h2>Tipo</h2>
        {resPok.types.map((tipo, i) => {
          return <span key={i}>{tipo.type.name}</span>;
        })}
        <h2>Habilidades</h2>
        <span>
          {resPok.abilities
            .map((hab) => {
              return hab.ability.name;
            })
            .join(', ')}
        </span>
      </div>
      <button type="button" onClick={capture}>
        <img src={pokeball} alt="" />
      </button>
    </div>
  ) : (
    <div className="pokemon-busca-container">
      <h1>Pokemon</h1>
    </div>
  );
};

export default PokemonBusca;
