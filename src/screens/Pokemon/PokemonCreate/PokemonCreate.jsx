import React from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import TextInput from '../../../components/TextInput';
import Dropdown from '../../../components/Dropdown';
import Button from '../../../components/Button';

const PokemonCreate = () => {
  return (
    <div className="pokemon-busca-container">
      <Avatar />
      <div className="infoPokemon">
        <form>
          <section className="cadastro__dadosIniciais">
            <TextInput label="nome" placeholder="nome" name="nome" />
            <TextInput label="hp" placeholder="HP" name="hp" type="number" />
            <TextInput label="peso" placeholder="peso" name="peso" />
            <TextInput label="alturo" placeholder="alturo" name="alturo" />
          </section>
          <section className="cadastro__tipos">
            <span>Tipos</span>
            <Dropdown
              name="tipo"
              options={[
                { value: 1, text: 'Veneno' },
                { value: 2, text: 'Porção' },
              ]}
              multiple
            />
          </section>
          <section className="cadastro__habilidades">
            <span>Habilidades</span>
            <TextInput placeholder="Habilidade 1" name="habilidade1" />
            <TextInput placeholder="Habilidade 2" name="habilidade2" />
            <TextInput placeholder="Habilidade 3" name="habilidade3" />
            <TextInput placeholder="Habilidade 4" name="habilidade4" />
          </section>
          <section className="cadastro_estatisticas">
            <span>Estatísticas</span>
            <TextInput label="defesa" placeholder="00" name="defesa" />
            <TextInput label="ataque" placeholder="00" name="ataque" />
            <TextInput
              label="defesa especial"
              placeholder="00"
              name="defesa_especial"
            />
            <TextInput
              label="ataque especial"
              placeholder="00"
              name="ataque_especial"
            />
            <TextInput label="velocidade" placeholder="00" name="velocidade" />
          </section>
          <Button text="criar pokemon" />
        </form>
      </div>
    </div>
  );
};

export default PokemonCreate;
