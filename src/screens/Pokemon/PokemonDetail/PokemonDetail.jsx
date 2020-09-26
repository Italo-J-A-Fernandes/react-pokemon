import React from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import Button from '../../../components/Button';
import escudo from '../../../assets/images/shield.png';
import espada from '../../../assets/images/sword.png';
import velo from '../../../assets/images/speed.png';

const PokemonBusca = ({ pokemon, liberar }) => {
  return pokemon ? (
    <div className="pokemon-busca-container">
      <Avatar src={pokemon.sprites.front_default} />
      <div className="infoPokemon infoPokemon--liberar">
        <h1 className="typTitle">{pokemon.name}</h1>
        <section className="dadosBasicos">
          <div className="dadosBasicos__dadosIniciais">
            <h3 className="typLabel">hp</h3>
            <p className="typTitle">
              {pokemon.stats[0].base_stat}/{pokemon.stats[0].base_stat}
            </p>
          </div>
          <div className="dadosBasicos__dadosIniciais">
            <h3 className="typLabel">altura</h3>
            <p className="typTitle">{(pokemon.height / 10).toFixed(1)} m</p>
          </div>
          <div className="dadosBasicos__dadosIniciais">
            <h3 className="typLabel">peso</h3>
            <p className="typTitle">{(pokemon.weight / 10).toFixed(1)} kg</p>
          </div>
        </section>

        <section className="tipos">
          <span className="typSubtitle">Tipo</span>
          {pokemon.types.map((tipo, i) => {
            return <span key={i}>{tipo.type.name}</span>;
          })}
        </section>
        <section className="habilidades">
          <span className="typSubtitle">Habilidades</span>
          <p className="typLabel">
            {pokemon.abilities
              .map((hab) => {
                return hab.ability.name;
              })
              .join(', ')}
          </p>
        </section>
        <section className="estatisticas">
          <span className="typSubtitle">Estatísticas</span>
          <div className="estatisticas__item">
            <p className="typLabel">
              <img src={escudo} alt="" />
              defesa
            </p>
            <p className="typSubtitle">{pokemon.stats[2].base_stat}</p>
          </div>
          <div className="estatisticas__item">
            <p className="typLabel">
              <img src={espada} alt="" />
              ataque
            </p>
            <p className="typSubtitle">{pokemon.stats[1].base_stat}</p>
          </div>
          <div className="estatisticas__item">
            <p className="typLabel">
              <img src={escudo} alt="" />
              defesa especifica
            </p>
            <p className="typSubtitle">{pokemon.stats[4].base_stat}</p>
          </div>
          <div className="estatisticas__item">
            <p className="typLabel">
              <img src={espada} alt="" />
              ataque especifico
            </p>
            <p className="typSubtitle">{pokemon.stats[3].base_stat}</p>
          </div>
          <div className="estatisticas__item">
            <p className="typLabel">
              <img src={velo} alt="" />
              velocidade
            </p>
            <p className="typSubtitle">{pokemon.stats[5].base_stat}</p>
          </div>
        </section>
        <Button onClick={liberar} text="liberar pokemon" />
      </div>
    </div>
  ) : (
    <div className="pokemon-busca-container">
      <h1>Pokemon</h1>
    </div>
  );
};

export default PokemonBusca;
