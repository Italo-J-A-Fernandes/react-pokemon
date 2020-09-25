import React from 'react';

const TextInput = ({ className, label, placeholder, name, type, onChange }) => {
  return (
    <div className={`${className} input__container`}>
      {label && <label className="input__label">{label}</label>}
      <input
        className="input"
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
