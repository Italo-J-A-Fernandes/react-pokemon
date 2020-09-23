import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';

import api from '../../services/api';

const MapPage = () => {
  const [pokemons] = useState([]);
  async function buscaAPI() {
    const max = 807;
    const min = 1;
    const idPokemon = Math.floor(Math.random() * (max - min + 1) + min);
    const pokemon = await api.get(`/pokemon/${idPokemon}`);
  }

  function exibeModal() {
    const modal = document.getElementsByClassName('modal');
    modal[0].classList.remove('closeted');
  }

  function addPokemon() {
    exibeModal();
  }
  return (
    <>
      <div className="map">
        <Sidebar itens={pokemons} add={addPokemon} />
        <div className="container-personagem">
          <div className="personagem" onClick={() => buscaAPI()} />
        </div>
        <Modal>
          <div style={{ height: '30rem', width: '30rem' }} />
        </Modal>
      </div>
    </>
  );
};

export default MapPage;
