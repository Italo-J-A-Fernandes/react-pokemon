import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import PokemonBusca from '../Pokemon/PokemonBusca/PokemonBusca';

import api from '../../services/api';

const MapPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemBusca, setBuscaPokemon] = useState();
  const [modal, setModal] = useState();

  function mostrarModal() {
    switch (modal) {
      case 1:
        return (
          <PokemonBusca resPok={pokemBusca} capture={() => capPokemon()} />
        );
      case 2:
        return <div>Visualizar Pokemon</div>;

      case 3:
        return <div>Criar Pokemon</div>;

      default:
        return (
          <PokemonBusca resPok={pokemBusca} capture={() => capPokemon()} />
        );
    }
  }

  function exibeModal() {
    const modal = document.getElementsByClassName('modal');
    modal[0].classList.remove('closeted');
    mostrarModal();
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
    await setModal(1);
    await exibeModal();
  }

  async function capPokemon() {
    const novaList = [...pokemons, pokemBusca];
    setPokemons(novaList);
    await setBuscaPokemon();
    await fecharModal();
  }

  async function addPokemon() {
    setModal(2);
    await exibeModal();
  }

  async function pokemonDatail() {
    setModal(3);
    await exibeModal();
  }

  return (
    <>
      <div className="map">
        <Sidebar itens={pokemons} view={pokemonDatail} add={addPokemon} />
        <div className="container-personagem">
          <div className="personagem" onClick={() => buscaAPI()} />
        </div>
        <Modal>{mostrarModal()}</Modal>
      </div>
    </>
  );
};

export default MapPage;
