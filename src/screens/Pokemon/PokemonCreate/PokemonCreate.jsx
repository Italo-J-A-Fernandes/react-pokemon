import React, { useState } from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import TextInput from '../../../components/TextInput';
import Dropdown from '../../../components/Dropdown';
import Button from '../../../components/Button';

const PokemonCreate = ({ create }) => {
  const [nome, setNome] = useState('');
  const [hp, setHp] = useState();
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [tipos, setTipos] = useState();
  const [habilidade1, setHabilidade1] = useState();
  const [habilidade2, setHabilidade2] = useState();
  const [habilidade3, setHabilidade3] = useState();
  const [habilidade4, setHabilidade4] = useState();
  const [defesa, setDefesa] = useState();
  const [ataque, setAtaque] = useState();
  const [defesaEspecial, setDefesaEspecial] = useState();
  const [ataqueEspecial, setAtaqueEspecial] = useState();
  const [velocidade, setVelocidade] = useState();
  const hab = [
    {
      ability: {
        name: habilidade1,
      },
    },
    {
      ability: {
        name: habilidade2,
      },
    },
    {
      ability: {
        name: habilidade3,
      },
    },
    {
      ability: {
        name: habilidade4,
      },
    },
  ];
  function enviarDados() {
    create({
      abilities: hab,
      height: altura,
      name: nome,
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      },
      stats: [
        {
          base_stat: hp,
          effort: 1,
          stat: {
            name: 'hp',
          },
        },
        {
          base_stat: ataque,
          effort: 0,
          stat: {
            name: 'attack',
          },
        },
        {
          base_stat: defesa,
          effort: 0,
          stat: {
            name: 'defense',
          },
        },
        {
          base_stat: ataqueEspecial,
          effort: 0,
          stat: {
            name: 'special-attack',
          },
        },
        {
          base_stat: defesaEspecial,
          effort: 0,
          stat: {
            name: 'special-defense',
          },
        },
        {
          base_stat: velocidade,
          effort: 0,
          stat: {
            name: 'speed',
          },
        },
      ],
      types: [
        {
          type: {
            name: tipos,
          },
        },
      ],
      weight: 40,
    });
  }
  return (
    <div className="pokemon-busca-container">
      <Avatar />
      <div className="infoPokemon">
        <form>
          <section className="cadastro__dadosIniciais">
            <TextInput
              label="nome"
              placeholder="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <TextInput
              label="hp"
              placeholder="HP"
              name="hp"
              type="number"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
            />
            <TextInput
              label="peso"
              placeholder="peso"
              name="peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
            <TextInput
              label="altura"
              placeholder="altura"
              name="altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </section>
          <section className="cadastro__tipos">
            <span>Tipos</span>
            <Dropdown
              name="tipo"
              options={[
                { value: 'Veneno', text: 'Veneno' },
                { value: 'Porção', text: 'Porção' },
              ]}
              value={tipos}
              onChange={(e) => setTipos(e.target.value)}
              multiple
            />
          </section>
          <section className="cadastro__habilidades">
            <span>Habilidades</span>
            <TextInput
              placeholder="Habilidade 1"
              name="habilidade1"
              value={habilidade1}
              onChange={(e) => setHabilidade1(e.target.value)}
            />
            <TextInput
              placeholder="Habilidade 2"
              name="habilidade2"
              value={habilidade2}
              onChange={(e) => setHabilidade2(e.target.value)}
            />
            <TextInput
              placeholder="Habilidade 3"
              name="habilidade3"
              value={habilidade3}
              onChange={(e) => setHabilidade3(e.target.value)}
            />
            <TextInput
              placeholder="Habilidade 4"
              name="habilidade4"
              value={habilidade4}
              onChange={(e) => setHabilidade4(e.target.value)}
            />
          </section>
          <section className="cadastro_estatisticas">
            <span>Estatísticas</span>
            <TextInput
              label="defesa"
              placeholder="00"
              name="defesa"
              value={defesa}
              onChange={(e) => setDefesa(e.target.value)}
            />
            <TextInput
              label="ataque"
              placeholder="00"
              name="ataque"
              value={ataque}
              onChange={(e) => setAtaque(e.target.value)}
            />
            <TextInput
              label="defesa especial"
              placeholder="00"
              name="defesa_especial"
              value={defesaEspecial}
              onChange={(e) => setDefesaEspecial(e.target.value)}
            />
            <TextInput
              label="ataque especial"
              placeholder="00"
              name="ataque_especial"
              value={ataqueEspecial}
              onChange={(e) => setAtaqueEspecial(e.target.value)}
            />
            <TextInput
              label="velocidade"
              placeholder="00"
              name="velocidade"
              value={velocidade}
              onChange={(e) => setVelocidade(e.target.value)}
            />
          </section>
          <Button
            text="criar pokemon"
            onClick={() => enviarDados({ teste: 1 })}
          />
        </form>
      </div>
    </div>
  );
};

export default PokemonCreate;
