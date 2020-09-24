import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import PokemonBusca from '../Pokemon/PokemonBusca/PokemonBusca';

import api from '../../services/api';

const MapPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemBusca, setBuscaPokemon] = useState();

  function exibeModal() {
    const modal = document.getElementsByClassName('modal');
    modal[0].classList.remove('closeted');
  }

  function fecharModal() {
    const modal = document.getElementsByClassName('modal');
    modal[0].classList.add('closeted');
  }
  async function buscaAPI() {
    if (pokemons.length > 5) {
      return;
      // exibir balão de erro
    }
    const max = 807;
    const min = 1;
    const idPokemon = Math.floor(Math.random() * (max - min + 1) + min);
    const pokemon = await api.get(`/pokemon/${idPokemon}`);
    await setBuscaPokemon(pokemon.data);
    await exibeModal();
  }

  function addPokemon() {
    exibeModal();
  }

  async function capPokemon() {
    const novaList = [...pokemons, pokemBusca];
    setPokemons(novaList);
    await setBuscaPokemon();
    await fecharModal();
  }

  return (
    <>
      <div className="map">
        <Sidebar itens={pokemons} add={addPokemon} />
        <div className="container-personagem">
          <div className="personagem" onClick={() => buscaAPI()} />
        </div>
        <Modal>
          <PokemonBusca resPok={pokemBusca} capture={() => capPokemon()} />
        </Modal>
      </div>
    </>
  );
};

export default MapPage;
