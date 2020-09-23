import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/images/close.png';

const Modal = ({ children }) => (
  <div className="modal">
    <div className="modal__content">
      <button
        type="button"
        onClick={(event) => {
          event.target.closest('.modal').classList.add('closeted');
        }}
      >
        <img className="modal__close" src={closeIcon} alt="Fechar" />
      </button>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
