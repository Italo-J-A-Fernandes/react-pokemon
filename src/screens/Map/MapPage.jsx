import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import PokemonBusca from '../Pokemon/PokemonBusca/PokemonBusca';
import PokemonDatail from '../Pokemon/PokemonDetail/PokemonDetail';

import api from '../../services/api';

const MapPage = () => {
  const [inventario, setInventario] = useState([]);
  const [pokemomBusca, setPokemonBusca] = useState();
  const telasModal = [
    <PokemonBusca resPok={pokemomBusca} capture={() => capPokemon()} />,
    <PokemonDatail pokemon={pokemomBusca} liberar={() => libertPokemon} />,
    <div>Criar Pokemon</div>,
  ];
  const [qModal, setModal] = useState(0);

  function openModal() {
    const modal = document.getElementsByClassName('modal');
    modal[0].classList.remove('closeted');
  }

  function closeModal() {
    const modal = document.getElementsByClassName('modal');
    modal[0].classList.add('closeted');
  }

  async function buscaAPI() {
    if (inventario.length > 5) {
      return;
      // exibir balão de erro
    }
    const max = 807;
    const min = 1;
    const idPokemon = Math.floor(Math.random() * (max - min + 1) + min);
    const pokemon = await api.get(`/pokemon/${idPokemon}`);
    setPokemonBusca(pokemon.data);
    setModal(0);
    openModal();
  }

  async function capPokemon() {
    const novaList = [...inventario, pokemomBusca];
    setInventario(novaList);
    setPokemonBusca();
    closeModal();
  }

  async function libertPokemon(i) {
    console.log(i);
  }

  function addPokemon() {
    setModal(2);
    openModal();
  }

  async function pokemonDatail(index) {
    await setPokemonBusca(inventario[index]);
    setModal(1);
    openModal();
  }

  return (
    <>
      <div className="map">
        <Sidebar itens={inventario} view={pokemonDatail} add={addPokemon} />
        <div className="container-personagem">
          <div className="personagem" onClick={() => buscaAPI()} />
        </div>
        <Modal>{telasModal[qModal]}</Modal>
      </div>
    </>
  );
};

export default MapPage;
