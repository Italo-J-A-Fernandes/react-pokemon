import React from 'react';

const TextInput = ({ className, label, placeholder, name, type }) => {
  return (
    <div className={`${className} input__container`}>
      {label && <label className="input__label">{label}</label>}
      <input
        className="input"
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default TextInput;
