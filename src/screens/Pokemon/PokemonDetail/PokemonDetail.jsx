import React from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import Button from '../../../components/Button';

const PokemonBusca = ({ pokemon, liberar }) => {
  return pokemon ? (
    <div className="pokemon-busca-container">
      <Avatar src={pokemon.sprites.front_default} />
      <div className="infoPokemon">
        <h1>{pokemon.name}</h1>
        <section>
          <span>hp</span>
          <span>
            {pokemon.stats[0].base_stat}/{pokemon.stats[0].base_stat}
          </span>
          <span>altura</span>
          <span>{(pokemon.height / 10).toFixed(1)} m</span>
          <span>peso</span>
          <span>{(pokemon.weight / 10).toFixed(1)} kg</span>
        </section>
        <h2>Tipo</h2>
        {pokemon.types.map((tipo, i) => {
          return <span key={i}>{tipo.type.name}</span>;
        })}
        <h2>Habilidades</h2>
        <span>
          {pokemon.abilities
            .map((hab) => {
              return hab.ability.name;
            })
            .join(', ')}
        </span>
      </div>
    </div>
  ) : (
    <div className="pokemon-busca-container">
      <h1>Pokemon</h1>
    </div>
  );
};

export default PokemonBusca;
