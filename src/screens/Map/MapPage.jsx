import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import PokemonBusca from '../Pokemon/PokemonBusca/PokemonBusca';
import PokemonDatail from '../Pokemon/PokemonDetail/PokemonDetail';

import icoLoading from '../../assets/images/searchingTooltip.png';

import api from '../../services/api';

const MapPage = () => {
  const [inventario, setInventario] = useState([]);
  const [pokemomTemp, setPokemonTemp] = useState();
  const [pokemonInd, serPokemonInd] = useState();
  const telasModal = [
    <PokemonBusca resPok={pokemomTemp} capture={() => capPokemon()} />,
    <PokemonDatail
      pokemon={pokemomTemp}
      liberar={() => libertPokemon(pokemonInd)}
    />,
    <div>Criar Pokemon</div>,
  ];
  const [qModal, setModal] = useState(0);
  const [loding, setLoding] = useState(false);

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
    setLoding(true);
    const max = 807;
    const min = 1;
    const idPokemon = await Math.floor(Math.random() * (max - min + 1) + min);
    const pokemon = await api.get(`/pokemon/${idPokemon}`);
    setPokemonTemp(pokemon.data);
    setModal(0);
    openModal();
    setLoding(false);
  }

  async function capPokemon() {
    const novaList = [...inventario, pokemomTemp];
    setInventario(novaList);
    setPokemonTemp();
    closeModal();
  }

  function libertPokemon(i) {
    inventario.splice(i, 1);
    setInventario([...inventario]);
    closeModal();
  }

  function addPokemon() {
    if (inventario.length > 5) {
      return;
      // exibir balão de erro
    }
    setModal(2);
    openModal();
  }

  async function pokemonDatail(index) {
    await setPokemonTemp(inventario[index]);
    setModal(1);
    serPokemonInd(index);
    openModal();
  }

  return (
    <>
      <div className="map">
        <Sidebar itens={inventario} view={pokemonDatail} add={addPokemon} />
        <div className="container-personagem">
          {loding ? (
            <>
              <img className="toltip" src={icoLoading} alt="" />
              <div className="personagem anime" />
            </>
          ) : (
            <>
              <div className="personagem" onClick={() => buscaAPI()} />
            </>
          )}
        </div>
        <Modal>{telasModal[qModal]}</Modal>
      </div>
    </>
  );
};

export default MapPage;
