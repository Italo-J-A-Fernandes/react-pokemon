import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import PokemonBusca from '../Pokemon/PokemonBusca/PokemonBusca';
import PokemonDatail from '../Pokemon/PokemonDetail/PokemonDetail';

import icoLoading from '../../assets/images/searchingTooltip.png';
import icoBusca from '../../assets/images/searchTooltip.png';
import icoErro from '../../assets/images/tooltipError.png';

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
  const toltip = [
    <img className="toltip" src={icoLoading} alt="" />,
    <img className="toltip toltip--erro" src={icoErro} alt="" />,
    <img className="toltip toltip--busca" src={icoBusca} alt="" />,
  ];
  const [qModal, setModal] = useState(0);
  const [qToltip, setToltip] = useState(2);

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
      setToltip(1);
      setTimeout(() => setToltip(2), 2000);
      return;
    }
    setToltip(0);
    const max = 807;
    const min = 1;
    const idPokemon = await Math.floor(Math.random() * (max - min + 1) + min);
    const pokemon = await api.get(`/pokemon/${idPokemon}`);
    setPokemonTemp(pokemon.data);
    setModal(0);
    openModal();
    setToltip(2);
  }

  function capPokemon() {
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
      setToltip(1);
      setTimeout(() => setToltip(2), 2000);
      return;
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
          {qToltip === 0 ? (
            <div className="personagem anime">{toltip[qToltip]}</div>
          ) : (
            <div className="personagem" onClick={() => buscaAPI()}>
              {toltip[qToltip]}
            </div>
          )}
        </div>
        <Modal>{telasModal[qModal]}</Modal>
      </div>
    </>
  );
};

export default MapPage;
