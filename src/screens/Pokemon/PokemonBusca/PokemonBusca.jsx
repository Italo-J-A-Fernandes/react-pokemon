import React from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import Button from '../../../components/Button';
import pokeball from '../../../assets/images/pokeball.png';

const PokemonBusca = ({ resPok, capture }) => {
  return resPok ? (
    <div className="pokemon-busca-container">
      <Avatar src={resPok.sprites.front_default} />
      <div className="infoPokemon infoPokemon--capture">
        <h1 className="typTitle">{resPok.name}</h1>
        <section className="dadosBasicos">
          <div className="dadosBasicos__dadosIniciais">
            <h3 className="typLabel">hp</h3>
            <p className="typTitle">
              {resPok.stats[0].base_stat}/{resPok.stats[0].base_stat}
            </p>
          </div>
          <div className="dadosBasicos__dadosIniciais">
            <h3 className="typLabel">altura</h3>
            <p className="typTitle">{(resPok.height / 10).toFixed(1)} m</p>
          </div>
          <div className="dadosBasicos__dadosIniciais">
            <h3 className="typLabel">peso</h3>
            <p className="typTitle">{(resPok.weight / 10).toFixed(1)} kg</p>
          </div>
        </section>
        <section className="tipos">
          <span className="typSubtitle">Tipo</span>
          {resPok.types.map((tipo, i) => {
            return <p key={i}>{tipo.type.name}</p>;
          })}
        </section>
        <section className="habilidades">
          <span className="typSubtitle">Habilidades</span>
          <p className="typLabel">
            {resPok.abilities
              .map((hab) => {
                return hab.ability.name;
              })
              .join(', ')}
          </p>
        </section>
        <Button
          onClick={capture}
          icon={<img src={pokeball} alt="bola pokemon" />}
        />
      </div>
    </div>
  ) : (
    <div className="pokemon-busca-container">
      <h1>Pokemon</h1>
    </div>
  );
};

export default PokemonBusca;
