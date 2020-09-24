import React from 'react';

const Tipo = ({ tipo }) => {
  function traduzir(tipo) {
    switch (tipo) {
      case 'fighting':
        tipo == 'lutador';
        break;

      default:
        tipo == 'normal';
        break;
    }
  }
  return <div className={`tipo tipo--${tipo}`}>{tipo}</div>;
};

export default Tipo;
