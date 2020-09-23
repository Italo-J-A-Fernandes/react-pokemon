import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';

const MapPage = () => {
  const [pokemons] = useState([]);
  function buscaAPI() {
    console.log('Buscar na API');
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
